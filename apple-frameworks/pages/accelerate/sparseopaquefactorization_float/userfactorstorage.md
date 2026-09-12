> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseopaquefactorization_float/userfactorstorage](https://developer.apple.com/documentation/accelerate/sparseopaquefactorization_float/userfactorstorage)

# userFactorStorage (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether user-provided storage backs this object.

## Declaration

```swift
var userFactorStorage: Bool
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the user must free factor storage after all references finish (though [SparseCleanup(\_:)](../sparsecleanup%28__%29-3cnxt.md)) still frees any additional allocated storage due to pivoting).

## See Also

### Instance Properties

- [attributes](attributes.md): The attributes of a factorization object.
- [numericFactorization](numericfactorization.md): The pointer to a private internal representation of a numeric factor.
- [solveWorkspaceRequiredPerRHS](solveworkspacerequiredperrhs.md): The required size of the per-right-hand-side workspace for a call to a sparse solve function.
- [solveWorkspaceRequiredStatic](solveworkspacerequiredstatic.md): The required size of the static workspace for a call to a sparse solve function.
- [status](status.md): The status of the factorization object.
- [symbolicFactorization](symbolicfactorization.md): The symbolic factorization that this numeric factorization depends on.

# userFactorStorage (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether user-provided storage backs this object.

## Declaration

```objectivec
bool userFactorStorage;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the user must free factor storage after all references finish (though [SparseCleanup](../sparsecleanup%28__%29-3cnxt.md)) still frees any additional allocated storage due to pivoting).

## See Also

### Instance Properties

- [attributes](attributes.md): The attributes of a factorization object.
- [numericFactorization](numericfactorization.md): The pointer to a private internal representation of a numeric factor.
- [solveWorkspaceRequiredPerRHS](solveworkspacerequiredperrhs.md): The required size of the per-right-hand-side workspace for a call to a sparse solve function.
- [solveWorkspaceRequiredStatic](solveworkspacerequiredstatic.md): The required size of the static workspace for a call to a sparse solve function.
- [status](status.md): The status of the factorization object.
- [symbolicFactorization](symbolicfactorization.md): The symbolic factorization that this numeric factorization depends on.
