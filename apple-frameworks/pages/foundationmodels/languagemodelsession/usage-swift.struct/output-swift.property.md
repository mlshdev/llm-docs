> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/usage-swift.struct/output-swift.property](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/usage-swift.struct/output-swift.property)

# output

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The output token counts from the response.

## Declaration

```swift
var output: LanguageModelSession.Usage.Output
```

## See Also

### Updating the usage

- [input](input-swift.property.md): The input token counts from the transcript.
- [LanguageModelSession.Usage.Input](input-swift.struct.md): Token counts for the transcript submitted to the model.
- [LanguageModelSession.Usage.Output](output-swift.struct.md): Token counts for the output produced by the model.
- [metadata](metadata.md): Language models that provide other kinds of usage statistics may encode them in metadata.
- [totalTokenCount](totaltokencount.md): The total number of tokens involved in this generation, combining input and output counts.
