> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpplayablecontentmanagercontext](https://developer.apple.com/documentation/mediaplayer/mpplayablecontentmanagercontext)

# MPPlayableContentManagerContext (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 8.4+ (deprecated in 14.0) · iPadOS 8.4+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

An object representing the current state of the playable endpoint.

> Use CarPlay framework

## Declaration

```swift
class MPPlayableContentManagerContext
```

## Topics

### Inspecting content manager properties

- [contentLimitsEnforced](mpplayablecontentmanagercontext/contentlimitsenforced.md): Deprecated. A Boolean value that indicates whether the content server enforces content limits.
- [endpointAvailable](mpplayablecontentmanagercontext/endpointavailable.md): Deprecated. Returns a Boolean that indicates whether the content server is available.
- [enforcedContentItemsCount](mpplayablecontentmanagercontext/enforcedcontentitemscount.md): Deprecated. Returns the number of content items to display during content limiting.
- [enforcedContentTreeDepth](mpplayablecontentmanagercontext/enforcedcontenttreedepth.md): Deprecated. The maximum depth of the navigation hierarchy allowed by the content server.
- [contentLimitsEnabled](mpplayablecontentmanagercontext/contentlimitsenabled.md): Deprecated. A Boolean value that indicates whether the content server enables content limits.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated symbols

- [MPMovieAccessLog](mpmovieaccesslog.md): Deprecated. Key metrics about network playback for an associated movie player that’s playing streamed content.
- [MPMovieAccessLogEvent](mpmovieaccesslogevent.md): Deprecated. A single piece of information for a movie access log.
- [MPMovieErrorLog](mpmovieerrorlog.md): Deprecated. Data describing network resource playback failures for the associated movie player, including timestamps indicating when each failure occurred.
- [MPMovieErrorLogEvent](mpmovieerrorlogevent.md): Deprecated. A single piece of information for a movie error log.
- [MPMovieLoadState](mpmovieloadstate.md): Deprecated. Constants describing the network load state of the movie player.
- [MPMovieMediaTypeMask](mpmoviemediatypemask.md): Deprecated. The types of content available in the movie file.
- [MPMoviePlayerController](mpmovieplayercontroller.md): Deprecated. A type of movie player that manages the playback of a movie from a file or a network stream.
- [MPMoviePlayerViewController](mpmovieplayerviewcontroller.md): Deprecated. A simple view controller for displaying full-screen movies.
- [MPTimedMetadata](mptimedmetadata.md): Deprecated. A *timed metadata object that* carries time-based information within HTTP streamed media.
- [MPPlayableContentManager](mpplayablecontentmanager.md): Deprecated. A shared content manager for controlling interactions between your media app and system-provided or external media player interfaces.
- [iPodMusicPlayer](mpmusicplayercontroller/ipodmusicplayer.md): Deprecated. Returns the iPod music player, which controls the iPod app’s state.
- [init(image:)](mpmediaitemartwork/init%28image_%29.md): Deprecated. Initializes a media item artwork instance with a full-size image.
- [imageCropRect](mpmediaitemartwork/imagecroprect.md): Deprecated. The bounds, in points, of the content area for the full size image associated with the media item artwork.
- [showsRouteButton](mpvolumeview/showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [routeButtonImage(for:)](mpvolumeview/routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.

# MPPlayableContentManagerContext (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 8.4+ (deprecated in 14.0) · iPadOS 8.4+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

An object representing the current state of the playable endpoint.

> Use CarPlay framework

## Declaration

```objectivec
@interface MPPlayableContentManagerContext : NSObject
```

## Topics

### Inspecting content manager properties

- [contentLimitsEnforced](mpplayablecontentmanagercontext/contentlimitsenforced.md): Deprecated. A Boolean value that indicates whether the content server enforces content limits.
- [endpointAvailable](mpplayablecontentmanagercontext/endpointavailable.md): Deprecated. Returns a Boolean that indicates whether the content server is available.
- [enforcedContentItemsCount](mpplayablecontentmanagercontext/enforcedcontentitemscount.md): Deprecated. Returns the number of content items to display during content limiting.
- [enforcedContentTreeDepth](mpplayablecontentmanagercontext/enforcedcontenttreedepth.md): Deprecated. The maximum depth of the navigation hierarchy allowed by the content server.
- [contentLimitsEnabled](mpplayablecontentmanagercontext/contentlimitsenabled.md): Deprecated. A Boolean value that indicates whether the content server enables content limits.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Deprecated symbols

- [MPMovieAccessLog](mpmovieaccesslog.md): Deprecated. Key metrics about network playback for an associated movie player that’s playing streamed content.
- [MPMovieAccessLogEvent](mpmovieaccesslogevent.md): Deprecated. A single piece of information for a movie access log.
- [MPMovieErrorLog](mpmovieerrorlog.md): Deprecated. Data describing network resource playback failures for the associated movie player, including timestamps indicating when each failure occurred.
- [MPMovieErrorLogEvent](mpmovieerrorlogevent.md): Deprecated. A single piece of information for a movie error log.
- [MPMovieLoadState](mpmovieloadstate.md): Deprecated. Constants describing the network load state of the movie player.
- [MPMovieMediaTypeMask](mpmoviemediatypemask.md): Deprecated. The types of content available in the movie file.
- [MPMoviePlayerController](mpmovieplayercontroller.md): Deprecated. A type of movie player that manages the playback of a movie from a file or a network stream.
- [MPMoviePlayerViewController](mpmovieplayerviewcontroller.md): Deprecated. A simple view controller for displaying full-screen movies.
- [MPTimedMetadata](mptimedmetadata.md): Deprecated. A *timed metadata object that* carries time-based information within HTTP streamed media.
- [MPPlayableContentManager](mpplayablecontentmanager.md): Deprecated. A shared content manager for controlling interactions between your media app and system-provided or external media player interfaces.
- [iPodMusicPlayer](mpmusicplayercontroller/ipodmusicplayer.md): Deprecated. Returns the iPod music player, which controls the iPod app’s state.
- [initWithImage:](mpmediaitemartwork/init%28image_%29.md): Deprecated. Initializes a media item artwork instance with a full-size image.
- [imageCropRect](mpmediaitemartwork/imagecroprect.md): Deprecated. The bounds, in points, of the content area for the full size image associated with the media item artwork.
- [showsRouteButton](mpvolumeview/showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [routeButtonImageForState:](mpvolumeview/routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
