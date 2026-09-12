> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/usage-swift.struct/input-swift.struct/init(totaltokencount:cachedtokencount:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/usage-swift.struct/input-swift.struct/init(totaltokencount:cachedtokencount:))

# init(totalTokenCount:cachedTokenCount:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an input token count.

## Declaration

```swift
init(totalTokenCount: Int, cachedTokenCount: Int)
```

## Parameters

- `totalTokenCount`: The total number of input tokens from the transcript.
- `cachedTokenCount`: The number of input tokens served from a cache.
