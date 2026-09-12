> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseconvertfromcoordinate(_:_:_:_:_:_:_:_:_:_:)-2blwb](https://developer.apple.com/documentation/accelerate/sparseconvertfromcoordinate(_:_:_:_:_:_:_:_:_:_:)-2blwb)

# SparseConvertFromCoordinate(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Convert from coordinate format arrays to a  matrix of complex float values, dropping out-of-range entries and summing duplicates.

## Declaration

```swift
func SparseConvertFromCoordinate(_ rowCount: Int32, _ columnCount: Int32, _ blockCount: Int, _ blockSize: UInt8, _ attributes: SparseAttributesComplex_t, _ row: UnsafePointer<Int32>, _ column: UnsafePointer<Int32>, _ data: OpaquePointer, _ storage: UnsafeMutableRawPointer, _ workspace: UnsafeMutableRawPointer) -> SparseMatrix_Complex_Float
```

## Parameters

- `rowCount`: (Input) Number of rows in structure.
- `columnCount`: (Input) Number of columns in structure.
- `blockCount`: (Input) Number of blocks in matrix.
- `blockSize`: (Input) Block size for data storage on both input and output.
- `attributes`: (Input) Attributes of matrix to create. The matrix will be forced to conform to the specified attributes by copying or dropping elements as needed.
- `row`: (Input) Row indices of matrix structure.
- `column`: (Input) Column indices of matrix structure.
- `data`: (Input) The contents of the structurally non-zero (block) matrix elements.
- `storage`: (Output) The output storage.
- `workspace`: (Scratch) Workspace of size `rowCount*sizeof(int)`.

<a id="return-value"></a>

## Return Value

A new `SparseMatrix_Complex_Float` object, using the memory you provided in the `storage` parameter.

## Mentioned In

- [Creating a sparse matrix from coordinate format arrays](creating-a-sparse-matrix-from-coordinate-format-arrays.md)

<a id="discussion"></a>

## Discussion

For symmetric (Hermitian) matrices, entries are accepted in either triangle (if they are in the “wrong” triangle as specified by attributes.triangle, they are transposed, and if an entry is already present, are treated as duplicates and summed). For triangular matrices, entries in the “wrong” triangle as specified by attributes.triangle are treated as out-of-range and dropped.

Define `storage` as a block of memory of size at least:

```
  48 + (columnCount+1)*sizeof(long) + blockCount*sizeof(int)
    + blockCount*blockSize*blockSize*sizeof(float) * 2
```

The returned structures `.structure.columnStarts`, `.structure.rowIndices`, and `.data` will point into this storage. You are responsible for managing the allocation and cleanup of this memory.

## See Also

### Support for complex coordinate format arrays

- [SparseConvertFromCoordinate(\_:\_:\_:\_:\_:\_:\_:\_:)](sparseconvertfromcoordinate%28________________%29-58kub.md): Convert from coordinate format arrays to a matrix of complex double values, dropping out-of-range entries and summing duplicates.
- [SparseConvertFromCoordinate(\_:\_:\_:\_:\_:\_:\_:\_:)](sparseconvertfromcoordinate%28________________%29-58lgv.md): Convert from coordinate format arrays to a matrix of complex float values, dropping out-of-range entries and summing duplicates.
- [SparseConvertFromCoordinate(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sparseconvertfromcoordinate%28____________________%29-6ocm1.md): Convert from coordinate format arrays to a matrix of complex double values, dropping out-of-range entries and summing duplicates.

# SparseConvertFromCoordinate (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Convert from coordinate format arrays to a  matrix of complex float values, dropping out-of-range entries and summing duplicates.

## Declaration

```objectivec
static SparseMatrix_Complex_Float SparseConvertFromCoordinate(int rowCount, int columnCount, long blockCount, uint8_t blockSize, SparseAttributesComplex_t attributes, const int *row, const int *column, const __SPARSE_float_complex *data, void *storage, void *workspace);
```

## Parameters

- `rowCount`: (Input) Number of rows in structure.
- `columnCount`: (Input) Number of columns in structure.
- `blockCount`: (Input) Number of blocks in matrix.
- `blockSize`: (Input) Block size for data storage on both input and output.
- `attributes`: (Input) Attributes of matrix to create. The matrix will be forced to conform to the specified attributes by copying or dropping elements as needed.
- `row`: (Input) Row indices of matrix structure.
- `column`: (Input) Column indices of matrix structure.
- `data`: (Input) The contents of the structurally non-zero (block) matrix elements.
- `storage`: (Output) The output storage.
- `workspace`: (Scratch) Workspace of size `rowCount*sizeof(int)`.

<a id="return-value"></a>

## Return Value

A new `SparseMatrix_Complex_Float` object, using the memory you provided in the `storage` parameter.

## Mentioned In

- [Creating a sparse matrix from coordinate format arrays](creating-a-sparse-matrix-from-coordinate-format-arrays.md)

<a id="discussion"></a>

## Discussion

For symmetric (Hermitian) matrices, entries are accepted in either triangle (if they are in the “wrong” triangle as specified by attributes.triangle, they are transposed, and if an entry is already present, are treated as duplicates and summed). For triangular matrices, entries in the “wrong” triangle as specified by attributes.triangle are treated as out-of-range and dropped.

Define `storage` as a block of memory of size at least:

```
  48 + (columnCount+1)*sizeof(long) + blockCount*sizeof(int)
    + blockCount*blockSize*blockSize*sizeof(float) * 2
```

The returned structures `.structure.columnStarts`, `.structure.rowIndices`, and `.data` will point into this storage. You are responsible for managing the allocation and cleanup of this memory.

## See Also

### Support for complex coordinate format arrays

- [SparseConvertFromCoordinate](sparseconvertfromcoordinate%28________________%29-58kub.md): Convert from coordinate format arrays to a matrix of complex double values, dropping out-of-range entries and summing duplicates.
- [SparseConvertFromCoordinate](sparseconvertfromcoordinate%28________________%29-58lgv.md): Convert from coordinate format arrays to a matrix of complex float values, dropping out-of-range entries and summing duplicates.
- [SparseConvertFromCoordinate](sparseconvertfromcoordinate%28____________________%29-6ocm1.md): Convert from coordinate format arrays to a matrix of complex double values, dropping out-of-range entries and summing duplicates.
