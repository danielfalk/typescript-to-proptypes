import { Node } from './baseNodes';

const typeString = 'PropTypeNode';

export interface PropTypeNode extends Node {
	name: string;
	jsDoc?: string;
	propType: Node;
	filenames: Set<string>;
	/**
	 * @internal
	 */
	$$id: number | undefined;
}

export function propTypeNode(
	name: string,
	jsDoc: string | undefined,
	propType: Node,
	filenames: Set<string>,
	id: number | undefined
): PropTypeNode {
	const result: PropTypeNode = {
		type: typeString,
		name,
		propType,
		filenames,
		$$id: id,
	};
	if (jsDoc !== undefined) {
		result.jsDoc = jsDoc;
	}
	return result;
}

export function isPropTypeNode(node: Node): node is PropTypeNode {
	return node.type === typeString;
}
