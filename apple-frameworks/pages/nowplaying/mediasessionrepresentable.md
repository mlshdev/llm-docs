> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediasessionrepresentable](https://developer.apple.com/documentation/nowplaying/mediasessionrepresentable)

# MediaSessionRepresentable

**Framework:** Now Playing  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A protocol that provides content metadata, playback state, and commands for a Now Playing session.

## Declaration

```swift
@MainActor protocol MediaSessionRepresentable : Identifiable
```

## Mentioned In

- [Publishing media sessions](publishing-media-sessions.md)

<a id="overview"></a>

## Overview

Conform to this protocol to provide the media content description, playback state, and commands like [play(\_:)](mediacommand/play%28__%29.md), [pause(\_:)](mediacommand/pause%28__%29.md), [next(\_:)](mediacommand/next%28__%29.md), [previous(\_:)](mediacommand/previous%28__%29.md), and more.

The framework observes your `@Observable` model and automatically updates the system’s Now Playing interface when your properties change.

For more information, see [Publishing media sessions](publishing-media-sessions.md)

The following example shows a basic session representable:

```swift
@Observable
class PlayerModel: MediaSessionRepresentable {
    let id = "com.example.music"
    var currentTrack: Track?
    var isPlaying = false
    var currentTime: TimeInterval = 0

    var content: (any MediaContentRepresentable)? {
        guard let track = currentTrack else { return nil }
        return MusicContent(
            id: track.id,
            songTitle: track.title,
            artistName: track.artist,
            albumName: track.album,
            type: .audio,
            duration: .finite(track.duration),
            isExplicit: track.isExplicit,
            artwork: Artwork(id: track.artworkID) { size in
                let data = await self.loadArtworkData(with: size)
                return try ArtworkRepresentation(data: data)
            }
        )
    }

    var playbackSnapshot: MediaPlaybackSnapshot? {
        if isPlaying {
            return MediaPlaybackSnapshot(state: .playing(rate: 1.0), elapsedTime: currentTime, timestamp: .now)
        } else {
            return MediaPlaybackSnapshot(state: .paused, elapsedTime: currentTime, timestamp: .now)
        }
    }

    var commands: [MediaCommand] {[
        .play { await self.play() },
        .pause { await self.pause() },
        .next { await self.nextTrack() },
        .previous { await self.previousTrack() },
    ]}
}
```

## Topics

### Instance Properties

- [commands](mediasessionrepresentable/commands.md): The commands supported by this session.
- [content](mediasessionrepresentable/content.md): The content being played in this session.
- [id](mediasessionrepresentable/id.md): The unique identifier for this session.
- [playbackSnapshot](mediasessionrepresentable/playbacksnapshot.md): The current playback state of this session.

## Relationships

### Inherits From

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Local sessions

- [Publishing media sessions](publishing-media-sessions.md): Show your app’s media on the Lock Screen and Control Center.
- [MediaSession](mediasession.md): A local Now Playing session that publishes metadata and commands to the system.
- [MediaSessionError](mediasessionerror.md): Errors that can occur during local session operations.
