> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_planar8toxrgbffff(_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_planar8toxrgbffff(_:_:_:_:_:_:_:_:))

# vImageConvert_Planar8ToXRGBFFFF(\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Interleaves three 8-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.

## Declaration

```swift
func vImageConvert_Planar8ToXRGBFFFF(_ alpha: Pixel_F, _ red: UnsafePointer<vImage_Buffer>, _ green: UnsafePointer<vImage_Buffer>, _ blue: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ maxFloat: UnsafePointer<Float>!, _ minFloat: UnsafePointer<Float>!, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `alpha`: The constant destination alpha value.
- `red`: The source vImage buffer that contains the red channel.
- `green`: The source vImage buffer that contains the green channel.
- `blue`: The source vImage buffer that contains the blue channel.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `maxFloat`: The maximum pixel value for the destination image.
- `minFloat`: The minimum pixel value for the destination image.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The source and destination buffers need to have the same height and width.

## See Also

### Interleaving three unsigned 8-bit planar buffers

- [vImageConvert_Planar8toRGB565(\_:\_:\_:\_:\_:)](vimageconvert_planar8torgb565%28__________%29.md): Interleaves three 8-bit planar buffers into an RGB565 3-channel interleaved buffer.
- [vImageConvert_Planar8toRGB888(\_:\_:\_:\_:\_:)](vimageconvert_planar8torgb888%28__________%29.md): Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 3-channel interleaved buffer.
- [vImageConvert_Planar8ToXRGB8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_planar8toxrgb8888%28____________%29.md): Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToBGRX8888(\_:\_:\_:\_:\_:\_:)](vimageconvert_planar8tobgrx8888%28____________%29.md): Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved BGRX buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToBGRXFFFF(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_planar8tobgrxffff%28________________%29.md): Interleaves three 8-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved BGRX buffer with the specified constant alpha value.

# vImageConvert_Planar8ToXRGBFFFF (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Interleaves three 8-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.

## Declaration

```objectivec
vImage_Error vImageConvert_Planar8ToXRGBFFFF(Pixel_F alpha, const vImage_Buffer *red, const vImage_Buffer *green, const vImage_Buffer *blue, const vImage_Buffer *dest, const Pixel_FFFF maxFloat, const Pixel_FFFF minFloat, vImage_Flags flags);
```

## Parameters

- `alpha`: The constant destination alpha value.
- `red`: The source vImage buffer that contains the red channel.
- `green`: The source vImage buffer that contains the green channel.
- `blue`: The source vImage buffer that contains the blue channel.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `maxFloat`: The maximum pixel value for the destination image.
- `minFloat`: The minimum pixel value for the destination image.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The source and destination buffers need to have the same height and width.

## See Also

### Interleaving three unsigned 8-bit planar buffers

- [vImageConvert_Planar8toRGB565](vimageconvert_planar8torgb565%28__________%29.md): Interleaves three 8-bit planar buffers into an RGB565 3-channel interleaved buffer.
- [vImageConvert_Planar8toRGB888](vimageconvert_planar8torgb888%28__________%29.md): Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 3-channel interleaved buffer.
- [vImageConvert_Planar8ToXRGB8888](vimageconvert_planar8toxrgb8888%28____________%29.md): Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToRGBX8888](vimageconvert_planar8torgbx8888.md): Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved RGBX buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToBGRX8888](vimageconvert_planar8tobgrx8888%28____________%29.md): Interleaves three 8-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved BGRX buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToBGRXFFFF](vimageconvert_planar8tobgrxffff%28________________%29.md): Interleaves three 8-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved BGRX buffer with the specified constant alpha value.
- [vImageConvert_Planar8ToRGBXFFFF](vimageconvert_planar8torgbxffff.md): Interleaves three 8-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved RGBX buffer with the specified constant alpha value.
