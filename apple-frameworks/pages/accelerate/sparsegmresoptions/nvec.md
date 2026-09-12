> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsegmresoptions/nvec](https://developer.apple.com/documentation/accelerate/sparsegmresoptions/nvec)

# nvec (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of orthogonal vectors the operation maintains.

## Declaration

```swift
var nvec: Int32
```

<a id="Discussion"></a>

## Discussion

For GMRES and FGMRES variants, this is the number of iterations between restarts. For DQGMRES it’s the number of historical vectors the operation maintains in memory. If [nvec](nvec.md) is less than or equal to `0`, the operation uses the default value of `16`.

## See Also

### Inspecting GMRES Options

- [atol](atol.md): The absolute convergence tolerance.
- [maxIterations](maxiterations.md): The maximum number of iterations to perform.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): The function to report status.
- [rtol](rtol.md): The relative convergence tolerance.
- [variant](variant.md): The exact variant of GMRES to implement.
- [SparseGMRESVariant_t](../sparsegmresvariant_t.md): Defines the exact variant of GMRES to implement

# nvec (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of orthogonal vectors the operation maintains.

## Declaration

```objectivec
int nvec;
```

<a id="Discussion"></a>

## Discussion

For GMRES and FGMRES variants, this is the number of iterations between restarts. For DQGMRES it’s the number of historical vectors the operation maintains in memory. If [nvec](nvec.md) is less than or equal to `0`, the operation uses the default value of `16`.

## See Also

### Inspecting GMRES Options

- [atol](atol.md): The absolute convergence tolerance.
- [maxIterations](maxiterations.md): The maximum number of iterations to perform.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): The function to report status.
- [rtol](rtol.md): The relative convergence tolerance.
- [variant](variant.md): The exact variant of GMRES to implement.
- [SparseGMRESVariant_t](../sparsegmresvariant_t.md): Defines the exact variant of GMRES to implement
