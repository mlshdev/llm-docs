> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/anchoringcomponent/target-swift.enum/handlocation/abovehand

# aboveHand

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** visionOS 1.0+

An anchor location above the center of the palm in the world space, regardless how the hand is rotated.

## Declaration

```swift
static let aboveHand: AnchoringComponent.Target.HandLocation
```

<a id="discussion"></a>

## Discussion

Content anchored this way has its positive y-axis pointing at the user’s head and its positive z-axis pointing towards the ground.
