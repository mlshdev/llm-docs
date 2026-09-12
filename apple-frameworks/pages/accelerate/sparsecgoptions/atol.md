> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsecgoptions/atol](https://developer.apple.com/documentation/accelerate/sparsecgoptions/atol)

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

*‖ b-Ax ‖₂ \< \* ‖ b-Ax₀ ‖₂ + `atol`* indicates convergence.

## See Also

### Inspecting CG Options

- [maxIterations](maxiterations.md): The maximum number of iterations to perform.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): The function to report status.
- [rtol](rtol.md): The relative convergence tolerance.

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

*‖ b-Ax ‖₂ \< \* ‖ b-Ax₀ ‖₂ + `atol`* indicates convergence.

## See Also

### Inspecting CG Options

- [maxIterations](maxiterations.md): The maximum number of iterations to perform.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): The function to report status.
- [rtol](rtol.md): The relative convergence tolerance.
