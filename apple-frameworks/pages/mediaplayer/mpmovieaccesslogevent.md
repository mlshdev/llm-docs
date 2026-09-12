> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieaccesslogevent](https://developer.apple.com/documentation/mediaplayer/mpmovieaccesslogevent)

# MPMovieAccessLogEvent (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 4.3+ (deprecated in 9.0) · iPadOS 4.3+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A single piece of information for a movie access log.

> Use AVFoundation.

## Declaration

```swift
class MPMovieAccessLogEvent
```

<a id="overview"></a>

## Overview

For a description of movie access logs, see [MPMovieAccessLog](mpmovieaccesslog.md).

## Topics

### Movie access log event properties

- [numberOfSegmentsDownloaded](mpmovieaccesslogevent/numberofsegmentsdownloaded.md): Deprecated. A count of media segments downloaded from the web server to your app.
- [playbackStartDate](mpmovieaccesslogevent/playbackstartdate.md): Deprecated. The timestamp for when playback began for the movie log access event.
- [uri](mpmovieaccesslogevent/uri.md): Deprecated. The URI of the playback item.
- [serverAddress](mpmovieaccesslogevent/serveraddress.md): Deprecated. The IPv4 or IPv6 address of the web server that was the source of the last delivered media segment.
- [numberOfServerAddressChanges](mpmovieaccesslogevent/numberofserveraddresschanges.md): Deprecated. A count of changes to the [serverAddress](mpmovieaccesslogevent/serveraddress.md) property over the last uninterrupted period of playback.
- [playbackSessionID](mpmovieaccesslogevent/playbacksessionid.md): Deprecated. A GUID that identifies the playback session to use in HTTP requests.
- [playbackStartOffset](mpmovieaccesslogevent/playbackstartoffset.md): Deprecated. An offset into the playlist where the last uninterrupted period of playback began, in seconds.
- [segmentsDownloadedDuration](mpmovieaccesslogevent/segmentsdownloadedduration.md): Deprecated. The accumulated duration of the media downloaded, in seconds.
- [durationWatched](mpmovieaccesslogevent/durationwatched.md): Deprecated. The accumulated duration of the media played, in seconds.
- [numberOfStalls](mpmovieaccesslogevent/numberofstalls.md): Deprecated. The total number of playback stalls encountered.
- [numberOfBytesTransferred](mpmovieaccesslogevent/numberofbytestransferred.md): Deprecated. The accumulated number of bytes transferred.
- [observedBitrate](mpmovieaccesslogevent/observedbitrate.md): Deprecated. The empirical throughput across all media downloaded for the movie player, in bits per second.
- [indicatedBitrate](mpmovieaccesslogevent/indicatedbitrate.md): Deprecated. The throughput required to play the stream, as advertised by the web server, in bits per second.
- [numberOfDroppedVideoFrames](mpmovieaccesslogevent/numberofdroppedvideoframes.md): Deprecated. The total number of dropped video frames.

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
- [MPMovieErrorLog](mpmovieerrorlog.md): Deprecated. Data describing network resource playback failures for the associated movie player, including timestamps indicating when each failure occurred.
- [MPMovieErrorLogEvent](mpmovieerrorlogevent.md): Deprecated. A single piece of information for a movie error log.
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

# MPMovieAccessLogEvent (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 4.3+ (deprecated in 9.0) · iPadOS 4.3+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A single piece of information for a movie access log.

> Use AVFoundation.

## Declaration

```objectivec
@interface MPMovieAccessLogEvent : NSObject
```

<a id="overview"></a>

## Overview

For a description of movie access logs, see [MPMovieAccessLog](mpmovieaccesslog.md).

## Topics

### Movie access log event properties

- [numberOfSegmentsDownloaded](mpmovieaccesslogevent/numberofsegmentsdownloaded.md): Deprecated. A count of media segments downloaded from the web server to your app.
- [playbackStartDate](mpmovieaccesslogevent/playbackstartdate.md): Deprecated. The timestamp for when playback began for the movie log access event.
- [URI](mpmovieaccesslogevent/uri.md): Deprecated. The URI of the playback item.
- [serverAddress](mpmovieaccesslogevent/serveraddress.md): Deprecated. The IPv4 or IPv6 address of the web server that was the source of the last delivered media segment.
- [numberOfServerAddressChanges](mpmovieaccesslogevent/numberofserveraddresschanges.md): Deprecated. A count of changes to the [serverAddress](mpmovieaccesslogevent/serveraddress.md) property over the last uninterrupted period of playback.
- [playbackSessionID](mpmovieaccesslogevent/playbacksessionid.md): Deprecated. A GUID that identifies the playback session to use in HTTP requests.
- [playbackStartOffset](mpmovieaccesslogevent/playbackstartoffset.md): Deprecated. An offset into the playlist where the last uninterrupted period of playback began, in seconds.
- [segmentsDownloadedDuration](mpmovieaccesslogevent/segmentsdownloadedduration.md): Deprecated. The accumulated duration of the media downloaded, in seconds.
- [durationWatched](mpmovieaccesslogevent/durationwatched.md): Deprecated. The accumulated duration of the media played, in seconds.
- [numberOfStalls](mpmovieaccesslogevent/numberofstalls.md): Deprecated. The total number of playback stalls encountered.
- [numberOfBytesTransferred](mpmovieaccesslogevent/numberofbytestransferred.md): Deprecated. The accumulated number of bytes transferred.
- [observedBitrate](mpmovieaccesslogevent/observedbitrate.md): Deprecated. The empirical throughput across all media downloaded for the movie player, in bits per second.
- [indicatedBitrate](mpmovieaccesslogevent/indicatedbitrate.md): Deprecated. The throughput required to play the stream, as advertised by the web server, in bits per second.
- [numberOfDroppedVideoFrames](mpmovieaccesslogevent/numberofdroppedvideoframes.md): Deprecated. The total number of dropped video frames.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Deprecated symbols

- [MPMovieAccessLog](mpmovieaccesslog.md): Deprecated. Key metrics about network playback for an associated movie player that’s playing streamed content.
- [MPMovieErrorLog](mpmovieerrorlog.md): Deprecated. Data describing network resource playback failures for the associated movie player, including timestamps indicating when each failure occurred.
- [MPMovieErrorLogEvent](mpmovieerrorlogevent.md): Deprecated. A single piece of information for a movie error log.
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
