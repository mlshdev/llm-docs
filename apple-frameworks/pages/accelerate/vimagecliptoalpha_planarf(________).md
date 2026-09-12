> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecliptoalpha_planarf(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagecliptoalpha_planarf(_:_:_:_:))

# vImageClipToAlpha_PlanarF(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Clamps the values of a 32-bit planar buffer to the corresponding alpha values.

## Declaration

```swift
func vImageClipToAlpha_PlanarF(_ src: UnsafePointer<vImage_Buffer>, _ alpha: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `alpha`: The vImage buffer that provides the source alpha.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

On return of this function, the value of each pixel in the destination buffer is:

```objc
color_result = MIN( color, alpha )
```

## See Also

### Clipping color values to alpha

- [vImageClipToAlpha_Planar8(\_:\_:\_:\_:)](vimagecliptoalpha_planar8%28________%29.md): Clamps the values of an 8-bit planar buffer to the corresponding alpha values.
- [vImageClipToAlpha_ARGB8888(\_:\_:\_:)](vimagecliptoalpha_argb8888%28______%29.md): Clamps the values of an 8-bit-per-channel, 4-channel ARGB buffer to the corresponding alpha values.
- [vImageClipToAlpha_RGBA8888(\_:\_:\_:)](vimagecliptoalpha_rgba8888%28______%29.md): Clamps the values of an 8-bit-per-channel, 4-channel RGBA buffer to the corresponding alpha values.
- [vImageClipToAlpha_ARGBFFFF(\_:\_:\_:)](vimagecliptoalpha_argbffff%28______%29.md): Clamps the values of a 32-bit-per-channel, 4-channel ARGB buffer to the corresponding alpha values.
- [vImageClipToAlpha_RGBAFFFF(\_:\_:\_:)](vimagecliptoalpha_rgbaffff%28______%29.md): Clamps the values of a 32-bit-per-channel, 4-channel RGBA buffer to the corresponding alpha values.

# vImageClipToAlpha_PlanarF (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Clamps the values of a 32-bit planar buffer to the corresponding alpha values.

## Declaration

```objectivec
vImage_Error vImageClipToAlpha_PlanarF(const vImage_Buffer *src, const vImage_Buffer *alpha, const vImage_Buffer *dest, vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `alpha`: The vImage buffer that provides the source alpha.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

On return of this function, the value of each pixel in the destination buffer is:

```objc
color_result = MIN( color, alpha )
```

## See Also

### Clipping color values to alpha

- [vImageClipToAlpha_Planar8](vimagecliptoalpha_planar8%28________%29.md): Clamps the values of an 8-bit planar buffer to the corresponding alpha values.
- [vImageClipToAlpha_ARGB8888](vimagecliptoalpha_argb8888%28______%29.md): Clamps the values of an 8-bit-per-channel, 4-channel ARGB buffer to the corresponding alpha values.
- [vImageClipToAlpha_RGBA8888](vimagecliptoalpha_rgba8888%28______%29.md): Clamps the values of an 8-bit-per-channel, 4-channel RGBA buffer to the corresponding alpha values.
- [vImageClipToAlpha_ARGBFFFF](vimagecliptoalpha_argbffff%28______%29.md): Clamps the values of a 32-bit-per-channel, 4-channel ARGB buffer to the corresponding alpha values.
- [vImageClipToAlpha_RGBAFFFF](vimagecliptoalpha_rgbaffff%28______%29.md): Clamps the values of a 32-bit-per-channel, 4-channel RGBA buffer to the corresponding alpha values.
