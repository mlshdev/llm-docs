> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_outer_product_dense_double(_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/sparse_outer_product_dense_double(_:_:_:_:_:_:_:_:_:))

# sparse_outer_product_dense_double(\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Computes the outer product of the dense vector *x* and the sparse vector *y*, with both operands containing double-precision values.

## Declaration

```swift
func sparse_outer_product_dense_double(_ M: sparse_dimension, _ N: sparse_dimension, _ nz: sparse_dimension, _ alpha: Double, _ x: UnsafePointer<Double>!, _ incx: sparse_stride, _ y: UnsafePointer<Double>!, _ indy: UnsafePointer<sparse_index>!, _ C: UnsafeMutablePointer<sparse_matrix_double?>!) -> sparse_status
```

## Parameters

- `M`: The number of rows of *x* and the resulting matrix.
- `N`: The number of columns of the resulting matrix. The number of nonzero values must be less than or equal to `N`.
- `nz`: The number of nonzero values in the sparse vector *y*. Must be less than or equal to `N`.
- `alpha`: Scalar multiplier of *x*.
- `x`: Pointer to the dense vector *x*. Must be `M` number of elements. Negative strides  are supported.  Note, unlike dense BLAS routines, the pointer points to the last element when stride is negative.
- `incx`: Increment between valid values in the dense vector *x*.  Negative strides are supported.
- `y`: Pointer to the dense storage for the values of the sparse vector *y*. The corresponding entry in `indy` holds the index of the value.  Contains `nz` values.
- `indy`: Pointer to the dense storage for the index values of the sparse vector y.  The corresponding entry in *y* holds the values of the vector.  Contains `nz` values.
- `C`: Pointer to an uninitialized sparse matrix object.  On success a newly allocated sparse matrix object is returned in this pointer.  On error, this set to `NULL`.You are responsible for calling [sparse_matrix_destroy(\_:)](sparse_matrix_destroy%28__%29.md) on this matrix object.

<a id="return-value"></a>

## Return Value

On success [SPARSE_SUCCESS](sparse_success.md) is returned an `C` is valid matrix object.  The caller is responsible for cleaning up the sparse matrix object with [sparse_matrix_destroy(\_:)](sparse_matrix_destroy%28__%29.md).

<a id="discussion"></a>

## Discussion

Will return [SPARSE_ILLEGAL_PARAMETER](sparse_illegal_parameter.md) if `nz > N`, and `C` will be unchanged.

<a id="Discussion"></a>

## Discussion

Compute the outer product of the dense vector x and the sparse vector y and return a new sparse matrix in the uninitialized pointer sparse matrix pointer `C`.  `C = alpha * x * y'`.  You are responsible for calling [sparse_matrix_destroy(\_:)](sparse_matrix_destroy%28__%29.md) on the returned matrix.The matrix object returned on success is a point wise based sparse matrix.

Indices in `indx` are always assumed to be stored in ascending order. Additionally, indices are assumed to be unique.  The behavior of this function is undefined if either of these assumptions are not met.

All indices are 0 based (the first element of a pointer is `ptr[0]`).

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Matrix-Vector Operations

- [sparse_matrix_vector_product_dense_double(\_:\_:\_:\_:\_:\_:\_:)](sparse_matrix_vector_product_dense_double%28______________%29.md): Multiplies the dense vector *x* by the sparse matrix *A* and adds the result to the dense vector *y*, with all operands containing double-precision values.
- [sparse_matrix_vector_product_dense_float(\_:\_:\_:\_:\_:\_:\_:)](sparse_matrix_vector_product_dense_float%28______________%29.md): Multiplies the dense vector *x* by the sparse matrix *A* and adds the result to the dense vector *y*, with all operands containing single-precision values.
- [sparse_vector_triangular_solve_dense_double(\_:\_:\_:\_:\_:)](sparse_vector_triangular_solve_dense_double%28__________%29.md): Solves the system of equations *x = alpha \* T⁻¹ \* x* for x where *x* is a dense vector and *T* is a triangular sparse matrix, with all operands containing double-precision values.
- [sparse_vector_triangular_solve_dense_float(\_:\_:\_:\_:\_:)](sparse_vector_triangular_solve_dense_float%28__________%29.md): Solves the system of equations *x = alpha \* T⁻¹ \* x* for x where *x* is a dense vector and *T* is a triangular sparse matrix, with all operands containing single-precision values.
- [sparse_outer_product_dense_float(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sparse_outer_product_dense_float%28__________________%29.md): Computes the outer product of the dense vector *x* and the sparse vector *y*, with both operands containing single-precision values.
- [sparse_permute_rows_double(\_:\_:)](sparse_permute_rows_double%28____%29.md): Permutes the rows of the double-precision sparse matrix *A* based on the provided permutation array.
- [sparse_permute_rows_float(\_:\_:)](sparse_permute_rows_float%28____%29.md): Permutes the rows of the single-precision sparse matrix *A* based on the provided permutation array.
- [sparse_permute_cols_double(\_:\_:)](sparse_permute_cols_double%28____%29.md): Permutes the columns of the double-precision sparse matrix *A* based on the provided permutation array.
- [sparse_permute_cols_float(\_:\_:)](sparse_permute_cols_float%28____%29.md): Permutes the columns of the single-precision sparse matrix *A* based on the provided permutation array.
- [sparse_elementwise_norm_double(\_:\_:)](sparse_elementwise_norm_double%28____%29.md): Computes the specified element-wise norm of the double-precision sparse matrix *A*.
- [sparse_elementwise_norm_float(\_:\_:)](sparse_elementwise_norm_float%28____%29.md): Computes the specified element-wise norm of the single-precision sparse matrix *A*.
- [sparse_operator_norm_double(\_:\_:)](sparse_operator_norm_double%28____%29.md): Computes the specified operator norm of the double-precision sparse matrix *A*.
- [sparse_operator_norm_float(\_:\_:)](sparse_operator_norm_float%28____%29.md): Computes the specified operator norm of the single-precision sparse matrix *A*.
- [sparse_matrix_trace_double(\_:\_:)](sparse_matrix_trace_double%28____%29.md): Computes the sum along the specified diagonal of the double-precision sparse matrix *A*.
- [sparse_matrix_trace_float(\_:\_:)](sparse_matrix_trace_float%28____%29.md): Computes the sum along the specified diagonal of the single-precision sparse matrix *A*.

# sparse_outer_product_dense_double (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Computes the outer product of the dense vector *x* and the sparse vector *y*, with both operands containing double-precision values.

## Declaration

```objectivec
sparse_status sparse_outer_product_dense_double(sparse_dimension M, sparse_dimension N, sparse_dimension nz, double alpha, const double * restrictx, sparse_stride incx, const double * restricty, const sparse_index * restrictindy, sparse_matrix_double* restrictC);
```

## Parameters

- `M`: The number of rows of *x* and the resulting matrix.
- `N`: The number of columns of the resulting matrix. The number of nonzero values must be less than or equal to `N`.
- `nz`: The number of nonzero values in the sparse vector *y*. Must be less than or equal to `N`.
- `alpha`: Scalar multiplier of *x*.
- `x`: Pointer to the dense vector *x*. Must be `M` number of elements. Negative strides  are supported.  Note, unlike dense BLAS routines, the pointer points to the last element when stride is negative.
- `incx`: Increment between valid values in the dense vector *x*.  Negative strides are supported.
- `y`: Pointer to the dense storage for the values of the sparse vector *y*. The corresponding entry in `indy` holds the index of the value.  Contains `nz` values.
- `indy`: Pointer to the dense storage for the index values of the sparse vector y.  The corresponding entry in *y* holds the values of the vector.  Contains `nz` values.
- `C`: Pointer to an uninitialized sparse matrix object.  On success a newly allocated sparse matrix object is returned in this pointer.  On error, this set to `NULL`.You are responsible for calling [sparse_matrix_destroy](sparse_matrix_destroy%28__%29.md) on this matrix object.

<a id="return-value"></a>

## Return Value

On success [SPARSE_SUCCESS](sparse_success.md) is returned an `C` is valid matrix object.  The caller is responsible for cleaning up the sparse matrix object with [sparse_matrix_destroy](sparse_matrix_destroy%28__%29.md).

<a id="discussion"></a>

## Discussion

Will return [SPARSE_ILLEGAL_PARAMETER](sparse_illegal_parameter.md) if `nz > N`, and `C` will be unchanged.

<a id="Discussion"></a>

## Discussion

Compute the outer product of the dense vector x and the sparse vector y and return a new sparse matrix in the uninitialized pointer sparse matrix pointer `C`.  `C = alpha * x * y'`.  You are responsible for calling [sparse_matrix_destroy](sparse_matrix_destroy%28__%29.md) on the returned matrix.The matrix object returned on success is a point wise based sparse matrix.

Indices in `indx` are always assumed to be stored in ascending order. Additionally, indices are assumed to be unique.  The behavior of this function is undefined if either of these assumptions are not met.

All indices are 0 based (the first element of a pointer is `ptr[0]`).

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Matrix-Vector Operations

- [sparse_matrix_vector_product_dense_double](sparse_matrix_vector_product_dense_double%28______________%29.md): Multiplies the dense vector *x* by the sparse matrix *A* and adds the result to the dense vector *y*, with all operands containing double-precision values.
- [sparse_matrix_vector_product_dense_float](sparse_matrix_vector_product_dense_float%28______________%29.md): Multiplies the dense vector *x* by the sparse matrix *A* and adds the result to the dense vector *y*, with all operands containing single-precision values.
- [sparse_vector_triangular_solve_dense_double](sparse_vector_triangular_solve_dense_double%28__________%29.md): Solves the system of equations *x = alpha \* T⁻¹ \* x* for x where *x* is a dense vector and *T* is a triangular sparse matrix, with all operands containing double-precision values.
- [sparse_vector_triangular_solve_dense_float](sparse_vector_triangular_solve_dense_float%28__________%29.md): Solves the system of equations *x = alpha \* T⁻¹ \* x* for x where *x* is a dense vector and *T* is a triangular sparse matrix, with all operands containing single-precision values.
- [sparse_outer_product_dense_float](sparse_outer_product_dense_float%28__________________%29.md): Computes the outer product of the dense vector *x* and the sparse vector *y*, with both operands containing single-precision values.
- [sparse_permute_rows_double](sparse_permute_rows_double%28____%29.md): Permutes the rows of the double-precision sparse matrix *A* based on the provided permutation array.
- [sparse_permute_rows_float](sparse_permute_rows_float%28____%29.md): Permutes the rows of the single-precision sparse matrix *A* based on the provided permutation array.
- [sparse_permute_cols_double](sparse_permute_cols_double%28____%29.md): Permutes the columns of the double-precision sparse matrix *A* based on the provided permutation array.
- [sparse_permute_cols_float](sparse_permute_cols_float%28____%29.md): Permutes the columns of the single-precision sparse matrix *A* based on the provided permutation array.
- [sparse_elementwise_norm_double](sparse_elementwise_norm_double%28____%29.md): Computes the specified element-wise norm of the double-precision sparse matrix *A*.
- [sparse_elementwise_norm_float](sparse_elementwise_norm_float%28____%29.md): Computes the specified element-wise norm of the single-precision sparse matrix *A*.
- [sparse_operator_norm_double](sparse_operator_norm_double%28____%29.md): Computes the specified operator norm of the double-precision sparse matrix *A*.
- [sparse_operator_norm_float](sparse_operator_norm_float%28____%29.md): Computes the specified operator norm of the single-precision sparse matrix *A*.
- [sparse_matrix_trace_double](sparse_matrix_trace_double%28____%29.md): Computes the sum along the specified diagonal of the double-precision sparse matrix *A*.
- [sparse_matrix_trace_float](sparse_matrix_trace_float%28____%29.md): Computes the sum along the specified diagonal of the single-precision sparse matrix *A*.
