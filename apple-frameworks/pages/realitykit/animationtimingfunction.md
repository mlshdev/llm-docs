> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationtimingfunction](https://developer.apple.com/documentation/realitykit/animationtimingfunction)

# AnimationTimingFunction

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The pacing of an animation transition.

## Declaration

```swift
struct AnimationTimingFunction
```

<a id="overview"></a>

## Overview

Use an animation timing function to control the pace of an animation transition when you call one of an entity’s animated move methods, like `Entity/move(to:relativeTo:duration:timingFunction:)-905k`. If you omit a timing function from the call, the method uses the [default](animationtimingfunction/default.md) timing function.

## Topics

### Creating timing functions

- [default](animationtimingfunction/default.md): A timing function that produces the default curve for the transition.
- [easeIn](animationtimingfunction/easein.md): A timing function that produces a gradual starting transition.
- [easeInOut](animationtimingfunction/easeinout.md): A timing function that produces a gradual starting and ending transition.
- [easeOut](animationtimingfunction/easeout.md): A timing function that produces a gradual ending transition.
- [linear](animationtimingfunction/linear.md): A timing function that produces a linear transition.
- [cubicBezier(controlPoint1:controlPoint2:)](animationtimingfunction/cubicbezier%28controlpoint1_controlpoint2_%29.md): Creates a timing function that accelerates and then decelerates towards the target value with the cubic bezier shape specified by two control points.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Animation definitions

- [SampledAnimation](sampledanimation.md): An animation that cycles through a series of frames at a constant interval.
- [TweenMode](tweenmode.md): Options that determine whether an animation switches between frames gradually or abruptly.
- [FromToByAnimation](fromtobyanimation.md): An animation that starts, stops, or increments by a specific value.
- [AnimationView](animationview.md): An animation that represents a variation of another animation.
- [OrbitAnimation](orbitanimation.md): An animation that revolves an entity around its origin.
- [AnimationDefinition](animationdefinition.md): The configuration, including target object, timeframe, and visual semantics, of an animation.
- [AnimationFillMode](animationfillmode.md): Options that determine which animation frames display outside of the normal duration.
- [AnimationGroup](animationgroup.md): A collection of animations that play simultaneously.
- [AnimationHandoffType](animationhandofftype.md): The type of handoff the play animation method performs between a current animation and a new animation.
