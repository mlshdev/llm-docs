> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/usage/output-swift.struct/init(totaltokencount:reasoningtokencount:)

# init(totalTokenCount:reasoningTokenCount:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates output token counts for the response the model produces.

## Declaration

```swift
init(totalTokenCount: Int, reasoningTokenCount: Int)
```

## Parameters

- `totalTokenCount`: The total number of output tokens.
- `reasoningTokenCount`: The number of output tokens that were part of the model’s reasoning output.
