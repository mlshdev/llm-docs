> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/loadstate](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/loadstate)

# loadState (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The network load state of the movie player.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var loadState: MPMovieLoadState { get }
```

<a id="Discussion"></a>

## Discussion

See the [MPMovieLoadState](../mpmovieloadstate.md) enumeration for possible values of this property. To be notified of changes to the load state of a movie player, register for the [MPMoviePlayerLoadStateDidChangeNotification](../mpmovieplayerloadstatedidchangenotification.md) notification.

## See Also

### Controlling and monitoring playback

- [playbackState](playbackstate.md): Deprecated. The current playback state of the movie player.
- [initialPlaybackTime](initialplaybacktime.md): Deprecated. The time, specified in seconds within the video timeline, when playback should start.
- [endPlaybackTime](endplaybacktime.md): Deprecated. The end time (measured in seconds) for playback of the movie.
- [shouldAutoplay](shouldautoplay.md): Deprecated. A Boolean that indicates whether a movie should begin playback automatically.
- [readyForDisplay](readyfordisplay.md): Deprecated. A Boolean that indicates whether the first video frame of the movie is ready to be displayed.
- [repeatMode](repeatmode.md): Deprecated. Determines how the movie player repeats the playback of the movie.
- [timedMetadata](timedmetadata.md): Deprecated. Obtains the most recent time-based metadata provided by the streamed movie.

# loadState (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The network load state of the movie player.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic, readonly) MPMovieLoadState loadState;
```

<a id="Discussion"></a>

## Discussion

See the [MPMovieLoadState](../mpmovieloadstate.md) enumeration for possible values of this property. To be notified of changes to the load state of a movie player, register for the [MPMoviePlayerLoadStateDidChangeNotification](../mpmovieplayerloadstatedidchangenotification.md) notification.

## See Also

### Controlling and monitoring playback

- [playbackState](playbackstate.md): Deprecated. The current playback state of the movie player.
- [initialPlaybackTime](initialplaybacktime.md): Deprecated. The time, specified in seconds within the video timeline, when playback should start.
- [endPlaybackTime](endplaybacktime.md): Deprecated. The end time (measured in seconds) for playback of the movie.
- [shouldAutoplay](shouldautoplay.md): Deprecated. A Boolean that indicates whether a movie should begin playback automatically.
- [readyForDisplay](readyfordisplay.md): Deprecated. A Boolean that indicates whether the first video frame of the movie is ready to be displayed.
- [repeatMode](repeatmode.md): Deprecated. Determines how the movie player repeats the playback of the movie.
- [timedMetadata](timedmetadata.md): Deprecated. Obtains the most recent time-based metadata provided by the streamed movie.
