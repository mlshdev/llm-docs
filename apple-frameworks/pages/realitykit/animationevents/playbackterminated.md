> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationevents/playbackterminated](https://developer.apple.com/documentation/realitykit/animationevents/playbackterminated)

# AnimationEvents.PlaybackTerminated

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The event raised when an animation has been terminated, regardless of whether it ran to completion.

## Declaration

```swift
struct PlaybackTerminated
```

## Topics

### Instance Properties

- [playbackController](playbackterminated/playbackcontroller.md): The animation playback controller managing the animation that triggered the event.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Recognizing animation events

- [AnimationEvents.PlaybackStarted](playbackstarted.md): The event raised when an animation has been started.
- [AnimationEvents.PlaybackCompleted](playbackcompleted.md): The event raised when an animation reaches the end of its duration.
- [AnimationEvents.PlaybackLooped](playbacklooped.md): The event raised when an animation loops.
