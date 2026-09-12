> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsehermitian](https://developer.apple.com/documentation/accelerate/sparsehermitian)

# SparseHermitian (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

A flag to describe the type of matrix represented.

## Declaration

```swift
var SparseHermitian: SparseKind_t { get }
```

<a id="discussion"></a>

## Discussion

A `SparseMatrixStructure` object can represent several types of matrices:

- **`SparseOrdinary`**: A “normal” sparse matrix without special structure.
- **`SparseTriangular`**: A triangular sparse matrix with non-unit diagonal. The `SparseTriangle_t:` field indicates which triangle (upper or lower) is used.
- **`SparseUnitTriangular`**: A triangular sparse matrix with unit diagonal. The `SparseTriangle_t`: field indicates which triangle (upper or lower) is used.
- **`SparseSymmetric`**: A symmetric  sparse matrix.  The `SparseTriangle_t` field indicates which triangle (upper or lower) is used to represent the matrix.
- **`SparseHermitian`**: A Hermitian  sparse matrix.  The `SparseTriangle_t` field indicates which triangle (upper or lower) is used to represent the matrix.

## See Also

### Constants

- [SparseOrdinary](sparseordinary.md): An unsymmetric sparse matrix without special structure.
- [SparseSymmetric](sparsesymmetric.md): A symmetric sparse matrix.
- [SparseTriangular](sparsetriangular.md): A triangular sparse matrix with a nonunit diagonal.
- [SparseUnitTriangular](sparseunittriangular.md): A triangular sparse matrix with a unit diagonal.

# SparseHermitian (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

A flag to describe the type of matrix represented.

## Declaration

```objectivec
SparseHermitian
```

<a id="discussion"></a>

## Discussion

A `SparseMatrixStructure` object can represent several types of matrices:

- **`SparseOrdinary`**: A “normal” sparse matrix without special structure.
- **`SparseTriangular`**: A triangular sparse matrix with non-unit diagonal. The `SparseTriangle_t:` field indicates which triangle (upper or lower) is used.
- **`SparseUnitTriangular`**: A triangular sparse matrix with unit diagonal. The `SparseTriangle_t`: field indicates which triangle (upper or lower) is used.
- **`SparseSymmetric`**: A symmetric  sparse matrix.  The `SparseTriangle_t` field indicates which triangle (upper or lower) is used to represent the matrix.
- **`SparseHermitian`**: A Hermitian  sparse matrix.  The `SparseTriangle_t` field indicates which triangle (upper or lower) is used to represent the matrix.

## See Also

### Constants

- [SparseOrdinary](sparseordinary.md): An unsymmetric sparse matrix without special structure.
- [SparseSymmetric](sparsesymmetric.md): A symmetric sparse matrix.
- [SparseTriangular](sparsetriangular.md): A triangular sparse matrix with a nonunit diagonal.
- [SparseUnitTriangular](sparseunittriangular.md): A triangular sparse matrix with a unit diagonal.
