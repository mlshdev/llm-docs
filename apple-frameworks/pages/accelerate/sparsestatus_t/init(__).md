> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/sparsestatus_t/init(_:)

# init(\_:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
init(_ rawValue: Int32)
```

## See Also

### Constants

- [init(rawValue:)](init%28rawvalue_%29.md)
- [rawValue](rawvalue.md)
- [SparseStatusOK](../sparsestatusok.md): The factorization was successful.
- [SparseFactorizationFailed](../sparsefactorizationfailed.md): The factorization failed due to a numerical issue.
- [SparseMatrixIsSingular](../sparsematrixissingular.md): The factorization aborted because the matrix is singular.
- [SparseInternalError](../sparseinternalerror.md): The factorization encountered an internal error, such as failing to allocate memory.
- [SparseParameterError](../sparseparametererror.md): An error in a user-supplied parameter.
- [SparseStatusReleased](../sparsestatusreleased.md): The system freed the factorization object.
