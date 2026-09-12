> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplayback/play()](https://developer.apple.com/documentation/mediaplayer/mpmediaplayback/play())

# play() (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Initiates playback of the current item.

## Declaration

```swift
func play()
```

## Mentioned In

- [Playing audio using the built-in music player](../playing-audio-using-the-built-in-music-player.md)

<a id="Discussion"></a>

## Discussion

If playback was previously paused, this method resumes playback where it left off; otherwise, this method plays the first available item, from the beginning.

If a media player isn’t prepared for playback when you call this method, this method first prepares the media player and then starts playback. To minimize playback delay, call the [prepareToPlay()](preparetoplay%28%29.md) method before you call this method.

To receive a notification when a movie player is ready to play, register for the [MPMoviePlayerLoadStateDidChangeNotification](../mpmovieplayerloadstatedidchangenotification.md) notification. You can then check load state by accessing the movie player’s [loadState](../mpmovieplayercontroller/loadstate.md) property.

## See Also

### Starting and stopping playback

- [pause()](pause%28%29.md): Pauses playback of the current item.
- [stop()](stop%28%29.md): Ends playback of the current item.
- [prepareToPlay()](preparetoplay%28%29.md): Prepares a media player for playback.
- [isPreparedToPlay](ispreparedtoplay.md): A Boolean value indicating whether a media player is ready to play.

# play (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Initiates playback of the current item.

## Declaration

```objectivec
- (void) play;
```

## Mentioned In

- [Playing audio using the built-in music player](../playing-audio-using-the-built-in-music-player.md)

<a id="Discussion"></a>

## Discussion

If playback was previously paused, this method resumes playback where it left off; otherwise, this method plays the first available item, from the beginning.

If a media player isn’t prepared for playback when you call this method, this method first prepares the media player and then starts playback. To minimize playback delay, call the [prepareToPlay](preparetoplay%28%29.md) method before you call this method.

To receive a notification when a movie player is ready to play, register for the [MPMoviePlayerLoadStateDidChangeNotification](../mpmovieplayerloadstatedidchangenotification.md) notification. You can then check load state by accessing the movie player’s [loadState](../mpmovieplayercontroller/loadstate.md) property.

## See Also

### Starting and stopping playback

- [pause](pause%28%29.md): Pauses playback of the current item.
- [stop](stop%28%29.md): Ends playback of the current item.
- [prepareToPlay](preparetoplay%28%29.md): Prepares a media player for playback.
- [isPreparedToPlay](ispreparedtoplay.md): A Boolean value indicating whether a media player is ready to play.
