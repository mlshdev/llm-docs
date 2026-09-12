> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseopaquefactorization_float/solveworkspacerequiredperrhs](https://developer.apple.com/documentation/accelerate/sparseopaquefactorization_float/solveworkspacerequiredperrhs)

# solveWorkspaceRequiredPerRHS (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The required size of the per-right-hand-side workspace for a call to a sparse solve function.

## Declaration

```swift
var solveWorkspaceRequiredPerRHS: Int
```

<a id="Discussion"></a>

## Discussion

The required size of workspace in bytes for a call to a sparse solve function is [solveWorkspaceRequiredStatic](solveworkspacerequiredstatic.md) `+ nrhs *` [solveWorkspaceRequiredPerRHS](solveworkspacerequiredperrhs.md) where `nrhs` is the number of right-hand-side vectors.

## See Also

### Instance Properties

- [attributes](attributes.md): The attributes of a factorization object.
- [numericFactorization](numericfactorization.md): The pointer to a private internal representation of a numeric factor.
- [solveWorkspaceRequiredStatic](solveworkspacerequiredstatic.md): The required size of the static workspace for a call to a sparse solve function.
- [status](status.md): The status of the factorization object.
- [symbolicFactorization](symbolicfactorization.md): The symbolic factorization that this numeric factorization depends on.
- [userFactorStorage](userfactorstorage.md): A Boolean value that indicates whether user-provided storage backs this object.

# solveWorkspaceRequiredPerRHS (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The required size of the per-right-hand-side workspace for a call to a sparse solve function.

## Declaration

```objectivec
size_t solveWorkspaceRequiredPerRHS;
```

<a id="Discussion"></a>

## Discussion

The required size of workspace in bytes for a call to a sparse solve function is [solveWorkspaceRequiredStatic](solveworkspacerequiredstatic.md) `+ nrhs *` [solveWorkspaceRequiredPerRHS](solveworkspacerequiredperrhs.md) where `nrhs` is the number of right-hand-side vectors.

## See Also

### Instance Properties

- [attributes](attributes.md): The attributes of a factorization object.
- [numericFactorization](numericfactorization.md): The pointer to a private internal representation of a numeric factor.
- [solveWorkspaceRequiredStatic](solveworkspacerequiredstatic.md): The required size of the static workspace for a call to a sparse solve function.
- [status](status.md): The status of the factorization object.
- [symbolicFactorization](symbolicfactorization.md): The symbolic factorization that this numeric factorization depends on.
- [userFactorStorage](userfactorstorage.md): A Boolean value that indicates whether user-provided storage backs this object.
