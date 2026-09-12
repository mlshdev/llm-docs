> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediaplaybacksnapshot/playbackstate](https://developer.apple.com/documentation/nowplaying/mediaplaybacksnapshot/playbackstate)

# MediaPlaybackSnapshot.PlaybackState

**Framework:** Now Playing  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The current playback state of a Now Playing session.

## Declaration

```swift
enum PlaybackState
```

<a id="overview"></a>

## Overview

Use this type to inform the system about the current state of media playback in your session. The system uses the playback state to update the Now Playing interface and manage audio session behavior appropriately.

## Topics

### Enumeration Cases

- [MediaPlaybackSnapshot.PlaybackState.buffering](playbackstate/buffering.md): Playback is buffering content.
- [MediaPlaybackSnapshot.PlaybackState.interrupted](playbackstate/interrupted.md): Playback was interrupted by the system.
- [MediaPlaybackSnapshot.PlaybackState.paused](playbackstate/paused.md): Playback is paused.
- [MediaPlaybackSnapshot.PlaybackState.playing(rate:)](playbackstate/playing%28rate_%29.md): Content is currently playing.
- [MediaPlaybackSnapshot.PlaybackState.stopped](playbackstate/stopped.md): Playback is stopped.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
