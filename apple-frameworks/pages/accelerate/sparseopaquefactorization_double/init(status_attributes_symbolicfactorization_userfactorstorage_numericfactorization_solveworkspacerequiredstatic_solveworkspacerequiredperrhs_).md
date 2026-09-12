> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseopaquefactorization_double/init(status:attributes:symbolicfactorization:userfactorstorage:numericfactorization:solveworkspacerequiredstatic:solveworkspacerequiredperrhs:)](https://developer.apple.com/documentation/accelerate/sparseopaquefactorization_double/init(status:attributes:symbolicfactorization:userfactorstorage:numericfactorization:solveworkspacerequiredstatic:solveworkspacerequiredperrhs:))

# init(status:attributes:symbolicFactorization:userFactorStorage:numericFactorization:solveWorkspaceRequiredStatic:solveWorkspaceRequiredPerRHS:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new opaque factorization with the specified parameters.

## Declaration

```swift
init(status: SparseStatus_t, attributes: SparseAttributes_t, symbolicFactorization: SparseOpaqueSymbolicFactorization, userFactorStorage: Bool, numericFactorization: UnsafeMutableRawPointer?, solveWorkspaceRequiredStatic: Int, solveWorkspaceRequiredPerRHS: Int)
```

## Parameters

- `status`: The status of the factorization object.
- `attributes`: The attributes of the factorization object.
- `symbolicFactorization`: The symbolic factorization that this numeric factorization depends on.
- `userFactorStorage`: A Boolean value that indicates whether user-provided storage backs this object.
- `numericFactorization`: A pointer to a private internal representation of the numeric factor.
- `solveWorkspaceRequiredStatic`: The required size of the static workspace for a call to a sparse solve function.
- `solveWorkspaceRequiredPerRHS`: The required size of the per-right-hand-side workspace for a call to a sparse solve function.

<a id="return-value"></a>

## Return Value

A new opaque factorization.

## See Also

### Creating an Opaque Factorization

- [init()](init%28%29.md): Creates a new opaque factorization.
