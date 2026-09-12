> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseattributes_t/triangle](https://developer.apple.com/documentation/accelerate/sparseattributes_t/triangle)

# triangle (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An enumeration that specifies which triangle unit-triangular, triangular, and symmetric matrices need to use.

## Declaration

```swift
var triangle: SparseTriangle_t { get set }
```

<a id="Discussion"></a>

## Discussion

If [kind](kind.md) is [SparseOrdinary](../sparseordinary.md), this operation ignores this propoerty. Otherwise, it indicates which triangle ([SparseUpperTriangle](../sparseuppertriangle.md) or [SparseLowerTriangle](../sparselowertriangle.md)) represents the matrix.

## See Also

### Instance Properties

- [transpose](transpose.md): A Boolean value that specifies whether to implicitly transpose the matrix.
- [SparseTriangle_t](../sparsetriangle_t.md): A structure that defines which triangle a symmetric matrix stores, or whether a triangular matrix is upper or lower.
- [kind](kind.md): An eumeration that specifies whether the matrix is ordinary, unit-triangular, triangular, or symmetric.
- [SparseKind_t](../sparsekind_t.md): A structure that defines whether the matrix is ordinary, symmetric, or triangular.

# triangle (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An enumeration that specifies which triangle unit-triangular, triangular, and symmetric matrices need to use.

## Declaration

```objectivec
SparseTriangle_t triangle;
```

<a id="Discussion"></a>

## Discussion

If [kind](kind.md) is [SparseOrdinary](../sparseordinary.md), this operation ignores this propoerty. Otherwise, it indicates which triangle ([SparseUpperTriangle](../sparseuppertriangle.md) or [SparseLowerTriangle](../sparselowertriangle.md)) represents the matrix.

## See Also

### Instance Properties

- [transpose](transpose.md): A Boolean value that specifies whether to implicitly transpose the matrix.
- [SparseTriangle_t](../sparsetriangle_t.md): A structure that defines which triangle a symmetric matrix stores, or whether a triangular matrix is upper or lower.
- [kind](kind.md): An eumeration that specifies whether the matrix is ordinary, unit-triangular, triangular, or symmetric.
- [SparseKind_t](../sparsekind_t.md): A structure that defines whether the matrix is ordinary, symmetric, or triangular.
