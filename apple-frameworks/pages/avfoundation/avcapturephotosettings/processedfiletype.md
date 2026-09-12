> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/processedfiletype](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/processedfiletype)

# processedFileType (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The container file format for eventual output of the processed image.

## Declaration

```swift
var processedFileType: AVFileType? { get }
```

<a id="Discussion"></a>

## Discussion

You specify a file format when creating capture settings with the [init(rawPixelFormatType:rawFileType:processedFormat:processedFileType:)](init%28rawpixelformattype_rawfiletype_processedformat_processedfiletype_%29.md) initializer. If you didn’t specify a file format, this value is `nil`, and the photo output automatically chooses a default file format appropriate to the [format](format.md) property.

## See Also

### Inspecting settings

- [uniqueID](uniqueid.md): A unique identifier for this photo settings instance.
- [format](format.md): A dictionary describing the processed format (for example, JPEG) to deliver captured photos in.
- [rawFileType](rawfiletype.md): The container file format for eventual output of the RAW image.
- [rawPhotoPixelFormatType](rawphotopixelformattype.md): An identifier for the Bayer RAW pixel format to deliver captured RAW photos in.

# processedFileType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The container file format for eventual output of the processed image.

## Declaration

```objectivec
@property (readonly, nullable) AVFileType processedFileType;
```

<a id="Discussion"></a>

## Discussion

You specify a file format when creating capture settings with the [photoSettingsWithRawPixelFormatType:rawFileType:processedFormat:processedFileType:](init%28rawpixelformattype_rawfiletype_processedformat_processedfiletype_%29.md) initializer. If you didn’t specify a file format, this value is `nil`, and the photo output automatically chooses a default file format appropriate to the [format](format.md) property.

## See Also

### Inspecting settings

- [uniqueID](uniqueid.md): A unique identifier for this photo settings instance.
- [format](format.md): A dictionary describing the processed format (for example, JPEG) to deliver captured photos in.
- [rawFileType](rawfiletype.md): The container file format for eventual output of the RAW image.
- [rawPhotoPixelFormatType](rawphotopixelformattype.md): An identifier for the Bayer RAW pixel format to deliver captured RAW photos in.
