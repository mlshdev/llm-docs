> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/streamresponse(to:schema:options:contextoptions:metadata:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/streamresponse(to:schema:options:contextoptions:metadata:))

# streamResponse(to:schema:options:contextOptions:metadata:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Produces a response stream to a prompt and schema.

## Declaration

```swift
final func streamResponse(to prompt: Prompt, schema: GenerationSchema, options: GenerationOptions = GenerationOptions(), contextOptions: ContextOptions = ContextOptions(includeSchemaInPrompt: true), metadata: [String : any ConvertibleToGeneratedContent] = [:]) -> sending LanguageModelSession.ResponseStream<GeneratedContent>
```

## Parameters

- `prompt`: A prompt for the model to respond to.
- `schema`: A schema to guide the output with.
- `options`: Options that control how tokens are sampled from the distribution the model produces.
- `contextOptions`: Settings that configure how the model is prompted.
- `metadata`: Metadata to attach to the request.

<a id="return-value"></a>

## Return Value

A response stream that produces [GeneratedContent](../generatedcontent.md) containing the fields and values defined in the schema.

<a id="discussion"></a>

## Discussion

Consider using the default value of `true` for `includeSchemaInPrompt`. The exception to the rule is when the model has knowledge about the expected response format, either because it has been trained on it, or because it has seen exhaustive examples during this session.

> **Important**

> If running in the background, use the non-streaming [respond(to:options:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/respond%28to:options:%29-6a2gb) method to reduce the likelihood of encountering [LanguageModelError.rateLimited(\_:)](../languagemodelerror/ratelimited%28__%29.md) errors.

## See Also

### Streaming a response with metadata

- [streamResponse(options:contextOptions:metadata:prompt:)](streamresponse%28options_contextoptions_metadata_prompt_%29.md): Produces a response stream to a prompt.
- [streamResponse(generating:options:contextOptions:metadata:prompt:)](streamresponse%28generating_options_contextoptions_metadata_prompt_%29.md): Produces a response stream to a prompt.
- [streamResponse(schema:options:contextOptions:metadata:prompt:)](streamresponse%28schema_options_contextoptions_metadata_prompt_%29.md): Produces a response stream to a prompt and schema.
- [streamResponse(to:options:contextOptions:metadata:)](streamresponse%28to_options_contextoptions_metadata_%29.md): Produces a response stream to a prompt.
- [streamResponse(to:generating:options:contextOptions:metadata:)](streamresponse%28to_generating_options_contextoptions_metadata_%29.md): Produces a response stream to a prompt.
