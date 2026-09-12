> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparselsmroptions/btol](https://developer.apple.com/documentation/accelerate/sparselsmroptions/btol)

# btol (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The *B* tolerance (Fong-Saunders test only).

## Declaration

```swift
var btol: Double
```

<a id="Discussion"></a>

## Discussion

This value holds an estimate of the relative error in the data defining the right-hand-side, *b*. For example, if *b* is accurate to about six digits, set [btol](btol.md) `= 1.0e-6`.

## See Also

### Inspecting LSMR Options

- [atol](atol.md): The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).
- [conditionLimit](conditionlimit.md): The condition number limit (Fong-Saunders test only).
- [convergenceTest](convergencetest.md): The convergence test to use for iterative solve methods.
- [SparseLSMRConvergenceTest_t](../sparselsmrconvergencetest_t.md): Constants that specify the type of convergence test.
- [lambda](lambda.md): The damping parameter lambda for regularized least squares.
- [maxIterations](maxiterations.md): The maximum number of iterations.
- [nvec](nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): An optional status-reporting routine.
- [rtol](rtol.md): The relative convergence tolerance (default test only).

# btol (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The *B* tolerance (Fong-Saunders test only).

## Declaration

```objectivec
double btol;
```

<a id="Discussion"></a>

## Discussion

This value holds an estimate of the relative error in the data defining the right-hand-side, *b*. For example, if *b* is accurate to about six digits, set [btol](btol.md) `= 1.0e-6`.

## See Also

### Inspecting LSMR Options

- [atol](atol.md): The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).
- [conditionLimit](conditionlimit.md): The condition number limit (Fong-Saunders test only).
- [convergenceTest](convergencetest.md): The convergence test to use for iterative solve methods.
- [SparseLSMRConvergenceTest_t](../sparselsmrconvergencetest_t.md): Constants that specify the type of convergence test.
- [lambda](lambda.md): The damping parameter lambda for regularized least squares.
- [maxIterations](maxiterations.md): The maximum number of iterations.
- [nvec](nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): An optional status-reporting routine.
- [rtol](rtol.md): The relative convergence tolerance (default test only).
