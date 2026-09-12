> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmoviecontrolstyle](https://developer.apple.com/documentation/mediaplayer/mpmoviecontrolstyle)

# MPMovieControlStyle (Swift)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Constants describing the style of the playback controls.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
enum MPMovieControlStyle
```

## Topics

### Constants

- [MPMovieControlStyle.none](mpmoviecontrolstyle/none.md): Deprecated.
- [MPMovieControlStyle.embedded](mpmoviecontrolstyle/embedded.md): Deprecated.
- [MPMovieControlStyle.fullscreen](mpmoviecontrolstyle/fullscreen.md): Deprecated.
- [default](mpmoviecontrolstyle/default.md): Deprecated.

### Initializers

- [init(rawValue:)](mpmoviecontrolstyle/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [MPMovieLoadState](mpmovieloadstate.md): Deprecated. Constants describing the network load state of the movie player.
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

# MPMovieControlStyle (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Constants describing the style of the playback controls.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
enum MPMovieControlStyle : NSInteger;
```

## Topics

### Constants

- [MPMovieControlStyleNone](mpmoviecontrolstyle/none.md): Deprecated.
- [MPMovieControlStyleEmbedded](mpmoviecontrolstyle/embedded.md): Deprecated.
- [MPMovieControlStyleFullscreen](mpmoviecontrolstyle/fullscreen.md): Deprecated.
- [MPMovieControlStyleDefault](mpmoviecontrolstyle/default.md): Deprecated.

## See Also

### Constants

- [MPMovieLoadState](mpmovieloadstate.md): Deprecated. Constants describing the network load state of the movie player.
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
