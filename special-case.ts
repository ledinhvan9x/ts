type A = {
  value: string;
};

type B = {
  value: number;
};

type C = A & B; // string & number => never
// with interface: Error

type I = NonNullable<string | number | null | undefined>
// string | number => not null and not undefined

type Fn = (name: string, age: number) => boolean

type J = Parameters<Fn>
// [name: string, age: number] => Tuple type

type K = ReturnType<Fn>
// boolean => depends on return type in Fn
