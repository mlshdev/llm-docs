> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/readyfordisplay](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/readyfordisplay)

# readyForDisplay (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 9.0) · iPadOS 6.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean that indicates whether the first video frame of the movie is ready to be displayed.

## Declaration

```swift
var readyForDisplay: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). This property returns [true](https://developer.apple.com/documentation/swift/true) if the first video frame is ready to be displayed and returns [false](https://developer.apple.com/documentation/swift/false) if there are no video tracks associated. When the value of this property changes to [true](https://developer.apple.com/documentation/swift/true), a [MPMoviePlayerReadyForDisplayDidChangeNotification](../mpmovieplayerreadyfordisplaydidchangenotification.md) is sent.

## See Also

### Controlling and monitoring playback

- [loadState](loadstate.md): Deprecated. The network load state of the movie player.
- [playbackState](playbackstate.md): Deprecated. The current playback state of the movie player.
- [initialPlaybackTime](initialplaybacktime.md): Deprecated. The time, specified in seconds within the video timeline, when playback should start.
- [endPlaybackTime](endplaybacktime.md): Deprecated. The end time (measured in seconds) for playback of the movie.
- [shouldAutoplay](shouldautoplay.md): Deprecated. A Boolean that indicates whether a movie should begin playback automatically.
- [repeatMode](repeatmode.md): Deprecated. Determines how the movie player repeats the playback of the movie.
- [timedMetadata](timedmetadata.md): Deprecated. Obtains the most recent time-based metadata provided by the streamed movie.

# readyForDisplay (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 9.0) · iPadOS 6.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean that indicates whether the first video frame of the movie is ready to be displayed.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL readyForDisplay;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). This property returns [true](https://developer.apple.com/documentation/swift/true) if the first video frame is ready to be displayed and returns [false](https://developer.apple.com/documentation/swift/false) if there are no video tracks associated. When the value of this property changes to [true](https://developer.apple.com/documentation/swift/true), a [MPMoviePlayerReadyForDisplayDidChangeNotification](../mpmovieplayerreadyfordisplaydidchangenotification.md) is sent.

## See Also

### Controlling and monitoring playback

- [loadState](loadstate.md): Deprecated. The network load state of the movie player.
- [playbackState](playbackstate.md): Deprecated. The current playback state of the movie player.
- [initialPlaybackTime](initialplaybacktime.md): Deprecated. The time, specified in seconds within the video timeline, when playback should start.
- [endPlaybackTime](endplaybacktime.md): Deprecated. The end time (measured in seconds) for playback of the movie.
- [shouldAutoplay](shouldautoplay.md): Deprecated. A Boolean that indicates whether a movie should begin playback automatically.
- [repeatMode](repeatmode.md): Deprecated. Determines how the movie player repeats the playback of the movie.
- [timedMetadata](timedmetadata.md): Deprecated. Obtains the most recent time-based metadata provided by the streamed movie.
