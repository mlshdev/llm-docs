> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/conversion-from-other-formats](https://developer.apple.com/documentation/accelerate/conversion-from-other-formats)

# Conversion from Other Formats (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Create sparse matrices from coordinate format arrays and BLAS opaque matrices.

## Topics

### Support for coordinate format arrays

- [Creating a sparse matrix from coordinate format arrays](creating-a-sparse-matrix-from-coordinate-format-arrays.md): Use separate coordinate format arrays to create sparse matrices.
- [SparseConvertFromCoordinate(\_:\_:\_:\_:\_:\_:\_:\_:)](sparseconvertfromcoordinate%28________________%29-4n2el.md): Converts from coordinate format arrays to a matrix of real double-precision values, dropping out-of-range entries and summing duplicates.
- [SparseConvertFromCoordinate(\_:\_:\_:\_:\_:\_:\_:\_:)](sparseconvertfromcoordinate%28________________%29-4n2th.md): Converts from coordinate format arrays to a matrix of real single-precision values, dropping out-of-range entries and summing duplicates.
- [SparseConvertFromCoordinate(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sparseconvertfromcoordinate%28____________________%29-56hv8.md): Converts from coordinate format arrays to a matrix of real double-precision values, dropping out-of-range entries and summing duplicates, without any internal memory allocations.
- [SparseConvertFromCoordinate(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sparseconvertfromcoordinate%28____________________%29-84plp.md): Converts from coordinate format arrays to a matrix of real single-precision values, dropping out-of-range entries and summing duplicates, without any internal memory allocations.

### Support for complex coordinate format arrays

- [SparseConvertFromCoordinate(\_:\_:\_:\_:\_:\_:\_:\_:)](sparseconvertfromcoordinate%28________________%29-58kub.md): Convert from coordinate format arrays to a matrix of complex double values, dropping out-of-range entries and summing duplicates.
- [SparseConvertFromCoordinate(\_:\_:\_:\_:\_:\_:\_:\_:)](sparseconvertfromcoordinate%28________________%29-58lgv.md): Convert from coordinate format arrays to a matrix of complex float values, dropping out-of-range entries and summing duplicates.
- [SparseConvertFromCoordinate(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sparseconvertfromcoordinate%28____________________%29-2blwb.md): Convert from coordinate format arrays to a matrix of complex float values, dropping out-of-range entries and summing duplicates.
- [SparseConvertFromCoordinate(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sparseconvertfromcoordinate%28____________________%29-6ocm1.md): Convert from coordinate format arrays to a matrix of complex double values, dropping out-of-range entries and summing duplicates.

### BLAS support

- [SparseConvertFromOpaque(\_:)](sparseconvertfromopaque%28__%29-6n7rw.md): Returns a sparse matrix of double-precision, floating-point values from a BLAS opaque matrix.
- [SparseConvertFromOpaque(\_:)](sparseconvertfromopaque%28__%29-4u519.md): Returns a sparse matrix of single-precision, floating-point values from a BLAS opaque matrix.
- [SparseConvertFromOpaque(\_:)](sparseconvertfromopaque%28__%29-9ll2d.md): Converts an opaque matrix of complex float values object to a transparent sparse matrix object. When you are done with this matrix, release the memory that has been allocated by calling `SparseCleanup` on it.
- [SparseConvertFromOpaque(\_:)](sparseconvertfromopaque%28__%29-9xju4.md): Converts an opaque matrix of complex double values object to a transparent sparse matrix object. When you are done with this matrix, release the memory that has been allocated by calling `SparseCleanup` on it.

## See Also

### Creating sparse matrices

- [Creating sparse matrices](creating-sparse-matrices.md): Create sparse matrices for factorization and solving systems.
- [SparseMatrix_Double](sparsematrix_double.md): A structure that contains a sparse matrix of double-precision, floating-point values.
- [SparseMatrix_Float](sparsematrix_float.md): A structure that contains a sparse matrix of single-precision, floating-point values.

# Conversion from Other Formats (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Create sparse matrices from coordinate format arrays and BLAS opaque matrices.

## Topics

### Support for coordinate format arrays

- [Creating a sparse matrix from coordinate format arrays](creating-a-sparse-matrix-from-coordinate-format-arrays.md): Use separate coordinate format arrays to create sparse matrices.
- [SparseConvertFromCoordinate](sparseconvertfromcoordinate%28________________%29-4n2el.md): Converts from coordinate format arrays to a matrix of real double-precision values, dropping out-of-range entries and summing duplicates.
- [SparseConvertFromCoordinate](sparseconvertfromcoordinate%28________________%29-4n2th.md): Converts from coordinate format arrays to a matrix of real single-precision values, dropping out-of-range entries and summing duplicates.
- [SparseConvertFromCoordinate](sparseconvertfromcoordinate%28____________________%29-56hv8.md): Converts from coordinate format arrays to a matrix of real double-precision values, dropping out-of-range entries and summing duplicates, without any internal memory allocations.
- [SparseConvertFromCoordinate](sparseconvertfromcoordinate%28____________________%29-84plp.md): Converts from coordinate format arrays to a matrix of real single-precision values, dropping out-of-range entries and summing duplicates, without any internal memory allocations.

### Support for complex coordinate format arrays

- [SparseConvertFromCoordinate](sparseconvertfromcoordinate%28________________%29-58kub.md): Convert from coordinate format arrays to a matrix of complex double values, dropping out-of-range entries and summing duplicates.
- [SparseConvertFromCoordinate](sparseconvertfromcoordinate%28________________%29-58lgv.md): Convert from coordinate format arrays to a matrix of complex float values, dropping out-of-range entries and summing duplicates.
- [SparseConvertFromCoordinate](sparseconvertfromcoordinate%28____________________%29-2blwb.md): Convert from coordinate format arrays to a matrix of complex float values, dropping out-of-range entries and summing duplicates.
- [SparseConvertFromCoordinate](sparseconvertfromcoordinate%28____________________%29-6ocm1.md): Convert from coordinate format arrays to a matrix of complex double values, dropping out-of-range entries and summing duplicates.

### BLAS support

- [SparseConvertFromOpaque](sparseconvertfromopaque%28__%29-6n7rw.md): Returns a sparse matrix of double-precision, floating-point values from a BLAS opaque matrix.
- [SparseConvertFromOpaque](sparseconvertfromopaque%28__%29-4u519.md): Returns a sparse matrix of single-precision, floating-point values from a BLAS opaque matrix.
- [SparseConvertFromOpaque](sparseconvertfromopaque%28__%29-9ll2d.md): Converts an opaque matrix of complex float values object to a transparent sparse matrix object. When you are done with this matrix, release the memory that has been allocated by calling `SparseCleanup` on it.
- [SparseConvertFromOpaque](sparseconvertfromopaque%28__%29-9xju4.md): Converts an opaque matrix of complex double values object to a transparent sparse matrix object. When you are done with this matrix, release the memory that has been allocated by calling `SparseCleanup` on it.

## See Also

### Creating sparse matrices

- [Creating sparse matrices](creating-sparse-matrices.md): Create sparse matrices for factorization and solving systems.
- [SparseMatrix_Double](sparsematrix_double.md): A structure that contains a sparse matrix of double-precision, floating-point values.
- [SparseMatrix_Float](sparsematrix_float.md): A structure that contains a sparse matrix of single-precision, floating-point values.
