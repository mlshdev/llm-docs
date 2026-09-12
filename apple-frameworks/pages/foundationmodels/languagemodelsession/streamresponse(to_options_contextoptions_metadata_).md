> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/streamresponse(to:options:contextoptions:metadata:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/streamresponse(to:options:contextoptions:metadata:))

# streamResponse(to:options:contextOptions:metadata:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Produces a response stream to a prompt.

## Declaration

```swift
final func streamResponse(to prompt: Prompt, options: GenerationOptions = GenerationOptions(), contextOptions: ContextOptions = ContextOptions(), metadata: [String : any ConvertibleToGeneratedContent] = [:]) -> sending LanguageModelSession.ResponseStream<String>
```

## Parameters

- `prompt`: A prompt for the model to respond to.
- `options`: Options that control how tokens are sampled from the distribution the model produces.
- `contextOptions`: Settings that configure how the model is prompted.
- `metadata`: Metadata to attach to the request.

<a id="return-value"></a>

## Return Value

A response stream that produces aggregated tokens.

<a id="discussion"></a>

## Discussion

> **Important**

> If running in the background, use the non-streaming [respond(to:options:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/respond%28to:options:%29-6a2gb) method to reduce the likelihood of encountering [LanguageModelError.rateLimited(\_:)](../languagemodelerror/ratelimited%28__%29.md) errors.

## See Also

### Streaming a response with metadata

- [streamResponse(options:contextOptions:metadata:prompt:)](streamresponse%28options_contextoptions_metadata_prompt_%29.md): Produces a response stream to a prompt.
- [streamResponse(generating:options:contextOptions:metadata:prompt:)](streamresponse%28generating_options_contextoptions_metadata_prompt_%29.md): Produces a response stream to a prompt.
- [streamResponse(schema:options:contextOptions:metadata:prompt:)](streamresponse%28schema_options_contextoptions_metadata_prompt_%29.md): Produces a response stream to a prompt and schema.
- [streamResponse(to:generating:options:contextOptions:metadata:)](streamresponse%28to_generating_options_contextoptions_metadata_%29.md): Produces a response stream to a prompt.
- [streamResponse(to:schema:options:contextOptions:metadata:)](streamresponse%28to_schema_options_contextoptions_metadata_%29.md): Produces a response stream to a prompt and schema.
