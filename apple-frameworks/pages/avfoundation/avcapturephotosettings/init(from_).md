> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/init(from:)](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/init(from:))

# init(from:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Creates a unique photo settings object, copying all settings values from the specified photo settings object.

## Declaration

```swift
convenience init(from photoSettings: AVCapturePhotoSettings)
```

## Parameters

- `photoSettings`: The photo settings object from which to copy settings.

<a id="return-value"></a>

## Return Value

A new photo settings object.

<a id="Discussion"></a>

## Discussion

It is illegal to reuse a [AVCapturePhotoSettings](../avcapturephotosettings.md) instance for multiple captures. Calling the [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method throws an exception if the [uniqueID](uniqueid.md) value of the `settings` parameter matches that of any previously used settings object.

To reuse a specific combination of settings, use this initializer to create a new [AVCapturePhotoSettings](../avcapturephotosettings.md) instance from an existing photo settings object. The newly created instance has a new, unique value for its [uniqueID](uniqueid.md) property, but copies the values for all other properties from the `photoSettings` parameter.

## See Also

### Creating photo settings

- [init(format:)](init%28format_%29.md): Creates a photo settings object with the specified output format.
- [init(rawPixelFormatType:)](init%28rawpixelformattype_%29.md): Creates a photo settings object for RAW-format-only capture with the specified pixel format.
- [init(rawPixelFormatType:processedFormat:)](init%28rawpixelformattype_processedformat_%29.md): Creates a photo settings object for capture in both RAW format and a processed format.
- [init(rawPixelFormatType:rawFileType:processedFormat:processedFileType:)](init%28rawpixelformattype_rawfiletype_processedformat_processedfiletype_%29.md): Creates a photo settings object for capture in both RAW format and a processed format with the specified output file types.

# photoSettingsFromPhotoSettings: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Creates a unique photo settings object, copying all settings values from the specified photo settings object.

## Declaration

```objectivec
+ (instancetype) photoSettingsFromPhotoSettings:(AVCapturePhotoSettings *) photoSettings;
```

## Parameters

- `photoSettings`: The photo settings object from which to copy settings.

<a id="return-value"></a>

## Return Value

A new photo settings object.

<a id="Discussion"></a>

## Discussion

It is illegal to reuse a [AVCapturePhotoSettings](../avcapturephotosettings.md) instance for multiple captures. Calling the [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method throws an exception if the [uniqueID](uniqueid.md) value of the `settings` parameter matches that of any previously used settings object.

To reuse a specific combination of settings, use this initializer to create a new [AVCapturePhotoSettings](../avcapturephotosettings.md) instance from an existing photo settings object. The newly created instance has a new, unique value for its [uniqueID](uniqueid.md) property, but copies the values for all other properties from the `photoSettings` parameter.

## See Also

### Creating photo settings

- [photoSettings](photosettings.md): Creates a photo settings object with default settings.
- [photoSettingsWithFormat:](init%28format_%29.md): Creates a photo settings object with the specified output format.
- [photoSettingsWithRawPixelFormatType:](init%28rawpixelformattype_%29.md): Creates a photo settings object for RAW-format-only capture with the specified pixel format.
- [photoSettingsWithRawPixelFormatType:processedFormat:](init%28rawpixelformattype_processedformat_%29.md): Creates a photo settings object for capture in both RAW format and a processed format.
- [photoSettingsWithRawPixelFormatType:rawFileType:processedFormat:processedFileType:](init%28rawpixelformattype_rawfiletype_processedformat_processedfiletype_%29.md): Creates a photo settings object for capture in both RAW format and a processed format with the specified output file types.
