> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/respond(to:generating:includeschemainprompt:options:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/respond(to:generating:includeschemainprompt:options:))

# respond(to:generating:includeSchemaInPrompt:options:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Produces a generable object as a response to a prompt.

## Declaration

```swift
@discardableResult nonisolated(nonsending) final func respond<Content>(to prompt: Prompt, generating type: Content.Type = Content.self, includeSchemaInPrompt: Bool = true, options: GenerationOptions = GenerationOptions()) async throws -> LanguageModelSession.Response<Content> where Content : Generable
```

## Parameters

- `prompt`: A prompt for the model to respond to.
- `type`: A type to produce as the response.
- `includeSchemaInPrompt`: If `true`, injects the schema into the prompt to bias the model.
- `options`: Options that control how tokens are sampled from the distribution the model produces.

<a id="return-value"></a>

## Return Value

[GeneratedContent](../generatedcontent.md) containing the fields and values defined in the schema.

<a id="discussion"></a>

## Discussion

Consider using the default value of `true` for `includeSchemaInPrompt`. The exception to the rule is when the model has knowledge about the expected response format, either because it has been trained on it, or because it has seen exhaustive examples during this session.

## See Also

### Generating a response

- [isResponding](isresponding.md): A Boolean value that indicates whether a response is being generated.
- [respond(options:prompt:)](respond%28options_prompt_%29.md): Produces a response to a prompt.
- [respond(generating:includeSchemaInPrompt:options:prompt:)](respond%28generating_includeschemainprompt_options_prompt_%29.md): Produces a generable object as a response to a prompt.
- [respond(schema:includeSchemaInPrompt:options:prompt:)](respond%28schema_includeschemainprompt_options_prompt_%29.md): Produces a generated content type as a response to a prompt and schema.
- [respond(to:options:)](respond%28to_options_%29.md): Produces a response to a prompt.
- [respond(to:schema:includeSchemaInPrompt:options:)](respond%28to_schema_includeschemainprompt_options_%29.md): Produces a generated content type as a response to a prompt and schema.
- [LanguageModelSession.Response](response.md): A structure that stores the output of a response call.
