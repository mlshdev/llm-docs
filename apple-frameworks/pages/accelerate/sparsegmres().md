> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegmres()](https://developer.apple.com/documentation/accelerate/sparsegmres())

# SparseGMRES() (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a generalized minimal residual (GMRES) method.

## Declaration

```swift
func SparseGMRES() -> SparseIterativeMethod
```

<a id="return-value"></a>

## Return Value

A [SparseIterativeMethod](sparseiterativemethod.md) structure that represents a generalized minimal residual (GMRES) method.

<a id="Discussion"></a>

## Discussion

Use GMRES to solve *Ax = b* when *A* is symmetric indefinite or unsymmetric.

For symmetric positive-definite systems, use [SparseConjugateGradient(\_:)](sparseconjugategradient%28__%29.md). For rectangular or singular systems, use [SparseLSMR(\_:)](sparselsmr%28__%29.md).

## See Also

### Sparse Iterative Methods for Symmetric Indefinite and Unsymmetric Coefficient Matrices

- [SparseGMRES(\_:)](sparsegmres%28__%29.md): Returns a generalized minimal residual (GMRES) method with specified options.
- [SparseGMRESOptions](sparsegmresoptions.md): Options for creating a generalized minimal residual (GMRES) method.

# SparseGMRES (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a generalized minimal residual (GMRES) method.

## Declaration

```objectivec
static SparseIterativeMethod SparseGMRES();
```

<a id="return-value"></a>

## Return Value

A [SparseIterativeMethod](sparseiterativemethod.md) structure that represents a generalized minimal residual (GMRES) method.

<a id="Discussion"></a>

## Discussion

Use GMRES to solve *Ax = b* when *A* is symmetric indefinite or unsymmetric.

For symmetric positive-definite systems, use [SparseConjugateGradient](sparseconjugategradient%28__%29.md). For rectangular or singular systems, use [SparseLSMR](sparselsmr%28__%29.md).

## See Also

### Sparse Iterative Methods for Symmetric Indefinite and Unsymmetric Coefficient Matrices

- [SparseGMRES](sparsegmres%28__%29.md): Returns a generalized minimal residual (GMRES) method with specified options.
- [SparseGMRESOptions](sparsegmresoptions.md): Options for creating a generalized minimal residual (GMRES) method.
