> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationplaybackcontroller](https://developer.apple.com/documentation/realitykit/animationplaybackcontroller)

# AnimationPlaybackController

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A controller that manages animation playback.

## Declaration

```swift
@MainActor @preconcurrency class AnimationPlaybackController
```

<a id="overview"></a>

## Overview

This class controls the playback of an entity animation by providing its pause, resume, or stop functions.

The animation starts immediately after you call [playAnimation(\_:transitionDuration:startsPaused:)](entity/playanimation%28__transitionduration_startspaused_%29.md), or `Entity/move(to:relativeTo:duration:timingFunction:)-905k`, which both return an instance of this class.

A controller invalidates after its associated animation completes or stops. To play another animation, perform an action that generates another controller.

While an animation plays, you can receive notification of particular playback states by subscribing to an event. For more information, see [AnimationEvents](animationevents.md).

## Topics

### Inspecting and controlling playback

- [pause()](animationplaybackcontroller/pause%28%29.md): Pauses the animation.
- [resume()](animationplaybackcontroller/resume%28%29.md): Resumes a paused animation.
- [stop()](animationplaybackcontroller/stop%28%29.md): Stops an animation.
- [isPlaying](animationplaybackcontroller/isplaying.md): A Boolean value that indicates whether the animation plays.
- [isStopped](animationplaybackcontroller/isstopped.md): A Boolean value that indicates whether the animation stopped.
- [isValid](animationplaybackcontroller/isvalid.md): A Boolean value that indicates whether the animation controller is functional.
- [blendFactor](animationplaybackcontroller/blendfactor.md): The level of influence the controller gives to its animation.

### Managing completion

- [isComplete](animationplaybackcontroller/iscomplete.md): A Boolean that indicates whether the animation has finished running.
- [isPaused](animationplaybackcontroller/ispaused.md): A Boolean that indicates whether the animation is paused.

### Accessing the associated entity

- [entity](animationplaybackcontroller/entity.md): The entity to which the animation applies.

### Timing animation playback

- [duration](animationplaybackcontroller/duration.md): The length of time the animation spans, in seconds.
- [speed](animationplaybackcontroller/speed.md): The animation’s rate of playback.
- [clock](animationplaybackcontroller/clock.md): A reference clock to synchronize the animation with other events.
- [time](animationplaybackcontroller/time.md): The animation’s location within the timeline.

### Operators

- [==(\_:\_:)](animationplaybackcontroller/==%28____%29.md): Indicates whether two animation playback controllers are equal.

### Instance Methods

- [hash(into:)](animationplaybackcontroller/hash%28into_%29.md): Hashes the essential components of the controller by feeding them into the given hash function.
- [stop(blendOutDuration:)](animationplaybackcontroller/stop%28blendoutduration_%29.md): Stops an animation with a fade-out time.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Animation playback

- [Automatically animating RealityKit entities](automatically-animating-realitykit-entities.md): Invoke implicit animations by setting the entity’s desired end state.
- [AnimationResource](animationresource.md): An animation for the properties of scenes or entities.
- [AnimationLibraryComponent](animationlibrarycomponent.md): A component that represents a collection of animations that an entity can play.
- [AnimationLibraryComponent.AnimationCollection](animationlibrarycomponent/animationcollection.md): A collection of animations an entity can play.
- [AnimationEvents](animationevents.md): Notable milestones that the framework signals during animation playback.
- [AnimationRepeatMode](animationrepeatmode.md): Options that determine whether an animation replays after completion.
