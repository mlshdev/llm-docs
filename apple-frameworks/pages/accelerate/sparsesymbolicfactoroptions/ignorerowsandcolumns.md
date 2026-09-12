> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesymbolicfactoroptions/ignorerowsandcolumns](https://developer.apple.com/documentation/accelerate/sparsesymbolicfactoroptions/ignorerowsandcolumns)

# ignoreRowsAndColumns (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array that contains row and column indices to ignore.

## Declaration

```swift
var ignoreRowsAndColumns: UnsafeMutablePointer<Int32>?
```

<a id="Discussion"></a>

## Discussion

If this array isn’t `nil`, [ignoreRowsAndColumns](ignorerowsandcolumns.md) provides a list of rows and columns to ignore. Terminate [ignoreRowsAndColumns](ignorerowsandcolumns.md) with a negative index.

The row and column indices are for the actual matrix, not its block structure, so `0` indicates the first row, not the first `blockSize` rows.

In the symmetric case (Cholesky, *LDLᵀ*), each entry indicates that the system needs to ignore the matching row and column.

In the unsymmetric case (QR, Cholesky *AᵀA*), consider the matrix, `A`, given the value `m`, with one of the following definitions:

- `m = A.structure.rowCount * A.blockSize` if `A` isn’t a transposed matrix
- `m = A.structure.columnCount * A.blockSize` if `A` is a transposed matrix

In this case, an index less than `m` indicates that the system needs to ignore row `m`. An index `i`, greater than `m`, indicates that the system needs to ignore columns `i - m`.

## See Also

### Inspecting Symbolic Factor Options

- [control](control.md): The flags that control the computation.
- [SparseControl_t](../sparsecontrol_t.md): Options that control the computation.
- [orderMethod](ordermethod.md): The ordering algorithm.
- [order](order.md): The user-supplied array for ordering.
- [SparseOrder_t](../sparseorder_t.md): Options that define which ordering algorithm to use.
- [malloc](malloc.md): The function for allocating any necessary storage.
- [free](free.md): The function for freeing allocated storage.
- [reportError](reporterror.md): The function for reporting parameter errors.

# ignoreRowsAndColumns (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array that contains row and column indices to ignore.

## Declaration

```objectivec
int * ignoreRowsAndColumns;
```

<a id="Discussion"></a>

## Discussion

If this array isn’t `nil`, [ignoreRowsAndColumns](ignorerowsandcolumns.md) provides a list of rows and columns to ignore. Terminate [ignoreRowsAndColumns](ignorerowsandcolumns.md) with a negative index.

The row and column indices are for the actual matrix, not its block structure, so `0` indicates the first row, not the first `blockSize` rows.

In the symmetric case (Cholesky, *LDLᵀ*), each entry indicates that the system needs to ignore the matching row and column.

In the unsymmetric case (QR, Cholesky *AᵀA*), consider the matrix, `A`, given the value `m`, with one of the following definitions:

- `m = A.structure.rowCount * A.blockSize` if `A` isn’t a transposed matrix
- `m = A.structure.columnCount * A.blockSize` if `A` is a transposed matrix

In this case, an index less than `m` indicates that the system needs to ignore row `m`. An index `i`, greater than `m`, indicates that the system needs to ignore columns `i - m`.

## See Also

### Inspecting Symbolic Factor Options

- [control](control.md): The flags that control the computation.
- [SparseControl_t](../sparsecontrol_t.md): Options that control the computation.
- [orderMethod](ordermethod.md): The ordering algorithm.
- [order](order.md): The user-supplied array for ordering.
- [SparseOrder_t](../sparseorder_t.md): Options that define which ordering algorithm to use.
- [malloc](malloc.md): The function for allocating any necessary storage.
- [free](free.md): The function for freeing allocated storage.
- [reportError](reporterror.md): The function for reporting parameter errors.
