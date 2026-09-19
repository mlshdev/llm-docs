> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/contextsizeexceeded

# LanguageModelError.ContextSizeExceeded

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Information about exceeding the context window size.

## Declaration

```swift
struct ContextSizeExceeded
```

## Topics

### Creating an error instance

- [init(contextSize:tokenCount:debugDescription:metadata:)](contextsizeexceeded/init%28contextsize_tokencount_debugdescription_metadata_%29.md): Creates information describing a transcript that exceeded the model’s context size.

### Inspecting context size errors

- [metadata](contextsizeexceeded/metadata.md): Additional information about the failure, keyed by name.
- [tokenCount](contextsizeexceeded/tokencount.md): The number of tokens in the transcript that exceeded the model’s context size.
- [contextSize](contextsizeexceeded/contextsize.md): The model’s maximum context size, in tokens.
- [debugDescription](contextsizeexceeded/debugdescription.md): A debug description to help developers diagnose issues during development.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Exceeded context size error

- [LanguageModelError.contextSizeExceeded(\_:)](contextsizeexceeded%28__%29.md): The session’s transcript exceeded the model’s context size.
