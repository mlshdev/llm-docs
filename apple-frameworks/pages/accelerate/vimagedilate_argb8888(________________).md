> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagedilate_argb8888(_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagedilate_argb8888(_:_:_:_:_:_:_:_:))

# vImageDilate_ARGB8888(\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Dilates an 8-bit-per-channel, 4-channel interleaved buffer.

## Declaration

```swift
func vImageDilate_ARGB8888(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ srcOffsetToROI_X: vImagePixelCount, _ srcOffsetToROI_Y: vImagePixelCount, _ kernel: UnsafePointer<UInt8>, _ kernel_height: vImagePixelCount, _ kernel_width: vImagePixelCount, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `srcOffsetToROI_X`: The horizontal offset, in pixels, to the upper-left pixel of the region of interest within the source image.
- `srcOffsetToROI_Y`: The vertical offset, in pixels, to the upper-left pixel of the region of interest within the source image.
- `kernel`: The kernel data that contains `kernel_height * kernel_width` elements.
- `kernel_height`: The height of the kernel in pixels. This value needs to be odd.
- `kernel_width`: The width of the kernel in pixels. This value needs to be odd.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

  To specify that the function doesn’t apply the operation to the alpha channel, set the [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md) flag.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

Use the dilate operation to enlarge light structural elements in an image. In the case where the kernel contains all zeros, use the corresponding maximize function instead.

## See Also

### Related Documentation

- [Adding a bokeh effect to images](adding-a-bokeh-effect-to-images.md): Simulate a bokeh effect by applying dilation.

### Dilating an object

- [vImageDilate_Planar8(\_:\_:\_:\_:\_:\_:\_:\_:)](vimagedilate_planar8%28________________%29.md): Dilates an 8-bit planar buffer.
- [vImageDilate_PlanarF(\_:\_:\_:\_:\_:\_:\_:\_:)](vimagedilate_planarf%28________________%29.md): Dilates a 32-bit planar buffer.
- [vImageDilate_ARGBFFFF(\_:\_:\_:\_:\_:\_:\_:\_:)](vimagedilate_argbffff%28________________%29.md): Dilates a 32-bit-per-channel, 4-channel interleaved buffer.

# vImageDilate_ARGB8888 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Dilates an 8-bit-per-channel, 4-channel interleaved buffer.

## Declaration

```objectivec
vImage_Error vImageDilate_ARGB8888(const vImage_Buffer *src, const vImage_Buffer *dest, vImagePixelCount srcOffsetToROI_X, vImagePixelCount srcOffsetToROI_Y, const unsigned char *kernel, vImagePixelCount kernel_height, vImagePixelCount kernel_width, vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the [height](vimage_buffer/height.md), [width](vimage_buffer/width.md), and [rowBytes](vimage_buffer/rowbytes.md) fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `srcOffsetToROI_X`: The horizontal offset, in pixels, to the upper-left pixel of the region of interest within the source image.
- `srcOffsetToROI_Y`: The vertical offset, in pixels, to the upper-left pixel of the region of interest within the source image.
- `kernel`: The kernel data that contains `kernel_height * kernel_width` elements.
- `kernel_height`: The height of the kernel in pixels. This value needs to be odd.
- `kernel_width`: The width of the kernel in pixels. This value needs to be odd.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

  To specify that the function doesn’t apply the operation to the alpha channel, set the [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md) flag.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

Use the dilate operation to enlarge light structural elements in an image. In the case where the kernel contains all zeros, use the corresponding maximize function instead.

## See Also

### Related Documentation

- [Adding a bokeh effect to images](adding-a-bokeh-effect-to-images.md): Simulate a bokeh effect by applying dilation.

### Dilating an object

- [vImageDilate_Planar8](vimagedilate_planar8%28________________%29.md): Dilates an 8-bit planar buffer.
- [vImageDilate_PlanarF](vimagedilate_planarf%28________________%29.md): Dilates a 32-bit planar buffer.
- [vImageDilate_ARGBFFFF](vimagedilate_argbffff%28________________%29.md): Dilates a 32-bit-per-channel, 4-channel interleaved buffer.
