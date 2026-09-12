> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchoringcomponent/target-swift.enum/handlocation](https://developer.apple.com/documentation/realitykit/anchoringcomponent/target-swift.enum/handlocation)

# AnchoringComponent.Target.HandLocation

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

Defines the locations of tracked hands to look for.

## Declaration

```swift
struct HandLocation
```

## Topics

### Structures

- [AnchoringComponent.Target.HandLocation.HandJoint](handlocation/handjoint.md): Describes all the hand joints.

### Type Properties

- [aboveHand](handlocation/abovehand.md): An anchor location above the center of the palm in the world space, regardless how the hand is rotated.
- [indexFingerTip](handlocation/indexfingertip.md): An anchor location at the tip of the index finger.
- [palm](handlocation/palm.md): An anchor location at the center of the palm.
- [thumbTip](handlocation/thumbtip.md): An anchor location at the tip of the thumb.
- [wrist](handlocation/wrist.md): An anchor location at the center of the wrist on the back of the hand.

### Type Methods

- [joint(for:)](handlocation/joint%28for_%29.md): The function that returns the `HandLocation` based on `HandJoint`.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Hand tracking

- [Happy Beam](../../../visionos/happybeam.md): Leverage a Full Space to create a fun game using ARKit.
- [AnchoringComponent.Target.Chirality](chirality.md): Defines the chirality of tracked hands to look for.
