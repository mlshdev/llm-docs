> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegmresoptions](https://developer.apple.com/documentation/accelerate/sparsegmresoptions)

# SparseGMRESOptions (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for creating a generalized minimal residual (GMRES) method.

## Declaration

```swift
struct SparseGMRESOptions
```

<a id="overview"></a>

## Overview

Use GMRES to solve *Ax = b* when *A* is symmetric indefinite or unsymmetric.

For symmetric positive-definite systems, use [SparseConjugateGradient(\_:)](sparseconjugategradient%28__%29.md). For rectangular or singular systems, use [SparseLSMR(\_:)](sparselsmr%28__%29.md).

## Topics

### Initializers

- [init()](sparsegmresoptions/init%28%29.md)
- [init(reportError:variant:nvec:maxIterations:atol:rtol:reportStatus:)](sparsegmresoptions/init%28reporterror_variant_nvec_maxiterations_atol_rtol_reportstatus_%29.md): Returns a new GMRES options structure using the specified parameters.

### Inspecting GMRES Options

- [atol](sparsegmresoptions/atol.md): The absolute convergence tolerance.
- [maxIterations](sparsegmresoptions/maxiterations.md): The maximum number of iterations to perform.
- [nvec](sparsegmresoptions/nvec.md): The number of orthogonal vectors the operation maintains.
- [reportError](sparsegmresoptions/reporterror.md): An optional error-reporting routine.
- [reportStatus](sparsegmresoptions/reportstatus.md): The function to report status.
- [rtol](sparsegmresoptions/rtol.md): The relative convergence tolerance.
- [variant](sparsegmresoptions/variant.md): The exact variant of GMRES to implement.
- [SparseGMRESVariant_t](sparsegmresvariant_t.md): Defines the exact variant of GMRES to implement

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Sparse Iterative Methods for Symmetric Indefinite and Unsymmetric Coefficient Matrices

- [SparseGMRES()](sparsegmres%28%29.md): Returns a generalized minimal residual (GMRES) method.
- [SparseGMRES(\_:)](sparsegmres%28__%29.md): Returns a generalized minimal residual (GMRES) method with specified options.

# SparseGMRESOptions (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for creating a generalized minimal residual (GMRES) method.

## Declaration

```objectivec
typedef struct { ... } SparseGMRESOptions;
```

<a id="overview"></a>

## Overview

Use GMRES to solve *Ax = b* when *A* is symmetric indefinite or unsymmetric.

For symmetric positive-definite systems, use [SparseConjugateGradient](sparseconjugategradient%28__%29.md). For rectangular or singular systems, use [SparseLSMR](sparselsmr%28__%29.md).

## Topics

### Inspecting GMRES Options

- [atol](sparsegmresoptions/atol.md): The absolute convergence tolerance.
- [maxIterations](sparsegmresoptions/maxiterations.md): The maximum number of iterations to perform.
- [nvec](sparsegmresoptions/nvec.md): The number of orthogonal vectors the operation maintains.
- [reportError](sparsegmresoptions/reporterror.md): An optional error-reporting routine.
- [reportStatus](sparsegmresoptions/reportstatus.md): The function to report status.
- [rtol](sparsegmresoptions/rtol.md): The relative convergence tolerance.
- [variant](sparsegmresoptions/variant.md): The exact variant of GMRES to implement.
- [SparseGMRESVariant_t](sparsegmresvariant_t.md): Defines the exact variant of GMRES to implement

## See Also

### Sparse Iterative Methods for Symmetric Indefinite and Unsymmetric Coefficient Matrices

- [SparseGMRES](sparsegmres%28%29.md): Returns a generalized minimal residual (GMRES) method.
- [SparseGMRES](sparsegmres%28__%29.md): Returns a generalized minimal residual (GMRES) method with specified options.
