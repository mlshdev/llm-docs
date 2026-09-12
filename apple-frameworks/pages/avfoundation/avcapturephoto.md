> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto](https://developer.apple.com/documentation/avfoundation/avcapturephoto)

# AVCapturePhoto (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

A container for image data from a photo capture output.

## Declaration

```swift
class AVCapturePhoto
```

## Mentioned In

- [Configuring camera capture to collect a Portrait Effects matte](configuring-camera-capture-to-collect-a-portrait-effects-matte.md)
- [Saving captured photos](saving-captured-photos.md)
- [Capturing and saving Live Photos](capturing-and-saving-live-photos.md)
- [Capturing thumbnail and preview images](capturing-thumbnail-and-preview-images.md)
- [Capturing a bracketed photo sequence](capturing-a-bracketed-photo-sequence.md)
- [Capturing photos with depth](capturing-photos-with-depth.md)
- [Capturing uncompressed image data](capturing-uncompressed-image-data.md)
- [Tracking photo capture progress](tracking-photo-capture-progress.md)

<a id="overview"></a>

## Overview

When you capture photos with the [AVCapturePhotoOutput](avcapturephotooutput.md) class, your delegate object receives each resulting image and related data in the form of an [AVCapturePhoto](avcapturephoto.md) object. This object is an immutable wrapper from which you can retrieve various results of the photo capture.

In addition to the photo image pixel buffer, an AVCapturePhoto object can also contain a preview-sized pixel buffer, capture metadata, and, on supported devices, depth data and camera calibration data. From an [AVCapturePhoto](avcapturephoto.md) object, you can generate data appropriate for writing to a file, such as HEVC encoded image data containerized in the HEIC file format and including a preview image, depth data and other attachments.

An [AVCapturePhoto](avcapturephoto.md) instance wraps a single image result. For example, if you request a bracketed capture of three images, your callback is called three times, each time delivering a single [AVCapturePhoto](avcapturephoto.md) object.

## Topics

### Resolving photo capture requests

- [resolvedSettings](avcapturephoto/resolvedsettings.md): The settings object that was used to request this photo capture.
- [photoCount](avcapturephoto/photocount.md): The 1-based index of this photo capture relative to other results from the same capture request.
- [timestamp](avcapturephoto/timestamp.md): The time at which the image was captured.

### Accessing photo pixel data

- [isRawPhoto](avcapturephoto/israwphoto.md): A Boolean value indicating whether this photo object contains RAW format data.
- [pixelBuffer](avcapturephoto/pixelbuffer.md): The uncompressed or RAW image sample buffer for the photo, if requested.

### Accessing preview photo data

- [embeddedThumbnailPhotoFormat](avcapturephoto/embeddedthumbnailphotoformat.md): A dictionary describing the data format for a preview-sized image accompanying the captured photo.
- [previewPixelBuffer](avcapturephoto/previewpixelbuffer.md): The pixel data for a preview-sized version of the photo, if requested.

### Accessing photo metadata

- [depthData](avcapturephoto/depthdata.md): Depth or disparity map data captured with the photo.
- [cameraCalibrationData](avcapturephoto/cameracalibrationdata.md): Calibration information for the camera device that captured the photo.
- [sourceDeviceType](avcapturephoto/sourcedevicetype.md): The type of device that captured the photo.
- [metadata](avcapturephoto/metadata.md): A dictionary of metadata describing the captured image.
- [portraitEffectsMatte](avcapturephoto/portraiteffectsmatte.md): The portrait effects matte captured with the photo.

### Packaging data for file output

- [fileDataRepresentation(with:)](avcapturephoto/filedatarepresentation%28with_%29.md): Gets a customized representation of the photo data.
- [AVCapturePhotoFileDataRepresentationCustomizer](avcapturephotofiledatarepresentationcustomizer.md): A protocol that defines the methods to implement to customize the packaging of photo data.
- [fileDataRepresentation()](avcapturephoto/filedatarepresentation%28%29.md): Generates and returns a flat data representation of the photo and its attachments.
- [cgImageRepresentation()](avcapturephoto/cgimagerepresentation%28%29.md): Extracts and returns the captured photo’s primary image as a Core Graphics image object.
- [previewCGImageRepresentation()](avcapturephoto/previewcgimagerepresentation%28%29.md): Extracts and returns the captured photo’s preview image as a Core Graphics image object.
- [fileDataRepresentation(withReplacementMetadata:replacementEmbeddedThumbnailPhotoFormat:replacementEmbeddedThumbnailPixelBuffer:replacementDepthData:)](avcapturephoto/filedatarepresentation%28withreplacementmetadata_replacementembeddedthumbnailphotoformat_replacementembeddedthumbnailpixelbuffer_replacementdepthdata_%29.md): Deprecated. Generates and returns a flat data representation of the photo using the specified replacements for some or all of its attachments.

### Enabling constant color

- [constantColorCenterWeightedMeanConfidenceLevel](avcapturephoto/constantcolorcenterweightedmeanconfidencelevel.md): A score that summarizes the overall confidence level of a constant color photo.
- [constantColorConfidenceMap](avcapturephoto/constantcolorconfidencemap.md): A pixel buffer where each pixel value indicates how fully the system achieves the constant color effect in the corresponding region of the photo.
- [isConstantColorFallbackPhoto](avcapturephoto/isconstantcolorfallbackphoto.md): A Boolean value that Indicates whether this photo is a fallback photo for a constant color capture.

### Examining bracketed capture information

- [bracketSettings](avcapturephoto/bracketsettings.md): The variations available for bracketed capture settings for this photo.
- [sequenceCount](avcapturephoto/sequencecount.md): The 1-based index of this photo in a bracketed capture sequence.
- [lensStabilizationStatus](avcapturephoto/lensstabilizationstatus.md): Information about the use of lens stabilization during bracketed photo capture.
- [AVCaptureDevice.LensStabilizationStatus](avcapturedevice/lensstabilizationstatus.md): Constants that indicate the status of optical image stabilization hardware during a bracketed photo capture.

### Accessing segmentation mattes

- [semanticSegmentationMatte(for:)](avcapturephoto/semanticsegmentationmatte%28for_%29.md): Retrieves the semantic segmentation matte associated with this photo.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVCaptureDeferredPhotoProxy](avcapturedeferredphotoproxy.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Photo capture

- [Capturing consistent color images](capturing-consistent-color-images.md): Add the power of a photography studio and lighting rig to your app with the new Constant Color API.
- [Capturing still and Live Photos](capturing-still-and-live-photos.md): Configure and capture single or multiple still images, Live Photos, and other forms of photography.
- [Capturing photos in RAW and Apple ProRAW formats](capturing-photos-in-raw-and-apple-proraw-formats.md): Support professional photography workflows by enabling minimally processed image capture in your camera app.
- [Supporting Continuity Camera in Your Mac App](https://developer.apple.com/documentation/appkit/supporting-continuity-camera-in-your-mac-app): Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.
- [AVCaptureDeferredPhotoProxy](avcapturedeferredphotoproxy.md): A lightly-processed photo with data that the system may use to process and fetch a higher-resolution asset at a later time.
- [AVCapturePhotoOutput](avcapturephotooutput.md): A capture output for still image, Live Photos, and other photography workflows.
- [AVCapturePhotoCaptureDelegate](avcapturephotocapturedelegate.md): Methods for monitoring progress and receiving results from a photo capture output.
- [AVCapturePhotoOutputReadinessCoordinator](avcapturephotooutputreadinesscoordinator.md): An object that monitors changes to a photo output’s capture readiness.
- [AVCapturePhotoOutputReadinessCoordinatorDelegate](avcapturephotooutputreadinesscoordinatordelegate.md): A delegate protocol to receive updates about a photo output’s capture readiness.
- [AVCaptureStillImageOutput](avcapturestillimageoutput.md): Deprecated. A capture output for capturing still photos.

# AVCapturePhoto (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

A container for image data from a photo capture output.

## Declaration

```objectivec
@interface AVCapturePhoto : NSObject
```

## Mentioned In

- [Configuring camera capture to collect a Portrait Effects matte](configuring-camera-capture-to-collect-a-portrait-effects-matte.md)
- [Saving captured photos](saving-captured-photos.md)
- [Capturing and saving Live Photos](capturing-and-saving-live-photos.md)
- [Capturing thumbnail and preview images](capturing-thumbnail-and-preview-images.md)
- [Capturing a bracketed photo sequence](capturing-a-bracketed-photo-sequence.md)
- [Capturing photos with depth](capturing-photos-with-depth.md)
- [Capturing uncompressed image data](capturing-uncompressed-image-data.md)
- [Tracking photo capture progress](tracking-photo-capture-progress.md)

<a id="overview"></a>

## Overview

When you capture photos with the [AVCapturePhotoOutput](avcapturephotooutput.md) class, your delegate object receives each resulting image and related data in the form of an [AVCapturePhoto](avcapturephoto.md) object. This object is an immutable wrapper from which you can retrieve various results of the photo capture.

In addition to the photo image pixel buffer, an AVCapturePhoto object can also contain a preview-sized pixel buffer, capture metadata, and, on supported devices, depth data and camera calibration data. From an [AVCapturePhoto](avcapturephoto.md) object, you can generate data appropriate for writing to a file, such as HEVC encoded image data containerized in the HEIC file format and including a preview image, depth data and other attachments.

An [AVCapturePhoto](avcapturephoto.md) instance wraps a single image result. For example, if you request a bracketed capture of three images, your callback is called three times, each time delivering a single [AVCapturePhoto](avcapturephoto.md) object.

## Topics

### Resolving photo capture requests

- [resolvedSettings](avcapturephoto/resolvedsettings.md): The settings object that was used to request this photo capture.
- [photoCount](avcapturephoto/photocount.md): The 1-based index of this photo capture relative to other results from the same capture request.
- [timestamp](avcapturephoto/timestamp.md): The time at which the image was captured.

### Accessing photo pixel data

- [rawPhoto](avcapturephoto/israwphoto.md): A Boolean value indicating whether this photo object contains RAW format data.
- [pixelBuffer](avcapturephoto/pixelbuffer.md): The uncompressed or RAW image sample buffer for the photo, if requested.

### Accessing preview photo data

- [embeddedThumbnailPhotoFormat](avcapturephoto/embeddedthumbnailphotoformat.md): A dictionary describing the data format for a preview-sized image accompanying the captured photo.
- [previewPixelBuffer](avcapturephoto/previewpixelbuffer.md): The pixel data for a preview-sized version of the photo, if requested.

### Accessing photo metadata

- [depthData](avcapturephoto/depthdata.md): Depth or disparity map data captured with the photo.
- [cameraCalibrationData](avcapturephoto/cameracalibrationdata.md): Calibration information for the camera device that captured the photo.
- [sourceDeviceType](avcapturephoto/sourcedevicetype.md): The type of device that captured the photo.
- [metadata](avcapturephoto/metadata.md): A dictionary of metadata describing the captured image.
- [portraitEffectsMatte](avcapturephoto/portraiteffectsmatte.md): The portrait effects matte captured with the photo.

### Packaging data for file output

- [fileDataRepresentationWithCustomizer:](avcapturephoto/filedatarepresentation%28with_%29.md): Gets a customized representation of the photo data.
- [AVCapturePhotoFileDataRepresentationCustomizer](avcapturephotofiledatarepresentationcustomizer.md): A protocol that defines the methods to implement to customize the packaging of photo data.
- [fileDataRepresentation](avcapturephoto/filedatarepresentation%28%29.md): Generates and returns a flat data representation of the photo and its attachments.
- [CGImageRepresentation](avcapturephoto/cgimagerepresentation%28%29.md): Extracts and returns the captured photo’s primary image as a Core Graphics image object.
- [previewCGImageRepresentation](avcapturephoto/previewcgimagerepresentation%28%29.md): Extracts and returns the captured photo’s preview image as a Core Graphics image object.
- [fileDataRepresentationWithReplacementMetadata:replacementEmbeddedThumbnailPhotoFormat:replacementEmbeddedThumbnailPixelBuffer:replacementDepthData:](avcapturephoto/filedatarepresentation%28withreplacementmetadata_replacementembeddedthumbnailphotoformat_replacementembeddedthumbnailpixelbuffer_replacementdepthdata_%29.md): Deprecated. Generates and returns a flat data representation of the photo using the specified replacements for some or all of its attachments.

### Enabling constant color

- [constantColorCenterWeightedMeanConfidenceLevel](avcapturephoto/constantcolorcenterweightedmeanconfidencelevel.md): A score that summarizes the overall confidence level of a constant color photo.
- [constantColorConfidenceMap](avcapturephoto/constantcolorconfidencemap.md): A pixel buffer where each pixel value indicates how fully the system achieves the constant color effect in the corresponding region of the photo.
- [constantColorFallbackPhoto](avcapturephoto/isconstantcolorfallbackphoto.md): A Boolean value that Indicates whether this photo is a fallback photo for a constant color capture.

### Examining bracketed capture information

- [bracketSettings](avcapturephoto/bracketsettings.md): The variations available for bracketed capture settings for this photo.
- [sequenceCount](avcapturephoto/sequencecount.md): The 1-based index of this photo in a bracketed capture sequence.
- [lensStabilizationStatus](avcapturephoto/lensstabilizationstatus.md): Information about the use of lens stabilization during bracketed photo capture.
- [AVCaptureLensStabilizationStatus](avcapturedevice/lensstabilizationstatus.md): Constants that indicate the status of optical image stabilization hardware during a bracketed photo capture.

### Accessing segmentation mattes

- [semanticSegmentationMatteForType:](avcapturephoto/semanticsegmentationmatte%28for_%29.md): Retrieves the semantic segmentation matte associated with this photo.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVCaptureDeferredPhotoProxy](avcapturedeferredphotoproxy.md)

## See Also

### Photo capture

- [Capturing consistent color images](capturing-consistent-color-images.md): Add the power of a photography studio and lighting rig to your app with the new Constant Color API.
- [Capturing still and Live Photos](capturing-still-and-live-photos.md): Configure and capture single or multiple still images, Live Photos, and other forms of photography.
- [Capturing photos in RAW and Apple ProRAW formats](capturing-photos-in-raw-and-apple-proraw-formats.md): Support professional photography workflows by enabling minimally processed image capture in your camera app.
- [Supporting Continuity Camera in Your Mac App](https://developer.apple.com/documentation/appkit/supporting-continuity-camera-in-your-mac-app): Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.
- [AVCaptureDeferredPhotoProxy](avcapturedeferredphotoproxy.md): A lightly-processed photo with data that the system may use to process and fetch a higher-resolution asset at a later time.
- [AVCapturePhotoOutput](avcapturephotooutput.md): A capture output for still image, Live Photos, and other photography workflows.
- [AVCapturePhotoCaptureDelegate](avcapturephotocapturedelegate.md): Methods for monitoring progress and receiving results from a photo capture output.
- [AVCapturePhotoOutputReadinessCoordinator](avcapturephotooutputreadinesscoordinator.md): An object that monitors changes to a photo output’s capture readiness.
- [AVCapturePhotoOutputReadinessCoordinatorDelegate](avcapturephotooutputreadinesscoordinatordelegate.md): A delegate protocol to receive updates about a photo output’s capture readiness.
- [AVCaptureStillImageOutput](avcapturestillimageoutput.md): Deprecated. A capture output for capturing still photos.
