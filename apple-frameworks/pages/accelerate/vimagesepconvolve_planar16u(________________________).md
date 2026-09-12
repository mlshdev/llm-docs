> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagesepconvolve_planar16u(_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagesepconvolve_planar16u(_:_:_:_:_:_:_:_:_:_:_:_:))

# vImageSepConvolve_Planar16U(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Convolves an unsigned 16-bit planar image by separate horizontal and vertical separable kernels.

## Declaration

```swift
func vImageSepConvolve_Planar16U(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ tempBuffer: UnsafeMutableRawPointer!, _ srcOffsetToROI_X: vImagePixelCount, _ srcOffsetToROI_Y: vImagePixelCount, _ kernelX: UnsafePointer<Float>!, _ kernelX_width: UInt32, _ kernelY: UnsafePointer<Float>!, _ kernelY_width: UInt32, _ bias: Float, _ backgroundColor: Pixel_16U, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: A pointer to a vImage buffer structure that contains data for the source image.
- `dest`: A pointer to a vImage buffer data structure. You’re responsible for filling out the `height`, `width`, and `rowBytes` fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer to which this structure points contains the destination image data. When you no longer need the data buffer, you need to deallocate the memory. The size dimensions of the destination buffer also specifies the size of the region of interest in the source buffer.
- `tempBuffer`: A pointer to workspace memory the function uses as it operates on an image. Pass `nil` to instruct the function to allocate, use, and then free its own temporary buffer.
- `srcOffsetToROI_X`: The horizontal offset, in pixels, to the upper-left pixel of the region of interest within the source image.
- `srcOffsetToROI_Y`: The vertical offset, in pixels, to the upper-left pixel of the region of interest within the source image.
- `kernelX`: A pointer to the 1D horizontal weights.
- `kernelX_width`: The number of elements in the horizontal weights array.
- `kernelY`: A pointer to the 1D vertical weights.
- `kernelY_width`: The number of elements in the vertical weights array.
- `bias`: The value to add to each element in the convolution result, before performing any clipping.
- `backgroundColor`: A background color. If you supply a color, you need to also set the `kvImageBackgroundColorFill` flag; otherwise, the function ignores the color.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md).

  To instruct the function to return the minimum size of the workspace memory, set the [kvImageGetTempBufferSize](kvimagegettempbuffersize.md) flag.

  Pass one of the following flags to specify how vImage handles pixel locations beyond the edge of the source image: [kvImageCopyInPlace](kvimagecopyinplace.md), [kvImageTruncateKernel](kvimagetruncatekernel.md), [kvImageBackgroundColorFill](kvimagebackgroundcolorfill.md), or [kvImageEdgeExtend](kvimageedgeextend.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, a negative value indicates one of the error codes that [Data Types and Constants](data-types-and-constants.md) describes, and a positive value indicates the required size for the temporary buffer.

<a id="Discussion"></a>

## Discussion

A separable convolution applies two separate 1D filters along the rows and columns of an image in succession. This allows for a faster implementation compared to applying the corresponding 2D convolution filter.

An example of separable convolution is the edge-detection Sobel filter, for approximating the image gradient. The Sobel filter is the outer product of the averaging filter, `[1, 2, 1]`, and the differentiation filter, `[-1, 0, 1]`. For the image x-derivative, this results in the general 2D filter:

![Matrix multiplication that describes the column matrix that contains the values one, two, one multiplied by the row matrix that contains the values minus one, zero, one. The result is a square matrix that contains the values minus one, zero, one, minus two, zero, two, minus one, zero, one.](https://developer.apple.com/images/com.apple.accelerate/media-3591855@2x.png)

Note that the differentiation filter produces a result that contains, on average, half of the destination values having a negative value. Add a bias of 128 to allow the operation to represent values in the range `-1...1` as unsigned 8-bit integer destination pixels. For example, the operation represents a result of -1 as 0 in the destination, and represents a result of 1 as 255 in the destination.

The following code shows how to apply the averaging and differentiation components of the Sobel filter to an 8-bit planar buffer:

```swift
let kernelX: [Float] = [1, 2, 1]
let kernelY: [Float] = [-1, 0, 1]
let bias = Float(128)
let backgroundColor = Pixel_16U(0)

// `planarSourceBuffer` contains the source image.
// `destinationBuffer` is the destination buffer, initialized by `vImageBuffer_Init`.

let error = vImageSepConvolve_Planar8(&planarSourceBuffer,
                                      &destinationBuffer,
                                      nil,
                                      0, 0,
                                      kernelX, UInt32(kernelX.count),
                                      kernelY, UInt32(kernelY.count),
                                      bias,
                                      backgroundColor,
                                      vImage_Flags(kvImageBackgroundColorFill))
```

The following image shows two photographs, with the original image on the left, and the image after applying the Sobel filter on the right:

![An image of some buildings before and after applying an edge detection filter.](https://developer.apple.com/images/com.apple.accelerate/media-3591850@2x.png)

<a id="Optimize-performance-with-temporary-buffers"></a>

### Optimize performance with temporary buffers

This function uses a multiple-pass algorithm that saves intermediate pixel values between passes. In some cases, the destination buffer may not be large enough to store that intermediate data, so the operation requires additional storage.

Pass `nil` to the `tempBuffer` parameter to have vImage create and manage this temporary storage for you.

In cases where your code calls the function frequently (for example, when processing video), create and manage this temporary buffer yourself and reuse it across function calls. Reusing a buffer avoids vImage allocating the temporary storage with each call.

To use your own temporary buffer, first call the function with the same values for all other parameters that you intend to use for subsequent calls. In addition, pass the `kvImageGetTempBufferSize` flag. The `kvImageGetTempBufferSize` instructs the function not to perform any processing, and to return a positive value that represents the minimum size, in bytes, of the temporary buffer. A negative return value represents an error.

After you allocate the memory for the temporary buffer, pass that to the `tempBuffer` parameter for subsequent calls to the function, and don’t pass the `kvImageGetTempBufferSize` flag.

You can use the same workspace memory for a group of images that are different sizes. To do this, create a vImage buffer structure with a size that shares the maximum width and maximum height of the images that you’re working with. For example, to create a workspace memory that’s suitable for 4x4, 5x4, and 4x5 images, pass a buffer with the size 5x5.

## See Also

### Convolving with separable filter kernels

- [vImageSepConvolve_Planar8(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagesepconvolve_planar8%28________________________%29.md): Convolves an 8-bit planar image by separate horizontal and vertical separable kernels.
- [vImageSepConvolve_Planar16F(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagesepconvolve_planar16f%28________________________%29.md): Convolves a floating-point 16-bit planar image by separate horizontal and vertical separable kernels.
- [vImageSepConvolve_PlanarF(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagesepconvolve_planarf%28________________________%29.md): Convolves a floating-point 32-bit planar image by separate horizontal and vertical separable kernels.
- [vImageSepConvolve_Planar8to16U(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagesepconvolve_planar8to16u%28__________________________%29.md): Convolves an 8-bit planar image by separate horizontal and vertical separable kernels, and writes the result to an unsigned 16-bit planar destination.
- [vImageSepConvolve_ARGB8888(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagesepconvolve_argb8888%28________________________%29.md): Convolves an 8-bit-per-channel, 4-channel interleaved image by separate horizontal and vertical separable kernels.

# vImageSepConvolve_Planar16U (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Convolves an unsigned 16-bit planar image by separate horizontal and vertical separable kernels.

## Declaration

```objectivec
vImage_Error vImageSepConvolve_Planar16U(const vImage_Buffer *src, const vImage_Buffer *dest, void *tempBuffer, vImagePixelCount srcOffsetToROI_X, vImagePixelCount srcOffsetToROI_Y, const float *kernelX, uint32_t kernelX_width, const float *kernelY, uint32_t kernelY_width, float bias, Pixel_16U backgroundColor, vImage_Flags flags);
```

## Parameters

- `src`: A pointer to a vImage buffer structure that contains data for the source image.
- `dest`: A pointer to a vImage buffer data structure. You’re responsible for filling out the `height`, `width`, and `rowBytes` fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer to which this structure points contains the destination image data. When you no longer need the data buffer, you need to deallocate the memory. The size dimensions of the destination buffer also specifies the size of the region of interest in the source buffer.
- `tempBuffer`: A pointer to workspace memory the function uses as it operates on an image. Pass `nil` to instruct the function to allocate, use, and then free its own temporary buffer.
- `srcOffsetToROI_X`: The horizontal offset, in pixels, to the upper-left pixel of the region of interest within the source image.
- `srcOffsetToROI_Y`: The vertical offset, in pixels, to the upper-left pixel of the region of interest within the source image.
- `kernelX`: A pointer to the 1D horizontal weights.
- `kernelX_width`: The number of elements in the horizontal weights array.
- `kernelY`: A pointer to the 1D vertical weights.
- `kernelY_width`: The number of elements in the vertical weights array.
- `bias`: The value to add to each element in the convolution result, before performing any clipping.
- `backgroundColor`: A background color. If you supply a color, you need to also set the `kvImageBackgroundColorFill` flag; otherwise, the function ignores the color.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md).

  To instruct the function to return the minimum size of the workspace memory, set the [kvImageGetTempBufferSize](kvimagegettempbuffersize.md) flag.

  Pass one of the following flags to specify how vImage handles pixel locations beyond the edge of the source image: [kvImageCopyInPlace](kvimagecopyinplace.md), [kvImageTruncateKernel](kvimagetruncatekernel.md), [kvImageBackgroundColorFill](kvimagebackgroundcolorfill.md), or [kvImageEdgeExtend](kvimageedgeextend.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, a negative value indicates one of the error codes that [Data Types and Constants](data-types-and-constants.md) describes, and a positive value indicates the required size for the temporary buffer.

<a id="Discussion"></a>

## Discussion

A separable convolution applies two separate 1D filters along the rows and columns of an image in succession. This allows for a faster implementation compared to applying the corresponding 2D convolution filter.

An example of separable convolution is the edge-detection Sobel filter, for approximating the image gradient. The Sobel filter is the outer product of the averaging filter, `[1, 2, 1]`, and the differentiation filter, `[-1, 0, 1]`. For the image x-derivative, this results in the general 2D filter:

![Matrix multiplication that describes the column matrix that contains the values one, two, one multiplied by the row matrix that contains the values minus one, zero, one. The result is a square matrix that contains the values minus one, zero, one, minus two, zero, two, minus one, zero, one.](https://developer.apple.com/images/com.apple.accelerate/media-3591855@2x.png)

Note that the differentiation filter produces a result that contains, on average, half of the destination values having a negative value. Add a bias of 128 to allow the operation to represent values in the range `-1...1` as unsigned 8-bit integer destination pixels. For example, the operation represents a result of -1 as 0 in the destination, and represents a result of 1 as 255 in the destination.

The following code shows how to apply the averaging and differentiation components of the Sobel filter to an 8-bit planar buffer:

```swift
let kernelX: [Float] = [1, 2, 1]
let kernelY: [Float] = [-1, 0, 1]
let bias = Float(128)
let backgroundColor = Pixel_16U(0)

// `planarSourceBuffer` contains the source image.
// `destinationBuffer` is the destination buffer, initialized by `vImageBuffer_Init`.

let error = vImageSepConvolve_Planar8(&planarSourceBuffer,
                                      &destinationBuffer,
                                      nil,
                                      0, 0,
                                      kernelX, UInt32(kernelX.count),
                                      kernelY, UInt32(kernelY.count),
                                      bias,
                                      backgroundColor,
                                      vImage_Flags(kvImageBackgroundColorFill))
```

The following image shows two photographs, with the original image on the left, and the image after applying the Sobel filter on the right:

![An image of some buildings before and after applying an edge detection filter.](https://developer.apple.com/images/com.apple.accelerate/media-3591850@2x.png)

<a id="Optimize-performance-with-temporary-buffers"></a>

### Optimize performance with temporary buffers

This function uses a multiple-pass algorithm that saves intermediate pixel values between passes. In some cases, the destination buffer may not be large enough to store that intermediate data, so the operation requires additional storage.

Pass `nil` to the `tempBuffer` parameter to have vImage create and manage this temporary storage for you.

In cases where your code calls the function frequently (for example, when processing video), create and manage this temporary buffer yourself and reuse it across function calls. Reusing a buffer avoids vImage allocating the temporary storage with each call.

To use your own temporary buffer, first call the function with the same values for all other parameters that you intend to use for subsequent calls. In addition, pass the `kvImageGetTempBufferSize` flag. The `kvImageGetTempBufferSize` instructs the function not to perform any processing, and to return a positive value that represents the minimum size, in bytes, of the temporary buffer. A negative return value represents an error.

After you allocate the memory for the temporary buffer, pass that to the `tempBuffer` parameter for subsequent calls to the function, and don’t pass the `kvImageGetTempBufferSize` flag.

You can use the same workspace memory for a group of images that are different sizes. To do this, create a vImage buffer structure with a size that shares the maximum width and maximum height of the images that you’re working with. For example, to create a workspace memory that’s suitable for 4x4, 5x4, and 4x5 images, pass a buffer with the size 5x5.

## See Also

### Convolving with separable filter kernels

- [vImageSepConvolve_Planar8](vimagesepconvolve_planar8%28________________________%29.md): Convolves an 8-bit planar image by separate horizontal and vertical separable kernels.
- [vImageSepConvolve_Planar16F](vimagesepconvolve_planar16f%28________________________%29.md): Convolves a floating-point 16-bit planar image by separate horizontal and vertical separable kernels.
- [vImageSepConvolve_PlanarF](vimagesepconvolve_planarf%28________________________%29.md): Convolves a floating-point 32-bit planar image by separate horizontal and vertical separable kernels.
- [vImageSepConvolve_Planar8to16U](vimagesepconvolve_planar8to16u%28__________________________%29.md): Convolves an 8-bit planar image by separate horizontal and vertical separable kernels, and writes the result to an unsigned 16-bit planar destination.
- [vImageSepConvolve_ARGB8888](vimagesepconvolve_argb8888%28________________________%29.md): Convolves an 8-bit-per-channel, 4-channel interleaved image by separate horizontal and vertical separable kernels.
