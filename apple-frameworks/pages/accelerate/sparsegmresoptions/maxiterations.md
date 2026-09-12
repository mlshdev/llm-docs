> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegmresoptions/maxiterations](https://developer.apple.com/documentation/accelerate/sparsegmresoptions/maxiterations)

# maxIterations (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The maximum number of iterations to perform.

## Declaration

```swift
var maxIterations: Int32
```

<a id="Discussion"></a>

## Discussion

If `0`, the operation uses the default value of `100`.

## See Also

### Inspecting GMRES Options

- [atol](atol.md): The absolute convergence tolerance.
- [nvec](nvec.md): The number of orthogonal vectors the operation maintains.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): The function to report status.
- [rtol](rtol.md): The relative convergence tolerance.
- [variant](variant.md): The exact variant of GMRES to implement.
- [SparseGMRESVariant_t](../sparsegmresvariant_t.md): Defines the exact variant of GMRES to implement

# maxIterations (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The maximum number of iterations to perform.

## Declaration

```objectivec
int maxIterations;
```

<a id="Discussion"></a>

## Discussion

If `0`, the operation uses the default value of `100`.

## See Also

### Inspecting GMRES Options

- [atol](atol.md): The absolute convergence tolerance.
- [nvec](nvec.md): The number of orthogonal vectors the operation maintains.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): The function to report status.
- [rtol](rtol.md): The relative convergence tolerance.
- [variant](variant.md): The exact variant of GMRES to implement.
- [SparseGMRESVariant_t](../sparsegmresvariant_t.md): Defines the exact variant of GMRES to implement
