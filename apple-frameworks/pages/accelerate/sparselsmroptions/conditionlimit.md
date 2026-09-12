> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparselsmroptions/conditionlimit](https://developer.apple.com/documentation/accelerate/sparselsmroptions/conditionlimit)

# conditionLimit (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The condition number limit (Fong-Saunders test only).

## Declaration

```swift
var conditionLimit: Double
```

<a id="Discussion"></a>

## Discussion

The operation terminates iterations if a computed estimate of `cond(Abar)` exceeds this value. This is to prevent certain small or zero singular values of *A* or *Abar* from coming into effect and causing unwanted growth in the computed solution.

You can use [conditionLimit](conditionlimit.md) and [lambda](lambda.md) separately or together to regularize ill-conditioned systems.

Normally, [conditionLimit](conditionlimit.md) is in the range `1000` to `1/eps`.

Suggested value: [conditionLimit](conditionlimit.md) `= 1/(100*eps)`  for compatible systems, [conditionLimit](conditionlimit.md) `= 1/(10*sqrt(eps))` for least squares

## See Also

### Inspecting LSMR Options

- [atol](atol.md): The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).
- [btol](btol.md): The *B* tolerance (Fong-Saunders test only).
- [convergenceTest](convergencetest.md): The convergence test to use for iterative solve methods.
- [SparseLSMRConvergenceTest_t](../sparselsmrconvergencetest_t.md): Constants that specify the type of convergence test.
- [lambda](lambda.md): The damping parameter lambda for regularized least squares.
- [maxIterations](maxiterations.md): The maximum number of iterations.
- [nvec](nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): An optional status-reporting routine.
- [rtol](rtol.md): The relative convergence tolerance (default test only).

# conditionLimit (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The condition number limit (Fong-Saunders test only).

## Declaration

```objectivec
double conditionLimit;
```

<a id="Discussion"></a>

## Discussion

The operation terminates iterations if a computed estimate of `cond(Abar)` exceeds this value. This is to prevent certain small or zero singular values of *A* or *Abar* from coming into effect and causing unwanted growth in the computed solution.

You can use [conditionLimit](conditionlimit.md) and [lambda](lambda.md) separately or together to regularize ill-conditioned systems.

Normally, [conditionLimit](conditionlimit.md) is in the range `1000` to `1/eps`.

Suggested value: [conditionLimit](conditionlimit.md) `= 1/(100*eps)`  for compatible systems, [conditionLimit](conditionlimit.md) `= 1/(10*sqrt(eps))` for least squares

## See Also

### Inspecting LSMR Options

- [atol](atol.md): The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).
- [btol](btol.md): The *B* tolerance (Fong-Saunders test only).
- [convergenceTest](convergencetest.md): The convergence test to use for iterative solve methods.
- [SparseLSMRConvergenceTest_t](../sparselsmrconvergencetest_t.md): Constants that specify the type of convergence test.
- [lambda](lambda.md): The damping parameter lambda for regularized least squares.
- [maxIterations](maxiterations.md): The maximum number of iterations.
- [nvec](nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): An optional status-reporting routine.
- [rtol](rtol.md): The relative convergence tolerance (default test only).
