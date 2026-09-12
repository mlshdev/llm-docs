> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagematrixmultiply_argbfffftoplanarf(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagematrixmultiply_argbfffftoplanarf(_:_:_:_:_:_:))

# vImageMatrixMultiply_ARGBFFFFToPlanarF(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Multiplies each pixel in an interleaved four-channel, 32-bit source image by a matrix to produce a planar 32-bit destination image.

## Declaration

```swift
func vImageMatrixMultiply_ARGBFFFFToPlanarF(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ matrix: UnsafePointer<Float>, _ pre_bias: UnsafePointer<Float>!, _ post_bias: Float, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the `height`, `width`, and `rowBytes` fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `matrix`: An array of values that contains the four elements in the column-matrix.
- `pre_bias`: An array that contains four bias values. The function adds the corresponding bias value to each source value before the matrix multiplication step. Pass `nil` to specify zero prebias.
- `post_bias`: The postbias value. The function adds the bias value to the destination value after the matrix multiplication step.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

This function treats the four-channel source pixels as a four-element vector, and multiplies each source pixel by the matrix. The operation is equivalent to computing the dot product of the source pixel and the matrix.

The following code shows a four-channel interleaved buffer multiplied by a four-element column matrix to produce a planar destination image. The values in the matrix represent the Rec. 709 luminance coefficients that convert the color source pixels to a grayscale destination image. The source buffer contains a red pixel, a green pixel, and a blue pixel.

```swift
let size = vImage.Size(width: 3, height: 1)

let source = vImage.PixelBuffer<vImage.InterleavedFx4>(
    pixelValues: [0, 1, 0, 0,  // red
                  0, 0, 1, 0,  // green
                  0, 0, 0, 1], // blue
    size: size)

let destination = vImage.PixelBuffer<vImage.PlanarF>(
    size: size)

let redCoefficient: Float = 0.2126
let greenCoefficient: Float = 0.7152
let blueCoefficient: Float = 0.0722

let matrix = [
    0,
    redCoefficient,
    greenCoefficient,
    blueCoefficient
]

source.withUnsafePointerToVImageBuffer { src in
    destination.withUnsafePointerToVImageBuffer { dest in
        
        _ = vImageMatrixMultiply_ARGBFFFFToPlanarF(
            src,
            dest,
            matrix,
            nil,
            0,
            vImage_Flags(kvImageNoFlags))
    }
}

// Prints "[0.2126, 0.7152, 0.0722]".
print(destination.array)
```

## See Also

### Multiplying interleaved pixels by a matrix

- [vImageMatrixMultiply_ARGB8888(\_:\_:\_:\_:\_:\_:\_:)](vimagematrixmultiply_argb8888%28______________%29.md): Multiplies each pixel in an interleaved four-channel, 8-bit source image by a matrix to produce an interleaved four-channel, 8-bit destination image.
- [vImageMatrixMultiply_ARGBFFFF(\_:\_:\_:\_:\_:\_:)](vimagematrixmultiply_argbffff%28____________%29.md): Multiplies each pixel in an interleaved four-channel, 32-bit source image by a matrix to produce an interleaved four-channel, 32-bit destination image.
- [vImageMatrixMultiply_ARGB8888ToPlanar8(\_:\_:\_:\_:\_:\_:\_:)](vimagematrixmultiply_argb8888toplanar8%28______________%29.md): Multiplies each pixel in an interleaved four-channel, 8-bit source image by a matrix to produce a planar 8-bit destination image.

# vImageMatrixMultiply_ARGBFFFFToPlanarF (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Multiplies each pixel in an interleaved four-channel, 32-bit source image by a matrix to produce a planar 32-bit destination image.

## Declaration

```objectivec
vImage_Error vImageMatrixMultiply_ARGBFFFFToPlanarF(const vImage_Buffer *src, const vImage_Buffer *dest, const float matrix[4], const float pre_bias[4], float post_bias, vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the `height`, `width`, and `rowBytes` fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `matrix`: An array of values that contains the four elements in the column-matrix.
- `pre_bias`: An array that contains four bias values. The function adds the corresponding bias value to each source value before the matrix multiplication step. Pass `nil` to specify zero prebias.
- `post_bias`: The postbias value. The function adds the bias value to the destination value after the matrix multiplication step.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

This function treats the four-channel source pixels as a four-element vector, and multiplies each source pixel by the matrix. The operation is equivalent to computing the dot product of the source pixel and the matrix.

The following code shows a four-channel interleaved buffer multiplied by a four-element column matrix to produce a planar destination image. The values in the matrix represent the Rec. 709 luminance coefficients that convert the color source pixels to a grayscale destination image. The source buffer contains a red pixel, a green pixel, and a blue pixel.

```swift
let size = vImage.Size(width: 3, height: 1)

let source = vImage.PixelBuffer<vImage.InterleavedFx4>(
    pixelValues: [0, 1, 0, 0,  // red
                  0, 0, 1, 0,  // green
                  0, 0, 0, 1], // blue
    size: size)

let destination = vImage.PixelBuffer<vImage.PlanarF>(
    size: size)

let redCoefficient: Float = 0.2126
let greenCoefficient: Float = 0.7152
let blueCoefficient: Float = 0.0722

let matrix = [
    0,
    redCoefficient,
    greenCoefficient,
    blueCoefficient
]

source.withUnsafePointerToVImageBuffer { src in
    destination.withUnsafePointerToVImageBuffer { dest in
        
        _ = vImageMatrixMultiply_ARGBFFFFToPlanarF(
            src,
            dest,
            matrix,
            nil,
            0,
            vImage_Flags(kvImageNoFlags))
    }
}

// Prints "[0.2126, 0.7152, 0.0722]".
print(destination.array)
```

## See Also

### Multiplying interleaved pixels by a matrix

- [vImageMatrixMultiply_ARGB8888](vimagematrixmultiply_argb8888%28______________%29.md): Multiplies each pixel in an interleaved four-channel, 8-bit source image by a matrix to produce an interleaved four-channel, 8-bit destination image.
- [vImageMatrixMultiply_ARGBFFFF](vimagematrixmultiply_argbffff%28____________%29.md): Multiplies each pixel in an interleaved four-channel, 32-bit source image by a matrix to produce an interleaved four-channel, 32-bit destination image.
- [vImageMatrixMultiply_ARGB8888ToPlanar8](vimagematrixmultiply_argb8888toplanar8%28______________%29.md): Multiplies each pixel in an interleaved four-channel, 8-bit source image by a matrix to produce a planar 8-bit destination image.
