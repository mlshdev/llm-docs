> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationdefinition](https://developer.apple.com/documentation/realitykit/animationdefinition)

# AnimationDefinition

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The configuration, including target object, timeframe, and visual semantics, of an animation.

## Declaration

```swift
protocol AnimationDefinition
```

<a id="overview"></a>

## Overview

The framework adopts this protocol for several concrete animation objects, such as [FromToByAnimation](fromtobyanimation.md), [SampledAnimation](sampledanimation.md), [OrbitAnimation](orbitanimation.md), [BlendTreeAnimation](blendtreeanimation.md), [AnimationView](animationview.md), and [AnimationGroup](animationgroup.md).

## Topics

### Configuring the animation

- [name](animationdefinition/name.md): A textual name for the animation.
- [bindTarget](animationdefinition/bindtarget.md): A textual name that identifies the particular property that animates.
- [blendLayer](animationdefinition/blendlayer.md): The order in which the framework composites the animation.

### Timing the animation

- [speed](animationdefinition/speed.md): A factor that increases or decreases the animation’s rate of playback.
- [delay](animationdefinition/delay.md): An amount of time that elapses before the animation plays.
- [duration](animationdefinition/duration.md): The total playback time of the animation.
- [offset](animationdefinition/offset.md): The time, in seconds, at which the animation begins within the duration.
- [trimDuration](animationdefinition/trimduration.md): An optional duration that overrides the source animation’s duration.
- [trimStart](animationdefinition/trimstart.md): The time, in seconds, at which the animation plays.
- [trimEnd](animationdefinition/trimend.md): The time, in seconds, at which the source animation stops.
- [trimmed(start:end:duration:)](animationdefinition/trimmed%28start_end_duration_%29.md): Edits the animation duration according to the specified time.

### Repeating animation playback

- [repeatMode](animationdefinition/repeatmode.md): An option that determines how the animation repeats.
- [fillMode](animationdefinition/fillmode.md): An option that determines which data displays outside of the normal duration.
- [repeated(count:)](animationdefinition/repeated%28count_%29-937w.md): Repeats an animation the number of times specified by an irrational number.
- [repeated(count:)](animationdefinition/repeated%28count_%29-941x8.md): Repeats an animation the number of times specified by a whole number.
- [repeatingForever()](animationdefinition/repeatingforever%28%29.md): Repeats the animation infinitely.

### Instance Methods

- [repeated(count:)](animationdefinition/repeated%28count_%29.md): Repeats an animation the number of times specified by a whole number.

## Relationships

### Conforming Types

- [ActionAnimation](actionanimation.md)
- [AnimationGroup](animationgroup.md)
- [AnimationView](animationview.md)
- [BlendTreeAnimation](blendtreeanimation.md)
- [FromToByAnimation](fromtobyanimation.md)
- [OrbitAnimation](orbitanimation.md)
- [SampledAnimation](sampledanimation.md)

## See Also

### Animation definitions

- [SampledAnimation](sampledanimation.md): An animation that cycles through a series of frames at a constant interval.
- [TweenMode](tweenmode.md): Options that determine whether an animation switches between frames gradually or abruptly.
- [FromToByAnimation](fromtobyanimation.md): An animation that starts, stops, or increments by a specific value.
- [AnimationTimingFunction](animationtimingfunction.md): The pacing of an animation transition.
- [AnimationView](animationview.md): An animation that represents a variation of another animation.
- [OrbitAnimation](orbitanimation.md): An animation that revolves an entity around its origin.
- [AnimationFillMode](animationfillmode.md): Options that determine which animation frames display outside of the normal duration.
- [AnimationGroup](animationgroup.md): A collection of animations that play simultaneously.
- [AnimationHandoffType](animationhandofftype.md): The type of handoff the play animation method performs between a current animation and a new animation.
