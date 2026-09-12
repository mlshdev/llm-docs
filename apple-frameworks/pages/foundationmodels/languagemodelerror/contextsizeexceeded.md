> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelerror/contextsizeexceeded](https://developer.apple.com/documentation/foundationmodels/languagemodelerror/contextsizeexceeded)

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

- [init(contextSize:tokenCount:debugDescription:metadata:)](contextsizeexceeded/init%28contextsize_tokencount_debugdescription_metadata_%29.md)

### Inspecting context size errors

- [metadata](contextsizeexceeded/metadata.md)
- [tokenCount](contextsizeexceeded/tokencount.md)
- [contextSize](contextsizeexceeded/contextsize.md)
- [debugDescription](contextsizeexceeded/debugdescription.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Exceeded context size error

- [LanguageModelError.contextSizeExceeded(\_:)](contextsizeexceeded%28__%29.md): The session’s transcript exceeded the model’s context size.
