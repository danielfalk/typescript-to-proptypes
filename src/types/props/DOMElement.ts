import { Node } from '../nodes/baseNodes';

const typeString = 'DOMElementNode';

interface DOMElementNode extends Node {
	optional?: boolean;
}

export function DOMElementNode(optional?: boolean): DOMElementNode {
	const result: DOMElementNode = {
		type: typeString,
	};
	if (optional !== undefined) {
		result.optional = optional;
	}
	return result;
}

export function isDOMElementNode(node: Node): node is DOMElementNode {
	return node.type === typeString;
}
