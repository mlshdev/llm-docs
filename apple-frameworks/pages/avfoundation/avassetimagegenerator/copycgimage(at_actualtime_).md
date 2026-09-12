> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/copycgimage(at:actualtime:)](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/copycgimage(at:actualtime:))

# copyCGImage(at:actualTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0)

Returns an image for the asset at or near a specified time.

> Use [image(at:)](image%28at_%29.md) instead or [generateCGImagesAsynchronously(forTimes:completionHandler:)](generatecgimagesasynchronously%28fortimes_completionhandler_%29.md).

## Declaration

```swift
func copyCGImage(at requestedTime: CMTime, actualTime: UnsafeMutablePointer<CMTime>?) throws -> CGImage
```

## Parameters

- `requestedTime`: A time within the asset timeline for which to create an image.
- `actualTime`: Upon return, contains the time at which the image was actually generated.

  If you’re not interested in this information, pass `NULL`.

<a id="return-value"></a>

## Return Value

A [CGImage](../../coregraphics/cgimage.md) for the asset at or near a specified time, or `NULL` if the image could not be created.

<a id="Discussion"></a>

## Discussion

This method returns the image synchronously.

## See Also

### Generating images

- [image(at:)](image%28at_%29.md): Generates an image for a requested time.
- [images(for:)](images%28for_%29.md): Generates images for times within the video timeline.
- [AVAssetImageGenerator.Images](images.md): An asynchronous sequence of images created by an image generator.
- [generateCGImageAsynchronously(for:completionHandler:)](generatecgimageasynchronously%28for_completionhandler_%29.md): Generates an image asynchronously for a requested time, and returns the result in a callback.
- [generateCGImagesAsynchronously(forTimes:completionHandler:)](generatecgimagesasynchronously%28fortimes_completionhandler_%29.md): Generates images asynchronously for an array of requested times, and returns the results in a callback.
- [AVAssetImageGeneratorCompletionHandler](../avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.
- [cancelAllCGImageGeneration()](cancelallcgimagegeneration%28%29.md): Cancels all pending image generation requests.

# copyCGImageAtTime:actualTime:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0)

Returns an image for the asset at or near a specified time.

> Use [image(at:)](image%28at_%29.md) instead or [generateCGImagesAsynchronouslyForTimes:completionHandler:](generatecgimagesasynchronously%28fortimes_completionhandler_%29.md).

## Declaration

```objectivec
- (CGImageRef) copyCGImageAtTime:(CMTime) requestedTime actualTime:(CMTime *) actualTime error:(NSError **) outError;
```

## Parameters

- `requestedTime`: A time within the asset timeline for which to create an image.
- `actualTime`: Upon return, contains the time at which the image was actually generated.

  If you’re not interested in this information, pass `NULL`.
- `outError`: If an error occurs, upon return contains an `NSError` object that describes the problem.

  If you’re not interested in this information, pass `NULL`.

<a id="return-value"></a>

## Return Value

A [CGImageRef](../../coregraphics/cgimage.md) for the asset at or near a specified time, or `NULL` if the image could not be created.

<a id="Discussion"></a>

## Discussion

This method returns the image synchronously.

## See Also

### Generating images

- [generateCGImageAsynchronouslyForTime:completionHandler:](generatecgimageasynchronously%28for_completionhandler_%29.md): Generates an image asynchronously for a requested time, and returns the result in a callback.
- [generateCGImagesAsynchronouslyForTimes:completionHandler:](generatecgimagesasynchronously%28fortimes_completionhandler_%29.md): Generates images asynchronously for an array of requested times, and returns the results in a callback.
- [AVAssetImageGeneratorCompletionHandler](../avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.
- [cancelAllCGImageGeneration](cancelallcgimagegeneration%28%29.md): Cancels all pending image generation requests.
