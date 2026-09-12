> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/rawphotopixelformattype](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/rawphotopixelformattype)

# rawPhotoPixelFormatType (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An identifier for the Bayer RAW pixel format to deliver captured RAW photos in.

## Declaration

```swift
var rawPhotoPixelFormatType: OSType { get }
```

<a id="Discussion"></a>

## Discussion

This property is read-only—you specify a RAW pixel format when creating a settings object with the [init(rawPixelFormatType:)](init%28rawpixelformattype_%29.md), [init(rawPixelFormatType:processedFormat:)](init%28rawpixelformattype_processedformat_%29.md) initializer.

When capturing RAW images, the following requirements apply:

- The [isAutoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md) setting must be [false](https://developer.apple.com/documentation/swift/false).
- Your delegate object must implement the [photoOutput(\_:didFinishProcessingRawPhoto:previewPhoto:resolvedSettings:bracketSettings:error:)](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingrawphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md) method.
- The [isHighResolutionPhotoEnabled](ishighresolutionphotoenabled.md) setting may be [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false), but that setting applies only to the separate processed image.

(You request separate processed images with the [init(rawPixelFormatType:processedFormat:)](init%28rawpixelformattype_processedformat_%29.md) initializer. This restriction does not apply when you request RAW-only capture with the [init(rawPixelFormatType:)](init%28rawpixelformattype_%29.md) initializer).

The capture output validates these requirements when you call the [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings and delegate do not meet these requirements, that method raises an exception.

## See Also

### Inspecting settings

- [uniqueID](uniqueid.md): A unique identifier for this photo settings instance.
- [format](format.md): A dictionary describing the processed format (for example, JPEG) to deliver captured photos in.
- [processedFileType](processedfiletype.md): The container file format for eventual output of the processed image.
- [rawFileType](rawfiletype.md): The container file format for eventual output of the RAW image.

# rawPhotoPixelFormatType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An identifier for the Bayer RAW pixel format to deliver captured RAW photos in.

## Declaration

```objectivec
@property (readonly) OSType rawPhotoPixelFormatType;
```

<a id="Discussion"></a>

## Discussion

This property is read-only—you specify a RAW pixel format when creating a settings object with the [photoSettingsWithRawPixelFormatType:](init%28rawpixelformattype_%29.md), [photoSettingsWithRawPixelFormatType:processedFormat:](init%28rawpixelformattype_processedformat_%29.md) initializer.

When capturing RAW images, the following requirements apply:

- The [autoStillImageStabilizationEnabled](isautostillimagestabilizationenabled.md) setting must be [false](https://developer.apple.com/documentation/swift/false).
- Your delegate object must implement the [captureOutput:didFinishProcessingRawPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error:](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingrawphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md) method.
- The [highResolutionPhotoEnabled](ishighresolutionphotoenabled.md) setting may be [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false), but that setting applies only to the separate processed image.

(You request separate processed images with the [photoSettingsWithRawPixelFormatType:processedFormat:](init%28rawpixelformattype_processedformat_%29.md) initializer. This restriction does not apply when you request RAW-only capture with the [photoSettingsWithRawPixelFormatType:](init%28rawpixelformattype_%29.md) initializer).

The capture output validates these requirements when you call the [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings and delegate do not meet these requirements, that method raises an exception.

## See Also

### Inspecting settings

- [uniqueID](uniqueid.md): A unique identifier for this photo settings instance.
- [format](format.md): A dictionary describing the processed format (for example, JPEG) to deliver captured photos in.
- [processedFileType](processedfiletype.md): The container file format for eventual output of the processed image.
- [rawFileType](rawfiletype.md): The container file format for eventual output of the RAW image.
