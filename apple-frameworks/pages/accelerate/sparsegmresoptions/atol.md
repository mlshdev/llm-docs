> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegmresoptions/atol](https://developer.apple.com/documentation/accelerate/sparsegmresoptions/atol)

# atol (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The absolute convergence tolerance.

## Declaration

```swift
var atol: Double
```

<a id="Discussion"></a>

## Discussion

*‖ b-Ax ‖₂ \< [rtol](rtol.md) \* ‖ b-Ax₀ ‖₂ + [atol](atol.md)* indicates convergence.

## See Also

### Inspecting GMRES Options

- [maxIterations](maxiterations.md): The maximum number of iterations to perform.
- [nvec](nvec.md): The number of orthogonal vectors the operation maintains.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): The function to report status.
- [rtol](rtol.md): The relative convergence tolerance.
- [variant](variant.md): The exact variant of GMRES to implement.
- [SparseGMRESVariant_t](../sparsegmresvariant_t.md): Defines the exact variant of GMRES to implement

# atol (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The absolute convergence tolerance.

## Declaration

```objectivec
double atol;
```

<a id="Discussion"></a>

## Discussion

*‖ b-Ax ‖₂ \< [rtol](rtol.md) \* ‖ b-Ax₀ ‖₂ + [atol](atol.md)* indicates convergence.

## See Also

### Inspecting GMRES Options

- [maxIterations](maxiterations.md): The maximum number of iterations to perform.
- [nvec](nvec.md): The number of orthogonal vectors the operation maintains.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): The function to report status.
- [rtol](rtol.md): The relative convergence tolerance.
- [variant](variant.md): The exact variant of GMRES to implement.
- [SparseGMRESVariant_t](../sparsegmresvariant_t.md): Defines the exact variant of GMRES to implement
