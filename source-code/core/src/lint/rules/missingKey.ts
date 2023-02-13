import type { Context } from '../context.js'
import { createRule } from '../rule.js'

export const missingKeyRule = createRule('inlang.missingKey', 'error', () => {
	let context: Context
	let referenceLanguage: string

	return {
		initialize: (args) => {
			context = args.context
			referenceLanguage = args.referenceLanguage
		},
		visitors: {
			Resource: ({ target }) => {
				if (target && target.languageTag.name === referenceLanguage) return 'skip'
			},
			Message: ({ target, reference }) => {
				if (!target && reference) {
					context.report({
						node: reference,
						message: `Message with id '${reference.id.name}' missing`
					})
				}
			}
		},
	}
})