> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconvert_fto16s(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconvert_fto16s(_:_:_:_:_:))

# vImageConvert_FTo16S(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Converts a floating-point 32-bit planar buffer to a signed 16-bit planar buffer.

## Declaration

```swift
func vImageConvert_FTo16S(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ offset: Float, _ scale: Float, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `offset`: The offset value that the conversion subtracts from each pixel.
- `scale`: The scale value that the conversion divides each pixel by.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The function uses the following calculation to perform the conversion:

```objc
int16_t result = SATURATED_CLIP_SHRT_MIN_to_SHRT_MAX( (srcPixel - offset) / scale  + 0.5f);
```

## See Also

### Converting from floating-point 32-bit-per-channel buffers

- [vImageConvert_PlanarFtoPlanar8(\_:\_:\_:\_:\_:)](vimageconvert_planarftoplanar8%28__________%29.md): Converts a floating-point 32-bit planar buffer to an 8-bit planar buffer.
- [vImageConvert_PlanarFtoPlanar8_dithered(\_:\_:\_:\_:\_:\_:)](vimageconvert_planarftoplanar8_dithered%28____________%29.md): Converts a floating-point 32-bit planar buffer to an 8-bit planar buffer using the specified dithering algorithm.
- [vImageConvert_FTo16U(\_:\_:\_:\_:\_:)](vimageconvert_fto16u%28__________%29.md): Converts a floating-point 32-bit planar buffer to an unsigned 16-bit planar buffer.

# vImageConvert_FTo16S (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Converts a floating-point 32-bit planar buffer to a signed 16-bit planar buffer.

## Declaration

```objectivec
vImage_Error vImageConvert_FTo16S(const vImage_Buffer *src, const vImage_Buffer *dest, float offset, float scale, vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `offset`: The offset value that the conversion subtracts from each pixel.
- `scale`: The scale value that the conversion divides each pixel by.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

The function uses the following calculation to perform the conversion:

```objc
int16_t result = SATURATED_CLIP_SHRT_MIN_to_SHRT_MAX( (srcPixel - offset) / scale  + 0.5f);
```

## See Also

### Converting from floating-point 32-bit-per-channel buffers

- [vImageConvert_PlanarFtoPlanar8](vimageconvert_planarftoplanar8%28__________%29.md): Converts a floating-point 32-bit planar buffer to an 8-bit planar buffer.
- [vImageConvert_PlanarFtoPlanar8_dithered](vimageconvert_planarftoplanar8_dithered%28____________%29.md): Converts a floating-point 32-bit planar buffer to an 8-bit planar buffer using the specified dithering algorithm.
- [vImageConvert_FTo16U](vimageconvert_fto16u%28__________%29.md): Converts a floating-point 32-bit planar buffer to an unsigned 16-bit planar buffer.
