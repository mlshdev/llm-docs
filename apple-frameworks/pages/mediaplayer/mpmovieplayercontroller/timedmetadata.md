> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/timedmetadata](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/timedmetadata)

# timedMetadata (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 9.0) · iPadOS 4.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Obtains the most recent time-based metadata provided by the streamed movie.

> Use AVPlayerViewController in AVKit.

## Declaration

```swift
var timedMetadata: [Any]! { get }
```

<a id="return-value"></a>

## Return Value

An array of the most recent [MPTimedMetadata](../mptimedmetadata.md) objects provided by the streamed movie.

## See Also

### Controlling and monitoring playback

- [loadState](loadstate.md): Deprecated. The network load state of the movie player.
- [playbackState](playbackstate.md): Deprecated. The current playback state of the movie player.
- [initialPlaybackTime](initialplaybacktime.md): Deprecated. The time, specified in seconds within the video timeline, when playback should start.
- [endPlaybackTime](endplaybacktime.md): Deprecated. The end time (measured in seconds) for playback of the movie.
- [shouldAutoplay](shouldautoplay.md): Deprecated. A Boolean that indicates whether a movie should begin playback automatically.
- [readyForDisplay](readyfordisplay.md): Deprecated. A Boolean that indicates whether the first video frame of the movie is ready to be displayed.
- [repeatMode](repeatmode.md): Deprecated. Determines how the movie player repeats the playback of the movie.

# timedMetadata (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 9.0) · iPadOS 4.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Obtains the most recent time-based metadata provided by the streamed movie.

> Use AVPlayerViewController in AVKit.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray * timedMetadata;
```

<a id="return-value"></a>

## Return Value

An array of the most recent [MPTimedMetadata](../mptimedmetadata.md) objects provided by the streamed movie.

## See Also

### Controlling and monitoring playback

- [loadState](loadstate.md): Deprecated. The network load state of the movie player.
- [playbackState](playbackstate.md): Deprecated. The current playback state of the movie player.
- [initialPlaybackTime](initialplaybacktime.md): Deprecated. The time, specified in seconds within the video timeline, when playback should start.
- [endPlaybackTime](endplaybacktime.md): Deprecated. The end time (measured in seconds) for playback of the movie.
- [shouldAutoplay](shouldautoplay.md): Deprecated. A Boolean that indicates whether a movie should begin playback automatically.
- [readyForDisplay](readyfordisplay.md): Deprecated. A Boolean that indicates whether the first video frame of the movie is ready to be displayed.
- [repeatMode](repeatmode.md): Deprecated. Determines how the movie player repeats the playback of the movie.
