> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mptimedmetadata](https://developer.apple.com/documentation/mediaplayer/mptimedmetadata)

# MPTimedMetadata (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 9.0) · iPadOS 4.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A *timed metadata object that* carries time-based information within HTTP streamed media.

> Use AVFoundation.

## Declaration

```swift
class MPTimedMetadata
```

<a id="overview"></a>

## Overview

Content providers can embed these objects when creating a stream. The properties and constants in this class let you extract the metadata as you play the stream using an [MPMoviePlayerController](mpmovieplayercontroller.md) object. For example, the provider of a live sports video stream could use `MPTimedMetadata` instances to embed game scores, with timestamps, in the stream. On the client side—that is, on the user’s device—their application could employ the properties of this class to update their app’s user interface in real time during the game.

A Javascript implementation of this class is also available for use by web-based applications.

## Topics

### Extracting timed metadata from a stream

- [allMetadata](mptimedmetadata/allmetadata.md): Deprecated. A dictionary containing all the metadata in the object.
- [key](mptimedmetadata/key.md): Deprecated. A key that identifies a piece of timed metadata.
- [keyspace](mptimedmetadata/keyspace.md): Deprecated. The namespace of the identifying key.
- [timestamp](mptimedmetadata/timestamp.md): Deprecated. The timestamp of the metadata, in the timebase of the media stream.
- [value](mptimedmetadata/value.md): Deprecated. The timed metadata.

### Constants

- [Timed metadata dictionary keys](timed-metadata-dictionary-keys.md): Dictionary keys for use with the [allMetadata](mptimedmetadata/allmetadata.md) property. All keys are optional.

### Notifications

- [MPMoviePlayerTimedMetadataUserInfoKey](mpmovieplayertimedmetadatauserinfokey.md): Deprecated. An NSDictionary object containing the most recent `MPTimedMetadata` objects.

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
- [MPPlayableContentManager](mpplayablecontentmanager.md): Deprecated. A shared content manager for controlling interactions between your media app and system-provided or external media player interfaces.
- [MPPlayableContentManagerContext](mpplayablecontentmanagercontext.md): Deprecated. An object representing the current state of the playable endpoint.
- [iPodMusicPlayer](mpmusicplayercontroller/ipodmusicplayer.md): Deprecated. Returns the iPod music player, which controls the iPod app’s state.
- [init(image:)](mpmediaitemartwork/init%28image_%29.md): Deprecated. Initializes a media item artwork instance with a full-size image.
- [imageCropRect](mpmediaitemartwork/imagecroprect.md): Deprecated. The bounds, in points, of the content area for the full size image associated with the media item artwork.
- [showsRouteButton](mpvolumeview/showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [routeButtonImage(for:)](mpvolumeview/routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.

# MPTimedMetadata (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 9.0) · iPadOS 4.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A *timed metadata object that* carries time-based information within HTTP streamed media.

> Use AVFoundation.

## Declaration

```objectivec
@interface MPTimedMetadata : NSObject
```

<a id="overview"></a>

## Overview

Content providers can embed these objects when creating a stream. The properties and constants in this class let you extract the metadata as you play the stream using an [MPMoviePlayerController](mpmovieplayercontroller.md) object. For example, the provider of a live sports video stream could use `MPTimedMetadata` instances to embed game scores, with timestamps, in the stream. On the client side—that is, on the user’s device—their application could employ the properties of this class to update their app’s user interface in real time during the game.

A Javascript implementation of this class is also available for use by web-based applications.

## Topics

### Extracting timed metadata from a stream

- [allMetadata](mptimedmetadata/allmetadata.md): Deprecated. A dictionary containing all the metadata in the object.
- [key](mptimedmetadata/key.md): Deprecated. A key that identifies a piece of timed metadata.
- [keyspace](mptimedmetadata/keyspace.md): Deprecated. The namespace of the identifying key.
- [timestamp](mptimedmetadata/timestamp.md): Deprecated. The timestamp of the metadata, in the timebase of the media stream.
- [value](mptimedmetadata/value.md): Deprecated. The timed metadata.

### Constants

- [Timed metadata dictionary keys](timed-metadata-dictionary-keys.md): Dictionary keys for use with the [allMetadata](mptimedmetadata/allmetadata.md) property. All keys are optional.

### Notifications

- [MPMoviePlayerTimedMetadataUpdatedNotification](mpmovieplayertimedmetadataupdatednotification.md): Deprecated. Posted when new timed metadata arrives.
- [MPMoviePlayerTimedMetadataUserInfoKey](mpmovieplayertimedmetadatauserinfokey.md): Deprecated. An NSDictionary object containing the most recent `MPTimedMetadata` objects.

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
- [MPPlayableContentManager](mpplayablecontentmanager.md): Deprecated. A shared content manager for controlling interactions between your media app and system-provided or external media player interfaces.
- [MPPlayableContentManagerContext](mpplayablecontentmanagercontext.md): Deprecated. An object representing the current state of the playable endpoint.
- [iPodMusicPlayer](mpmusicplayercontroller/ipodmusicplayer.md): Deprecated. Returns the iPod music player, which controls the iPod app’s state.
- [initWithImage:](mpmediaitemartwork/init%28image_%29.md): Deprecated. Initializes a media item artwork instance with a full-size image.
- [imageCropRect](mpmediaitemartwork/imagecroprect.md): Deprecated. The bounds, in points, of the content area for the full size image associated with the media item artwork.
- [showsRouteButton](mpvolumeview/showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [routeButtonImageForState:](mpvolumeview/routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
