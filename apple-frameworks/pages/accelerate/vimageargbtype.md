> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageargbtype](https://developer.apple.com/documentation/accelerate/vimageargbtype)

# vImageARGBType (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe the encoding of an ARGB image for conversions between RGB and YpCbCr.

## Declaration

```swift
struct vImageARGBType
```

## Topics

### Constants

- [init(\_:)](vimageargbtype/init%28__%29.md): Creates a new ARGB type.
- [init(rawValue:)](vimageargbtype/init%28rawvalue_%29.md): Creates a new ARGB type with an unsigned integer value.
- [rawValue](vimageargbtype/rawvalue.md): The unsigned integer raw value.
- [kvImageARGB16Q12](kvimageargb16q12.md): Any 8-bit four-channel interleaved buffer.
- [kvImageARGB16U](kvimageargb16u.md): Any 16-bit unsigned, four-channel interleaved buffer.
- [kvImageARGB8888](kvimageargb8888.md): Any 16-bit signed fixed-point, four-channel interleaved buffer.

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
- [vImageYpCbCrType](vimageypcbcrtype.md): Constants that describe the encoding of a YpCbCr image for conversions between RGB and YpCbCr.
- [vImage_ARGBToYpCbCrMatrix](vimage_argbtoypcbcrmatrix.md): The 3 x 3 matrix that the vImage library uses to convert from RGB to YpCbCr.
- [vImage_ARGBToYpCbCr](vimage_argbtoypcbcr.md): The information that describes the conversion from ARGB to YpCbCr.
- [vImage_YpCbCrPixelRange](vimage_ypcbcrpixelrange.md): The description of range and clamping information for YpCbCr pixel formats.

# vImageARGBType (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe the encoding of an ARGB image for conversions between RGB and YpCbCr.

## Declaration

```objectivec
typedef enum { ... } vImageARGBType;
```

## Topics

### Constants

- [kvImageARGB16Q12](kvimageargb16q12.md): Any 8-bit four-channel interleaved buffer.
- [kvImageARGB16U](kvimageargb16u.md): Any 16-bit unsigned, four-channel interleaved buffer.
- [kvImageARGB8888](kvimageargb8888.md): Any 16-bit signed fixed-point, four-channel interleaved buffer.

## See Also

### Generating conversion information

- [vImageConvert_ARGBToYpCbCr_GenerateConversion](vimageconvert_argbtoypcbcr_generateconversion%28____________%29.md): Generates the information that describes the conversion from ARGB to YpCbCr.
- [vImageYpCbCrType](vimageypcbcrtype.md): Constants that describe the encoding of a YpCbCr image for conversions between RGB and YpCbCr.
- [vImage_ARGBToYpCbCrMatrix](vimage_argbtoypcbcrmatrix.md): The 3 x 3 matrix that the vImage library uses to convert from RGB to YpCbCr.
- [vImage_ARGBToYpCbCr](vimage_argbtoypcbcr.md): The information that describes the conversion from ARGB to YpCbCr.
- [vImage_YpCbCrPixelRange](vimage_ypcbcrpixelrange.md): The description of range and clamping information for YpCbCr pixel formats.
