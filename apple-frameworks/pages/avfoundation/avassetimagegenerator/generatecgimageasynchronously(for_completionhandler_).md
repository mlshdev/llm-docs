> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/generatecgimageasynchronously(for:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/generatecgimageasynchronously(for:completionhandler:))

# generateCGImageAsynchronously(for:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Generates an image asynchronously for a requested time, and returns the result in a callback.

## Declaration

```swift
func generateCGImageAsynchronously(for requestedTime: CMTime, completionHandler handler: @escaping @Sendable (CGImage?, CMTime, (any Error)?) -> Void)
```

## Parameters

- `requestedTime`: A time in the video timeline for which to generate an image. The requested time and actual time at which it generates an image may differ depending on the generator’s time tolerance settings.
- `handler`: A callback that the image generator invokes with the result of the request.

<a id="Discussion"></a>

## Discussion

Swift clients should use the asynchronous [image(at:)](image%28at_%29.md) method instead.

## Topics

### Data types

- [AVAssetImageGeneratorCompletionHandler](../avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.
- [AVAssetImageGenerator.Result](result.md): Constants that indicate the result of an image generation request.

## See Also

### Generating images

- [image(at:)](image%28at_%29.md): Generates an image for a requested time.
- [images(for:)](images%28for_%29.md): Generates images for times within the video timeline.
- [AVAssetImageGenerator.Images](images.md): An asynchronous sequence of images created by an image generator.
- [generateCGImagesAsynchronously(forTimes:completionHandler:)](generatecgimagesasynchronously%28fortimes_completionhandler_%29.md): Generates images asynchronously for an array of requested times, and returns the results in a callback.
- [AVAssetImageGeneratorCompletionHandler](../avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.
- [cancelAllCGImageGeneration()](cancelallcgimagegeneration%28%29.md): Cancels all pending image generation requests.
- [copyCGImage(at:actualTime:)](copycgimage%28at_actualtime_%29.md): Deprecated. Returns an image for the asset at or near a specified time.

# generateCGImageAsynchronouslyForTime:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Generates an image asynchronously for a requested time, and returns the result in a callback.

## Declaration

```objectivec
- (void) generateCGImageAsynchronouslyForTime:(CMTime) requestedTime completionHandler:(void (^)(CGImageRef image, CMTime actualTime, NSError *error)) handler;
```

## Parameters

- `requestedTime`: A time in the video timeline for which to generate an image. The requested time and actual time at which it generates an image may differ depending on the generator’s time tolerance settings.
- `handler`: A callback that the image generator invokes with the result of the request.

<a id="Discussion"></a>

## Discussion

Swift clients should use the asynchronous [image(at:)](image%28at_%29.md) method instead.

## Topics

### Data types

- [AVAssetImageGeneratorCompletionHandler](../avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.
- [AVAssetImageGeneratorResult](result.md): Constants that indicate the result of an image generation request.

## See Also

### Generating images

- [generateCGImagesAsynchronouslyForTimes:completionHandler:](generatecgimagesasynchronously%28fortimes_completionhandler_%29.md): Generates images asynchronously for an array of requested times, and returns the results in a callback.
- [AVAssetImageGeneratorCompletionHandler](../avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.
- [cancelAllCGImageGeneration](cancelallcgimagegeneration%28%29.md): Cancels all pending image generation requests.
- [copyCGImageAtTime:actualTime:error:](copycgimage%28at_actualtime_%29.md): Deprecated. Returns an image for the asset at or near a specified time.
