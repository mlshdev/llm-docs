> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagepermutechannels_argb16f(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagepermutechannels_argb16f(_:_:_:_:))

# vImagePermuteChannels_ARGB16F(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Permutes the channels of a floating-point 16-bit-per-channel, 4-channel interleaved buffer.

## Declaration

```swift
func vImagePermuteChannels_ARGB16F(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ permuteMap: UnsafePointer<UInt8>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `permuteMap`: An array of four 8-bit integers with the values `0`, `1`, `2`, and 3, in some order. Each value specifies the channel from the source image that the function copies to the destination channel at the corresponding index.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The following code reverses the channel ordering of a pixel buffer:

```swift
let pixelBuffer = vImage.PixelBuffer<vImage.Interleaved16Fx4>(
    pixelValues: [10, 20, 30, 40],
    size: .init(width: 1, height: 1))

pixelBuffer.withUnsafePointerToVImageBuffer { buf in
    _ = vImagePermuteChannels_ARGB16F(buf,
                                      buf,
                                      [3, 2, 1, 0],
                                      vImage_Flags(kvImageNoFlags))
}

// Prints "[40, 30, 20, 10]".
print(pixelBuffer.array)
```

## See Also

### Permuting channels

- [vImagePermuteChannels_RGB888(\_:\_:\_:\_:)](vimagepermutechannels_rgb888%28________%29.md): Permutes the channels of an 8-bit-per-channel, 3-channel interleaved buffer.
- [vImagePermuteChannels_ARGB8888(\_:\_:\_:\_:)](vimagepermutechannels_argb8888%28________%29.md): Permutes the channels of an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImagePermuteChannels_ARGB16U(\_:\_:\_:\_:)](vimagepermutechannels_argb16u%28________%29.md): Permutes the channels of an unsigned 16-bit-per-channel, 4-channel interleaved buffer.
- [vImagePermuteChannels_ARGBFFFF(\_:\_:\_:\_:)](vimagepermutechannels_argbffff%28________%29.md): Permutes the channels of a floating-point 32-bit-per-channel, 4-channel interleaved buffer.

# vImagePermuteChannels_ARGB16F (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Permutes the channels of a floating-point 16-bit-per-channel, 4-channel interleaved buffer.

## Declaration

```objectivec
vImage_Error vImagePermuteChannels_ARGB16F(const vImage_Buffer *src, const vImage_Buffer *dest, const uint8_t permuteMap[4], vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `permuteMap`: An array of four 8-bit integers with the values `0`, `1`, `2`, and 3, in some order. Each value specifies the channel from the source image that the function copies to the destination channel at the corresponding index.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The following code reverses the channel ordering of a pixel buffer:

```swift
let pixelBuffer = vImage.PixelBuffer<vImage.Interleaved16Fx4>(
    pixelValues: [10, 20, 30, 40],
    size: .init(width: 1, height: 1))

pixelBuffer.withUnsafePointerToVImageBuffer { buf in
    _ = vImagePermuteChannels_ARGB16F(buf,
                                      buf,
                                      [3, 2, 1, 0],
                                      vImage_Flags(kvImageNoFlags))
}

// Prints "[40, 30, 20, 10]".
print(pixelBuffer.array)
```

## See Also

### Permuting channels

- [vImagePermuteChannels_RGB888](vimagepermutechannels_rgb888%28________%29.md): Permutes the channels of an 8-bit-per-channel, 3-channel interleaved buffer.
- [vImagePermuteChannels_ARGB8888](vimagepermutechannels_argb8888%28________%29.md): Permutes the channels of an 8-bit-per-channel, 4-channel interleaved buffer.
- [vImagePermuteChannels_ARGB16U](vimagepermutechannels_argb16u%28________%29.md): Permutes the channels of an unsigned 16-bit-per-channel, 4-channel interleaved buffer.
- [vImagePermuteChannels_ARGBFFFF](vimagepermutechannels_argbffff%28________%29.md): Permutes the channels of a floating-point 32-bit-per-channel, 4-channel interleaved buffer.
