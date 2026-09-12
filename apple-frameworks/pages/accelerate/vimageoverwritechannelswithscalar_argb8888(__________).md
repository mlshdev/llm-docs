> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageoverwritechannelswithscalar_argb8888(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageoverwritechannelswithscalar_argb8888(_:_:_:_:_:))

# vImageOverwriteChannelsWithScalar_ARGB8888(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Overwrites the selected channels of an 8-bit-per-channel, 4-channel interleaved buffer with the specified scalar value.

## Declaration

```swift
func vImageOverwriteChannelsWithScalar_ARGB8888(_ scalar: Pixel_8, _ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ copyMask: UInt8, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `scalar`: The scalar value that provides the new channel values.
- `src`: The source vImage buffer that provides the original pixel values.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `copyMask`: A bitmask that specifies the channel or channels that the function overwrites with the scalar value. The value `0x8` represents channel `0`, the value `0x4` represents channel `1`, the value `0x2` represents channel `2`, and the value `0x1` represents channel `3`.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The following code overwrites channel `0` of the source pixels in `pixelBuffer` with the scalar value:

```swift
let pixelBuffer = vImage.PixelBuffer<vImage.Interleaved8x4>(
    pixelValues: [10, 20, 30, 40,
                  50, 60, 70, 80],
    size: .init(width: 1, height: 2))

let scalar: Pixel_8 = 101

pixelBuffer.withUnsafePointerToVImageBuffer { buf in
    _ = vImageOverwriteChannelsWithScalar_ARGB8888(scalar,
                                                  buf,
                                                  buf,
                                                  0x8,
                                                  vImage_Flags(kvImageNoFlags))
}

// Prints:
//      "[101, 20, 30, 40,
//        101, 60, 70, 80]"
print(pixelBuffer.array)
```

## See Also

### Overwriting with scalar values

- [vImageOverwriteChannelsWithScalar_Planar8(\_:\_:\_:)](vimageoverwritechannelswithscalar_planar8%28______%29.md): Overwrites an 8-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_Planar16U(\_:\_:\_:)](vimageoverwritechannelswithscalar_planar16u%28______%29.md): Overwrites an unsigned 16-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_Planar16S(\_:\_:\_:)](vimageoverwritechannelswithscalar_planar16s%28______%29.md): Overwrites a signed 16-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_Planar16F(\_:\_:\_:)](vimageoverwritechannelswithscalar_planar16f%28______%29.md): Overwrites a floating-point 16-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_PlanarF(\_:\_:\_:)](vimageoverwritechannelswithscalar_planarf%28______%29.md): Overwrites a floating-point 32-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_ARGBFFFF(\_:\_:\_:\_:\_:)](vimageoverwritechannelswithscalar_argbffff%28__________%29.md): Overwrites the selected channels of a 32-bit-per-channel, 4-channel interleaved buffer with the specified scalar value.

# vImageOverwriteChannelsWithScalar_ARGB8888 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Overwrites the selected channels of an 8-bit-per-channel, 4-channel interleaved buffer with the specified scalar value.

## Declaration

```objectivec
vImage_Error vImageOverwriteChannelsWithScalar_ARGB8888(Pixel_8 scalar, const vImage_Buffer *src, const vImage_Buffer *dest, uint8_t copyMask, vImage_Flags flags);
```

## Parameters

- `scalar`: The scalar value that provides the new channel values.
- `src`: The source vImage buffer that provides the original pixel values.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `copyMask`: A bitmask that specifies the channel or channels that the function overwrites with the scalar value. The value `0x8` represents channel `0`, the value `0x4` represents channel `1`, the value `0x2` represents channel `2`, and the value `0x1` represents channel `3`.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The following code overwrites channel `0` of the source pixels in `pixelBuffer` with the scalar value:

```swift
let pixelBuffer = vImage.PixelBuffer<vImage.Interleaved8x4>(
    pixelValues: [10, 20, 30, 40,
                  50, 60, 70, 80],
    size: .init(width: 1, height: 2))

let scalar: Pixel_8 = 101

pixelBuffer.withUnsafePointerToVImageBuffer { buf in
    _ = vImageOverwriteChannelsWithScalar_ARGB8888(scalar,
                                                  buf,
                                                  buf,
                                                  0x8,
                                                  vImage_Flags(kvImageNoFlags))
}

// Prints:
//      "[101, 20, 30, 40,
//        101, 60, 70, 80]"
print(pixelBuffer.array)
```

## See Also

### Overwriting with scalar values

- [vImageOverwriteChannelsWithScalar_Planar8](vimageoverwritechannelswithscalar_planar8%28______%29.md): Overwrites an 8-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_Planar16U](vimageoverwritechannelswithscalar_planar16u%28______%29.md): Overwrites an unsigned 16-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_Planar16S](vimageoverwritechannelswithscalar_planar16s%28______%29.md): Overwrites a signed 16-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_Planar16F](vimageoverwritechannelswithscalar_planar16f%28______%29.md): Overwrites a floating-point 16-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_PlanarF](vimageoverwritechannelswithscalar_planarf%28______%29.md): Overwrites a floating-point 32-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_ARGBFFFF](vimageoverwritechannelswithscalar_argbffff%28__________%29.md): Overwrites the selected channels of a 32-bit-per-channel, 4-channel interleaved buffer with the specified scalar value.
