> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparselsmroptions](https://developer.apple.com/documentation/accelerate/sparselsmroptions)

# SparseLSMROptions (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for creating a least squares minimum residual method.

## Declaration

```swift
struct SparseLSMROptions
```

<a id="overview"></a>

## Overview

LSMR is a minimal residual (MINRES) method for solving least squares. Use LSMR to solve equations of the form *Ax = b* where an exact solution doesn’t exist. The returned solution minimizes ‖ *b-Ax* ‖₂.

Although LSMR is equivalent to applying MINRES to the normal equations *A\__ᵀ\__Ax = A\__ᵀ\__b* in exact arithmetic, it has superior numerical behavior and is the preferred method. Due to the implicit squaring of the condition of *A* in the normal equations, LSMR may struggle to converge in single precision. Use double-precision arithmetic where possible.

For symmetric positive-definite systems, use [SparseConjugateGradient(\_:)](sparseconjugategradient%28__%29.md). For square, full-rank unsymmetric or indefinite equations, use [SparseGMRES(\_:)](sparsegmres%28__%29.md).

## Topics

### Initializers

- [init()](sparselsmroptions/init%28%29.md): Returns a new LSMR options structure.
- [init(reportError:lambda:nvec:convergenceTest:atol:rtol:btol:conditionLimit:maxIterations:reportStatus:)](sparselsmroptions/init%28reporterror_lambda_nvec_convergencetest_atol_rtol_btol_conditionlimit_maxiterations_reportstatus_%29.md): Returns a new LSMR options structure using the specified parameters.

### Inspecting LSMR Options

- [atol](sparselsmroptions/atol.md): The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).
- [btol](sparselsmroptions/btol.md): The *B* tolerance (Fong-Saunders test only).
- [conditionLimit](sparselsmroptions/conditionlimit.md): The condition number limit (Fong-Saunders test only).
- [convergenceTest](sparselsmroptions/convergencetest.md): The convergence test to use for iterative solve methods.
- [SparseLSMRConvergenceTest_t](sparselsmrconvergencetest_t.md): Constants that specify the type of convergence test.
- [lambda](sparselsmroptions/lambda.md): The damping parameter lambda for regularized least squares.
- [maxIterations](sparselsmroptions/maxiterations.md): The maximum number of iterations.
- [nvec](sparselsmroptions/nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](sparselsmroptions/reporterror.md): An optional error-reporting routine.
- [reportStatus](sparselsmroptions/reportstatus.md): An optional status-reporting routine.
- [rtol](sparselsmroptions/rtol.md): The relative convergence tolerance (default test only).

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Sparse Iterative Methods for Overdetermined and Underdetermined Systems

- [SparseLSMR()](sparselsmr%28%29.md): Returns a default least squares minimum residual (LSMR) method.
- [SparseLSMR(\_:)](sparselsmr%28__%29.md): Returns a least squares minimum residual method with specified options.

# SparseLSMROptions (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for creating a least squares minimum residual method.

## Declaration

```objectivec
typedef struct { ... } SparseLSMROptions;
```

<a id="overview"></a>

## Overview

LSMR is a minimal residual (MINRES) method for solving least squares. Use LSMR to solve equations of the form *Ax = b* where an exact solution doesn’t exist. The returned solution minimizes ‖ *b-Ax* ‖₂.

Although LSMR is equivalent to applying MINRES to the normal equations *A\__ᵀ\__Ax = A\__ᵀ\__b* in exact arithmetic, it has superior numerical behavior and is the preferred method. Due to the implicit squaring of the condition of *A* in the normal equations, LSMR may struggle to converge in single precision. Use double-precision arithmetic where possible.

For symmetric positive-definite systems, use [SparseConjugateGradient](sparseconjugategradient%28__%29.md). For square, full-rank unsymmetric or indefinite equations, use [SparseGMRES](sparsegmres%28__%29.md).

## Topics

### Inspecting LSMR Options

- [atol](sparselsmroptions/atol.md): The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).
- [btol](sparselsmroptions/btol.md): The *B* tolerance (Fong-Saunders test only).
- [conditionLimit](sparselsmroptions/conditionlimit.md): The condition number limit (Fong-Saunders test only).
- [convergenceTest](sparselsmroptions/convergencetest.md): The convergence test to use for iterative solve methods.
- [SparseLSMRConvergenceTest_t](sparselsmrconvergencetest_t.md): Constants that specify the type of convergence test.
- [lambda](sparselsmroptions/lambda.md): The damping parameter lambda for regularized least squares.
- [maxIterations](sparselsmroptions/maxiterations.md): The maximum number of iterations.
- [nvec](sparselsmroptions/nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](sparselsmroptions/reporterror.md): An optional error-reporting routine.
- [reportStatus](sparselsmroptions/reportstatus.md): An optional status-reporting routine.
- [rtol](sparselsmroptions/rtol.md): The relative convergence tolerance (default test only).

## See Also

### Sparse Iterative Methods for Overdetermined and Underdetermined Systems

- [SparseLSMR](sparselsmr%28%29.md): Returns a default least squares minimum residual (LSMR) method.
- [SparseLSMR](sparselsmr%28__%29.md): Returns a least squares minimum residual method with specified options.
