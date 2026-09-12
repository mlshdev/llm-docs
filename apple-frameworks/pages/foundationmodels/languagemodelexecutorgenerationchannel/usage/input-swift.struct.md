> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelexecutorgenerationchannel/usage/input-swift.struct](https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/usage/input-swift.struct)

# LanguageModelExecutorGenerationChannel.Usage.Input

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Token counts for the transcript submitted to the model.

## Declaration

```swift
struct Input
```

## Topics

### Creating an input instance

- [init(totalTokenCount:cachedTokenCount:)](input-swift.struct/init%28totaltokencount_cachedtokencount_%29.md)

### Handling the input tokens

- [totalTokenCount](input-swift.struct/totaltokencount.md): The total number of input tokens from the transcript.
- [cachedTokenCount](input-swift.struct/cachedtokencount.md): The number of input tokens that were served from a cache.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Updating the token counts

- [input](input-swift.property.md): The input token counts from the transcript.
- [output](output-swift.property.md): The output token counts from the response.
- [LanguageModelExecutorGenerationChannel.Usage.Output](output-swift.struct.md): Token counts for the output produced by the model.
