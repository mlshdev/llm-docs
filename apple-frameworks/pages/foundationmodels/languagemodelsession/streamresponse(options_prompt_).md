> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/streamresponse(options:prompt:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/streamresponse(options:prompt:))

# streamResponse(options:prompt:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Produces a response stream to a prompt.

## Declaration

```swift
final func streamResponse(options: GenerationOptions = GenerationOptions(), @PromptBuilder prompt: () throws -> Prompt) rethrows -> sending LanguageModelSession.ResponseStream<String>
```

## Parameters

- `options`: Options that control how tokens are sampled from the distribution the model produces.
- `prompt`: A prompt for the model to respond to.

<a id="return-value"></a>

## Return Value

A response stream that produces aggregated tokens.

<a id="discussion"></a>

## Discussion

> **Important**

> If running in the background, use the non-streaming [respond(to:options:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/respond%28to:options:%29-6a2gb) method to reduce the likelihood of encountering [LanguageModelError.rateLimited(\_:)](../languagemodelerror/ratelimited%28__%29.md) errors.

## See Also

### Streaming a response

- [streamResponse(generating:includeSchemaInPrompt:options:prompt:)](streamresponse%28generating_includeschemainprompt_options_prompt_%29.md): Produces a response stream to a prompt.
- [streamResponse(schema:includeSchemaInPrompt:options:prompt:)](streamresponse%28schema_includeschemainprompt_options_prompt_%29.md): Produces a response stream to a prompt and schema.
- [streamResponse(to:options:)](streamresponse%28to_options_%29.md): Produces a response stream to a prompt.
- [streamResponse(to:generating:includeSchemaInPrompt:options:)](streamresponse%28to_generating_includeschemainprompt_options_%29.md): Produces a response stream to a prompt.
- [streamResponse(to:schema:includeSchemaInPrompt:options:)](streamresponse%28to_schema_includeschemainprompt_options_%29.md): Produces a response stream to a prompt and schema.
- [LanguageModelSession.ResponseStream](responsestream.md): An async sequence of snapshots of partially generated content.
