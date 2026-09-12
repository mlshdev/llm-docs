> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/respond(to:options:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/respond(to:options:))

# respond(to:options:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Produces a response to a prompt.

## Declaration

```swift
@discardableResult nonisolated(nonsending) final func respond(to prompt: Prompt, options: GenerationOptions = GenerationOptions()) async throws -> LanguageModelSession.Response<String>
```

## Parameters

- `prompt`: A prompt for the model to respond to.
- `options`: Options that control how tokens are sampled from the distribution the model produces.

<a id="return-value"></a>

## Return Value

A string composed of the tokens produced by sampling model output.

## Mentioned In

- [Optimizing key-value caching in language model sessions](../optimizing-key-value-caching-in-language-model-sessions.md)
- [Composing dynamic sessions with instructions and profiles](../composing-dynamic-sessions-with-instructions-and-profiles.md)
- [Running a Core AI model in a Foundation Models session](../running-a-core-ai-model-in-a-foundation-models-session.md)
- [Supporting languages and locales with Foundation Models](../supporting-languages-and-locales-with-foundation-models.md)

## See Also

### Generating a response

- [isResponding](isresponding.md): A Boolean value that indicates whether a response is being generated.
- [respond(options:prompt:)](respond%28options_prompt_%29.md): Produces a response to a prompt.
- [respond(generating:includeSchemaInPrompt:options:prompt:)](respond%28generating_includeschemainprompt_options_prompt_%29.md): Produces a generable object as a response to a prompt.
- [respond(schema:includeSchemaInPrompt:options:prompt:)](respond%28schema_includeschemainprompt_options_prompt_%29.md): Produces a generated content type as a response to a prompt and schema.
- [respond(to:generating:includeSchemaInPrompt:options:)](respond%28to_generating_includeschemainprompt_options_%29.md): Produces a generable object as a response to a prompt.
- [respond(to:schema:includeSchemaInPrompt:options:)](respond%28to_schema_includeschemainprompt_options_%29.md): Produces a generated content type as a response to a prompt and schema.
- [LanguageModelSession.Response](response.md): A structure that stores the output of a response call.
