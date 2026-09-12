> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_argbtoypcbcrmatrix](https://developer.apple.com/documentation/accelerate/vimage_argbtoypcbcrmatrix)

# vImage_ARGBToYpCbCrMatrix (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The 3 x 3 matrix that the vImage library uses to convert from RGB to YpCbCr.

## Declaration

```swift
struct vImage_ARGBToYpCbCrMatrix
```

<a id="overview"></a>

## Overview

The vImage library uses this matrix to convert from RGB to YpCbCr using the following multiplication:

```
        | Y' |   | R_Yp        G_Yp   B_Yp      |   | R |
        | Cb | = | R_Cb        G_Cb   B_Cb_R_Cr | * | G |
        | Cr |   | B_Cb_R_Cr   G_Cr   B_Cr      |   | B |
```

## Topics

### Creating a conversion matrix

- [init(R_Yp:G_Yp:B_Yp:R_Cb:G_Cb:B_Cb_R_Cr:G_Cr:B_Cr:)](vimage_argbtoypcbcrmatrix/init%28r_yp_g_yp_b_yp_r_cb_g_cb_b_cb_r_cr_g_cr_b_cr_%29.md): Creates a 3 x 3 matrix for converting RGB to Y’CbCr.
- [init()](vimage_argbtoypcbcrmatrix/init%28%29.md): Creates a 3 x 3 zero matrix for converting RGB to Y’CbCr.

### Conversion matrix elements

- [R_Yp](vimage_argbtoypcbcrmatrix/r_yp.md): The *R_Yp* value in the conversion matrix.
- [G_Yp](vimage_argbtoypcbcrmatrix/g_yp.md): The *G_Yp* value in the conversion matrix.
- [B_Yp](vimage_argbtoypcbcrmatrix/b_yp.md): The *B_Yp* value in the conversion matrix.
- [R_Cb](vimage_argbtoypcbcrmatrix/r_cb.md): The *R_Cb* value in the conversion matrix.
- [G_Cb](vimage_argbtoypcbcrmatrix/g_cb.md): The *G_Cb* value in the conversion matrix.
- [B_Cb_R_Cr](vimage_argbtoypcbcrmatrix/b_cb_r_cr.md): The *B_Cb_R_Cr* value in the conversion matrix.
- [G_Cr](vimage_argbtoypcbcrmatrix/g_cr.md): The *G_Cr* value in the conversion matrix.
- [B_Cr](vimage_argbtoypcbcrmatrix/b_cr.md): The *B_Cr* value in the conversion matrix.

### Conversion matrices

- [kvImage_ARGBToYpCbCrMatrix_ITU_R_709_2](kvimage_argbtoypcbcrmatrix_itu_r_709_2.md): RGB-to-Y’CbCr conversion matrix for ITU Recommendation BT.709-2.
- [kvImage_ARGBToYpCbCrMatrix_ITU_R_601_4](kvimage_argbtoypcbcrmatrix_itu_r_601_4.md): RGB-to-Y’CbCr conversion matrix for ITU Recommendation BT.601-4.

### Type Properties

- [itu_R_601_4](vimage_argbtoypcbcrmatrix/itu_r_601_4.md)
- [itu_R_709_2](vimage_argbtoypcbcrmatrix/itu_r_709_2.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Generating conversion information

- [vImageConvert_ARGBToYpCbCr_GenerateConversion(\_:\_:\_:\_:\_:\_:)](vimageconvert_argbtoypcbcr_generateconversion%28____________%29.md): Generates the information that describes the conversion from ARGB to YpCbCr.
- [vImageYpCbCrType](vimageypcbcrtype.md): Constants that describe the encoding of a YpCbCr image for conversions between RGB and YpCbCr.
- [vImageARGBType](vimageargbtype.md): Constants that describe the encoding of an ARGB image for conversions between RGB and YpCbCr.
- [vImage_ARGBToYpCbCr](vimage_argbtoypcbcr.md): The information that describes the conversion from ARGB to YpCbCr.
- [vImage_YpCbCrPixelRange](vimage_ypcbcrpixelrange.md): The description of range and clamping information for YpCbCr pixel formats.

# vImage_ARGBToYpCbCrMatrix (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The 3 x 3 matrix that the vImage library uses to convert from RGB to YpCbCr.

## Declaration

```objectivec
typedef struct vImage_ARGBToYpCbCrMatrix { ... } vImage_ARGBToYpCbCrMatrix;
```

<a id="overview"></a>

## Overview

The vImage library uses this matrix to convert from RGB to YpCbCr using the following multiplication:

```
        | Y' |   | R_Yp        G_Yp   B_Yp      |   | R |
        | Cb | = | R_Cb        G_Cb   B_Cb_R_Cr | * | G |
        | Cr |   | B_Cb_R_Cr   G_Cr   B_Cr      |   | B |
```

## Topics

### Conversion matrix elements

- [R_Yp](vimage_argbtoypcbcrmatrix/r_yp.md): The *R_Yp* value in the conversion matrix.
- [G_Yp](vimage_argbtoypcbcrmatrix/g_yp.md): The *G_Yp* value in the conversion matrix.
- [B_Yp](vimage_argbtoypcbcrmatrix/b_yp.md): The *B_Yp* value in the conversion matrix.
- [R_Cb](vimage_argbtoypcbcrmatrix/r_cb.md): The *R_Cb* value in the conversion matrix.
- [G_Cb](vimage_argbtoypcbcrmatrix/g_cb.md): The *G_Cb* value in the conversion matrix.
- [B_Cb_R_Cr](vimage_argbtoypcbcrmatrix/b_cb_r_cr.md): The *B_Cb_R_Cr* value in the conversion matrix.
- [G_Cr](vimage_argbtoypcbcrmatrix/g_cr.md): The *G_Cr* value in the conversion matrix.
- [B_Cr](vimage_argbtoypcbcrmatrix/b_cr.md): The *B_Cr* value in the conversion matrix.

### Conversion matrices

- [kvImage_ARGBToYpCbCrMatrix_ITU_R_709_2](kvimage_argbtoypcbcrmatrix_itu_r_709_2.md): RGB-to-Y’CbCr conversion matrix for ITU Recommendation BT.709-2.
- [kvImage_ARGBToYpCbCrMatrix_ITU_R_601_4](kvimage_argbtoypcbcrmatrix_itu_r_601_4.md): RGB-to-Y’CbCr conversion matrix for ITU Recommendation BT.601-4.

## See Also

### Generating conversion information

- [vImageConvert_ARGBToYpCbCr_GenerateConversion](vimageconvert_argbtoypcbcr_generateconversion%28____________%29.md): Generates the information that describes the conversion from ARGB to YpCbCr.
- [vImageYpCbCrType](vimageypcbcrtype.md): Constants that describe the encoding of a YpCbCr image for conversions between RGB and YpCbCr.
- [vImageARGBType](vimageargbtype.md): Constants that describe the encoding of an ARGB image for conversions between RGB and YpCbCr.
- [vImage_ARGBToYpCbCr](vimage_argbtoypcbcr.md): The information that describes the conversion from ARGB to YpCbCr.
- [vImage_YpCbCrPixelRange](vimage_ypcbcrpixelrange.md): The description of range and clamping information for YpCbCr pixel formats.
