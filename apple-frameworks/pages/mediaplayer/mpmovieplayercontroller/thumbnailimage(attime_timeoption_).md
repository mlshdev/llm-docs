> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/thumbnailimage(attime:timeoption:)](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/thumbnailimage(attime:timeoption:))

# thumbnailImage(atTime:timeOption:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Captures and returns a thumbnail image from the current movie.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
func thumbnailImage(atTime playbackTime: TimeInterval, timeOption option: MPMovieTimeOption) -> UIImage!
```

## Parameters

- `playbackTime`: The time at which to capture the thumbnail image. The time value represents the number of seconds from the beginning of the current movie.
- `option`: The option to use when determining which specific frame to use for the thumbnail image. For a list of possible values, see [MPMovieTimeOption](../mpmovietimeoption.md).

<a id="return-value"></a>

## Return Value

An image object containing the image from the movie or `nil` if the thumbnail could not be captured.

<a id="Discussion"></a>

## Discussion

This method captures the thumbnail image synchronously from the current movie (which is accessible from the [MPMovieSourceType.unknown](../mpmoviesourcetype/unknown.md) property).

> **Note**

>  This method is not successful when the source URL is an HTTP Live Streaming (HLS) content source. The returned value for an HLS source is an empty `UIImage` object. See [HTTP Live Streaming Overview](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StreamingMediaGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008332).

## See Also

### Generating thumbnail images

- [requestThumbnailImages(atTimes:timeOption:)](requestthumbnailimages%28attimes_timeoption_%29.md): Deprecated. Captures one or more thumbnail images asynchronously from the current movie.
- [cancelAllThumbnailImageRequests()](cancelallthumbnailimagerequests%28%29.md): Deprecated. Cancels all pending asynchronous thumbnail image requests.

# thumbnailImageAtTime:timeOption: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Captures and returns a thumbnail image from the current movie.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
- (UIImage *) thumbnailImageAtTime:(NSTimeInterval) playbackTime timeOption:(MPMovieTimeOption) option;
```

## Parameters

- `playbackTime`: The time at which to capture the thumbnail image. The time value represents the number of seconds from the beginning of the current movie.
- `option`: The option to use when determining which specific frame to use for the thumbnail image. For a list of possible values, see [MPMovieTimeOption](../mpmovietimeoption.md).

<a id="return-value"></a>

## Return Value

An image object containing the image from the movie or `nil` if the thumbnail could not be captured.

<a id="Discussion"></a>

## Discussion

This method captures the thumbnail image synchronously from the current movie (which is accessible from the [MPMovieSourceTypeUnknown](../mpmoviesourcetype/unknown.md) property).

> **Note**

>  This method is not successful when the source URL is an HTTP Live Streaming (HLS) content source. The returned value for an HLS source is an empty `UIImage` object. See [HTTP Live Streaming Overview](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StreamingMediaGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008332).

## See Also

### Generating thumbnail images

- [requestThumbnailImagesAtTimes:timeOption:](requestthumbnailimages%28attimes_timeoption_%29.md): Deprecated. Captures one or more thumbnail images asynchronously from the current movie.
- [cancelAllThumbnailImageRequests](cancelallthumbnailimagerequests%28%29.md): Deprecated. Cancels all pending asynchronous thumbnail image requests.
