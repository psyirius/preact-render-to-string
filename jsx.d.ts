import { VNode } from 'preact';

interface Options {
	jsx?: boolean;
	xml?: boolean;
	pretty?: boolean | string;
	shallow?: boolean;
	functions?: boolean;
	functionNames?: boolean;
	skipFalseAttributes?: boolean;
}

export default function render(
	vnode: VNode,
	context?: any,
	options?: Options
): string;
