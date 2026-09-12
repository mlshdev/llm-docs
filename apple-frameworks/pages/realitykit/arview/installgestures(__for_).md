> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/installgestures(_:for:)](https://developer.apple.com/documentation/realitykit/arview/installgestures(_:for:))

# installGestures(\_:for:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

Installs standard gestures onto the given entity, configured to be recognized simultaneously.

## Declaration

```swift
@discardableResult @MainActor @preconcurrency func installGestures(_ gestures: ARView.EntityGestures = .all, for entity: any HasCollision) -> [any EntityGestureRecognizer]
```

## Parameters

- `gestures`: The gesture types to install.
- `entity`: The entity with which to associate the gesture recognizers.

<a id="return-value"></a>

## Return Value

The set of gesture recognizers created to handle the requested gestures.

## See Also

### Adding gesture recognizers to entities

- [gestureRecognizer(\_:shouldRecognizeSimultaneouslyWith:)](gesturerecognizer%28__shouldrecognizesimultaneouslywith_%29.md)
