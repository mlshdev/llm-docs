> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/tweenmode](https://developer.apple.com/documentation/realitykit/tweenmode)

# TweenMode

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Options that determine whether an animation switches between frames gradually or abruptly.

## Declaration

```swift
enum TweenMode
```

<a id="overview"></a>

## Overview

This enumeration declares the options for a sampled animation’s [tweenMode](sampledanimation/tweenmode.md). The gradual or abrupt change, or *interpolation*, refers to the visual behavior that occurs between adjacent values in a sampled animation’s [frames](sampledanimation/frames-2hobp.md).

## Topics

### Choosing a mode between frames

- [TweenMode.hold](tweenmode/hold.md): An option that indicates a keyframe changes to the next abruptly.
- [TweenMode.linear](tweenmode/linear.md): An option that indicates that a keyframe changes to the next gradually.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Animation definitions

- [SampledAnimation](sampledanimation.md): An animation that cycles through a series of frames at a constant interval.
- [FromToByAnimation](fromtobyanimation.md): An animation that starts, stops, or increments by a specific value.
- [AnimationTimingFunction](animationtimingfunction.md): The pacing of an animation transition.
- [AnimationView](animationview.md): An animation that represents a variation of another animation.
- [OrbitAnimation](orbitanimation.md): An animation that revolves an entity around its origin.
- [AnimationDefinition](animationdefinition.md): The configuration, including target object, timeframe, and visual semantics, of an animation.
- [AnimationFillMode](animationfillmode.md): Options that determine which animation frames display outside of the normal duration.
- [AnimationGroup](animationgroup.md): A collection of animations that play simultaneously.
- [AnimationHandoffType](animationhandofftype.md): The type of handoff the play animation method performs between a current animation and a new animation.
