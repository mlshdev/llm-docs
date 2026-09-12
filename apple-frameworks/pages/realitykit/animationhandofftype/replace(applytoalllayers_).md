> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationhandofftype/replace(applytoalllayers:)](https://developer.apple.com/documentation/realitykit/animationhandofftype/replace(applytoalllayers:))

# replace(applyToAllLayers:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Keeps playing the current animation during the transition time and uses the value from that animation as the blend value for the transition to the new animation.

## Declaration

```swift
static func replace(applyToAllLayers: Bool = true) -> AnimationHandoffType
```

<a id="discussion"></a>

## Discussion

If `applyToAllLayers` is `false`, the handoff only replaces current animations that have the same `layerId` as the `blendLayerOffset` parameter in the `playAnimation()` call.

If `applyToAllLayers` is `true`, the handoff replaces all animations regardless of the layer.
