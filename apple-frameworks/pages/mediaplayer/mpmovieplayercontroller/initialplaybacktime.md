> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/initialplaybacktime](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/initialplaybacktime)

# initialPlaybackTime (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The time, specified in seconds within the video timeline, when playback should start.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var initialPlaybackTime: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

For progressively downloaded content, playback starts at the closest key frame prior to the provided time. For video-on-demand content, playback starts at the nearest segment boundary to the provided time. For live video streams, the playback start time is measured from the start of the current playlist and is rounded to the nearest segment boundary.

The default value of this property is -1, which indicates the natural start time of the movie.

## See Also

### Controlling and monitoring playback

- [loadState](loadstate.md): Deprecated. The network load state of the movie player.
- [playbackState](playbackstate.md): Deprecated. The current playback state of the movie player.
- [endPlaybackTime](endplaybacktime.md): Deprecated. The end time (measured in seconds) for playback of the movie.
- [shouldAutoplay](shouldautoplay.md): Deprecated. A Boolean that indicates whether a movie should begin playback automatically.
- [readyForDisplay](readyfordisplay.md): Deprecated. A Boolean that indicates whether the first video frame of the movie is ready to be displayed.
- [repeatMode](repeatmode.md): Deprecated. Determines how the movie player repeats the playback of the movie.
- [timedMetadata](timedmetadata.md): Deprecated. Obtains the most recent time-based metadata provided by the streamed movie.

# initialPlaybackTime (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The time, specified in seconds within the video timeline, when playback should start.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval initialPlaybackTime;
```

<a id="Discussion"></a>

## Discussion

For progressively downloaded content, playback starts at the closest key frame prior to the provided time. For video-on-demand content, playback starts at the nearest segment boundary to the provided time. For live video streams, the playback start time is measured from the start of the current playlist and is rounded to the nearest segment boundary.

The default value of this property is -1, which indicates the natural start time of the movie.

## See Also

### Controlling and monitoring playback

- [loadState](loadstate.md): Deprecated. The network load state of the movie player.
- [playbackState](playbackstate.md): Deprecated. The current playback state of the movie player.
- [endPlaybackTime](endplaybacktime.md): Deprecated. The end time (measured in seconds) for playback of the movie.
- [shouldAutoplay](shouldautoplay.md): Deprecated. A Boolean that indicates whether a movie should begin playback automatically.
- [readyForDisplay](readyfordisplay.md): Deprecated. A Boolean that indicates whether the first video frame of the movie is ready to be displayed.
- [repeatMode](repeatmode.md): Deprecated. Determines how the movie player repeats the playback of the movie.
- [timedMetadata](timedmetadata.md): Deprecated. Obtains the most recent time-based metadata provided by the streamed movie.
