> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagebufferfill_cbcr16s(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagebufferfill_cbcr16s(_:_:_:))

# vImageBufferFill_CbCr16S(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
func vImageBufferFill_CbCr16S(_ dest: UnsafePointer<vImage_Buffer>, _ color: UnsafePointer<Int16>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `dest`: A pointer to a valid and initialized vImage_Buffer struct, that points to a buffer containing destination pixels.
- `color`: A pixel value to fill the destination buffer.
- `flags`: \\P kvImageNoFlags          Default operation \\p kvImageDoNotTile        Disable internal multithreading.

<a id="return-value"></a>

## Return Value

kvImageNoError                     Success

<a id="discussion"></a>

## Discussion

Fill the dest buffer with the pixel value.

## See Also

### Filling buffers

- [vImageBufferFill_CbCr8(\_:\_:\_:)](vimagebufferfill_cbcr8%28______%29.md): Fills an 8-bit-per-channel, 2-channel interleaved buffer with a specified color.
- [vImageBufferFill_CbCr16U(\_:\_:\_:)](vimagebufferfill_cbcr16u%28______%29.md): Fills an unsigned 16-bit-per-channel, 2-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGB8888(\_:\_:\_:)](vimagebufferfill_argb8888%28______%29.md): Fills an 8-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGB16U(\_:\_:\_:)](vimagebufferfill_argb16u%28______%29.md): Fills an unsigned 16-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGB16S(\_:\_:\_:)](vimagebufferfill_argb16s%28______%29.md): Fills a signed 16-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGB16F(\_:\_:\_:)](vimagebufferfill_argb16f%28______%29.md): Fills a floating-point 16-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGBFFFF(\_:\_:\_:)](vimagebufferfill_argbffff%28______%29.md): Fills a floating-point 32-bit-per-channel, 4-channel interleaved buffer with a specified color.

# vImageBufferFill_CbCr16S (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```objectivec
vImage_Error vImageBufferFill_CbCr16S(const vImage_Buffer *dest, const Pixel_16S16S color, vImage_Flags flags);
```

## Parameters

- `dest`: A pointer to a valid and initialized vImage_Buffer struct, that points to a buffer containing destination pixels.
- `color`: A pixel value to fill the destination buffer.
- `flags`: \\P kvImageNoFlags          Default operation \\p kvImageDoNotTile        Disable internal multithreading.

<a id="return-value"></a>

## Return Value

kvImageNoError                     Success

<a id="discussion"></a>

## Discussion

Fill the dest buffer with the pixel value.

## See Also

### Filling buffers

- [vImageBufferFill_CbCr8](vimagebufferfill_cbcr8%28______%29.md): Fills an 8-bit-per-channel, 2-channel interleaved buffer with a specified color.
- [vImageBufferFill_CbCr16U](vimagebufferfill_cbcr16u%28______%29.md): Fills an unsigned 16-bit-per-channel, 2-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGB8888](vimagebufferfill_argb8888%28______%29.md): Fills an 8-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGB16U](vimagebufferfill_argb16u%28______%29.md): Fills an unsigned 16-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGB16S](vimagebufferfill_argb16s%28______%29.md): Fills a signed 16-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGB16F](vimagebufferfill_argb16f%28______%29.md): Fills a floating-point 16-bit-per-channel, 4-channel interleaved buffer with a specified color.
- [vImageBufferFill_ARGBFFFF](vimagebufferfill_argbffff%28______%29.md): Fills a floating-point 32-bit-per-channel, 4-channel interleaved buffer with a specified color.
