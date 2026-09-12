> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayerviewcontroller/init(contenturl:)](https://developer.apple.com/documentation/mediaplayer/mpmovieplayerviewcontroller/init(contenturl:))

# init(contentURL:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns a movie player view controller initialized with the specified movie.

> Use AVPlayerViewController in AVKit.

## Declaration

```swift
init!(contentURL: URL!)
```

## Parameters

- `contentURL`: The URL that points to the content to be played.

<a id="return-value"></a>

## Return Value

A movie player view controller initialized with the specified URL.

## See Also

### New methods

- [moviePlayer](movieplayer.md): Deprecated. The movie player controller object used to present the movie.

# initWithContentURL: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns a movie player view controller initialized with the specified movie.

> Use AVPlayerViewController in AVKit.

## Declaration

```objectivec
- (instancetype) initWithContentURL:(NSURL *) contentURL;
```

## Parameters

- `contentURL`: The URL that points to the content to be played.

<a id="return-value"></a>

## Return Value

A movie player view controller initialized with the specified URL.

## See Also

### New methods

- [moviePlayer](movieplayer.md): Deprecated. The movie player controller object used to present the movie.
