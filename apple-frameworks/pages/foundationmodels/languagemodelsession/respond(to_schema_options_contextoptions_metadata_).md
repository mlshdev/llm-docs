> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/respond(to:schema:options:contextoptions:metadata:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/respond(to:schema:options:contextoptions:metadata:))

# respond(to:schema:options:contextOptions:metadata:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Produces a generated content type as a response to a prompt and schema.

## Declaration

```swift
@discardableResult nonisolated(nonsending) final func respond(to prompt: Prompt, schema: GenerationSchema, options: GenerationOptions = GenerationOptions(), contextOptions: ContextOptions = ContextOptions(includeSchemaInPrompt: true), metadata: [String : any ConvertibleToGeneratedContent] = [:]) async throws -> LanguageModelSession.Response<GeneratedContent>
```

## Parameters

- `prompt`: A prompt for the model to respond to.
- `schema`: A schema to guide the output with.
- `options`: Options that control how tokens are sampled from the distribution the model produces.
- `contextOptions`: Settings that configure how the model is prompted.
- `metadata`: Metadata to attach to the request.

<a id="return-value"></a>

## Return Value

[GeneratedContent](../generatedcontent.md) containing the fields and values defined in the schema.

<a id="discussion"></a>

## Discussion

Consider using the default value of `true` for `includeSchemaInPrompt`. The exception to the rule is when the model has knowledge about the expected response format, either because it has been trained on it, or because it has seen exhaustive examples during this session.

## See Also

### Generating a response with metadata

- [respond(options:contextOptions:metadata:prompt:)](respond%28options_contextoptions_metadata_prompt_%29.md): Produces a response to a prompt.
- [respond(generating:options:contextOptions:metadata:prompt:)](respond%28generating_options_contextoptions_metadata_prompt_%29.md): Produces a generable object as a response to a prompt.
- [respond(schema:options:contextOptions:metadata:prompt:)](respond%28schema_options_contextoptions_metadata_prompt_%29.md): Produces a generated content type as a response to a prompt and schema.
- [respond(to:options:contextOptions:metadata:)](respond%28to_options_contextoptions_metadata_%29.md): Produces a response to a prompt.
- [respond(to:generating:options:contextOptions:metadata:)](respond%28to_generating_options_contextoptions_metadata_%29.md): Produces a generable object as a response to a prompt.
