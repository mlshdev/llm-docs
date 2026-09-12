> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsefactorizationfailed](https://developer.apple.com/documentation/accelerate/sparsefactorizationfailed)

# SparseFactorizationFailed (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The factorization failed due to a numerical issue.

## Declaration

```swift
var SparseFactorizationFailed: SparseStatus_t { get }
```

## See Also

### Constants

- [init(\_:)](sparsestatus_t/init%28__%29.md)
- [init(rawValue:)](sparsestatus_t/init%28rawvalue_%29.md)
- [rawValue](sparsestatus_t/rawvalue.md)
- [SparseStatusOK](sparsestatusok.md): The factorization was successful.
- [SparseMatrixIsSingular](sparsematrixissingular.md): The factorization aborted because the matrix is singular.
- [SparseInternalError](sparseinternalerror.md): The factorization encountered an internal error, such as failing to allocate memory.
- [SparseParameterError](sparseparametererror.md): An error in a user-supplied parameter.
- [SparseStatusReleased](sparsestatusreleased.md): The system freed the factorization object.

# SparseFactorizationFailed (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The factorization failed due to a numerical issue.

## Declaration

```objectivec
SparseFactorizationFailed
```

## See Also

### Constants

- [SparseStatusOK](sparsestatusok.md): The factorization was successful.
- [SparseMatrixIsSingular](sparsematrixissingular.md): The factorization aborted because the matrix is singular.
- [SparseInternalError](sparseinternalerror.md): The factorization encountered an internal error, such as failing to allocate memory.
- [SparseParameterError](sparseparametererror.md): An error in a user-supplied parameter.
- [SparseStatusReleased](sparsestatusreleased.md): The system freed the factorization object.
