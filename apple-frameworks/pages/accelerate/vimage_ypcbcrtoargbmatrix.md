> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_ypcbcrtoargbmatrix](https://developer.apple.com/documentation/accelerate/vimage_ypcbcrtoargbmatrix)

# vImage_YpCbCrToARGBMatrix (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The 3 x 3 matrix that the vImage library uses to convert from YpCbCr to RGB.

## Declaration

```swift
struct vImage_YpCbCrToARGBMatrix
```

<a id="overview"></a>

## Overview

The vImage library uses this matrix to convert from YpCbCr to RGB using the following multiplication:

```
                    | R |   | Yp    0     Cr_R |   | Y' |
                    | G | = | Yp   Cb_G   Cr_G | * | Cb |
                    | B |   | Yp   Cb_B     0  |   | Cr |
```

## Topics

### Creating a conversion matrix

- [init(Yp:Cr_R:Cr_G:Cb_G:Cb_B:)](vimage_ypcbcrtoargbmatrix/init%28yp_cr_r_cr_g_cb_g_cb_b_%29.md): Creates a 3 x 3 matrix for converting Y’CbCr signals to RGB.
- [init()](vimage_ypcbcrtoargbmatrix/init%28%29.md): Creates a 3 x 3 zero matrix for converting Y’CbCr signals to RGB.

### Conversion matrix elements

- [Yp](vimage_ypcbcrtoargbmatrix/yp.md): The *Yp* value in the conversion matrix.
- [Cr_R](vimage_ypcbcrtoargbmatrix/cr_r.md): The *Cr_R* value in the conversion matrix.
- [Cr_G](vimage_ypcbcrtoargbmatrix/cr_g.md): The *Cr_G* value in the conversion matrix.
- [Cb_G](vimage_ypcbcrtoargbmatrix/cb_g.md): The *Cb_G* value in the conversion matrix.
- [Cb_B](vimage_ypcbcrtoargbmatrix/cb_b.md): The *Cb_B* value in the conversion matrix.

### Conversion matrices

- [kvImage_YpCbCrToARGBMatrix_ITU_R_601_4](kvimage_ypcbcrtoargbmatrix_itu_r_601_4.md): Y’CbCr-to-RGB conversion matrix for ITU Recommendation BT.601-4.
- [kvImage_YpCbCrToARGBMatrix_ITU_R_709_2](kvimage_ypcbcrtoargbmatrix_itu_r_709_2.md): Y’CbCr-to-RGB conversion matrix for ITU Recommendation BT.709-2.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Generating conversion information

- [vImageConvert_YpCbCrToARGB_GenerateConversion(\_:\_:\_:\_:\_:\_:)](vimageconvert_ypcbcrtoargb_generateconversion%28____________%29.md): Generates the information that describes the conversion from YpCbCr to ARGB.
- [vImageYpCbCrType](vimageypcbcrtype.md): Constants that describe the encoding of a YpCbCr image for conversions between RGB and YpCbCr.
- [vImageARGBType](vimageargbtype.md): Constants that describe the encoding of an ARGB image for conversions between RGB and YpCbCr.
- [vImage_YpCbCrToARGB](vimage_ypcbcrtoargb.md): The information that describes the conversion from YpCbCr to ARGB.
- [vImage_YpCbCrPixelRange](vimage_ypcbcrpixelrange.md): The description of range and clamping information for YpCbCr pixel formats.

# vImage_YpCbCrToARGBMatrix (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The 3 x 3 matrix that the vImage library uses to convert from YpCbCr to RGB.

## Declaration

```objectivec
typedef struct vImage_YpCbCrToARGBMatrix { ... } vImage_YpCbCrToARGBMatrix;
```

<a id="overview"></a>

## Overview

The vImage library uses this matrix to convert from YpCbCr to RGB using the following multiplication:

```
                    | R |   | Yp    0     Cr_R |   | Y' |
                    | G | = | Yp   Cb_G   Cr_G | * | Cb |
                    | B |   | Yp   Cb_B     0  |   | Cr |
```

## Topics

### Conversion matrix elements

- [Yp](vimage_ypcbcrtoargbmatrix/yp.md): The *Yp* value in the conversion matrix.
- [Cr_R](vimage_ypcbcrtoargbmatrix/cr_r.md): The *Cr_R* value in the conversion matrix.
- [Cr_G](vimage_ypcbcrtoargbmatrix/cr_g.md): The *Cr_G* value in the conversion matrix.
- [Cb_G](vimage_ypcbcrtoargbmatrix/cb_g.md): The *Cb_G* value in the conversion matrix.
- [Cb_B](vimage_ypcbcrtoargbmatrix/cb_b.md): The *Cb_B* value in the conversion matrix.

### Conversion matrices

- [kvImage_YpCbCrToARGBMatrix_ITU_R_601_4](kvimage_ypcbcrtoargbmatrix_itu_r_601_4.md): Y’CbCr-to-RGB conversion matrix for ITU Recommendation BT.601-4.
- [kvImage_YpCbCrToARGBMatrix_ITU_R_709_2](kvimage_ypcbcrtoargbmatrix_itu_r_709_2.md): Y’CbCr-to-RGB conversion matrix for ITU Recommendation BT.709-2.

## See Also

### Generating conversion information

- [vImageConvert_YpCbCrToARGB_GenerateConversion](vimageconvert_ypcbcrtoargb_generateconversion%28____________%29.md): Generates the information that describes the conversion from YpCbCr to ARGB.
- [vImageYpCbCrType](vimageypcbcrtype.md): Constants that describe the encoding of a YpCbCr image for conversions between RGB and YpCbCr.
- [vImageARGBType](vimageargbtype.md): Constants that describe the encoding of an ARGB image for conversions between RGB and YpCbCr.
- [vImage_YpCbCrToARGB](vimage_ypcbcrtoargb.md): The information that describes the conversion from YpCbCr to ARGB.
- [vImage_YpCbCrPixelRange](vimage_ypcbcrpixelrange.md): The description of range and clamping information for YpCbCr pixel formats.
