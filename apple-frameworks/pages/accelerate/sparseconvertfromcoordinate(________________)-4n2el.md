> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseconvertfromcoordinate(_:_:_:_:_:_:_:_:)-4n2el](https://developer.apple.com/documentation/accelerate/sparseconvertfromcoordinate(_:_:_:_:_:_:_:_:)-4n2el)

# SparseConvertFromCoordinate(\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Converts from coordinate format arrays to a matrix of real double-precision values, dropping out-of-range entries and summing duplicates.

## Declaration

```swift
func SparseConvertFromCoordinate(_ rowCount: Int32, _ columnCount: Int32, _ blockCount: Int, _ blockSize: UInt8, _ attributes: SparseAttributes_t, _ row: UnsafePointer<Int32>, _ column: UnsafePointer<Int32>, _ data: UnsafePointer<Double>) -> SparseMatrix_Double
```

## Parameters

- `rowCount`: The number of rows in the structure.
- `columnCount`: The number of columns in the structure.
- `blockCount`: The number of blocks in the matrix.
- `blockSize`: The block size for data storage on both input and output.
- `attributes`: The attributes of the matrix to create. The conversion forces the matrix to conform to the specified attributes by copying or dropping elements as necessary.
- `row`: The row indices of the matrix structure.
- `column`: The column indices of the matrix structure.
- `data`: The contents of the structurally nonzero (block) matrix elements.

<a id="return-value"></a>

## Return Value

A new [SparseMatrix_Double](sparsematrix_double.md) object. After you finish using a sparse matrix, call [SparseCleanup(\_:)](sparsecleanup%28__%29-6ywzn.md) to release its references to any memory that the Sparse Solvers library allocates.

## Mentioned In

- [Creating a sparse matrix from coordinate format arrays](creating-a-sparse-matrix-from-coordinate-format-arrays.md)

<a id="Discussion"></a>

## Discussion

The conversion drops out-of-range entries, and sums duplicate entries.

You may supply entries in either triangle for symmetric matrices. The conversion transposes entries in the triangle that [triangle](sparseattributes_t/triangle.md) doesn’t specify, and sums duplicate entries.

For triangular matrices, the conversion drops entries in the triangle that [triangle](sparseattributes_t/triangle.md) doesn’t specify.

## See Also

### Support for coordinate format arrays

- [Creating a sparse matrix from coordinate format arrays](creating-a-sparse-matrix-from-coordinate-format-arrays.md): Use separate coordinate format arrays to create sparse matrices.
- [SparseConvertFromCoordinate(\_:\_:\_:\_:\_:\_:\_:\_:)](sparseconvertfromcoordinate%28________________%29-4n2th.md): Converts from coordinate format arrays to a matrix of real single-precision values, dropping out-of-range entries and summing duplicates.
- [SparseConvertFromCoordinate(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sparseconvertfromcoordinate%28____________________%29-56hv8.md): Converts from coordinate format arrays to a matrix of real double-precision values, dropping out-of-range entries and summing duplicates, without any internal memory allocations.
- [SparseConvertFromCoordinate(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sparseconvertfromcoordinate%28____________________%29-84plp.md): Converts from coordinate format arrays to a matrix of real single-precision values, dropping out-of-range entries and summing duplicates, without any internal memory allocations.

# SparseConvertFromCoordinate (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Converts from coordinate format arrays to a matrix of real double-precision values, dropping out-of-range entries and summing duplicates.

## Declaration

```objectivec
static SparseMatrix_Double SparseConvertFromCoordinate(int rowCount, int columnCount, long blockCount, uint8_t blockSize, SparseAttributes_t attributes, const int *row, const int *column, const double *data);
```

## Parameters

- `rowCount`: The number of rows in the structure.
- `columnCount`: The number of columns in the structure.
- `blockCount`: The number of blocks in the matrix.
- `blockSize`: The block size for data storage on both input and output.
- `attributes`: The attributes of the matrix to create. The conversion forces the matrix to conform to the specified attributes by copying or dropping elements as necessary.
- `row`: The row indices of the matrix structure.
- `column`: The column indices of the matrix structure.
- `data`: The contents of the structurally nonzero (block) matrix elements.

<a id="return-value"></a>

## Return Value

A new [SparseMatrix_Double](sparsematrix_double.md) object. After you finish using a sparse matrix, call [SparseCleanup](sparsecleanup%28__%29-6ywzn.md) to release its references to any memory that the Sparse Solvers library allocates.

## Mentioned In

- [Creating a sparse matrix from coordinate format arrays](creating-a-sparse-matrix-from-coordinate-format-arrays.md)

<a id="Discussion"></a>

## Discussion

The conversion drops out-of-range entries, and sums duplicate entries.

You may supply entries in either triangle for symmetric matrices. The conversion transposes entries in the triangle that [triangle](sparseattributes_t/triangle.md) doesn’t specify, and sums duplicate entries.

For triangular matrices, the conversion drops entries in the triangle that [triangle](sparseattributes_t/triangle.md) doesn’t specify.

## See Also

### Support for coordinate format arrays

- [Creating a sparse matrix from coordinate format arrays](creating-a-sparse-matrix-from-coordinate-format-arrays.md): Use separate coordinate format arrays to create sparse matrices.
- [SparseConvertFromCoordinate](sparseconvertfromcoordinate%28________________%29-4n2th.md): Converts from coordinate format arrays to a matrix of real single-precision values, dropping out-of-range entries and summing duplicates.
- [SparseConvertFromCoordinate](sparseconvertfromcoordinate%28____________________%29-56hv8.md): Converts from coordinate format arrays to a matrix of real double-precision values, dropping out-of-range entries and summing duplicates, without any internal memory allocations.
- [SparseConvertFromCoordinate](sparseconvertfromcoordinate%28____________________%29-84plp.md): Converts from coordinate format arrays to a matrix of real single-precision values, dropping out-of-range entries and summing duplicates, without any internal memory allocations.
