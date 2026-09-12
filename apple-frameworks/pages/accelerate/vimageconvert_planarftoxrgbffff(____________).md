> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_planarftoxrgbffff(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_planarftoxrgbffff(_:_:_:_:_:_:))

# vImageConvert_PlanarFToXRGBFFFF(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Interleaves three 32-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.

## Declaration

```swift
func vImageConvert_PlanarFToXRGBFFFF(_ alpha: Pixel_F, _ red: UnsafePointer<vImage_Buffer>, _ green: UnsafePointer<vImage_Buffer>, _ blue: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `alpha`: The constant destination alpha value.
- `red`: The source vImage buffer that contains the red channel.
- `green`: The source vImage buffer that contains the green channel.
- `blue`: The source vImage buffer that contains the blue channel.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

This routine can’t be place.

## See Also

### Interleaving three floating-point 32-bit planar buffers

- [vImageConvert_PlanarFToBGRX8888(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_planarftobgrx8888%28________________%29.md): Interleaves three 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved BGRX buffer with the specified constant alpha value.
- [vImageConvert_PlanarFToXRGB8888(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_planarftoxrgb8888%28________________%29.md): Interleaves three 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.
- [vImageConvert_PlanarFtoRGBFFF(\_:\_:\_:\_:\_:)](vimageconvert_planarftorgbfff%28__________%29.md): Interleaves three floating-point 32-bit planar buffers into a floating-point 32-bit-per-channel, 3-channel interleaved buffer.

# vImageConvert_PlanarFToXRGBFFFF (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Interleaves three 32-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.

## Declaration

```objectivec
vImage_Error vImageConvert_PlanarFToXRGBFFFF(Pixel_F alpha, const vImage_Buffer *red, const vImage_Buffer *green, const vImage_Buffer *blue, const vImage_Buffer *dest, vImage_Flags flags);
```

## Parameters

- `alpha`: The constant destination alpha value.
- `red`: The source vImage buffer that contains the red channel.
- `green`: The source vImage buffer that contains the green channel.
- `blue`: The source vImage buffer that contains the blue channel.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

This routine can’t be place.

## See Also

### Interleaving three floating-point 32-bit planar buffers

- [vImageConvert_PlanarFToBGRX8888](vimageconvert_planarftobgrx8888%28________________%29.md): Interleaves three 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved BGRX buffer with the specified constant alpha value.
- [vImageConvert_PlanarFToRGBX8888](vimageconvert_planarftorgbx8888.md): Interleaves three 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved RGBX buffer with the specified constant alpha value.
- [vImageConvert_PlanarFToXRGB8888](vimageconvert_planarftoxrgb8888%28________________%29.md): Interleaves three 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.
- [vImageConvert_PlanarFtoRGBFFF](vimageconvert_planarftorgbfff%28__________%29.md): Interleaves three floating-point 32-bit planar buffers into a floating-point 32-bit-per-channel, 3-channel interleaved buffer.
- [vImageConvert_PlanarFToRGBXFFFF](vimageconvert_planarftorgbxffff.md): Interleaves three 32-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved RGBX buffer with the specified constant alpha value.
