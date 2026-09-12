> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/supportedphotopixelformattypes(for:)](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/supportedphotopixelformattypes(for:))

# supportedPhotoPixelFormatTypes(for:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Returns the list of uncompressed pixel formats supported for photo data in the specified file type.

## Declaration

```swift
@nonobjc func supportedPhotoPixelFormatTypes(for fileType: AVFileType) -> [OSType]
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

- [availablePhotoPixelFormatTypes](availablephotopixelformattypes-3ydgm.md): The pixel formats the capture output supports for photo capture.
- [availableRawPhotoPixelFormatTypes](availablerawphotopixelformattypes-9t9k5.md): The pixel formats the capture output supports for RAW photo capture.
- [supportedRawPhotoPixelFormatTypes(for:)](supportedrawphotopixelformattypes%28for_%29.md): Returns the list of Bayer RAW pixel formats supported for photo data in the specified file type.
- [isAppleProRAWPixelFormat(\_:)](isappleprorawpixelformat%28__%29.md): Returns a Boolean value that indicates whether the pixel format is an Apple ProRAW format.
- [isBayerRAWPixelFormat(\_:)](isbayerrawpixelformat%28__%29.md): Returns a Boolean value that indicates whether the pixel format is a Bayer RAW format.
