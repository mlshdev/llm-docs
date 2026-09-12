> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/endplaybacktime](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/endplaybacktime)

# endPlaybackTime (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The end time (measured in seconds) for playback of the movie.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var endPlaybackTime: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is -1, which indicates the natural end time of the movie. This property is not applicable for streamed content.

## See Also

### Controlling and monitoring playback

- [loadState](loadstate.md): Deprecated. The network load state of the movie player.
- [playbackState](playbackstate.md): Deprecated. The current playback state of the movie player.
- [initialPlaybackTime](initialplaybacktime.md): Deprecated. The time, specified in seconds within the video timeline, when playback should start.
- [shouldAutoplay](shouldautoplay.md): Deprecated. A Boolean that indicates whether a movie should begin playback automatically.
- [readyForDisplay](readyfordisplay.md): Deprecated. A Boolean that indicates whether the first video frame of the movie is ready to be displayed.
- [repeatMode](repeatmode.md): Deprecated. Determines how the movie player repeats the playback of the movie.
- [timedMetadata](timedmetadata.md): Deprecated. Obtains the most recent time-based metadata provided by the streamed movie.

# endPlaybackTime (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The end time (measured in seconds) for playback of the movie.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval endPlaybackTime;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is -1, which indicates the natural end time of the movie. This property is not applicable for streamed content.

## See Also

### Controlling and monitoring playback

- [loadState](loadstate.md): Deprecated. The network load state of the movie player.
- [playbackState](playbackstate.md): Deprecated. The current playback state of the movie player.
- [initialPlaybackTime](initialplaybacktime.md): Deprecated. The time, specified in seconds within the video timeline, when playback should start.
- [shouldAutoplay](shouldautoplay.md): Deprecated. A Boolean that indicates whether a movie should begin playback automatically.
- [readyForDisplay](readyfordisplay.md): Deprecated. A Boolean that indicates whether the first video frame of the movie is ready to be displayed.
- [repeatMode](repeatmode.md): Deprecated. Determines how the movie player repeats the playback of the movie.
- [timedMetadata](timedmetadata.md): Deprecated. Obtains the most recent time-based metadata provided by the streamed movie.
