> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseconjugategradient()](https://developer.apple.com/documentation/accelerate/sparseconjugategradient())

# SparseConjugateGradient() (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a conjugate gradient (CG) method.

## Declaration

```swift
func SparseConjugateGradient() -> SparseIterativeMethod
```

<a id="return-value"></a>

## Return Value

A [SparseIterativeMethod](sparseiterativemethod.md) structure that represents a default conjugate gradient method.

<a id="Discussion"></a>

## Discussion

Use CG to solve *Ax = b* when *A* is symmetric positive-definite. The method may break down or fail to converge if *A* isn’t positive-definite.

For square, full-rank, unsymmetric or indefinite equations, use [SparseGMRES(\_:)](sparsegmres%28__%29.md). For rectangular or singular systems, use [SparseLSMR(\_:)](sparselsmr%28__%29.md).

## See Also

### Sparse Iterative Methods for Symmetric Positive-Definite Coefficient Matrices

- [SparseConjugateGradient(\_:)](sparseconjugategradient%28__%29.md): Returns a conjugate gradient (CG) method with specified options.
- [SparseCGOptions](sparsecgoptions.md): Options for creating a conjugate gradient (CG) method.

# SparseConjugateGradient (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a conjugate gradient (CG) method.

## Declaration

```objectivec
static SparseIterativeMethod SparseConjugateGradient();
```

<a id="return-value"></a>

## Return Value

A [SparseIterativeMethod](sparseiterativemethod.md) structure that represents a default conjugate gradient method.

<a id="Discussion"></a>

## Discussion

Use CG to solve *Ax = b* when *A* is symmetric positive-definite. The method may break down or fail to converge if *A* isn’t positive-definite.

For square, full-rank, unsymmetric or indefinite equations, use [SparseGMRES](sparsegmres%28__%29.md). For rectangular or singular systems, use [SparseLSMR](sparselsmr%28__%29.md).

## See Also

### Sparse Iterative Methods for Symmetric Positive-Definite Coefficient Matrices

- [SparseConjugateGradient](sparseconjugategradient%28__%29.md): Returns a conjugate gradient (CG) method with specified options.
- [SparseCGOptions](sparsecgoptions.md): Options for creating a conjugate gradient (CG) method.
