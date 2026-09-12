> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureresolvedphotosettings](https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings)

# AVCaptureResolvedPhotoSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

A description of the features and settings in use for an in-progress or complete photo capture request.

## Declaration

```swift
class AVCaptureResolvedPhotoSettings
```

## Mentioned In

- [Configuring camera capture to collect a Portrait Effects matte](configuring-camera-capture-to-collect-a-portrait-effects-matte.md)
- [Tracking photo capture progress](tracking-photo-capture-progress.md)

<a id="overview"></a>

## Overview

When you request a photo capture using the [AVCapturePhotoOutput](avcapturephotooutput.md) [capturePhoto(with:delegate:)](avcapturephotooutput/capturephoto%28with_delegate_%29.md) method, you describe the settings for that capture request in an [AVCapturePhotoSettings](avcapturephotosettings.md) object. When the capture begins, the photo output calls your delegate methods and provides an [AVCaptureResolvedPhotoSettings](avcaptureresolvedphotosettings.md) object detailing the settings that are in effect for that capture. Resolved photo settings objects are immutable; they describe a request that has already been made.

The [uniqueID](avcaptureresolvedphotosettings/uniqueid.md) property of a resolved photo settings object passed to one of your [AVCapturePhotoCaptureDelegate](avcapturephotocapturedelegate.md) methods matches the [uniqueID](avcapturephotosettings/uniqueid.md) value of the [AVCapturePhotoSettings](avcapturephotosettings.md) object you passed when requesting capture. Use this value to determine which delegate method calls correspond to which capture requests.

Some photo capture settings are automatic, such as the [flashMode](avcapturephotosettings/flashmode.md) property. For such settings, the photo output determines whether to use that feature at the moment of capture—you don’t know when requesting a capture whether the feature is active when the capture completes. When the photo output calls your delegate methods, the provided [AVCaptureResolvedPhotoSettings](avcaptureresolvedphotosettings.md) object details which automatic features have been set for that capture.

Likewise, the dimensions of an output image or movie may not be set until the moment of capture. For example, when you specify a thumbnail size with the [previewPhotoFormat](avcapturephotosettings/previewphotoformat.md) setting, the photo output chooses dimensions that best match your requested size while preserving the aspect ratio of the captured photo. When the photo output calls your delegate methods, use the [previewDimensions](avcaptureresolvedphotosettings/previewdimensions.md) property of the resolved settings to find the actual preview image dimensions. See the methods listed in Examining Output Dimensions for other cases where output dimensions can change at capture time.

## Topics

### Resolving photo capture requests

- [uniqueID](avcaptureresolvedphotosettings/uniqueid.md): The unique identifier for the photo capture this settings object corresponds to.
- [expectedPhotoCount](avcaptureresolvedphotosettings/expectedphotocount.md): The number of photo capture results in the capture request.

### Examining photo capture settings

- [isFlashEnabled](avcaptureresolvedphotosettings/isflashenabled.md): A Boolean value indicating whether the camera flash fires for this capture.
- [isRedEyeReductionEnabled](avcaptureresolvedphotosettings/isredeyereductionenabled.md): A Boolean value indicating whether the camera automatically reduces red-eye when capturing photos.
- [isVirtualDeviceFusionEnabled](avcaptureresolvedphotosettings/isvirtualdevicefusionenabled.md): A Boolean value that specifies whether the system automatically uses virtual device image fusion.
- [isFastCapturePrioritizationEnabled](avcaptureresolvedphotosettings/isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the system uses fast capture prioritization when capturing the photo.
- [isContentAwareDistortionCorrectionEnabled](avcaptureresolvedphotosettings/iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the system applies content-aware distortion correction when capturing the photo.
- [isStillImageStabilizationEnabled](avcaptureresolvedphotosettings/isstillimagestabilizationenabled.md): Deprecated. A Boolean value indicating whether this capture uses image stabilization.
- [isDualCameraFusionEnabled](avcaptureresolvedphotosettings/isdualcamerafusionenabled.md): Deprecated. A Boolean value indicating whether this capture combines image data from a dual camera.

### Examining output dimensions

- [photoDimensions](avcaptureresolvedphotosettings/photodimensions.md): The size, in pixels, of the photo image (in a processed format, such as JPEG) that the capture delivers.
- [deferredPhotoProxyDimensions](avcaptureresolvedphotosettings/deferredphotoproxydimensions.md): The resolved dimensions of the photo proxy when using deferred photo delivery.
- [rawPhotoDimensions](avcaptureresolvedphotosettings/rawphotodimensions.md): The size, in pixels, of the RAW-format photo image that the capture delivers.
- [previewDimensions](avcaptureresolvedphotosettings/previewdimensions.md): The size, in pixels, of the preview image that the system delivers with the capture.
- [embeddedThumbnailDimensions](avcaptureresolvedphotosettings/embeddedthumbnaildimensions.md): The size, in pixels, of the thumbnail image that the capture delivers.
- [rawEmbeddedThumbnailDimensions](avcaptureresolvedphotosettings/rawembeddedthumbnaildimensions.md): The size, in pixels, of the RAW-format embedded thumbnail image that the capture delivers.
- [livePhotoMovieDimensions](avcaptureresolvedphotosettings/livephotomoviedimensions.md): The size, in pixels, of the Live Photo movie content that the capture delivers.
- [portraitEffectsMatteDimensions](avcaptureresolvedphotosettings/portraiteffectsmattedimensions.md): The size, in pixels, of the portrait effects matte that the capture delivers.
- [dimensionsForSemanticSegmentationMatte(ofType:)](avcaptureresolvedphotosettings/dimensionsforsemanticsegmentationmatte%28oftype_%29.md): Retrieves the resolved dimensions of the semantic segmentation mattes that the photo output delivers.
- [photoProcessingTimeRange](avcaptureresolvedphotosettings/photoprocessingtimerange.md): The time range in which to expect the system to deliver the photo to the delegate.

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

### Photo settings

- [AVCapturePhotoSettings](avcapturephotosettings.md): A specification of the features and settings to use for a single photo capture request.
- [AVCapturePhotoBracketSettings](avcapturephotobracketsettings.md): A specification of the features and settings to use for a photo capture request that captures multiple images with varied settings.

# AVCaptureResolvedPhotoSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

A description of the features and settings in use for an in-progress or complete photo capture request.

## Declaration

```objectivec
@interface AVCaptureResolvedPhotoSettings : NSObject
```

## Mentioned In

- [Configuring camera capture to collect a Portrait Effects matte](configuring-camera-capture-to-collect-a-portrait-effects-matte.md)
- [Tracking photo capture progress](tracking-photo-capture-progress.md)

<a id="overview"></a>

## Overview

When you request a photo capture using the [AVCapturePhotoOutput](avcapturephotooutput.md) [capturePhotoWithSettings:delegate:](avcapturephotooutput/capturephoto%28with_delegate_%29.md) method, you describe the settings for that capture request in an [AVCapturePhotoSettings](avcapturephotosettings.md) object. When the capture begins, the photo output calls your delegate methods and provides an [AVCaptureResolvedPhotoSettings](avcaptureresolvedphotosettings.md) object detailing the settings that are in effect for that capture. Resolved photo settings objects are immutable; they describe a request that has already been made.

The [uniqueID](avcaptureresolvedphotosettings/uniqueid.md) property of a resolved photo settings object passed to one of your [AVCapturePhotoCaptureDelegate](avcapturephotocapturedelegate.md) methods matches the [uniqueID](avcapturephotosettings/uniqueid.md) value of the [AVCapturePhotoSettings](avcapturephotosettings.md) object you passed when requesting capture. Use this value to determine which delegate method calls correspond to which capture requests.

Some photo capture settings are automatic, such as the [flashMode](avcapturephotosettings/flashmode.md) property. For such settings, the photo output determines whether to use that feature at the moment of capture—you don’t know when requesting a capture whether the feature is active when the capture completes. When the photo output calls your delegate methods, the provided [AVCaptureResolvedPhotoSettings](avcaptureresolvedphotosettings.md) object details which automatic features have been set for that capture.

Likewise, the dimensions of an output image or movie may not be set until the moment of capture. For example, when you specify a thumbnail size with the [previewPhotoFormat](avcapturephotosettings/previewphotoformat.md) setting, the photo output chooses dimensions that best match your requested size while preserving the aspect ratio of the captured photo. When the photo output calls your delegate methods, use the [previewDimensions](avcaptureresolvedphotosettings/previewdimensions.md) property of the resolved settings to find the actual preview image dimensions. See the methods listed in Examining Output Dimensions for other cases where output dimensions can change at capture time.

## Topics

### Resolving photo capture requests

- [uniqueID](avcaptureresolvedphotosettings/uniqueid.md): The unique identifier for the photo capture this settings object corresponds to.
- [expectedPhotoCount](avcaptureresolvedphotosettings/expectedphotocount.md): The number of photo capture results in the capture request.

### Examining photo capture settings

- [flashEnabled](avcaptureresolvedphotosettings/isflashenabled.md): A Boolean value indicating whether the camera flash fires for this capture.
- [redEyeReductionEnabled](avcaptureresolvedphotosettings/isredeyereductionenabled.md): A Boolean value indicating whether the camera automatically reduces red-eye when capturing photos.
- [virtualDeviceFusionEnabled](avcaptureresolvedphotosettings/isvirtualdevicefusionenabled.md): A Boolean value that specifies whether the system automatically uses virtual device image fusion.
- [fastCapturePrioritizationEnabled](avcaptureresolvedphotosettings/isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the system uses fast capture prioritization when capturing the photo.
- [contentAwareDistortionCorrectionEnabled](avcaptureresolvedphotosettings/iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the system applies content-aware distortion correction when capturing the photo.
- [stillImageStabilizationEnabled](avcaptureresolvedphotosettings/isstillimagestabilizationenabled.md): Deprecated. A Boolean value indicating whether this capture uses image stabilization.
- [dualCameraFusionEnabled](avcaptureresolvedphotosettings/isdualcamerafusionenabled.md): Deprecated. A Boolean value indicating whether this capture combines image data from a dual camera.

### Examining output dimensions

- [photoDimensions](avcaptureresolvedphotosettings/photodimensions.md): The size, in pixels, of the photo image (in a processed format, such as JPEG) that the capture delivers.
- [deferredPhotoProxyDimensions](avcaptureresolvedphotosettings/deferredphotoproxydimensions.md): The resolved dimensions of the photo proxy when using deferred photo delivery.
- [rawPhotoDimensions](avcaptureresolvedphotosettings/rawphotodimensions.md): The size, in pixels, of the RAW-format photo image that the capture delivers.
- [previewDimensions](avcaptureresolvedphotosettings/previewdimensions.md): The size, in pixels, of the preview image that the system delivers with the capture.
- [embeddedThumbnailDimensions](avcaptureresolvedphotosettings/embeddedthumbnaildimensions.md): The size, in pixels, of the thumbnail image that the capture delivers.
- [rawEmbeddedThumbnailDimensions](avcaptureresolvedphotosettings/rawembeddedthumbnaildimensions.md): The size, in pixels, of the RAW-format embedded thumbnail image that the capture delivers.
- [livePhotoMovieDimensions](avcaptureresolvedphotosettings/livephotomoviedimensions.md): The size, in pixels, of the Live Photo movie content that the capture delivers.
- [portraitEffectsMatteDimensions](avcaptureresolvedphotosettings/portraiteffectsmattedimensions.md): The size, in pixels, of the portrait effects matte that the capture delivers.
- [dimensionsForSemanticSegmentationMatteOfType:](avcaptureresolvedphotosettings/dimensionsforsemanticsegmentationmatte%28oftype_%29.md): Retrieves the resolved dimensions of the semantic segmentation mattes that the photo output delivers.
- [photoProcessingTimeRange](avcaptureresolvedphotosettings/photoprocessingtimerange.md): The time range in which to expect the system to deliver the photo to the delegate.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Photo settings

- [AVCapturePhotoSettings](avcapturephotosettings.md): A specification of the features and settings to use for a single photo capture request.
- [AVCapturePhotoBracketSettings](avcapturephotobracketsettings.md): A specification of the features and settings to use for a photo capture request that captures multiple images with varied settings.
