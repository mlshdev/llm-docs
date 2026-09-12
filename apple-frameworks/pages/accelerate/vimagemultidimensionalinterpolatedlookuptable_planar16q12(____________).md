> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagemultidimensionalinterpolatedlookuptable_planar16q12(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagemultidimensionalinterpolatedlookuptable_planar16q12(_:_:_:_:_:_:))

# vImageMultiDimensionalInterpolatedLookupTable_Planar16Q12(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Uses a multidimensional lookup table to transform a 16Q12 planar image.

## Declaration

```swift
func vImageMultiDimensionalInterpolatedLookupTable_Planar16Q12(_ srcs: UnsafePointer<vImage_Buffer>, _ dests: UnsafePointer<vImage_Buffer>, _ tempBuffer: UnsafeMutableRawPointer!, _ table: vImage_MultidimensionalTable, _ method: vImage_InterpolationMethod, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `srcs`: An array of vImage buffers that reference the source image planes. The number of source buffers is the `numSrcChannels` parameter you pass to [vImageMultidimensionalTable_Create(\_:\_:\_:\_:\_:\_:\_:)](vimagemultidimensionaltable_create%28______________%29.md).
- `dests`: An array of vImage buffers that reference the destination image planes. The number of destination buffers is the `numDestChannels` parameter you pass to [vImageMultidimensionalTable_Create(\_:\_:\_:\_:\_:\_:\_:)](vimagemultidimensionaltable_create%28______________%29.md).
- `tempBuffer`: A pointer to workspace memory the function uses as it operates on an image. Pass `nil` to instruct the function to allocate, use, and then free its own temporary buffer.
- `table`: The multidimensional lookup table.
- `method`: The interpolation method, either [kvImageFullInterpolation](kvimagefullinterpolation.md) or [kvImageHalfInterpolation](kvimagehalfinterpolation.md).
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

  To instruct the function to return the minimum size of the workspace memory, set the [kvImageGetTempBufferSize](kvimagegettempbuffersize.md) flag.

  Pass [kvImageGetTempBufferSize](kvimagegettempbuffersize.md) to specify that the function returns the minimum temporary buffer size for the operation with the specified parameters.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, a negative value indicates one of the error codes that [Data Types and Constants](data-types-and-constants.md) describes, and a positive value indicates the required size for the temporary buffer.

## Mentioned In

- [Applying color transforms to images with a multidimensional lookup table](applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md)

<a id="Discussion"></a>

## Discussion

This function transforms a 16Q12 format image to a destination image using a multidimensional lookup table.

See [Conversion](conversion.md) for functions that convert to and from the 16Q12 format.

<a id="Optimize-performance-with-temporary-buffers"></a>

### Optimize performance with temporary buffers

This function uses a multiple-pass algorithm that saves intermediate pixel values between passes. In some cases, the destination buffer may not be large enough to store that intermediate data, so the operation requires additional storage.

Pass `nil` to the `tempBuffer` parameter to have vImage create and manage this temporary storage for you.

In cases where your code calls the function frequently (for example, when processing video), create and manage this temporary buffer yourself and reuse it across function calls. Reusing a buffer avoids vImage allocating the temporary storage with each call.

To use your own temporary buffer, first call the function with the same values for all other parameters that you intend to use for subsequent calls. In addition, pass the `kvImageGetTempBufferSize` flag. The `kvImageGetTempBufferSize` instructs the function not to perform any processing, and to return a positive value that represents the minimum size, in bytes, of the temporary buffer. A negative return value represents an error.

After you allocate the memory for the temporary buffer, pass that to the `tempBuffer` parameter for subsequent calls to the function, and don’t pass the `kvImageGetTempBufferSize` flag.

You can use the same workspace memory for a group of images that are different sizes. To do this, create a vImage buffer structure with a size that shares the maximum width and maximum height of the images that you’re working with. For example, to create a workspace memory that’s suitable for 4x4, 5x4, and 4x5 images, pass a buffer with the size 5x5.

## See Also

### Transforming with a multidimensional lookup table

- [Applying color transforms to images with a multidimensional lookup table](applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md): Precompute translation values to optimize color space conversion and other pointwise operations.
- [Cropping to the subject in a chroma-keyed image](cropping-to-the-subject-in-a-chroma-keyed-image.md): Convert a chroma-key color to alpha values and trim transparent pixels using Accelerate.
- [Applying transformations to selected colors in an image](applying-transformations-to-selected-colors-in-an-image.md): Desaturate a range of colors in an image with a multidimensional lookup table.
- [vImageMultidimensionalTable_Create(\_:\_:\_:\_:\_:\_:\_:)](vimagemultidimensionaltable_create%28______________%29.md): Creates a multidimensional lookup table.
- [vImageMultiDimensionalInterpolatedLookupTable_PlanarF(\_:\_:\_:\_:\_:\_:)](vimagemultidimensionalinterpolatedlookuptable_planarf%28____________%29.md): Uses a multidimensional lookup table to transform a 32-bit planar image.
- [vImageMultidimensionalTable_Retain(\_:)](vimagemultidimensionaltable_retain%28__%29.md): Retains a multidimensional table.
- [vImageMultidimensionalTable_Release(\_:)](vimagemultidimensionaltable_release%28__%29.md): Releases a multidimensional table.
- [vImage_MultidimensionalTable](vimage_multidimensionaltable.md): An opaque pointer that represents a multidimensional lookup table.
- [vImageMDTableUsageHint](vimagemdtableusagehint.md): Constants that indicate the use for a multidimensional lookup table.
- [vImage_InterpolationMethod](vimage_interpolationmethod.md): Constants that represent different interpolation methods.

# vImageMultiDimensionalInterpolatedLookupTable_Planar16Q12 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Uses a multidimensional lookup table to transform a 16Q12 planar image.

## Declaration

```objectivec
vImage_Error vImageMultiDimensionalInterpolatedLookupTable_Planar16Q12(const vImage_Buffer srcs[], const vImage_Buffer dests[], void *tempBuffer, vImage_MultidimensionalTable table, vImage_InterpolationMethod method, vImage_Flags flags);
```

## Parameters

- `srcs`: An array of vImage buffers that reference the source image planes. The number of source buffers is the `numSrcChannels` parameter you pass to [vImageMultidimensionalTable_Create](vimagemultidimensionaltable_create%28______________%29.md).
- `dests`: An array of vImage buffers that reference the destination image planes. The number of destination buffers is the `numDestChannels` parameter you pass to [vImageMultidimensionalTable_Create](vimagemultidimensionaltable_create%28______________%29.md).
- `tempBuffer`: A pointer to workspace memory the function uses as it operates on an image. Pass `nil` to instruct the function to allocate, use, and then free its own temporary buffer.
- `table`: The multidimensional lookup table.
- `method`: The interpolation method, either [kvImageFullInterpolation](kvimagefullinterpolation.md) or [kvImageHalfInterpolation](kvimagehalfinterpolation.md).
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

  To instruct the function to return the minimum size of the workspace memory, set the [kvImageGetTempBufferSize](kvimagegettempbuffersize.md) flag.

  Pass [kvImageGetTempBufferSize](kvimagegettempbuffersize.md) to specify that the function returns the minimum temporary buffer size for the operation with the specified parameters.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, a negative value indicates one of the error codes that [Data Types and Constants](data-types-and-constants.md) describes, and a positive value indicates the required size for the temporary buffer.

## Mentioned In

- [Applying color transforms to images with a multidimensional lookup table](applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md)

<a id="Discussion"></a>

## Discussion

This function transforms a 16Q12 format image to a destination image using a multidimensional lookup table.

See [Conversion](conversion.md) for functions that convert to and from the 16Q12 format.

<a id="Optimize-performance-with-temporary-buffers"></a>

### Optimize performance with temporary buffers

This function uses a multiple-pass algorithm that saves intermediate pixel values between passes. In some cases, the destination buffer may not be large enough to store that intermediate data, so the operation requires additional storage.

Pass `nil` to the `tempBuffer` parameter to have vImage create and manage this temporary storage for you.

In cases where your code calls the function frequently (for example, when processing video), create and manage this temporary buffer yourself and reuse it across function calls. Reusing a buffer avoids vImage allocating the temporary storage with each call.

To use your own temporary buffer, first call the function with the same values for all other parameters that you intend to use for subsequent calls. In addition, pass the `kvImageGetTempBufferSize` flag. The `kvImageGetTempBufferSize` instructs the function not to perform any processing, and to return a positive value that represents the minimum size, in bytes, of the temporary buffer. A negative return value represents an error.

After you allocate the memory for the temporary buffer, pass that to the `tempBuffer` parameter for subsequent calls to the function, and don’t pass the `kvImageGetTempBufferSize` flag.

You can use the same workspace memory for a group of images that are different sizes. To do this, create a vImage buffer structure with a size that shares the maximum width and maximum height of the images that you’re working with. For example, to create a workspace memory that’s suitable for 4x4, 5x4, and 4x5 images, pass a buffer with the size 5x5.

## See Also

### Transforming with a multidimensional lookup table

- [Applying color transforms to images with a multidimensional lookup table](applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md): Precompute translation values to optimize color space conversion and other pointwise operations.
- [vImageMultidimensionalTable_Create](vimagemultidimensionaltable_create%28______________%29.md): Creates a multidimensional lookup table.
- [vImageMultiDimensionalInterpolatedLookupTable_PlanarF](vimagemultidimensionalinterpolatedlookuptable_planarf%28____________%29.md): Uses a multidimensional lookup table to transform a 32-bit planar image.
- [vImageMultidimensionalTable_Retain](vimagemultidimensionaltable_retain%28__%29.md): Retains a multidimensional table.
- [vImageMultidimensionalTable_Release](vimagemultidimensionaltable_release%28__%29.md): Releases a multidimensional table.
- [vImage_MultidimensionalTable](vimage_multidimensionaltable.md): An opaque pointer that represents a multidimensional lookup table.
- [vImageMDTableUsageHint](vimagemdtableusagehint.md): Constants that indicate the use for a multidimensional lookup table.
- [vImage_InterpolationMethod](vimage_interpolationmethod.md): Constants that represent different interpolation methods.
