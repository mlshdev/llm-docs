> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayerviewcontroller/movieplayer](https://developer.apple.com/documentation/mediaplayer/mpmovieplayerviewcontroller/movieplayer)

# moviePlayer (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The movie player controller object used to present the movie.

> Use AVPlayerViewController in AVKit.

## Declaration

```swift
var moviePlayer: MPMoviePlayerController! { get }
```

<a id="Discussion"></a>

## Discussion

The [MPMoviePlayerController](../mpmovieplayercontroller.md) object in this property is created automatically by the receiver and cannot be changed. However, you can use the object to manage the presentation and configuration of the movie playback.

## See Also

### New methods

- [init(contentURL:)](init%28contenturl_%29.md): Deprecated. Returns a movie player view controller initialized with the specified movie.

# moviePlayer (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The movie player controller object used to present the movie.

> Use AVPlayerViewController in AVKit.

## Declaration

```objectivec
@property (nonatomic, readonly) MPMoviePlayerController * moviePlayer;
```

<a id="Discussion"></a>

## Discussion

The [MPMoviePlayerController](../mpmovieplayercontroller.md) object in this property is created automatically by the receiver and cannot be changed. However, you can use the object to manage the presentation and configuration of the movie playback.

## See Also

### New methods

- [initWithContentURL:](init%28contenturl_%29.md): Deprecated. Returns a movie player view controller initialized with the specified movie.
