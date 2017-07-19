declare module '*.svg' {
	const svg: string;
	export = svg;
}

declare module '*.scss' {
	const css: {
		[key: string]: string
	};
	export = css;
}