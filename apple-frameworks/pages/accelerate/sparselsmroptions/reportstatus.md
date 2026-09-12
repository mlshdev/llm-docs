> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparselsmroptions/reportstatus](https://developer.apple.com/documentation/accelerate/sparselsmroptions/reportstatus)

# reportStatus (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An optional status-reporting routine.

## Declaration

```swift
var reportStatus: ((UnsafePointer<CChar>) -> Void)?
```

## See Also

### Inspecting LSMR Options

- [atol](atol.md): The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).
- [btol](btol.md): The *B* tolerance (Fong-Saunders test only).
- [conditionLimit](conditionlimit.md): The condition number limit (Fong-Saunders test only).
- [convergenceTest](convergencetest.md): The convergence test to use for iterative solve methods.
- [SparseLSMRConvergenceTest_t](../sparselsmrconvergencetest_t.md): Constants that specify the type of convergence test.
- [lambda](lambda.md): The damping parameter lambda for regularized least squares.
- [maxIterations](maxiterations.md): The maximum number of iterations.
- [nvec](nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](reporterror.md): An optional error-reporting routine.
- [rtol](rtol.md): The relative convergence tolerance (default test only).

# reportStatus (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An optional status-reporting routine.

## Declaration

```objectivec
void (*)(const char *) reportStatus;
```

## See Also

### Inspecting LSMR Options

- [atol](atol.md): The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).
- [btol](btol.md): The *B* tolerance (Fong-Saunders test only).
- [conditionLimit](conditionlimit.md): The condition number limit (Fong-Saunders test only).
- [convergenceTest](convergencetest.md): The convergence test to use for iterative solve methods.
- [SparseLSMRConvergenceTest_t](../sparselsmrconvergencetest_t.md): Constants that specify the type of convergence test.
- [lambda](lambda.md): The damping parameter lambda for regularized least squares.
- [maxIterations](maxiterations.md): The maximum number of iterations.
- [nvec](nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](reporterror.md): An optional error-reporting routine.
- [rtol](rtol.md): The relative convergence tolerance (default test only).
