> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsestatusok](https://developer.apple.com/documentation/accelerate/sparsestatusok)

# SparseStatusOK (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The factorization was successful.

## Declaration

```swift
var SparseStatusOK: SparseStatus_t { get }
```

## See Also

### Constants

- [init(\_:)](sparsestatus_t/init%28__%29.md)
- [init(rawValue:)](sparsestatus_t/init%28rawvalue_%29.md)
- [rawValue](sparsestatus_t/rawvalue.md)
- [SparseFactorizationFailed](sparsefactorizationfailed.md): The factorization failed due to a numerical issue.
- [SparseMatrixIsSingular](sparsematrixissingular.md): The factorization aborted because the matrix is singular.
- [SparseInternalError](sparseinternalerror.md): The factorization encountered an internal error, such as failing to allocate memory.
- [SparseParameterError](sparseparametererror.md): An error in a user-supplied parameter.
- [SparseStatusReleased](sparsestatusreleased.md): The system freed the factorization object.

# SparseStatusOK (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The factorization was successful.

## Declaration

```objectivec
SparseStatusOK
```

## See Also

### Constants

- [SparseFactorizationFailed](sparsefactorizationfailed.md): The factorization failed due to a numerical issue.
- [SparseMatrixIsSingular](sparsematrixissingular.md): The factorization aborted because the matrix is singular.
- [SparseInternalError](sparseinternalerror.md): The factorization encountered an internal error, such as failing to allocate memory.
- [SparseParameterError](sparseparametererror.md): An error in a user-supplied parameter.
- [SparseStatusReleased](sparsestatusreleased.md): The system freed the factorization object.
