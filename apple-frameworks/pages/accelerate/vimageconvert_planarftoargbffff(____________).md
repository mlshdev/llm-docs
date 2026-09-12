> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_planarftoargbffff(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_planarftoargbffff(_:_:_:_:_:_:))

# vImageConvert_PlanarFtoARGBFFFF(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Interleaves four floating-point 32-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel ARGB interleaved buffer.

## Declaration

```swift
func vImageConvert_PlanarFtoARGBFFFF(_ srcA: UnsafePointer<vImage_Buffer>, _ srcR: UnsafePointer<vImage_Buffer>, _ srcG: UnsafePointer<vImage_Buffer>, _ srcB: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `srcA`: The source vImage buffer that contains the alpha channel.
- `srcR`: The source vImage buffer that contains the red channel.
- `srcG`: The source vImage buffer that contains the green channel.
- `srcB`: The source vImage buffer that contains the blue channel.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The source and destination buffers need to have the same height and width.

## See Also

### Interleaving four floating-point 32-bit planar buffers

- [vImageConvert_PlanarFToARGB8888(\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvert_planarftoargb8888%28________________%29.md): Interleaves four 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImageConvert_PlanarFToBGRXFFFF(\_:\_:\_:\_:\_:\_:)](vimageconvert_planarftobgrxffff%28____________%29.md): Interleaves four floating-point 32-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel BGRXARGB interleaved buffer.

# vImageConvert_PlanarFtoARGBFFFF (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Interleaves four floating-point 32-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel ARGB interleaved buffer.

## Declaration

```objectivec
vImage_Error vImageConvert_PlanarFtoARGBFFFF(const vImage_Buffer *srcA, const vImage_Buffer *srcR, const vImage_Buffer *srcG, const vImage_Buffer *srcB, const vImage_Buffer *dest, vImage_Flags flags);
```

## Parameters

- `srcA`: The source vImage buffer that contains the alpha channel.
- `srcR`: The source vImage buffer that contains the red channel.
- `srcG`: The source vImage buffer that contains the green channel.
- `srcB`: The source vImage buffer that contains the blue channel.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The source and destination buffers need to have the same height and width.

## See Also

### Interleaving four floating-point 32-bit planar buffers

- [vImageConvert_PlanarFToARGB8888](vimageconvert_planarftoargb8888%28________________%29.md): Interleaves four 32-bit planar buffers into an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImageConvert_PlanarFToBGRXFFFF](vimageconvert_planarftobgrxffff%28____________%29.md): Interleaves four floating-point 32-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel BGRXARGB interleaved buffer.
