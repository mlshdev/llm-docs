> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator)

# AVAssetImageGenerator (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object that generates images from a video asset.

## Declaration

```swift
class AVAssetImageGenerator
```

## Mentioned In

- [Creating images from a video asset](creating-images-from-a-video-asset.md)

<a id="overview"></a>

## Overview

Use an image generator to extract images from a video asset at particular times within its timeline.

## Topics

### Creating an image generator

- [init(asset:)](avassetimagegenerator/init%28asset_%29.md): Creates an object that generates images for times within a video asset.

### Configuring image generation

- [maximumSize](avassetimagegenerator/maximumsize.md): The maximum size of images to generate.
- [requestedTimeToleranceBefore](avassetimagegenerator/requestedtimetolerancebefore.md): A maximum length of time before the requested time to allow image generation to occur.
- [requestedTimeToleranceAfter](avassetimagegenerator/requestedtimetoleranceafter.md): A maximum length of time after the requested time to allow image generation to occur.
- [dynamicRangePolicy](avassetimagegenerator/dynamicrangepolicy-swift.property.md): The dynamic range policy to use when generating images.
- [AVAssetImageGenerator.DynamicRangePolicy](avassetimagegenerator/dynamicrangepolicy-swift.struct.md): A type that specifies the dynamic range policy to apply when generating images.
- [appliesPreferredTrackTransform](avassetimagegenerator/appliespreferredtracktransform.md): A Boolean value that specifies whether to apply the track matrix or matrices when generating an image from the asset.
- [apertureMode](avassetimagegenerator/aperturemode-swift.property.md): Specifies the aperture mode for the generated image.
- [AVAssetImageGenerator.ApertureMode](avassetimagegenerator/aperturemode-swift.struct.md): Constants that define aperture modes to use when generating images.

### Configuring compositing

- [videoComposition](avassetimagegenerator/videocomposition.md): A video composition to use when extracting images from assets with multiple video tracks.
- [customVideoCompositor](avassetimagegenerator/customvideocompositor.md): A custom video compositor to use when extracting images from assets with multiple video tracks.

### Generating images

- [image(at:)](avassetimagegenerator/image%28at_%29.md): Generates an image for a requested time.
- [images(for:)](avassetimagegenerator/images%28for_%29.md): Generates images for times within the video timeline.
- [AVAssetImageGenerator.Images](avassetimagegenerator/images.md): An asynchronous sequence of images created by an image generator.
- [generateCGImageAsynchronously(for:completionHandler:)](avassetimagegenerator/generatecgimageasynchronously%28for_completionhandler_%29.md): Generates an image asynchronously for a requested time, and returns the result in a callback.
- [generateCGImagesAsynchronously(forTimes:completionHandler:)](avassetimagegenerator/generatecgimagesasynchronously%28fortimes_completionhandler_%29.md): Generates images asynchronously for an array of requested times, and returns the results in a callback.
- [AVAssetImageGeneratorCompletionHandler](avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.
- [cancelAllCGImageGeneration()](avassetimagegenerator/cancelallcgimagegeneration%28%29.md): Cancels all pending image generation requests.
- [copyCGImage(at:actualTime:)](avassetimagegenerator/copycgimage%28at_actualtime_%29.md): Deprecated. Returns an image for the asset at or near a specified time.

### Accessing the asset

- [asset](avassetimagegenerator/asset.md): The asset that initialized the image generator.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Image generation

- [Creating images from a video asset](creating-images-from-a-video-asset.md): Display images for specific times within the media timeline by generating images from a video’s frames.

# AVAssetImageGenerator (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object that generates images from a video asset.

## Declaration

```objectivec
@interface AVAssetImageGenerator : NSObject
```

## Mentioned In

- [Creating images from a video asset](creating-images-from-a-video-asset.md)

<a id="overview"></a>

## Overview

Use an image generator to extract images from a video asset at particular times within its timeline.

## Topics

### Creating an image generator

- [assetImageGeneratorWithAsset:](avassetimagegenerator/assetimagegeneratorwithasset_.md): Returns a new object that generates images for times within a video asset.
- [initWithAsset:](avassetimagegenerator/init%28asset_%29.md): Creates an object that generates images for times within a video asset.

### Configuring image generation

- [maximumSize](avassetimagegenerator/maximumsize.md): The maximum size of images to generate.
- [requestedTimeToleranceBefore](avassetimagegenerator/requestedtimetolerancebefore.md): A maximum length of time before the requested time to allow image generation to occur.
- [requestedTimeToleranceAfter](avassetimagegenerator/requestedtimetoleranceafter.md): A maximum length of time after the requested time to allow image generation to occur.
- [dynamicRangePolicy](avassetimagegenerator/dynamicrangepolicy-swift.property.md): The dynamic range policy to use when generating images.
- [AVAssetImageGeneratorDynamicRangePolicy](avassetimagegenerator/dynamicrangepolicy-swift.struct.md): A type that specifies the dynamic range policy to apply when generating images.
- [appliesPreferredTrackTransform](avassetimagegenerator/appliespreferredtracktransform.md): A Boolean value that specifies whether to apply the track matrix or matrices when generating an image from the asset.
- [apertureMode](avassetimagegenerator/aperturemode-swift.property.md): Specifies the aperture mode for the generated image.
- [AVAssetImageGeneratorApertureMode](avassetimagegenerator/aperturemode-swift.struct.md): Constants that define aperture modes to use when generating images.

### Configuring compositing

- [videoComposition](avassetimagegenerator/videocomposition.md): A video composition to use when extracting images from assets with multiple video tracks.
- [customVideoCompositor](avassetimagegenerator/customvideocompositor.md): A custom video compositor to use when extracting images from assets with multiple video tracks.

### Generating images

- [generateCGImageAsynchronouslyForTime:completionHandler:](avassetimagegenerator/generatecgimageasynchronously%28for_completionhandler_%29.md): Generates an image asynchronously for a requested time, and returns the result in a callback.
- [generateCGImagesAsynchronouslyForTimes:completionHandler:](avassetimagegenerator/generatecgimagesasynchronously%28fortimes_completionhandler_%29.md): Generates images asynchronously for an array of requested times, and returns the results in a callback.
- [AVAssetImageGeneratorCompletionHandler](avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.
- [cancelAllCGImageGeneration](avassetimagegenerator/cancelallcgimagegeneration%28%29.md): Cancels all pending image generation requests.
- [copyCGImageAtTime:actualTime:error:](avassetimagegenerator/copycgimage%28at_actualtime_%29.md): Deprecated. Returns an image for the asset at or near a specified time.

### Accessing the asset

- [asset](avassetimagegenerator/asset.md): The asset that initialized the image generator.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Image generation

- [Creating images from a video asset](creating-images-from-a-video-asset.md): Display images for specific times within the media timeline by generating images from a video’s frames.
