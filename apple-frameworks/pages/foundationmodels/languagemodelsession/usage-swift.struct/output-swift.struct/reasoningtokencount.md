> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/usage-swift.struct/output-swift.struct/reasoningtokencount](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/usage-swift.struct/output-swift.struct/reasoningtokencount)

# reasoningTokenCount

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The number of output tokens that were part of the model’s reasoning output.

## Declaration

```swift
var reasoningTokenCount: Int
```

<a id="discussion"></a>

## Discussion

This value is always less than or equal to [totalTokenCount](totaltokencount.md). A non-zero value requires the model to declare the [reasoning](../../../languagemodelcapabilities/capability/reasoning.md) capability.

## See Also

### Getting the token count

- [totalTokenCount](totaltokencount.md): The total number of output tokens.
