> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicplayer](https://developer.apple.com/documentation/musickit/musicplayer)

# MusicPlayer

**Framework:** MusicKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

An object your app uses to play music.

## Declaration

```swift
class MusicPlayer
```

## Topics

### Classes

- [MusicPlayer.Queue](musicplayer/queue.md): A representation of the playback queue for a music player.
- [MusicPlayer.State](musicplayer/state-swift.class.md): An object that exposes the observable properties of a music player.

### Instance Properties

- [isPreparedToPlay](musicplayer/ispreparedtoplay.md): A Boolean value that indicates whether a music player is ready to play.
- [playbackTime](musicplayer/playbacktime.md): The current playback time, in seconds, of the current entry.
- [state](musicplayer/state-swift.property.md): An object that exposes the observable properties of the music player.

### Instance Methods

- [beginSeekingBackward()](musicplayer/beginseekingbackward%28%29.md): Begins seeking backward through the music content.
- [beginSeekingForward()](musicplayer/beginseekingforward%28%29.md): Begins seeking forward through the music content.
- [endSeeking()](musicplayer/endseeking%28%29.md): Ends forward and backward seeking through the music content.
- [pause()](musicplayer/pause%28%29.md): Pauses playback of the current entry.
- [play()](musicplayer/play%28%29.md): Initiates playback from the current queue.
- [prepareToPlay()](musicplayer/preparetoplay%28%29.md): Prepares the current queue for playback, interrupting any active (nonmixable) audio sessions.
- [restartCurrentEntry()](musicplayer/restartcurrententry%28%29.md): Restarts playback at the beginning of the currently playing entry.
- [skipToNextEntry()](musicplayer/skiptonextentry%28%29.md): Starts playback of the next entry in the playback queue.
- [skipToPreviousEntry()](musicplayer/skiptopreviousentry%28%29.md): Starts playback of the previous entry in the playback queue.
- [stop()](musicplayer/stop%28%29.md): Ends playback of the current entry.

### Enumerations

- [MusicPlayer.PlaybackStatus](musicplayer/playbackstatus.md): The music player playback status modes.
- [MusicPlayer.RepeatMode](musicplayer/repeatmode.md): The repeat modes for the music player.
- [MusicPlayer.ShuffleMode](musicplayer/shufflemode.md): The shuffle modes for the music player.
- [MusicPlayer.Transition](musicplayer/transition.md): The transition applied between playing items.

## Relationships

### Inherited By

- [ApplicationMusicPlayer](applicationmusicplayer.md)
- [SystemMusicPlayer](systemmusicplayer.md)

## See Also

### Playback

- [ApplicationMusicPlayer](applicationmusicplayer.md): An object your app uses to play music in a way that doesn’t affect the Music app’s state.
- [SystemMusicPlayer](systemmusicplayer.md): An object your app uses to play music by controlling the Music app’s state.
- [PlayableMusicItem](playablemusicitem.md): A set of properties that a music player uses to initiate playback for a music item.
- [PlayParameters](playparameters.md): An opaque object that represents parameters to initiate playback of a playable music item using a music player.
