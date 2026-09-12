> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseattributes_t](https://developer.apple.com/documentation/accelerate/sparseattributes_t)

# SparseAttributes_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents the attributes of a matrix.

## Declaration

```swift
struct SparseAttributes_t
```

## Mentioned In

- [Creating sparse matrices](creating-sparse-matrices.md)

## Topics

### Creating a New Attributes Structure

- [init()](sparseattributes_t/init%28%29.md): Returns a new sparse attributes structure.

### Instance Properties

- [transpose](sparseattributes_t/transpose.md): A Boolean value that specifies whether to implicitly transpose the matrix.
- [triangle](sparseattributes_t/triangle.md): An enumeration that specifies which triangle unit-triangular, triangular, and symmetric matrices need to use.
- [SparseTriangle_t](sparsetriangle_t.md): A structure that defines which triangle a symmetric matrix stores, or whether a triangular matrix is upper or lower.
- [kind](sparseattributes_t/kind.md): An eumeration that specifies whether the matrix is ordinary, unit-triangular, triangular, or symmetric.
- [SparseKind_t](sparsekind_t.md): A structure that defines whether the matrix is ordinary, symmetric, or triangular.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Inspecting a Matrix’s Structure and Data

- [rowCount](densematrix_double/rowcount.md): The number of rows in the matrix.
- [columnCount](densematrix_double/columncount.md): The number of columns in the matrix.
- [columnStride](densematrix_double/columnstride.md): The stride between matrix columns, in elements.
- [attributes](densematrix_double/attributes.md): The attributes of the matrix, such as whether it’s symmetrical or triangular.
- [data](densematrix_double/data.md): The array of double-precision, floating-point values in column-major order.

# SparseAttributes_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents the attributes of a matrix.

## Declaration

```objectivec
typedef struct { ... } SparseAttributes_t;
```

## Mentioned In

- [Creating sparse matrices](creating-sparse-matrices.md)

## Topics

### Instance Properties

- [transpose](sparseattributes_t/transpose.md): A Boolean value that specifies whether to implicitly transpose the matrix.
- [triangle](sparseattributes_t/triangle.md): An enumeration that specifies which triangle unit-triangular, triangular, and symmetric matrices need to use.
- [SparseTriangle_t](sparsetriangle_t.md): A structure that defines which triangle a symmetric matrix stores, or whether a triangular matrix is upper or lower.
- [kind](sparseattributes_t/kind.md): An eumeration that specifies whether the matrix is ordinary, unit-triangular, triangular, or symmetric.
- [SparseKind_t](sparsekind_t.md): A structure that defines whether the matrix is ordinary, symmetric, or triangular.

## See Also

### Inspecting a Matrix’s Structure and Data

- [rowCount](densematrix_double/rowcount.md): The number of rows in the matrix.
- [columnCount](densematrix_double/columncount.md): The number of columns in the matrix.
- [columnStride](densematrix_double/columnstride.md): The stride between matrix columns, in elements.
- [attributes](densematrix_double/attributes.md): The attributes of the matrix, such as whether it’s symmetrical or triangular.
- [data](densematrix_double/data.md): The array of double-precision, floating-point values in column-major order.
