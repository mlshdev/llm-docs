> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/functions-that-convert-from-ycbcr-to-rgb](https://developer.apple.com/documentation/accelerate/functions-that-convert-from-ycbcr-to-rgb)

# Functions that convert from YCbCr to RGB (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Convert image data represented by luma, blue-difference, and red-difference channels to red, green, and blue channels.

## Topics

### Converting from 4:2:0

- [vImageConvert_420Yp8_CbCr8ToARGB8888(\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_420yp8_cbcr8toargb8888%28______________%29.md): Converts a planar Yp buffer and a 2-channel CbCr buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_420Yp8_Cb8_Cr8ToARGB8888(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_420yp8_cb8_cr8toargb8888%28________________%29.md): Converts planar Yp, Cb, and Cr buffers to an 8-bit-per-channel, 4-channel ARGB buffer.

### Converting from 4:2:2

- [vImageConvert_422YpCbYpCr8ToARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_422ypcbypcr8toargb8888%28____________%29.md): Converts an 8-bit-per-channel 4:2:2 YpCbYpCr buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CbYpCrYp8ToARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_422cbypcryp8toargb8888%28____________%29.md): Converts an 8-bit-per-channel 4:2:2 CbYpCrYp buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CbYpCrYp16ToARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_422cbypcryp16toargb8888%28____________%29.md): Converts a 16-bit-per-channel 4:2:2 CbYpCrYp buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CbYpCrYp8_AA8ToARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_422cbypcryp8_aa8toargb8888%28____________%29.md): Converts an 8-bit-per-channel 4:2:2 CbYpCrYp buffer and an 8-bit alpha buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CbYpCrYp16ToARGB16U(\_:\_:\_:\_:\_:\_:)](vimageconvert_422cbypcryp16toargb16u%28____________%29.md): Converts a 16-bit-per-channel 4:2:2 CbYpCrYp buffer to an unsigned 16-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CrYpCbYpCbYpCbYpCrYpCrYp10ToARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_422crypcbypcbypcbypcrypcryp10toargb8888%28____________%29.md): Converts a 10-bit-per-channel 4:2:2 CrYpCbYpCbYpCbYpCrYpCrYp buffer to a 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CrYpCbYpCbYpCbYpCrYpCrYp10ToARGB16Q12(\_:\_:\_:\_:\_:\_:)](vimageconvert_422crypcbypcbypcbypcrypcryp10toargb16q12%28____________%29.md): Converts a 10-bit-per-channel 4:2:2 CrYpCbYpCbYpCbYpCrYpCrYp buffer to a fixed-point 16-bit-per-channel, 4-channel ARGB buffer.

### Converting from 4:4:4

- [vImageConvert_444AYpCbCr8ToARGB8888(\_:\_:\_:\_:\_:)](vimageconvert_444aypcbcr8toargb8888%28__________%29.md): Converts an 8-bit-per-channel 4:4:4 YpCbCr buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_444CrYpCb8ToARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_444crypcb8toargb8888%28____________%29.md): Converts an 8-bit-per-channel 4:4:4 CrYpCb buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_444CbYpCrA8ToARGB8888(\_:\_:\_:\_:\_:)](vimageconvert_444cbypcra8toargb8888%28__________%29.md): Converts an 8-bit-per-channel 4:4:4 CbYpCrA buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_444CrYpCb10ToARGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_444crypcb10toargb8888%28____________%29.md): Converts an 10-bit-per-channel 4:4:4 CrYpCb buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_444CrYpCb10ToARGB16Q12(\_:\_:\_:\_:\_:\_:)](vimageconvert_444crypcb10toargb16q12%28____________%29.md): Converts an 10-bit-per-channel 4:4:4 CrYpCb buffer to a fixed-point 16-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_444AYpCbCr16ToARGB8888(\_:\_:\_:\_:\_:)](vimageconvert_444aypcbcr16toargb8888%28__________%29.md): Converts an 16-bit-per-channel 4:4:4 YpCbCr buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_444AYpCbCr16ToARGB16U(\_:\_:\_:\_:\_:)](vimageconvert_444aypcbcr16toargb16u%28__________%29.md): Converts an 10-bit-per-channel 4:4:4 CrYpCb buffer to an unsigned 16-bit-per-channel, 4-channel ARGB buffer.

### Generating conversion information

- [vImageConvert_YpCbCrToARGB_GenerateConversion(\_:\_:\_:\_:\_:\_:)](vimageconvert_ypcbcrtoargb_generateconversion%28____________%29.md): Generates the information that describes the conversion from YpCbCr to ARGB.
- [vImageYpCbCrType](vimageypcbcrtype.md): Constants that describe the encoding of a YpCbCr image for conversions between RGB and YpCbCr.
- [vImageARGBType](vimageargbtype.md): Constants that describe the encoding of an ARGB image for conversions between RGB and YpCbCr.
- [vImage_YpCbCrToARGBMatrix](vimage_ypcbcrtoargbmatrix.md): The 3 x 3 matrix that the vImage library uses to convert from YpCbCr to RGB.
- [vImage_YpCbCrToARGB](vimage_ypcbcrtoargb.md): The information that describes the conversion from YpCbCr to ARGB.
- [vImage_YpCbCrPixelRange](vimage_ypcbcrpixelrange.md): The description of range and clamping information for YpCbCr pixel formats.

## See Also

### Converting between YCbCr and RGB color spaces

- [Functions that convert from RGB to YCbCr](functions-that-convert-from-rgb-to-ycbcr.md): Convert image data represented by red, green, and blue channels to luma, blue-difference, and red-difference channels.

# Functions that convert from YCbCr to RGB (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Convert image data represented by luma, blue-difference, and red-difference channels to red, green, and blue channels.

## Topics

### Converting from 4:2:0

- [vImageConvert_420Yp8_CbCr8ToARGB8888](vimageconvert_420yp8_cbcr8toargb8888%28______________%29.md): Converts a planar Yp buffer and a 2-channel CbCr buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_420Yp8_Cb8_Cr8ToARGB8888](vimageconvert_420yp8_cb8_cr8toargb8888%28________________%29.md): Converts planar Yp, Cb, and Cr buffers to an 8-bit-per-channel, 4-channel ARGB buffer.

### Converting from 4:2:2

- [vImageConvert_422YpCbYpCr8ToARGB8888](vimageconvert_422ypcbypcr8toargb8888%28____________%29.md): Converts an 8-bit-per-channel 4:2:2 YpCbYpCr buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CbYpCrYp8ToARGB8888](vimageconvert_422cbypcryp8toargb8888%28____________%29.md): Converts an 8-bit-per-channel 4:2:2 CbYpCrYp buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CbYpCrYp16ToARGB8888](vimageconvert_422cbypcryp16toargb8888%28____________%29.md): Converts a 16-bit-per-channel 4:2:2 CbYpCrYp buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CbYpCrYp8_AA8ToARGB8888](vimageconvert_422cbypcryp8_aa8toargb8888%28____________%29.md): Converts an 8-bit-per-channel 4:2:2 CbYpCrYp buffer and an 8-bit alpha buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CbYpCrYp16ToARGB16U](vimageconvert_422cbypcryp16toargb16u%28____________%29.md): Converts a 16-bit-per-channel 4:2:2 CbYpCrYp buffer to an unsigned 16-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CrYpCbYpCbYpCbYpCrYpCrYp10ToARGB8888](vimageconvert_422crypcbypcbypcbypcrypcryp10toargb8888%28____________%29.md): Converts a 10-bit-per-channel 4:2:2 CrYpCbYpCbYpCbYpCrYpCrYp buffer to a 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_422CrYpCbYpCbYpCbYpCrYpCrYp10ToARGB16Q12](vimageconvert_422crypcbypcbypcbypcrypcryp10toargb16q12%28____________%29.md): Converts a 10-bit-per-channel 4:2:2 CrYpCbYpCbYpCbYpCrYpCrYp buffer to a fixed-point 16-bit-per-channel, 4-channel ARGB buffer.

### Converting from 4:4:4

- [vImageConvert_444AYpCbCr8ToARGB8888](vimageconvert_444aypcbcr8toargb8888%28__________%29.md): Converts an 8-bit-per-channel 4:4:4 YpCbCr buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_444CrYpCb8ToARGB8888](vimageconvert_444crypcb8toargb8888%28____________%29.md): Converts an 8-bit-per-channel 4:4:4 CrYpCb buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_444CbYpCrA8ToARGB8888](vimageconvert_444cbypcra8toargb8888%28__________%29.md): Converts an 8-bit-per-channel 4:4:4 CbYpCrA buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_444CrYpCb10ToARGB8888](vimageconvert_444crypcb10toargb8888%28____________%29.md): Converts an 10-bit-per-channel 4:4:4 CrYpCb buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_444CrYpCb10ToARGB16Q12](vimageconvert_444crypcb10toargb16q12%28____________%29.md): Converts an 10-bit-per-channel 4:4:4 CrYpCb buffer to a fixed-point 16-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_444AYpCbCr16ToARGB8888](vimageconvert_444aypcbcr16toargb8888%28__________%29.md): Converts an 16-bit-per-channel 4:4:4 YpCbCr buffer to an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_444AYpCbCr16ToARGB16U](vimageconvert_444aypcbcr16toargb16u%28__________%29.md): Converts an 10-bit-per-channel 4:4:4 CrYpCb buffer to an unsigned 16-bit-per-channel, 4-channel ARGB buffer.

### Generating conversion information

- [vImageConvert_YpCbCrToARGB_GenerateConversion](vimageconvert_ypcbcrtoargb_generateconversion%28____________%29.md): Generates the information that describes the conversion from YpCbCr to ARGB.
- [vImageYpCbCrType](vimageypcbcrtype.md): Constants that describe the encoding of a YpCbCr image for conversions between RGB and YpCbCr.
- [vImageARGBType](vimageargbtype.md): Constants that describe the encoding of an ARGB image for conversions between RGB and YpCbCr.
- [vImage_YpCbCrToARGBMatrix](vimage_ypcbcrtoargbmatrix.md): The 3 x 3 matrix that the vImage library uses to convert from YpCbCr to RGB.
- [vImage_YpCbCrToARGB](vimage_ypcbcrtoargb.md): The information that describes the conversion from YpCbCr to ARGB.
- [vImage_YpCbCrPixelRange](vimage_ypcbcrpixelrange.md): The description of range and clamping information for YpCbCr pixel formats.

## See Also

### Converting between YCbCr and RGB color spaces

- [Functions that convert from RGB to YCbCr](functions-that-convert-from-rgb-to-ycbcr.md): Convert image data represented by red, green, and blue channels to luma, blue-difference, and red-difference channels.
