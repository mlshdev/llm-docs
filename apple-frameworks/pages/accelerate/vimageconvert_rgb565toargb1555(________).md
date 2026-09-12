> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_rgb565toargb1555(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_rgb565toargb1555(_:_:_:_:))

# vImageConvert_RGB565toARGB1555(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce a 4-channel ARGB1555 buffer.

## Declaration

```swift
func vImageConvert_RGB565toARGB1555(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ dither: Int32, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `dither`: The dithering algorithm.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

This function supports the following dithering algorithms:

- **[kvImageConvert_DitherNone](kvimageconvert_dithernone.md)**: Doesn’t apply any dithering. This algorithm rounds the input values to the nearest representable value in the destination format.
- **[kvImageConvert_DitherOrdered](kvimageconvert_ditherordered.md)**: Adds precomputed blue noise to the source image before it rounds the input values to the nearest representable value in the destination format. The vImage conversion functions support uniform and Gaussian noise by including [kvImageConvert_OrderedUniformBlue](kvimageconvert_ordereduniformblue.md) and [kvImageConvert_OrderedGaussianBlue](kvimageconvert_orderedgaussianblue.md), respectively.
- **[kvImageConvert_DitherOrderedReproducible](kvimageconvert_ditherorderedreproducible.md)**: Returns the same result as [kvImageConvert_DitherOrdered](kvimageconvert_ditherordered.md), but uses the same offset into the blue noise for each call.
- **[kvImageConvert_DitherFloydSteinberg](kvimageconvert_ditherfloydsteinberg.md)**: Applies Floyd-Steinberg dithering to the image.
- **[kvImageConvert_DitherAtkinson](kvimageconvert_ditheratkinson.md)**: Applies Atkinson dithering to the image.

## See Also

### Related Documentation

- [Improving the quality of quantized images with dithering](improving-the-quality-of-quantized-images-with-dithering.md): Apply dithering to simulate colors that are unavailable in reduced bit depths.

### Conversion from RGB565 16-bit-per-channel, 3-channel interleaved buffers

- [vImageConvert_RGB565toARGB8888(\_:\_:\_:\_:)](vimageconvert_rgb565toargb8888%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_RGB565toBGRA8888(\_:\_:\_:\_:)](vimageconvert_rgb565tobgra8888%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce an 8-bit-per-channel, 4-channel BGRA buffer.
- [vImageConvert_RGB565toRGBA8888(\_:\_:\_:\_:)](vimageconvert_rgb565torgba8888%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce an 8-bit-per-channel, 4-channel RGBA buffer.
- [vImageConvert_RGB565toRGBA5551(\_:\_:\_:\_:)](vimageconvert_rgb565torgba5551%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce a 4-channel RGBA5551 buffer.

# vImageConvert_RGB565toARGB1555 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce a 4-channel ARGB1555 buffer.

## Declaration

```objectivec
vImage_Error vImageConvert_RGB565toARGB1555(const vImage_Buffer *src, const vImage_Buffer *dest, int dither, vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `dither`: The dithering algorithm.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

This function supports the following dithering algorithms:

- **[kvImageConvert_DitherNone](kvimageconvert_dithernone.md)**: Doesn’t apply any dithering. This algorithm rounds the input values to the nearest representable value in the destination format.
- **[kvImageConvert_DitherOrdered](kvimageconvert_ditherordered.md)**: Adds precomputed blue noise to the source image before it rounds the input values to the nearest representable value in the destination format. The vImage conversion functions support uniform and Gaussian noise by including [kvImageConvert_OrderedUniformBlue](kvimageconvert_ordereduniformblue.md) and [kvImageConvert_OrderedGaussianBlue](kvimageconvert_orderedgaussianblue.md), respectively.
- **[kvImageConvert_DitherOrderedReproducible](kvimageconvert_ditherorderedreproducible.md)**: Returns the same result as [kvImageConvert_DitherOrdered](kvimageconvert_ditherordered.md), but uses the same offset into the blue noise for each call.
- **[kvImageConvert_DitherFloydSteinberg](kvimageconvert_ditherfloydsteinberg.md)**: Applies Floyd-Steinberg dithering to the image.
- **[kvImageConvert_DitherAtkinson](kvimageconvert_ditheratkinson.md)**: Applies Atkinson dithering to the image.

## See Also

### Related Documentation

- [Improving the quality of quantized images with dithering](improving-the-quality-of-quantized-images-with-dithering.md): Apply dithering to simulate colors that are unavailable in reduced bit depths.

### Conversion from RGB565 16-bit-per-channel, 3-channel interleaved buffers

- [vImageConvert_RGB565toARGB8888](vimageconvert_rgb565toargb8888%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce an 8-bit-per-channel, 4-channel ARGB buffer.
- [vImageConvert_RGB565toBGRA8888](vimageconvert_rgb565tobgra8888%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce an 8-bit-per-channel, 4-channel BGRA buffer.
- [vImageConvert_RGB565toRGBA8888](vimageconvert_rgb565torgba8888%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce an 8-bit-per-channel, 4-channel RGBA buffer.
- [vImageConvert_RGB565toRGBA5551](vimageconvert_rgb565torgba5551%28________%29.md): Combines an RGB565 3-channel RGB buffer and a constant alpha value to produce a 4-channel RGBA5551 buffer.
