export function Foo(props: FooProps): JSX.Element;
export default Foo;

export type FooProps = {
	stringThatsOptional?: string;
	maybeString: string | undefined;
	nullableString: string | null;
	maybeNullableString: string | null | undefined;
};
