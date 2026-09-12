> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationevents/playbacklooped](https://developer.apple.com/documentation/realitykit/animationevents/playbacklooped)

# AnimationEvents.PlaybackLooped

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The event raised when an animation loops.

## Declaration

```swift
struct PlaybackLooped
```

<a id="overview"></a>

## Overview

You loop animation playback by creating an [AnimationResource](../animationresource.md) instance from an existing one with either the [repeat(count:)](../animationresource/repeat%28count_%29.md) or the [repeat(duration:)](../animationresource/repeat%28duration_%29.md) method.

## Topics

### Instance Properties

- [playbackController](playbacklooped/playbackcontroller.md): The animation playback controller managing the animation that triggered the event.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Recognizing animation events

- [AnimationEvents.PlaybackStarted](playbackstarted.md): The event raised when an animation has been started.
- [AnimationEvents.PlaybackCompleted](playbackcompleted.md): The event raised when an animation reaches the end of its duration.
- [AnimationEvents.PlaybackTerminated](playbackterminated.md): The event raised when an animation has been terminated, regardless of whether it ran to completion.
