> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixdecompositioncholesky](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixdecompositioncholesky)

# MPSMatrixDecompositionCholesky (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel for computing the Cholesky factorization of a matrix.

## Declaration

```swift
class MPSMatrixDecompositionCholesky
```

<a id="overview"></a>

## Overview

This kernel computes one of the following factorizations of a matrix *A*:

- *A = LLᵀ*
- *A = UᵀU*

where:

- *A* is a symmetric positive-definite matrix for which the factorization is to be computed
- *L* is the lower triangular matrix
- *U* is the upper triangular matrix

## Topics

### Initializers

- [init(device:lower:order:)](mpsmatrixdecompositioncholesky/init%28device_lower_order_%29.md)

### Instance Methods

- [encode(commandBuffer:sourceMatrix:resultMatrix:status:)](mpsmatrixdecompositioncholesky/encode%28commandbuffer_sourcematrix_resultmatrix_status_%29.md)

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

- [MPSMatrixSolveCholesky](mpsmatrixsolvecholesky.md): A kernel for computing the solution of a linear system of equations using a Cholesky factorization.
- [MPSMatrixDecompositionLU](mpsmatrixdecompositionlu.md): A kernel for computing the LU factorization of a matrix using partial pivoting with row interchanges.
- [MPSMatrixSolveLU](mpsmatrixsolvelu.md): A kernel for computing the solution of a linear system of equations using an LU factorization.
- [MPSMatrixSolveTriangular](mpsmatrixsolvetriangular.md): A kernel for computing the solution of a linear system of equations using a triangular coefficient matrix.
- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md): A kernel that consumes one matrix and produces one matrix.
- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md): A kernel that consumes two matrices and produces one matrix.
- [MPSMatrixDecompositionStatus](mpsmatrixdecompositionstatus.md)

# MPSMatrixDecompositionCholesky (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel for computing the Cholesky factorization of a matrix.

## Declaration

```objectivec
@interface MPSMatrixDecompositionCholesky : MPSMatrixUnaryKernel
```

<a id="overview"></a>

## Overview

This kernel computes one of the following factorizations of a matrix *A*:

- *A = LLᵀ*
- *A = UᵀU*

where:

- *A* is a symmetric positive-definite matrix for which the factorization is to be computed
- *L* is the lower triangular matrix
- *U* is the upper triangular matrix

## Topics

### Initializers

- [initWithDevice:lower:order:](mpsmatrixdecompositioncholesky/init%28device_lower_order_%29.md)

### Instance Methods

- [encodeToCommandBuffer:sourceMatrix:resultMatrix:status:](mpsmatrixdecompositioncholesky/encode%28commandbuffer_sourcematrix_resultmatrix_status_%29.md)

## Relationships

### Inherits From

- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md)

## See Also

### Classes for Decomposition and Solving

- [MPSMatrixSolveCholesky](mpsmatrixsolvecholesky.md): A kernel for computing the solution of a linear system of equations using a Cholesky factorization.
- [MPSMatrixDecompositionLU](mpsmatrixdecompositionlu.md): A kernel for computing the LU factorization of a matrix using partial pivoting with row interchanges.
- [MPSMatrixSolveLU](mpsmatrixsolvelu.md): A kernel for computing the solution of a linear system of equations using an LU factorization.
- [MPSMatrixSolveTriangular](mpsmatrixsolvetriangular.md): A kernel for computing the solution of a linear system of equations using a triangular coefficient matrix.
- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md): A kernel that consumes one matrix and produces one matrix.
- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md): A kernel that consumes two matrices and produces one matrix.
- [MPSMatrixDecompositionStatus](mpsmatrixdecompositionstatus.md)
