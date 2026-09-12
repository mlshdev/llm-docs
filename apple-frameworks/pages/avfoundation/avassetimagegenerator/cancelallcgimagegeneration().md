> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/cancelallcgimagegeneration()](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/cancelallcgimagegeneration())

# cancelAllCGImageGeneration() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Cancels all pending image generation requests.

## Declaration

```swift
func cancelAllCGImageGeneration()
```

<a id="Discussion"></a>

## Discussion

Calling this method invokes the handler block with a result of [AVAssetImageGenerator.Result.cancelled](result/cancelled.md) for all requested times for which the generator hasn’t yet produced an image.

## See Also

### Generating images

- [image(at:)](image%28at_%29.md): Generates an image for a requested time.
- [images(for:)](images%28for_%29.md): Generates images for times within the video timeline.
- [AVAssetImageGenerator.Images](images.md): An asynchronous sequence of images created by an image generator.
- [generateCGImageAsynchronously(for:completionHandler:)](generatecgimageasynchronously%28for_completionhandler_%29.md): Generates an image asynchronously for a requested time, and returns the result in a callback.
- [generateCGImagesAsynchronously(forTimes:completionHandler:)](generatecgimagesasynchronously%28fortimes_completionhandler_%29.md): Generates images asynchronously for an array of requested times, and returns the results in a callback.
- [AVAssetImageGeneratorCompletionHandler](../avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.
- [copyCGImage(at:actualTime:)](copycgimage%28at_actualtime_%29.md): Deprecated. Returns an image for the asset at or near a specified time.

# cancelAllCGImageGeneration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Cancels all pending image generation requests.

## Declaration

```objectivec
- (void) cancelAllCGImageGeneration;
```

<a id="Discussion"></a>

## Discussion

Calling this method invokes the handler block with a result of [AVAssetImageGeneratorCancelled](result/cancelled.md) for all requested times for which the generator hasn’t yet produced an image.

## See Also

### Generating images

- [generateCGImageAsynchronouslyForTime:completionHandler:](generatecgimageasynchronously%28for_completionhandler_%29.md): Generates an image asynchronously for a requested time, and returns the result in a callback.
- [generateCGImagesAsynchronouslyForTimes:completionHandler:](generatecgimagesasynchronously%28fortimes_completionhandler_%29.md): Generates images asynchronously for an array of requested times, and returns the results in a callback.
- [AVAssetImageGeneratorCompletionHandler](../avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.
- [copyCGImageAtTime:actualTime:error:](copycgimage%28at_actualtime_%29.md): Deprecated. Returns an image for the asset at or near a specified time.
