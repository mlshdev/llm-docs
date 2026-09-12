> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_commit(_:)](https://developer.apple.com/documentation/accelerate/sparse_commit(_:))

# sparse_commit(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Puts values that you recently added to the matrix into the internal sparse storage format.

## Declaration

```swift
func sparse_commit(_ A: UnsafeMutableRawPointer!) -> sparse_status
```

## Parameters

- `A`: The sparse matrix, which has had values recently inserted into the object.

<a id="return-value"></a>

## Return Value

On success, [SPARSE_SUCCESS](sparse_success.md), and `A` has all values inserted into the internal sparse representation.

<a id="Discussion"></a>

## Discussion

Values inserted into a matrix object may not go directly into the sparse representation until needed, for example when a computation occurs. In some cases is may be beneficial to the caller to know when the cost of the update will occur. This routine allows the caller to trigger adding values to the internal sparse format.

Adding values to the sparse format can be costly, and batch updates to the matrices are recommended. Similarly, use of this routine may be expensive, so it is best to insert all values of a batch and call this routine once.

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### General Sparse Matrix Management Operations

- [sparse_matrix_destroy(\_:)](sparse_matrix_destroy%28__%29.md): Releases any memory associated with the matrix object.
- [sparse_set_matrix_property(\_:\_:)](sparse_set_matrix_property%28____%29.md): Sets the given property for a matrix object.
- [sparse_get_matrix_property(\_:\_:)](sparse_get_matrix_property%28____%29.md): Returns the value of the given property name.
- [sparse_get_matrix_number_of_rows(\_:)](sparse_get_matrix_number_of_rows%28__%29.md): Returns the number of rows of a matrix.
- [sparse_get_matrix_number_of_columns(\_:)](sparse_get_matrix_number_of_columns%28__%29.md): Returns the number of columns of a matrix.
- [sparse_get_matrix_nonzero_count(\_:)](sparse_get_matrix_nonzero_count%28__%29.md): Returns the number of nonzero values of a matrix.
- [sparse_get_matrix_nonzero_count_for_row(\_:\_:)](sparse_get_matrix_nonzero_count_for_row%28____%29.md): Returns the number of nonzero values in a row of a matrix.
- [sparse_get_matrix_nonzero_count_for_column(\_:\_:)](sparse_get_matrix_nonzero_count_for_column%28____%29.md): Returns the number of nonzero values in a column of a matrix.

# sparse_commit (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Puts values that you recently added to the matrix into the internal sparse storage format.

## Declaration

```objectivec
sparse_status sparse_commit(void *A);
```

## Parameters

- `A`: The sparse matrix, which has had values recently inserted into the object.

<a id="return-value"></a>

## Return Value

On success, [SPARSE_SUCCESS](sparse_success.md), and `A` has all values inserted into the internal sparse representation.

<a id="Discussion"></a>

## Discussion

Values inserted into a matrix object may not go directly into the sparse representation until needed, for example when a computation occurs. In some cases is may be beneficial to the caller to know when the cost of the update will occur. This routine allows the caller to trigger adding values to the internal sparse format.

Adding values to the sparse format can be costly, and batch updates to the matrices are recommended. Similarly, use of this routine may be expensive, so it is best to insert all values of a batch and call this routine once.

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### General Sparse Matrix Management Operations

- [sparse_matrix_destroy](sparse_matrix_destroy%28__%29.md): Releases any memory associated with the matrix object.
- [sparse_set_matrix_property](sparse_set_matrix_property%28____%29.md): Sets the given property for a matrix object.
- [sparse_get_matrix_property](sparse_get_matrix_property%28____%29.md): Returns the value of the given property name.
- [sparse_get_matrix_number_of_rows](sparse_get_matrix_number_of_rows%28__%29.md): Returns the number of rows of a matrix.
- [sparse_get_matrix_number_of_columns](sparse_get_matrix_number_of_columns%28__%29.md): Returns the number of columns of a matrix.
- [sparse_get_matrix_nonzero_count](sparse_get_matrix_nonzero_count%28__%29.md): Returns the number of nonzero values of a matrix.
- [sparse_get_matrix_nonzero_count_for_row](sparse_get_matrix_nonzero_count_for_row%28____%29.md): Returns the number of nonzero values in a row of a matrix.
- [sparse_get_matrix_nonzero_count_for_column](sparse_get_matrix_nonzero_count_for_column%28____%29.md): Returns the number of nonzero values in a column of a matrix.
