> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/uniqueid](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/uniqueid)

# uniqueID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

A unique identifier for this photo settings instance.

## Declaration

```swift
var uniqueID: Int64 { get }
```

## Mentioned In

- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

Creating a [AVCapturePhotoSettings](../avcapturephotosettings.md) instance automatically assigns a unique value to this property.

Use this property to track a photo capture request. After you call the [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method, the photo capture output calls your delegate object to provide information about the progress and results of the capture. Each delegate method includes a [AVCaptureResolvedPhotoSettings](../avcaptureresolvedphotosettings.md) whose [uniqueID](uniqueid.md) property matches the [uniqueID](uniqueid.md) value of the [AVCapturePhotoSettings](../avcapturephotosettings.md) object you used to request capture.

It is illegal to reuse a [AVCapturePhotoSettings](../avcapturephotosettings.md) instance for multiple captures. Calling the [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)) if the `settings` object’s [uniqueID](uniqueid.md) value matches that of any previously used settings object.

## See Also

### Inspecting settings

- [format](format.md): A dictionary describing the processed format (for example, JPEG) to deliver captured photos in.
- [processedFileType](processedfiletype.md): The container file format for eventual output of the processed image.
- [rawFileType](rawfiletype.md): The container file format for eventual output of the RAW image.
- [rawPhotoPixelFormatType](rawphotopixelformattype.md): An identifier for the Bayer RAW pixel format to deliver captured RAW photos in.

# uniqueID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

A unique identifier for this photo settings instance.

## Declaration

```objectivec
@property (readonly) int64_t uniqueID;
```

## Mentioned In

- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

Creating a [AVCapturePhotoSettings](../avcapturephotosettings.md) instance automatically assigns a unique value to this property.

Use this property to track a photo capture request. After you call the [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method, the photo capture output calls your delegate object to provide information about the progress and results of the capture. Each delegate method includes a [AVCaptureResolvedPhotoSettings](../avcaptureresolvedphotosettings.md) whose [uniqueID](uniqueid.md) property matches the [uniqueID](uniqueid.md) value of the [AVCapturePhotoSettings](../avcapturephotosettings.md) object you used to request capture.

It is illegal to reuse a [AVCapturePhotoSettings](../avcapturephotosettings.md) instance for multiple captures. Calling the [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)) if the `settings` object’s [uniqueID](uniqueid.md) value matches that of any previously used settings object.

## See Also

### Inspecting settings

- [format](format.md): A dictionary describing the processed format (for example, JPEG) to deliver captured photos in.
- [processedFileType](processedfiletype.md): The container file format for eventual output of the processed image.
- [rawFileType](rawfiletype.md): The container file format for eventual output of the RAW image.
- [rawPhotoPixelFormatType](rawphotopixelformattype.md): An identifier for the Bayer RAW pixel format to deliver captured RAW photos in.
