> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegmresoptions/rtol](https://developer.apple.com/documentation/accelerate/sparsegmresoptions/rtol)

# rtol (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The relative convergence tolerance.

## Declaration

```swift
var rtol: Double
```

<a id="Discussion"></a>

## Discussion

*‖ b-Ax ‖₂ \< [rtol](rtol.md) \* ‖ b-Ax₀ ‖₂ + [atol](atol.md)* indicates convergence.

If [rtol](rtol.md) `= 0`, the operation uses the default value of `sqrt(epsilon)`.

If it’s negative, the system treats [rtol](rtol.md) as `0.0` (it doesn’t use the default).

## See Also

### Inspecting GMRES Options

- [atol](atol.md): The absolute convergence tolerance.
- [maxIterations](maxiterations.md): The maximum number of iterations to perform.
- [nvec](nvec.md): The number of orthogonal vectors the operation maintains.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): The function to report status.
- [variant](variant.md): The exact variant of GMRES to implement.
- [SparseGMRESVariant_t](../sparsegmresvariant_t.md): Defines the exact variant of GMRES to implement

# rtol (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The relative convergence tolerance.

## Declaration

```objectivec
double rtol;
```

<a id="Discussion"></a>

## Discussion

*‖ b-Ax ‖₂ \< [rtol](rtol.md) \* ‖ b-Ax₀ ‖₂ + [atol](atol.md)* indicates convergence.

If [rtol](rtol.md) `= 0`, the operation uses the default value of `sqrt(epsilon)`.

If it’s negative, the system treats [rtol](rtol.md) as `0.0` (it doesn’t use the default).

## See Also

### Inspecting GMRES Options

- [atol](atol.md): The absolute convergence tolerance.
- [maxIterations](maxiterations.md): The maximum number of iterations to perform.
- [nvec](nvec.md): The number of orthogonal vectors the operation maintains.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): The function to report status.
- [variant](variant.md): The exact variant of GMRES to implement.
- [SparseGMRESVariant_t](../sparsegmresvariant_t.md): Defines the exact variant of GMRES to implement
