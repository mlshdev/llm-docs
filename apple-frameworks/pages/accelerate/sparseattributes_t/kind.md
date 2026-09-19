> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/sparseattributes_t/kind

# kind (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An eumeration that specifies whether the matrix is ordinary, unit-triangular, triangular, or symmetric.

## Declaration

```swift
var kind: SparseKind_t { get set }
```

## Mentioned In

- [Creating a sparse matrix from coordinate format arrays](../creating-a-sparse-matrix-from-coordinate-format-arrays.md)

## See Also

### Instance Properties

- [transpose](transpose.md): A Boolean value that specifies whether to implicitly transpose the matrix.
- [triangle](triangle.md): An enumeration that specifies which triangle unit-triangular, triangular, and symmetric matrices need to use.
- [SparseTriangle_t](../sparsetriangle_t.md): A structure that defines which triangle a symmetric matrix stores, or whether a triangular matrix is upper or lower.
- [SparseKind_t](../sparsekind_t.md): A structure that defines whether the matrix is ordinary, symmetric, or triangular.

# kind (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An eumeration that specifies whether the matrix is ordinary, unit-triangular, triangular, or symmetric.

## Declaration

```objectivec
SparseKind_t kind;
```

## Mentioned In

- [Creating a sparse matrix from coordinate format arrays](../creating-a-sparse-matrix-from-coordinate-format-arrays.md)

## See Also

### Instance Properties

- [transpose](transpose.md): A Boolean value that specifies whether to implicitly transpose the matrix.
- [triangle](triangle.md): An enumeration that specifies which triangle unit-triangular, triangular, and symmetric matrices need to use.
- [SparseTriangle_t](../sparsetriangle_t.md): A structure that defines which triangle a symmetric matrix stores, or whether a triangular matrix is upper or lower.
- [SparseKind_t](../sparsekind_t.md): A structure that defines whether the matrix is ordinary, symmetric, or triangular.
