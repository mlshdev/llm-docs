> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparselsmroptions/convergencetest](https://developer.apple.com/documentation/accelerate/sparselsmroptions/convergencetest)

# convergenceTest (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The convergence test to use for iterative solve methods.

## Declaration

```swift
var convergenceTest: SparseLSMRConvergenceTest_t
```

<a id="Discussion"></a>

## Discussion

For [SparseLSMRCTDefault](../sparselsmrctdefault.md), iterations stop when:

- *‖ Aᵀ(b-Ax) ‖₂ \< [rtol](rtol.md) \* ‖ Aᵀ(b-Ax\_₀) ‖₂ + [atol](atol.md)*

For [SparseLSMRCTFongSaunders](../sparselsmrctfongsaunders.md), iterations stop when any of the following occur:

- *‖ b-Ax ‖₂ \< [btol](btol.md) \* ‖ b ‖₂ + [atol](atol.md) \* ‖ A ‖₂ ‖ x ‖₂*    (*‖A‖₂* is an estimate)
- *‖ Aᵀ (b-Ax) ‖₂ \< [atol](atol.md) \* ‖ A ‖₂ \* ‖ A-bx ‖₂*             (*‖A‖₂* is an estimate)
- Estimated condition of *matrix \>= [conditionLimit](conditionlimit.md)*

## See Also

### Inspecting LSMR Options

- [atol](atol.md): The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).
- [btol](btol.md): The *B* tolerance (Fong-Saunders test only).
- [conditionLimit](conditionlimit.md): The condition number limit (Fong-Saunders test only).
- [SparseLSMRConvergenceTest_t](../sparselsmrconvergencetest_t.md): Constants that specify the type of convergence test.
- [lambda](lambda.md): The damping parameter lambda for regularized least squares.
- [maxIterations](maxiterations.md): The maximum number of iterations.
- [nvec](nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): An optional status-reporting routine.
- [rtol](rtol.md): The relative convergence tolerance (default test only).

# convergenceTest (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The convergence test to use for iterative solve methods.

## Declaration

```objectivec
SparseLSMRConvergenceTest_t convergenceTest;
```

<a id="Discussion"></a>

## Discussion

For [SparseLSMRCTDefault](../sparselsmrctdefault.md), iterations stop when:

- *‖ Aᵀ(b-Ax) ‖₂ \< [rtol](rtol.md) \* ‖ Aᵀ(b-Ax\_₀) ‖₂ + [atol](atol.md)*

For [SparseLSMRCTFongSaunders](../sparselsmrctfongsaunders.md), iterations stop when any of the following occur:

- *‖ b-Ax ‖₂ \< [btol](btol.md) \* ‖ b ‖₂ + [atol](atol.md) \* ‖ A ‖₂ ‖ x ‖₂*    (*‖A‖₂* is an estimate)
- *‖ Aᵀ (b-Ax) ‖₂ \< [atol](atol.md) \* ‖ A ‖₂ \* ‖ A-bx ‖₂*             (*‖A‖₂* is an estimate)
- Estimated condition of *matrix \>= [conditionLimit](conditionlimit.md)*

## See Also

### Inspecting LSMR Options

- [atol](atol.md): The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).
- [btol](btol.md): The *B* tolerance (Fong-Saunders test only).
- [conditionLimit](conditionlimit.md): The condition number limit (Fong-Saunders test only).
- [SparseLSMRConvergenceTest_t](../sparselsmrconvergencetest_t.md): Constants that specify the type of convergence test.
- [lambda](lambda.md): The damping parameter lambda for regularized least squares.
- [maxIterations](maxiterations.md): The maximum number of iterations.
- [nvec](nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](reporterror.md): An optional error-reporting routine.
- [reportStatus](reportstatus.md): An optional status-reporting routine.
- [rtol](rtol.md): The relative convergence tolerance (default test only).
