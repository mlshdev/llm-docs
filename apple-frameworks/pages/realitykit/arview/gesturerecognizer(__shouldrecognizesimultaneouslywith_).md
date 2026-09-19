> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/arview/gesturerecognizer(_:shouldrecognizesimultaneouslywith:)

# gestureRecognizer(\_:shouldRecognizeSimultaneouslyWith:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@MainActor @preconcurrency @objc dynamic func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer, shouldRecognizeSimultaneouslyWith otherGestureRecognizer: UIGestureRecognizer) -> Bool
```

## See Also

### Adding gesture recognizers to entities

- [installGestures(\_:for:)](installgestures%28__for_%29.md): Installs standard gestures onto the given entity, configured to be recognized simultaneously.
