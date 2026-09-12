> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparselsmroptions/init(reporterror:lambda:nvec:convergencetest:atol:rtol:btol:conditionlimit:maxiterations:reportstatus:)](https://developer.apple.com/documentation/accelerate/sparselsmroptions/init(reporterror:lambda:nvec:convergencetest:atol:rtol:btol:conditionlimit:maxiterations:reportstatus:))

# init(reportError:lambda:nvec:convergenceTest:atol:rtol:btol:conditionLimit:maxIterations:reportStatus:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a new LSMR options structure using the specified parameters.

## Declaration

```swift
init(reportError: ((UnsafePointer<CChar>) -> Void)?, lambda: Double, nvec: Int32, convergenceTest: SparseLSMRConvergenceTest_t, atol: Double, rtol: Double, btol: Double, conditionLimit: Double, maxIterations: Int32, reportStatus: ((UnsafePointer<CChar>) -> Void)?)
```

## Parameters

- `reportError`: An optional status-reporting routine.
- `lambda`: The damping parameter lambda for regularized least squares.
- `nvec`: The number of vectors to use for local reorthogonalization.
- `convergenceTest`: The convergence test to use for iterative solve methods.
- `atol`: The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).
- `rtol`: The relative convergence tolerance (default test only).
- `btol`: The *B* tolerance (Fong-Saunders test only).
- `conditionLimit`: The condition number limit (Fong-Saunders test only).
- `maxIterations`: The maximum number of iterations.
- `reportStatus`: An optional error-reporting routine.

## See Also

### Initializers

- [init()](init%28%29.md): Returns a new LSMR options structure.
