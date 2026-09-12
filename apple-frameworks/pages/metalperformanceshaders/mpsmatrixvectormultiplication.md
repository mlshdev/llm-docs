> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixvectormultiplication](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixvectormultiplication)

# MPSMatrixVectorMultiplication (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A matrix-vector multiplication kernel

## Declaration

```swift
class MPSMatrixVectorMultiplication
```

## Topics

### Initializers

- [init(device:transpose:rows:columns:alpha:beta:)](mpsmatrixvectormultiplication/init%28device_transpose_rows_columns_alpha_beta_%29.md)
- [init(device:rows:columns:)](mpsmatrixvectormultiplication/init%28device_rows_columns_%29.md)

### Instance Methods

- [encode(commandBuffer:inputMatrix:inputVector:resultVector:)](mpsmatrixvectormultiplication/encode%28commandbuffer_inputmatrix_inputvector_resultvector_%29.md)

## Relationships

### Inherits From

- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Matrix Arithmetic Operations

- [MPSMatrixSum](mpsmatrixsum.md): A kernel for performing a pointwise summation of a matrix.
- [MPSMatrixMultiplication](mpsmatrixmultiplication.md): A matrix multiplication kernel.
- [MPSMatrixFindTopK](mpsmatrixfindtopk.md): A kernel for computing the top-K values and their corresponding indices in a matrix.

# MPSMatrixVectorMultiplication (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A matrix-vector multiplication kernel

## Declaration

```objectivec
@interface MPSMatrixVectorMultiplication : MPSMatrixBinaryKernel
```

## Topics

### Initializers

- [initWithDevice:transpose:rows:columns:alpha:beta:](mpsmatrixvectormultiplication/init%28device_transpose_rows_columns_alpha_beta_%29.md)
- [initWithDevice:rows:columns:](mpsmatrixvectormultiplication/init%28device_rows_columns_%29.md)

### Instance Methods

- [encodeToCommandBuffer:inputMatrix:inputVector:resultVector:](mpsmatrixvectormultiplication/encode%28commandbuffer_inputmatrix_inputvector_resultvector_%29.md)

## Relationships

### Inherits From

- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md)

## See Also

### Matrix Arithmetic Operations

- [MPSMatrixSum](mpsmatrixsum.md): A kernel for performing a pointwise summation of a matrix.
- [MPSMatrixMultiplication](mpsmatrixmultiplication.md): A matrix multiplication kernel.
- [MPSMatrixFindTopK](mpsmatrixfindtopk.md): A kernel for computing the top-K values and their corresponding indices in a matrix.
