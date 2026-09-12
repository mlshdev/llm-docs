> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagepremultipliedalphablendscreen_rgba8888(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagepremultipliedalphablendscreen_rgba8888(_:_:_:_:))

# vImagePremultipliedAlphaBlendScreen_RGBA8888(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers using the screen blend mode.

## Declaration

```swift
func vImagePremultipliedAlphaBlendScreen_RGBA8888(_ srcTop: UnsafePointer<vImage_Buffer>, _ srcBottom: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `srcTop`: The vImage buffer that provides the source top image.
- `srcBottom`: The vImage buffer that provides the source bottom image.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

## Mentioned In

- [Compositing images with vImage blend modes](compositing-images-with-vimage-blend-modes.md)

<a id="Discussion"></a>

## Discussion

On return of this function, the value of each pixel in the destination buffer is:

```c
// For color channels:
uint8_t destColor = CLAMP( srcTopColor + srcBottomcolor - (srcTopColor * srcBottomColor + 127)/255, 0, 255);
 
// For the alpha channel:
uint8_t alpha =  srcTopAlpha + ((255 - srcTopAlpha) * srcBottomAlpha + 127)/255;
```

## See Also

### Related Documentation

- [Compositing images with vImage blend modes](compositing-images-with-vimage-blend-modes.md): Combine two images by using blend modes to create a single output.
- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Performing premultiplied alpha compositing with blend modes

- [vImagePremultipliedAlphaBlendLighten_RGBA8888(\_:\_:\_:\_:)](vimagepremultipliedalphablendlighten_rgba8888%28________%29.md): Performs alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers using the lighten blend mode.
- [vImagePremultipliedAlphaBlendDarken_RGBA8888(\_:\_:\_:\_:)](vimagepremultipliedalphablenddarken_rgba8888%28________%29.md): Performs alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers using the darken blend mode.
- [vImagePremultipliedAlphaBlendMultiply_RGBA8888(\_:\_:\_:\_:)](vimagepremultipliedalphablendmultiply_rgba8888%28________%29.md): Performs alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers using the multiply blend mode.

# vImagePremultipliedAlphaBlendScreen_RGBA8888 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers using the screen blend mode.

## Declaration

```objectivec
vImage_Error vImagePremultipliedAlphaBlendScreen_RGBA8888(const vImage_Buffer *srcTop, const vImage_Buffer *srcBottom, const vImage_Buffer *dest, vImage_Flags flags);
```

## Parameters

- `srcTop`: The vImage buffer that provides the source top image.
- `srcBottom`: The vImage buffer that provides the source bottom image.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

## Mentioned In

- [Compositing images with vImage blend modes](compositing-images-with-vimage-blend-modes.md)

<a id="Discussion"></a>

## Discussion

On return of this function, the value of each pixel in the destination buffer is:

```c
// For color channels:
uint8_t destColor = CLAMP( srcTopColor + srcBottomcolor - (srcTopColor * srcBottomColor + 127)/255, 0, 255);
 
// For the alpha channel:
uint8_t alpha =  srcTopAlpha + ((255 - srcTopAlpha) * srcBottomAlpha + 127)/255;
```

## See Also

### Related Documentation

- [Compositing images with vImage blend modes](compositing-images-with-vimage-blend-modes.md): Combine two images by using blend modes to create a single output.
- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Performing premultiplied alpha compositing with blend modes

- [vImagePremultipliedAlphaBlendLighten_RGBA8888](vimagepremultipliedalphablendlighten_rgba8888%28________%29.md): Performs alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers using the lighten blend mode.
- [vImagePremultipliedAlphaBlendDarken_RGBA8888](vimagepremultipliedalphablenddarken_rgba8888%28________%29.md): Performs alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers using the darken blend mode.
- [vImagePremultipliedAlphaBlendMultiply_RGBA8888](vimagepremultipliedalphablendmultiply_rgba8888%28________%29.md): Performs alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers using the multiply blend mode.
