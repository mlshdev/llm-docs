> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/usage/input-swift.struct/init(totaltokencount:cachedtokencount:)

# init(totalTokenCount:cachedTokenCount:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates input token counts for the transcript submitted to the model.

## Declaration

```swift
init(totalTokenCount: Int, cachedTokenCount: Int)
```

## Parameters

- `totalTokenCount`: The total number of input tokens from the transcript.
- `cachedTokenCount`: The number of input tokens served from a cache.
