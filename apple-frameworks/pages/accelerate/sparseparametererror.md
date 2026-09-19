> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/sparseparametererror

# SparseParameterError (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An error in a user-supplied parameter.

## Declaration

```swift
var SparseParameterError: SparseStatus_t { get }
```

## See Also

### Constants

- [init(\_:)](sparsestatus_t/init%28__%29.md)
- [init(rawValue:)](sparsestatus_t/init%28rawvalue_%29.md)
- [rawValue](sparsestatus_t/rawvalue.md)
- [SparseStatusOK](sparsestatusok.md): The factorization was successful.
- [SparseFactorizationFailed](sparsefactorizationfailed.md): The factorization failed due to a numerical issue.
- [SparseMatrixIsSingular](sparsematrixissingular.md): The factorization aborted because the matrix is singular.
- [SparseInternalError](sparseinternalerror.md): The factorization encountered an internal error, such as failing to allocate memory.
- [SparseStatusReleased](sparsestatusreleased.md): The system freed the factorization object.

# SparseParameterError (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An error in a user-supplied parameter.

## Declaration

```objectivec
SparseParameterError
```

## See Also

### Constants

- [SparseStatusOK](sparsestatusok.md): The factorization was successful.
- [SparseFactorizationFailed](sparsefactorizationfailed.md): The factorization failed due to a numerical issue.
- [SparseMatrixIsSingular](sparsematrixissingular.md): The factorization aborted because the matrix is singular.
- [SparseInternalError](sparseinternalerror.md): The factorization encountered an internal error, such as failing to allocate memory.
- [SparseStatusReleased](sparsestatusreleased.md): The system freed the factorization object.
