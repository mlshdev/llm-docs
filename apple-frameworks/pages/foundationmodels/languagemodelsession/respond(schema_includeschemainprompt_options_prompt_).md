> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/respond(schema:includeschemainprompt:options:prompt:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/respond(schema:includeschemainprompt:options:prompt:))

# respond(schema:includeSchemaInPrompt:options:prompt:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Produces a generated content type as a response to a prompt and schema.

## Declaration

```swift
@discardableResult nonisolated(nonsending) final func respond(schema: GenerationSchema, includeSchemaInPrompt: Bool = true, options: GenerationOptions = GenerationOptions(), @PromptBuilder prompt: () throws -> Prompt) async throws -> LanguageModelSession.Response<GeneratedContent>
```

## Parameters

- `schema`: A schema to guide the output with.
- `includeSchemaInPrompt`: If `true`, injects the schema into the prompt to bias the model.
- `options`: Options that control how tokens are sampled from the distribution the model produces.
- `prompt`: A prompt for the model to respond to.

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
- [respond(to:options:)](respond%28to_options_%29.md): Produces a response to a prompt.
- [respond(to:generating:includeSchemaInPrompt:options:)](respond%28to_generating_includeschemainprompt_options_%29.md): Produces a generable object as a response to a prompt.
- [respond(to:schema:includeSchemaInPrompt:options:)](respond%28to_schema_includeschemainprompt_options_%29.md): Produces a generated content type as a response to a prompt and schema.
- [LanguageModelSession.Response](response.md): A structure that stores the output of a response call.
