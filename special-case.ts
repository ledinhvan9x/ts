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

interface A {
  name: string;
}

type B = {
  age: number;
};

type C = A | B; // union can between type - type / interface - interface / type - interface => only left side must be type

type Role = "admin" | "user";

type Permissions = Record<Role, boolean>; // { admin: boolean, user: boolean } => required both

type PermissionMap = {
  [key: string]: boolean; // or boolean | string
}; // right side is only have exact type or union type, if add one type make error right away
