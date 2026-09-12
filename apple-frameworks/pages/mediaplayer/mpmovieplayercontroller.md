> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller)

# MPMoviePlayerController (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A type of movie player that manages the playback of a movie from a file or a network stream.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
class MPMoviePlayerController
```

<a id="overview"></a>

## Overview

> **Important**

>  The [MPMoviePlayerController](mpmovieplayercontroller.md) class is formally deprecated in iOS 9. (The [MPMoviePlayerViewController](mpmovieplayerviewcontroller.md) class is also formally deprecated.) To play video content in iOS 9 and later, instead use the [AVPictureInPictureController](../avkit/avpictureinpicturecontroller.md) or [AVPlayerViewController](../avkit/avplayerviewcontroller.md) class from the AVKit framework, or the [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) class from WebKit.

Playback occurs in a view owned by the movie player and takes place either fullscreen or inline. You can incorporate a movie player’s view into a view hierarchy owned by your app, or use an MPMoviePlayerViewController object to manage the presentation for you.

Movie players support wireless movie playback to AirPlay-enabled hardware such as Apple TV. AirPlay playback is enabled by default. To disable AirPlay in your app, set the [allowsAirPlay](mpmovieplayercontroller/allowsairplay.md) property to [false](https://developer.apple.com/documentation/swift/false). In iOS 8.0 and later, users access AirPlay compatible hardware through the Control Panel; no AirPlay control is displayed by the movie player.

When you add a movie player’s view to your app’s view hierarchy, be sure to size the frame correctly, as shown here:

```objc
MPMoviePlayerController *player =
        [[MPMoviePlayerController alloc] initWithContentURL: myURL];
[player prepareToPlay];
[player.view setFrame: myView.bounds];  // player's frame must match parent's
[myView addSubview: player.view];
// ...
[player play];
```

Consider a movie player view to be an opaque structure. You can add your own custom subviews to layer content on top of the movie but you must never modify any of its existing subviews.

In addition to layering content on top of a movie, you can provide custom background content by adding subviews to the view in the [backgroundView](mpmovieplayercontroller/backgroundview.md) property. Custom subviews are supported in both inline and fullscreen playback modes but you must adjust the positions of your views when entering or exiting fullscreen mode. Use the [MPMoviePlayerWillEnterFullscreenNotification](mpmovieplayerwillenterfullscreennotification.md) and [MPMoviePlayerWillExitFullscreenNotification](mpmovieplayerwillexitfullscreennotification.md) notifications to detect changes to and from fullscreen mode.

This class supports programmatic control of movie playback, and user-based control via buttons supplied by the movie player. You can control most aspects of playback programmatically using the methods and properties of the [MPMediaPlayback](mpmediaplayback.md) protocol, to which this class conforms. The methods and properties of that protocol let you start and stop playback, seek forward and backward through the movie’s content, and even change the playback rate. In addition, the [controlStyle](mpmovieplayercontroller/controlstyle.md) property of this class lets you display a set of standard system controls that allow the user to manipulate playback. You can also set the [shouldAutoplay](mpmovieplayercontroller/shouldautoplay.md) property for network-based content to start automatically.

You typically specify the movie you want to play when you create a new `MPMoviePlayerController` object. However, you can also change the currently playing movie by changing the value in the [contentURL](mpmovieplayercontroller/contenturl.md) property. Changing this property lets you reuse the same movie player controller object in multiple places. For performance reasons you may want to play movies as local files. Do this by first downloading them to a local directory.

> **Note**

>  Although you can create multiple `MPMoviePlayerController` objects and present their views in your interface, only one movie player at a time can play its movie.

To facilitate the creation of video bookmarks or chapter links for a long movie, the `MPMoviePlayerController` class defines methods for generating thumbnail images at specific times within a movie. You can request a single thumbnail image using the [thumbnailImage(atTime:timeOption:)](mpmovieplayercontroller/thumbnailimage%28attime_timeoption_%29.md) method or request multiple thumbnail images using the [requestThumbnailImages(atTimes:timeOption:)](mpmovieplayercontroller/requestthumbnailimages%28attimes_timeoption_%29.md) method.

To play a network stream whose URL requires access credentials, first create an appropriate [URLCredential](../foundation/urlcredential.md) object. Do this by calling, for example, the [init(user:password:persistence:)](../foundation/urlcredential/init%28user_password_persistence_%29.md) method, as shown here:

```objc
NSURLCredential *credential = [[NSURLCredential alloc]
                        initWithUser: @"userName"
                            password: @"password"
                         persistence: NSURLCredentialPersistenceForSession];
 
self.credential = credential;
[credential release];
```

In addition, create an appropriate [URLProtectionSpace](../foundation/urlprotectionspace.md) object, as shown here. Make appropriate modifications for the realm you are accessing:

```objc
NSURLProtectionSpace *protectionSpace = [[NSURLProtectionSpace alloc]
                            initWithHost: "@streams.mydomain.com"
                                    port: 80
                                protocol: @"http"
                                   realm: @"mydomain.com"
                    authenticationMethod: NSURLAuthenticationMethodDefault];
 
self.protectionSpace = protectionSpace;
[protectionSpace release];
```

Add the URL credential and the protection space to the [Singleton](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Singleton.html#//apple_ref/doc/uid/TP40008195-CH49) [URLCredentialStorage](../foundation/urlcredentialstorage.md) object. Do this by calling, for example, the [set(\_:for:)](../foundation/urlcredentialstorage/set%28__for_%29.md) method, as shown here:

```objc
[[NSURLCredentialStorage sharedCredentialStorage]
                    setDefaultCredential: credential
                      forProtectionSpace: protectionSpace];
```

With the credential and protection space information in place, you can then play the protected stream.

<a id="Movie-player-notifications"></a>

### Movie player notifications

A movie player generates notifications to keep your app informed about the state of movie playback. In addition to being notified when playback finishes, your app can be notified in the following situations:

- When the movie player begins playing, is paused, or begins seeking forward or backward
- When AirPlay playback starts or ends
- When the scaling mode of the movie changes
- When the movie enters or exits fullscreen mode
- When the load state for network-based movies changes
- When meta-information about the movie itself becomes available

For more information, see the Notifications section in this document.

## Topics

### Creating and initializing the object

- [init(contentURL:)](mpmovieplayercontroller/init%28contenturl_%29.md): Deprecated. Returns a `MPMoviePlayerController` object initialized with the movie at the specified URL.

### Accessing movie properties

- [contentURL](mpmovieplayercontroller/contenturl.md): Deprecated. The URL that points to the movie file.
- [movieSourceType](mpmovieplayercontroller/moviesourcetype.md): Deprecated. The playback type of the movie.
- [movieMediaTypes](mpmovieplayercontroller/moviemediatypes.md): Deprecated. The types of media available in the movie.
- [allowsAirPlay](mpmovieplayercontroller/allowsairplay.md): Deprecated. Specifies whether the movie player allows AirPlay movie playback.
- [isAirPlayVideoActive](mpmovieplayercontroller/isairplayvideoactive.md): Deprecated. Indicates whether the movie player is currently playing video via AirPlay.
- [naturalSize](mpmovieplayercontroller/naturalsize.md): Deprecated. The width and height of the movie frame.
- [isFullscreen](mpmovieplayercontroller/isfullscreen.md): Deprecated. A Boolean that indicates whether the movie player is in full-screen mode.
- [setFullscreen(\_:animated:)](mpmovieplayercontroller/setfullscreen%28__animated_%29.md): Deprecated. Causes the movie player to enter or exit full-screen mode.
- [scalingMode](mpmovieplayercontroller/scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [controlStyle](mpmovieplayercontroller/controlstyle.md): Deprecated. The style of the playback controls.
- [useApplicationAudioSession](mpmovieplayercontroller/useapplicationaudiosession.md): Deprecated. A Boolean value that indicates whether the movie player should use the app’s audio session.

### Accessing the movie duration

- [duration](mpmovieplayercontroller/duration.md): Deprecated. The duration of the movie, measured in seconds.
- [playableDuration](mpmovieplayercontroller/playableduration.md): Deprecated. The amount of currently playable content.

### Accessing the view

- [view](mpmovieplayercontroller/view.md): Deprecated. The view containing the movie content and controls.
- [backgroundView](mpmovieplayercontroller/backgroundview.md): Deprecated. A customizable view that is displayed behind the movie content.

### Controlling and monitoring playback

See also the methods of the [MPMediaPlayback](mpmediaplayback.md) protocol.

- [loadState](mpmovieplayercontroller/loadstate.md): Deprecated. The network load state of the movie player.
- [playbackState](mpmovieplayercontroller/playbackstate.md): Deprecated. The current playback state of the movie player.
- [initialPlaybackTime](mpmovieplayercontroller/initialplaybacktime.md): Deprecated. The time, specified in seconds within the video timeline, when playback should start.
- [endPlaybackTime](mpmovieplayercontroller/endplaybacktime.md): Deprecated. The end time (measured in seconds) for playback of the movie.
- [shouldAutoplay](mpmovieplayercontroller/shouldautoplay.md): Deprecated. A Boolean that indicates whether a movie should begin playback automatically.
- [readyForDisplay](mpmovieplayercontroller/readyfordisplay.md): Deprecated. A Boolean that indicates whether the first video frame of the movie is ready to be displayed.
- [repeatMode](mpmovieplayercontroller/repeatmode.md): Deprecated. Determines how the movie player repeats the playback of the movie.
- [timedMetadata](mpmovieplayercontroller/timedmetadata.md): Deprecated. Obtains the most recent time-based metadata provided by the streamed movie.

### Generating thumbnail images

- [thumbnailImage(atTime:timeOption:)](mpmovieplayercontroller/thumbnailimage%28attime_timeoption_%29.md): Deprecated. Captures and returns a thumbnail image from the current movie.
- [requestThumbnailImages(atTimes:timeOption:)](mpmovieplayercontroller/requestthumbnailimages%28attimes_timeoption_%29.md): Deprecated. Captures one or more thumbnail images asynchronously from the current movie.
- [cancelAllThumbnailImageRequests()](mpmovieplayercontroller/cancelallthumbnailimagerequests%28%29.md): Deprecated. Cancels all pending asynchronous thumbnail image requests.

### Retrieving movie logs

- [accessLog](mpmovieplayercontroller/accesslog.md): Deprecated. A snapshot of the network playback log for the movie player if it is playing a network stream.
- [errorLog](mpmovieplayercontroller/errorlog.md): Deprecated. A snapshot of the playback failure error log for the movie player if it is playing a network stream.

### Constants

- [MPMovieLoadState](mpmovieloadstate.md): Deprecated. Constants describing the network load state of the movie player.
- [MPMovieControlStyle](mpmoviecontrolstyle.md): Deprecated. Constants describing the style of the playback controls.
- [MPMovieFinishReason](mpmoviefinishreason.md): Deprecated. Constants describing the reason that playback ended.
- [MPMoviePlaybackState](mpmovieplaybackstate.md): Deprecated. Constants describing the current playback state of the movie player.
- [MPMovieRepeatMode](mpmovierepeatmode.md): Deprecated. Constants describing how the movie player repeats content at the end of playback.
- [MPMovieScalingMode](mpmoviescalingmode.md): Deprecated. Constants describing how the movie content is scaled to fit the frame of its view.
- [MPMovieTimeOption](mpmovietimeoption.md): Deprecated. Constants describing which frame to use when generating thumbnail images.
- [MPMovieMediaTypeMask](mpmoviemediatypemask.md): Deprecated. The types of content available in the movie file.
- [MPMovieSourceType](mpmoviesourcetype.md): Deprecated. Specifies the type of the movie file.
- [Thumbnail notification user info keys](thumbnail-notification-user-info-keys.md): The following keys may be found in the `userInfo` dictionary of a [MPMoviePlayerThumbnailImageRequestDidFinishNotification](mpmovieplayerthumbnailimagerequestdidfinishnotification.md) notification.
- [Fullscreen notification keys](fullscreen-notification-keys.md): The following keys may be found in the `userInfo` dictionary of notifications for transitioning in or out of full-screen mode.
- [Playback finished notification key](playback-finished-notification-key.md): The following key may be found in the userInfo dictionary of a [MPMoviePlayerPlaybackDidFinishNotification](mpmovieplayerplaybackdidfinishnotification.md) notification.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MPMediaPlayback](mpmediaplayback.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated symbols

- [MPMovieAccessLog](mpmovieaccesslog.md): Deprecated. Key metrics about network playback for an associated movie player that’s playing streamed content.
- [MPMovieAccessLogEvent](mpmovieaccesslogevent.md): Deprecated. A single piece of information for a movie access log.
- [MPMovieErrorLog](mpmovieerrorlog.md): Deprecated. Data describing network resource playback failures for the associated movie player, including timestamps indicating when each failure occurred.
- [MPMovieErrorLogEvent](mpmovieerrorlogevent.md): Deprecated. A single piece of information for a movie error log.
- [MPMovieLoadState](mpmovieloadstate.md): Deprecated. Constants describing the network load state of the movie player.
- [MPMovieMediaTypeMask](mpmoviemediatypemask.md): Deprecated. The types of content available in the movie file.
- [MPMoviePlayerViewController](mpmovieplayerviewcontroller.md): Deprecated. A simple view controller for displaying full-screen movies.
- [MPTimedMetadata](mptimedmetadata.md): Deprecated. A *timed metadata object that* carries time-based information within HTTP streamed media.
- [MPPlayableContentManager](mpplayablecontentmanager.md): Deprecated. A shared content manager for controlling interactions between your media app and system-provided or external media player interfaces.
- [MPPlayableContentManagerContext](mpplayablecontentmanagercontext.md): Deprecated. An object representing the current state of the playable endpoint.
- [iPodMusicPlayer](mpmusicplayercontroller/ipodmusicplayer.md): Deprecated. Returns the iPod music player, which controls the iPod app’s state.
- [init(image:)](mpmediaitemartwork/init%28image_%29.md): Deprecated. Initializes a media item artwork instance with a full-size image.
- [imageCropRect](mpmediaitemartwork/imagecroprect.md): Deprecated. The bounds, in points, of the content area for the full size image associated with the media item artwork.
- [showsRouteButton](mpvolumeview/showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [routeButtonImage(for:)](mpvolumeview/routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.

# MPMoviePlayerController (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A type of movie player that manages the playback of a movie from a file or a network stream.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@interface MPMoviePlayerController : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  The [MPMoviePlayerController](mpmovieplayercontroller.md) class is formally deprecated in iOS 9. (The [MPMoviePlayerViewController](mpmovieplayerviewcontroller.md) class is also formally deprecated.) To play video content in iOS 9 and later, instead use the [AVPictureInPictureController](../avkit/avpictureinpicturecontroller.md) or [AVPlayerViewController](../avkit/avplayerviewcontroller.md) class from the AVKit framework, or the [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) class from WebKit.

Playback occurs in a view owned by the movie player and takes place either fullscreen or inline. You can incorporate a movie player’s view into a view hierarchy owned by your app, or use an MPMoviePlayerViewController object to manage the presentation for you.

Movie players support wireless movie playback to AirPlay-enabled hardware such as Apple TV. AirPlay playback is enabled by default. To disable AirPlay in your app, set the [allowsAirPlay](mpmovieplayercontroller/allowsairplay.md) property to [false](https://developer.apple.com/documentation/swift/false). In iOS 8.0 and later, users access AirPlay compatible hardware through the Control Panel; no AirPlay control is displayed by the movie player.

When you add a movie player’s view to your app’s view hierarchy, be sure to size the frame correctly, as shown here:

```objc
MPMoviePlayerController *player =
        [[MPMoviePlayerController alloc] initWithContentURL: myURL];
[player prepareToPlay];
[player.view setFrame: myView.bounds];  // player's frame must match parent's
[myView addSubview: player.view];
// ...
[player play];
```

Consider a movie player view to be an opaque structure. You can add your own custom subviews to layer content on top of the movie but you must never modify any of its existing subviews.

In addition to layering content on top of a movie, you can provide custom background content by adding subviews to the view in the [backgroundView](mpmovieplayercontroller/backgroundview.md) property. Custom subviews are supported in both inline and fullscreen playback modes but you must adjust the positions of your views when entering or exiting fullscreen mode. Use the [MPMoviePlayerWillEnterFullscreenNotification](mpmovieplayerwillenterfullscreennotification.md) and [MPMoviePlayerWillExitFullscreenNotification](mpmovieplayerwillexitfullscreennotification.md) notifications to detect changes to and from fullscreen mode.

This class supports programmatic control of movie playback, and user-based control via buttons supplied by the movie player. You can control most aspects of playback programmatically using the methods and properties of the [MPMediaPlayback](mpmediaplayback.md) protocol, to which this class conforms. The methods and properties of that protocol let you start and stop playback, seek forward and backward through the movie’s content, and even change the playback rate. In addition, the [controlStyle](mpmovieplayercontroller/controlstyle.md) property of this class lets you display a set of standard system controls that allow the user to manipulate playback. You can also set the [shouldAutoplay](mpmovieplayercontroller/shouldautoplay.md) property for network-based content to start automatically.

You typically specify the movie you want to play when you create a new `MPMoviePlayerController` object. However, you can also change the currently playing movie by changing the value in the [contentURL](mpmovieplayercontroller/contenturl.md) property. Changing this property lets you reuse the same movie player controller object in multiple places. For performance reasons you may want to play movies as local files. Do this by first downloading them to a local directory.

> **Note**

>  Although you can create multiple `MPMoviePlayerController` objects and present their views in your interface, only one movie player at a time can play its movie.

To facilitate the creation of video bookmarks or chapter links for a long movie, the `MPMoviePlayerController` class defines methods for generating thumbnail images at specific times within a movie. You can request a single thumbnail image using the [thumbnailImageAtTime:timeOption:](mpmovieplayercontroller/thumbnailimage%28attime_timeoption_%29.md) method or request multiple thumbnail images using the [requestThumbnailImagesAtTimes:timeOption:](mpmovieplayercontroller/requestthumbnailimages%28attimes_timeoption_%29.md) method.

To play a network stream whose URL requires access credentials, first create an appropriate [NSURLCredential](../foundation/urlcredential.md) object. Do this by calling, for example, the [initWithUser:password:persistence:](../foundation/urlcredential/init%28user_password_persistence_%29.md) method, as shown here:

```objc
NSURLCredential *credential = [[NSURLCredential alloc]
                        initWithUser: @"userName"
                            password: @"password"
                         persistence: NSURLCredentialPersistenceForSession];
 
self.credential = credential;
[credential release];
```

In addition, create an appropriate [NSURLProtectionSpace](../foundation/urlprotectionspace.md) object, as shown here. Make appropriate modifications for the realm you are accessing:

```objc
NSURLProtectionSpace *protectionSpace = [[NSURLProtectionSpace alloc]
                            initWithHost: "@streams.mydomain.com"
                                    port: 80
                                protocol: @"http"
                                   realm: @"mydomain.com"
                    authenticationMethod: NSURLAuthenticationMethodDefault];
 
self.protectionSpace = protectionSpace;
[protectionSpace release];
```

Add the URL credential and the protection space to the [Singleton](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Singleton.html#//apple_ref/doc/uid/TP40008195-CH49) [NSURLCredentialStorage](../foundation/urlcredentialstorage.md) object. Do this by calling, for example, the [setCredential:forProtectionSpace:](../foundation/urlcredentialstorage/set%28__for_%29.md) method, as shown here:

```objc
[[NSURLCredentialStorage sharedCredentialStorage]
                    setDefaultCredential: credential
                      forProtectionSpace: protectionSpace];
```

With the credential and protection space information in place, you can then play the protected stream.

<a id="Movie-player-notifications"></a>

### Movie player notifications

A movie player generates notifications to keep your app informed about the state of movie playback. In addition to being notified when playback finishes, your app can be notified in the following situations:

- When the movie player begins playing, is paused, or begins seeking forward or backward
- When AirPlay playback starts or ends
- When the scaling mode of the movie changes
- When the movie enters or exits fullscreen mode
- When the load state for network-based movies changes
- When meta-information about the movie itself becomes available

For more information, see the Notifications section in this document.

## Topics

### Creating and initializing the object

- [initWithContentURL:](mpmovieplayercontroller/init%28contenturl_%29.md): Deprecated. Returns a `MPMoviePlayerController` object initialized with the movie at the specified URL.

### Accessing movie properties

- [contentURL](mpmovieplayercontroller/contenturl.md): Deprecated. The URL that points to the movie file.
- [movieSourceType](mpmovieplayercontroller/moviesourcetype.md): Deprecated. The playback type of the movie.
- [movieMediaTypes](mpmovieplayercontroller/moviemediatypes.md): Deprecated. The types of media available in the movie.
- [allowsAirPlay](mpmovieplayercontroller/allowsairplay.md): Deprecated. Specifies whether the movie player allows AirPlay movie playback.
- [airPlayVideoActive](mpmovieplayercontroller/isairplayvideoactive.md): Deprecated. Indicates whether the movie player is currently playing video via AirPlay.
- [naturalSize](mpmovieplayercontroller/naturalsize.md): Deprecated. The width and height of the movie frame.
- [fullscreen](mpmovieplayercontroller/isfullscreen.md): Deprecated. A Boolean that indicates whether the movie player is in full-screen mode.
- [setFullscreen:animated:](mpmovieplayercontroller/setfullscreen%28__animated_%29.md): Deprecated. Causes the movie player to enter or exit full-screen mode.
- [scalingMode](mpmovieplayercontroller/scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [controlStyle](mpmovieplayercontroller/controlstyle.md): Deprecated. The style of the playback controls.
- [useApplicationAudioSession](mpmovieplayercontroller/useapplicationaudiosession.md): Deprecated. A Boolean value that indicates whether the movie player should use the app’s audio session.

### Accessing the movie duration

- [duration](mpmovieplayercontroller/duration.md): Deprecated. The duration of the movie, measured in seconds.
- [playableDuration](mpmovieplayercontroller/playableduration.md): Deprecated. The amount of currently playable content.

### Accessing the view

- [view](mpmovieplayercontroller/view.md): Deprecated. The view containing the movie content and controls.
- [backgroundView](mpmovieplayercontroller/backgroundview.md): Deprecated. A customizable view that is displayed behind the movie content.

### Controlling and monitoring playback

See also the methods of the [MPMediaPlayback](mpmediaplayback.md) protocol.

- [loadState](mpmovieplayercontroller/loadstate.md): Deprecated. The network load state of the movie player.
- [playbackState](mpmovieplayercontroller/playbackstate.md): Deprecated. The current playback state of the movie player.
- [initialPlaybackTime](mpmovieplayercontroller/initialplaybacktime.md): Deprecated. The time, specified in seconds within the video timeline, when playback should start.
- [endPlaybackTime](mpmovieplayercontroller/endplaybacktime.md): Deprecated. The end time (measured in seconds) for playback of the movie.
- [shouldAutoplay](mpmovieplayercontroller/shouldautoplay.md): Deprecated. A Boolean that indicates whether a movie should begin playback automatically.
- [readyForDisplay](mpmovieplayercontroller/readyfordisplay.md): Deprecated. A Boolean that indicates whether the first video frame of the movie is ready to be displayed.
- [repeatMode](mpmovieplayercontroller/repeatmode.md): Deprecated. Determines how the movie player repeats the playback of the movie.
- [timedMetadata](mpmovieplayercontroller/timedmetadata.md): Deprecated. Obtains the most recent time-based metadata provided by the streamed movie.

### Generating thumbnail images

- [thumbnailImageAtTime:timeOption:](mpmovieplayercontroller/thumbnailimage%28attime_timeoption_%29.md): Deprecated. Captures and returns a thumbnail image from the current movie.
- [requestThumbnailImagesAtTimes:timeOption:](mpmovieplayercontroller/requestthumbnailimages%28attimes_timeoption_%29.md): Deprecated. Captures one or more thumbnail images asynchronously from the current movie.
- [cancelAllThumbnailImageRequests](mpmovieplayercontroller/cancelallthumbnailimagerequests%28%29.md): Deprecated. Cancels all pending asynchronous thumbnail image requests.

### Retrieving movie logs

- [accessLog](mpmovieplayercontroller/accesslog.md): Deprecated. A snapshot of the network playback log for the movie player if it is playing a network stream.
- [errorLog](mpmovieplayercontroller/errorlog.md): Deprecated. A snapshot of the playback failure error log for the movie player if it is playing a network stream.

### Constants

- [MPMovieLoadState](mpmovieloadstate.md): Deprecated. Constants describing the network load state of the movie player.
- [MPMovieControlStyle](mpmoviecontrolstyle.md): Deprecated. Constants describing the style of the playback controls.
- [MPMovieFinishReason](mpmoviefinishreason.md): Deprecated. Constants describing the reason that playback ended.
- [MPMoviePlaybackState](mpmovieplaybackstate.md): Deprecated. Constants describing the current playback state of the movie player.
- [MPMovieRepeatMode](mpmovierepeatmode.md): Deprecated. Constants describing how the movie player repeats content at the end of playback.
- [MPMovieScalingMode](mpmoviescalingmode.md): Deprecated. Constants describing how the movie content is scaled to fit the frame of its view.
- [MPMovieTimeOption](mpmovietimeoption.md): Deprecated. Constants describing which frame to use when generating thumbnail images.
- [MPMovieMediaTypeMask](mpmoviemediatypemask.md): Deprecated. The types of content available in the movie file.
- [MPMovieSourceType](mpmoviesourcetype.md): Deprecated. Specifies the type of the movie file.
- [Thumbnail notification user info keys](thumbnail-notification-user-info-keys.md): The following keys may be found in the `userInfo` dictionary of a [MPMoviePlayerThumbnailImageRequestDidFinishNotification](mpmovieplayerthumbnailimagerequestdidfinishnotification.md) notification.
- [Fullscreen notification keys](fullscreen-notification-keys.md): The following keys may be found in the `userInfo` dictionary of notifications for transitioning in or out of full-screen mode.
- [Playback finished notification key](playback-finished-notification-key.md): The following key may be found in the userInfo dictionary of a [MPMoviePlayerPlaybackDidFinishNotification](mpmovieplayerplaybackdidfinishnotification.md) notification.

### Notifications

- [MPMoviePlayerDidEnterFullscreenNotification](mpmovieplayerdidenterfullscreennotification.md): Deprecated. Posted when a movie player has entered full-screen mode. There is no `userInfo` dictionary.
- [MPMoviePlayerDidExitFullscreenNotification](mpmovieplayerdidexitfullscreennotification.md): Deprecated. Posted when a movie player has exited full-screen mode. There is no `userInfo` dictionary.
- [MPMoviePlayerIsAirPlayVideoActiveDidChangeNotification](mpmovieplayerisairplayvideoactivedidchangenotification.md): Deprecated. Posted when a movie player has started or ended playing a movie via AirPlay. There is no `userInfo` dictionary.
- [MPMoviePlayerLoadStateDidChangeNotification](mpmovieplayerloadstatedidchangenotification.md): Deprecated. Posted when a movie player’s network buffering state has changed. There is no `userInfo` dictionary.
- [MPMoviePlayerNowPlayingMovieDidChangeNotification](mpmovieplayernowplayingmoviedidchangenotification.md): Deprecated. Posted when the currently playing movie has changed. There is no `userInfo` dictionary.
- [MPMoviePlayerPlaybackDidFinishNotification](mpmovieplayerplaybackdidfinishnotification.md): Deprecated. Posted when a movie has finished playing. The `userInfo` dictionary of this notification contains the [MPMoviePlayerPlaybackDidFinishReasonUserInfoKey](mpmovieplayerplaybackdidfinishreasonuserinfokey.md) key, which indicates the reason that playback finished. This notification is also sent when playback fails because of an error.
- [MPMoviePlayerPlaybackStateDidChangeNotification](mpmovieplayerplaybackstatedidchangenotification.md): Deprecated. Posted when a movie player’s playback state has changed. There is no `userInfo` dictionary.
- [MPMoviePlayerReadyForDisplayDidChangeNotification](mpmovieplayerreadyfordisplaydidchangenotification.md): Deprecated. Posted when the ready for display state changes.
- [MPMoviePlayerScalingModeDidChangeNotification](mpmovieplayerscalingmodedidchangenotification.md): Deprecated. Posted when the scaling mode of a movie player has changed. There is no `userInfo` dictionary.
- [MPMoviePlayerThumbnailImageRequestDidFinishNotification](mpmovieplayerthumbnailimagerequestdidfinishnotification.md): Deprecated. Posted when a request to capture a thumbnail from a movie has finished whether the request succeeded or failed. Upon successful capture of a thumbnail, the `userInfo` dictionary contains values for the following keys:
- [MPMoviePlayerTimedMetadataUpdatedNotification](mpmovieplayertimedmetadataupdatednotification.md): Deprecated. Posted when new timed metadata arrives.
- [MPMoviePlayerWillEnterFullscreenNotification](mpmovieplayerwillenterfullscreennotification.md): Deprecated. Posted when a movie player is about to enter full-screen mode.
- [MPMoviePlayerWillExitFullscreenNotification](mpmovieplayerwillexitfullscreennotification.md): Deprecated. Posted when a movie player is about to exit full-screen mode.
- [MPMovieDurationAvailableNotification](mpmoviedurationavailablenotification.md): Deprecated. Posted when the duration of a movie has been determined. There is no `userInfo` dictionary.
- [MPMovieMediaTypesAvailableNotification](mpmoviemediatypesavailablenotification.md): Deprecated. Posted when the available media types in a movie are determined. There is no `userInfo` dictionary.
- [MPMovieNaturalSizeAvailableNotification](mpmovienaturalsizeavailablenotification.md): Deprecated. Posted when the natural frame size of a movie is first determined or subsequently changes. There is no `userInfo` dictionary.
- [MPMovieSourceTypeAvailableNotification](mpmoviesourcetypeavailablenotification.md): Deprecated. Posted when the source type of a movie was previously unknown and is newly available. There is no `userInfo` dictionary.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MPMediaPlayback](mpmediaplayback.md)

## See Also

### Deprecated symbols

- [MPMovieAccessLog](mpmovieaccesslog.md): Deprecated. Key metrics about network playback for an associated movie player that’s playing streamed content.
- [MPMovieAccessLogEvent](mpmovieaccesslogevent.md): Deprecated. A single piece of information for a movie access log.
- [MPMovieErrorLog](mpmovieerrorlog.md): Deprecated. Data describing network resource playback failures for the associated movie player, including timestamps indicating when each failure occurred.
- [MPMovieErrorLogEvent](mpmovieerrorlogevent.md): Deprecated. A single piece of information for a movie error log.
- [MPMovieLoadState](mpmovieloadstate.md): Deprecated. Constants describing the network load state of the movie player.
- [MPMovieMediaTypeMask](mpmoviemediatypemask.md): Deprecated. The types of content available in the movie file.
- [MPMoviePlayerViewController](mpmovieplayerviewcontroller.md): Deprecated. A simple view controller for displaying full-screen movies.
- [MPTimedMetadata](mptimedmetadata.md): Deprecated. A *timed metadata object that* carries time-based information within HTTP streamed media.
- [MPPlayableContentManager](mpplayablecontentmanager.md): Deprecated. A shared content manager for controlling interactions between your media app and system-provided or external media player interfaces.
- [MPPlayableContentManagerContext](mpplayablecontentmanagercontext.md): Deprecated. An object representing the current state of the playable endpoint.
- [iPodMusicPlayer](mpmusicplayercontroller/ipodmusicplayer.md): Deprecated. Returns the iPod music player, which controls the iPod app’s state.
- [initWithImage:](mpmediaitemartwork/init%28image_%29.md): Deprecated. Initializes a media item artwork instance with a full-size image.
- [imageCropRect](mpmediaitemartwork/imagecroprect.md): Deprecated. The bounds, in points, of the content area for the full size image associated with the media item artwork.
- [showsRouteButton](mpvolumeview/showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [routeButtonImageForState:](mpvolumeview/routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
