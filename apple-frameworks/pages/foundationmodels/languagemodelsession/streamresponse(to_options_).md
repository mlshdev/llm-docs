> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/streamresponse(to:options:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/streamresponse(to:options:))

# streamResponse(to:options:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Produces a response stream to a prompt.

## Declaration

```swift
final func streamResponse(to prompt: Prompt, options: GenerationOptions = GenerationOptions()) -> sending LanguageModelSession.ResponseStream<String>
```

## Parameters

- `prompt`: A prompt for the model to respond to.
- `options`: Options that control how tokens are sampled from the distribution the model produces.

<a id="return-value"></a>

## Return Value

A response stream that produces aggregated tokens.

## Mentioned In

- [Composing dynamic sessions with instructions and profiles](../composing-dynamic-sessions-with-instructions-and-profiles.md)
- [Running a Core AI model in a Foundation Models session](../running-a-core-ai-model-in-a-foundation-models-session.md)

<a id="discussion"></a>

## Discussion

> **Important**

> If running in the background, use the non-streaming [respond(to:options:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/respond%28to:options:%29-6a2gb) method to reduce the likelihood of encountering [LanguageModelError.rateLimited(\_:)](../languagemodelerror/ratelimited%28__%29.md) errors.

## See Also

### Streaming a response

- [streamResponse(options:prompt:)](streamresponse%28options_prompt_%29.md): Produces a response stream to a prompt.
- [streamResponse(generating:includeSchemaInPrompt:options:prompt:)](streamresponse%28generating_includeschemainprompt_options_prompt_%29.md): Produces a response stream to a prompt.
- [streamResponse(schema:includeSchemaInPrompt:options:prompt:)](streamresponse%28schema_includeschemainprompt_options_prompt_%29.md): Produces a response stream to a prompt and schema.
- [streamResponse(to:generating:includeSchemaInPrompt:options:)](streamresponse%28to_generating_includeschemainprompt_options_%29.md): Produces a response stream to a prompt.
- [streamResponse(to:schema:includeSchemaInPrompt:options:)](streamresponse%28to_schema_includeschemainprompt_options_%29.md): Produces a response stream to a prompt and schema.
- [LanguageModelSession.ResponseStream](responsestream.md): An async sequence of snapshots of partially generated content.
