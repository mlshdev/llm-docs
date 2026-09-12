> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/format](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/format)

# format (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

A dictionary describing the processed format (for example, JPEG) to deliver captured photos in.

## Declaration

```swift
var format: [String : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

This property is read-only—you specify a processed format when creating a settings object with the [photoSettings](photosettings.md), [init(format:)](init%28format_%29.md), or [init(rawPixelFormatType:processedFormat:)](init%28rawpixelformattype_processedformat_%29.md) initializer.

When capturing images in processed formats, the following requirements apply:

- This dictionary must contain a value for either the [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) (to request an uncompressed format) or [AVVideoCodecKey](../avvideocodeckey.md) (to request a compressed format such as JPEG) key, but not both.
- If this dictionary has the [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) key, the value for that key must be listed in the photo output’s [availablePhotoPixelFormatTypes](../avcapturephotooutput/availablephotopixelformattypes-6eyb.md) array.

If this dictionary has the [AVVideoCodecKey](../avvideocodeckey.md) key, the value for that key must be listed in the photo output’s [availablePhotoCodecTypes](../avcapturephotooutput/availablephotocodectypes.md) array.

- Your delegate method must implement the [photoOutput(\_:didFinishProcessingPhoto:previewPhoto:resolvedSettings:bracketSettings:error:)](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md) method.

The capture output validates these requirements when you call the [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings and delegate do not meet these requirements, that method raises an exception.

## See Also

### Inspecting settings

- [uniqueID](uniqueid.md): A unique identifier for this photo settings instance.
- [processedFileType](processedfiletype.md): The container file format for eventual output of the processed image.
- [rawFileType](rawfiletype.md): The container file format for eventual output of the RAW image.
- [rawPhotoPixelFormatType](rawphotopixelformattype.md): An identifier for the Bayer RAW pixel format to deliver captured RAW photos in.

# format (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

A dictionary describing the processed format (for example, JPEG) to deliver captured photos in.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,id> * format;
```

<a id="Discussion"></a>

## Discussion

This property is read-only—you specify a processed format when creating a settings object with the [photoSettings](photosettings.md), [photoSettingsWithFormat:](init%28format_%29.md), or [photoSettingsWithRawPixelFormatType:processedFormat:](init%28rawpixelformattype_processedformat_%29.md) initializer.

When capturing images in processed formats, the following requirements apply:

- This dictionary must contain a value for either the [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) (to request an uncompressed format) or [AVVideoCodecKey](../avvideocodeckey.md) (to request a compressed format such as JPEG) key, but not both.
- If this dictionary has the [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) key, the value for that key must be listed in the photo output’s [availablePhotoPixelFormatTypes](../avcapturephotooutput/availablephotopixelformattypes-6eyb.md) array.

If this dictionary has the [AVVideoCodecKey](../avvideocodeckey.md) key, the value for that key must be listed in the photo output’s [availablePhotoCodecTypes](../avcapturephotooutput/availablephotocodectypes.md) array.

- Your delegate method must implement the [captureOutput:didFinishProcessingPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error:](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md) method.

The capture output validates these requirements when you call the [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings and delegate do not meet these requirements, that method raises an exception.

## See Also

### Inspecting settings

- [uniqueID](uniqueid.md): A unique identifier for this photo settings instance.
- [processedFileType](processedfiletype.md): The container file format for eventual output of the processed image.
- [rawFileType](rawfiletype.md): The container file format for eventual output of the RAW image.
- [rawPhotoPixelFormatType](rawphotopixelformattype.md): An identifier for the Bayer RAW pixel format to deliver captured RAW photos in.
