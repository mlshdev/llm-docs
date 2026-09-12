> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagepremultipliedconstalphablend_planar8(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagepremultipliedconstalphablend_planar8(_:_:_:_:_:_:))

# vImagePremultipliedConstAlphaBlend_Planar8(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Performs premultiplied alpha compositing of two 8-bit planar buffers and applies an extra alpha value to the top buffer.

## Declaration

```swift
func vImagePremultipliedConstAlphaBlend_Planar8(_ srcTop: UnsafePointer<vImage_Buffer>, _ constAlpha: Pixel_8, _ srcTopAlpha: UnsafePointer<vImage_Buffer>, _ srcBottom: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `srcTop`: The vImage buffer that provides the source top image.
- `constAlpha`: The constant alpha value that the function applies to the top image.
- `srcTopAlpha`: The vImage buffer that provides the source top alpha.
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
uint8_t destColor = (srcTopColor * constAlpha * 255  + (255*255 - srcTopAlpha * constAlpha) * srcBottomColor + 127*255) / (255*255);
```

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Performing premultiplied alpha compositing with a single alpha value

- [vImagePremultipliedConstAlphaBlend_PlanarF(\_:\_:\_:\_:\_:\_:)](vimagepremultipliedconstalphablend_planarf%28____________%29.md): Performs premultiplied alpha compositing of two 32-bit planar buffers and applies an extra alpha value to the top buffer.
- [vImagePremultipliedConstAlphaBlend_ARGB8888(\_:\_:\_:\_:\_:)](vimagepremultipliedconstalphablend_argb8888%28__________%29.md): Performs premultiplied alpha compositing of two 8-bit-per-channel, 4-channel interleaved buffers and applies an extra alpha value to the top buffer.
- [vImagePremultipliedConstAlphaBlend_ARGBFFFF(\_:\_:\_:\_:\_:)](vimagepremultipliedconstalphablend_argbffff%28__________%29.md): Performs premultiplied alpha compositing of two 32-bit-per-channel, 4-channel interleaved buffers and applies an extra alpha value to the top buffer.

# vImagePremultipliedConstAlphaBlend_Planar8 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Performs premultiplied alpha compositing of two 8-bit planar buffers and applies an extra alpha value to the top buffer.

## Declaration

```objectivec
vImage_Error vImagePremultipliedConstAlphaBlend_Planar8(const vImage_Buffer *srcTop, Pixel_8 constAlpha, const vImage_Buffer *srcTopAlpha, const vImage_Buffer *srcBottom, const vImage_Buffer *dest, vImage_Flags flags);
```

## Parameters

- `srcTop`: The vImage buffer that provides the source top image.
- `constAlpha`: The constant alpha value that the function applies to the top image.
- `srcTopAlpha`: The vImage buffer that provides the source top alpha.
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
uint8_t destColor = (srcTopColor * constAlpha * 255  + (255*255 - srcTopAlpha * constAlpha) * srcBottomColor + 127*255) / (255*255);
```

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Performing premultiplied alpha compositing with a single alpha value

- [vImagePremultipliedConstAlphaBlend_PlanarF](vimagepremultipliedconstalphablend_planarf%28____________%29.md): Performs premultiplied alpha compositing of two 32-bit planar buffers and applies an extra alpha value to the top buffer.
- [vImagePremultipliedConstAlphaBlend_ARGB8888](vimagepremultipliedconstalphablend_argb8888%28__________%29.md): Performs premultiplied alpha compositing of two 8-bit-per-channel, 4-channel interleaved buffers and applies an extra alpha value to the top buffer.
- [vImagePremultipliedConstAlphaBlend_ARGBFFFF](vimagepremultipliedconstalphablend_argbffff%28__________%29.md): Performs premultiplied alpha compositing of two 32-bit-per-channel, 4-channel interleaved buffers and applies an extra alpha value to the top buffer.
