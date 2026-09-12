> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageverticalshear_cbcr16s(_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageverticalshear_cbcr16s(_:_:_:_:_:_:_:_:_:))

# vImageVerticalShear_CbCr16S(\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
func vImageVerticalShear_CbCr16S(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ srcOffsetToROI_X: vImagePixelCount, _ srcOffsetToROI_Y: vImagePixelCount, _ yTranslate: Float, _ shearSlope: Float, _ filter: ResamplingFilter!, _ backColor: UnsafePointer<Int16>!, _ flags: vImage_Flags) -> vImage_Error
```

## See Also

### Shearing 16-bit-per-channel buffers

- [vImageVerticalShearD_Planar16F(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageverticalsheard_planar16f%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within a floating-point 16-bit planar image.
- [vImageVerticalShearD_CbCr16F(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageverticalsheard_cbcr16f%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within a floating-point 16-bit-per-channel, 2-channel interleaved image.
- [vImageVerticalShearD_ARGB16U(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageverticalsheard_argb16u%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within an unsigned 16-bit-per-channel, 4-channel interleaved image.
- [vImageVerticalShearD_ARGB16S(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageverticalsheard_argb16s%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within a signed 16-bit-per-channel, 4-channel interleaved image.
- [vImageVerticalShearD_ARGB16F(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageverticalsheard_argb16f%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within a floating-point 16-bit-per-channel, 4-channel interleaved image.
- [vImageVerticalShearD_CbCr16S(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageverticalsheard_cbcr16s%28__________________%29.md)
- [vImageVerticalShearD_CbCr16U(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageverticalsheard_cbcr16u%28__________________%29.md)

# vImageVerticalShear_CbCr16S (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```objectivec
vImage_Error vImageVerticalShear_CbCr16S(const vImage_Buffer *src, const vImage_Buffer *dest, vImagePixelCount srcOffsetToROI_X, vImagePixelCount srcOffsetToROI_Y, float yTranslate, float shearSlope, ResamplingFilter filter, const Pixel_16S16S backColor, vImage_Flags flags);
```

## See Also

### Shearing 16-bit-per-channel buffers

- [vImageVerticalShearD_Planar16F](vimageverticalsheard_planar16f%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within a floating-point 16-bit planar image.
- [vImageVerticalShearD_CbCr16F](vimageverticalsheard_cbcr16f%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within a floating-point 16-bit-per-channel, 2-channel interleaved image.
- [vImageVerticalShearD_ARGB16U](vimageverticalsheard_argb16u%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within an unsigned 16-bit-per-channel, 4-channel interleaved image.
- [vImageVerticalShearD_ARGB16S](vimageverticalsheard_argb16s%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within a signed 16-bit-per-channel, 4-channel interleaved image.
- [vImageVerticalShearD_ARGB16F](vimageverticalsheard_argb16f%28__________________%29.md): Performs a double-precision vertical shear on a region of interest within a floating-point 16-bit-per-channel, 4-channel interleaved image.
- [vImageVerticalShearD_CbCr16S](vimageverticalsheard_cbcr16s%28__________________%29.md)
- [vImageVerticalShearD_CbCr16U](vimageverticalsheard_cbcr16u%28__________________%29.md)
