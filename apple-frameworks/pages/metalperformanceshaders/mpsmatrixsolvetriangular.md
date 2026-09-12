> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixsolvetriangular](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixsolvetriangular)

# MPSMatrixSolveTriangular (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel for computing the solution of a linear system of equations using a triangular coefficient matrix.

## Declaration

```swift
class MPSMatrixSolveTriangular
```

<a id="overview"></a>

## Overview

This kernel finds the solution matrix to the system *op(A) \* X = alpha \* B* or *X \* op(A) = alpha \* B*, where:

- A is either an upper or lower triangular matrix
- *op(A)* is either *Aᵀ* or *A*
- *X* is the resulting matrix of solutions
- *B* is the array of right hand sides for which the equations are to be solved

## Topics

### Initializers

- [init(device:right:upper:transpose:unit:order:numberOfRightHandSides:alpha:)](mpsmatrixsolvetriangular/init%28device_right_upper_transpose_unit_order_numberofrighthandsides_alpha_%29.md)

### Instance Methods

- [encode(commandBuffer:sourceMatrix:rightHandSideMatrix:solutionMatrix:)](mpsmatrixsolvetriangular/encode%28commandbuffer_sourcematrix_righthandsidematrix_solutionmatrix_%29.md)

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

### Classes for Decomposition and Solving

- [MPSMatrixDecompositionCholesky](mpsmatrixdecompositioncholesky.md): A kernel for computing the Cholesky factorization of a matrix.
- [MPSMatrixSolveCholesky](mpsmatrixsolvecholesky.md): A kernel for computing the solution of a linear system of equations using a Cholesky factorization.
- [MPSMatrixDecompositionLU](mpsmatrixdecompositionlu.md): A kernel for computing the LU factorization of a matrix using partial pivoting with row interchanges.
- [MPSMatrixSolveLU](mpsmatrixsolvelu.md): A kernel for computing the solution of a linear system of equations using an LU factorization.
- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md): A kernel that consumes one matrix and produces one matrix.
- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md): A kernel that consumes two matrices and produces one matrix.
- [MPSMatrixDecompositionStatus](mpsmatrixdecompositionstatus.md)

# MPSMatrixSolveTriangular (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel for computing the solution of a linear system of equations using a triangular coefficient matrix.

## Declaration

```objectivec
@interface MPSMatrixSolveTriangular : MPSMatrixBinaryKernel
```

<a id="overview"></a>

## Overview

This kernel finds the solution matrix to the system *op(A) \* X = alpha \* B* or *X \* op(A) = alpha \* B*, where:

- A is either an upper or lower triangular matrix
- *op(A)* is either *Aᵀ* or *A*
- *X* is the resulting matrix of solutions
- *B* is the array of right hand sides for which the equations are to be solved

## Topics

### Initializers

- [initWithDevice:right:upper:transpose:unit:order:numberOfRightHandSides:alpha:](mpsmatrixsolvetriangular/init%28device_right_upper_transpose_unit_order_numberofrighthandsides_alpha_%29.md)

### Instance Methods

- [encodeToCommandBuffer:sourceMatrix:rightHandSideMatrix:solutionMatrix:](mpsmatrixsolvetriangular/encode%28commandbuffer_sourcematrix_righthandsidematrix_solutionmatrix_%29.md)

## Relationships

### Inherits From

- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md)

## See Also

### Classes for Decomposition and Solving

- [MPSMatrixDecompositionCholesky](mpsmatrixdecompositioncholesky.md): A kernel for computing the Cholesky factorization of a matrix.
- [MPSMatrixSolveCholesky](mpsmatrixsolvecholesky.md): A kernel for computing the solution of a linear system of equations using a Cholesky factorization.
- [MPSMatrixDecompositionLU](mpsmatrixdecompositionlu.md): A kernel for computing the LU factorization of a matrix using partial pivoting with row interchanges.
- [MPSMatrixSolveLU](mpsmatrixsolvelu.md): A kernel for computing the solution of a linear system of equations using an LU factorization.
- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md): A kernel that consumes one matrix and produces one matrix.
- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md): A kernel that consumes two matrices and produces one matrix.
- [MPSMatrixDecompositionStatus](mpsmatrixdecompositionstatus.md)
