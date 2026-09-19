> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/usage/output-swift.struct

# LanguageModelExecutorGenerationChannel.Usage.Output

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Token counts for the output produced by the model.

## Declaration

```swift
struct Output
```

## Topics

### Creating an output instance

- [init(totalTokenCount:reasoningTokenCount:)](output-swift.struct/init%28totaltokencount_reasoningtokencount_%29.md): Creates output token counts for the response the model produces.

### Handling the output tokens

- [totalTokenCount](output-swift.struct/totaltokencount.md): The total number of output tokens.
- [reasoningTokenCount](output-swift.struct/reasoningtokencount.md): The number of output tokens that were part of the model’s reasoning output.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Updating the token counts

- [input](input-swift.property.md): The input token counts from the transcript.
- [LanguageModelExecutorGenerationChannel.Usage.Input](input-swift.struct.md): Token counts for the transcript submitted to the model.
- [output](output-swift.property.md): The output token counts from the response.
