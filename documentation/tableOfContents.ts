import { RequiredFrontmatter } from "@inlang/website/src/services/markdown/index.js";

/**
 * The frontmatter schema used to validate the markdown files in this directory.
 */
export const FrontmatterSchema = RequiredFrontmatter;

/**
 * The table of contents split by categories.
 */
export const tableOfContents: Record<string, string[]> = {
	Overview: [
		// @ts-ignore
		(await import("./introduction.md?raw")).default,
		// @ts-ignore
		(await import("./design-principles.md?raw")).default,
		// @ts-ignore
		(await import("./breaking-changes.md?raw")).default,
	],
	Guide: [
		// @ts-ignore
		(await import("./getting-started.md?raw")).default,
		(await import("./building-on-inlang.md?raw")).default,
	],
	Reference: [],
	RFCs: [
		(await import("../rfcs/001-core-architecture.md?raw")).default,
		(await import("../rfcs/002-tech-stack.md?raw")).default,
	],
};
