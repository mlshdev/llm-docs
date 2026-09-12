> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/gesturerecognizer(_:shouldrecognizesimultaneouslywith:)](https://developer.apple.com/documentation/realitykit/arview/gesturerecognizer(_:shouldrecognizesimultaneouslywith:))

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
