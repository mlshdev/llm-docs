> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseopaquefactorization_double/numericfactorization](https://developer.apple.com/documentation/accelerate/sparseopaquefactorization_double/numericfactorization)

# numericFactorization (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The pointer to a private internal representation of a numeric factor.

## Declaration

```swift
var numericFactorization: UnsafeMutableRawPointer?
```

## See Also

### Instance Properties

- [attributes](attributes.md): The attributes of a factorization object.
- [solveWorkspaceRequiredPerRHS](solveworkspacerequiredperrhs.md): The required size of the per-right-hand-side workspace for a call to a sparse solve function.
- [solveWorkspaceRequiredStatic](solveworkspacerequiredstatic.md): The required size of the static workspace for a call to a sparse solve function.
- [status](status.md): The status of the factorization object.
- [symbolicFactorization](symbolicfactorization.md): The symbolic factorization that this numeric factorization depends on.
- [userFactorStorage](userfactorstorage.md): A Boolean value that indicates whether user-provided storage backs this object.

# numericFactorization (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The pointer to a private internal representation of a numeric factor.

## Declaration

```objectivec
void * numericFactorization;
```

## See Also

### Instance Properties

- [attributes](attributes.md): The attributes of a factorization object.
- [solveWorkspaceRequiredPerRHS](solveworkspacerequiredperrhs.md): The required size of the per-right-hand-side workspace for a call to a sparse solve function.
- [solveWorkspaceRequiredStatic](solveworkspacerequiredstatic.md): The required size of the static workspace for a call to a sparse solve function.
- [status](status.md): The status of the factorization object.
- [symbolicFactorization](symbolicfactorization.md): The symbolic factorization that this numeric factorization depends on.
- [userFactorStorage](userfactorstorage.md): A Boolean value that indicates whether user-provided storage backs this object.
