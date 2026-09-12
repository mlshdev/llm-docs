> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationresource](https://developer.apple.com/documentation/realitykit/animationresource)

# AnimationResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An animation for the properties of scenes or entities.

## Declaration

```swift
@MainActor @preconcurrency class AnimationResource
```

## Mentioned In

- [Automatically animating RealityKit entities](automatically-animating-realitykit-entities.md)

<a id="overview"></a>

## Overview

You find animation resources in an entity’s [availableAnimations](entity/availableanimations.md) array. Animation resources come bundled with an entity when you load the entity from a file. They describe an animation that’s specific to the entity to which they are attached.

Use the entity’s [playAnimation(\_:transitionDuration:startsPaused:)](entity/playanimation%28__transitionduration_startspaused_%29.md) method to play a particular item in its animation resource array, or the `playAnimation(named:transitionDuration:startsPaused:)` method to play all of the animations with a given name. From both methods, you receive an [AnimationPlaybackController](animationplaybackcontroller.md) instance that lets you manage playback of the resource.

If you want to loop an animation, call the resource’s [repeat(count:)](animationresource/repeat%28count_%29.md) method to create a new resource that plays a given number of times in a row, or call the [repeat(duration:)](animationresource/repeat%28duration_%29.md) method to create a new resource that loops for the given duration. The latter loops indefinitely if you omit the duration parameter. You use the new animation resource that these methods return just as you would any other.

## Topics

### Creating an animation resource

- [generate(with:)](animationresource/generate%28with_%29.md): Creates an animation resource from a definition.
- [sequence(with:)](animationresource/sequence%28with_%29.md): Creates an animation resource that plays a collection of animations in a specified sequence.
- [group(with:)](animationresource/group%28with_%29.md): Creates an animation resource that simultaneously plays back a collection of animations.
- [repeat(count:)](animationresource/repeat%28count_%29.md): Creates an animation that repeats the specified number of times.
- [repeat(duration:)](animationresource/repeat%28duration_%29.md): Repeats an animation for the specified amount of time.

### Inspecting animation information

- [name](animationresource/name.md): The name of the animation resource.
- [definition](animationresource/definition.md): The timeframe, target object, and visual semantics of the animation.
- [AnimationFillMode](animationfillmode.md): Options that determine which animation frames display outside of the normal duration.

### Associating an animation with an entity

- [store(in:)](animationresource/store%28in_%29.md): Adds the animation to an entity without playing it.

### Type Methods

- [makeActionAnimation(for:duration:name:bindTarget:blendLayer:repeatMode:fillMode:trimStart:trimEnd:trimDuration:offset:delay:speed:)](animationresource/makeactionanimation%28for_duration_name_bindtarget_blendlayer_repeatmode_fillmode_trimstart_trimend_trimduration_offset_delay_speed_%29.md): Creates an action animation containing a single event definition from an action.

## Relationships

### Conforms To

- [Resource](resource.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Animation playback

- [Automatically animating RealityKit entities](automatically-animating-realitykit-entities.md): Invoke implicit animations by setting the entity’s desired end state.
- [AnimationLibraryComponent](animationlibrarycomponent.md): A component that represents a collection of animations that an entity can play.
- [AnimationLibraryComponent.AnimationCollection](animationlibrarycomponent/animationcollection.md): A collection of animations an entity can play.
- [AnimationEvents](animationevents.md): Notable milestones that the framework signals during animation playback.
- [AnimationPlaybackController](animationplaybackcontroller.md): A controller that manages animation playback.
- [AnimationRepeatMode](animationrepeatmode.md): Options that determine whether an animation replays after completion.
