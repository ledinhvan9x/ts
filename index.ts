let x: string | number = 'hi';

// need to check type before use (same idea as unknown)
if (typeof x === "string") {
  x.toUpperCase();
}

interface User {
  id: number;
  name: string;
}

type UserName = User["name"]; // string

const permissions = [
  "user:create",
  "user:update",
  "user:delete",
] as const; // readonly array + exact value (not string at this case)

type Permission = typeof permissions[number];

interface User {
  id: number;
  name: string;
  email: string;
}

type UserKey = keyof User;

// same as: type UserKey = "id" | "name" | "email";

const user = {
  id: 1,
  name: "John",
  email: "john@test.com"
};

type B = typeof user;

// same as: type B = { id: number; name: string; email: string };

function identity<T>(input: T): T {
    return input
}

function getLength<T extends { length: number }>(value: T) {
  return value.length;
}
// <T extends { length: number }> mean: T must satisfy this shape (constraint).

type Resp<T> = {
  data: T;
  status: number;
}; // Generic can use with type
interface ApiResponse<T> {
  data: T;
  message: string;
} // Generic can use with interface
class Store<T> {
  private value: T;

  set(value: T) {
    this.value = value;
  }

  get(): T {
    return this.value;
  }
} // Generic can use with class

// Exclude and Extract (keep matching): work with union types.
type Status = "success" | "error" | "loading";
type ActiveStatus = Exclude<Status, "loading">;

type StatusExtract = "success" | "error" | "loading";
type ResultStatus = Extract<Status, "success" | "error">;

type MyPartial<User> = {
  [K in keyof User]?: User[K]
}
// keyof return "id" | "name" => [K in "id" | "name"] => loop through 2 keys (K is "id" and "name")
// note: only apply shallow

type ReadonlyExample<T> = {
  readonly [K in keyof T]: T[K]
}

type S = "success" | "error";

type E = `${S}Changed`;


