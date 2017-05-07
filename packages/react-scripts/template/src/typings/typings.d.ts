declare module '*.css' {
	const value: {
		[key: string]: string
	};
	export = value;
}

declare module '*.svg' {
	const svg: string;
	export = svg;
}