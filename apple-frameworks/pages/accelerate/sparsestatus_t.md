> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsestatus_t](https://developer.apple.com/documentation/accelerate/sparsestatus_t)

# SparseStatus_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe the status of a factorization.

## Declaration

```swift
struct SparseStatus_t
```

## Topics

### Constants

- [init(\_:)](sparsestatus_t/init%28__%29.md)
- [init(rawValue:)](sparsestatus_t/init%28rawvalue_%29.md)
- [rawValue](sparsestatus_t/rawvalue.md)
- [SparseStatusOK](sparsestatusok.md): The factorization was successful.
- [SparseFactorizationFailed](sparsefactorizationfailed.md): The factorization failed due to a numerical issue.
- [SparseMatrixIsSingular](sparsematrixissingular.md): The factorization aborted because the matrix is singular.
- [SparseInternalError](sparseinternalerror.md): The factorization encountered an internal error, such as failing to allocate memory.
- [SparseParameterError](sparseparametererror.md): An error in a user-supplied parameter.
- [SparseStatusReleased](sparsestatusreleased.md): The system freed the factorization object.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Instance Properties

- [status](sparseopaquesymbolicfactorization/status.md): The status of the factorization.
- [type](sparseopaquesymbolicfactorization/type.md): The factorization type.
- [factorization](sparseopaquesymbolicfactorization/factorization.md): A pointer to a private internal representation of the symbolic factor.
- [SparseFactorization_t](sparsefactorization_t.md): Constants that define the factorization type.

# SparseStatus_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe the status of a factorization.

## Declaration

```objectivec
typedef enum { ... } SparseStatus_t;
```

## Topics

### Constants

- [SparseStatusOK](sparsestatusok.md): The factorization was successful.
- [SparseFactorizationFailed](sparsefactorizationfailed.md): The factorization failed due to a numerical issue.
- [SparseMatrixIsSingular](sparsematrixissingular.md): The factorization aborted because the matrix is singular.
- [SparseInternalError](sparseinternalerror.md): The factorization encountered an internal error, such as failing to allocate memory.
- [SparseParameterError](sparseparametererror.md): An error in a user-supplied parameter.
- [SparseStatusReleased](sparsestatusreleased.md): The system freed the factorization object.

## See Also

### Instance Properties

- [status](sparseopaquesymbolicfactorization/status.md): The status of the factorization.
- [type](sparseopaquesymbolicfactorization/type.md): The factorization type.
- [factorization](sparseopaquesymbolicfactorization/factorization.md): A pointer to a private internal representation of the symbolic factor.
- [SparseFactorization_t](sparsefactorization_t.md): Constants that define the factorization type.
