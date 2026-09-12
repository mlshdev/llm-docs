> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_argbtoypcbcr](https://developer.apple.com/documentation/accelerate/vimage_argbtoypcbcr)

# vImage_ARGBToYpCbCr (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The information that describes the conversion from ARGB to YpCbCr.

## Declaration

```swift
struct vImage_ARGBToYpCbCr
```

## Topics

### Raw Values

- [init()](vimage_argbtoypcbcr/init%28%29.md)
- [init(opaque:)](vimage_argbtoypcbcr/init%28opaque_%29.md)
- [opaque](vimage_argbtoypcbcr/opaque.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Generating conversion information

- [vImageConvert_ARGBToYpCbCr_GenerateConversion(\_:\_:\_:\_:\_:\_:)](vimageconvert_argbtoypcbcr_generateconversion%28____________%29.md): Generates the information that describes the conversion from ARGB to YpCbCr.
- [vImageYpCbCrType](vimageypcbcrtype.md): Constants that describe the encoding of a YpCbCr image for conversions between RGB and YpCbCr.
- [vImageARGBType](vimageargbtype.md): Constants that describe the encoding of an ARGB image for conversions between RGB and YpCbCr.
- [vImage_ARGBToYpCbCrMatrix](vimage_argbtoypcbcrmatrix.md): The 3 x 3 matrix that the vImage library uses to convert from RGB to YpCbCr.
- [vImage_YpCbCrPixelRange](vimage_ypcbcrpixelrange.md): The description of range and clamping information for YpCbCr pixel formats.

# vImage_ARGBToYpCbCr (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The information that describes the conversion from ARGB to YpCbCr.

## Declaration

```objectivec
typedef struct vImage_ARGBToYpCbCr { ... } vImage_ARGBToYpCbCr;
```

## Topics

### Raw Values

- [opaque](vimage_argbtoypcbcr/opaque.md)

## See Also

### Generating conversion information

- [vImageConvert_ARGBToYpCbCr_GenerateConversion](vimageconvert_argbtoypcbcr_generateconversion%28____________%29.md): Generates the information that describes the conversion from ARGB to YpCbCr.
- [vImageYpCbCrType](vimageypcbcrtype.md): Constants that describe the encoding of a YpCbCr image for conversions between RGB and YpCbCr.
- [vImageARGBType](vimageargbtype.md): Constants that describe the encoding of an ARGB image for conversions between RGB and YpCbCr.
- [vImage_ARGBToYpCbCrMatrix](vimage_argbtoypcbcrmatrix.md): The 3 x 3 matrix that the vImage library uses to convert from RGB to YpCbCr.
- [vImage_YpCbCrPixelRange](vimage_ypcbcrpixelrange.md): The description of range and clamping information for YpCbCr pixel formats.
