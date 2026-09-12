> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixfindtopk](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixfindtopk)

# MPSMatrixFindTopK (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A kernel for computing the top-K values and their corresponding indices in a matrix.

## Declaration

```swift
class MPSMatrixFindTopK
```

## Topics

### Initializers

- [init(coder:device:)](mpsmatrixfindtopk/init%28coder_device_%29.md)
- [init(device:numberOfTopKValues:)](mpsmatrixfindtopk/init%28device_numberoftopkvalues_%29.md)

### Instance Properties

- [indexOffset](mpsmatrixfindtopk/indexoffset.md)
- [numberOfTopKValues](mpsmatrixfindtopk/numberoftopkvalues.md)
- [sourceColumns](mpsmatrixfindtopk/sourcecolumns.md)
- [sourceRows](mpsmatrixfindtopk/sourcerows.md)

### Instance Methods

- [copy(with:device:)](mpsmatrixfindtopk/copy%28with_device_%29.md)
- [encode(commandBuffer:inputMatrix:resultIndexMatrix:resultValueMatrix:)](mpsmatrixfindtopk/encode%28commandbuffer_inputmatrix_resultindexmatrix_resultvaluematrix_%29.md)

## Relationships

### Inherits From

- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md)

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
- [MPSMatrixVectorMultiplication](mpsmatrixvectormultiplication.md): A matrix-vector multiplication kernel

# MPSMatrixFindTopK (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A kernel for computing the top-K values and their corresponding indices in a matrix.

## Declaration

```objectivec
@interface MPSMatrixFindTopK : MPSMatrixUnaryKernel
```

## Topics

### Instance Properties

- [indexOffset](mpsmatrixfindtopk/indexoffset.md)
- [numberOfTopKValues](mpsmatrixfindtopk/numberoftopkvalues.md)
- [sourceColumns](mpsmatrixfindtopk/sourcecolumns.md)
- [sourceRows](mpsmatrixfindtopk/sourcerows.md)

### Instance Methods

- [copyWithZone:device:](mpsmatrixfindtopk/copy%28with_device_%29.md)
- [encodeToCommandBuffer:inputMatrix:resultIndexMatrix:resultValueMatrix:](mpsmatrixfindtopk/encode%28commandbuffer_inputmatrix_resultindexmatrix_resultvaluematrix_%29.md)
- [initWithCoder:device:](mpsmatrixfindtopk/init%28coder_device_%29.md)
- [initWithDevice:numberOfTopKValues:](mpsmatrixfindtopk/init%28device_numberoftopkvalues_%29.md)

## Relationships

### Inherits From

- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md)

## See Also

### Matrix Arithmetic Operations

- [MPSMatrixSum](mpsmatrixsum.md): A kernel for performing a pointwise summation of a matrix.
- [MPSMatrixMultiplication](mpsmatrixmultiplication.md): A matrix multiplication kernel.
- [MPSMatrixVectorMultiplication](mpsmatrixvectormultiplication.md): A matrix-vector multiplication kernel
