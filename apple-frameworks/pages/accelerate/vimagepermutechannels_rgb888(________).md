> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagepermutechannels_rgb888(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagepermutechannels_rgb888(_:_:_:_:))

# vImagePermuteChannels_RGB888(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Permutes the channels of an 8-bit-per-channel, 3-channel interleaved buffer.

## Declaration

```swift
func vImagePermuteChannels_RGB888(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ permuteMap: UnsafePointer<UInt8>!, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `permuteMap`: An array of three 8-bit integers with the values `0`, `1`, and `2`, in some order. Each value specifies the channel from the source image that the function copies to the destination channel at the corresponding index.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The following code reverses the channel ordering of a pixel buffer:

```swift
let pixelBuffer = vImage.PixelBuffer<vImage.Interleaved8x3>(
    pixelValues: [10, 20, 30],
    size: .init(width: 1, height: 1))

pixelBuffer.withUnsafePointerToVImageBuffer { buf in
    _ = vImagePermuteChannels_RGB888(buf, 
                                     buf,
                                     [2, 1, 0],
                                     vImage_Flags(kvImageNoFlags))
}

// Prints "[30, 20, 10]".
print(pixelBuffer.array)
```

## See Also

### Permuting channels

- [vImagePermuteChannels_ARGB8888(\_:\_:\_:\_:)](vimagepermutechannels_argb8888%28________%29.md): Permutes the channels of an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImagePermuteChannels_ARGB16U(\_:\_:\_:\_:)](vimagepermutechannels_argb16u%28________%29.md): Permutes the channels of an unsigned 16-bit-per-channel, 4-channel interleaved buffer.
- [vImagePermuteChannels_ARGB16F(\_:\_:\_:\_:)](vimagepermutechannels_argb16f%28________%29.md): Permutes the channels of a floating-point 16-bit-per-channel, 4-channel interleaved buffer.
- [vImagePermuteChannels_ARGBFFFF(\_:\_:\_:\_:)](vimagepermutechannels_argbffff%28________%29.md): Permutes the channels of a floating-point 32-bit-per-channel, 4-channel interleaved buffer.

# vImagePermuteChannels_RGB888 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Permutes the channels of an 8-bit-per-channel, 3-channel interleaved buffer.

## Declaration

```objectivec
vImage_Error vImagePermuteChannels_RGB888(const vImage_Buffer *src, const vImage_Buffer *dest, const uint8_t permuteMap[3], vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `permuteMap`: An array of three 8-bit integers with the values `0`, `1`, and `2`, in some order. Each value specifies the channel from the source image that the function copies to the destination channel at the corresponding index.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The following code reverses the channel ordering of a pixel buffer:

```swift
let pixelBuffer = vImage.PixelBuffer<vImage.Interleaved8x3>(
    pixelValues: [10, 20, 30],
    size: .init(width: 1, height: 1))

pixelBuffer.withUnsafePointerToVImageBuffer { buf in
    _ = vImagePermuteChannels_RGB888(buf, 
                                     buf,
                                     [2, 1, 0],
                                     vImage_Flags(kvImageNoFlags))
}

// Prints "[30, 20, 10]".
print(pixelBuffer.array)
```

## See Also

### Permuting channels

- [vImagePermuteChannels_ARGB8888](vimagepermutechannels_argb8888%28________%29.md): Permutes the channels of an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImagePermuteChannels_ARGB16U](vimagepermutechannels_argb16u%28________%29.md): Permutes the channels of an unsigned 16-bit-per-channel, 4-channel interleaved buffer.
- [vImagePermuteChannels_ARGB16F](vimagepermutechannels_argb16f%28________%29.md): Permutes the channels of a floating-point 16-bit-per-channel, 4-channel interleaved buffer.
- [vImagePermuteChannels_ARGBFFFF](vimagepermutechannels_argbffff%28________%29.md): Permutes the channels of a floating-point 32-bit-per-channel, 4-channel interleaved buffer.
