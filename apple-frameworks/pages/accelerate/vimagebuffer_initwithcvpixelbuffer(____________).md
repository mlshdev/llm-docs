> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagebuffer_initwithcvpixelbuffer(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagebuffer_initwithcvpixelbuffer(_:_:_:_:_:_:))

# vImageBuffer_InitWithCVPixelBuffer(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Initializes a vImage buffer with a copy of the contents of a Core Video pixel buffer.

## Declaration

```swift
func vImageBuffer_InitWithCVPixelBuffer(_ buffer: UnsafeMutablePointer<vImage_Buffer>, _ desiredFormat: UnsafeMutablePointer<vImage_CGImageFormat>, _ cvPixelBuffer: CVPixelBuffer, _ cvImageFormat: vImageCVImageFormat!, _ backgroundColor: UnsafePointer<CGFloat>!, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `buffer`: The destination empty [vImage_Buffer](vimage_buffer.md) structure. On return, the function allocates new memory to the buffer and sets the buffer’s size to match the [CVPixelBuffer](../corevideo/cvpixelbuffer.md) instance’s dimensions.
- `desiredFormat`: A [vImage_CGImageFormat](vimage_cgimageformat.md) structure that specifies the image format of the [vImage_Buffer](vimage_buffer.md) structure. If [colorSpace](vimage_cgimageformat/colorspace.md) is `nil`, the function uses [sRGB](../coregraphics/cgcolorspace/srgb.md).
- `cvPixelBuffer`: The source [CVPixelBuffer](../corevideo/cvpixelbuffer.md) instance. It’s not necessary to lock the pixel buffer before calling this function.
- `cvImageFormat`: An optional [vImageCVImageFormat](vimagecvimageformat.md) instance that specifies the pixel format of the source pixel buffer. If this parameter is `nil`, the function attempts to derive this information from the Core Video pixel buffer.
- `backgroundColor`: If the source image contains alpha information and the destination format doesn’t contain alpha information, this function flattens the source image against this parameter.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

  Pass [kvImageNoAllocate](kvimagenoallocate.md) if the destination buffer references existing data.

  If the pixel buffer uses chrominance subsampling and you want vImage to use a higher quality, but a slower, resampling filter, set the [kvImageHighQualityResampling](kvimagehighqualityresampling.md) flag.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="discussion"></a>

## Discussion

Some Core Video pixel buffers and image formats have incompletely specified color information that prevents [vImageBuffer_InitWithCVPixelBuffer(\_:\_:\_:\_:\_:\_:)](vimagebuffer_initwithcvpixelbuffer%28____________%29.md) from performing the conversion. In this situation, the function returns one of the format errors below. To proceed, create a [vImageCVImageFormat](vimagecvimageformat.md) instance, add the missing information, and pass the image format instance as the `cvImageFormat` parameter to this function. It’s possible that more than one piece of information is missing.

- **[kvImageCVImageFormat_ConversionMatrix](kvimagecvimageformat_conversionmatrix.md)**: The conversion matrix is missing from the `cvPixelBuffer` or the `vImageCVImageFormat`. Use the [vImageCVImageFormat_CopyConversionMatrix(\_:\_:\_:)](vimagecvimageformat_copyconversionmatrix%28______%29.md) function to copy a conversion matrix to an image format.
- **[kvImageCVImageFormat_ChromaSiting](kvimagecvimageformat_chromasiting.md)**: The chrominance siting information is missing from the `cvPixelBuffer` or the `vImageCVImageFormat`. Use [vImageCVImageFormat_SetChromaSiting(\_:\_:)](vimagecvimageformat_setchromasiting%28____%29.md) to set the chrominance siting on an image format.
- **[kvImageCVImageFormat_ColorSpace](kvimagecvimageformat_colorspace.md)**: The color space that contains primaries and transfer function is missing from the `cvPixelBuffer` or the `vImageCVImageFormat`. Use [vImageCVImageFormat_SetColorSpace(\_:\_:)](vimagecvimageformat_setcolorspace%28____%29.md) to set the color space on an image format.

<a id="Discussion"></a>

## Discussion

For compatibility with Core Video, vImage substitutes gamma `1/1.961` for [kCVImageBufferTransferFunction_ITU_R_709_2](../corevideo/kcvimagebuffertransferfunction_itu_r_709_2.md) and substitutes the ITU-R BT.709-5 transfer function for [kCVImageBufferTransferFunction_SMPTE_240M_1995](../corevideo/kcvimagebuffertransferfunction_smpte_240m_1995.md). You can manually set the transfer function using [vImageCreateRGBColorSpaceWithPrimariesAndTransferFunction(\_:\_:\_:\_:\_:)](vimagecreatergbcolorspacewithprimariesandtransferfunction%28__________%29.md) and [vImageCVImageFormat_SetColorSpace(\_:\_:)](vimagecvimageformat_setcolorspace%28____%29.md) to avoid this substitution.

# vImageBuffer_InitWithCVPixelBuffer (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Initializes a vImage buffer with a copy of the contents of a Core Video pixel buffer.

## Declaration

```objectivec
vImage_Error vImageBuffer_InitWithCVPixelBuffer(vImage_Buffer *buffer, vImage_CGImageFormat *desiredFormat, CVPixelBufferRef cvPixelBuffer, vImageCVImageFormatRef cvImageFormat, const CGFloat *backgroundColor, vImage_Flags flags);
```

## Parameters

- `buffer`: The destination empty [vImage_Buffer](vimage_buffer.md) structure. On return, the function allocates new memory to the buffer and sets the buffer’s size to match the [CVPixelBufferRef](../corevideo/cvpixelbuffer.md) instance’s dimensions.
- `desiredFormat`: A [vImage_CGImageFormat](vimage_cgimageformat.md) structure that specifies the image format of the [vImage_Buffer](vimage_buffer.md) structure. If [colorSpace](vimage_cgimageformat/colorspace.md) is `nil`, the function uses [kCGColorSpaceSRGB](../coregraphics/cgcolorspace/srgb.md).
- `cvPixelBuffer`: The source [CVPixelBufferRef](../corevideo/cvpixelbuffer.md) instance. It’s not necessary to lock the pixel buffer before calling this function.
- `cvImageFormat`: An optional [vImageCVImageFormatRef](vimagecvimageformat.md) instance that specifies the pixel format of the source pixel buffer. If this parameter is `nil`, the function attempts to derive this information from the Core Video pixel buffer.
- `backgroundColor`: If the source image contains alpha information and the destination format doesn’t contain alpha information, this function flattens the source image against this parameter.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

  Pass [kvImageNoAllocate](kvimagenoallocate.md) if the destination buffer references existing data.

  If the pixel buffer uses chrominance subsampling and you want vImage to use a higher quality, but a slower, resampling filter, set the [kvImageHighQualityResampling](kvimagehighqualityresampling.md) flag.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="discussion"></a>

## Discussion

Some Core Video pixel buffers and image formats have incompletely specified color information that prevents [vImageBuffer_InitWithCVPixelBuffer](vimagebuffer_initwithcvpixelbuffer%28____________%29.md) from performing the conversion. In this situation, the function returns one of the format errors below. To proceed, create a [vImageCVImageFormatRef](vimagecvimageformat.md) instance, add the missing information, and pass the image format instance as the `cvImageFormat` parameter to this function. It’s possible that more than one piece of information is missing.

- **[kvImageCVImageFormat_ConversionMatrix](kvimagecvimageformat_conversionmatrix.md)**: The conversion matrix is missing from the `cvPixelBuffer` or the `vImageCVImageFormat`. Use the [vImageCVImageFormat_CopyConversionMatrix](vimagecvimageformat_copyconversionmatrix%28______%29.md) function to copy a conversion matrix to an image format.
- **[kvImageCVImageFormat_ChromaSiting](kvimagecvimageformat_chromasiting.md)**: The chrominance siting information is missing from the `cvPixelBuffer` or the `vImageCVImageFormat`. Use [vImageCVImageFormat_SetChromaSiting](vimagecvimageformat_setchromasiting%28____%29.md) to set the chrominance siting on an image format.
- **[kvImageCVImageFormat_ColorSpace](kvimagecvimageformat_colorspace.md)**: The color space that contains primaries and transfer function is missing from the `cvPixelBuffer` or the `vImageCVImageFormat`. Use [vImageCVImageFormat_SetColorSpace](vimagecvimageformat_setcolorspace%28____%29.md) to set the color space on an image format.

<a id="Discussion"></a>

## Discussion

For compatibility with Core Video, vImage substitutes gamma `1/1.961` for [kCVImageBufferTransferFunction_ITU_R_709_2](../corevideo/kcvimagebuffertransferfunction_itu_r_709_2.md) and substitutes the ITU-R BT.709-5 transfer function for [kCVImageBufferTransferFunction_SMPTE_240M_1995](../corevideo/kcvimagebuffertransferfunction_smpte_240m_1995.md). You can manually set the transfer function using [vImageCreateRGBColorSpaceWithPrimariesAndTransferFunction](vimagecreatergbcolorspacewithprimariesandtransferfunction%28__________%29.md) and [vImageCVImageFormat_SetColorSpace](vimagecvimageformat_setcolorspace%28____%29.md) to avoid this substitution.
