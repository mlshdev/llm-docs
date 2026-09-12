> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/1399056-vimage-buffer-type-codes](https://developer.apple.com/documentation/accelerate/1399056-vimage-buffer-type-codes)

# vImage Buffer Type Codes (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Constants that specify the contents of vImage buffers.

## Topics

### Type

- [vImageBufferTypeCode](vimagebuffertypecode.md): Type codes, such as chrominance or luminance, for the contents of a vImage buffer.

### Constants

- [kvImageBufferTypeCode_Alpha](kvimagebuffertypecode_alpha.md): The buffer contains the alpha channel.
- [kvImageBufferTypeCode_CGFormat](kvimagebuffertypecode_cgformat.md): The buffer contains data describable as a vImage Core Graphics image format as a single buffer.
- [kvImageBufferTypeCode_CMYK_Black](kvimagebuffertypecode_cmyk_black.md): If the image has a CMYK color model, the buffer contains the black channel.
- [kvImageBufferTypeCode_CMYK_Cyan](kvimagebuffertypecode_cmyk_cyan.md): If the image has a CMYK color model, the buffer contains the cyan channel.
- [kvImageBufferTypeCode_CMYK_Magenta](kvimagebuffertypecode_cmyk_magenta.md): If the image has a CMYK color model, the buffer contains the magenta channel.
- [kvImageBufferTypeCode_CMYK_Yellow](kvimagebuffertypecode_cmyk_yellow.md): If the image has a CMYK color model, the buffer contains the yellow channel.
- [kvImageBufferTypeCode_CVPixelBuffer_YCbCr](kvimagebuffertypecode_cvpixelbuffer_ycbcr.md): The buffer contains luminance and both chroma channels interleaved according to the [vImageConstCVImageFormat](vimageconstcvimageformat.md) image type.
- [kvImageBufferTypeCode_Cb](kvimagebuffertypecode_cb.md): The buffer contains the blue chrominance channel.
- [kvImageBufferTypeCode_Chroma](kvimagebuffertypecode_chroma.md): The buffer contains both chrominance channels, interleaved.
- [kvImageBufferTypeCode_Chunky](kvimagebuffertypecode_chunky.md): The buffer contains chunky data not describable as a vImage Core Graphics image format.
- [kvImageBufferTypeCode_ColorSpaceChannel1](kvimagebuffertypecode_colorspacechannel1.md)
- [kvImageBufferTypeCode_ColorSpaceChannel10](kvimagebuffertypecode_colorspacechannel10.md)
- [kvImageBufferTypeCode_ColorSpaceChannel11](kvimagebuffertypecode_colorspacechannel11.md)
- [kvImageBufferTypeCode_ColorSpaceChannel12](kvimagebuffertypecode_colorspacechannel12.md)
- [kvImageBufferTypeCode_ColorSpaceChannel13](kvimagebuffertypecode_colorspacechannel13.md)
- [kvImageBufferTypeCode_ColorSpaceChannel14](kvimagebuffertypecode_colorspacechannel14.md)
- [kvImageBufferTypeCode_ColorSpaceChannel15](kvimagebuffertypecode_colorspacechannel15.md)
- [kvImageBufferTypeCode_ColorSpaceChannel16](kvimagebuffertypecode_colorspacechannel16.md)
- [kvImageBufferTypeCode_ColorSpaceChannel2](kvimagebuffertypecode_colorspacechannel2.md)
- [kvImageBufferTypeCode_ColorSpaceChannel3](kvimagebuffertypecode_colorspacechannel3.md)
- [kvImageBufferTypeCode_ColorSpaceChannel4](kvimagebuffertypecode_colorspacechannel4.md)
- [kvImageBufferTypeCode_ColorSpaceChannel5](kvimagebuffertypecode_colorspacechannel5.md)
- [kvImageBufferTypeCode_ColorSpaceChannel6](kvimagebuffertypecode_colorspacechannel6.md)
- [kvImageBufferTypeCode_ColorSpaceChannel7](kvimagebuffertypecode_colorspacechannel7.md)
- [kvImageBufferTypeCode_ColorSpaceChannel8](kvimagebuffertypecode_colorspacechannel8.md)
- [kvImageBufferTypeCode_ColorSpaceChannel9](kvimagebuffertypecode_colorspacechannel9.md)
- [kvImageBufferTypeCode_Cr](kvimagebuffertypecode_cr.md): The buffer contains the red chrominance channel.
- [kvImageBufferTypeCode_EndOfList](kvimagebuffertypecode_endoflist.md): End of list marker.
- [kvImageBufferTypeCode_Indexed](kvimagebuffertypecode_indexed.md): The buffer contains data in an indexed colorspace.
- [kvImageBufferTypeCode_LAB_A](kvimagebuffertypecode_lab_a.md): If the image has a LAB color model, the buffer contains the *a\** channel.
- [kvImageBufferTypeCode_LAB_B](kvimagebuffertypecode_lab_b.md): If the image has a LAB color model, the buffer contains the *b\** channel.
- [kvImageBufferTypeCode_LAB_L](kvimagebuffertypecode_lab_l.md): If the image has a LAB color model, the buffer contains the *L\** channel.
- [kvImageBufferTypeCode_Luminance](kvimagebuffertypecode_luminance.md): The buffer contains only luminance data.
- [kvImageBufferTypeCode_Monochrome](kvimagebuffertypecode_monochrome.md): The buffer contains a single color channel.
- [kvImageBufferTypeCode_RGB_Blue](kvimagebuffertypecode_rgb_blue.md): If the image has a RGB color model, the buffer contains the blue channel.
- [kvImageBufferTypeCode_RGB_Green](kvimagebuffertypecode_rgb_green.md): If the image has a RGB color model, the buffer contains the green channel.
- [kvImageBufferTypeCode_RGB_Red](kvimagebuffertypecode_rgb_red.md): If the image has a RGB color model, the buffer contains the red channel.
- [kvImageBufferTypeCode_UniqueFormatCount](kvimagebuffertypecode_uniqueformatcount.md)
- [kvImageBufferTypeCode_XYZ_X](kvimagebuffertypecode_xyz_x.md): If the image has a XYZ color model, the buffer contains the *X* channel.
- [kvImageBufferTypeCode_XYZ_Y](kvimagebuffertypecode_xyz_y.md): If the image has a XYZ color model, the buffer contains the *Y* channel.
- [kvImageBufferTypeCode_XYZ_Z](kvimagebuffertypecode_xyz_z.md): If the image has a XYZ color model, the buffer contains the *Z* channel.

## See Also

### Performing a conversion

- [vImageConvert_AnyToAny(\_:\_:\_:\_:\_:)](vimageconvert_anytoany%28__________%29.md): Converts the pixels in a vImage buffer to another format, using the specified converter.

# vImage Buffer Type Codes (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Constants that specify the contents of vImage buffers.

## Topics

### Type

- [vImageBufferTypeCode](vimagebuffertypecode.md): Type codes, such as chrominance or luminance, for the contents of a vImage buffer.

### Constants

- [kvImageBufferTypeCode_Alpha](kvimagebuffertypecode_alpha.md): The buffer contains the alpha channel.
- [kvImageBufferTypeCode_CGFormat](kvimagebuffertypecode_cgformat.md): The buffer contains data describable as a vImage Core Graphics image format as a single buffer.
- [kvImageBufferTypeCode_CMYK_Black](kvimagebuffertypecode_cmyk_black.md): If the image has a CMYK color model, the buffer contains the black channel.
- [kvImageBufferTypeCode_CMYK_Cyan](kvimagebuffertypecode_cmyk_cyan.md): If the image has a CMYK color model, the buffer contains the cyan channel.
- [kvImageBufferTypeCode_CMYK_Magenta](kvimagebuffertypecode_cmyk_magenta.md): If the image has a CMYK color model, the buffer contains the magenta channel.
- [kvImageBufferTypeCode_CMYK_Yellow](kvimagebuffertypecode_cmyk_yellow.md): If the image has a CMYK color model, the buffer contains the yellow channel.
- [kvImageBufferTypeCode_CVPixelBuffer_YCbCr](kvimagebuffertypecode_cvpixelbuffer_ycbcr.md): The buffer contains luminance and both chroma channels interleaved according to the [vImageConstCVImageFormatRef](vimageconstcvimageformat.md) image type.
- [kvImageBufferTypeCode_Cb](kvimagebuffertypecode_cb.md): The buffer contains the blue chrominance channel.
- [kvImageBufferTypeCode_Chroma](kvimagebuffertypecode_chroma.md): The buffer contains both chrominance channels, interleaved.
- [kvImageBufferTypeCode_Chunky](kvimagebuffertypecode_chunky.md): The buffer contains chunky data not describable as a vImage Core Graphics image format.
- [kvImageBufferTypeCode_ColorSpaceChannel1](kvimagebuffertypecode_colorspacechannel1.md)
- [kvImageBufferTypeCode_ColorSpaceChannel10](kvimagebuffertypecode_colorspacechannel10.md)
- [kvImageBufferTypeCode_ColorSpaceChannel11](kvimagebuffertypecode_colorspacechannel11.md)
- [kvImageBufferTypeCode_ColorSpaceChannel12](kvimagebuffertypecode_colorspacechannel12.md)
- [kvImageBufferTypeCode_ColorSpaceChannel13](kvimagebuffertypecode_colorspacechannel13.md)
- [kvImageBufferTypeCode_ColorSpaceChannel14](kvimagebuffertypecode_colorspacechannel14.md)
- [kvImageBufferTypeCode_ColorSpaceChannel15](kvimagebuffertypecode_colorspacechannel15.md)
- [kvImageBufferTypeCode_ColorSpaceChannel16](kvimagebuffertypecode_colorspacechannel16.md)
- [kvImageBufferTypeCode_ColorSpaceChannel2](kvimagebuffertypecode_colorspacechannel2.md)
- [kvImageBufferTypeCode_ColorSpaceChannel3](kvimagebuffertypecode_colorspacechannel3.md)
- [kvImageBufferTypeCode_ColorSpaceChannel4](kvimagebuffertypecode_colorspacechannel4.md)
- [kvImageBufferTypeCode_ColorSpaceChannel5](kvimagebuffertypecode_colorspacechannel5.md)
- [kvImageBufferTypeCode_ColorSpaceChannel6](kvimagebuffertypecode_colorspacechannel6.md)
- [kvImageBufferTypeCode_ColorSpaceChannel7](kvimagebuffertypecode_colorspacechannel7.md)
- [kvImageBufferTypeCode_ColorSpaceChannel8](kvimagebuffertypecode_colorspacechannel8.md)
- [kvImageBufferTypeCode_ColorSpaceChannel9](kvimagebuffertypecode_colorspacechannel9.md)
- [kvImageBufferTypeCode_Cr](kvimagebuffertypecode_cr.md): The buffer contains the red chrominance channel.
- [kvImageBufferTypeCode_EndOfList](kvimagebuffertypecode_endoflist.md): End of list marker.
- [kvImageBufferTypeCode_Indexed](kvimagebuffertypecode_indexed.md): The buffer contains data in an indexed colorspace.
- [kvImageBufferTypeCode_LAB_A](kvimagebuffertypecode_lab_a.md): If the image has a LAB color model, the buffer contains the *a\** channel.
- [kvImageBufferTypeCode_LAB_B](kvimagebuffertypecode_lab_b.md): If the image has a LAB color model, the buffer contains the *b\** channel.
- [kvImageBufferTypeCode_LAB_L](kvimagebuffertypecode_lab_l.md): If the image has a LAB color model, the buffer contains the *L\** channel.
- [kvImageBufferTypeCode_Luminance](kvimagebuffertypecode_luminance.md): The buffer contains only luminance data.
- [kvImageBufferTypeCode_Monochrome](kvimagebuffertypecode_monochrome.md): The buffer contains a single color channel.
- [kvImageBufferTypeCode_RGB_Blue](kvimagebuffertypecode_rgb_blue.md): If the image has a RGB color model, the buffer contains the blue channel.
- [kvImageBufferTypeCode_RGB_Green](kvimagebuffertypecode_rgb_green.md): If the image has a RGB color model, the buffer contains the green channel.
- [kvImageBufferTypeCode_RGB_Red](kvimagebuffertypecode_rgb_red.md): If the image has a RGB color model, the buffer contains the red channel.
- [kvImageBufferTypeCode_UniqueFormatCount](kvimagebuffertypecode_uniqueformatcount.md)
- [kvImageBufferTypeCode_XYZ_X](kvimagebuffertypecode_xyz_x.md): If the image has a XYZ color model, the buffer contains the *X* channel.
- [kvImageBufferTypeCode_XYZ_Y](kvimagebuffertypecode_xyz_y.md): If the image has a XYZ color model, the buffer contains the *Y* channel.
- [kvImageBufferTypeCode_XYZ_Z](kvimagebuffertypecode_xyz_z.md): If the image has a XYZ color model, the buffer contains the *Z* channel.

## See Also

### Performing a conversion

- [vImageConvert_AnyToAny](vimageconvert_anytoany%28__________%29.md): Converts the pixels in a vImage buffer to another format, using the specified converter.
