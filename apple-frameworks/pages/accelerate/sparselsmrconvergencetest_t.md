> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparselsmrconvergencetest_t](https://developer.apple.com/documentation/accelerate/sparselsmrconvergencetest_t)

# SparseLSMRConvergenceTest_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify the type of convergence test.

## Declaration

```swift
struct SparseLSMRConvergenceTest_t
```

## Topics

### Constants

- [SparseLSMRCTDefault](sparselsmrctdefault.md): The default convergence test.
- [SparseLSMRCTFongSaunders](sparselsmrctfongsaunders.md): Fong and Saunder’s original convergence test.

### Raw Values

- [init(\_:)](sparselsmrconvergencetest_t/init%28__%29.md)
- [init(rawValue:)](sparselsmrconvergencetest_t/init%28rawvalue_%29.md)
- [rawValue](sparselsmrconvergencetest_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Inspecting LSMR Options

- [atol](sparselsmroptions/atol.md): The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).
- [btol](sparselsmroptions/btol.md): The *B* tolerance (Fong-Saunders test only).
- [conditionLimit](sparselsmroptions/conditionlimit.md): The condition number limit (Fong-Saunders test only).
- [convergenceTest](sparselsmroptions/convergencetest.md): The convergence test to use for iterative solve methods.
- [lambda](sparselsmroptions/lambda.md): The damping parameter lambda for regularized least squares.
- [maxIterations](sparselsmroptions/maxiterations.md): The maximum number of iterations.
- [nvec](sparselsmroptions/nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](sparselsmroptions/reporterror.md): An optional error-reporting routine.
- [reportStatus](sparselsmroptions/reportstatus.md): An optional status-reporting routine.
- [rtol](sparselsmroptions/rtol.md): The relative convergence tolerance (default test only).

# SparseLSMRConvergenceTest_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify the type of convergence test.

## Declaration

```objectivec
typedef enum { ... } SparseLSMRConvergenceTest_t;
```

## Topics

### Constants

- [SparseLSMRCTDefault](sparselsmrctdefault.md): The default convergence test.
- [SparseLSMRCTFongSaunders](sparselsmrctfongsaunders.md): Fong and Saunder’s original convergence test.

## See Also

### Inspecting LSMR Options

- [atol](sparselsmroptions/atol.md): The absolute tolerance (default test) or *A* tolerance (Fong-Saunders test).
- [btol](sparselsmroptions/btol.md): The *B* tolerance (Fong-Saunders test only).
- [conditionLimit](sparselsmroptions/conditionlimit.md): The condition number limit (Fong-Saunders test only).
- [convergenceTest](sparselsmroptions/convergencetest.md): The convergence test to use for iterative solve methods.
- [lambda](sparselsmroptions/lambda.md): The damping parameter lambda for regularized least squares.
- [maxIterations](sparselsmroptions/maxiterations.md): The maximum number of iterations.
- [nvec](sparselsmroptions/nvec.md): The number of vectors to use for local reorthogonalization.
- [reportError](sparselsmroptions/reporterror.md): An optional error-reporting routine.
- [reportStatus](sparselsmroptions/reportstatus.md): An optional status-reporting routine.
- [rtol](sparselsmroptions/rtol.md): The relative convergence tolerance (default test only).
