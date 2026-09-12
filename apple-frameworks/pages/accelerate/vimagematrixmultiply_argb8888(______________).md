> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagematrixmultiply_argb8888(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagematrixmultiply_argb8888(_:_:_:_:_:_:_:))

# vImageMatrixMultiply_ARGB8888(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Multiplies each pixel in an interleaved four-channel, 8-bit source image by a matrix to produce an interleaved four-channel, 8-bit destination image.

## Declaration

```swift
func vImageMatrixMultiply_ARGB8888(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ matrix: UnsafePointer<Int16>, _ divisor: Int32, _ pre_bias: UnsafePointer<Int16>!, _ post_bias: UnsafePointer<Int32>!, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the `height`, `width`, and `rowBytes` fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `matrix`: An array of values that contains the 4 x 4 matrix elements.
- `divisor`: A value that the function divides the matrix multiplication result by after adding postbias.
- `pre_bias`: An array that contains four bias values. The function adds the corresponding bias value to each source value before the matrix multiplication step. Pass `nil` to specify zero prebias.
- `post_bias`: An array that contains four bias values. The function adds the corresponding bias value to each destination value after the matrix multiplication step. Pass `nil` to specify zero postbias.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

## Mentioned In

- [Applying vImage operations to regions of interest](applying-vimage-operations-to-regions-of-interest.md)

<a id="Discussion"></a>

## Discussion

This function treats the four-channel source and destination pixels as four-element vectors. The operation multiplies each source pixel by the 4 x 4 matrix to produce the destination pixel.

The following code shows a single-pixel image that contains the ARGB value `(10, 20, 30, 40)`. The matrix permutes the channel values to produce a single-pixel destination image that contains the ARGB value `(40, 30, 20, 10)`.

```swift
let size = vImage.Size(width: 1, height: 1)

let source = vImage.PixelBuffer<vImage.Interleaved8x4>(
    pixelValues: [10, 20, 30, 40],
    size: size)

let destination = vImage.PixelBuffer<vImage.Interleaved8x4>(
    size: size)

let matrix: [Int16] = [
    0, 0, 0, 1,
    0, 0, 1, 0,
    0, 1, 0, 0,
    1, 0, 0, 0
]

source.withUnsafePointerToVImageBuffer { src in
    destination.withUnsafePointerToVImageBuffer { dest in
        
        _ = vImageMatrixMultiply_ARGB8888(
            src,
            dest,
            matrix,
            1,
            nil,
            nil,
            vImage_Flags(kvImageNoFlags))
        
    }
}

// Prints "[40, 30, 20, 10]".
print(destination.array)
```

## See Also

### Multiplying interleaved pixels by a matrix

- [vImageMatrixMultiply_ARGBFFFF(\_:\_:\_:\_:\_:\_:)](vimagematrixmultiply_argbffff%28____________%29.md): Multiplies each pixel in an interleaved four-channel, 32-bit source image by a matrix to produce an interleaved four-channel, 32-bit destination image.
- [vImageMatrixMultiply_ARGB8888ToPlanar8(\_:\_:\_:\_:\_:\_:\_:)](vimagematrixmultiply_argb8888toplanar8%28______________%29.md): Multiplies each pixel in an interleaved four-channel, 8-bit source image by a matrix to produce a planar 8-bit destination image.
- [vImageMatrixMultiply_ARGBFFFFToPlanarF(\_:\_:\_:\_:\_:\_:)](vimagematrixmultiply_argbfffftoplanarf%28____________%29.md): Multiplies each pixel in an interleaved four-channel, 32-bit source image by a matrix to produce a planar 32-bit destination image.

# vImageMatrixMultiply_ARGB8888 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Multiplies each pixel in an interleaved four-channel, 8-bit source image by a matrix to produce an interleaved four-channel, 8-bit destination image.

## Declaration

```objectivec
vImage_Error vImageMatrixMultiply_ARGB8888(const vImage_Buffer *src, const vImage_Buffer *dest, const int16_t matrix[16], int32_t divisor, const int16_t *pre_bias, const int32_t *post_bias, vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the `height`, `width`, and `rowBytes` fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `matrix`: An array of values that contains the 4 x 4 matrix elements.
- `divisor`: A value that the function divides the matrix multiplication result by after adding postbias.
- `pre_bias`: An array that contains four bias values. The function adds the corresponding bias value to each source value before the matrix multiplication step. Pass `nil` to specify zero prebias.
- `post_bias`: An array that contains four bias values. The function adds the corresponding bias value to each destination value after the matrix multiplication step. Pass `nil` to specify zero postbias.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

## Mentioned In

- [Applying vImage operations to regions of interest](applying-vimage-operations-to-regions-of-interest.md)

<a id="Discussion"></a>

## Discussion

This function treats the four-channel source and destination pixels as four-element vectors. The operation multiplies each source pixel by the 4 x 4 matrix to produce the destination pixel.

The following code shows a single-pixel image that contains the ARGB value `(10, 20, 30, 40)`. The matrix permutes the channel values to produce a single-pixel destination image that contains the ARGB value `(40, 30, 20, 10)`.

```swift
let size = vImage.Size(width: 1, height: 1)

let source = vImage.PixelBuffer<vImage.Interleaved8x4>(
    pixelValues: [10, 20, 30, 40],
    size: size)

let destination = vImage.PixelBuffer<vImage.Interleaved8x4>(
    size: size)

let matrix: [Int16] = [
    0, 0, 0, 1,
    0, 0, 1, 0,
    0, 1, 0, 0,
    1, 0, 0, 0
]

source.withUnsafePointerToVImageBuffer { src in
    destination.withUnsafePointerToVImageBuffer { dest in
        
        _ = vImageMatrixMultiply_ARGB8888(
            src,
            dest,
            matrix,
            1,
            nil,
            nil,
            vImage_Flags(kvImageNoFlags))
        
    }
}

// Prints "[40, 30, 20, 10]".
print(destination.array)
```

## See Also

### Multiplying interleaved pixels by a matrix

- [vImageMatrixMultiply_ARGBFFFF](vimagematrixmultiply_argbffff%28____________%29.md): Multiplies each pixel in an interleaved four-channel, 32-bit source image by a matrix to produce an interleaved four-channel, 32-bit destination image.
- [vImageMatrixMultiply_ARGB8888ToPlanar8](vimagematrixmultiply_argb8888toplanar8%28______________%29.md): Multiplies each pixel in an interleaved four-channel, 8-bit source image by a matrix to produce a planar 8-bit destination image.
- [vImageMatrixMultiply_ARGBFFFFToPlanarF](vimagematrixmultiply_argbfffftoplanarf%28____________%29.md): Multiplies each pixel in an interleaved four-channel, 32-bit source image by a matrix to produce a planar 32-bit destination image.
