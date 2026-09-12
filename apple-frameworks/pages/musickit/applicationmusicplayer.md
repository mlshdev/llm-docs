> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/applicationmusicplayer](https://developer.apple.com/documentation/musickit/applicationmusicplayer)

# ApplicationMusicPlayer

**Framework:** MusicKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

An object your app uses to play music in a way that doesn’t affect the Music app’s state.

## Declaration

```swift
class ApplicationMusicPlayer
```

<a id="overview"></a>

## Overview

The application music player plays music specifically for your app, and doesn’t affect the Music app’s state.

If your app includes a background audio mode in your `Info.plist` file, the application music player continues playing the current music item when your app moves to the background.

## Topics

### Classes

- [ApplicationMusicPlayer.Queue](applicationmusicplayer/queue-swift.class.md)

### Instance Properties

- [queue](applicationmusicplayer/queue-swift.property.md): The playback queue for the application music player.
- [transition](applicationmusicplayer/transition.md): The transition between items for the application music player.

### Type Properties

- [shared](applicationmusicplayer/shared.md): The shared application music player, which plays music specifically for your app.

## Relationships

### Inherits From

- [MusicPlayer](musicplayer.md)

## See Also

### Playback

- [SystemMusicPlayer](systemmusicplayer.md): An object your app uses to play music by controlling the Music app’s state.
- [MusicPlayer](musicplayer.md): An object your app uses to play music.
- [PlayableMusicItem](playablemusicitem.md): A set of properties that a music player uses to initiate playback for a music item.
- [PlayParameters](playparameters.md): An opaque object that represents parameters to initiate playback of a playable music item using a music player.
