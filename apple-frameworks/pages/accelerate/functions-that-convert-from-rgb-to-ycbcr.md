> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/functions-that-convert-from-rgb-to-ycbcr](https://developer.apple.com/documentation/accelerate/functions-that-convert-from-rgb-to-ycbcr)

# Functions that convert from RGB to YCbCr (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Convert image data represented by red, green, and blue channels to luma, blue-difference, and red-difference channels.

## Topics

### Converting to 4:2:0

- [vImageConvert_ARGB8888To420Yp8_CbCr8(\_:\_:\_:\_:\_:\_:)](vimageconvert_argb8888to420yp8_cbcr8%28____________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to a planar Yp buffer and a 2-channel CbCr buffer.
- [vImageConvert_ARGB8888To420Yp8_Cb8_Cr8(\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_argb8888to420yp8_cb8_cr8%28______________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to planar Yp, Cb, and Cr buffers.

### Converting to 4:2:2

- [vImageConvert_ARGB8888To422CbYpCrYp8(\_:\_:\_:\_:\_:)](vimageconvert_argb8888to422cbypcryp8%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to an 8-bit-per-channel 4:2:2 CbCrYp buffer.
- [vImageConvert_ARGB8888To422YpCbYpCr8(\_:\_:\_:\_:\_:)](vimageconvert_argb8888to422ypcbypcr8%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to an 8-bit-per-channel 4:2:2 YpCbYpCr buffer.
- [vImageConvert_ARGB8888To422CbYpCrYp8_AA8(\_:\_:\_:\_:\_:\_:)](vimageconvert_argb8888to422cbypcryp8_aa8%28____________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to an 8-bit-per-channel 4:2:2 CbYpCrYp buffer and an 8-bit alpha buffer.
- [vImageConvert_ARGB8888To422CbYpCrYp16(\_:\_:\_:\_:\_:)](vimageconvert_argb8888to422cbypcryp16%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to a 16-bit-per-channel 4:2:2 CbYpCrYp buffer.
- [vImageConvert_ARGB8888To422CrYpCbYpCbYpCbYpCrYpCrYp10(\_:\_:\_:\_:\_:)](vimageconvert_argb8888to422crypcbypcbypcbypcrypcryp10%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to a 10-bit-per-channel 4:2:2 CrYpCbYpCbYpCbYpCrYpCrYp buffer.
- [vImageConvert_ARGB16UTo422CbYpCrYp16(\_:\_:\_:\_:\_:)](vimageconvert_argb16uto422cbypcryp16%28__________%29.md): Converts an unsigned 16-bit-per-channel, 4-channel ARGB buffer to a 16-bit-per-channel 4:2:2 CbYpCrYp buffer.
- [vImageConvert_ARGB16Q12To422CrYpCbYpCbYpCbYpCrYpCrYp10(\_:\_:\_:\_:\_:)](vimageconvert_argb16q12to422crypcbypcbypcbypcrypcryp10%28__________%29.md): Converts a fixed-point 16-bit-per-channel, 4-channel ARGB buffer to a 10-bit-per-channel 4:2:2 CrYpCbYpCbYpCbYpCrYpCrYp buffer.

### Converting to 4:4:4

- [vImageConvert_ARGB8888To444CrYpCb8(\_:\_:\_:\_:\_:)](vimageconvert_argb8888to444crypcb8%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to an 8-bit-per-channel 4:4:4 CrYpCb buffer.
- [vImageConvert_ARGB8888To444AYpCbCr8(\_:\_:\_:\_:\_:)](vimageconvert_argb8888to444aypcbcr8%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to an 8-bit-per-channel 4:4:4 YpCbCr buffer.
- [vImageConvert_ARGB8888To444CbYpCrA8(\_:\_:\_:\_:\_:)](vimageconvert_argb8888to444cbypcra8%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to an 8-bit-per-channel 4:4:4 CrYpCbA buffer.
- [vImageConvert_ARGB8888To444CrYpCb10(\_:\_:\_:\_:\_:)](vimageconvert_argb8888to444crypcb10%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to an 10-bit-per-channel 4:4:4 CrYpCb buffer.
- [vImageConvert_ARGB8888To444AYpCbCr16(\_:\_:\_:\_:\_:)](vimageconvert_argb8888to444aypcbcr16%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to an 16-bit-per-channel 4:4:4 YpCbCr buffer.
- [vImageConvert_ARGB16UTo444AYpCbCr16(\_:\_:\_:\_:\_:)](vimageconvert_argb16uto444aypcbcr16%28__________%29.md): Converts an unsigned 16-bit-per-channel, 4-channel ARGB buffer to an 16-bit-per-channel 4:4:4 AYpCbCr buffer.
- [vImageConvert_ARGB16Q12To444CrYpCb10(\_:\_:\_:\_:\_:)](vimageconvert_argb16q12to444crypcb10%28__________%29.md): Converts a fixed-point 16-bit-per-channel, 4-channel ARGB buffer to an 10-bit-per-channel 4:4:4 CrYpCb buffer.

### Generating conversion information

- [vImageConvert_ARGBToYpCbCr_GenerateConversion(\_:\_:\_:\_:\_:\_:)](vimageconvert_argbtoypcbcr_generateconversion%28____________%29.md): Generates the information that describes the conversion from ARGB to YpCbCr.
- [vImageYpCbCrType](vimageypcbcrtype.md): Constants that describe the encoding of a YpCbCr image for conversions between RGB and YpCbCr.
- [vImageARGBType](vimageargbtype.md): Constants that describe the encoding of an ARGB image for conversions between RGB and YpCbCr.
- [vImage_ARGBToYpCbCrMatrix](vimage_argbtoypcbcrmatrix.md): The 3 x 3 matrix that the vImage library uses to convert from RGB to YpCbCr.
- [vImage_ARGBToYpCbCr](vimage_argbtoypcbcr.md): The information that describes the conversion from ARGB to YpCbCr.
- [vImage_YpCbCrPixelRange](vimage_ypcbcrpixelrange.md): The description of range and clamping information for YpCbCr pixel formats.

## See Also

### Converting between YCbCr and RGB color spaces

- [Functions that convert from YCbCr to RGB](functions-that-convert-from-ycbcr-to-rgb.md): Convert image data represented by luma, blue-difference, and red-difference channels to red, green, and blue channels.

# Functions that convert from RGB to YCbCr (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Convert image data represented by red, green, and blue channels to luma, blue-difference, and red-difference channels.

## Topics

### Converting to 4:2:0

- [vImageConvert_ARGB8888To420Yp8_CbCr8](vimageconvert_argb8888to420yp8_cbcr8%28____________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to a planar Yp buffer and a 2-channel CbCr buffer.
- [vImageConvert_ARGB8888To420Yp8_Cb8_Cr8](vimageconvert_argb8888to420yp8_cb8_cr8%28______________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to planar Yp, Cb, and Cr buffers.

### Converting to 4:2:2

- [vImageConvert_ARGB8888To422CbYpCrYp8](vimageconvert_argb8888to422cbypcryp8%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to an 8-bit-per-channel 4:2:2 CbCrYp buffer.
- [vImageConvert_ARGB8888To422YpCbYpCr8](vimageconvert_argb8888to422ypcbypcr8%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to an 8-bit-per-channel 4:2:2 YpCbYpCr buffer.
- [vImageConvert_ARGB8888To422CbYpCrYp8_AA8](vimageconvert_argb8888to422cbypcryp8_aa8%28____________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to an 8-bit-per-channel 4:2:2 CbYpCrYp buffer and an 8-bit alpha buffer.
- [vImageConvert_ARGB8888To422CbYpCrYp16](vimageconvert_argb8888to422cbypcryp16%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to a 16-bit-per-channel 4:2:2 CbYpCrYp buffer.
- [vImageConvert_ARGB8888To422CrYpCbYpCbYpCbYpCrYpCrYp10](vimageconvert_argb8888to422crypcbypcbypcbypcrypcryp10%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to a 10-bit-per-channel 4:2:2 CrYpCbYpCbYpCbYpCrYpCrYp buffer.
- [vImageConvert_ARGB16UTo422CbYpCrYp16](vimageconvert_argb16uto422cbypcryp16%28__________%29.md): Converts an unsigned 16-bit-per-channel, 4-channel ARGB buffer to a 16-bit-per-channel 4:2:2 CbYpCrYp buffer.
- [vImageConvert_ARGB16Q12To422CrYpCbYpCbYpCbYpCrYpCrYp10](vimageconvert_argb16q12to422crypcbypcbypcbypcrypcryp10%28__________%29.md): Converts a fixed-point 16-bit-per-channel, 4-channel ARGB buffer to a 10-bit-per-channel 4:2:2 CrYpCbYpCbYpCbYpCrYpCrYp buffer.

### Converting to 4:4:4

- [vImageConvert_ARGB8888To444CrYpCb8](vimageconvert_argb8888to444crypcb8%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to an 8-bit-per-channel 4:4:4 CrYpCb buffer.
- [vImageConvert_ARGB8888To444AYpCbCr8](vimageconvert_argb8888to444aypcbcr8%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to an 8-bit-per-channel 4:4:4 YpCbCr buffer.
- [vImageConvert_ARGB8888To444CbYpCrA8](vimageconvert_argb8888to444cbypcra8%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to an 8-bit-per-channel 4:4:4 CrYpCbA buffer.
- [vImageConvert_ARGB8888To444CrYpCb10](vimageconvert_argb8888to444crypcb10%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to an 10-bit-per-channel 4:4:4 CrYpCb buffer.
- [vImageConvert_ARGB8888To444AYpCbCr16](vimageconvert_argb8888to444aypcbcr16%28__________%29.md): Converts an 8-bit-per-channel, 4-channel ARGB buffer to an 16-bit-per-channel 4:4:4 YpCbCr buffer.
- [vImageConvert_ARGB16UTo444AYpCbCr16](vimageconvert_argb16uto444aypcbcr16%28__________%29.md): Converts an unsigned 16-bit-per-channel, 4-channel ARGB buffer to an 16-bit-per-channel 4:4:4 AYpCbCr buffer.
- [vImageConvert_ARGB16Q12To444CrYpCb10](vimageconvert_argb16q12to444crypcb10%28__________%29.md): Converts a fixed-point 16-bit-per-channel, 4-channel ARGB buffer to an 10-bit-per-channel 4:4:4 CrYpCb buffer.

### Generating conversion information

- [vImageConvert_ARGBToYpCbCr_GenerateConversion](vimageconvert_argbtoypcbcr_generateconversion%28____________%29.md): Generates the information that describes the conversion from ARGB to YpCbCr.
- [vImageYpCbCrType](vimageypcbcrtype.md): Constants that describe the encoding of a YpCbCr image for conversions between RGB and YpCbCr.
- [vImageARGBType](vimageargbtype.md): Constants that describe the encoding of an ARGB image for conversions between RGB and YpCbCr.
- [vImage_ARGBToYpCbCrMatrix](vimage_argbtoypcbcrmatrix.md): The 3 x 3 matrix that the vImage library uses to convert from RGB to YpCbCr.
- [vImage_ARGBToYpCbCr](vimage_argbtoypcbcr.md): The information that describes the conversion from ARGB to YpCbCr.
- [vImage_YpCbCrPixelRange](vimage_ypcbcrpixelrange.md): The description of range and clamping information for YpCbCr pixel formats.

## See Also

### Converting between YCbCr and RGB color spaces

- [Functions that convert from YCbCr to RGB](functions-that-convert-from-ycbcr-to-rgb.md): Convert image data represented by luma, blue-difference, and red-difference channels to red, green, and blue channels.
