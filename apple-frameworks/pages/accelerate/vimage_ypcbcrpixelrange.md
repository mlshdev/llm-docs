> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_ypcbcrpixelrange](https://developer.apple.com/documentation/accelerate/vimage_ypcbcrpixelrange)

# vImage_YpCbCrPixelRange (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The description of range and clamping information for YpCbCr pixel formats.

## Declaration

```swift
struct vImage_YpCbCrPixelRange
```

<a id="overview"></a>

## Overview

Y’CbCr formats frequently don’t use the entire representable range available to them to represent image data. While a *full range* video format does use the entire range, a *video range* format often leaves the extrema unused, except perhaps to represent values outside of the standard `Y'=[0,1]` `CbCr = [-0.5,0.5]` range. For example, an 8-bit video range format typically uses the range `[16,235]` for Y’ and `[16,240]` for Cb and Cr.

The following code shows examples of typical Y’CbCr pixel ranges:

```swift
// The 8-bit pixel range that's unclamped.
let pixelRange = vImage_YpCbCrPixelRange(Yp_bias: 16,
                                         CbCr_bias: 128,
                                         YpRangeMax: 235,
                                         CbCrRangeMax: 240,
                                         YpMax: 255,
                                         YpMin: 0,
                                         CbCrMax: 255,
                                         CbCrMin: 1)

 // The 8-bit pixel range that's clamped to video range.
let pixelRange = vImage_YpCbCrPixelRange(Yp_bias: 16,
                                         CbCr_bias: 128,
                                         YpRangeMax: 265,
                                         CbCrRangeMax: 240,
                                         YpMax: 235,
                                         YpMin: 16,
                                         CbCrMax: 240,
                                         CbCrMin: 16)
        
// The 8-bit pixel range that's clamped to full range.
let pixelRange = vImage_YpCbCrPixelRange(Yp_bias: 0,
                                         CbCr_bias: 128,
                                         YpRangeMax: 255,
                                         CbCrRangeMax: 255,
                                         YpMax: 255,
                                         YpMin: 1,
                                         CbCrMax: 255,
                                         CbCrMin: 0)
```

The bias is the prebias for YUV to RGB and the postbias for RGB to YUV.

## Topics

### Creating a Pixel Range

- [init(Yp_bias:CbCr_bias:YpRangeMax:CbCrRangeMax:YpMax:YpMin:CbCrMax:CbCrMin:)](vimage_ypcbcrpixelrange/init%28yp_bias_cbcr_bias_yprangemax_cbcrrangemax_ypmax_ypmin_cbcrmax_cbcrmin_%29.md): Returns a structure describing range and clamping information for Y’CbCr pixel formats.
- [init()](vimage_ypcbcrpixelrange/init%28%29.md)

### Pixel Range Properties

- [Yp_bias](vimage_ypcbcrpixelrange/yp_bias.md): The encoding for `Y' = 0.0` for this video format (varies by bit depth).
- [CbCr_bias](vimage_ypcbcrpixelrange/cbcr_bias.md): The encoding for `{Cb, Cr} = 0.0` for this video format.
- [YpRangeMax](vimage_ypcbcrpixelrange/yprangemax.md): The encoding for `Y' = 1.0` for this video format.
- [CbCrRangeMax](vimage_ypcbcrpixelrange/cbcrrangemax.md): The encoding for `{Cb, Cr} = 0.5` for this video format.
- [YpMax](vimage_ypcbcrpixelrange/ypmax.md): The encoding for the maximum allowed Y’ value.
- [YpMin](vimage_ypcbcrpixelrange/ypmin.md): The encoding of the minimum allowed Y’ value.
- [CbCrMax](vimage_ypcbcrpixelrange/cbcrmax.md): The encoding of the maximum allowed `{Cb, Cr}` value.
- [CbCrMin](vimage_ypcbcrpixelrange/cbcrmin.md): The encoding of the minimum allowed `{Cb, Cr}` value.

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
- [vImage_ARGBToYpCbCr](vimage_argbtoypcbcr.md): The information that describes the conversion from ARGB to YpCbCr.

# vImage_YpCbCrPixelRange (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The description of range and clamping information for YpCbCr pixel formats.

## Declaration

```objectivec
typedef struct vImage_YpCbCrPixelRange { ... } vImage_YpCbCrPixelRange;
```

<a id="overview"></a>

## Overview

Y’CbCr formats frequently don’t use the entire representable range available to them to represent image data. While a *full range* video format does use the entire range, a *video range* format often leaves the extrema unused, except perhaps to represent values outside of the standard `Y'=[0,1]` `CbCr = [-0.5,0.5]` range. For example, an 8-bit video range format typically uses the range `[16,235]` for Y’ and `[16,240]` for Cb and Cr.

The following code shows examples of typical Y’CbCr pixel ranges:

```swift
// The 8-bit pixel range that's unclamped.
let pixelRange = vImage_YpCbCrPixelRange(Yp_bias: 16,
                                         CbCr_bias: 128,
                                         YpRangeMax: 235,
                                         CbCrRangeMax: 240,
                                         YpMax: 255,
                                         YpMin: 0,
                                         CbCrMax: 255,
                                         CbCrMin: 1)

 // The 8-bit pixel range that's clamped to video range.
let pixelRange = vImage_YpCbCrPixelRange(Yp_bias: 16,
                                         CbCr_bias: 128,
                                         YpRangeMax: 265,
                                         CbCrRangeMax: 240,
                                         YpMax: 235,
                                         YpMin: 16,
                                         CbCrMax: 240,
                                         CbCrMin: 16)
        
// The 8-bit pixel range that's clamped to full range.
let pixelRange = vImage_YpCbCrPixelRange(Yp_bias: 0,
                                         CbCr_bias: 128,
                                         YpRangeMax: 255,
                                         CbCrRangeMax: 255,
                                         YpMax: 255,
                                         YpMin: 1,
                                         CbCrMax: 255,
                                         CbCrMin: 0)
```

The bias is the prebias for YUV to RGB and the postbias for RGB to YUV.

## Topics

### Pixel Range Properties

- [Yp_bias](vimage_ypcbcrpixelrange/yp_bias.md): The encoding for `Y' = 0.0` for this video format (varies by bit depth).
- [CbCr_bias](vimage_ypcbcrpixelrange/cbcr_bias.md): The encoding for `{Cb, Cr} = 0.0` for this video format.
- [YpRangeMax](vimage_ypcbcrpixelrange/yprangemax.md): The encoding for `Y' = 1.0` for this video format.
- [CbCrRangeMax](vimage_ypcbcrpixelrange/cbcrrangemax.md): The encoding for `{Cb, Cr} = 0.5` for this video format.
- [YpMax](vimage_ypcbcrpixelrange/ypmax.md): The encoding for the maximum allowed Y’ value.
- [YpMin](vimage_ypcbcrpixelrange/ypmin.md): The encoding of the minimum allowed Y’ value.
- [CbCrMax](vimage_ypcbcrpixelrange/cbcrmax.md): The encoding of the maximum allowed `{Cb, Cr}` value.
- [CbCrMin](vimage_ypcbcrpixelrange/cbcrmin.md): The encoding of the minimum allowed `{Cb, Cr}` value.

## See Also

### Generating conversion information

- [vImageConvert_ARGBToYpCbCr_GenerateConversion](vimageconvert_argbtoypcbcr_generateconversion%28____________%29.md): Generates the information that describes the conversion from ARGB to YpCbCr.
- [vImageYpCbCrType](vimageypcbcrtype.md): Constants that describe the encoding of a YpCbCr image for conversions between RGB and YpCbCr.
- [vImageARGBType](vimageargbtype.md): Constants that describe the encoding of an ARGB image for conversions between RGB and YpCbCr.
- [vImage_ARGBToYpCbCrMatrix](vimage_argbtoypcbcrmatrix.md): The 3 x 3 matrix that the vImage library uses to convert from RGB to YpCbCr.
- [vImage_ARGBToYpCbCr](vimage_argbtoypcbcr.md): The information that describes the conversion from ARGB to YpCbCr.
