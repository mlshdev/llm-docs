> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationevents/playbackcompleted](https://developer.apple.com/documentation/realitykit/animationevents/playbackcompleted)

# AnimationEvents.PlaybackCompleted

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The event raised when an animation reaches the end of its duration.

## Declaration

```swift
struct PlaybackCompleted
```

<a id="overview"></a>

## Overview

This event isn’t triggered if you call the [stop()](../animationplaybackcontroller/stop%28%29.md) method on a playback controller.

## Topics

### Instance Properties

- [playbackController](playbackcompleted/playbackcontroller.md): The animation playback controller managing the animation that triggered the event.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Recognizing animation events

- [AnimationEvents.PlaybackStarted](playbackstarted.md): The event raised when an animation has been started.
- [AnimationEvents.PlaybackLooped](playbacklooped.md): The event raised when an animation loops.
- [AnimationEvents.PlaybackTerminated](playbackterminated.md): The event raised when an animation has been terminated, regardless of whether it ran to completion.
