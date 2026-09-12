> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayerviewcontroller](https://developer.apple.com/documentation/mediaplayer/mpmovieplayerviewcontroller)

# MPMoviePlayerViewController (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A simple view controller for displaying full-screen movies.

> Use AVPlayerViewController in AVKit.

## Declaration

```swift
class MPMoviePlayerViewController
```

<a id="overview"></a>

## Overview

> **Important**

>  The [MPMoviePlayerViewController](mpmovieplayerviewcontroller.md) class is formally deprecated in iOS 9. (The [MPMoviePlayerController](mpmovieplayercontroller.md) class is also formally deprecated.) To play video content in iOS 9 and later, instead use the [AVPictureInPictureController](../avkit/avpictureinpicturecontroller.md) or [AVPlayerViewController](../avkit/avplayerviewcontroller.md) class from the AVKit framework, or the [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) class from WebKit.

Unlike using an [MPMoviePlayerController](mpmovieplayercontroller.md) object on its own to present a movie immediately, you can incorporate a movie player view controller wherever you would normally use a view controller. For example, you can present it using a tab bar or navigation bar-based interface, taking advantage of the transitions offered by those interfaces.

To present a movie player view controller modally, you typically use the [presentMoviePlayerViewControllerAnimated(\_:)](../uikit/uiviewcontroller/presentmovieplayerviewcontrolleranimated%28__%29.md) method. This method is part of a category on the [UIViewController](../uikit/uiviewcontroller.md) class and is implemented by the Media Player framework. The [presentMoviePlayerViewControllerAnimated(\_:)](../uikit/uiviewcontroller/presentmovieplayerviewcontrolleranimated%28__%29.md) method presents a movie player view controller using the standard transition animations for presenting video content. To dismiss a modally presented movie player view controller, call the [dismissMoviePlayerViewControllerAnimated()](../uikit/uiviewcontroller/dismissmovieplayerviewcontrolleranimated%28%29.md) method.

## Topics

### New methods

- [init(contentURL:)](mpmovieplayerviewcontroller/init%28contenturl_%29.md): Deprecated. Returns a movie player view controller initialized with the specified movie.
- [moviePlayer](mpmovieplayerviewcontroller/movieplayer.md): Deprecated. The movie player controller object used to present the movie.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Deprecated symbols

- [MPMovieAccessLog](mpmovieaccesslog.md): Deprecated. Key metrics about network playback for an associated movie player that’s playing streamed content.
- [MPMovieAccessLogEvent](mpmovieaccesslogevent.md): Deprecated. A single piece of information for a movie access log.
- [MPMovieErrorLog](mpmovieerrorlog.md): Deprecated. Data describing network resource playback failures for the associated movie player, including timestamps indicating when each failure occurred.
- [MPMovieErrorLogEvent](mpmovieerrorlogevent.md): Deprecated. A single piece of information for a movie error log.
- [MPMovieLoadState](mpmovieloadstate.md): Deprecated. Constants describing the network load state of the movie player.
- [MPMovieMediaTypeMask](mpmoviemediatypemask.md): Deprecated. The types of content available in the movie file.
- [MPMoviePlayerController](mpmovieplayercontroller.md): Deprecated. A type of movie player that manages the playback of a movie from a file or a network stream.
- [MPTimedMetadata](mptimedmetadata.md): Deprecated. A *timed metadata object that* carries time-based information within HTTP streamed media.
- [MPPlayableContentManager](mpplayablecontentmanager.md): Deprecated. A shared content manager for controlling interactions between your media app and system-provided or external media player interfaces.
- [MPPlayableContentManagerContext](mpplayablecontentmanagercontext.md): Deprecated. An object representing the current state of the playable endpoint.
- [iPodMusicPlayer](mpmusicplayercontroller/ipodmusicplayer.md): Deprecated. Returns the iPod music player, which controls the iPod app’s state.
- [init(image:)](mpmediaitemartwork/init%28image_%29.md): Deprecated. Initializes a media item artwork instance with a full-size image.
- [imageCropRect](mpmediaitemartwork/imagecroprect.md): Deprecated. The bounds, in points, of the content area for the full size image associated with the media item artwork.
- [showsRouteButton](mpvolumeview/showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [routeButtonImage(for:)](mpvolumeview/routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.

# MPMoviePlayerViewController (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A simple view controller for displaying full-screen movies.

> Use AVPlayerViewController in AVKit.

## Declaration

```objectivec
@interface MPMoviePlayerViewController : UIViewController
```

<a id="overview"></a>

## Overview

> **Important**

>  The [MPMoviePlayerViewController](mpmovieplayerviewcontroller.md) class is formally deprecated in iOS 9. (The [MPMoviePlayerController](mpmovieplayercontroller.md) class is also formally deprecated.) To play video content in iOS 9 and later, instead use the [AVPictureInPictureController](../avkit/avpictureinpicturecontroller.md) or [AVPlayerViewController](../avkit/avplayerviewcontroller.md) class from the AVKit framework, or the [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) class from WebKit.

Unlike using an [MPMoviePlayerController](mpmovieplayercontroller.md) object on its own to present a movie immediately, you can incorporate a movie player view controller wherever you would normally use a view controller. For example, you can present it using a tab bar or navigation bar-based interface, taking advantage of the transitions offered by those interfaces.

To present a movie player view controller modally, you typically use the [presentMoviePlayerViewControllerAnimated:](../uikit/uiviewcontroller/presentmovieplayerviewcontrolleranimated%28__%29.md) method. This method is part of a category on the [UIViewController](../uikit/uiviewcontroller.md) class and is implemented by the Media Player framework. The [presentMoviePlayerViewControllerAnimated:](../uikit/uiviewcontroller/presentmovieplayerviewcontrolleranimated%28__%29.md) method presents a movie player view controller using the standard transition animations for presenting video content. To dismiss a modally presented movie player view controller, call the [dismissMoviePlayerViewControllerAnimated](../uikit/uiviewcontroller/dismissmovieplayerviewcontrolleranimated%28%29.md) method.

## Topics

### New methods

- [initWithContentURL:](mpmovieplayerviewcontroller/init%28contenturl_%29.md): Deprecated. Returns a movie player view controller initialized with the specified movie.
- [moviePlayer](mpmovieplayerviewcontroller/movieplayer.md): Deprecated. The movie player controller object used to present the movie.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Deprecated symbols

- [MPMovieAccessLog](mpmovieaccesslog.md): Deprecated. Key metrics about network playback for an associated movie player that’s playing streamed content.
- [MPMovieAccessLogEvent](mpmovieaccesslogevent.md): Deprecated. A single piece of information for a movie access log.
- [MPMovieErrorLog](mpmovieerrorlog.md): Deprecated. Data describing network resource playback failures for the associated movie player, including timestamps indicating when each failure occurred.
- [MPMovieErrorLogEvent](mpmovieerrorlogevent.md): Deprecated. A single piece of information for a movie error log.
- [MPMovieLoadState](mpmovieloadstate.md): Deprecated. Constants describing the network load state of the movie player.
- [MPMovieMediaTypeMask](mpmoviemediatypemask.md): Deprecated. The types of content available in the movie file.
- [MPMoviePlayerController](mpmovieplayercontroller.md): Deprecated. A type of movie player that manages the playback of a movie from a file or a network stream.
- [MPTimedMetadata](mptimedmetadata.md): Deprecated. A *timed metadata object that* carries time-based information within HTTP streamed media.
- [MPPlayableContentManager](mpplayablecontentmanager.md): Deprecated. A shared content manager for controlling interactions between your media app and system-provided or external media player interfaces.
- [MPPlayableContentManagerContext](mpplayablecontentmanagercontext.md): Deprecated. An object representing the current state of the playable endpoint.
- [iPodMusicPlayer](mpmusicplayercontroller/ipodmusicplayer.md): Deprecated. Returns the iPod music player, which controls the iPod app’s state.
- [initWithImage:](mpmediaitemartwork/init%28image_%29.md): Deprecated. Initializes a media item artwork instance with a full-size image.
- [imageCropRect](mpmediaitemartwork/imagecroprect.md): Deprecated. The bounds, in points, of the content area for the full size image associated with the media item artwork.
- [showsRouteButton](mpvolumeview/showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [routeButtonImageForState:](mpvolumeview/routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
