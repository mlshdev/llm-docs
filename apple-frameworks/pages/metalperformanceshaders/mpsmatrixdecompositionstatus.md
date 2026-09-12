> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixdecompositionstatus](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixdecompositionstatus)

# MPSMatrixDecompositionStatus (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
enum MPSMatrixDecompositionStatus
```

## Topics

### Enumeration Cases

- [MPSMatrixDecompositionStatus.failure](mpsmatrixdecompositionstatus/failure.md): A status indicating the decomposition was not able to be completed.
- [MPSMatrixDecompositionStatus.nonPositiveDefinite](mpsmatrixdecompositionstatus/nonpositivedefinite.md): A status indicating a non-positive-definite pivot value was calculated.
- [MPSMatrixDecompositionStatus.singular](mpsmatrixdecompositionstatus/singular.md): A status indicating the resulting decomposition is not suitable for use in a subsequent system solve.
- [MPSMatrixDecompositionStatus.success](mpsmatrixdecompositionstatus/success.md): A status indicating the decomposition was performed successfully.

### Initializers

- [init(rawValue:)](mpsmatrixdecompositionstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes for Decomposition and Solving

- [MPSMatrixDecompositionCholesky](mpsmatrixdecompositioncholesky.md): A kernel for computing the Cholesky factorization of a matrix.
- [MPSMatrixSolveCholesky](mpsmatrixsolvecholesky.md): A kernel for computing the solution of a linear system of equations using a Cholesky factorization.
- [MPSMatrixDecompositionLU](mpsmatrixdecompositionlu.md): A kernel for computing the LU factorization of a matrix using partial pivoting with row interchanges.
- [MPSMatrixSolveLU](mpsmatrixsolvelu.md): A kernel for computing the solution of a linear system of equations using an LU factorization.
- [MPSMatrixSolveTriangular](mpsmatrixsolvetriangular.md): A kernel for computing the solution of a linear system of equations using a triangular coefficient matrix.
- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md): A kernel that consumes one matrix and produces one matrix.
- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md): A kernel that consumes two matrices and produces one matrix.

# MPSMatrixDecompositionStatus (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
enum MPSMatrixDecompositionStatus : int;
```

## Topics

### Enumeration Cases

- [MPSMatrixDecompositionStatusFailure](mpsmatrixdecompositionstatus/failure.md): A status indicating the decomposition was not able to be completed.
- [MPSMatrixDecompositionStatusNonPositiveDefinite](mpsmatrixdecompositionstatus/nonpositivedefinite.md): A status indicating a non-positive-definite pivot value was calculated.
- [MPSMatrixDecompositionStatusSingular](mpsmatrixdecompositionstatus/singular.md): A status indicating the resulting decomposition is not suitable for use in a subsequent system solve.
- [MPSMatrixDecompositionStatusSuccess](mpsmatrixdecompositionstatus/success.md): A status indicating the decomposition was performed successfully.

## See Also

### Classes for Decomposition and Solving

- [MPSMatrixDecompositionCholesky](mpsmatrixdecompositioncholesky.md): A kernel for computing the Cholesky factorization of a matrix.
- [MPSMatrixSolveCholesky](mpsmatrixsolvecholesky.md): A kernel for computing the solution of a linear system of equations using a Cholesky factorization.
- [MPSMatrixDecompositionLU](mpsmatrixdecompositionlu.md): A kernel for computing the LU factorization of a matrix using partial pivoting with row interchanges.
- [MPSMatrixSolveLU](mpsmatrixsolvelu.md): A kernel for computing the solution of a linear system of equations using an LU factorization.
- [MPSMatrixSolveTriangular](mpsmatrixsolvetriangular.md): A kernel for computing the solution of a linear system of equations using a triangular coefficient matrix.
- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md): A kernel that consumes one matrix and produces one matrix.
- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md): A kernel that consumes two matrices and produces one matrix.
