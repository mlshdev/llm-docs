> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegeneratorcompletionhandler](https://developer.apple.com/documentation/avfoundation/avassetimagegeneratorcompletionhandler)

# AVAssetImageGeneratorCompletionHandler (Swift)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type alias for a closure that provides the result of an image generation request.

## Declaration

```swift
typealias AVAssetImageGeneratorCompletionHandler = @Sendable (CMTime, CGImage?, CMTime, AVAssetImageGenerator.Result, (any Error)?) -> Void
```

## Parameters

- `requestedTime`: A time in the video timeline for which to generate an image.
- `image`: A generated image for the requested time.
- `actualTime`: The actual time in the video timeline at which it generated an image. The requested and actual times may differ depending on your image generator configuration including its time tolerance values.
- `result`: A value that indicates the result of the image generation request.
- `error`: An optional error. If an error occurs the system provides an error object that provides the details of the failure.

## See Also

### Generating images

- [image(at:)](avassetimagegenerator/image%28at_%29.md): Generates an image for a requested time.
- [images(for:)](avassetimagegenerator/images%28for_%29.md): Generates images for times within the video timeline.
- [AVAssetImageGenerator.Images](avassetimagegenerator/images.md): An asynchronous sequence of images created by an image generator.
- [generateCGImageAsynchronously(for:completionHandler:)](avassetimagegenerator/generatecgimageasynchronously%28for_completionhandler_%29.md): Generates an image asynchronously for a requested time, and returns the result in a callback.
- [generateCGImagesAsynchronously(forTimes:completionHandler:)](avassetimagegenerator/generatecgimagesasynchronously%28fortimes_completionhandler_%29.md): Generates images asynchronously for an array of requested times, and returns the results in a callback.
- [cancelAllCGImageGeneration()](avassetimagegenerator/cancelallcgimagegeneration%28%29.md): Cancels all pending image generation requests.
- [copyCGImage(at:actualTime:)](avassetimagegenerator/copycgimage%28at_actualtime_%29.md): Deprecated. Returns an image for the asset at or near a specified time.

# AVAssetImageGeneratorCompletionHandler (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type alias for a closure that provides the result of an image generation request.

## Declaration

```objectivec
typedef void (^)(CMTime, struct CGImage *, CMTime, enum AVAssetImageGeneratorResult, NSError *) AVAssetImageGeneratorCompletionHandler;
```

## Parameters

- `requestedTime`: A time in the video timeline for which to generate an image.
- `image`: A generated image for the requested time.
- `actualTime`: The actual time in the video timeline at which it generated an image. The requested and actual times may differ depending on your image generator configuration including its time tolerance values.
- `result`: A value that indicates the result of the image generation request.
- `error`: An optional error. If an error occurs the system provides an error object that provides the details of the failure.

## See Also

### Generating images

- [generateCGImageAsynchronouslyForTime:completionHandler:](avassetimagegenerator/generatecgimageasynchronously%28for_completionhandler_%29.md): Generates an image asynchronously for a requested time, and returns the result in a callback.
- [generateCGImagesAsynchronouslyForTimes:completionHandler:](avassetimagegenerator/generatecgimagesasynchronously%28fortimes_completionhandler_%29.md): Generates images asynchronously for an array of requested times, and returns the results in a callback.
- [cancelAllCGImageGeneration](avassetimagegenerator/cancelallcgimagegeneration%28%29.md): Cancels all pending image generation requests.
- [copyCGImageAtTime:actualTime:error:](avassetimagegenerator/copycgimage%28at_actualtime_%29.md): Deprecated. Returns an image for the asset at or near a specified time.
