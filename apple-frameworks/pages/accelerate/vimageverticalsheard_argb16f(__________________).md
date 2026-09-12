> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageverticalsheard_argb16f(_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageverticalsheard_argb16f(_:_:_:_:_:_:_:_:_:))

# vImageVerticalShearD_ARGB16F(\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Performs a double-precision vertical shear on a region of interest within a floating-point 16-bit-per-channel, 4-channel interleaved image.

## Declaration

```swift
func vImageVerticalShearD_ARGB16F(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ srcOffsetToROI_X: vImagePixelCount, _ srcOffsetToROI_Y: vImagePixelCount, _ yTranslate: Double, _ shearSlope: Double, _ filter: ResamplingFilter!, _ backColor: UnsafePointer<UInt16>!, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: A pointer to a vImage buffer structure that contains the source image.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the `height`, `width`, and `rowBytes` fields of this structure and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.

  This parameter also specifies the size of the region of interest within the source image. The region of interest has the same height and width as the destination image buffer.
- `srcOffsetToROI_X`: The horizontal offset, in pixels, from the upper-left pixel of the region of interest within the source image.
- `srcOffsetToROI_Y`: The vertical offset, in pixels, from the upper-left pixel of the region of interest within the source image.
- `yTranslate`: A translation value for the vertical direction.
- `shearSlope`: The slope of the front edge of the sheared image, measured in a clockwise direction.
- `filter`: The resampling filter that the function uses. For more information, see [Reducing artifacts with custom resampling filters](reducing-artifacts-with-custom-resampling-filters.md).
- `backColor`: A background color. If you set the `kvImageBackgroundColorFill` flag, pass a pixel value.
- `flags`: The options to use when applying the transform.

  To specify how vImage handles pixel locations beyond the edge of the source image, set one of the following flags: [kvImageBackgroundColorFill](kvimagebackgroundcolorfill.md) or [kvImageEdgeExtend](kvimageedgeextend.md).

  If you want vImage to use a higher quality but a slower resampling filter, set the [kvImageHighQualityResampling](kvimagehighqualityresampling.md) flag.

  If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md).

  This function ignores the [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md) flag.

  If you want vImage to use faster but lower precision internal arithmetic, set the [kvImageUseFP16Accumulator](kvimageusefp16accumulator.md) flag.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes that [Data Types and Constants](data-types-and-constants.md) describes.

<a id="Discussion"></a>

## Discussion

This function uses a resampling filter that you specify to shear, resize, and translate an image in one dimension. Use the resampling filter’s scale property to resize the image and the translate parameter to adjust the position of the destination image. The function transforms as much of the source image as it needs to fill the destination buffer. Therefore, it can transform pixels outside the region of interest.

This function doesn’t work in place — that is, the source and destination buffers need to point to different memory.

## See Also

### Related Documentation

- [Applying geometric transforms to images](applying-geometric-transforms-to-images.md): Reflect, shear, rotate, and scale image buffers using vImage.

### Shearing 16-bit-per-channel buffers

- [vImageVerticalShearD_Planar16F(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageverticalsheard_planar16f%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within a floating-point 16-bit planar image.
- [vImageVerticalShearD_CbCr16F(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageverticalsheard_cbcr16f%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within a floating-point 16-bit-per-channel, 2-channel interleaved image.
- [vImageVerticalShearD_ARGB16U(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageverticalsheard_argb16u%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within an unsigned 16-bit-per-channel, 4-channel interleaved image.
- [vImageVerticalShearD_ARGB16S(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageverticalsheard_argb16s%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within a signed 16-bit-per-channel, 4-channel interleaved image.
- [vImageVerticalShearD_CbCr16S(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageverticalsheard_cbcr16s%28__________________%29.md)
- [vImageVerticalShearD_CbCr16U(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageverticalsheard_cbcr16u%28__________________%29.md)
- [vImageVerticalShear_CbCr16S(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageverticalshear_cbcr16s%28__________________%29.md)

# vImageVerticalShearD_ARGB16F (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Performs a double-precision vertical shear on a region of interest within a floating-point 16-bit-per-channel, 4-channel interleaved image.

## Declaration

```objectivec
vImage_Error vImageVerticalShearD_ARGB16F(const vImage_Buffer *src, const vImage_Buffer *dest, vImagePixelCount srcOffsetToROI_X, vImagePixelCount srcOffsetToROI_Y, double yTranslate, double shearSlope, ResamplingFilter filter, const Pixel_ARGB_16F backColor, vImage_Flags flags);
```

## Parameters

- `src`: A pointer to a vImage buffer structure that contains the source image.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the `height`, `width`, and `rowBytes` fields of this structure and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.

  This parameter also specifies the size of the region of interest within the source image. The region of interest has the same height and width as the destination image buffer.
- `srcOffsetToROI_X`: The horizontal offset, in pixels, from the upper-left pixel of the region of interest within the source image.
- `srcOffsetToROI_Y`: The vertical offset, in pixels, from the upper-left pixel of the region of interest within the source image.
- `yTranslate`: A translation value for the vertical direction.
- `shearSlope`: The slope of the front edge of the sheared image, measured in a clockwise direction.
- `filter`: The resampling filter that the function uses. For more information, see [Reducing artifacts with custom resampling filters](reducing-artifacts-with-custom-resampling-filters.md).
- `backColor`: A background color. If you set the `kvImageBackgroundColorFill` flag, pass a pixel value.
- `flags`: The options to use when applying the transform.

  To specify how vImage handles pixel locations beyond the edge of the source image, set one of the following flags: [kvImageBackgroundColorFill](kvimagebackgroundcolorfill.md) or [kvImageEdgeExtend](kvimageedgeextend.md).

  If you want vImage to use a higher quality but a slower resampling filter, set the [kvImageHighQualityResampling](kvimagehighqualityresampling.md) flag.

  If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md).

  This function ignores the [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md) flag.

  If you want vImage to use faster but lower precision internal arithmetic, set the [kvImageUseFP16Accumulator](kvimageusefp16accumulator.md) flag.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes that [Data Types and Constants](data-types-and-constants.md) describes.

<a id="Discussion"></a>

## Discussion

This function uses a resampling filter that you specify to shear, resize, and translate an image in one dimension. Use the resampling filter’s scale property to resize the image and the translate parameter to adjust the position of the destination image. The function transforms as much of the source image as it needs to fill the destination buffer. Therefore, it can transform pixels outside the region of interest.

This function doesn’t work in place — that is, the source and destination buffers need to point to different memory.

## See Also

### Related Documentation

- [Applying geometric transforms to images](applying-geometric-transforms-to-images.md): Reflect, shear, rotate, and scale image buffers using vImage.

### Shearing 16-bit-per-channel buffers

- [vImageVerticalShearD_Planar16F](vimageverticalsheard_planar16f%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within a floating-point 16-bit planar image.
- [vImageVerticalShearD_CbCr16F](vimageverticalsheard_cbcr16f%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within a floating-point 16-bit-per-channel, 2-channel interleaved image.
- [vImageVerticalShearD_ARGB16U](vimageverticalsheard_argb16u%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within an unsigned 16-bit-per-channel, 4-channel interleaved image.
- [vImageVerticalShearD_ARGB16S](vimageverticalsheard_argb16s%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within a signed 16-bit-per-channel, 4-channel interleaved image.
- [vImageVerticalShearD_CbCr16S](vimageverticalsheard_cbcr16s%28__________________%29.md)
- [vImageVerticalShearD_CbCr16U](vimageverticalsheard_cbcr16u%28__________________%29.md)
- [vImageVerticalShear_CbCr16S](vimageverticalshear_cbcr16s%28__________________%29.md)
