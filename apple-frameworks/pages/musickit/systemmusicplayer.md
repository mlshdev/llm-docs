> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/systemmusicplayer](https://developer.apple.com/documentation/musickit/systemmusicplayer)

# SystemMusicPlayer

**Framework:** MusicKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

An object your app uses to play music by controlling the Music app’s state.

## Declaration

```swift
class SystemMusicPlayer
```

<a id="overview"></a>

## Overview

The system music player employs the Music app on your behalf. When your app accesses the system music player for the first time, it assumes the current Music app state and controls it as your app runs. The shared state includes the following:

- Repeat mode (see [MusicPlayer.RepeatMode](musicplayer/repeatmode.md))
- Shuffle mode (see [MusicPlayer.ShuffleMode](musicplayer/shufflemode.md))
- Playback status (see `MusicPlayer/PlaybackStatus`)

The system music player doesn’t share other aspects of the Music app’s state. Music that’s playing continues to play when your app moves to the background.

## Topics

### Instance Properties

- [queue](systemmusicplayer/queue.md): The playback queue for the system music player.

### Type Properties

- [shared](systemmusicplayer/shared.md): The shared system music player, which controls the Music app’s state.

## Relationships

### Inherits From

- [MusicPlayer](musicplayer.md)

## See Also

### Playback

- [ApplicationMusicPlayer](applicationmusicplayer.md): An object your app uses to play music in a way that doesn’t affect the Music app’s state.
- [MusicPlayer](musicplayer.md): An object your app uses to play music.
- [PlayableMusicItem](playablemusicitem.md): A set of properties that a music player uses to initiate playback for a music item.
- [PlayParameters](playparameters.md): An opaque object that represents parameters to initiate playback of a playable music item using a music player.
