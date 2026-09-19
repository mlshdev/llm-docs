> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/sparsegmresoptions/reporterror

# reportError (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An optional error-reporting routine.

## Declaration

```swift
var reportError: ((UnsafePointer<CChar>) -> Void)?
```

## See Also

### Inspecting GMRES Options

- [atol](atol.md): The absolute convergence tolerance.
- [maxIterations](maxiterations.md): The maximum number of iterations to perform.
- [nvec](nvec.md): The number of orthogonal vectors the operation maintains.
- [reportStatus](reportstatus.md): The function to report status.
- [rtol](rtol.md): The relative convergence tolerance.
- [variant](variant.md): The exact variant of GMRES to implement.
- [SparseGMRESVariant_t](../sparsegmresvariant_t.md): Defines the exact variant of GMRES to implement

# reportError (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An optional error-reporting routine.

## Declaration

```objectivec
void (*)(const char *) reportError;
```

## See Also

### Inspecting GMRES Options

- [atol](atol.md): The absolute convergence tolerance.
- [maxIterations](maxiterations.md): The maximum number of iterations to perform.
- [nvec](nvec.md): The number of orthogonal vectors the operation maintains.
- [reportStatus](reportstatus.md): The function to report status.
- [rtol](rtol.md): The relative convergence tolerance.
- [variant](variant.md): The exact variant of GMRES to implement.
- [SparseGMRESVariant_t](../sparsegmresvariant_t.md): Defines the exact variant of GMRES to implement
