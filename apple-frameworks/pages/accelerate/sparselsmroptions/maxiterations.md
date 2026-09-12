> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparselsmroptions/maxiterations](https://developer.apple.com/documentation/accelerate/sparselsmroptions/maxiterations)

# maxIterations (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The maximum number of iterations.

## Declaration

```swift
var maxIterations: Int32
```

<a id="Discussion"></a>

## Discussion

If [maxIterations](maxiterations.md) is less than `0`, the operation uses a default value of `4n`. However, if a good preconditioner is available or the matrix is well-conditioned such that singular values cluster, a value of `n/2` may be more appropriate.

## See Also

### Inspecting LSMR Options

- [atol](atol.md): The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).
- [btol](btol.md): The *B* tolerance (Fong-Saunders test only).
- [conditionLimit](conditionlimit.md): The condition number limit (Fong-Saunders test only).
- [convergenceTest](convergencetest.md): The convergence test to use for iterative solve methods.
- [SparseLSMRConvergenceTest_t](../sparselsmrconvergencetest_t.md): Constants that specify the type of convergence test.
- [lambda](lambda.md): The damping parameter lambda for regularized least squares.
- [nvec](nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): An optional status-reporting routine.
- [rtol](rtol.md): The relative convergence tolerance (default test only).

# maxIterations (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The maximum number of iterations.

## Declaration

```objectivec
int maxIterations;
```

<a id="Discussion"></a>

## Discussion

If [maxIterations](maxiterations.md) is less than `0`, the operation uses a default value of `4n`. However, if a good preconditioner is available or the matrix is well-conditioned such that singular values cluster, a value of `n/2` may be more appropriate.

## See Also

### Inspecting LSMR Options

- [atol](atol.md): The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).
- [btol](btol.md): The *B* tolerance (Fong-Saunders test only).
- [conditionLimit](conditionlimit.md): The condition number limit (Fong-Saunders test only).
- [convergenceTest](convergencetest.md): The convergence test to use for iterative solve methods.
- [SparseLSMRConvergenceTest_t](../sparselsmrconvergencetest_t.md): Constants that specify the type of convergence test.
- [lambda](lambda.md): The damping parameter lambda for regularized least squares.
- [nvec](nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): An optional status-reporting routine.
- [rtol](rtol.md): The relative convergence tolerance (default test only).
