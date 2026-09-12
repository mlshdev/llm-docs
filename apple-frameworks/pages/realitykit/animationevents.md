> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationevents](https://developer.apple.com/documentation/realitykit/animationevents)

# AnimationEvents

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Notable milestones that the framework signals during animation playback.

## Declaration

```swift
enum AnimationEvents
```

<a id="overview"></a>

## Overview

This enumeration defines the playback states that an animated entity can indicate to an app. To receive notification of a particular event, create a completion handler:

```swift
private func onAnimationCompleted(_ event:
    AnimationEvents.PlaybackCompleted) {
        // Define code that runs when the animation completes.
}
```

Then, subscribe the handler on the entity for the state of interest:

```swift
// Get an animation.
let animationName =
entity.availableAnimations.first!.name!

// Pass the animation to an entity and get a controller.
entity.playAnimation(named: animationName, transitionDuration: 0.0)

entitySubscription = view.scene.publisher(for:
    AnimationEvents.PlaybackCompleted.self, on: entity)
        .sink(receiveValue: onAnimationCompleted)
```

## Topics

### Recognizing animation events

- [AnimationEvents.PlaybackStarted](animationevents/playbackstarted.md): The event raised when an animation has been started.
- [AnimationEvents.PlaybackCompleted](animationevents/playbackcompleted.md): The event raised when an animation reaches the end of its duration.
- [AnimationEvents.PlaybackLooped](animationevents/playbacklooped.md): The event raised when an animation loops.
- [AnimationEvents.PlaybackTerminated](animationevents/playbackterminated.md): The event raised when an animation has been terminated, regardless of whether it ran to completion.

### Recognizing skeletal events

- [AnimationEvents.SkeletalPoseUpdateComplete](animationevents/skeletalposeupdatecomplete.md): Raised immediately after the SkeletalPoseSystem has been updated.

### Recognizing root motion events

- [AnimationEvents.RootMotionDidUpdate](animationevents/rootmotiondidupdate.md): The event raised each frame when a new root motion delta is produced for an entity.

## See Also

### Physics and motion events

- [CollisionEvents](collisionevents.md)
- [PhysicsSimulationEvents](physicssimulationevents.md): Types of events that fire during physics simulations
