> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixmultiplication](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixmultiplication)

# MPSMatrixMultiplication (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A matrix multiplication kernel.

## Declaration

```swift
class MPSMatrixMultiplication
```

<a id="overview"></a>

## Overview

An [MPSMatrixMultiplication](mpsmatrixmultiplication.md) object computes the following operation:

*C = alpha \* op(A) \* op(B) + beta \* C*

Where *A*, *B*\_,\_ and *C* are matrices represented by [MPSMatrix](mpsmatrix.md) objects, and *alpha* and *beta* are scalar values of the same data type as the values of *C*. *A* and *B* may each have an optional transposition operation applied.

Matrices *A*, *B*, and *C* are also referred to as the left input matrix, the right input matrix, and the result matrix respectively.

## Topics

### Methods

- [init(device:transposeLeft:transposeRight:resultRows:resultColumns:interiorColumns:alpha:beta:)](mpsmatrixmultiplication/init%28device_transposeleft_transposeright_resultrows_resultcolumns_interiorcolumns_alpha_beta_%29.md): Initializes a matrix multiplication kernel.
- [encode(commandBuffer:leftMatrix:rightMatrix:resultMatrix:)](mpsmatrixmultiplication/encode%28commandbuffer_leftmatrix_rightmatrix_resultmatrix_%29.md): Encodes a matrix multiplication kernel to a command buffer.

### Properties

- [leftMatrixOrigin](mpsmatrixmultiplication/leftmatrixorigin.md): The origin of the left input matrix.
- [rightMatrixOrigin](mpsmatrixmultiplication/rightmatrixorigin.md): The origin of the right input matrix.
- [resultMatrixOrigin](mpsmatrixmultiplication/resultmatrixorigin.md): The origin of the result matrix.
- [batchSize](mpsmatrixmultiplication/batchsize.md)
- [batchStart](mpsmatrixmultiplication/batchstart.md)

### Initializers

- [init(device:resultRows:resultColumns:interiorColumns:)](mpsmatrixmultiplication/init%28device_resultrows_resultcolumns_interiorcolumns_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

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
- [MPSMatrixVectorMultiplication](mpsmatrixvectormultiplication.md): A matrix-vector multiplication kernel
- [MPSMatrixFindTopK](mpsmatrixfindtopk.md): A kernel for computing the top-K values and their corresponding indices in a matrix.

# MPSMatrixMultiplication (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A matrix multiplication kernel.

## Declaration

```objectivec
@interface MPSMatrixMultiplication : MPSKernel
```

<a id="overview"></a>

## Overview

An [MPSMatrixMultiplication](mpsmatrixmultiplication.md) object computes the following operation:

*C = alpha \* op(A) \* op(B) + beta \* C*

Where *A*, *B*\_,\_ and *C* are matrices represented by [MPSMatrix](mpsmatrix.md) objects, and *alpha* and *beta* are scalar values of the same data type as the values of *C*. *A* and *B* may each have an optional transposition operation applied.

Matrices *A*, *B*, and *C* are also referred to as the left input matrix, the right input matrix, and the result matrix respectively.

## Topics

### Methods

- [initWithDevice:transposeLeft:transposeRight:resultRows:resultColumns:interiorColumns:alpha:beta:](mpsmatrixmultiplication/init%28device_transposeleft_transposeright_resultrows_resultcolumns_interiorcolumns_alpha_beta_%29.md): Initializes a matrix multiplication kernel.
- [encodeToCommandBuffer:leftMatrix:rightMatrix:resultMatrix:](mpsmatrixmultiplication/encode%28commandbuffer_leftmatrix_rightmatrix_resultmatrix_%29.md): Encodes a matrix multiplication kernel to a command buffer.

### Properties

- [leftMatrixOrigin](mpsmatrixmultiplication/leftmatrixorigin.md): The origin of the left input matrix.
- [rightMatrixOrigin](mpsmatrixmultiplication/rightmatrixorigin.md): The origin of the right input matrix.
- [resultMatrixOrigin](mpsmatrixmultiplication/resultmatrixorigin.md): The origin of the result matrix.
- [batchSize](mpsmatrixmultiplication/batchsize.md)
- [batchStart](mpsmatrixmultiplication/batchstart.md)

### Instance Methods

- [initWithDevice:resultRows:resultColumns:interiorColumns:](mpsmatrixmultiplication/init%28device_resultrows_resultcolumns_interiorcolumns_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

## See Also

### Matrix Arithmetic Operations

- [MPSMatrixSum](mpsmatrixsum.md): A kernel for performing a pointwise summation of a matrix.
- [MPSMatrixVectorMultiplication](mpsmatrixvectormultiplication.md): A matrix-vector multiplication kernel
- [MPSMatrixFindTopK](mpsmatrixfindtopk.md): A kernel for computing the top-K values and their corresponding indices in a matrix.
