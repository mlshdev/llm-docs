> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/init(rawpixelformattype:)](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/init(rawpixelformattype:))

# init(rawPixelFormatType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Creates a photo settings object for RAW-format-only capture with the specified pixel format.

## Declaration

```swift
convenience init(rawPixelFormatType: OSType)
```

## Parameters

- `rawPixelFormatType`: The Bayer RAW pixel format type to use for capture. This value must be one of the format identifiers listed in the [availableRawPhotoPixelFormatTypes](../avcapturephotooutput/availablerawphotopixelformattypes-5fatm.md) array of your photo capture output.

<a id="return-value"></a>

## Return Value

A new photo settings object.

<a id="Discussion"></a>

## Discussion

Use this initializer for RAW-only capture. To capture an image in both RAW format and a processed format (such as JPEG), use the [init(rawPixelFormatType:processedFormat:)](init%28rawpixelformattype_processedformat_%29.md) initializer instead.

Requesting RAW format capture adds requirements for other photo settings: for details, see the [rawPhotoPixelFormatType](rawphotopixelformattype.md) property. The capture output validates these requirements when you call the [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings and delegate don’t meet these requirements, that method raises an exception.

## See Also

### Creating photo settings

- [init(format:)](init%28format_%29.md): Creates a photo settings object with the specified output format.
- [init(rawPixelFormatType:processedFormat:)](init%28rawpixelformattype_processedformat_%29.md): Creates a photo settings object for capture in both RAW format and a processed format.
- [init(rawPixelFormatType:rawFileType:processedFormat:processedFileType:)](init%28rawpixelformattype_rawfiletype_processedformat_processedfiletype_%29.md): Creates a photo settings object for capture in both RAW format and a processed format with the specified output file types.
- [init(from:)](init%28from_%29.md): Creates a unique photo settings object, copying all settings values from the specified photo settings object.

# photoSettingsWithRawPixelFormatType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Creates a photo settings object for RAW-format-only capture with the specified pixel format.

## Declaration

```objectivec
+ (instancetype) photoSettingsWithRawPixelFormatType:(OSType) rawPixelFormatType;
```

## Parameters

- `rawPixelFormatType`: The Bayer RAW pixel format type to use for capture. This value must be one of the format identifiers listed in the [availableRawPhotoPixelFormatTypes](../avcapturephotooutput/availablerawphotopixelformattypes-5fatm.md) array of your photo capture output.

<a id="return-value"></a>

## Return Value

A new photo settings object.

<a id="Discussion"></a>

## Discussion

Use this initializer for RAW-only capture. To capture an image in both RAW format and a processed format (such as JPEG), use the [photoSettingsWithRawPixelFormatType:processedFormat:](init%28rawpixelformattype_processedformat_%29.md) initializer instead.

Requesting RAW format capture adds requirements for other photo settings: for details, see the [rawPhotoPixelFormatType](rawphotopixelformattype.md) property. The capture output validates these requirements when you call the [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings and delegate don’t meet these requirements, that method raises an exception.

## See Also

### Creating photo settings

- [photoSettings](photosettings.md): Creates a photo settings object with default settings.
- [photoSettingsWithFormat:](init%28format_%29.md): Creates a photo settings object with the specified output format.
- [photoSettingsWithRawPixelFormatType:processedFormat:](init%28rawpixelformattype_processedformat_%29.md): Creates a photo settings object for capture in both RAW format and a processed format.
- [photoSettingsWithRawPixelFormatType:rawFileType:processedFormat:processedFileType:](init%28rawpixelformattype_rawfiletype_processedformat_processedfiletype_%29.md): Creates a photo settings object for capture in both RAW format and a processed format with the specified output file types.
- [photoSettingsFromPhotoSettings:](init%28from_%29.md): Creates a unique photo settings object, copying all settings values from the specified photo settings object.
