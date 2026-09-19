> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelsession/usage-swift.struct/input-swift.struct

# LanguageModelSession.Usage.Input

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Token counts for the transcript submitted to the model.

## Declaration

```swift
struct Input
```

## Topics

### Creating a token input instance

- [init(totalTokenCount:cachedTokenCount:)](input-swift.struct/init%28totaltokencount_cachedtokencount_%29.md): Creates an input token count.

### Getting the token count

- [cachedTokenCount](input-swift.struct/cachedtokencount.md): The number of input tokens that were served from a cache.
- [totalTokenCount](input-swift.struct/totaltokencount.md): The total number of input tokens from the transcript.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Updating the usage

- [input](input-swift.property.md): The input token counts from the transcript.
- [output](output-swift.property.md): The output token counts from the response.
- [LanguageModelSession.Usage.Output](output-swift.struct.md): Token counts for the output produced by the model.
- [metadata](metadata.md): Additional usage statistics that the language model encodes for the response.
- [totalTokenCount](totaltokencount.md): The total number of tokens involved in this generation, combining input and output counts.
