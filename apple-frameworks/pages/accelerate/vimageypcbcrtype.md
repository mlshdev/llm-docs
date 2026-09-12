> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageypcbcrtype](https://developer.apple.com/documentation/accelerate/vimageypcbcrtype)

# vImageYpCbCrType (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe the encoding of a YpCbCr image for conversions between RGB and YpCbCr.

## Declaration

```swift
struct vImageYpCbCrType
```

## Topics

### Constants

- [init(\_:)](vimageypcbcrtype/init%28__%29.md): Creates a new YpCbCr type.
- [init(rawValue:)](vimageypcbcrtype/init%28rawvalue_%29.md): Creates a new YpCbCr type with an unsigned integer value.
- [rawValue](vimageypcbcrtype/rawvalue.md): The unsigned integer raw value.
- [kvImage420Yp8_Cb8_Cr8](kvimage420yp8_cb8_cr8.md): Any y420 or f420 (planar component Y’CbCr 8-bit 4:2:0) buffer.
- [kvImage420Yp8_CbCr8](kvimage420yp8_cbcr8.md): Any 420v or 420f (biplanar component Y’CbCr 8-bit 4:2:0, video-range) buffer.
- [kvImage422CbYpCrYp16](kvimage422cbypcryp16.md): Any v216 (component Y’CbCr 10,12,14,16-bit 4:2:2) buffer.
- [kvImage422CbYpCrYp8](kvimage422cbypcryp8.md): Any 2vuy (component Y’CbCr 8-bit 4:2:2) buffer.
- [kvImage422CbYpCrYp8_AA8](kvimage422cbypcryp8_aa8.md): Any a2vy (first plane: video-range component Y’CbCr 8-bit 4:2:2, ordered Cb Y’0 Cr Y’1; second plane: alpha 8-bit) buffer.
- [kvImage422CrYpCbYpCbYpCbYpCrYpCrYp10](kvimage422crypcbypcbypcbypcrypcryp10.md): Any v210 (component Y’CbCr 10-bit 4:2:2) buffer.
- [kvImage422YpCbYpCr8](kvimage422ypcbypcr8.md): Any yuvs or yuvf (component Y’CbCr 8-bit 4:2:2, ordered Y’0 Cb Y’1 Cr) buffer.
- [kvImage444AYpCbCr16](kvimage444aypcbcr16.md): Any y416 (component Y’CbCrA 16-bit 4:4:4:4, ordered A Y’ Cb Cr, full range alpha, video range Y’CbCr) buffer.
- [kvImage444AYpCbCr8](kvimage444aypcbcr8.md): Any r408 or y408 (component Y’CbCrA 8-bit 4:4:4:4, ordered A Y’ Cb Cr, full range alpha, video range Y’CbCr) buffer.
- [kvImage444CbYpCrA8](kvimage444cbypcra8.md): Any v408 (component Y’CbCrA 8-bit 4:4:4:4) buffer.
- [kvImage444CrYpCb10](kvimage444crypcb10.md): Any v410 (component Y’CbCr 10-bit 4:4:4) buffer.
- [kvImage444CrYpCb8](kvimage444crypcb8.md): Any v308 (component Y’CbCr 8-bit 4:4:4) buffer.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Generating conversion information

- [vImageConvert_ARGBToYpCbCr_GenerateConversion(\_:\_:\_:\_:\_:\_:)](vimageconvert_argbtoypcbcr_generateconversion%28____________%29.md): Generates the information that describes the conversion from ARGB to YpCbCr.
- [vImageARGBType](vimageargbtype.md): Constants that describe the encoding of an ARGB image for conversions between RGB and YpCbCr.
- [vImage_ARGBToYpCbCrMatrix](vimage_argbtoypcbcrmatrix.md): The 3 x 3 matrix that the vImage library uses to convert from RGB to YpCbCr.
- [vImage_ARGBToYpCbCr](vimage_argbtoypcbcr.md): The information that describes the conversion from ARGB to YpCbCr.
- [vImage_YpCbCrPixelRange](vimage_ypcbcrpixelrange.md): The description of range and clamping information for YpCbCr pixel formats.

# vImageYpCbCrType (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe the encoding of a YpCbCr image for conversions between RGB and YpCbCr.

## Declaration

```objectivec
typedef enum { ... } vImageYpCbCrType;
```

## Topics

### Constants

- [kvImage420Yp8_Cb8_Cr8](kvimage420yp8_cb8_cr8.md): Any y420 or f420 (planar component Y’CbCr 8-bit 4:2:0) buffer.
- [kvImage420Yp8_CbCr8](kvimage420yp8_cbcr8.md): Any 420v or 420f (biplanar component Y’CbCr 8-bit 4:2:0, video-range) buffer.
- [kvImage422CbYpCrYp16](kvimage422cbypcryp16.md): Any v216 (component Y’CbCr 10,12,14,16-bit 4:2:2) buffer.
- [kvImage422CbYpCrYp8](kvimage422cbypcryp8.md): Any 2vuy (component Y’CbCr 8-bit 4:2:2) buffer.
- [kvImage422CbYpCrYp8_AA8](kvimage422cbypcryp8_aa8.md): Any a2vy (first plane: video-range component Y’CbCr 8-bit 4:2:2, ordered Cb Y’0 Cr Y’1; second plane: alpha 8-bit) buffer.
- [kvImage422CrYpCbYpCbYpCbYpCrYpCrYp10](kvimage422crypcbypcbypcbypcrypcryp10.md): Any v210 (component Y’CbCr 10-bit 4:2:2) buffer.
- [kvImage422YpCbYpCr8](kvimage422ypcbypcr8.md): Any yuvs or yuvf (component Y’CbCr 8-bit 4:2:2, ordered Y’0 Cb Y’1 Cr) buffer.
- [kvImage444AYpCbCr16](kvimage444aypcbcr16.md): Any y416 (component Y’CbCrA 16-bit 4:4:4:4, ordered A Y’ Cb Cr, full range alpha, video range Y’CbCr) buffer.
- [kvImage444AYpCbCr8](kvimage444aypcbcr8.md): Any r408 or y408 (component Y’CbCrA 8-bit 4:4:4:4, ordered A Y’ Cb Cr, full range alpha, video range Y’CbCr) buffer.
- [kvImage444CbYpCrA8](kvimage444cbypcra8.md): Any v408 (component Y’CbCrA 8-bit 4:4:4:4) buffer.
- [kvImage444CrYpCb10](kvimage444crypcb10.md): Any v410 (component Y’CbCr 10-bit 4:4:4) buffer.
- [kvImage444CrYpCb8](kvimage444crypcb8.md): Any v308 (component Y’CbCr 8-bit 4:4:4) buffer.

## See Also

### Generating conversion information

- [vImageConvert_ARGBToYpCbCr_GenerateConversion](vimageconvert_argbtoypcbcr_generateconversion%28____________%29.md): Generates the information that describes the conversion from ARGB to YpCbCr.
- [vImageARGBType](vimageargbtype.md): Constants that describe the encoding of an ARGB image for conversions between RGB and YpCbCr.
- [vImage_ARGBToYpCbCrMatrix](vimage_argbtoypcbcrmatrix.md): The 3 x 3 matrix that the vImage library uses to convert from RGB to YpCbCr.
- [vImage_ARGBToYpCbCr](vimage_argbtoypcbcr.md): The information that describes the conversion from ARGB to YpCbCr.
- [vImage_YpCbCrPixelRange](vimage_ypcbcrpixelrange.md): The description of range and clamping information for YpCbCr pixel formats.
