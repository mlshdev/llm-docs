> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/generatecgimagesasynchronously(fortimes:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/generatecgimagesasynchronously(fortimes:completionhandler:))

# generateCGImagesAsynchronously(forTimes:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Generates images asynchronously for an array of requested times, and returns the results in a callback.

## Declaration

```swift
func generateCGImagesAsynchronously(forTimes requestedTimes: [NSValue], completionHandler handler: @escaping AVAssetImageGeneratorCompletionHandler)
```

## Parameters

- `requestedTimes`: An array of times, contained in NSValue objects, in the video timeline for which to generate images.
- `handler`: A callback that the image generator invokes for each requested image time.

<a id="Discussion"></a>

## Discussion

Swift clients should prefer the asynchronous `images(for:)` method instead.

## Topics

### Data types

- [AVAssetImageGeneratorCompletionHandler](../avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.
- [AVAssetImageGenerator.Result](result.md): Constants that indicate the result of an image generation request.

## See Also

### Generating images

- [image(at:)](image%28at_%29.md): Generates an image for a requested time.
- [images(for:)](images%28for_%29.md): Generates images for times within the video timeline.
- [AVAssetImageGenerator.Images](images.md): An asynchronous sequence of images created by an image generator.
- [generateCGImageAsynchronously(for:completionHandler:)](generatecgimageasynchronously%28for_completionhandler_%29.md): Generates an image asynchronously for a requested time, and returns the result in a callback.
- [AVAssetImageGeneratorCompletionHandler](../avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.
- [cancelAllCGImageGeneration()](cancelallcgimagegeneration%28%29.md): Cancels all pending image generation requests.
- [copyCGImage(at:actualTime:)](copycgimage%28at_actualtime_%29.md): Deprecated. Returns an image for the asset at or near a specified time.

# generateCGImagesAsynchronouslyForTimes:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Generates images asynchronously for an array of requested times, and returns the results in a callback.

## Declaration

```objectivec
- (void) generateCGImagesAsynchronouslyForTimes:(NSArray<NSValue *> *) requestedTimes completionHandler:(AVAssetImageGeneratorCompletionHandler) handler;
```

## Parameters

- `requestedTimes`: An array of times, contained in NSValue objects, in the video timeline for which to generate images.
- `handler`: A callback that the image generator invokes for each requested image time.

<a id="Discussion"></a>

## Discussion

Swift clients should prefer the asynchronous `images(for:)` method instead.

## Topics

### Data types

- [AVAssetImageGeneratorCompletionHandler](../avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.
- [AVAssetImageGeneratorResult](result.md): Constants that indicate the result of an image generation request.

## See Also

### Generating images

- [generateCGImageAsynchronouslyForTime:completionHandler:](generatecgimageasynchronously%28for_completionhandler_%29.md): Generates an image asynchronously for a requested time, and returns the result in a callback.
- [AVAssetImageGeneratorCompletionHandler](../avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.
- [cancelAllCGImageGeneration](cancelallcgimagegeneration%28%29.md): Cancels all pending image generation requests.
- [copyCGImageAtTime:actualTime:error:](copycgimage%28at_actualtime_%29.md): Deprecated. Returns an image for the asset at or near a specified time.
