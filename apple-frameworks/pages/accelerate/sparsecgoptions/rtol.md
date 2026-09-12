> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsecgoptions/rtol](https://developer.apple.com/documentation/accelerate/sparsecgoptions/rtol)

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

*‖ b-Ax ‖₂ \< \* ‖ b-Ax₀ ‖₂ + `atol`* indicates convergence.

If [rtol](rtol.md) is equal to `0`, the operation uses the default value of `sqrt(epsilon)`.

If it’s negative, the operation treats [rtol](rtol.md) as `0.0` (it doesn’t use the default).

## See Also

### Inspecting CG Options

- [atol](atol.md): The absolute convergence tolerance.
- [maxIterations](maxiterations.md): The maximum number of iterations to perform.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): The function to report status.

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

*‖ b-Ax ‖₂ \< \* ‖ b-Ax₀ ‖₂ + `atol`* indicates convergence.

If [rtol](rtol.md) is equal to `0`, the operation uses the default value of `sqrt(epsilon)`.

If it’s negative, the operation treats [rtol](rtol.md) as `0.0` (it doesn’t use the default).

## See Also

### Inspecting CG Options

- [atol](atol.md): The absolute convergence tolerance.
- [maxIterations](maxiterations.md): The maximum number of iterations to perform.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): The function to report status.
