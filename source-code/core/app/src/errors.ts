export class InvalidConfigError extends Error {
	constructor(message: string, options: ErrorOptions) {
		super(message, options)
		this.name = "InvalidConfigError"
	}
}

export class ConfigJSONSyntaxError extends Error {
	constructor(message: string, options: ErrorOptions) {
		super(message, options)
		this.name = "ConfigJSONSyntaxError"
	}
}

export class ConfigPathNotFoundError extends Error {
	constructor(message: string, options: ErrorOptions) {
		super(message, options)
		this.name = "ConfigPathNotFoundError"
	}
}

export class PluginSaveMessagesError extends Error {
	constructor(message: string, options: ErrorOptions) {
		super(message, options)
		this.name = "PluginSaveMessagesError"
	}
}

export class PluginLoadMessagesError extends Error {
	constructor(message: string, options: ErrorOptions) {
		super(message, options)
		this.name = "PluginLoadMessagesError"
	}
}

/**
 * Error when no package provides the API to handle messages.
 */
export class NoPluginProvidesLoadOrSaveMessagesError extends Error {
	constructor() {
		super(
			"It seems you did not install any plugin that handles messages. Please add one to make inlang work. See https://inlang.com/documentation/plugins/registry.",
		) // TODO: check if link is correct
		this.name = "NoPluginProvidesLoadOrSaveMessagesError"
	}
}
