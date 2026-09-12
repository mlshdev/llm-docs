> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseiterativestatus_t](https://developer.apple.com/documentation/accelerate/sparseiterativestatus_t)

# SparseIterativeStatus_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define the status of the iterative solve.

## Declaration

```swift
struct SparseIterativeStatus_t
```

## Topics

### Constants

- [SparseIterativeConverged](sparseiterativeconverged.md): A status that indicates the convergence of all solutions.
- [SparseIterativeIllConditioned](sparseiterativeillconditioned.md): A status that indicates the operation determines the problem is sufficiently ill-conditioned that convergence is unlikely.
- [SparseIterativeInternalError](sparseiterativeinternalerror.md): A status that indicates an internal failure.
- [SparseIterativeMaxIterations](sparseiterativemaxiterations.md): A status that indicates a failure to converge one or more solutions in the maximum number of iterations.
- [SparseIterativeParameterError](sparseiterativeparametererror.md): A status that indicates an error with one or more parameters.

### Raw Values

- [init(\_:)](sparseiterativestatus_t/init%28__%29.md)
- [init(rawValue:)](sparseiterativestatus_t/init%28rawvalue_%29.md)
- [rawValue](sparseiterativestatus_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# SparseIterativeStatus_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define the status of the iterative solve.

## Declaration

```objectivec
typedef enum { ... } SparseIterativeStatus_t;
```

## Topics

### Constants

- [SparseIterativeConverged](sparseiterativeconverged.md): A status that indicates the convergence of all solutions.
- [SparseIterativeIllConditioned](sparseiterativeillconditioned.md): A status that indicates the operation determines the problem is sufficiently ill-conditioned that convergence is unlikely.
- [SparseIterativeInternalError](sparseiterativeinternalerror.md): A status that indicates an internal failure.
- [SparseIterativeMaxIterations](sparseiterativemaxiterations.md): A status that indicates a failure to converge one or more solutions in the maximum number of iterations.
- [SparseIterativeParameterError](sparseiterativeparametererror.md): A status that indicates an error with one or more parameters.
