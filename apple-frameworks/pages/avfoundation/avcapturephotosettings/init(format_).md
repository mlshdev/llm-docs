> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/init(format:)](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/init(format:))

# init(format:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Creates a photo settings object with the specified output format.

## Declaration

```swift
convenience init(format: [String : Any]?)
```

## Parameters

- `format`: A dictionary of Core Video pixel buffer attributes or AVFoundation video settings constants (see Video Settings).

  To capture a photo in an uncompressed format, such as 420f, 420v, or BGRA, set the key [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) in the `format` dictionary. The corresponding value must be one of the pixel format identifiers listed in the [availablePhotoPixelFormatTypes](../avcapturephotooutput/availablephotopixelformattypes-6eyb.md) array of your photo capture output.

  To capture a photo in a compressed format, such as JPEG, set the key [AVVideoCodecKey](../avvideocodeckey.md) in the `format` dictionary. The corresponding value must be one of the codec identifiers listed in the [availablePhotoCodecTypes](../avcapturephotooutput/availablephotocodectypes.md) array of your photo capture output. For a compressed format, you can also specify a compression level with the key [AVVideoQualityKey](../avvideoqualitykey.md).

<a id="return-value"></a>

## Return Value

A new photo settings object.

## Mentioned In

- [Capturing uncompressed image data](../capturing-uncompressed-image-data.md)

<a id="Discussion"></a>

## Discussion

Requesting capture in a processed format adds requirements for other photo settings: for details, see the [format](format.md) property. The capture output validates these requirements when you call the [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings and delegate don’t meet these requirements, that method raises an exception.

## See Also

### Creating photo settings

- [init(rawPixelFormatType:)](init%28rawpixelformattype_%29.md): Creates a photo settings object for RAW-format-only capture with the specified pixel format.
- [init(rawPixelFormatType:processedFormat:)](init%28rawpixelformattype_processedformat_%29.md): Creates a photo settings object for capture in both RAW format and a processed format.
- [init(rawPixelFormatType:rawFileType:processedFormat:processedFileType:)](init%28rawpixelformattype_rawfiletype_processedformat_processedfiletype_%29.md): Creates a photo settings object for capture in both RAW format and a processed format with the specified output file types.
- [init(from:)](init%28from_%29.md): Creates a unique photo settings object, copying all settings values from the specified photo settings object.

# photoSettingsWithFormat: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Creates a photo settings object with the specified output format.

## Declaration

```objectivec
+ (instancetype) photoSettingsWithFormat:(NSDictionary<NSString *,id> *) format;
```

## Parameters

- `format`: A dictionary of Core Video pixel buffer attributes or AVFoundation video settings constants (see Video Settings).

  To capture a photo in an uncompressed format, such as 420f, 420v, or BGRA, set the key [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) in the `format` dictionary. The corresponding value must be one of the pixel format identifiers listed in the [availablePhotoPixelFormatTypes](../avcapturephotooutput/availablephotopixelformattypes-6eyb.md) array of your photo capture output.

  To capture a photo in a compressed format, such as JPEG, set the key [AVVideoCodecKey](../avvideocodeckey.md) in the `format` dictionary. The corresponding value must be one of the codec identifiers listed in the [availablePhotoCodecTypes](../avcapturephotooutput/availablephotocodectypes.md) array of your photo capture output. For a compressed format, you can also specify a compression level with the key [AVVideoQualityKey](../avvideoqualitykey.md).

<a id="return-value"></a>

## Return Value

A new photo settings object.

## Mentioned In

- [Capturing uncompressed image data](../capturing-uncompressed-image-data.md)

<a id="Discussion"></a>

## Discussion

Requesting capture in a processed format adds requirements for other photo settings: for details, see the [format](format.md) property. The capture output validates these requirements when you call the [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings and delegate don’t meet these requirements, that method raises an exception.

## See Also

### Creating photo settings

- [photoSettings](photosettings.md): Creates a photo settings object with default settings.
- [photoSettingsWithRawPixelFormatType:](init%28rawpixelformattype_%29.md): Creates a photo settings object for RAW-format-only capture with the specified pixel format.
- [photoSettingsWithRawPixelFormatType:processedFormat:](init%28rawpixelformattype_processedformat_%29.md): Creates a photo settings object for capture in both RAW format and a processed format.
- [photoSettingsWithRawPixelFormatType:rawFileType:processedFormat:processedFileType:](init%28rawpixelformattype_rawfiletype_processedformat_processedfiletype_%29.md): Creates a photo settings object for capture in both RAW format and a processed format with the specified output file types.
- [photoSettingsFromPhotoSettings:](init%28from_%29.md): Creates a unique photo settings object, copying all settings values from the specified photo settings object.
