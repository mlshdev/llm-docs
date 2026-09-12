> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/streamresponse(to:schema:includeschemainprompt:options:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/streamresponse(to:schema:includeschemainprompt:options:))

# streamResponse(to:schema:includeSchemaInPrompt:options:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Produces a response stream to a prompt and schema.

## Declaration

```swift
final func streamResponse(to prompt: Prompt, schema: GenerationSchema, includeSchemaInPrompt: Bool = true, options: GenerationOptions = GenerationOptions()) -> sending LanguageModelSession.ResponseStream<GeneratedContent>
```

## Parameters

- `prompt`: A prompt for the model to respond to.
- `schema`: A schema to guide the output with.
- `includeSchemaInPrompt`: If `true`, injects the schema into the prompt to bias the model.
- `options`: Options that control how tokens are sampled from the distribution the model produces.

<a id="return-value"></a>

## Return Value

A response stream that produces [GeneratedContent](../generatedcontent.md) containing the fields and values defined in the schema.

<a id="discussion"></a>

## Discussion

Consider using the default value of `true` for `includeSchemaInPrompt`. The exception to the rule is when the model has knowledge about the expected response format, either because it has been trained on it, or because it has seen exhaustive examples during this session.

> **Important**

> If running in the background, use the non-streaming [respond(to:options:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/respond%28to:options:%29-6a2gb) method to reduce the likelihood of encountering [LanguageModelError.rateLimited(\_:)](../languagemodelerror/ratelimited%28__%29.md) errors.

## See Also

### Streaming a response

- [streamResponse(options:prompt:)](streamresponse%28options_prompt_%29.md): Produces a response stream to a prompt.
- [streamResponse(generating:includeSchemaInPrompt:options:prompt:)](streamresponse%28generating_includeschemainprompt_options_prompt_%29.md): Produces a response stream to a prompt.
- [streamResponse(schema:includeSchemaInPrompt:options:prompt:)](streamresponse%28schema_includeschemainprompt_options_prompt_%29.md): Produces a response stream to a prompt and schema.
- [streamResponse(to:options:)](streamresponse%28to_options_%29.md): Produces a response stream to a prompt.
- [streamResponse(to:generating:includeSchemaInPrompt:options:)](streamresponse%28to_generating_includeschemainprompt_options_%29.md): Produces a response stream to a prompt.
- [LanguageModelSession.ResponseStream](responsestream.md): An async sequence of snapshots of partially generated content.
