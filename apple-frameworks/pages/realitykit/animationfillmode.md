> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationfillmode](https://developer.apple.com/documentation/realitykit/animationfillmode)

# AnimationFillMode

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Options that determine which animation frames display outside of the normal duration.

## Declaration

```swift
struct AnimationFillMode
```

<a id="overview"></a>

## Overview

This structure enables you to lock an animation at its starting frame for a period of time before beginning. You can also lock an animation to its ending frame for a specified amount of time after it finishes, or both.

An animation applies the fill mode you choose when a range determined by [trimStart](animationview/trimstart.md), [trimEnd](animationview/trimend.md), or [trimDuration](animationview/trimduration.md) exceeds the animation’s underlying duration, which the framework calculates as the frame count (see [frames](sampledanimation/frames-2j4nj.md)) multiplied by the [frameInterval](sampledanimation/frameinterval.md), multiplied by [speed](animationdefinition/speed.md).

For example, if you set the [trimStart](animationdefinition/trimstart.md) property for an animation of a hand waving to `-1.0` and [fillMode](sampledanimation/fillmode.md) to [backwards](animationfillmode/backwards.md) or [both](animationfillmode/both.md), the hand displays immediately, freezes at the first animation frame for one second, and then begins to wave.

## Topics

### Choosing a fill mode

- [none](animationfillmode/none.md): An option that indicates an animation doesn’t display frame data outside of its normal duration.
- [forwards](animationfillmode/forwards.md): An option that freezes the last frame of the animation until it stops.
- [backwards](animationfillmode/backwards.md): An option that shows the first animation frame while playback progresses to the beginning position.
- [both](animationfillmode/both.md): An option that displays the animation’s initial frame or final frame when playback occurs outside of the normal duration.
- [init(rawValue:)](animationfillmode/init%28rawvalue_%29.md): Creates a fill mode from its backing data type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Animation definitions

- [SampledAnimation](sampledanimation.md): An animation that cycles through a series of frames at a constant interval.
- [TweenMode](tweenmode.md): Options that determine whether an animation switches between frames gradually or abruptly.
- [FromToByAnimation](fromtobyanimation.md): An animation that starts, stops, or increments by a specific value.
- [AnimationTimingFunction](animationtimingfunction.md): The pacing of an animation transition.
- [AnimationView](animationview.md): An animation that represents a variation of another animation.
- [OrbitAnimation](orbitanimation.md): An animation that revolves an entity around its origin.
- [AnimationDefinition](animationdefinition.md): The configuration, including target object, timeframe, and visual semantics, of an animation.
- [AnimationGroup](animationgroup.md): A collection of animations that play simultaneously.
- [AnimationHandoffType](animationhandofftype.md): The type of handoff the play animation method performs between a current animation and a new animation.
