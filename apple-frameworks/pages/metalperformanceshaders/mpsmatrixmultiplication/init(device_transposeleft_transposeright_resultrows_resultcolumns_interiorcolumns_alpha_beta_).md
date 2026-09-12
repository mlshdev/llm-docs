> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixmultiplication/init(device:transposeleft:transposeright:resultrows:resultcolumns:interiorcolumns:alpha:beta:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixmultiplication/init(device:transposeleft:transposeright:resultrows:resultcolumns:interiorcolumns:alpha:beta:))

# init(device:transposeLeft:transposeRight:resultRows:resultColumns:interiorColumns:alpha:beta:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes a matrix multiplication kernel.

## Declaration

```swift
init(device: any MTLDevice, transposeLeft: Bool, transposeRight: Bool, resultRows: Int, resultColumns: Int, interiorColumns: Int, alpha: Double, beta: Double)
```

## Parameters

- `device`: The device on which the matrix multiplication kernel will run.
- `transposeLeft`: A boolean value that indicates if the left input matrix should be used in its transposed form. If the value is [true](https://developer.apple.com/documentation/swift/true), then `op(A) = A**T`; otherwise, `op(A) = A`.
- `transposeRight`: A boolean value that indicates if the right input matrix should be used in its transposed form. If the value is [true](https://developer.apple.com/documentation/swift/true), then `op(B) = B**T`; otherwise, `op(B) = B`.
- `resultRows`: The number of rows in the result matrix (`M` in the *BLAS GEMM* description).
- `resultColumns`: The number of columns in the result matrix (`N` in the *BLAS GEMM* description).
- `interiorColumns`: The number of columns of the left input matrix after the appropriate transpose operation has been applied (`K` in the *BLAS GEMM* description).
- `alpha`: The scale factor to apply to the product, specified in `double` precision. This value will be converted to the appropriate precision in the implementation itself, subject to rounding and/or clamping as necessary.
- `beta`: The scale factor to apply to the initial values of `C`, specified in `double` precision. This value will be converted to the appropriate precision in the implementation itself, subject to rounding and/or clamping as necessary.

<a id="return-value"></a>

## Return Value

A valid [MPSMatrixMultiplication](../mpsmatrixmultiplication.md) object or `nil`, if failure.

## See Also

### Methods

- [encode(commandBuffer:leftMatrix:rightMatrix:resultMatrix:)](encode%28commandbuffer_leftmatrix_rightmatrix_resultmatrix_%29.md): Encodes a matrix multiplication kernel to a command buffer.

# initWithDevice:transposeLeft:transposeRight:resultRows:resultColumns:interiorColumns:alpha:beta: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes a matrix multiplication kernel.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device transposeLeft:(BOOL) transposeLeft transposeRight:(BOOL) transposeRight resultRows:(NSUInteger) resultRows resultColumns:(NSUInteger) resultColumns interiorColumns:(NSUInteger) interiorColumns alpha:(double) alpha beta:(double) beta;
```

## Parameters

- `device`: The device on which the matrix multiplication kernel will run.
- `transposeLeft`: A boolean value that indicates if the left input matrix should be used in its transposed form. If the value is [true](https://developer.apple.com/documentation/swift/true), then `op(A) = A**T`; otherwise, `op(A) = A`.
- `transposeRight`: A boolean value that indicates if the right input matrix should be used in its transposed form. If the value is [true](https://developer.apple.com/documentation/swift/true), then `op(B) = B**T`; otherwise, `op(B) = B`.
- `resultRows`: The number of rows in the result matrix (`M` in the *BLAS GEMM* description).
- `resultColumns`: The number of columns in the result matrix (`N` in the *BLAS GEMM* description).
- `interiorColumns`: The number of columns of the left input matrix after the appropriate transpose operation has been applied (`K` in the *BLAS GEMM* description).
- `alpha`: The scale factor to apply to the product, specified in `double` precision. This value will be converted to the appropriate precision in the implementation itself, subject to rounding and/or clamping as necessary.
- `beta`: The scale factor to apply to the initial values of `C`, specified in `double` precision. This value will be converted to the appropriate precision in the implementation itself, subject to rounding and/or clamping as necessary.

<a id="return-value"></a>

## Return Value

A valid [MPSMatrixMultiplication](../mpsmatrixmultiplication.md) object or `nil`, if failure.

## See Also

### Methods

- [encodeToCommandBuffer:leftMatrix:rightMatrix:resultMatrix:](encode%28commandbuffer_leftmatrix_rightmatrix_resultmatrix_%29.md): Encodes a matrix multiplication kernel to a command buffer.
