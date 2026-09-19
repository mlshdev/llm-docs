> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/willmove(to:)

# willMove(to:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Performs an action before the view adds or removes the interaction from its interaction array.

## Declaration

```swift
@MainActor @preconcurrency final func willMove(to view: UIView?)
```

## Parameters

- `view`: The view that owns and contains the interaction in its interaction array.

## See Also

### Responding to view events

- [didMove(to:)](didmove%28to_%29.md): Performs an action after the view adds or removes the interaction from its interaction array.
