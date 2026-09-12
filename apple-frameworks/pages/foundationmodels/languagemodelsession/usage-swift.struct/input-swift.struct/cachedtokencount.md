> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/usage-swift.struct/input-swift.struct/cachedtokencount](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/usage-swift.struct/input-swift.struct/cachedtokencount)

# cachedTokenCount

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The number of input tokens that were served from a cache.

## Declaration

```swift
var cachedTokenCount: Int
```

<a id="discussion"></a>

## Discussion

This value is always less than or equal to [totalTokenCount](totaltokencount.md).

## See Also

### Getting the token count

- [totalTokenCount](totaltokencount.md): The total number of input tokens from the transcript.
