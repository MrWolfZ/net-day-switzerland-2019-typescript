// 6 - conditional types

interface Boxed<T> {
  __boxed: '';
  value: T;
}

type Unboxed<T> = T extends Boxed<infer U> ? U : T;

type UnboxedString = Unboxed<string>;
type UnboxedBoxedString = Unboxed<Boxed<string>>;
