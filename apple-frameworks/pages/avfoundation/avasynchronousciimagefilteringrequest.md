> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronousciimagefilteringrequest](https://developer.apple.com/documentation/avfoundation/avasynchronousciimagefilteringrequest)

# AVAsynchronousCIImageFilteringRequest (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object that supports using Core Image filters to process an individual video frame in a video composition.

> Use AVCIImageFilteringParameters instead

## Declaration

```swift
class AVAsynchronousCIImageFilteringRequest
```

<a id="overview"></a>

## Overview

You use this class when creating a composition for Core Image filtering with the [init(asset:applyingCIFiltersWithHandler:)](avvideocomposition/init%28asset_applyingcifilterswithhandler_%29.md) method. In that method call, you provide a block to be called by AVFoundation as it processes each frame of video, and the block’s sole parameter is a [AVAsynchronousCIImageFilteringRequest](avasynchronousciimagefilteringrequest.md) object. Use that object both to the video frame image to be filtered and allows you to return a filtered image to AVFoundation for display or export. The code listing below shows an example of applying a filter to an asset.

**Swift**

```swift
guard let filter = CIFilter(name: "CIGaussianBlur") else { return }
let composition = AVVideoComposition(asset: asset) { request in
    // Clamp to avoid blurring transparent pixels at the image edges.
    let source = request.sourceImage.clampedToExtent()
    filter.setValue(source, forKey: kCIInputImageKey)

    // Vary filter parameters based on the video timing.
    let seconds = CMTimeGetSeconds(request.compositionTime)
    filter.setValue(seconds * 10.0, forKey: kCIInputRadiusKey)
            
    // Crop the blurred output to the bounds of the original image.
    if let output = filter.outputImage?.cropped(to: request.sourceImage.extent) {
        request.finish(with: output, context: nil)
    } else {
        request.finish(with: AppError.customError)
    }
}
```

**Objective-C**

```objc
CIFilter *filter = [CIFilter filterWithName:@"CIGaussianBlur"];
AVVideoComposition *composition = [AVVideoComposition videoCompositionWithAsset: asset
    applyingCIFiltersWithHandler:^(AVAsynchronousCIImageFilteringRequest *request){
        // Clamp to avoid blurring transparent pixels at the image edges
        CIImage *source = [request.sourceImage imageByClampingToExtent];
        [filter setValue:source forKey:kCIInputImageKey];
 
        // Vary filter parameters based on video timing
        Float64 seconds = CMTimeGetSeconds(request.compositionTime);
        [filter setValue:seconds * 10.0 forKey:kCIInputRadiusKey];
 
        // Crop the blurred output to the bounds of the original image
        CIImage *output = [filter.outputImage imageByCroppingToRect:request.sourceImage.extent];
 
        // Provide the filter output to the composition
        [request finishWithImage:output context:nil];
    }];
```

> **Tip**

>  To use the created video composition for playback, create an [AVPlayerItem](avplayeritem.md) object from the same asset used as the composition’s source, then assign the composition to the player item’s [videoComposition](avplayeritem/videocomposition.md) property. To export the composition to a new movie file, create an [AVAssetExportSession](avassetexportsession.md) object from the same source asset, then assign the composition to the export session’s [videoComposition](avassetexportsession/videocomposition.md) property.

## Topics

### Getting the image to be filtered

- [sourceImage](avasynchronousciimagefilteringrequest/sourceimage.md): Deprecated. The current video frame image.

### Getting contextual information for filtering

- [compositionTime](avasynchronousciimagefilteringrequest/compositiontime.md): Deprecated. The time in the video composition corresponding to the frame being processed.
- [renderSize](avasynchronousciimagefilteringrequest/rendersize.md): Deprecated. The width and height, in pixels, of the frame being processed.

### Returning the filtered image

- [finish(with:context:)](avasynchronousciimagefilteringrequest/finish%28with_context_%29.md): Deprecated. Provides the filtered video frame image to AVFoundation for further processing or display.
- [finish(with:)](avasynchronousciimagefilteringrequest/finish%28with_%29.md): Deprecated. Notifies AVFoundation that you cannot fulfill the image filtering request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating a video composition

- [init(configuration:)](avvideocomposition/init%28configuration_%29.md): Initialize an AVVideoComposition with a configuration.
- [AVVideoComposition.Configuration](avvideocomposition/configuration.md): Configurable properties for initializing a new AVVideoComposition instance.
- [init(applyingFiltersTo:applier:)](avvideocomposition/init%28applyingfiltersto_applier_%29.md): Creates a video composition configured to apply Core Image filters to each video frame of the specified asset.
- [videoComposition(with:applyingCIFiltersWithHandler:completionHandler:)](avvideocomposition/videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [AVCIImageFilteringParameters](avciimagefilteringparameters.md)
- [AVCIImageFilteringResult](avciimagefilteringresult.md): An output video frame processed with Core Image filtering.
- [videoComposition(withPropertiesOf:completionHandler:)](avvideocomposition/videocomposition%28withpropertiesof_completionhandler_%29.md): Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [init(propertiesOf:)](avvideocomposition/init%28propertiesof_%29.md): Deprecated. Creates a video composition object configured to present the video tracks of the specified asset.
- [init(asset:applyingCIFiltersWithHandler:)](avvideocomposition/init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a video composition configured to apply Core Image filters to each video frame of the specified asset.

# AVAsynchronousCIImageFilteringRequest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object that supports using Core Image filters to process an individual video frame in a video composition.

## Declaration

```objectivec
@interface AVAsynchronousCIImageFilteringRequest : NSObject
```

<a id="overview"></a>

## Overview

You use this class when creating a composition for Core Image filtering with the [videoCompositionWithAsset:applyingCIFiltersWithHandler:](avvideocomposition/init%28asset_applyingcifilterswithhandler_%29.md) method. In that method call, you provide a block to be called by AVFoundation as it processes each frame of video, and the block’s sole parameter is a [AVAsynchronousCIImageFilteringRequest](avasynchronousciimagefilteringrequest.md) object. Use that object both to the video frame image to be filtered and allows you to return a filtered image to AVFoundation for display or export. The code listing below shows an example of applying a filter to an asset.

**Swift**

```swift
guard let filter = CIFilter(name: "CIGaussianBlur") else { return }
let composition = AVVideoComposition(asset: asset) { request in
    // Clamp to avoid blurring transparent pixels at the image edges.
    let source = request.sourceImage.clampedToExtent()
    filter.setValue(source, forKey: kCIInputImageKey)

    // Vary filter parameters based on the video timing.
    let seconds = CMTimeGetSeconds(request.compositionTime)
    filter.setValue(seconds * 10.0, forKey: kCIInputRadiusKey)
            
    // Crop the blurred output to the bounds of the original image.
    if let output = filter.outputImage?.cropped(to: request.sourceImage.extent) {
        request.finish(with: output, context: nil)
    } else {
        request.finish(with: AppError.customError)
    }
}
```

**Objective-C**

```objc
CIFilter *filter = [CIFilter filterWithName:@"CIGaussianBlur"];
AVVideoComposition *composition = [AVVideoComposition videoCompositionWithAsset: asset
    applyingCIFiltersWithHandler:^(AVAsynchronousCIImageFilteringRequest *request){
        // Clamp to avoid blurring transparent pixels at the image edges
        CIImage *source = [request.sourceImage imageByClampingToExtent];
        [filter setValue:source forKey:kCIInputImageKey];
 
        // Vary filter parameters based on video timing
        Float64 seconds = CMTimeGetSeconds(request.compositionTime);
        [filter setValue:seconds * 10.0 forKey:kCIInputRadiusKey];
 
        // Crop the blurred output to the bounds of the original image
        CIImage *output = [filter.outputImage imageByCroppingToRect:request.sourceImage.extent];
 
        // Provide the filter output to the composition
        [request finishWithImage:output context:nil];
    }];
```

> **Tip**

>  To use the created video composition for playback, create an [AVPlayerItem](avplayeritem.md) object from the same asset used as the composition’s source, then assign the composition to the player item’s [videoComposition](avplayeritem/videocomposition.md) property. To export the composition to a new movie file, create an [AVAssetExportSession](avassetexportsession.md) object from the same source asset, then assign the composition to the export session’s [videoComposition](avassetexportsession/videocomposition.md) property.

## Topics

### Getting the image to be filtered

- [sourceImage](avasynchronousciimagefilteringrequest/sourceimage.md): Deprecated. The current video frame image.

### Getting contextual information for filtering

- [compositionTime](avasynchronousciimagefilteringrequest/compositiontime.md): Deprecated. The time in the video composition corresponding to the frame being processed.
- [renderSize](avasynchronousciimagefilteringrequest/rendersize.md): Deprecated. The width and height, in pixels, of the frame being processed.

### Returning the filtered image

- [finishWithImage:context:](avasynchronousciimagefilteringrequest/finish%28with_context_%29.md): Deprecated. Provides the filtered video frame image to AVFoundation for further processing or display.
- [finishWithError:](avasynchronousciimagefilteringrequest/finish%28with_%29.md): Deprecated. Notifies AVFoundation that you cannot fulfill the image filtering request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Creating a video composition

- [videoCompositionWithVideoComposition:](avvideocomposition/videocompositionwithvideocomposition_.md): Pass-through initializer, for internal use in AVFoundation only
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:completionHandler:](avvideocomposition/videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [videoCompositionWithPropertiesOfAsset:completionHandler:](avvideocomposition/videocomposition%28withpropertiesof_completionhandler_%29.md): Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [videoCompositionWithPropertiesOfAsset:](avvideocomposition/init%28propertiesof_%29.md): Deprecated. Creates a video composition object configured to present the video tracks of the specified asset.
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:](avvideocomposition/init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a video composition configured to apply Core Image filters to each video frame of the specified asset.
