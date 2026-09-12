> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparselsmroptions/atol](https://developer.apple.com/documentation/accelerate/sparselsmroptions/atol)

# atol (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).

## Declaration

```swift
var atol: Double
```

<a id="Discussion"></a>

## Discussion

In the Fong and Saunders case, this value holds an estimate of the relative error in the data defining the matrix *A*. For example, if *A* is accurate to about six digits, set [atol](atol.md) `= 1.0e-6`.

## See Also

### Inspecting LSMR Options

- [btol](btol.md): The *B* tolerance (Fong-Saunders test only).
- [conditionLimit](conditionlimit.md): The condition number limit (Fong-Saunders test only).
- [convergenceTest](convergencetest.md): The convergence test to use for iterative solve methods.
- [SparseLSMRConvergenceTest_t](../sparselsmrconvergencetest_t.md): Constants that specify the type of convergence test.
- [lambda](lambda.md): The damping parameter lambda for regularized least squares.
- [maxIterations](maxiterations.md): The maximum number of iterations.
- [nvec](nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): An optional status-reporting routine.
- [rtol](rtol.md): The relative convergence tolerance (default test only).

# atol (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).

## Declaration

```objectivec
double atol;
```

<a id="Discussion"></a>

## Discussion

In the Fong and Saunders case, this value holds an estimate of the relative error in the data defining the matrix *A*. For example, if *A* is accurate to about six digits, set [atol](atol.md) `= 1.0e-6`.

## See Also

### Inspecting LSMR Options

- [btol](btol.md): The *B* tolerance (Fong-Saunders test only).
- [conditionLimit](conditionlimit.md): The condition number limit (Fong-Saunders test only).
- [convergenceTest](convergencetest.md): The convergence test to use for iterative solve methods.
- [SparseLSMRConvergenceTest_t](../sparselsmrconvergencetest_t.md): Constants that specify the type of convergence test.
- [lambda](lambda.md): The damping parameter lambda for regularized least squares.
- [maxIterations](maxiterations.md): The maximum number of iterations.
- [nvec](nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): An optional status-reporting routine.
- [rtol](rtol.md): The relative convergence tolerance (default test only).
