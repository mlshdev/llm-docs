> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieerrorlogevent](https://developer.apple.com/documentation/mediaplayer/mpmovieerrorlogevent)

# MPMovieErrorLogEvent (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 4.3+ (deprecated in 9.0) · iPadOS 4.3+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A single piece of information for a movie error log.

> Use AVFoundation.

## Declaration

```swift
class MPMovieErrorLogEvent
```

<a id="overview"></a>

## Overview

All movie error log event properties are read-only. For a description of movie error logs, see [MPMovieErrorLog](mpmovieerrorlog.md).

## Topics

### Movie error log event properties

- [date](mpmovieerrorlogevent/date.md): Deprecated. The date and time when the error occurred.
- [uri](mpmovieerrorlogevent/uri.md): Deprecated. The URI of the item playing when the error occurred.
- [serverAddress](mpmovieerrorlogevent/serveraddress.md): Deprecated. The IP address of the web server that was the source of the error.
- [playbackSessionID](mpmovieerrorlogevent/playbacksessionid.md): Deprecated. A globally unique identifier (GUID) for the playback session.
- [errorStatusCode](mpmovieerrorlogevent/errorstatuscode.md): Deprecated. A unique error code identifier.
- [errorDomain](mpmovieerrorlogevent/errordomain.md): Deprecated. The network domain of the error.
- [errorComment](mpmovieerrorlogevent/errorcomment.md): Deprecated. A description of the error.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated symbols

- [MPMovieAccessLog](mpmovieaccesslog.md): Deprecated. Key metrics about network playback for an associated movie player that’s playing streamed content.
- [MPMovieAccessLogEvent](mpmovieaccesslogevent.md): Deprecated. A single piece of information for a movie access log.
- [MPMovieErrorLog](mpmovieerrorlog.md): Deprecated. Data describing network resource playback failures for the associated movie player, including timestamps indicating when each failure occurred.
- [MPMovieLoadState](mpmovieloadstate.md): Deprecated. Constants describing the network load state of the movie player.
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

# MPMovieErrorLogEvent (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 4.3+ (deprecated in 9.0) · iPadOS 4.3+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A single piece of information for a movie error log.

> Use AVFoundation.

## Declaration

```objectivec
@interface MPMovieErrorLogEvent : NSObject
```

<a id="overview"></a>

## Overview

All movie error log event properties are read-only. For a description of movie error logs, see [MPMovieErrorLog](mpmovieerrorlog.md).

## Topics

### Movie error log event properties

- [date](mpmovieerrorlogevent/date.md): Deprecated. The date and time when the error occurred.
- [URI](mpmovieerrorlogevent/uri.md): Deprecated. The URI of the item playing when the error occurred.
- [serverAddress](mpmovieerrorlogevent/serveraddress.md): Deprecated. The IP address of the web server that was the source of the error.
- [playbackSessionID](mpmovieerrorlogevent/playbacksessionid.md): Deprecated. A globally unique identifier (GUID) for the playback session.
- [errorStatusCode](mpmovieerrorlogevent/errorstatuscode.md): Deprecated. A unique error code identifier.
- [errorDomain](mpmovieerrorlogevent/errordomain.md): Deprecated. The network domain of the error.
- [errorComment](mpmovieerrorlogevent/errorcomment.md): Deprecated. A description of the error.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Deprecated symbols

- [MPMovieAccessLog](mpmovieaccesslog.md): Deprecated. Key metrics about network playback for an associated movie player that’s playing streamed content.
- [MPMovieAccessLogEvent](mpmovieaccesslogevent.md): Deprecated. A single piece of information for a movie access log.
- [MPMovieErrorLog](mpmovieerrorlog.md): Deprecated. Data describing network resource playback failures for the associated movie player, including timestamps indicating when each failure occurred.
- [MPMovieLoadState](mpmovieloadstate.md): Deprecated. Constants describing the network load state of the movie player.
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
