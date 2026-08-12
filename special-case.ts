type A = {
  value: string;
};

type B = {
  value: number;
};

type C = A & B; // string & number => never
// with interface: Error
