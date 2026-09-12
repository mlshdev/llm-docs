> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_planarftorgbfff(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_planarftorgbfff(_:_:_:_:_:))

# vImageConvert_PlanarFtoRGBFFF(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Interleaves three floating-point 32-bit planar buffers into a floating-point 32-bit-per-channel, 3-channel interleaved buffer.

## Declaration

```swift
func vImageConvert_PlanarFtoRGBFFF(_ planarRed: UnsafePointer<vImage_Buffer>, _ planarGreen: UnsafePointer<vImage_Buffer>, _ planarBlue: UnsafePointer<vImage_Buffer>, _ rgbDest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `planarRed`: The source vImage buffer that contains the red channel.
- `planarGreen`: The source vImage buffer that contains the green channel.
- `planarBlue`: The source vImage buffer that contains the blue channel.
- `rgbDest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The source and destination buffers need to have the same height and width.

## See Also

### Interleaving three floating-point 32-bit planar buffers

- [vImageConvert_PlanarFToBGRX8888(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_planarftobgrx8888%28________________%29.md): Interleaves three 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved BGRX buffer with the specified constant alpha value.
- [vImageConvert_PlanarFToXRGB8888(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_planarftoxrgb8888%28________________%29.md): Interleaves three 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.
- [vImageConvert_PlanarFToXRGBFFFF(\_:\_:\_:\_:\_:\_:)](vimageconvert_planarftoxrgbffff%28____________%29.md): Interleaves three 32-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.

# vImageConvert_PlanarFtoRGBFFF (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Interleaves three floating-point 32-bit planar buffers into a floating-point 32-bit-per-channel, 3-channel interleaved buffer.

## Declaration

```objectivec
vImage_Error vImageConvert_PlanarFtoRGBFFF(const vImage_Buffer *planarRed, const vImage_Buffer *planarGreen, const vImage_Buffer *planarBlue, const vImage_Buffer *rgbDest, vImage_Flags flags);
```

## Parameters

- `planarRed`: The source vImage buffer that contains the red channel.
- `planarGreen`: The source vImage buffer that contains the green channel.
- `planarBlue`: The source vImage buffer that contains the blue channel.
- `rgbDest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The source and destination buffers need to have the same height and width.

## See Also

### Interleaving three floating-point 32-bit planar buffers

- [vImageConvert_PlanarFToBGRX8888](vimageconvert_planarftobgrx8888%28________________%29.md): Interleaves three 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved BGRX buffer with the specified constant alpha value.
- [vImageConvert_PlanarFToRGBX8888](vimageconvert_planarftorgbx8888.md): Interleaves three 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved RGBX buffer with the specified constant alpha value.
- [vImageConvert_PlanarFToXRGB8888](vimageconvert_planarftoxrgb8888%28________________%29.md): Interleaves three 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.
- [vImageConvert_PlanarFToRGBXFFFF](vimageconvert_planarftorgbxffff.md): Interleaves three 32-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved RGBX buffer with the specified constant alpha value.
- [vImageConvert_PlanarFToXRGBFFFF](vimageconvert_planarftoxrgbffff%28____________%29.md): Interleaves three 32-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved XRGB buffer with the specified constant alpha value.
