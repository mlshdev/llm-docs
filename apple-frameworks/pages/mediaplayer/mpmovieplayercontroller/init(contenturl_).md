> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/init(contenturl:)](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/init(contenturl:))

# init(contentURL:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns a `MPMoviePlayerController` object initialized with the movie at the specified URL.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
init!(contentURL url: URL!)
```

## Parameters

- `url`: The location of the movie file. This file must be located either in your app directory or on a remote server.

<a id="return-value"></a>

## Return Value

The movie player object.

<a id="Discussion"></a>

## Discussion

This method initializes a movie player, but does not prepare it for playback. To prepare a new movie player for playback, call the [prepareToPlay()](../mpmediaplayback/preparetoplay%28%29.md) method, described in [MPMediaPlayback](../mpmediaplayback.md).

To be notified when a new movie player is ready to play, register for the [MPMoviePlayerLoadStateDidChangeNotification](../mpmovieplayerloadstatedidchangenotification.md) notification. You can then check load state by accessing the [loadState](loadstate.md) property.

To check for errors in URL loading, register for the [MPMoviePlayerPlaybackDidFinishNotification](../mpmovieplayerplaybackdidfinishnotification.md) notification. On error, this notification contains an [NSError](../../foundation/nserror.md) object available using the `@"error"` key in the notification’s `userInfo` dictionary.

# initWithContentURL: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns a `MPMoviePlayerController` object initialized with the movie at the specified URL.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
- (instancetype) initWithContentURL:(NSURL *) url;
```

## Parameters

- `url`: The location of the movie file. This file must be located either in your app directory or on a remote server.

<a id="return-value"></a>

## Return Value

The movie player object.

<a id="Discussion"></a>

## Discussion

This method initializes a movie player, but does not prepare it for playback. To prepare a new movie player for playback, call the [prepareToPlay](../mpmediaplayback/preparetoplay%28%29.md) method, described in [MPMediaPlayback](../mpmediaplayback.md).

To be notified when a new movie player is ready to play, register for the [MPMoviePlayerLoadStateDidChangeNotification](../mpmovieplayerloadstatedidchangenotification.md) notification. You can then check load state by accessing the [loadState](loadstate.md) property.

To check for errors in URL loading, register for the [MPMoviePlayerPlaybackDidFinishNotification](../mpmovieplayerplaybackdidfinishnotification.md) notification. On error, this notification contains an [NSError](../../foundation/nserror.md) object available using the `@"error"` key in the notification’s `userInfo` dictionary.
