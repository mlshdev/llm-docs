> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelsession/usage-swift.struct/input-swift.property

# input

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The input token counts from the transcript.

## Declaration

```swift
var input: LanguageModelSession.Usage.Input
```

## See Also

### Updating the usage

- [LanguageModelSession.Usage.Input](input-swift.struct.md): Token counts for the transcript submitted to the model.
- [output](output-swift.property.md): The output token counts from the response.
- [LanguageModelSession.Usage.Output](output-swift.struct.md): Token counts for the output produced by the model.
- [metadata](metadata.md): Additional usage statistics that the language model encodes for the response.
- [totalTokenCount](totaltokencount.md): The total number of tokens involved in this generation, combining input and output counts.
