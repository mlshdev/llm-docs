> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagepremultiplydata_rgba16u(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagepremultiplydata_rgba16u(_:_:_:))

# vImagePremultiplyData_RGBA16U(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 6.0+ · visionOS 1.0+ · watchOS 1.0+

Transforms an unsigned 16-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.

## Declaration

```swift
func vImagePremultiplyData_RGBA16U(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

This function multiplies color channels by the alpha channel using the following code:

```swift
uint16_t destColor = (src * alpha + 32767) / 65535;
uint16_t destAlpha = alpha;
```

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Converting from unpremultiplied to premultiplied format

- [vImagePremultiplyData_Planar8(\_:\_:\_:\_:)](vimagepremultiplydata_planar8%28________%29.md): Transforms an 8-bit planar buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_PlanarF(\_:\_:\_:\_:)](vimagepremultiplydata_planarf%28________%29.md): Transforms a 32-bit planar buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGB8888(\_:\_:\_:)](vimagepremultiplydata_argb8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA8888(\_:\_:\_:)](vimagepremultiplydata_rgba8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGB16U(\_:\_:\_:)](vimagepremultiplydata_argb16u%28______%29.md): Transforms an unsigned 16-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA16F(\_:\_:\_:)](vimagepremultiplydata_rgba16f%28______%29.md): Transforms a floating-point 16-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGB16Q12(\_:\_:\_:)](vimagepremultiplydata_argb16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA16Q12(\_:\_:\_:)](vimagepremultiplydata_rgba16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGBFFFF(\_:\_:\_:)](vimagepremultiplydata_argbffff%28______%29.md): Transforms a floating-point 32-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBAFFFF(\_:\_:\_:)](vimagepremultiplydata_rgbaffff%28______%29.md): Transforms a floating-point 32-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.

# vImagePremultiplyData_RGBA16U (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 6.0+ · visionOS 1.0+ · watchOS 1.0+

Transforms an unsigned 16-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.

## Declaration

```objectivec
vImage_Error vImagePremultiplyData_RGBA16U(const vImage_Buffer *src, const vImage_Buffer *dest, vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

This function multiplies color channels by the alpha channel using the following code:

```swift
uint16_t destColor = (src * alpha + 32767) / 65535;
uint16_t destAlpha = alpha;
```

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Converting from unpremultiplied to premultiplied format

- [vImagePremultiplyData_Planar8](vimagepremultiplydata_planar8%28________%29.md): Transforms an 8-bit planar buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_PlanarF](vimagepremultiplydata_planarf%28________%29.md): Transforms a 32-bit planar buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGB8888](vimagepremultiplydata_argb8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA8888](vimagepremultiplydata_rgba8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_BGRA8888](vimagepremultiplydata_bgra8888.md): Transforms an 8-bit-per-channel, 4-channel BGRA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGB16U](vimagepremultiplydata_argb16u%28______%29.md): Transforms an unsigned 16-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA16F](vimagepremultiplydata_rgba16f%28______%29.md): Transforms a floating-point 16-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGB16Q12](vimagepremultiplydata_argb16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA16Q12](vimagepremultiplydata_rgba16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGBFFFF](vimagepremultiplydata_argbffff%28______%29.md): Transforms a floating-point 32-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBAFFFF](vimagepremultiplydata_rgbaffff%28______%29.md): Transforms a floating-point 32-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_BGRAFFFF](vimagepremultiplydata_bgraffff.md): Transforms a floating-point 32-bit-per-channel, 4-channel BGRA buffer from nonpremultiplied alpha format to premultiplied alpha format.
