> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/responsestream](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/responsestream)

# LanguageModelSession.ResponseStream

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

An async sequence of snapshots of partially generated content.

## Declaration

```swift
struct ResponseStream<Content> where Content : Generable
```

## Topics

### Collecting the response stream

- [collect()](responsestream/collect%28%29.md): Conforms when `Content` conforms to `Generable`. Returns the result from a streaming response, after it completes.

### Getting a snapshot of a partial response

- [LanguageModelSession.ResponseStream.Snapshot](responsestream/snapshot.md): Conforms when `Content` conforms to `Generable`. A snapshot of partially generated content.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Streaming a response

- [streamResponse(options:prompt:)](streamresponse%28options_prompt_%29.md): Produces a response stream to a prompt.
- [streamResponse(generating:includeSchemaInPrompt:options:prompt:)](streamresponse%28generating_includeschemainprompt_options_prompt_%29.md): Produces a response stream to a prompt.
- [streamResponse(schema:includeSchemaInPrompt:options:prompt:)](streamresponse%28schema_includeschemainprompt_options_prompt_%29.md): Produces a response stream to a prompt and schema.
- [streamResponse(to:options:)](streamresponse%28to_options_%29.md): Produces a response stream to a prompt.
- [streamResponse(to:generating:includeSchemaInPrompt:options:)](streamresponse%28to_generating_includeschemainprompt_options_%29.md): Produces a response stream to a prompt.
- [streamResponse(to:schema:includeSchemaInPrompt:options:)](streamresponse%28to_schema_includeschemainprompt_options_%29.md): Produces a response stream to a prompt and schema.
