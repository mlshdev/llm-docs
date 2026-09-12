> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/image(at:)](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/image(at:))

# image(at:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Generates an image for a requested time.

## Declaration

```swift
func image(at time: CMTime) async throws -> (image: CGImage, actualTime: CMTime)
```

## Parameters

- `time`: A time in the asset timeline at which to create an image.

<a id="return-value"></a>

## Return Value

A tuple that contains the image and the time the asset was created.

## Mentioned In

- [Creating images from a video asset](../creating-images-from-a-video-asset.md)

## See Also

### Generating images

- [images(for:)](images%28for_%29.md): Generates images for times within the video timeline.
- [AVAssetImageGenerator.Images](images.md): An asynchronous sequence of images created by an image generator.
- [generateCGImageAsynchronously(for:completionHandler:)](generatecgimageasynchronously%28for_completionhandler_%29.md): Generates an image asynchronously for a requested time, and returns the result in a callback.
- [generateCGImagesAsynchronously(forTimes:completionHandler:)](generatecgimagesasynchronously%28fortimes_completionhandler_%29.md): Generates images asynchronously for an array of requested times, and returns the results in a callback.
- [AVAssetImageGeneratorCompletionHandler](../avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.
- [cancelAllCGImageGeneration()](cancelallcgimagegeneration%28%29.md): Cancels all pending image generation requests.
- [copyCGImage(at:actualTime:)](copycgimage%28at_actualtime_%29.md): Deprecated. Returns an image for the asset at or near a specified time.
