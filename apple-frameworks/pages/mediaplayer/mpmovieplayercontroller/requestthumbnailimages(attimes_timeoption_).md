> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/requestthumbnailimages(attimes:timeoption:)](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/requestthumbnailimages(attimes:timeoption:))

# requestThumbnailImages(atTimes:timeOption:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Captures one or more thumbnail images asynchronously from the current movie.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
func requestThumbnailImages(atTimes playbackTimes: [Any]!, timeOption option: MPMovieTimeOption)
```

## Parameters

- `playbackTimes`: An array of [NSNumber](../../foundation/nsnumber.md) objects containing the times at which to capture the thumbnail images. Each time value represents the number of seconds from the beginning of the current movie.
- `option`: The option to use when determining which specific frame to use for each thumbnail image. For a list of possible values, see [MPMovieTimeOption](../mpmovietimeoption.md).

<a id="Discussion"></a>

## Discussion

This method processes each thumbnail request separately and asynchronously. When the results for a single image arrive, the movie player posts a [MPMoviePlayerThumbnailImageRequestDidFinishNotification](../mpmovieplayerthumbnailimagerequestdidfinishnotification.md) notification with the results for that image. Notifications are posted regardless of whether the image capture was successful or failed. You should register for this notification prior to calling this method.

> **Note**

>  This method is not not called when the source URL is an HTTP Live Streaming (HLS) content source. See [HTTP Live Streaming Overview](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StreamingMediaGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008332).

## See Also

### Generating thumbnail images

- [thumbnailImage(atTime:timeOption:)](thumbnailimage%28attime_timeoption_%29.md): Deprecated. Captures and returns a thumbnail image from the current movie.
- [cancelAllThumbnailImageRequests()](cancelallthumbnailimagerequests%28%29.md): Deprecated. Cancels all pending asynchronous thumbnail image requests.

# requestThumbnailImagesAtTimes:timeOption: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Captures one or more thumbnail images asynchronously from the current movie.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
- (void) requestThumbnailImagesAtTimes:(NSArray *) playbackTimes timeOption:(MPMovieTimeOption) option;
```

## Parameters

- `playbackTimes`: An array of [NSNumber](../../foundation/nsnumber.md) objects containing the times at which to capture the thumbnail images. Each time value represents the number of seconds from the beginning of the current movie.
- `option`: The option to use when determining which specific frame to use for each thumbnail image. For a list of possible values, see [MPMovieTimeOption](../mpmovietimeoption.md).

<a id="Discussion"></a>

## Discussion

This method processes each thumbnail request separately and asynchronously. When the results for a single image arrive, the movie player posts a [MPMoviePlayerThumbnailImageRequestDidFinishNotification](../mpmovieplayerthumbnailimagerequestdidfinishnotification.md) notification with the results for that image. Notifications are posted regardless of whether the image capture was successful or failed. You should register for this notification prior to calling this method.

> **Note**

>  This method is not not called when the source URL is an HTTP Live Streaming (HLS) content source. See [HTTP Live Streaming Overview](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StreamingMediaGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008332).

## See Also

### Generating thumbnail images

- [thumbnailImageAtTime:timeOption:](thumbnailimage%28attime_timeoption_%29.md): Deprecated. Captures and returns a thumbnail image from the current movie.
- [cancelAllThumbnailImageRequests](cancelallthumbnailimagerequests%28%29.md): Deprecated. Cancels all pending asynchronous thumbnail image requests.
