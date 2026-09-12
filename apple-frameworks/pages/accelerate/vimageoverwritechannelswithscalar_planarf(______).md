> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageoverwritechannelswithscalar_planarf(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageoverwritechannelswithscalar_planarf(_:_:_:))

# vImageOverwriteChannelsWithScalar_PlanarF(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Overwrites a floating-point 32-bit planar buffer with the specified scalar value in place.

## Declaration

```swift
func vImageOverwriteChannelsWithScalar_PlanarF(_ scalar: Pixel_F, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `scalar`: The scalar value that provides the new pixel values.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The following code fills `pixelBuffer` with `scalar`:

```swift
let pixelBuffer = vImage.PixelBuffer<vImage.PlanarF>(
    size: .init(width: 4, height: 1))

let scalar: Pixel_F = 101

pixelBuffer.withUnsafePointerToVImageBuffer { buf in
    _ = vImageOverwriteChannelsWithScalar_PlanarF(scalar,
                                                    buf,
                                                    vImage_Flags(kvImageNoFlags))
}

// Prints "[101.0, 101.0, 101.0, 101.0]".
print(pixelBuffer.array)
```

## See Also

### Overwriting with scalar values

- [vImageOverwriteChannelsWithScalar_Planar8(\_:\_:\_:)](vimageoverwritechannelswithscalar_planar8%28______%29.md): Overwrites an 8-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_Planar16U(\_:\_:\_:)](vimageoverwritechannelswithscalar_planar16u%28______%29.md): Overwrites an unsigned 16-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_Planar16S(\_:\_:\_:)](vimageoverwritechannelswithscalar_planar16s%28______%29.md): Overwrites a signed 16-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_Planar16F(\_:\_:\_:)](vimageoverwritechannelswithscalar_planar16f%28______%29.md): Overwrites a floating-point 16-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_ARGB8888(\_:\_:\_:\_:\_:)](vimageoverwritechannelswithscalar_argb8888%28__________%29.md): Overwrites the selected channels of an 8-bit-per-channel, 4-channel interleaved buffer with the specified scalar value.
- [vImageOverwriteChannelsWithScalar_ARGBFFFF(\_:\_:\_:\_:\_:)](vimageoverwritechannelswithscalar_argbffff%28__________%29.md): Overwrites the selected channels of a 32-bit-per-channel, 4-channel interleaved buffer with the specified scalar value.

# vImageOverwriteChannelsWithScalar_PlanarF (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Overwrites a floating-point 32-bit planar buffer with the specified scalar value in place.

## Declaration

```objectivec
vImage_Error vImageOverwriteChannelsWithScalar_PlanarF(Pixel_F scalar, const vImage_Buffer *dest, vImage_Flags flags);
```

## Parameters

- `scalar`: The scalar value that provides the new pixel values.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The following code fills `pixelBuffer` with `scalar`:

```swift
let pixelBuffer = vImage.PixelBuffer<vImage.PlanarF>(
    size: .init(width: 4, height: 1))

let scalar: Pixel_F = 101

pixelBuffer.withUnsafePointerToVImageBuffer { buf in
    _ = vImageOverwriteChannelsWithScalar_PlanarF(scalar,
                                                    buf,
                                                    vImage_Flags(kvImageNoFlags))
}

// Prints "[101.0, 101.0, 101.0, 101.0]".
print(pixelBuffer.array)
```

## See Also

### Overwriting with scalar values

- [vImageOverwriteChannelsWithScalar_Planar8](vimageoverwritechannelswithscalar_planar8%28______%29.md): Overwrites an 8-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_Planar16U](vimageoverwritechannelswithscalar_planar16u%28______%29.md): Overwrites an unsigned 16-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_Planar16S](vimageoverwritechannelswithscalar_planar16s%28______%29.md): Overwrites a signed 16-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_Planar16F](vimageoverwritechannelswithscalar_planar16f%28______%29.md): Overwrites a floating-point 16-bit planar buffer with the specified scalar value in place.
- [vImageOverwriteChannelsWithScalar_ARGB8888](vimageoverwritechannelswithscalar_argb8888%28__________%29.md): Overwrites the selected channels of an 8-bit-per-channel, 4-channel interleaved buffer with the specified scalar value.
- [vImageOverwriteChannelsWithScalar_ARGBFFFF](vimageoverwritechannelswithscalar_argbffff%28__________%29.md): Overwrites the selected channels of a 32-bit-per-channel, 4-channel interleaved buffer with the specified scalar value.
