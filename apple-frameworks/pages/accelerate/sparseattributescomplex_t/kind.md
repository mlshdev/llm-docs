> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseattributescomplex_t/kind](https://developer.apple.com/documentation/accelerate/sparseattributescomplex_t/kind)

# kind (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A flag to describe the type of matrix represented.

## Declaration

```swift
var kind: SparseKind_t { get set }
```

<a id="discussion"></a>

## Discussion

A `SparseMatrixStructure` object can represent several types of matrices:

- **`SparseOrdinary`**: A “normal” sparse matrix without special structure.
- **`SparseTriangular`**: A triangular sparse matrix with non-unit diagonal. The `SparseTriangle_t:` field indicates which triangle (upper or lower) is used.
- **`SparseUnitTriangular`**: A triangular sparse matrix with unit diagonal. The `SparseTriangle_t`: field indicates which triangle (upper or lower) is used.
- **`SparseSymmetric`**: A symmetric  sparse matrix.  The `SparseTriangle_t` field indicates which triangle (upper or lower) is used to represent the matrix.
- **`SparseHermitian`**: A Hermitian  sparse matrix.  The `SparseTriangle_t` field indicates which triangle (upper or lower) is used to represent the matrix.

# kind (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A flag to describe the type of matrix represented.

## Declaration

```objectivec
SparseKind_t kind;
```

<a id="discussion"></a>

## Discussion

A `SparseMatrixStructure` object can represent several types of matrices:

- **`SparseOrdinary`**: A “normal” sparse matrix without special structure.
- **`SparseTriangular`**: A triangular sparse matrix with non-unit diagonal. The `SparseTriangle_t:` field indicates which triangle (upper or lower) is used.
- **`SparseUnitTriangular`**: A triangular sparse matrix with unit diagonal. The `SparseTriangle_t`: field indicates which triangle (upper or lower) is used.
- **`SparseSymmetric`**: A symmetric  sparse matrix.  The `SparseTriangle_t` field indicates which triangle (upper or lower) is used to represent the matrix.
- **`SparseHermitian`**: A Hermitian  sparse matrix.  The `SparseTriangle_t` field indicates which triangle (upper or lower) is used to represent the matrix.
