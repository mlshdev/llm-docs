> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotobracketsettings/init(rawpixelformattype:rawfiletype:processedformat:processedfiletype:bracketedsettings:)](https://developer.apple.com/documentation/avfoundation/avcapturephotobracketsettings/init(rawpixelformattype:rawfiletype:processedformat:processedfiletype:bracketedsettings:))

# init(rawPixelFormatType:rawFileType:processedFormat:processedFileType:bracketedSettings:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Creates a photo settings object for capture in both RAW format and a processed format.

## Declaration

```swift
convenience init(rawPixelFormatType: OSType, rawFileType: AVFileType?, processedFormat: [String : Any]?, processedFileType: AVFileType?, bracketedSettings: [AVCaptureBracketedStillImageSettings])
```

## Parameters

- `rawPixelFormatType`: The Bayer RAW pixel format type to use for capture. This value must be one of the format identifiers listed in the [availableRawPhotoPixelFormatTypes](../avcapturephotooutput/availablerawphotopixelformattypes-5fatm.md) array of your photo capture output.
- `rawFileType`: The container file format for eventual output of the RAW image.

  If you have no preferred file format, pass `nil` and the photo output will automatically choose a default file format appropriate to the `rawPixelFormatType` parameter.
- `processedFormat`: A dictionary of Core Video pixel buffer attributes or AVFoundation video settings constants (see `Video Settings`).

  To capture a photo in an uncompressed format, such as 420f, 420v, or BGRA, set the key [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) in the `format` dictionary. The corresponding value must be one of the pixel format identifiers listed in the [availablePhotoPixelFormatTypes](../avcapturephotooutput/availablephotopixelformattypes-6eyb.md) array of your photo capture output.

  To capture a photo in a compressed format, such as JPEG, set the key [AVVideoCodecKey](../avvideocodeckey.md) in the `format` dictionary. The corresponding value must be one of the codec identifiers listed in the [availablePhotoCodecTypes](../avcapturephotooutput/availablephotocodectypes.md) array of your photo capture output. For a compressed format, you can also specify a compression level with the key [AVVideoQualityKey](../avvideoqualitykey.md).
- `processedFileType`: The container file format for eventual output of the processed image.

  If you have no preferred file format, pass `nil` and the photo output will automatically choose a default file format appropriate to the `processedFormat` parameter.
- `bracketedSettings`: An array of either [AVCaptureManualExposureBracketedStillImageSettings](../avcapturemanualexposurebracketedstillimagesettings.md) or [AVCaptureAutoExposureBracketedStillImageSettings](../avcaptureautoexposurebracketedstillimagesettings.md) objects, each of which describes the variation in camera settings to use for one image in the bracketed capture.

  The number of image settings objects in this array must be greater than zero and less than or equal to the [maxBracketedCapturePhotoCount](../avcapturephotooutput/maxbracketedcapturephotocount.md) value of your photo output. All image settings objects in this array must be the same type. Calling this initializer with an invalid number or combination of image settings objects raises an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).

<a id="return-value"></a>

## Return Value

A new photo settings object.

<a id="Discussion"></a>

## Discussion

Use this initializer to capture an image in both RAW format and a processed format (such as JPEG). For RAW-only capture, use the [init(rawPixelFormatType:)](../avcapturephotosettings/init%28rawpixelformattype_%29.md) initializer instead.

Requesting both formats adds requirements for other photo settings: see the [format](../avcapturephotosettings/format.md) property for processed format requirements and the [rawPhotoPixelFormatType](../avcapturephotosettings/rawphotopixelformattype.md) property for RAW format requirements. The capture output validates these requirements when you call the [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings and delegate do not meet these requirements, that method raises an exception.

## See Also

### Creating a bracket settings object

- [init(rawPixelFormatType:processedFormat:bracketedSettings:)](init%28rawpixelformattype_processedformat_bracketedsettings_%29.md): Creates a photo settings object for the specified bracket of captures, in the specified formats.

# photoBracketSettingsWithRawPixelFormatType:rawFileType:processedFormat:processedFileType:bracketedSettings: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Creates a photo settings object for capture in both RAW format and a processed format.

## Declaration

```objectivec
+ (instancetype) photoBracketSettingsWithRawPixelFormatType:(OSType) rawPixelFormatType rawFileType:(AVFileType) rawFileType processedFormat:(NSDictionary<NSString *,id> *) processedFormat processedFileType:(AVFileType) processedFileType bracketedSettings:(NSArray<AVCaptureBracketedStillImageSettings *> *) bracketedSettings;
```

## Parameters

- `rawPixelFormatType`: The Bayer RAW pixel format type to use for capture. This value must be one of the format identifiers listed in the [availableRawPhotoPixelFormatTypes](../avcapturephotooutput/availablerawphotopixelformattypes-5fatm.md) array of your photo capture output.
- `rawFileType`: The container file format for eventual output of the RAW image.

  If you have no preferred file format, pass `nil` and the photo output will automatically choose a default file format appropriate to the `rawPixelFormatType` parameter.
- `processedFormat`: A dictionary of Core Video pixel buffer attributes or AVFoundation video settings constants (see `Video Settings`).

  To capture a photo in an uncompressed format, such as 420f, 420v, or BGRA, set the key [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) in the `format` dictionary. The corresponding value must be one of the pixel format identifiers listed in the [availablePhotoPixelFormatTypes](../avcapturephotooutput/availablephotopixelformattypes-6eyb.md) array of your photo capture output.

  To capture a photo in a compressed format, such as JPEG, set the key [AVVideoCodecKey](../avvideocodeckey.md) in the `format` dictionary. The corresponding value must be one of the codec identifiers listed in the [availablePhotoCodecTypes](../avcapturephotooutput/availablephotocodectypes.md) array of your photo capture output. For a compressed format, you can also specify a compression level with the key [AVVideoQualityKey](../avvideoqualitykey.md).
- `processedFileType`: The container file format for eventual output of the processed image.

  If you have no preferred file format, pass `nil` and the photo output will automatically choose a default file format appropriate to the `processedFormat` parameter.
- `bracketedSettings`: An array of either [AVCaptureManualExposureBracketedStillImageSettings](../avcapturemanualexposurebracketedstillimagesettings.md) or [AVCaptureAutoExposureBracketedStillImageSettings](../avcaptureautoexposurebracketedstillimagesettings.md) objects, each of which describes the variation in camera settings to use for one image in the bracketed capture.

  The number of image settings objects in this array must be greater than zero and less than or equal to the [maxBracketedCapturePhotoCount](../avcapturephotooutput/maxbracketedcapturephotocount.md) value of your photo output. All image settings objects in this array must be the same type. Calling this initializer with an invalid number or combination of image settings objects raises an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).

<a id="return-value"></a>

## Return Value

A new photo settings object.

<a id="Discussion"></a>

## Discussion

Use this initializer to capture an image in both RAW format and a processed format (such as JPEG). For RAW-only capture, use the [photoSettingsWithRawPixelFormatType:](../avcapturephotosettings/init%28rawpixelformattype_%29.md) initializer instead.

Requesting both formats adds requirements for other photo settings: see the [format](../avcapturephotosettings/format.md) property for processed format requirements and the [rawPhotoPixelFormatType](../avcapturephotosettings/rawphotopixelformattype.md) property for RAW format requirements. The capture output validates these requirements when you call the [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings and delegate do not meet these requirements, that method raises an exception.

## See Also

### Creating a bracket settings object

- [photoBracketSettingsWithRawPixelFormatType:processedFormat:bracketedSettings:](init%28rawpixelformattype_processedformat_bracketedsettings_%29.md): Creates a photo settings object for the specified bracket of captures, in the specified formats.
