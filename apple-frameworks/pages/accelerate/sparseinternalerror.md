> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseinternalerror](https://developer.apple.com/documentation/accelerate/sparseinternalerror)

# SparseInternalError (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The factorization encountered an internal error, such as failing to allocate memory.

## Declaration

```swift
var SparseInternalError: SparseStatus_t { get }
```

## See Also

### Constants

- [init(\_:)](sparsestatus_t/init%28__%29.md)
- [init(rawValue:)](sparsestatus_t/init%28rawvalue_%29.md)
- [rawValue](sparsestatus_t/rawvalue.md)
- [SparseStatusOK](sparsestatusok.md): The factorization was successful.
- [SparseFactorizationFailed](sparsefactorizationfailed.md): The factorization failed due to a numerical issue.
- [SparseMatrixIsSingular](sparsematrixissingular.md): The factorization aborted because the matrix is singular.
- [SparseParameterError](sparseparametererror.md): An error in a user-supplied parameter.
- [SparseStatusReleased](sparsestatusreleased.md): The system freed the factorization object.

# SparseInternalError (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The factorization encountered an internal error, such as failing to allocate memory.

## Declaration

```objectivec
SparseInternalError
```

## See Also

### Constants

- [SparseStatusOK](sparsestatusok.md): The factorization was successful.
- [SparseFactorizationFailed](sparsefactorizationfailed.md): The factorization failed due to a numerical issue.
- [SparseMatrixIsSingular](sparsematrixissingular.md): The factorization aborted because the matrix is singular.
- [SparseParameterError](sparseparametererror.md): An error in a user-supplied parameter.
- [SparseStatusReleased](sparsestatusreleased.md): The system freed the factorization object.
