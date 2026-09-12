> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieloadstate](https://developer.apple.com/documentation/mediaplayer/mpmovieloadstate)

# MPMovieLoadState (Swift)

**Framework:** Media Player  
**Kind:** Structure  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Constants describing the network load state of the movie player.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
struct MPMovieLoadState
```

## Topics

### Constants

- [playable](mpmovieloadstate/playable.md): Deprecated.
- [playthroughOK](mpmovieloadstate/playthroughok.md): Deprecated.
- [stalled](mpmovieloadstate/stalled.md): Deprecated.

### Initializers

- [init(rawValue:)](mpmovieloadstate/init%28rawvalue_%29.md): Deprecated. Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Deprecated symbols

- [MPMovieAccessLog](mpmovieaccesslog.md): Deprecated. Key metrics about network playback for an associated movie player that’s playing streamed content.
- [MPMovieAccessLogEvent](mpmovieaccesslogevent.md): Deprecated. A single piece of information for a movie access log.
- [MPMovieErrorLog](mpmovieerrorlog.md): Deprecated. Data describing network resource playback failures for the associated movie player, including timestamps indicating when each failure occurred.
- [MPMovieErrorLogEvent](mpmovieerrorlogevent.md): Deprecated. A single piece of information for a movie error log.
- [MPMovieMediaTypeMask](mpmoviemediatypemask.md): Deprecated. The types of content available in the movie file.
- [MPMoviePlayerController](mpmovieplayercontroller.md): Deprecated. A type of movie player that manages the playback of a movie from a file or a network stream.
- [MPMoviePlayerViewController](mpmovieplayerviewcontroller.md): Deprecated. A simple view controller for displaying full-screen movies.
- [MPTimedMetadata](mptimedmetadata.md): Deprecated. A *timed metadata object that* carries time-based information within HTTP streamed media.
- [MPPlayableContentManager](mpplayablecontentmanager.md): Deprecated. A shared content manager for controlling interactions between your media app and system-provided or external media player interfaces.
- [MPPlayableContentManagerContext](mpplayablecontentmanagercontext.md): Deprecated. An object representing the current state of the playable endpoint.
- [iPodMusicPlayer](mpmusicplayercontroller/ipodmusicplayer.md): Deprecated. Returns the iPod music player, which controls the iPod app’s state.
- [init(image:)](mpmediaitemartwork/init%28image_%29.md): Deprecated. Initializes a media item artwork instance with a full-size image.
- [imageCropRect](mpmediaitemartwork/imagecroprect.md): Deprecated. The bounds, in points, of the content area for the full size image associated with the media item artwork.
- [showsRouteButton](mpvolumeview/showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [routeButtonImage(for:)](mpvolumeview/routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.

# MPMovieLoadState (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Constants describing the network load state of the movie player.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
enum MPMovieLoadState : NSUInteger;
```

## Topics

### Constants

- [MPMovieLoadStateUnknown](mpmovieloadstate/mpmovieloadstateunknown.md): Deprecated.
- [MPMovieLoadStatePlayable](mpmovieloadstate/playable.md): Deprecated.
- [MPMovieLoadStatePlaythroughOK](mpmovieloadstate/playthroughok.md): Deprecated.
- [MPMovieLoadStateStalled](mpmovieloadstate/stalled.md): Deprecated.

## See Also

### Deprecated symbols

- [MPMovieAccessLog](mpmovieaccesslog.md): Deprecated. Key metrics about network playback for an associated movie player that’s playing streamed content.
- [MPMovieAccessLogEvent](mpmovieaccesslogevent.md): Deprecated. A single piece of information for a movie access log.
- [MPMovieErrorLog](mpmovieerrorlog.md): Deprecated. Data describing network resource playback failures for the associated movie player, including timestamps indicating when each failure occurred.
- [MPMovieErrorLogEvent](mpmovieerrorlogevent.md): Deprecated. A single piece of information for a movie error log.
- [MPMovieMediaTypeMask](mpmoviemediatypemask.md): Deprecated. The types of content available in the movie file.
- [MPMoviePlayerController](mpmovieplayercontroller.md): Deprecated. A type of movie player that manages the playback of a movie from a file or a network stream.
- [MPMoviePlayerViewController](mpmovieplayerviewcontroller.md): Deprecated. A simple view controller for displaying full-screen movies.
- [MPTimedMetadata](mptimedmetadata.md): Deprecated. A *timed metadata object that* carries time-based information within HTTP streamed media.
- [MPPlayableContentManager](mpplayablecontentmanager.md): Deprecated. A shared content manager for controlling interactions between your media app and system-provided or external media player interfaces.
- [MPPlayableContentManagerContext](mpplayablecontentmanagercontext.md): Deprecated. An object representing the current state of the playable endpoint.
- [iPodMusicPlayer](mpmusicplayercontroller/ipodmusicplayer.md): Deprecated. Returns the iPod music player, which controls the iPod app’s state.
- [initWithImage:](mpmediaitemartwork/init%28image_%29.md): Deprecated. Initializes a media item artwork instance with a full-size image.
- [imageCropRect](mpmediaitemartwork/imagecroprect.md): Deprecated. The bounds, in points, of the content area for the full size image associated with the media item artwork.
- [showsRouteButton](mpvolumeview/showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [routeButtonImageForState:](mpvolumeview/routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
