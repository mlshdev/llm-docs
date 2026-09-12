> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediaplaybacksnapshot](https://developer.apple.com/documentation/nowplaying/mediaplaybacksnapshot)

# MediaPlaybackSnapshot

**Framework:** Now Playing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A snapshot of playback state and timing for a Now Playing session.

## Declaration

```swift
struct MediaPlaybackSnapshot
```

## Mentioned In

- [Publishing media sessions](publishing-media-sessions.md)

<a id="overview"></a>

## Overview

Use a snapshot to describe whether the session is playing, paused, or buffering, along with the current elapsed time and the timestamp at which that elapsed time was captured. The system uses the snapshot to extrapolate elapsed time between updates.

## Topics

### Initializers

- [init(state:defaultPlaybackRate:elapsedTime:timestamp:)](mediaplaybacksnapshot/init%28state_defaultplaybackrate_elapsedtime_timestamp_%29.md): Creates a playback snapshot with the specified state and timing.

### Enumerations

- [MediaPlaybackSnapshot.PlaybackState](mediaplaybacksnapshot/playbackstate.md): The current playback state of a Now Playing session.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Playback

- [Content types and metadata](content-types-and-metadata.md): Describe the media your app is playing.
- [Playback commands](playback-commands.md): Declare the playback controls your app supports.
