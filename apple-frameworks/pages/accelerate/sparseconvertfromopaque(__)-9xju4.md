> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseconvertfromopaque(_:)-9xju4](https://developer.apple.com/documentation/accelerate/sparseconvertfromopaque(_:)-9xju4)

# SparseConvertFromOpaque(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Converts an opaque matrix of complex double values object to a transparent sparse matrix object. When you are done with this matrix, release the memory that has been allocated by calling `SparseCleanup` on it.

## Declaration

```swift
func SparseConvertFromOpaque(_ matrix: sparse_matrix_double_complex) -> SparseMatrix_Complex_Double
```

## Parameters

- `matrix`: The matrix to be converted.

## See Also

### BLAS support

- [SparseConvertFromOpaque(\_:)](sparseconvertfromopaque%28__%29-6n7rw.md): Returns a sparse matrix of double-precision, floating-point values from a BLAS opaque matrix.
- [SparseConvertFromOpaque(\_:)](sparseconvertfromopaque%28__%29-4u519.md): Returns a sparse matrix of single-precision, floating-point values from a BLAS opaque matrix.
- [SparseConvertFromOpaque(\_:)](sparseconvertfromopaque%28__%29-9ll2d.md): Converts an opaque matrix of complex float values object to a transparent sparse matrix object. When you are done with this matrix, release the memory that has been allocated by calling `SparseCleanup` on it.

# SparseConvertFromOpaque (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Converts an opaque matrix of complex double values object to a transparent sparse matrix object. When you are done with this matrix, release the memory that has been allocated by calling `SparseCleanup` on it.

## Declaration

```objectivec
static SparseMatrix_Complex_Double SparseConvertFromOpaque(sparse_matrix_double_complex matrix);
```

## Parameters

- `matrix`: The matrix to be converted.

## See Also

### BLAS support

- [SparseConvertFromOpaque](sparseconvertfromopaque%28__%29-6n7rw.md): Returns a sparse matrix of double-precision, floating-point values from a BLAS opaque matrix.
- [SparseConvertFromOpaque](sparseconvertfromopaque%28__%29-4u519.md): Returns a sparse matrix of single-precision, floating-point values from a BLAS opaque matrix.
- [SparseConvertFromOpaque](sparseconvertfromopaque%28__%29-9ll2d.md): Converts an opaque matrix of complex float values object to a transparent sparse matrix object. When you are done with this matrix, release the memory that has been allocated by calling `SparseCleanup` on it.
