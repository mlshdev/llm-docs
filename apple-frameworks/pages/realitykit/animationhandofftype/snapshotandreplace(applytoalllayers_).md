> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationhandofftype/snapshotandreplace(applytoalllayers:)](https://developer.apple.com/documentation/realitykit/animationhandofftype/snapshotandreplace(applytoalllayers:))

# snapshotAndReplace(applyToAllLayers:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Stops the current animation and uses the current value of that animation as the blend value for the transition to the new animation.

## Declaration

```swift
static func snapshotAndReplace(applyToAllLayers: Bool = true) -> AnimationHandoffType
```

<a id="discussion"></a>

## Discussion

If `applyToAllLayers` is `false`, the handoff only replaces current animations that have the same `layerId` as the `blendLayerOffset` parameter in the `playAnimation()` call.

If `applyToAllLayers` is `true`, the handoff replaces all animations regardless of the layer.
