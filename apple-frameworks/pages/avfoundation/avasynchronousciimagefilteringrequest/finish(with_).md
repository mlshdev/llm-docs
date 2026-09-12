> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronousciimagefilteringrequest/finish(with:)](https://developer.apple.com/documentation/avfoundation/avasynchronousciimagefilteringrequest/finish(with:))

# finish(with:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Notifies AVFoundation that you cannot fulfill the image filtering request.

> Use AVCIImageFilteringParameters instead

## Declaration

```swift
func finish(with error: any Error)
```

## Parameters

- `error`: An error object describing the reason to

<a id="Discussion"></a>

## Discussion

Call this method if you cannot process the input image and wish to abort playback as a result—for example, if the [outputImage](../../coreimage/cifilter-swift.class/outputimage.md) object from your filter chain is nil. (If instead you want to fall back to rendering an unfiltered image, call the [finish(with:context:)](finish%28with_context_%29.md) and pass the [sourceImage](sourceimage.md) object to the `filteredImage` parameter.)

Calling this method causes AVFoundation to post a notification named [failedToPlayToEndTimeNotification](../avplayeritem/failedtoplaytoendtimenotification.md). Observers of this notification can use the [AVPlayerItemFailedToPlayToEndTimeErrorKey](../avplayeritemfailedtoplaytoendtimeerrorkey.md) key to examine the error you provide.

## See Also

### Returning the filtered image

- [finish(with:context:)](finish%28with_context_%29.md): Deprecated. Provides the filtered video frame image to AVFoundation for further processing or display.

# finishWithError: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Notifies AVFoundation that you cannot fulfill the image filtering request.

## Declaration

```objectivec
- (void) finishWithError:(NSError *) error;
```

## Parameters

- `error`: An error object describing the reason to

<a id="Discussion"></a>

## Discussion

Call this method if you cannot process the input image and wish to abort playback as a result—for example, if the [outputImage](../../coreimage/cifilter-swift.class/outputimage.md) object from your filter chain is nil. (If instead you want to fall back to rendering an unfiltered image, call the [finishWithImage:context:](finish%28with_context_%29.md) and pass the [sourceImage](sourceimage.md) object to the `filteredImage` parameter.)

Calling this method causes AVFoundation to post a notification named [AVPlayerItemFailedToPlayToEndTimeNotification](../avplayeritem/failedtoplaytoendtimenotification.md). Observers of this notification can use the [AVPlayerItemFailedToPlayToEndTimeErrorKey](../avplayeritemfailedtoplaytoendtimeerrorkey.md) key to examine the error you provide.

## See Also

### Returning the filtered image

- [finishWithImage:context:](finish%28with_context_%29.md): Deprecated. Provides the filtered video frame image to AVFoundation for further processing or display.
