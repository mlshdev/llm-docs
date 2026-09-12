> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_insert_entry_double(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/sparse_insert_entry_double(_:_:_:_:))

# sparse_insert_entry_double(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Inserts a single scalar entry into a double-precision sparse matrix.

## Declaration

```swift
func sparse_insert_entry_double(_ A: sparse_matrix_double!, _ val: Double, _ i: sparse_index, _ j: sparse_index) -> sparse_status
```

## Parameters

- `A`: The sparse matrix, *A*, which must have been created with [sparse_matrix_create_double(\_:\_:)](sparse_matrix_create_double%28____%29.md). [SPARSE_ILLEGAL_PARAMETER](sparse_illegal_parameter.md) is returned if not met.
- `val`: The scalar value to insert into the sparse matrix.
- `i`: The row location to insert the value. Indices are 0 based (first element of  pointer is `ptr[0]`).  Indices expected to be in the bounds of matrix dimensions, undefined behavior if not met.
- `j`: The column location to insert the value. Indices are 0 based (first element of  pointer is ptr\[0\]).  Indices expected to be in the bounds of matrix dimensions, undefined behavior if not met.

<a id="return-value"></a>

## Return Value

On successful insertion, `A` has been updated with the value and [SPARSE_SUCCESS](sparse_success.md) is returned.  If `A` creation requirements are not met, [SPARSE_ILLEGAL_PARAMETER](sparse_illegal_parameter.md) is returned and `A` is unchanged.

<a id="Discussion"></a>

## Discussion

Use to build a sparse matrix by inserting one scalar entry at a time.  This function is the equivalent of `A[i,j] = val`.

Note that matrix properties cannot be modified after value insertion begins. This includes properties such as specifying a triangular matrix.

Insertion can be expensive, generally speaking it is best to do a batch update.

Inserted values may be temporarily held internally within the object and only inserted into the sparse format when a later computation triggers a need to insert.

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Matrix creation and population

- [sparse_matrix_create_double(\_:\_:)](sparse_matrix_create_double%28____%29.md): Returns a double-precision sparse matrix object.
- [sparse_matrix_create_float(\_:\_:)](sparse_matrix_create_float%28____%29.md): Returns a single-precision sparse matrix object.
- [sparse_insert_entry_float(\_:\_:\_:\_:)](sparse_insert_entry_float%28________%29.md): Inserts a single scalar entry into a single-precision sparse matrix.
- [sparse_insert_entries_double(\_:\_:\_:\_:\_:)](sparse_insert_entries_double%28__________%29.md): Inserts a list of scalar entries into a double-precision sparse matrix.
- [sparse_insert_entries_float(\_:\_:\_:\_:\_:)](sparse_insert_entries_float%28__________%29.md): Inserts a list of scalar entries into a single-precision sparse matrix.
- [sparse_insert_col_double(\_:\_:\_:\_:\_:)](sparse_insert_col_double%28__________%29.md): Inserts a list of scalar entries into a single column of a double-precision sparse matrix.
- [sparse_insert_col_float(\_:\_:\_:\_:\_:)](sparse_insert_col_float%28__________%29.md): Inserts a list of scalar entries into a single column of a single-precision sparse matrix.
- [sparse_insert_row_double(\_:\_:\_:\_:\_:)](sparse_insert_row_double%28__________%29.md): Inserts a list of scalar entries into a single row of a double-precision sparse matrix.
- [sparse_insert_row_float(\_:\_:\_:\_:\_:)](sparse_insert_row_float%28__________%29.md): Inserts a list of scalar entries into a single row of a single-precision sparse matrix.

# sparse_insert_entry_double (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Inserts a single scalar entry into a double-precision sparse matrix.

## Declaration

```objectivec
sparse_status sparse_insert_entry_double(sparse_matrix_double A, double val, sparse_index i, sparse_index j);
```

## Parameters

- `A`: The sparse matrix, *A*, which must have been created with [sparse_matrix_create_double](sparse_matrix_create_double%28____%29.md). [SPARSE_ILLEGAL_PARAMETER](sparse_illegal_parameter.md) is returned if not met.
- `val`: The scalar value to insert into the sparse matrix.
- `i`: The row location to insert the value. Indices are 0 based (first element of  pointer is `ptr[0]`).  Indices expected to be in the bounds of matrix dimensions, undefined behavior if not met.
- `j`: The column location to insert the value. Indices are 0 based (first element of  pointer is ptr\[0\]).  Indices expected to be in the bounds of matrix dimensions, undefined behavior if not met.

<a id="return-value"></a>

## Return Value

On successful insertion, `A` has been updated with the value and [SPARSE_SUCCESS](sparse_success.md) is returned.  If `A` creation requirements are not met, [SPARSE_ILLEGAL_PARAMETER](sparse_illegal_parameter.md) is returned and `A` is unchanged.

<a id="Discussion"></a>

## Discussion

Use to build a sparse matrix by inserting one scalar entry at a time.  This function is the equivalent of `A[i,j] = val`.

Note that matrix properties cannot be modified after value insertion begins. This includes properties such as specifying a triangular matrix.

Insertion can be expensive, generally speaking it is best to do a batch update.

Inserted values may be temporarily held internally within the object and only inserted into the sparse format when a later computation triggers a need to insert.

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Matrix creation and population

- [sparse_matrix_create_double](sparse_matrix_create_double%28____%29.md): Returns a double-precision sparse matrix object.
- [sparse_matrix_create_float](sparse_matrix_create_float%28____%29.md): Returns a single-precision sparse matrix object.
- [sparse_insert_entry_float](sparse_insert_entry_float%28________%29.md): Inserts a single scalar entry into a single-precision sparse matrix.
- [sparse_insert_entries_double](sparse_insert_entries_double%28__________%29.md): Inserts a list of scalar entries into a double-precision sparse matrix.
- [sparse_insert_entries_float](sparse_insert_entries_float%28__________%29.md): Inserts a list of scalar entries into a single-precision sparse matrix.
- [sparse_insert_col_double](sparse_insert_col_double%28__________%29.md): Inserts a list of scalar entries into a single column of a double-precision sparse matrix.
- [sparse_insert_col_float](sparse_insert_col_float%28__________%29.md): Inserts a list of scalar entries into a single column of a single-precision sparse matrix.
- [sparse_insert_row_double](sparse_insert_row_double%28__________%29.md): Inserts a list of scalar entries into a single row of a double-precision sparse matrix.
- [sparse_insert_row_float](sparse_insert_row_float%28__________%29.md): Inserts a list of scalar entries into a single row of a single-precision sparse matrix.
