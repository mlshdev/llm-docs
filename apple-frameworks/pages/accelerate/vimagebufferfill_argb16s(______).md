> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagebufferfill_argb16s(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagebufferfill_argb16s(_:_:_:))

# vImageBufferFill_ARGB16S(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Fills a signed 16-bit-per-channel, 4-channel interleaved buffer with a specified color.

## Declaration

```swift
func vImageBufferFill_ARGB16S(_ dest: UnsafePointer<vImage_Buffer>, _ color: UnsafePointer<Int16>, _ flags: vImage_Flags) -> vImage_Error
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
var buffer = vImage_Buffer()
vImageBuffer_Init(&buffer,
                  2, 1,
                  16,
                  vImage_Flags(kvImageNoFlags))
defer {
    buffer.data.deallocate()
}

let fillColor: [Pixel_16S] = [64, 127, 192, 255]

vImageBufferFill_ARGB16S(&buffer,
                         fillColor,
                         vImage_Flags(kvImageNoFlags))

let pixelValues = UnsafeMutableBufferPointer(
    start: buffer.data.assumingMemoryBound(to: Pixel_16S.self),
    count: 8)

// Prints:
//      "[64, 127, 192, 255,
//        64, 127, 192, 255]"
print(Array(pixelValues))
```

## See Also

### Filling buffers

- [vImageBufferFill_CbCr8(\_:\_:\_:)](vimagebufferfill_cbcr8%28______%29.md): Fills an 8-bit-per-channel, 2-channel interleaved buffer with a specified color.
- [vImageBufferFill_CbCr16U(\_:\_:\_:)](vimagebufferfill_cbcr16u%28______%29.md): Fills an unsigned 16-bit-per-channel, 2-channel interleaved buffer with a specified color.
- [vImageBufferFill_CbCr16S(\_:\_:\_:)](vimagebufferfill_cbcr16s%28______%29.md)
- [vImageBufferFill_ARGB8888(\_:\_:\_:)](vimagebufferfill_argb8888%28______%29.md): Fills an 8-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGB16U(\_:\_:\_:)](vimagebufferfill_argb16u%28______%29.md): Fills an unsigned 16-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGB16F(\_:\_:\_:)](vimagebufferfill_argb16f%28______%29.md): Fills a floating-point 16-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGBFFFF(\_:\_:\_:)](vimagebufferfill_argbffff%28______%29.md): Fills a floating-point 32-bit-per-channel, 4-channel interleaved buffer with a specified color.

# vImageBufferFill_ARGB16S (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Fills a signed 16-bit-per-channel, 4-channel interleaved buffer with a specified color.

## Declaration

```objectivec
vImage_Error vImageBufferFill_ARGB16S(const vImage_Buffer *dest, const Pixel_ARGB_16S color, vImage_Flags flags);
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
var buffer = vImage_Buffer()
vImageBuffer_Init(&buffer,
                  2, 1,
                  16,
                  vImage_Flags(kvImageNoFlags))
defer {
    buffer.data.deallocate()
}

let fillColor: [Pixel_16S] = [64, 127, 192, 255]

vImageBufferFill_ARGB16S(&buffer,
                         fillColor,
                         vImage_Flags(kvImageNoFlags))

let pixelValues = UnsafeMutableBufferPointer(
    start: buffer.data.assumingMemoryBound(to: Pixel_16S.self),
    count: 8)

// Prints:
//      "[64, 127, 192, 255,
//        64, 127, 192, 255]"
print(Array(pixelValues))
```

## See Also

### Filling buffers

- [vImageBufferFill_CbCr8](vimagebufferfill_cbcr8%28______%29.md): Fills an 8-bit-per-channel, 2-channel interleaved buffer with a specified color.
- [vImageBufferFill_CbCr16U](vimagebufferfill_cbcr16u%28______%29.md): Fills an unsigned 16-bit-per-channel, 2-channel interleaved buffer with a specified color.
- [vImageBufferFill_CbCr16S](vimagebufferfill_cbcr16s%28______%29.md)
- [vImageBufferFill_ARGB8888](vimagebufferfill_argb8888%28______%29.md): Fills an 8-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGB16U](vimagebufferfill_argb16u%28______%29.md): Fills an unsigned 16-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGB16F](vimagebufferfill_argb16f%28______%29.md): Fills a floating-point 16-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGBFFFF](vimagebufferfill_argbffff%28______%29.md): Fills a floating-point 32-bit-per-channel, 4-channel interleaved buffer with a specified color.
