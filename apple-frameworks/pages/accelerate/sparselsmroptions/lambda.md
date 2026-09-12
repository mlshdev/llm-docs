> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparselsmroptions/lambda](https://developer.apple.com/documentation/accelerate/sparselsmroptions/lambda)

# lambda (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The damping parameter lambda for regularized least squares.

## Declaration

```swift
var lambda: Double
```

## See Also

### Inspecting LSMR Options

- [atol](atol.md): The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).
- [btol](btol.md): The *B* tolerance (Fong-Saunders test only).
- [conditionLimit](conditionlimit.md): The condition number limit (Fong-Saunders test only).
- [convergenceTest](convergencetest.md): The convergence test to use for iterative solve methods.
- [SparseLSMRConvergenceTest_t](../sparselsmrconvergencetest_t.md): Constants that specify the type of convergence test.
- [maxIterations](maxiterations.md): The maximum number of iterations.
- [nvec](nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): An optional status-reporting routine.
- [rtol](rtol.md): The relative convergence tolerance (default test only).

# lambda (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The damping parameter lambda for regularized least squares.

## Declaration

```objectivec
double lambda;
```

## See Also

### Inspecting LSMR Options

- [atol](atol.md): The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).
- [btol](btol.md): The *B* tolerance (Fong-Saunders test only).
- [conditionLimit](conditionlimit.md): The condition number limit (Fong-Saunders test only).
- [convergenceTest](convergencetest.md): The convergence test to use for iterative solve methods.
- [SparseLSMRConvergenceTest_t](../sparselsmrconvergencetest_t.md): Constants that specify the type of convergence test.
- [maxIterations](maxiterations.md): The maximum number of iterations.
- [nvec](nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): An optional status-reporting routine.
- [rtol](rtol.md): The relative convergence tolerance (default test only).
