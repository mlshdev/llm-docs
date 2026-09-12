> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseattributescomplex_t](https://developer.apple.com/documentation/accelerate/sparseattributescomplex_t)

# SparseAttributesComplex_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type representing the attributes of a matrix.

## Declaration

```swift
struct SparseAttributesComplex_t
```

<a id="overview"></a>

## Overview

- **`transpose`**: If `true`, the matrix is implicitly transposed when used in any functions.
- **`triangle`**: If `kind` is `SparseOrdinary`, this field is ignored. Otherwise it indicates which triangle (upper or lower) represents the matrix.
- **`kind`**: Identifies the matrix as being full (`SparseOrdinary`), \[unit-\] triangular (`SparseTriangular`, `SparseUnitTriangular`), or symmetric (Hermitian) (`SparseSymmetric`, `SparseHermitian`).
- **`conjugate_transpose`**: If `true`, the matrix is implicitly conjugate transposed, otherwise it is simply transposed. This field has no meaning if `transpose` field is `false`.
- **`_reserved`**: for future expansion. Must be zero.
- **`_allocatedBySparse`**: an implementation detail. Should be zero for any matrix you allocate.

## Topics

### Initializers

- [init()](sparseattributescomplex_t/init%28%29.md)

### Instance Properties

- [conjugate_transpose](sparseattributescomplex_t/conjugate_transpose.md)
- [kind](sparseattributescomplex_t/kind.md): A flag to describe the type of matrix represented.
- [transpose](sparseattributescomplex_t/transpose.md)
- [triangle](sparseattributescomplex_t/triangle.md): A flag to indicate which triangle of a matrix is used.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Creating sparse complex matrices

- [SparseMatrix_Complex_Double](sparsematrix_complex_double.md): A type representing a sparse complex matrix.
- [SparseMatrix_Complex_Float](sparsematrix_complex_float.md): A type representing a sparse complex matrix.
- [SparseMatrixStructureComplex](sparsematrixstructurecomplex.md): A type representing the sparsity structure of a sparse complex matrix.

# SparseAttributesComplex_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type representing the attributes of a matrix.

## Declaration

```objectivec
typedef struct { ... } SparseAttributesComplex_t;
```

<a id="overview"></a>

## Overview

- **`transpose`**: If `true`, the matrix is implicitly transposed when used in any functions.
- **`triangle`**: If `kind` is `SparseOrdinary`, this field is ignored. Otherwise it indicates which triangle (upper or lower) represents the matrix.
- **`kind`**: Identifies the matrix as being full (`SparseOrdinary`), \[unit-\] triangular (`SparseTriangular`, `SparseUnitTriangular`), or symmetric (Hermitian) (`SparseSymmetric`, `SparseHermitian`).
- **`conjugate_transpose`**: If `true`, the matrix is implicitly conjugate transposed, otherwise it is simply transposed. This field has no meaning if `transpose` field is `false`.
- **`_reserved`**: for future expansion. Must be zero.
- **`_allocatedBySparse`**: an implementation detail. Should be zero for any matrix you allocate.

## Topics

### Instance Properties

- [conjugate_transpose](sparseattributescomplex_t/conjugate_transpose.md)
- [kind](sparseattributescomplex_t/kind.md): A flag to describe the type of matrix represented.
- [transpose](sparseattributescomplex_t/transpose.md)
- [triangle](sparseattributescomplex_t/triangle.md): A flag to indicate which triangle of a matrix is used.

## See Also

### Creating sparse complex matrices

- [SparseMatrix_Complex_Double](sparsematrix_complex_double.md): A type representing a sparse complex matrix.
- [SparseMatrix_Complex_Float](sparsematrix_complex_float.md): A type representing a sparse complex matrix.
- [SparseMatrixStructureComplex](sparsematrixstructurecomplex.md): A type representing the sparsity structure of a sparse complex matrix.
