> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseopaquefactorization_float/attributes](https://developer.apple.com/documentation/accelerate/sparseopaquefactorization_float/attributes)

# attributes (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The attributes of a factorization object.

## Declaration

```swift
var attributes: SparseAttributes_t
```

<a id="Discussion"></a>

## Discussion

In particular, the [transpose](../sparseattributes_t/transpose.md) field indicates whether the object is a factorization of *A* or *A\__ᵀ*.

## See Also

### Instance Properties

- [numericFactorization](numericfactorization.md): The pointer to a private internal representation of a numeric factor.
- [solveWorkspaceRequiredPerRHS](solveworkspacerequiredperrhs.md): The required size of the per-right-hand-side workspace for a call to a sparse solve function.
- [solveWorkspaceRequiredStatic](solveworkspacerequiredstatic.md): The required size of the static workspace for a call to a sparse solve function.
- [status](status.md): The status of the factorization object.
- [symbolicFactorization](symbolicfactorization.md): The symbolic factorization that this numeric factorization depends on.
- [userFactorStorage](userfactorstorage.md): A Boolean value that indicates whether user-provided storage backs this object.

# attributes (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The attributes of a factorization object.

## Declaration

```objectivec
SparseAttributes_t attributes;
```

<a id="Discussion"></a>

## Discussion

In particular, the [transpose](../sparseattributes_t/transpose.md) field indicates whether the object is a factorization of *A* or *A\__ᵀ*.

## See Also

### Instance Properties

- [numericFactorization](numericfactorization.md): The pointer to a private internal representation of a numeric factor.
- [solveWorkspaceRequiredPerRHS](solveworkspacerequiredperrhs.md): The required size of the per-right-hand-side workspace for a call to a sparse solve function.
- [solveWorkspaceRequiredStatic](solveworkspacerequiredstatic.md): The required size of the static workspace for a call to a sparse solve function.
- [status](status.md): The status of the factorization object.
- [symbolicFactorization](symbolicfactorization.md): The symbolic factorization that this numeric factorization depends on.
- [userFactorStorage](userfactorstorage.md): A Boolean value that indicates whether user-provided storage backs this object.
