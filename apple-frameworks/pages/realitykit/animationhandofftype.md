> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationhandofftype](https://developer.apple.com/documentation/realitykit/animationhandofftype)

# AnimationHandoffType

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The type of handoff the play animation method performs between a current animation and a new animation.

## Declaration

```swift
struct AnimationHandoffType
```

## Topics

### Type Properties

- [compose](animationhandofftype/compose.md): Adds the new animation to existing animations, and immediately starts the new animation.
- [default](animationhandofftype/default.md): Provides the default behavior.
- [stop](animationhandofftype/stop.md): Stops the specified animation.

### Type Methods

- [replace(applyToAllLayers:)](animationhandofftype/replace%28applytoalllayers_%29.md): Keeps playing the current animation during the transition time and uses the value from that animation as the blend value for the transition to the new animation.
- [snapshotAndReplace(applyToAllLayers:)](animationhandofftype/snapshotandreplace%28applytoalllayers_%29.md): Stops the current animation and uses the current value of that animation as the blend value for the transition to the new animation.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Animation definitions

- [SampledAnimation](sampledanimation.md): An animation that cycles through a series of frames at a constant interval.
- [TweenMode](tweenmode.md): Options that determine whether an animation switches between frames gradually or abruptly.
- [FromToByAnimation](fromtobyanimation.md): An animation that starts, stops, or increments by a specific value.
- [AnimationTimingFunction](animationtimingfunction.md): The pacing of an animation transition.
- [AnimationView](animationview.md): An animation that represents a variation of another animation.
- [OrbitAnimation](orbitanimation.md): An animation that revolves an entity around its origin.
- [AnimationDefinition](animationdefinition.md): The configuration, including target object, timeframe, and visual semantics, of an animation.
- [AnimationFillMode](animationfillmode.md): Options that determine which animation frames display outside of the normal duration.
- [AnimationGroup](animationgroup.md): A collection of animations that play simultaneously.
