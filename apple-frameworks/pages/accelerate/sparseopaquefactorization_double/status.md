> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseopaquefactorization_double/status](https://developer.apple.com/documentation/accelerate/sparseopaquefactorization_double/status)

# status (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The status of the factorization object.

## Declaration

```swift
var status: SparseStatus_t
```

## See Also

### Instance Properties

- [attributes](attributes.md): The attributes of a factorization object.
- [numericFactorization](numericfactorization.md): The pointer to a private internal representation of a numeric factor.
- [solveWorkspaceRequiredPerRHS](solveworkspacerequiredperrhs.md): The required size of the per-right-hand-side workspace for a call to a sparse solve function.
- [solveWorkspaceRequiredStatic](solveworkspacerequiredstatic.md): The required size of the static workspace for a call to a sparse solve function.
- [symbolicFactorization](symbolicfactorization.md): The symbolic factorization that this numeric factorization depends on.
- [userFactorStorage](userfactorstorage.md): A Boolean value that indicates whether user-provided storage backs this object.

# status (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The status of the factorization object.

## Declaration

```objectivec
SparseStatus_t status;
```

## See Also

### Instance Properties

- [attributes](attributes.md): The attributes of a factorization object.
- [numericFactorization](numericfactorization.md): The pointer to a private internal representation of a numeric factor.
- [solveWorkspaceRequiredPerRHS](solveworkspacerequiredperrhs.md): The required size of the per-right-hand-side workspace for a call to a sparse solve function.
- [solveWorkspaceRequiredStatic](solveworkspacerequiredstatic.md): The required size of the static workspace for a call to a sparse solve function.
- [symbolicFactorization](symbolicfactorization.md): The symbolic factorization that this numeric factorization depends on.
- [userFactorStorage](userfactorstorage.md): A Boolean value that indicates whether user-provided storage backs this object.
