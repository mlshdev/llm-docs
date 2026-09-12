> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagepremultipliedalphablend_bgraffff(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagepremultipliedalphablend_bgraffff(_:_:_:_:))

# vImagePremultipliedAlphaBlend_BGRAFFFF(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Performs premultiplied alpha compositing of two 32-bit-per-channel, 4-channel BGRA buffers.

## Declaration

```swift
func vImagePremultipliedAlphaBlend_BGRAFFFF(_ srcTop: UnsafePointer<vImage_Buffer>, _ srcBottom: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `srcTop`: The vImage buffer that provides the source top image.
- `srcBottom`: The vImage buffer that provides the source bottom image.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

On return of this function, the value of each pixel in the destination buffer is:

```objc
float destColor = srcTopColor  + (1.0 - srcTopAlpha) * srcBottomColor;
float alpha =  srcTopAlpha + (1.0 - srcTopAlpha) * srcBottomAlpha
```

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Performing premultiplied alpha compositing

- [vImagePremultipliedAlphaBlend_Planar8(\_:\_:\_:\_:\_:)](vimagepremultipliedalphablend_planar8%28__________%29.md): Performs premultiplied alpha compositing of two 8-bit planar buffers.
- [vImagePremultipliedAlphaBlend_PlanarF(\_:\_:\_:\_:\_:)](vimagepremultipliedalphablend_planarf%28__________%29.md): Performs premultiplied alpha compositing of two 32-bit planar buffers.
- [vImagePremultipliedAlphaBlend_ARGB8888(\_:\_:\_:\_:)](vimagepremultipliedalphablend_argb8888%28________%29.md): Performs premultiplied alpha compositing of two 8-bit-per-channel, 4-channel ARGB buffers.
- [vImagePremultipliedAlphaBlend_ARGBFFFF(\_:\_:\_:\_:)](vimagepremultipliedalphablend_argbffff%28________%29.md): Performs premultiplied alpha compositing of two 32-bit-per-channel, 4-channel ARGB buffers.
- [vImagePremultipliedAlphaBlend_BGRA8888(\_:\_:\_:\_:)](vimagepremultipliedalphablend_bgra8888%28________%29.md): Performs premultiplied alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers.

# vImagePremultipliedAlphaBlend_BGRAFFFF (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Performs premultiplied alpha compositing of two 32-bit-per-channel, 4-channel BGRA buffers.

## Declaration

```objectivec
vImage_Error vImagePremultipliedAlphaBlend_BGRAFFFF(const vImage_Buffer *srcTop, const vImage_Buffer *srcBottom, const vImage_Buffer *dest, vImage_Flags flags);
```

## Parameters

- `srcTop`: The vImage buffer that provides the source top image.
- `srcBottom`: The vImage buffer that provides the source bottom image.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

On return of this function, the value of each pixel in the destination buffer is:

```objc
float destColor = srcTopColor  + (1.0 - srcTopAlpha) * srcBottomColor;
float alpha =  srcTopAlpha + (1.0 - srcTopAlpha) * srcBottomAlpha
```

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Performing premultiplied alpha compositing

- [vImagePremultipliedAlphaBlend_Planar8](vimagepremultipliedalphablend_planar8%28__________%29.md): Performs premultiplied alpha compositing of two 8-bit planar buffers.
- [vImagePremultipliedAlphaBlend_PlanarF](vimagepremultipliedalphablend_planarf%28__________%29.md): Performs premultiplied alpha compositing of two 32-bit planar buffers.
- [vImagePremultipliedAlphaBlend_ARGB8888](vimagepremultipliedalphablend_argb8888%28________%29.md): Performs premultiplied alpha compositing of two 8-bit-per-channel, 4-channel ARGB buffers.
- [vImagePremultipliedAlphaBlend_ARGBFFFF](vimagepremultipliedalphablend_argbffff%28________%29.md): Performs premultiplied alpha compositing of two 32-bit-per-channel, 4-channel ARGB buffers.
- [vImagePremultipliedAlphaBlend_BGRA8888](vimagepremultipliedalphablend_bgra8888%28________%29.md): Performs premultiplied alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers.
- [vImagePremultipliedAlphaBlend_RGBA8888](vimagepremultipliedalphablend_rgba8888.md): Performs premultiplied alpha compositing of two 8-bit-per-channel, 4-channel RGBA buffers.
- [vImagePremultipliedAlphaBlend_RGBAFFFF](vimagepremultipliedalphablend_rgbaffff.md): Performs premultiplied alpha compositing of two 32-bit-per-channel, 4-channel RGBA buffers.
