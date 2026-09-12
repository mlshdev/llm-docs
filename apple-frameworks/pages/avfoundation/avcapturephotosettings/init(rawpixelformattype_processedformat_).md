> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/init(rawpixelformattype:processedformat:)](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/init(rawpixelformattype:processedformat:))

# init(rawPixelFormatType:processedFormat:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Creates a photo settings object for capture in both RAW format and a processed format.

## Declaration

```swift
convenience init(rawPixelFormatType: OSType, processedFormat: [String : Any]?)
```

## Parameters

- `rawPixelFormatType`: The Bayer RAW pixel format type to use for capture. This value must be one of the format identifiers listed in the [availableRawPhotoPixelFormatTypes](../avcapturephotooutput/availablerawphotopixelformattypes-5fatm.md) array of your photo capture output.
- `processedFormat`: A dictionary of Core Video pixel buffer attributes or AVFoundation video settings constants (see `Video Settings`).

  To capture a photo in an uncompressed format, such as 420f, 420v, or BGRA, set the key [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) in the `format` dictionary. The corresponding value must be one of the pixel format identifiers listed in the [availablePhotoPixelFormatTypes](../avcapturephotooutput/availablephotopixelformattypes-6eyb.md) array of your photo capture output.

  To capture a photo in a compressed format, such as JPEG, set the key [AVVideoCodecKey](../avvideocodeckey.md) in the `format` dictionary. The corresponding value must be one of the codec identifiers listed in the [availablePhotoCodecTypes](../avcapturephotooutput/availablephotocodectypes.md) array of your photo capture output. For a compressed format, you can also specify a compression level with the key [AVVideoQualityKey](../avvideoqualitykey.md).

<a id="return-value"></a>

## Return Value

A new photo settings object.

<a id="Discussion"></a>

## Discussion

Use this initializer to capture an image in both RAW format and a processed format (such as JPEG). For RAW-only capture, use the [init(rawPixelFormatType:)](init%28rawpixelformattype_%29.md) initializer instead.

Requesting both formats adds requirements for other photo settings: see the [format](format.md) property for processed format requirements and the [rawPhotoPixelFormatType](rawphotopixelformattype.md) property for RAW format requirements. The capture output validates these requirements when you call the [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings and delegate don’t meet these requirements, that method raises an exception.

## See Also

### Creating photo settings

- [init(format:)](init%28format_%29.md): Creates a photo settings object with the specified output format.
- [init(rawPixelFormatType:)](init%28rawpixelformattype_%29.md): Creates a photo settings object for RAW-format-only capture with the specified pixel format.
- [init(rawPixelFormatType:rawFileType:processedFormat:processedFileType:)](init%28rawpixelformattype_rawfiletype_processedformat_processedfiletype_%29.md): Creates a photo settings object for capture in both RAW format and a processed format with the specified output file types.
- [init(from:)](init%28from_%29.md): Creates a unique photo settings object, copying all settings values from the specified photo settings object.

# photoSettingsWithRawPixelFormatType:processedFormat: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Creates a photo settings object for capture in both RAW format and a processed format.

## Declaration

```objectivec
+ (instancetype) photoSettingsWithRawPixelFormatType:(OSType) rawPixelFormatType processedFormat:(NSDictionary<NSString *,id> *) processedFormat;
```

## Parameters

- `rawPixelFormatType`: The Bayer RAW pixel format type to use for capture. This value must be one of the format identifiers listed in the [availableRawPhotoPixelFormatTypes](../avcapturephotooutput/availablerawphotopixelformattypes-5fatm.md) array of your photo capture output.
- `processedFormat`: A dictionary of Core Video pixel buffer attributes or AVFoundation video settings constants (see `Video Settings`).

  To capture a photo in an uncompressed format, such as 420f, 420v, or BGRA, set the key [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) in the `format` dictionary. The corresponding value must be one of the pixel format identifiers listed in the [availablePhotoPixelFormatTypes](../avcapturephotooutput/availablephotopixelformattypes-6eyb.md) array of your photo capture output.

  To capture a photo in a compressed format, such as JPEG, set the key [AVVideoCodecKey](../avvideocodeckey.md) in the `format` dictionary. The corresponding value must be one of the codec identifiers listed in the [availablePhotoCodecTypes](../avcapturephotooutput/availablephotocodectypes.md) array of your photo capture output. For a compressed format, you can also specify a compression level with the key [AVVideoQualityKey](../avvideoqualitykey.md).

<a id="return-value"></a>

## Return Value

A new photo settings object.

<a id="Discussion"></a>

## Discussion

Use this initializer to capture an image in both RAW format and a processed format (such as JPEG). For RAW-only capture, use the [photoSettingsWithRawPixelFormatType:](init%28rawpixelformattype_%29.md) initializer instead.

Requesting both formats adds requirements for other photo settings: see the [format](format.md) property for processed format requirements and the [rawPhotoPixelFormatType](rawphotopixelformattype.md) property for RAW format requirements. The capture output validates these requirements when you call the [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings and delegate don’t meet these requirements, that method raises an exception.

## See Also

### Creating photo settings

- [photoSettings](photosettings.md): Creates a photo settings object with default settings.
- [photoSettingsWithFormat:](init%28format_%29.md): Creates a photo settings object with the specified output format.
- [photoSettingsWithRawPixelFormatType:](init%28rawpixelformattype_%29.md): Creates a photo settings object for RAW-format-only capture with the specified pixel format.
- [photoSettingsWithRawPixelFormatType:rawFileType:processedFormat:processedFileType:](init%28rawpixelformattype_rawfiletype_processedformat_processedfiletype_%29.md): Creates a photo settings object for capture in both RAW format and a processed format with the specified output file types.
- [photoSettingsFromPhotoSettings:](init%28from_%29.md): Creates a unique photo settings object, copying all settings values from the specified photo settings object.
