> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagealphablend_planarf(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagealphablend_planarf(_:_:_:_:_:_:_:))

# vImageAlphaBlend_PlanarF(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Performs nonpremultiplied alpha compositing of two 8-bit planar buffers.

## Declaration

```swift
func vImageAlphaBlend_PlanarF(_ srcTop: UnsafePointer<vImage_Buffer>, _ srcTopAlpha: UnsafePointer<vImage_Buffer>, _ srcBottom: UnsafePointer<vImage_Buffer>, _ srcBottomAlpha: UnsafePointer<vImage_Buffer>, _ alpha: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `srcTop`: The vImage buffer that provides the source top image.
- `srcTopAlpha`: The vImage buffer that provides the source top alpha.
- `srcBottom`: The vImage buffer that provides the source bottom image.
- `srcBottomAlpha`: The vImage buffer that provides the source bottom alpha.
- `alpha`: The source vImage buffer that provides the precalculated alpha values of the composite image. Precalculate these values by calling the function [vImagePremultipliedAlphaBlend_PlanarF(\_:\_:\_:\_:\_:)](vimagepremultipliedalphablend_planarf%28__________%29.md).
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

In order to provide the best performance, this function doesn’t calculate the alpha channel for the composite image. Use the following code to calculate the alpha channel for the composite image that you pass to this function as the `alpha` parameter:

```swift
vImagePremultipliedAlphaBlend_PlanarF(srcTopAlpha,
                                      srcTopAlpha,
                                      srcBottomAlpha,
                                      alpha,
                                      vImage_Flags(kvImageNoFlags))
```

On return of [vImagePremultipliedAlphaBlend_Planar8(\_:\_:\_:\_:\_:)](vimagepremultipliedalphablend_planar8%28__________%29.md), the value of each pixel in the alpha buffer is:

```objc
float alpha = srcTopAlpha + (1.0 - srcTopAlpha) * srcBottomAlpha
```

If you’re performing an alpha blend on multiple-channel data, such as an RGB image, use the same alpha channel buffer for each call to this function.

On return of this function, the value of each pixel in the destination buffer is:

```objc
float destColor = (  srcTopColor * srcTopAlpha + (1.0 - srcTopAlpha) * srcBottomAlpha * srcBottomColor ) / alpha
```

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Performing nonpremultiplied alpha compositing

- [vImageAlphaBlend_Planar8(\_:\_:\_:\_:\_:\_:\_:)](vimagealphablend_planar8%28______________%29.md): Performs nonpremultiplied alpha compositing of two 8-bit planar buffers.
- [vImageAlphaBlend_ARGB8888(\_:\_:\_:\_:)](vimagealphablend_argb8888%28________%29.md): Performs nonpremultiplied alpha compositing of two 8-bit-per-channel, 4-channel ARGB buffers.
- [vImageAlphaBlend_ARGBFFFF(\_:\_:\_:\_:)](vimagealphablend_argbffff%28________%29.md): Performs nonpremultiplied alpha compositing of two 32-bit-per-channel, 4-channel ARGB buffers.

# vImageAlphaBlend_PlanarF (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Performs nonpremultiplied alpha compositing of two 8-bit planar buffers.

## Declaration

```objectivec
vImage_Error vImageAlphaBlend_PlanarF(const vImage_Buffer *srcTop, const vImage_Buffer *srcTopAlpha, const vImage_Buffer *srcBottom, const vImage_Buffer *srcBottomAlpha, const vImage_Buffer *alpha, const vImage_Buffer *dest, vImage_Flags flags);
```

## Parameters

- `srcTop`: The vImage buffer that provides the source top image.
- `srcTopAlpha`: The vImage buffer that provides the source top alpha.
- `srcBottom`: The vImage buffer that provides the source bottom image.
- `srcBottomAlpha`: The vImage buffer that provides the source bottom alpha.
- `alpha`: The source vImage buffer that provides the precalculated alpha values of the composite image. Precalculate these values by calling the function [vImagePremultipliedAlphaBlend_PlanarF](vimagepremultipliedalphablend_planarf%28__________%29.md).
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

In order to provide the best performance, this function doesn’t calculate the alpha channel for the composite image. Use the following code to calculate the alpha channel for the composite image that you pass to this function as the `alpha` parameter:

```swift
vImagePremultipliedAlphaBlend_PlanarF(srcTopAlpha,
                                      srcTopAlpha,
                                      srcBottomAlpha,
                                      alpha,
                                      vImage_Flags(kvImageNoFlags))
```

On return of [vImagePremultipliedAlphaBlend_Planar8](vimagepremultipliedalphablend_planar8%28__________%29.md), the value of each pixel in the alpha buffer is:

```objc
float alpha = srcTopAlpha + (1.0 - srcTopAlpha) * srcBottomAlpha
```

If you’re performing an alpha blend on multiple-channel data, such as an RGB image, use the same alpha channel buffer for each call to this function.

On return of this function, the value of each pixel in the destination buffer is:

```objc
float destColor = (  srcTopColor * srcTopAlpha + (1.0 - srcTopAlpha) * srcBottomAlpha * srcBottomColor ) / alpha
```

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Performing nonpremultiplied alpha compositing

- [vImageAlphaBlend_Planar8](vimagealphablend_planar8%28______________%29.md): Performs nonpremultiplied alpha compositing of two 8-bit planar buffers.
- [vImageAlphaBlend_ARGB8888](vimagealphablend_argb8888%28________%29.md): Performs nonpremultiplied alpha compositing of two 8-bit-per-channel, 4-channel ARGB buffers.
- [vImageAlphaBlend_ARGBFFFF](vimagealphablend_argbffff%28________%29.md): Performs nonpremultiplied alpha compositing of two 32-bit-per-channel, 4-channel ARGB buffers.
