> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteraction/didmove(to:)](https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/didmove(to:))

# didMove(to:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Performs an action after the view adds or removes the interaction from its interaction array.

## Declaration

```swift
@MainActor @preconcurrency final func didMove(to view: UIView?)
```

## Parameters

- `view`: The view that owns and contains the interaction in its interaction array.

## See Also

### Responding to view events

- [willMove(to:)](willmove%28to_%29.md): Performs an action before the view adds or removes the interaction from its interaction array.
