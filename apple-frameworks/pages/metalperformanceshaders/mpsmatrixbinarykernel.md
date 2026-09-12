> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixbinarykernel](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixbinarykernel)

# MPSMatrixBinaryKernel (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel that consumes two matrices and produces one matrix.

## Declaration

```swift
class MPSMatrixBinaryKernel
```

## Topics

### Instance Properties

- [batchSize](mpsmatrixbinarykernel/batchsize.md)
- [batchStart](mpsmatrixbinarykernel/batchstart.md)
- [primarySourceMatrixOrigin](mpsmatrixbinarykernel/primarysourcematrixorigin.md)
- [resultMatrixOrigin](mpsmatrixbinarykernel/resultmatrixorigin.md)
- [secondarySourceMatrixOrigin](mpsmatrixbinarykernel/secondarysourcematrixorigin.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Inherited By

- [MPSMatrixBatchNormalizationGradient](mpsmatrixbatchnormalizationgradient.md)
- [MPSMatrixFullyConnected](mpsmatrixfullyconnected.md)
- [MPSMatrixFullyConnectedGradient](mpsmatrixfullyconnectedgradient.md)
- [MPSMatrixNeuronGradient](mpsmatrixneurongradient.md)
- [MPSMatrixSoftMaxGradient](mpsmatrixsoftmaxgradient.md)
- [MPSMatrixSolveCholesky](mpsmatrixsolvecholesky.md)
- [MPSMatrixSolveLU](mpsmatrixsolvelu.md)
- [MPSMatrixSolveTriangular](mpsmatrixsolvetriangular.md)
- [MPSMatrixVectorMultiplication](mpsmatrixvectormultiplication.md)

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
- [MPSMatrixSolveTriangular](mpsmatrixsolvetriangular.md): A kernel for computing the solution of a linear system of equations using a triangular coefficient matrix.
- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md): A kernel that consumes one matrix and produces one matrix.
- [MPSMatrixDecompositionStatus](mpsmatrixdecompositionstatus.md)

# MPSMatrixBinaryKernel (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel that consumes two matrices and produces one matrix.

## Declaration

```objectivec
@interface MPSMatrixBinaryKernel : MPSKernel
```

## Topics

### Instance Properties

- [batchSize](mpsmatrixbinarykernel/batchsize.md)
- [batchStart](mpsmatrixbinarykernel/batchstart.md)
- [primarySourceMatrixOrigin](mpsmatrixbinarykernel/primarysourcematrixorigin.md)
- [resultMatrixOrigin](mpsmatrixbinarykernel/resultmatrixorigin.md)
- [secondarySourceMatrixOrigin](mpsmatrixbinarykernel/secondarysourcematrixorigin.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Inherited By

- [MPSMatrixBatchNormalizationGradient](mpsmatrixbatchnormalizationgradient.md)
- [MPSMatrixFullyConnected](mpsmatrixfullyconnected.md)
- [MPSMatrixFullyConnectedGradient](mpsmatrixfullyconnectedgradient.md)
- [MPSMatrixNeuronGradient](mpsmatrixneurongradient.md)
- [MPSMatrixSoftMaxGradient](mpsmatrixsoftmaxgradient.md)
- [MPSMatrixSolveCholesky](mpsmatrixsolvecholesky.md)
- [MPSMatrixSolveLU](mpsmatrixsolvelu.md)
- [MPSMatrixSolveTriangular](mpsmatrixsolvetriangular.md)
- [MPSMatrixVectorMultiplication](mpsmatrixvectormultiplication.md)

## See Also

### Classes for Decomposition and Solving

- [MPSMatrixDecompositionCholesky](mpsmatrixdecompositioncholesky.md): A kernel for computing the Cholesky factorization of a matrix.
- [MPSMatrixSolveCholesky](mpsmatrixsolvecholesky.md): A kernel for computing the solution of a linear system of equations using a Cholesky factorization.
- [MPSMatrixDecompositionLU](mpsmatrixdecompositionlu.md): A kernel for computing the LU factorization of a matrix using partial pivoting with row interchanges.
- [MPSMatrixSolveLU](mpsmatrixsolvelu.md): A kernel for computing the solution of a linear system of equations using an LU factorization.
- [MPSMatrixSolveTriangular](mpsmatrixsolvetriangular.md): A kernel for computing the solution of a linear system of equations using a triangular coefficient matrix.
- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md): A kernel that consumes one matrix and produces one matrix.
- [MPSMatrixDecompositionStatus](mpsmatrixdecompositionstatus.md)
