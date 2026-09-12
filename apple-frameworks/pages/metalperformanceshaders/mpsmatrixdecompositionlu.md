> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixdecompositionlu](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixdecompositionlu)

# MPSMatrixDecompositionLU (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel for computing the LU factorization of a matrix using partial pivoting with row interchanges.

## Declaration

```swift
class MPSMatrixDecompositionLU
```

<a id="overview"></a>

## Overview

This kernel object computes an LU factorization, *PA = LU*, where:

- *A* is a matrix for which the LU factorization is to be computed
- *L* is a unit lower triangular matrix
- *U* is an upper triangular matrix
- *P* is a permutation matrix

## Topics

### Initializers

- [init(device:rows:columns:)](mpsmatrixdecompositionlu/init%28device_rows_columns_%29.md)

### Instance Methods

- [encode(commandBuffer:sourceMatrix:resultMatrix:pivotIndices:info:)](mpsmatrixdecompositionlu/encode%28commandbuffer_sourcematrix_resultmatrix_pivotindices_info_%29.md)

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

### Classes for Decomposition and Solving

- [MPSMatrixDecompositionCholesky](mpsmatrixdecompositioncholesky.md): A kernel for computing the Cholesky factorization of a matrix.
- [MPSMatrixSolveCholesky](mpsmatrixsolvecholesky.md): A kernel for computing the solution of a linear system of equations using a Cholesky factorization.
- [MPSMatrixSolveLU](mpsmatrixsolvelu.md): A kernel for computing the solution of a linear system of equations using an LU factorization.
- [MPSMatrixSolveTriangular](mpsmatrixsolvetriangular.md): A kernel for computing the solution of a linear system of equations using a triangular coefficient matrix.
- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md): A kernel that consumes one matrix and produces one matrix.
- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md): A kernel that consumes two matrices and produces one matrix.
- [MPSMatrixDecompositionStatus](mpsmatrixdecompositionstatus.md)

# MPSMatrixDecompositionLU (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel for computing the LU factorization of a matrix using partial pivoting with row interchanges.

## Declaration

```objectivec
@interface MPSMatrixDecompositionLU : MPSMatrixUnaryKernel
```

<a id="overview"></a>

## Overview

This kernel object computes an LU factorization, *PA = LU*, where:

- *A* is a matrix for which the LU factorization is to be computed
- *L* is a unit lower triangular matrix
- *U* is an upper triangular matrix
- *P* is a permutation matrix

## Topics

### Initializers

- [initWithDevice:rows:columns:](mpsmatrixdecompositionlu/init%28device_rows_columns_%29.md)

### Instance Methods

- [encodeToCommandBuffer:sourceMatrix:resultMatrix:pivotIndices:status:](mpsmatrixdecompositionlu/encode%28commandbuffer_sourcematrix_resultmatrix_pivotindices_info_%29.md)

## Relationships

### Inherits From

- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md)

## See Also

### Classes for Decomposition and Solving

- [MPSMatrixDecompositionCholesky](mpsmatrixdecompositioncholesky.md): A kernel for computing the Cholesky factorization of a matrix.
- [MPSMatrixSolveCholesky](mpsmatrixsolvecholesky.md): A kernel for computing the solution of a linear system of equations using a Cholesky factorization.
- [MPSMatrixSolveLU](mpsmatrixsolvelu.md): A kernel for computing the solution of a linear system of equations using an LU factorization.
- [MPSMatrixSolveTriangular](mpsmatrixsolvetriangular.md): A kernel for computing the solution of a linear system of equations using a triangular coefficient matrix.
- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md): A kernel that consumes one matrix and produces one matrix.
- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md): A kernel that consumes two matrices and produces one matrix.
- [MPSMatrixDecompositionStatus](mpsmatrixdecompositionstatus.md)
