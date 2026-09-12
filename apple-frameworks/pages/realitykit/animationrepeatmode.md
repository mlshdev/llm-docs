> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationrepeatmode](https://developer.apple.com/documentation/realitykit/animationrepeatmode)

# AnimationRepeatMode

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Options that determine whether an animation replays after completion.

## Declaration

```swift
enum AnimationRepeatMode
```

<a id="overview"></a>

## Overview

Adopters of [AnimationDefinition](animationdefinition.md), such as [SampledAnimation](sampledanimation.md), offer repeat options of this type through the [repeatMode](sampledanimation/repeatmode.md) property.

To select a behavior, set the repeat mode as you configure your animation, as in the following example:

```swift
let clip = FromToByAnimation<Transform>()
clip.repeatMode = .repeat
```

## Topics

### Choosing a repeat mode

- [AnimationRepeatMode.repeat](animationrepeatmode/repeat.md): A mode that restarts the animation after it completes.
- [AnimationRepeatMode.cumulative](animationrepeatmode/cumulative.md): A mode that repeats indefinitely and begins each repetition by setting the animated property to the ending value of the previous repetition.
- [AnimationRepeatMode.autoReverse](animationrepeatmode/autoreverse.md): A mode that reverses the animation after reaching the end or the beginning.
- [AnimationRepeatMode.none](animationrepeatmode/none.md): An option that determines the animation doesn’t repeat.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Animation playback

- [Automatically animating RealityKit entities](automatically-animating-realitykit-entities.md): Invoke implicit animations by setting the entity’s desired end state.
- [AnimationResource](animationresource.md): An animation for the properties of scenes or entities.
- [AnimationLibraryComponent](animationlibrarycomponent.md): A component that represents a collection of animations that an entity can play.
- [AnimationLibraryComponent.AnimationCollection](animationlibrarycomponent/animationcollection.md): A collection of animations an entity can play.
- [AnimationEvents](animationevents.md): Notable milestones that the framework signals during animation playback.
- [AnimationPlaybackController](animationplaybackcontroller.md): A controller that manages animation playback.
