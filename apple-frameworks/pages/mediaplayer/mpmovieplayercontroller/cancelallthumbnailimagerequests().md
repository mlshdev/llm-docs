> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/cancelallthumbnailimagerequests()](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/cancelallthumbnailimagerequests())

# cancelAllThumbnailImageRequests() (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Cancels all pending asynchronous thumbnail image requests.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
func cancelAllThumbnailImageRequests()
```

<a id="Discussion"></a>

## Discussion

This method cancels only requests made using the [requestThumbnailImages(atTimes:timeOption:)](requestthumbnailimages%28attimes_timeoption_%29.md) method. It does not cancel requests made synchronously using the [thumbnailImage(atTime:timeOption:)](thumbnailimage%28attime_timeoption_%29.md) method.

## See Also

### Generating thumbnail images

- [thumbnailImage(atTime:timeOption:)](thumbnailimage%28attime_timeoption_%29.md): Deprecated. Captures and returns a thumbnail image from the current movie.
- [requestThumbnailImages(atTimes:timeOption:)](requestthumbnailimages%28attimes_timeoption_%29.md): Deprecated. Captures one or more thumbnail images asynchronously from the current movie.

# cancelAllThumbnailImageRequests (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Cancels all pending asynchronous thumbnail image requests.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
- (void) cancelAllThumbnailImageRequests;
```

<a id="Discussion"></a>

## Discussion

This method cancels only requests made using the [requestThumbnailImagesAtTimes:timeOption:](requestthumbnailimages%28attimes_timeoption_%29.md) method. It does not cancel requests made synchronously using the [thumbnailImageAtTime:timeOption:](thumbnailimage%28attime_timeoption_%29.md) method.

## See Also

### Generating thumbnail images

- [thumbnailImageAtTime:timeOption:](thumbnailimage%28attime_timeoption_%29.md): Deprecated. Captures and returns a thumbnail image from the current movie.
- [requestThumbnailImagesAtTimes:timeOption:](requestthumbnailimages%28attimes_timeoption_%29.md): Deprecated. Captures one or more thumbnail images asynchronously from the current movie.
