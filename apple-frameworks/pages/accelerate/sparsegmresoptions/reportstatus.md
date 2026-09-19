> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/sparsegmresoptions/reportstatus

# reportStatus (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The function to report status.

## Declaration

```swift
var reportStatus: ((UnsafePointer<CChar>) -> Void)?
```

## See Also

### Inspecting GMRES Options

- [atol](atol.md): The absolute convergence tolerance.
- [maxIterations](maxiterations.md): The maximum number of iterations to perform.
- [nvec](nvec.md): The number of orthogonal vectors the operation maintains.
- [reportError](reporterror.md): An optional error-reporting routine.
- [rtol](rtol.md): The relative convergence tolerance.
- [variant](variant.md): The exact variant of GMRES to implement.
- [SparseGMRESVariant_t](../sparsegmresvariant_t.md): Defines the exact variant of GMRES to implement

# reportStatus (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The function to report status.

## Declaration

```objectivec
void (*)(const char *) reportStatus;
```

## See Also

### Inspecting GMRES Options

- [atol](atol.md): The absolute convergence tolerance.
- [maxIterations](maxiterations.md): The maximum number of iterations to perform.
- [nvec](nvec.md): The number of orthogonal vectors the operation maintains.
- [reportError](reporterror.md): An optional error-reporting routine.
- [rtol](rtol.md): The relative convergence tolerance.
- [variant](variant.md): The exact variant of GMRES to implement.
- [SparseGMRESVariant_t](../sparsegmresvariant_t.md): Defines the exact variant of GMRES to implement
