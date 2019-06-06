// 5 - mapped types

export type Partial<T> = {
  [prop in keyof T]?: T[prop];
};















// Practical use: partial parameters
export interface Book {
  id: string;
  title: string;
  author: string;
}

export function findBook(queryParams: Partial<Book>): Book | undefined {
  // query the database
}

findBook({ id: '123' })























export function withDefaultParams<TParams, TResult>(
  fn: (params: TParams) => TResult,
  defaultParams: TParams,
) {
  return (params: Partial<TParams> = {}) => fn({ ...defaultParams, ...params });
}

const fn = withDefaultParams((arg: { type: string }) => 1, { type: 'noop' })

fn()
