> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_ypcbcrtoargb](https://developer.apple.com/documentation/accelerate/vimage_ypcbcrtoargb)

# vImage_YpCbCrToARGB (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The information that describes the conversion from YpCbCr to ARGB.

## Declaration

```swift
struct vImage_YpCbCrToARGB
```

## Topics

### Initializers

- [init()](vimage_ypcbcrtoargb/init%28%29.md): Creates a new description of the conversion from YpCbCr to ARGB.
- [init(opaque:)](vimage_ypcbcrtoargb/init%28opaque_%29.md): Creates a new description of the conversion from YpCbCr to ARGB from the specfied bytes.

### Instance Properties

- [opaque](vimage_ypcbcrtoargb/opaque.md): The bytes of the opaque representation.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Generating conversion information

- [vImageConvert_YpCbCrToARGB_GenerateConversion(\_:\_:\_:\_:\_:\_:)](vimageconvert_ypcbcrtoargb_generateconversion%28____________%29.md): Generates the information that describes the conversion from YpCbCr to ARGB.
- [vImageYpCbCrType](vimageypcbcrtype.md): Constants that describe the encoding of a YpCbCr image for conversions between RGB and YpCbCr.
- [vImageARGBType](vimageargbtype.md): Constants that describe the encoding of an ARGB image for conversions between RGB and YpCbCr.
- [vImage_YpCbCrToARGBMatrix](vimage_ypcbcrtoargbmatrix.md): The 3 x 3 matrix that the vImage library uses to convert from YpCbCr to RGB.
- [vImage_YpCbCrPixelRange](vimage_ypcbcrpixelrange.md): The description of range and clamping information for YpCbCr pixel formats.

# vImage_YpCbCrToARGB (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The information that describes the conversion from YpCbCr to ARGB.

## Declaration

```objectivec
typedef struct vImage_YpCbCrToARGB { ... } vImage_YpCbCrToARGB;
```

## Topics

### Instance Properties

- [opaque](vimage_ypcbcrtoargb/opaque.md): The bytes of the opaque representation.

## See Also

### Generating conversion information

- [vImageConvert_YpCbCrToARGB_GenerateConversion](vimageconvert_ypcbcrtoargb_generateconversion%28____________%29.md): Generates the information that describes the conversion from YpCbCr to ARGB.
- [vImageYpCbCrType](vimageypcbcrtype.md): Constants that describe the encoding of a YpCbCr image for conversions between RGB and YpCbCr.
- [vImageARGBType](vimageargbtype.md): Constants that describe the encoding of an ARGB image for conversions between RGB and YpCbCr.
- [vImage_YpCbCrToARGBMatrix](vimage_ypcbcrtoargbmatrix.md): The 3 x 3 matrix that the vImage library uses to convert from YpCbCr to RGB.
- [vImage_YpCbCrPixelRange](vimage_ypcbcrpixelrange.md): The description of range and clamping information for YpCbCr pixel formats.
