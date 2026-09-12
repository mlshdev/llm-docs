> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpplayablecontentmanager](https://developer.apple.com/documentation/mediaplayer/mpplayablecontentmanager)

# MPPlayableContentManager (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

A shared content manager for controlling interactions between your media app and system-provided or external media player interfaces.

> Use CarPlay framework

## Declaration

```swift
class MPPlayableContentManager
```

<a id="overview"></a>

## Overview

> **Important**

>  Some features of this class are specific to CarPlay, which requires a special entitlement issued by Apple. Apps without the correct entitlement won’t appear on the CarPlay home screen. See [http://www.apple.com/ios/carplay/](http://www.apple.com/ios/carplay/) for more information.

The app provides data to the content manager so that the media player can browse the content provided. A delegate provides the media player the ability to perform actions that manage the app’s playback queue.

You don’t create a new content manager directly, instead you grab the shared content manager using the [shared()](mpplayablecontentmanager/shared%28%29.md) method. After getting the shared content manager, your next step depends on the features your app supports:

- To provide content navigation and suggested content for CarPlay, immediately set both the [dataSource](mpplayablecontentmanager/datasource.md) and [delegate](mpplayablecontentmanager/delegate.md) properties. After setting these properties, use the [beginUpdates()](mpplayablecontentmanager/beginupdates%28%29.md) and [endUpdates()](mpplayablecontentmanager/endupdates%28%29.md) methods to load the information from the data source.
- To provide suggested content when the user connects headphones, a Bluetooth stereo, or another output device, set only the [delegate](mpplayablecontentmanager/delegate.md) property. After you set a delegate, iOS automatically calls methods in the [MPPlayableContentDelegate](mpplayablecontentdelegate.md) protocol allowing you to suggest appropriate content.

## Topics

### Providing playable content

- [dataSource](mpplayablecontentmanager/datasource.md): Deprecated. The data source provided by the app.
- [MPPlayableContentDataSource](mpplayablecontentdatasource.md): Deprecated. The data source providing media metadata to external media players so they can build user interfaces displaying your app’s content.

### Responding to playback events

- [delegate](mpplayablecontentmanager/delegate.md): Deprecated. A delegate that lets the media player manage the app’s playback queue.
- [MPPlayableContentDelegate](mpplayablecontentdelegate.md): Deprecated. The protocol used to let external media players send playback commands to an app.

### Setting the content manager

- [shared()](mpplayablecontentmanager/shared%28%29.md): Deprecated. Returns the current content manager instance.

### Updating data

- [beginUpdates()](mpplayablecontentmanager/beginupdates%28%29.md): Deprecated. Updates several Media Player content items at once.
- [endUpdates()](mpplayablecontentmanager/endupdates%28%29.md): Deprecated. Ends a synchronized update.
- [reloadData()](mpplayablecontentmanager/reloaddata%28%29.md): Deprecated. Reloads the data from the data source.

### Retrieving information on currently playing items

- [context](mpplayablecontentmanager/context.md): Deprecated. The current state of the playable content endpoint.
- [nowPlayingIdentifiers](mpplayablecontentmanager/nowplayingidentifiers.md): Deprecated. The content items currently playing based on their identifiers.

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
- [MPPlayableContentManagerContext](mpplayablecontentmanagercontext.md): Deprecated. An object representing the current state of the playable endpoint.
- [iPodMusicPlayer](mpmusicplayercontroller/ipodmusicplayer.md): Deprecated. Returns the iPod music player, which controls the iPod app’s state.
- [init(image:)](mpmediaitemartwork/init%28image_%29.md): Deprecated. Initializes a media item artwork instance with a full-size image.
- [imageCropRect](mpmediaitemartwork/imagecroprect.md): Deprecated. The bounds, in points, of the content area for the full size image associated with the media item artwork.
- [showsRouteButton](mpvolumeview/showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [routeButtonImage(for:)](mpvolumeview/routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.

# MPPlayableContentManager (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

A shared content manager for controlling interactions between your media app and system-provided or external media player interfaces.

> Use CarPlay framework

## Declaration

```objectivec
@interface MPPlayableContentManager : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  Some features of this class are specific to CarPlay, which requires a special entitlement issued by Apple. Apps without the correct entitlement won’t appear on the CarPlay home screen. See [http://www.apple.com/ios/carplay/](http://www.apple.com/ios/carplay/) for more information.

The app provides data to the content manager so that the media player can browse the content provided. A delegate provides the media player the ability to perform actions that manage the app’s playback queue.

You don’t create a new content manager directly, instead you grab the shared content manager using the [sharedContentManager](mpplayablecontentmanager/shared%28%29.md) method. After getting the shared content manager, your next step depends on the features your app supports:

- To provide content navigation and suggested content for CarPlay, immediately set both the [dataSource](mpplayablecontentmanager/datasource.md) and [delegate](mpplayablecontentmanager/delegate.md) properties. After setting these properties, use the [beginUpdates](mpplayablecontentmanager/beginupdates%28%29.md) and [endUpdates](mpplayablecontentmanager/endupdates%28%29.md) methods to load the information from the data source.
- To provide suggested content when the user connects headphones, a Bluetooth stereo, or another output device, set only the [delegate](mpplayablecontentmanager/delegate.md) property. After you set a delegate, iOS automatically calls methods in the [MPPlayableContentDelegate](mpplayablecontentdelegate.md) protocol allowing you to suggest appropriate content.

## Topics

### Providing playable content

- [dataSource](mpplayablecontentmanager/datasource.md): Deprecated. The data source provided by the app.
- [MPPlayableContentDataSource](mpplayablecontentdatasource.md): Deprecated. The data source providing media metadata to external media players so they can build user interfaces displaying your app’s content.

### Responding to playback events

- [delegate](mpplayablecontentmanager/delegate.md): Deprecated. A delegate that lets the media player manage the app’s playback queue.
- [MPPlayableContentDelegate](mpplayablecontentdelegate.md): Deprecated. The protocol used to let external media players send playback commands to an app.

### Setting the content manager

- [sharedContentManager](mpplayablecontentmanager/shared%28%29.md): Deprecated. Returns the current content manager instance.

### Updating data

- [beginUpdates](mpplayablecontentmanager/beginupdates%28%29.md): Deprecated. Updates several Media Player content items at once.
- [endUpdates](mpplayablecontentmanager/endupdates%28%29.md): Deprecated. Ends a synchronized update.
- [reloadData](mpplayablecontentmanager/reloaddata%28%29.md): Deprecated. Reloads the data from the data source.

### Retrieving information on currently playing items

- [context](mpplayablecontentmanager/context.md): Deprecated. The current state of the playable content endpoint.
- [nowPlayingIdentifiers](mpplayablecontentmanager/nowplayingidentifiers.md): Deprecated. The content items currently playing based on their identifiers.

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
- [MPPlayableContentManagerContext](mpplayablecontentmanagercontext.md): Deprecated. An object representing the current state of the playable endpoint.
- [iPodMusicPlayer](mpmusicplayercontroller/ipodmusicplayer.md): Deprecated. Returns the iPod music player, which controls the iPod app’s state.
- [initWithImage:](mpmediaitemartwork/init%28image_%29.md): Deprecated. Initializes a media item artwork instance with a full-size image.
- [imageCropRect](mpmediaitemartwork/imagecroprect.md): Deprecated. The bounds, in points, of the content area for the full size image associated with the media item artwork.
- [showsRouteButton](mpvolumeview/showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [routeButtonImageForState:](mpvolumeview/routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
