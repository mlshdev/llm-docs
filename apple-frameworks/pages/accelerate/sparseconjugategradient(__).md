> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseconjugategradient(_:)](https://developer.apple.com/documentation/accelerate/sparseconjugategradient(_:))

# SparseConjugateGradient(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a conjugate gradient (CG) method with specified options.

## Declaration

```swift
func SparseConjugateGradient(_ options: SparseCGOptions) -> SparseIterativeMethod
```

## Parameters

- `options`: The options to use when creating the conjugate gradient method, such as the maximum number of iterations to perform.

<a id="return-value"></a>

## Return Value

A [SparseIterativeMethod](sparseiterativemethod.md) structure that represents a default conjugate gradient method.

<a id="Discussion"></a>

## Discussion

Use CG to solve *Ax = b* when *A* is symmetric positive-definite. The method may break down or fail to converge if *A* isn’t positive-definite.

For square, full-rank, unsymmetric or indefinite equations, use [SparseGMRES(\_:)](sparsegmres%28__%29.md). For rectangular or singular systems, use [SparseLSMR(\_:)](sparselsmr%28__%29.md).

## See Also

### Sparse Iterative Methods for Symmetric Positive-Definite Coefficient Matrices

- [SparseConjugateGradient()](sparseconjugategradient%28%29.md): Returns a conjugate gradient (CG) method.
- [SparseCGOptions](sparsecgoptions.md): Options for creating a conjugate gradient (CG) method.

# SparseConjugateGradient (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a conjugate gradient (CG) method with specified options.

## Declaration

```objectivec
static SparseIterativeMethod SparseConjugateGradient(SparseCGOptions options);
```

## Parameters

- `options`: The options to use when creating the conjugate gradient method, such as the maximum number of iterations to perform.

<a id="return-value"></a>

## Return Value

A [SparseIterativeMethod](sparseiterativemethod.md) structure that represents a default conjugate gradient method.

<a id="Discussion"></a>

## Discussion

Use CG to solve *Ax = b* when *A* is symmetric positive-definite. The method may break down or fail to converge if *A* isn’t positive-definite.

For square, full-rank, unsymmetric or indefinite equations, use [SparseGMRES](sparsegmres%28__%29.md). For rectangular or singular systems, use [SparseLSMR](sparselsmr%28__%29.md).

## See Also

### Sparse Iterative Methods for Symmetric Positive-Definite Coefficient Matrices

- [SparseConjugateGradient](sparseconjugategradient%28%29.md): Returns a conjugate gradient (CG) method.
- [SparseCGOptions](sparsecgoptions.md): Options for creating a conjugate gradient (CG) method.
