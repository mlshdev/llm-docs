> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings)

# AVCapturePhotoSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

A specification of the features and settings to use for a single photo capture request.

## Declaration

```swift
class AVCapturePhotoSettings
```

## Mentioned In

- [Capturing a bracketed photo sequence](capturing-a-bracketed-photo-sequence.md)
- [Capturing and saving Live Photos](capturing-and-saving-live-photos.md)
- [Capturing photos in RAW and Apple ProRAW formats](capturing-photos-in-raw-and-apple-proraw-formats.md)
- [Capturing photos with depth](capturing-photos-with-depth.md)
- [Capturing thumbnail and preview images](capturing-thumbnail-and-preview-images.md)
- [Saving captured photos](saving-captured-photos.md)
- [Tracking photo capture progress](tracking-photo-capture-progress.md)

<a id="overview"></a>

## Overview

To take a photo, you create and configure a [AVCapturePhotoSettings](avcapturephotosettings.md) object, then pass it to the [AVCapturePhotoOutput](avcapturephotooutput.md) [capturePhoto(with:delegate:)](avcapturephotooutput/capturephoto%28with_delegate_%29.md) method.

A [AVCapturePhotoSettings](avcapturephotosettings.md) instance can include any combination of settings, regardless of whether that combination is valid for a given capture session. When you initiate a capture by passing a photo settings object to the [capturePhoto(with:delegate:)](avcapturephotooutput/capturephoto%28with_delegate_%29.md) method, the photo capture output validates your settings to ensure deterministic behavior. For example, the [flashMode](avcapturephotosettings/flashmode.md) setting must specify a value that’s present in the photo output’s [supportedFlashModes](avcapturephotooutput/supportedflashmodes-4u69s.md) array. For detailed validation rules, see each property description below.

> **Important**

>  You can’t reuse a [AVCapturePhotoSettings](avcapturephotosettings.md) instance for multiple captures. Calling the [capturePhoto(with:delegate:)](avcapturephotooutput/capturephoto%28with_delegate_%29.md) method throws an exception ([invalidArgumentException](../foundation/nsexceptionname/invalidargumentexception.md)) if the `settings` object’s [uniqueID](avcapturephotosettings/uniqueid.md) value matches that of any previously used settings object.
>
> To reuse a specific combination of settings, use the [init(from:)](avcapturephotosettings/init%28from_%29.md) initializer to create a new, unique [AVCapturePhotoSettings](avcapturephotosettings.md) instance from an existing photo settings object.

## Topics

### Creating photo settings

- [init(format:)](avcapturephotosettings/init%28format_%29.md): Creates a photo settings object with the specified output format.
- [init(rawPixelFormatType:)](avcapturephotosettings/init%28rawpixelformattype_%29.md): Creates a photo settings object for RAW-format-only capture with the specified pixel format.
- [init(rawPixelFormatType:processedFormat:)](avcapturephotosettings/init%28rawpixelformattype_processedformat_%29.md): Creates a photo settings object for capture in both RAW format and a processed format.
- [init(rawPixelFormatType:rawFileType:processedFormat:processedFileType:)](avcapturephotosettings/init%28rawpixelformattype_rawfiletype_processedformat_processedfiletype_%29.md): Creates a photo settings object for capture in both RAW format and a processed format with the specified output file types.
- [init(from:)](avcapturephotosettings/init%28from_%29.md): Creates a unique photo settings object, copying all settings values from the specified photo settings object.

### Inspecting settings

- [uniqueID](avcapturephotosettings/uniqueid.md): A unique identifier for this photo settings instance.
- [format](avcapturephotosettings/format.md): A dictionary describing the processed format (for example, JPEG) to deliver captured photos in.
- [processedFileType](avcapturephotosettings/processedfiletype.md): The container file format for eventual output of the processed image.
- [rawFileType](avcapturephotosettings/rawfiletype.md): The container file format for eventual output of the RAW image.
- [rawPhotoPixelFormatType](avcapturephotosettings/rawphotopixelformattype.md): An identifier for the Bayer RAW pixel format to deliver captured RAW photos in.

### Configuring photo settings

- [flashMode](avcapturephotosettings/flashmode.md): A setting for whether to fire the flash when capturing photos.
- [isAutoRedEyeReductionEnabled](avcapturephotosettings/isautoredeyereductionenabled.md): A Boolean value that indicates whether to use auto red-eye reduction on flash captures.
- [maxPhotoDimensions](avcapturephotosettings/maxphotodimensions.md): The maximum resolution of the photo to capture.
- [photoQualityPrioritization](avcapturephotosettings/photoqualityprioritization.md): A setting that indicates how to prioritize photo quality against speed of photo delivery.
- [isCameraCalibrationDataDeliveryEnabled](avcapturephotosettings/iscameracalibrationdatadeliveryenabled.md): A Boolean value that determines whether a dual photo capture also delivers camera calibration data.
- [isAutoContentAwareDistortionCorrectionEnabled](avcapturephotosettings/isautocontentawaredistortioncorrectionenabled.md): A Boolean value that specifies whether the photo output, at its discretion, uses content-aware distortion correction on this photo request.
- [isAutoVirtualDeviceFusionEnabled](avcapturephotosettings/isautovirtualdevicefusionenabled.md): A Boolean value that specifies whether to use automatic virtual-device image fusion.
- [virtualDeviceConstituentPhotoDeliveryEnabledDevices](avcapturephotosettings/virtualdeviceconstituentphotodeliveryenableddevices.md): The constituent devices for which the virtual device should deliver photos.
- [isDualCameraDualPhotoDeliveryEnabled](avcapturephotosettings/isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that determines whether a dual camera device delivers images from both cameras.
- [isAutoDualCameraFusionEnabled](avcapturephotosettings/isautodualcamerafusionenabled.md): Deprecated. A Boolean value that specifies whether captures automatically combine data from a dual camera device.
- [isAutoStillImageStabilizationEnabled](avcapturephotosettings/isautostillimagestabilizationenabled.md): Deprecated. A Boolean value that specifies whether captures use automatic image stabilization.
- [isHighResolutionPhotoEnabled](avcapturephotosettings/ishighresolutionphotoenabled.md): Deprecated. A Boolean value that specifies whether to capture still images at the highest resolution supported by the active device and format.

### Suppressing the shutter sound

- [isShutterSoundSuppressionEnabled](avcapturephotosettings/isshuttersoundsuppressionenabled.md): A Boolean value that indicates whether to suppress the built-in shutter sound when capturing a photo.

### Enabling preview and thumbnail delivery

- [previewPhotoFormat](avcapturephotosettings/previewphotoformat.md): A dictionary describing the format for delivery of preview-sized images alongside the main photo.
- [availablePreviewPhotoPixelFormatTypes](avcapturephotosettings/availablepreviewphotopixelformattypes-30d9.md): An array of available of pixel format types available to specify a preview photo format.
- [embeddedThumbnailPhotoFormat](avcapturephotosettings/embeddedthumbnailphotoformat.md): A dictionary describing the format for delivery of thumbnail images embedded in photo file output.
- [availableRawEmbeddedThumbnailPhotoCodecTypes](avcapturephotosettings/availablerawembeddedthumbnailphotocodectypes.md): An array of video codec types compatible with the photo settings for embedding raw thumbnail images in photo file output.
- [rawEmbeddedThumbnailPhotoFormat](avcapturephotosettings/rawembeddedthumbnailphotoformat.md): A dictionary describing the format for delivery of raw thumbnail images embedded in photo file output.
- [availableEmbeddedThumbnailPhotoCodecTypes](avcapturephotosettings/availableembeddedthumbnailphotocodectypes.md): An array of video codec types compatible with the photo settings for embedding thumbnail images in photo file output.

### Configuring Live Photo settings

- [livePhotoMovieFileURL](avcapturephotosettings/livephotomoviefileurl.md): A URL at which to write Live Photo movie output.
- [livePhotoMovieMetadata](avcapturephotosettings/livephotomoviemetadata.md): A dictionary of metadata to include in the Live Photo movie file.
- [livePhotoVideoCodecType](avcapturephotosettings/livephotovideocodectype.md): The video codec to use for encoding the movie portion of Live Photo output.

### Configuring constant color

- [isConstantColorEnabled](avcapturephotosettings/isconstantcolorenabled.md): A Boolean value that indicates whether to capture the photo with constant color.
- [isConstantColorFallbackPhotoDeliveryEnabled](avcapturephotosettings/isconstantcolorfallbackphotodeliveryenabled.md): A Boolean value that indicates whether to deliver a fallback photo when taking a constant color capture.

### Capturing depth data

- [isDepthDataDeliveryEnabled](avcapturephotosettings/isdepthdatadeliveryenabled.md): A Boolean value that determines whether the photo output captures depth data along with the photo.
- [embedsDepthDataInPhoto](avcapturephotosettings/embedsdepthdatainphoto.md): A Boolean value that determines whether any depth data captured with the photo is included when generating output file data.
- [isDepthDataFiltered](avcapturephotosettings/isdepthdatafiltered.md): A Boolean value that determines whether to smooth noise and fill in missing values in depth data output.

### Capturing Portrait Effects matte

- [isPortraitEffectsMatteDeliveryEnabled](avcapturephotosettings/isportraiteffectsmattedeliveryenabled.md): Specifies whether a portrait effects matte should be captured along with the photo.
- [embedsPortraitEffectsMatteInPhoto](avcapturephotosettings/embedsportraiteffectsmatteinphoto.md): Specifies whether the portrait effects matte captured with ths photo should be written to the photo’s file structure.

### Capturing semantic segmentation mattes

- [embedsSemanticSegmentationMattesInPhoto](avcapturephotosettings/embedssemanticsegmentationmattesinphoto.md): A Boolean value that specifies whether to write the enabled semantic segmentation matte types captured with this photo to the photo’s file structure.
- [enabledSemanticSegmentationMatteTypes](avcapturephotosettings/enabledsemanticsegmentationmattetypes.md): An array of semantic segmentation matte types that the photo render pipeline can deliver.

### Embedding metadata

- [metadata](avcapturephotosettings/metadata.md): A dictionary of metadata keys and values to embed in photo file output.

### Instance properties

- [rawFileFormat](avcapturephotosettings/rawfileformat.md)

### Initializers

- [init(fromPhotoSettings:)](avcapturephotosettings/init%28fromphotosettings_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVCapturePhotoBracketSettings](avcapturephotobracketsettings.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Photo settings

- [AVCapturePhotoBracketSettings](avcapturephotobracketsettings.md): A specification of the features and settings to use for a photo capture request that captures multiple images with varied settings.
- [AVCaptureResolvedPhotoSettings](avcaptureresolvedphotosettings.md): A description of the features and settings in use for an in-progress or complete photo capture request.

# AVCapturePhotoSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

A specification of the features and settings to use for a single photo capture request.

## Declaration

```objectivec
@interface AVCapturePhotoSettings : NSObject
```

## Mentioned In

- [Capturing a bracketed photo sequence](capturing-a-bracketed-photo-sequence.md)
- [Capturing and saving Live Photos](capturing-and-saving-live-photos.md)
- [Capturing photos in RAW and Apple ProRAW formats](capturing-photos-in-raw-and-apple-proraw-formats.md)
- [Capturing photos with depth](capturing-photos-with-depth.md)
- [Capturing thumbnail and preview images](capturing-thumbnail-and-preview-images.md)
- [Saving captured photos](saving-captured-photos.md)
- [Tracking photo capture progress](tracking-photo-capture-progress.md)

<a id="overview"></a>

## Overview

To take a photo, you create and configure a [AVCapturePhotoSettings](avcapturephotosettings.md) object, then pass it to the [AVCapturePhotoOutput](avcapturephotooutput.md) [capturePhotoWithSettings:delegate:](avcapturephotooutput/capturephoto%28with_delegate_%29.md) method.

A [AVCapturePhotoSettings](avcapturephotosettings.md) instance can include any combination of settings, regardless of whether that combination is valid for a given capture session. When you initiate a capture by passing a photo settings object to the [capturePhotoWithSettings:delegate:](avcapturephotooutput/capturephoto%28with_delegate_%29.md) method, the photo capture output validates your settings to ensure deterministic behavior. For example, the [flashMode](avcapturephotosettings/flashmode.md) setting must specify a value that’s present in the photo output’s [supportedFlashModes](avcapturephotooutput/supportedflashmodes-4u69s.md) array. For detailed validation rules, see each property description below.

> **Important**

>  You can’t reuse a [AVCapturePhotoSettings](avcapturephotosettings.md) instance for multiple captures. Calling the [capturePhotoWithSettings:delegate:](avcapturephotooutput/capturephoto%28with_delegate_%29.md) method throws an exception ([NSInvalidArgumentException](../foundation/nsexceptionname/invalidargumentexception.md)) if the `settings` object’s [uniqueID](avcapturephotosettings/uniqueid.md) value matches that of any previously used settings object.
>
> To reuse a specific combination of settings, use the [photoSettingsFromPhotoSettings:](avcapturephotosettings/init%28from_%29.md) initializer to create a new, unique [AVCapturePhotoSettings](avcapturephotosettings.md) instance from an existing photo settings object.

## Topics

### Creating photo settings

- [photoSettings](avcapturephotosettings/photosettings.md): Creates a photo settings object with default settings.
- [photoSettingsWithFormat:](avcapturephotosettings/init%28format_%29.md): Creates a photo settings object with the specified output format.
- [photoSettingsWithRawPixelFormatType:](avcapturephotosettings/init%28rawpixelformattype_%29.md): Creates a photo settings object for RAW-format-only capture with the specified pixel format.
- [photoSettingsWithRawPixelFormatType:processedFormat:](avcapturephotosettings/init%28rawpixelformattype_processedformat_%29.md): Creates a photo settings object for capture in both RAW format and a processed format.
- [photoSettingsWithRawPixelFormatType:rawFileType:processedFormat:processedFileType:](avcapturephotosettings/init%28rawpixelformattype_rawfiletype_processedformat_processedfiletype_%29.md): Creates a photo settings object for capture in both RAW format and a processed format with the specified output file types.
- [photoSettingsFromPhotoSettings:](avcapturephotosettings/init%28from_%29.md): Creates a unique photo settings object, copying all settings values from the specified photo settings object.

### Inspecting settings

- [uniqueID](avcapturephotosettings/uniqueid.md): A unique identifier for this photo settings instance.
- [format](avcapturephotosettings/format.md): A dictionary describing the processed format (for example, JPEG) to deliver captured photos in.
- [processedFileType](avcapturephotosettings/processedfiletype.md): The container file format for eventual output of the processed image.
- [rawFileType](avcapturephotosettings/rawfiletype.md): The container file format for eventual output of the RAW image.
- [rawPhotoPixelFormatType](avcapturephotosettings/rawphotopixelformattype.md): An identifier for the Bayer RAW pixel format to deliver captured RAW photos in.

### Configuring photo settings

- [flashMode](avcapturephotosettings/flashmode.md): A setting for whether to fire the flash when capturing photos.
- [autoRedEyeReductionEnabled](avcapturephotosettings/isautoredeyereductionenabled.md): A Boolean value that indicates whether to use auto red-eye reduction on flash captures.
- [maxPhotoDimensions](avcapturephotosettings/maxphotodimensions.md): The maximum resolution of the photo to capture.
- [photoQualityPrioritization](avcapturephotosettings/photoqualityprioritization.md): A setting that indicates how to prioritize photo quality against speed of photo delivery.
- [cameraCalibrationDataDeliveryEnabled](avcapturephotosettings/iscameracalibrationdatadeliveryenabled.md): A Boolean value that determines whether a dual photo capture also delivers camera calibration data.
- [autoContentAwareDistortionCorrectionEnabled](avcapturephotosettings/isautocontentawaredistortioncorrectionenabled.md): A Boolean value that specifies whether the photo output, at its discretion, uses content-aware distortion correction on this photo request.
- [autoVirtualDeviceFusionEnabled](avcapturephotosettings/isautovirtualdevicefusionenabled.md): A Boolean value that specifies whether to use automatic virtual-device image fusion.
- [virtualDeviceConstituentPhotoDeliveryEnabledDevices](avcapturephotosettings/virtualdeviceconstituentphotodeliveryenableddevices.md): The constituent devices for which the virtual device should deliver photos.
- [dualCameraDualPhotoDeliveryEnabled](avcapturephotosettings/isdualcameradualphotodeliveryenabled.md): Deprecated. A Boolean value that determines whether a dual camera device delivers images from both cameras.
- [autoDualCameraFusionEnabled](avcapturephotosettings/isautodualcamerafusionenabled.md): Deprecated. A Boolean value that specifies whether captures automatically combine data from a dual camera device.
- [autoStillImageStabilizationEnabled](avcapturephotosettings/isautostillimagestabilizationenabled.md): Deprecated. A Boolean value that specifies whether captures use automatic image stabilization.
- [highResolutionPhotoEnabled](avcapturephotosettings/ishighresolutionphotoenabled.md): Deprecated. A Boolean value that specifies whether to capture still images at the highest resolution supported by the active device and format.

### Suppressing the shutter sound

- [shutterSoundSuppressionEnabled](avcapturephotosettings/isshuttersoundsuppressionenabled.md): A Boolean value that indicates whether to suppress the built-in shutter sound when capturing a photo.

### Enabling preview and thumbnail delivery

- [previewPhotoFormat](avcapturephotosettings/previewphotoformat.md): A dictionary describing the format for delivery of preview-sized images alongside the main photo.
- [availablePreviewPhotoPixelFormatTypes](avcapturephotosettings/availablepreviewphotopixelformattypes-2vfwu.md): An array of pixel format types compatible with the photo settings for delivery of preview-sized images.
- [embeddedThumbnailPhotoFormat](avcapturephotosettings/embeddedthumbnailphotoformat.md): A dictionary describing the format for delivery of thumbnail images embedded in photo file output.
- [availableRawEmbeddedThumbnailPhotoCodecTypes](avcapturephotosettings/availablerawembeddedthumbnailphotocodectypes.md): An array of video codec types compatible with the photo settings for embedding raw thumbnail images in photo file output.
- [rawEmbeddedThumbnailPhotoFormat](avcapturephotosettings/rawembeddedthumbnailphotoformat.md): A dictionary describing the format for delivery of raw thumbnail images embedded in photo file output.
- [availableEmbeddedThumbnailPhotoCodecTypes](avcapturephotosettings/availableembeddedthumbnailphotocodectypes.md): An array of video codec types compatible with the photo settings for embedding thumbnail images in photo file output.

### Configuring Live Photo settings

- [livePhotoMovieFileURL](avcapturephotosettings/livephotomoviefileurl.md): A URL at which to write Live Photo movie output.
- [livePhotoMovieMetadata](avcapturephotosettings/livephotomoviemetadata.md): A dictionary of metadata to include in the Live Photo movie file.
- [livePhotoVideoCodecType](avcapturephotosettings/livephotovideocodectype.md): The video codec to use for encoding the movie portion of Live Photo output.

### Configuring constant color

- [constantColorEnabled](avcapturephotosettings/isconstantcolorenabled.md): A Boolean value that indicates whether to capture the photo with constant color.
- [constantColorFallbackPhotoDeliveryEnabled](avcapturephotosettings/isconstantcolorfallbackphotodeliveryenabled.md): A Boolean value that indicates whether to deliver a fallback photo when taking a constant color capture.

### Capturing depth data

- [depthDataDeliveryEnabled](avcapturephotosettings/isdepthdatadeliveryenabled.md): A Boolean value that determines whether the photo output captures depth data along with the photo.
- [embedsDepthDataInPhoto](avcapturephotosettings/embedsdepthdatainphoto.md): A Boolean value that determines whether any depth data captured with the photo is included when generating output file data.
- [depthDataFiltered](avcapturephotosettings/isdepthdatafiltered.md): A Boolean value that determines whether to smooth noise and fill in missing values in depth data output.

### Capturing Portrait Effects matte

- [portraitEffectsMatteDeliveryEnabled](avcapturephotosettings/isportraiteffectsmattedeliveryenabled.md): Specifies whether a portrait effects matte should be captured along with the photo.
- [embedsPortraitEffectsMatteInPhoto](avcapturephotosettings/embedsportraiteffectsmatteinphoto.md): Specifies whether the portrait effects matte captured with ths photo should be written to the photo’s file structure.

### Capturing semantic segmentation mattes

- [embedsSemanticSegmentationMattesInPhoto](avcapturephotosettings/embedssemanticsegmentationmattesinphoto.md): A Boolean value that specifies whether to write the enabled semantic segmentation matte types captured with this photo to the photo’s file structure.
- [enabledSemanticSegmentationMatteTypes](avcapturephotosettings/enabledsemanticsegmentationmattetypes.md): An array of semantic segmentation matte types that the photo render pipeline can deliver.

### Embedding metadata

- [metadata](avcapturephotosettings/metadata.md): A dictionary of metadata keys and values to embed in photo file output.

### Instance properties

- [rawFileFormat](avcapturephotosettings/rawfileformat.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVCapturePhotoBracketSettings](avcapturephotobracketsettings.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Photo settings

- [AVCapturePhotoBracketSettings](avcapturephotobracketsettings.md): A specification of the features and settings to use for a photo capture request that captures multiple images with varied settings.
- [AVCaptureResolvedPhotoSettings](avcaptureresolvedphotosettings.md): A description of the features and settings in use for an in-progress or complete photo capture request.
