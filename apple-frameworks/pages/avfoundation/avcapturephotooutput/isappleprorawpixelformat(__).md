> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isappleprorawpixelformat(_:)](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isappleprorawpixelformat(_:))

# isAppleProRAWPixelFormat(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · tvOS 17.0+

Returns a Boolean value that indicates whether the pixel format is an Apple ProRAW format.

## Declaration

```swift
class func isAppleProRAWPixelFormat(_ pixelFormat: OSType) -> Bool
```

## Parameters

- `pixelFormat`: The pixel format to query.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the pixel format is an Apple ProRAW format, otherwise [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Capturing photos in RAW and Apple ProRAW formats](../capturing-photos-in-raw-and-apple-proraw-formats.md)

## See Also

### Determining supported pixel formats

- [availablePhotoPixelFormatTypes](availablephotopixelformattypes-3ydgm.md): The pixel formats the capture output supports for photo capture.
- [availableRawPhotoPixelFormatTypes](availablerawphotopixelformattypes-9t9k5.md): The pixel formats the capture output supports for RAW photo capture.
- [supportedPhotoPixelFormatTypes(for:)](supportedphotopixelformattypes%28for_%29.md): Returns the list of uncompressed pixel formats supported for photo data in the specified file type.
- [supportedRawPhotoPixelFormatTypes(for:)](supportedrawphotopixelformattypes%28for_%29.md): Returns the list of Bayer RAW pixel formats supported for photo data in the specified file type.
- [isBayerRAWPixelFormat(\_:)](isbayerrawpixelformat%28__%29.md): Returns a Boolean value that indicates whether the pixel format is a Bayer RAW format.

# isAppleProRAWPixelFormat: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · tvOS 17.0+

Returns a Boolean value that indicates whether the pixel format is an Apple ProRAW format.

## Declaration

```objectivec
+ (BOOL) isAppleProRAWPixelFormat:(OSType) pixelFormat;
```

## Parameters

- `pixelFormat`: The pixel format to query.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the pixel format is an Apple ProRAW format, otherwise [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Capturing photos in RAW and Apple ProRAW formats](../capturing-photos-in-raw-and-apple-proraw-formats.md)

## See Also

### Determining supported pixel formats

- [availablePhotoPixelFormatTypes](availablephotopixelformattypes-6eyb.md): The pixel formats the capture output supports for photo capture.
- [availableRawPhotoPixelFormatTypes](availablerawphotopixelformattypes-5fatm.md): The pixel formats the capture output supports for RAW photo capture.
- [supportedPhotoPixelFormatTypesForFileType:](supportedphotopixelformattypesforfiletype_.md): Returns the list of uncompressed pixel formats supported for photo data in the specified file type.
- [supportedRawPhotoPixelFormatTypesForFileType:](supportedrawphotopixelformattypesforfiletype_.md): Returns the list of Bayer RAW pixel formats supported for photo data in the specified file type.
- [isBayerRAWPixelFormat:](isbayerrawpixelformat%28__%29.md): Returns a Boolean value that indicates whether the pixel format is a Bayer RAW format.
