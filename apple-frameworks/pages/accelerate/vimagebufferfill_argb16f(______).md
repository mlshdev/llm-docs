> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagebufferfill_argb16f(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagebufferfill_argb16f(_:_:_:))

# vImageBufferFill_ARGB16F(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Fills a floating-point 16-bit-per-channel, 4-channel interleaved buffer with a specified color.

## Declaration

```swift
func vImageBufferFill_ARGB16F(_ dest: UnsafePointer<vImage_Buffer>, _ color: UnsafePointer<UInt16>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `color`: The fill color.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The following code fills the buffer with the specified color:

```swift
let pixelBuffer = vImage.PixelBuffer<vImage.Interleaved16Fx4>(
    size: .init(width: 1, height: 2))

let fillColor: [Pixel_16F] = [64, 127, 192, 255]

pixelBuffer.withUnsafePointerToVImageBuffer { buf in
    _ = vImageBufferFill_ARGB16F(buf,
                                 fillColor,
                                 vImage_Flags(kvImageNoFlags))
}

print(pixelBuffer.array)
// Prints:
//      "[64, 127, 192, 255,
//        64, 127, 192, 255]"
```

## See Also

### Filling buffers

- [vImageBufferFill_CbCr8(\_:\_:\_:)](vimagebufferfill_cbcr8%28______%29.md): Fills an 8-bit-per-channel, 2-channel interleaved buffer with a specified color.
- [vImageBufferFill_CbCr16U(\_:\_:\_:)](vimagebufferfill_cbcr16u%28______%29.md): Fills an unsigned 16-bit-per-channel, 2-channel interleaved buffer with a specified color.
- [vImageBufferFill_CbCr16S(\_:\_:\_:)](vimagebufferfill_cbcr16s%28______%29.md)
- [vImageBufferFill_ARGB8888(\_:\_:\_:)](vimagebufferfill_argb8888%28______%29.md): Fills an 8-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGB16U(\_:\_:\_:)](vimagebufferfill_argb16u%28______%29.md): Fills an unsigned 16-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGB16S(\_:\_:\_:)](vimagebufferfill_argb16s%28______%29.md): Fills a signed 16-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGBFFFF(\_:\_:\_:)](vimagebufferfill_argbffff%28______%29.md): Fills a floating-point 32-bit-per-channel, 4-channel interleaved buffer with a specified color.

# vImageBufferFill_ARGB16F (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Fills a floating-point 16-bit-per-channel, 4-channel interleaved buffer with a specified color.

## Declaration

```objectivec
vImage_Error vImageBufferFill_ARGB16F(const vImage_Buffer *dest, const Pixel_ARGB_16F color, vImage_Flags flags);
```

## Parameters

- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `color`: The fill color.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The following code fills the buffer with the specified color:

```swift
let pixelBuffer = vImage.PixelBuffer<vImage.Interleaved16Fx4>(
    size: .init(width: 1, height: 2))

let fillColor: [Pixel_16F] = [64, 127, 192, 255]

pixelBuffer.withUnsafePointerToVImageBuffer { buf in
    _ = vImageBufferFill_ARGB16F(buf,
                                 fillColor,
                                 vImage_Flags(kvImageNoFlags))
}

print(pixelBuffer.array)
// Prints:
//      "[64, 127, 192, 255,
//        64, 127, 192, 255]"
```

## See Also

### Filling buffers

- [vImageBufferFill_CbCr8](vimagebufferfill_cbcr8%28______%29.md): Fills an 8-bit-per-channel, 2-channel interleaved buffer with a specified color.
- [vImageBufferFill_CbCr16U](vimagebufferfill_cbcr16u%28______%29.md): Fills an unsigned 16-bit-per-channel, 2-channel interleaved buffer with a specified color.
- [vImageBufferFill_CbCr16S](vimagebufferfill_cbcr16s%28______%29.md)
- [vImageBufferFill_ARGB8888](vimagebufferfill_argb8888%28______%29.md): Fills an 8-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGB16U](vimagebufferfill_argb16u%28______%29.md): Fills an unsigned 16-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGB16S](vimagebufferfill_argb16s%28______%29.md): Fills a signed 16-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGBFFFF](vimagebufferfill_argbffff%28______%29.md): Fills a floating-point 32-bit-per-channel, 4-channel interleaved buffer with a specified color.
