> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagealphablend_argbffff(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagealphablend_argbffff(_:_:_:_:))

# vImageAlphaBlend_ARGBFFFF(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Performs nonpremultiplied alpha compositing of two 32-bit-per-channel, 4-channel ARGB buffers.

## Declaration

```swift
func vImageAlphaBlend_ARGBFFFF(_ srcTop: UnsafePointer<vImage_Buffer>, _ srcBottom: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `srcTop`: The vImage buffer that provides the source top image.
- `srcBottom`: The vImage buffer that provides the source bottom image.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md).

<a id="return-value"></a>

## Return Value

The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="Discussion"></a>

## Discussion

On return of this function, the value of each pixel in the destination buffer is:

```objc
float alpha =  srcTopAlpha + (1.0 - srcTopAlpha) * srcBottomAlpha
float destColor = (  srcTopColor * srcTopAlpha + (1.0 - srcTopAlpha) * srcBottomAlpha * srcBottomColor ) / alpha
```

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Performing nonpremultiplied alpha compositing

- [vImageAlphaBlend_Planar8(\_:\_:\_:\_:\_:\_:\_:)](vimagealphablend_planar8%28______________%29.md): Performs nonpremultiplied alpha compositing of two 8-bit planar buffers.
- [vImageAlphaBlend_PlanarF(\_:\_:\_:\_:\_:\_:\_:)](vimagealphablend_planarf%28______________%29.md): Performs nonpremultiplied alpha compositing of two 8-bit planar buffers.
- [vImageAlphaBlend_ARGB8888(\_:\_:\_:\_:)](vimagealphablend_argb8888%28________%29.md): Performs nonpremultiplied alpha compositing of two 8-bit-per-channel, 4-channel ARGB buffers.

# vImageAlphaBlend_ARGBFFFF (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Performs nonpremultiplied alpha compositing of two 32-bit-per-channel, 4-channel ARGB buffers.

## Declaration

```objectivec
vImage_Error vImageAlphaBlend_ARGBFFFF(const vImage_Buffer *srcTop, const vImage_Buffer *srcBottom, const vImage_Buffer *dest, vImage_Flags flags);
```

## Parameters

- `srcTop`: The vImage buffer that provides the source top image.
- `srcBottom`: The vImage buffer that provides the source bottom image.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md).

<a id="return-value"></a>

## Return Value

The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="Discussion"></a>

## Discussion

On return of this function, the value of each pixel in the destination buffer is:

```objc
float alpha =  srcTopAlpha + (1.0 - srcTopAlpha) * srcBottomAlpha
float destColor = (  srcTopColor * srcTopAlpha + (1.0 - srcTopAlpha) * srcBottomAlpha * srcBottomColor ) / alpha
```

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.

### Performing nonpremultiplied alpha compositing

- [vImageAlphaBlend_Planar8](vimagealphablend_planar8%28______________%29.md): Performs nonpremultiplied alpha compositing of two 8-bit planar buffers.
- [vImageAlphaBlend_PlanarF](vimagealphablend_planarf%28______________%29.md): Performs nonpremultiplied alpha compositing of two 8-bit planar buffers.
- [vImageAlphaBlend_ARGB8888](vimagealphablend_argb8888%28________%29.md): Performs nonpremultiplied alpha compositing of two 8-bit-per-channel, 4-channel ARGB buffers.
