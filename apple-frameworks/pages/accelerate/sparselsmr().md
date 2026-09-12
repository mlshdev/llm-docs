> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparselsmr()](https://developer.apple.com/documentation/accelerate/sparselsmr())

# SparseLSMR() (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a default least squares minimum residual (LSMR) method.

## Declaration

```swift
func SparseLSMR() -> SparseIterativeMethod
```

<a id="return-value"></a>

## Return Value

A [SparseIterativeMethod](sparseiterativemethod.md) structure that represents a default LSMR method.

<a id="Discussion"></a>

## Discussion

LSMR is a minimal residual (MINRES) method for solving least squares. Use LSMR to solve equations of the form *Ax = b* where an exact solution doesn’t exist. The returned solution minimizes ‖ *b-Ax* ‖₂.

Although LSMR is equivalent to applying MINRES to the normal equations *AᵀAx = Aᵀb* in exact arithmetic, it has superior numerical behavior and is the preferred method. Due to the implicit squaring of the condition of *A* in the normal equations, LSMR may struggle to converge in single precision. Use double-precision arithmetic where possible.

For symmetric positive-definite systems, use [SparseConjugateGradient(\_:)](sparseconjugategradient%28__%29.md). For square, full-rank unsymmetric or indefinite equations, use [SparseGMRES(\_:)](sparsegmres%28__%29.md).

## See Also

### Sparse Iterative Methods for Overdetermined and Underdetermined Systems

- [SparseLSMR(\_:)](sparselsmr%28__%29.md): Returns a least squares minimum residual method with specified options.
- [SparseLSMROptions](sparselsmroptions.md): Options for creating a least squares minimum residual method.

# SparseLSMR (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a default least squares minimum residual (LSMR) method.

## Declaration

```objectivec
static SparseIterativeMethod SparseLSMR();
```

<a id="return-value"></a>

## Return Value

A [SparseIterativeMethod](sparseiterativemethod.md) structure that represents a default LSMR method.

<a id="Discussion"></a>

## Discussion

LSMR is a minimal residual (MINRES) method for solving least squares. Use LSMR to solve equations of the form *Ax = b* where an exact solution doesn’t exist. The returned solution minimizes ‖ *b-Ax* ‖₂.

Although LSMR is equivalent to applying MINRES to the normal equations *AᵀAx = Aᵀb* in exact arithmetic, it has superior numerical behavior and is the preferred method. Due to the implicit squaring of the condition of *A* in the normal equations, LSMR may struggle to converge in single precision. Use double-precision arithmetic where possible.

For symmetric positive-definite systems, use [SparseConjugateGradient](sparseconjugategradient%28__%29.md). For square, full-rank unsymmetric or indefinite equations, use [SparseGMRES](sparsegmres%28__%29.md).

## See Also

### Sparse Iterative Methods for Overdetermined and Underdetermined Systems

- [SparseLSMR](sparselsmr%28__%29.md): Returns a least squares minimum residual method with specified options.
- [SparseLSMROptions](sparselsmroptions.md): Options for creating a least squares minimum residual method.
