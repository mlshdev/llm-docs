> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/supportedphotopixelformattypesforfiletype:](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/supportedphotopixelformattypesforfiletype:)

# supportedPhotoPixelFormatTypesForFileType:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Returns the list of uncompressed pixel formats supported for photo data in the specified file type.

## Declaration

```objectivec
- (NSArray<NSNumber *> *) supportedPhotoPixelFormatTypesForFileType:(AVFileType) fileType;
```

## Parameters

- `fileType`: The file type for which to obtain format information.

<a id="return-value"></a>

## Return Value

An array of pixel format types supported for encoding in the specified file type.

<a id="Discussion"></a>

## Discussion

When you issue a photo capture request, you can separately specify the format for capturing or encoding image data and the container format for producing output files containing that data. However, each file type supports only a specific set of image data types.

After choosing a file type from the [availablePhotoFileTypes](availablephotofiletypes.md) array, use this method to find a compatible image data format before creating a photo settings object.

## See Also

### Determining supported pixel formats

- [availablePhotoPixelFormatTypes](availablephotopixelformattypes-6eyb.md): The pixel formats the capture output supports for photo capture.
- [availableRawPhotoPixelFormatTypes](availablerawphotopixelformattypes-5fatm.md): The pixel formats the capture output supports for RAW photo capture.
- [supportedRawPhotoPixelFormatTypesForFileType:](supportedrawphotopixelformattypesforfiletype_.md): Returns the list of Bayer RAW pixel formats supported for photo data in the specified file type.
- [isAppleProRAWPixelFormat:](isappleprorawpixelformat%28__%29.md): Returns a Boolean value that indicates whether the pixel format is an Apple ProRAW format.
- [isBayerRAWPixelFormat:](isbayerrawpixelformat%28__%29.md): Returns a Boolean value that indicates whether the pixel format is a Bayer RAW format.
