> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/images(for:)](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/images(for:))

# images(for:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Generates images for times within the video timeline.

## Declaration

```swift
func images(for times: [CMTime]) -> sending AVAssetImageGenerator.Images
```

## Parameters

- `times`: An array of times within the asset timeline to create images.

<a id="return-value"></a>

## Return Value

An asynchronous sequence of images.

## Mentioned In

- [Creating images from a video asset](../creating-images-from-a-video-asset.md)

## Topics

### Generated image sequence

- [AVAssetImageGenerator.Images](images.md): An asynchronous sequence of images created by an image generator.

## See Also

### Generating images

- [image(at:)](image%28at_%29.md): Generates an image for a requested time.
- [AVAssetImageGenerator.Images](images.md): An asynchronous sequence of images created by an image generator.
- [generateCGImageAsynchronously(for:completionHandler:)](generatecgimageasynchronously%28for_completionhandler_%29.md): Generates an image asynchronously for a requested time, and returns the result in a callback.
- [generateCGImagesAsynchronously(forTimes:completionHandler:)](generatecgimagesasynchronously%28fortimes_completionhandler_%29.md): Generates images asynchronously for an array of requested times, and returns the results in a callback.
- [AVAssetImageGeneratorCompletionHandler](../avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.
- [cancelAllCGImageGeneration()](cancelallcgimagegeneration%28%29.md): Cancels all pending image generation requests.
- [copyCGImage(at:actualTime:)](copycgimage%28at_actualtime_%29.md): Deprecated. Returns an image for the asset at or near a specified time.
