export type Result<TSuccess = void, TFailure = never> = TSuccess | Failure<TFailure>;

export interface Failure<TFailure = never> {
  type: 'failure';
  failure: TFailure;
}

export function matchResult<TResult, TSuccess = never, TFailure = never>(
  result: Result<TSuccess, TFailure>,
  onSuccess: (value: TSuccess) => TResult,
  onFailure: (value: TFailure) => TResult,
): TResult {
  return isFailure(result) ? onFailure(result.failure) : onSuccess(result);
}

export function isFailure<TFailure>(result: Result<any, TFailure>): result is Failure<TFailure> {
  return result.type === 'failure';
}

export function failure(): Failure;
export function failure<TFailure>(value: TFailure): Failure<TFailure>;
export function failure<TFailure>(value?: TFailure): Failure<TFailure> {
  return {
    type: 'failure',
    failure: value!,
  };
}
