> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsecgoptions/init(reporterror:maxiterations:atol:rtol:reportstatus:)](https://developer.apple.com/documentation/accelerate/sparsecgoptions/init(reporterror:maxiterations:atol:rtol:reportstatus:))

# init(reportError:maxIterations:atol:rtol:reportStatus:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a new CG options structure using the specified parameters.

## Declaration

```swift
init(reportError: ((UnsafePointer<CChar>) -> Void)?, maxIterations: Int32, atol: Double, rtol: Double, reportStatus: ((UnsafePointer<CChar>) -> Void)?)
```

## Parameters

- `reportError`: An optional error-reporting routine.
- `maxIterations`: The maximum number of iterations.
- `atol`: The absolute convergence tolerance.
- `rtol`: The relative convergence tolerance.
- `reportStatus`: The function to report status.

<a id="return-value"></a>

## Return Value

A new CG options structure.

## See Also

### Initializers

- [init()](init%28%29.md): Returns a new CG options structure.
