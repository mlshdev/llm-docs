> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsecgoptions](https://developer.apple.com/documentation/accelerate/sparsecgoptions)

# SparseCGOptions (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for creating a conjugate gradient (CG) method.

## Declaration

```swift
struct SparseCGOptions
```

<a id="overview"></a>

## Overview

Use CG to solve *Ax = b* when *A* is symmetric positive-definite. The method may break down or fail to converge if *A* isn’t positive-definite.

For square, full-rank, unsymmetric or indefinite equations, use [SparseGMRES(\_:)](sparsegmres%28__%29.md). For rectangular or singular systems, use [SparseLSMR(\_:)](sparselsmr%28__%29.md).

## Topics

### Initializers

- [init()](sparsecgoptions/init%28%29.md): Returns a new CG options structure.
- [init(reportError:maxIterations:atol:rtol:reportStatus:)](sparsecgoptions/init%28reporterror_maxiterations_atol_rtol_reportstatus_%29.md): Returns a new CG options structure using the specified parameters.

### Inspecting CG Options

- [atol](sparsecgoptions/atol.md): The absolute convergence tolerance.
- [maxIterations](sparsecgoptions/maxiterations.md): The maximum number of iterations to perform.
- [reportError](sparsecgoptions/reporterror.md): An optional error-reporting routine.
- [reportStatus](sparsecgoptions/reportstatus.md): The function to report status.
- [rtol](sparsecgoptions/rtol.md): The relative convergence tolerance.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Sparse Iterative Methods for Symmetric Positive-Definite Coefficient Matrices

- [SparseConjugateGradient()](sparseconjugategradient%28%29.md): Returns a conjugate gradient (CG) method.
- [SparseConjugateGradient(\_:)](sparseconjugategradient%28__%29.md): Returns a conjugate gradient (CG) method with specified options.

# SparseCGOptions (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for creating a conjugate gradient (CG) method.

## Declaration

```objectivec
typedef struct { ... } SparseCGOptions;
```

<a id="overview"></a>

## Overview

Use CG to solve *Ax = b* when *A* is symmetric positive-definite. The method may break down or fail to converge if *A* isn’t positive-definite.

For square, full-rank, unsymmetric or indefinite equations, use [SparseGMRES](sparsegmres%28__%29.md). For rectangular or singular systems, use [SparseLSMR](sparselsmr%28__%29.md).

## Topics

### Inspecting CG Options

- [atol](sparsecgoptions/atol.md): The absolute convergence tolerance.
- [maxIterations](sparsecgoptions/maxiterations.md): The maximum number of iterations to perform.
- [reportError](sparsecgoptions/reporterror.md): An optional error-reporting routine.
- [reportStatus](sparsecgoptions/reportstatus.md): The function to report status.
- [rtol](sparsecgoptions/rtol.md): The relative convergence tolerance.

## See Also

### Sparse Iterative Methods for Symmetric Positive-Definite Coefficient Matrices

- [SparseConjugateGradient](sparseconjugategradient%28%29.md): Returns a conjugate gradient (CG) method.
- [SparseConjugateGradient](sparseconjugategradient%28__%29.md): Returns a conjugate gradient (CG) method with specified options.
