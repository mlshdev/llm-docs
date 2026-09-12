> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/photosettings](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/photosettings)

# photoSettings

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Creates a photo settings object with default settings.

## Declaration

```objectivec
+ (instancetype) photoSettings;
```

<a id="return-value"></a>

## Return Value

A new photo settings object.

<a id="Discussion"></a>

## Discussion

Capturing a photo with default settings delivers a single image in JPEG format.

Requesting capture in a processed format (such as JPEG) adds requirements for other photo settings: for details, see the [format](format.md) property. The capture output validates these requirement when you call the [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings and delegate don’t meet these requirement, that method raises an exception.

## See Also

### Creating photo settings

- [photoSettingsWithFormat:](init%28format_%29.md): Creates a photo settings object with the specified output format.
- [photoSettingsWithRawPixelFormatType:](init%28rawpixelformattype_%29.md): Creates a photo settings object for RAW-format-only capture with the specified pixel format.
- [photoSettingsWithRawPixelFormatType:processedFormat:](init%28rawpixelformattype_processedformat_%29.md): Creates a photo settings object for capture in both RAW format and a processed format.
- [photoSettingsWithRawPixelFormatType:rawFileType:processedFormat:processedFileType:](init%28rawpixelformattype_rawfiletype_processedformat_processedfiletype_%29.md): Creates a photo settings object for capture in both RAW format and a processed format with the specified output file types.
- [photoSettingsFromPhotoSettings:](init%28from_%29.md): Creates a unique photo settings object, copying all settings values from the specified photo settings object.
