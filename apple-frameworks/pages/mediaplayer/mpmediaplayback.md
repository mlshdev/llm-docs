> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplayback](https://developer.apple.com/documentation/mediaplayer/mpmediaplayback)

# MPMediaPlayback (Swift)

**Framework:** Media Player  
**Kind:** Protocol  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

A protocol that defines the interface for controlling audio media playback.

## Declaration

```swift
protocol MPMediaPlayback
```

## Mentioned In

- [Playing audio using the built-in music player](playing-audio-using-the-built-in-music-player.md)

<a id="overview"></a>

## Overview

This protocol supports basic transport operations including start, stop, and pause, and also lets you seek forward and back through media or to a specific point in its timeline.

## Topics

### Starting and stopping playback

- [play()](mpmediaplayback/play%28%29.md): Initiates playback of the current item.
- [pause()](mpmediaplayback/pause%28%29.md): Pauses playback of the current item.
- [stop()](mpmediaplayback/stop%28%29.md): Ends playback of the current item.
- [prepareToPlay()](mpmediaplayback/preparetoplay%28%29.md): Prepares a media player for playback.
- [isPreparedToPlay](mpmediaplayback/ispreparedtoplay.md): A Boolean value indicating whether a media player is ready to play.

### Seeking within media

- [beginSeekingBackward()](mpmediaplayback/beginseekingbackward%28%29.md): Begins seeking backward through the media content.
- [beginSeekingForward()](mpmediaplayback/beginseekingforward%28%29.md): Begins seeking forward through the media content.
- [endSeeking()](mpmediaplayback/endseeking%28%29.md): Ends forward and backward seeking through the media content.

### Accessing playback attributes

- [currentPlaybackRate](mpmediaplayback/currentplaybackrate.md): The current playback rate for the player.
- [currentPlaybackTime](mpmediaplayback/currentplaybacktime.md): The current position of the playhead.

## Relationships

### Conforming Types

- [MPMoviePlayerController](mpmovieplayercontroller.md)
- [MPMusicPlayerApplicationController](mpmusicplayerapplicationcontroller.md)
- [MPMusicPlayerController](mpmusicplayercontroller.md)

## See Also

### Built-in music playback

- [Playing audio using the built-in music player](playing-audio-using-the-built-in-music-player.md): Create a media player inside your app to play audio from the user’s media library.
- [MPMusicPlayerController](mpmusicplayercontroller.md): An object that plays audio media items from the device’s Music app library.
- [MPSystemMusicPlayerController](mpsystemmusicplayercontroller.md): A protocol for playing videos in the Music app.

# MPMediaPlayback (Objective-C)

**Framework:** Media Player  
**Kind:** Protocol  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

A protocol that defines the interface for controlling audio media playback.

## Declaration

```objectivec
@protocol MPMediaPlayback
```

## Mentioned In

- [Playing audio using the built-in music player](playing-audio-using-the-built-in-music-player.md)

<a id="overview"></a>

## Overview

This protocol supports basic transport operations including start, stop, and pause, and also lets you seek forward and back through media or to a specific point in its timeline.

## Topics

### Starting and stopping playback

- [play](mpmediaplayback/play%28%29.md): Initiates playback of the current item.
- [pause](mpmediaplayback/pause%28%29.md): Pauses playback of the current item.
- [stop](mpmediaplayback/stop%28%29.md): Ends playback of the current item.
- [prepareToPlay](mpmediaplayback/preparetoplay%28%29.md): Prepares a media player for playback.
- [isPreparedToPlay](mpmediaplayback/ispreparedtoplay.md): A Boolean value indicating whether a media player is ready to play.

### Seeking within media

- [beginSeekingBackward](mpmediaplayback/beginseekingbackward%28%29.md): Begins seeking backward through the media content.
- [beginSeekingForward](mpmediaplayback/beginseekingforward%28%29.md): Begins seeking forward through the media content.
- [endSeeking](mpmediaplayback/endseeking%28%29.md): Ends forward and backward seeking through the media content.

### Accessing playback attributes

- [currentPlaybackRate](mpmediaplayback/currentplaybackrate.md): The current playback rate for the player.
- [currentPlaybackTime](mpmediaplayback/currentplaybacktime.md): The current position of the playhead.

### Notifications

- [MPMediaPlaybackIsPreparedToPlayDidChangeNotification](mpmediaplaybackispreparedtoplaydidchangenotification.md): Deprecated. Indicates that the prepared to play status of the media player has changed.

## Relationships

### Conforming Types

- [MPMoviePlayerController](mpmovieplayercontroller.md)
- [MPMusicPlayerController](mpmusicplayercontroller.md)

## See Also

### Built-in music playback

- [Playing audio using the built-in music player](playing-audio-using-the-built-in-music-player.md): Create a media player inside your app to play audio from the user’s media library.
- [MPMusicPlayerController](mpmusicplayercontroller.md): An object that plays audio media items from the device’s Music app library.
- [MPSystemMusicPlayerController](mpsystemmusicplayercontroller.md): A protocol for playing videos in the Music app.
