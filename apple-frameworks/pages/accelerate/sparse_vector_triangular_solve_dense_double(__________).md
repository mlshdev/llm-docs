> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_vector_triangular_solve_dense_double(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/sparse_vector_triangular_solve_dense_double(_:_:_:_:_:))

# sparse_vector_triangular_solve_dense_double(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Solves the system of equations *x = alpha \* T⁻¹ \* x* for x where *x* is a dense vector and *T* is a triangular sparse matrix, with all operands containing double-precision values.

## Declaration

```swift
func sparse_vector_triangular_solve_dense_double(_ transt: CBLAS_TRANSPOSE, _ alpha: Double, _ T: sparse_matrix_double!, _ x: UnsafeMutablePointer<Double>!, _ incx: sparse_stride) -> sparse_status
```

## Parameters

- `transt`: Specifies whether to perform the operation with T or the transpose of T. Must be one of `CblasNoTrans` or `CblasTrans`.
- `alpha`: Scalar multiplier of *T*.
- `T`: The sparse triangular matrix.  Must be upper or lower triangular matrix. Will return [SPARSE_ILLEGAL_PARAMETER](sparse_illegal_parameter.md) if not a triangular matrix.
- `x`: Pointer to the dense vector *x*. The dimension must match the dimension of the triangular matrix *T*. Behavior undefined if this is not met.  Negative strides are supported.  Note, unlike dense BLAS routines, the pointer points to the last element when stride is negative.  On exit holds the solution to the system of equations.
- `incx`: Increment between valid values in the dense vector *x*. Negative strides are supported.

<a id="return-value"></a>

## Return Value

On success, [SPARSE_SUCCESS](sparse_success.md) (`x` will be updated with result of the  operation).  Will return [SPARSE_ILLEGAL_PARAMETER](sparse_illegal_parameter.md) if `transt` is invalid or if the matrix `T` is not triangular and `x` will be unchanged.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Matrix-Vector Operations

- [sparse_matrix_vector_product_dense_double(\_:\_:\_:\_:\_:\_:\_:)](sparse_matrix_vector_product_dense_double%28______________%29.md): Multiplies the dense vector *x* by the sparse matrix *A* and adds the result to the dense vector *y*, with all operands containing double-precision values.
- [sparse_matrix_vector_product_dense_float(\_:\_:\_:\_:\_:\_:\_:)](sparse_matrix_vector_product_dense_float%28______________%29.md): Multiplies the dense vector *x* by the sparse matrix *A* and adds the result to the dense vector *y*, with all operands containing single-precision values.
- [sparse_vector_triangular_solve_dense_float(\_:\_:\_:\_:\_:)](sparse_vector_triangular_solve_dense_float%28__________%29.md): Solves the system of equations *x = alpha \* T⁻¹ \* x* for x where *x* is a dense vector and *T* is a triangular sparse matrix, with all operands containing single-precision values.
- [sparse_outer_product_dense_double(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sparse_outer_product_dense_double%28__________________%29.md): Computes the outer product of the dense vector *x* and the sparse vector *y*, with both operands containing double-precision values.
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

# sparse_vector_triangular_solve_dense_double (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Solves the system of equations *x = alpha \* T⁻¹ \* x* for x where *x* is a dense vector and *T* is a triangular sparse matrix, with all operands containing double-precision values.

## Declaration

```objectivec
sparse_status sparse_vector_triangular_solve_dense_double(enum CBLAS_TRANSPOSE transt, double alpha, sparse_matrix_double T, double * restrictx, sparse_stride incx);
```

## Parameters

- `transt`: Specifies whether to perform the operation with T or the transpose of T. Must be one of `CblasNoTrans` or `CblasTrans`.
- `alpha`: Scalar multiplier of *T*.
- `T`: The sparse triangular matrix.  Must be upper or lower triangular matrix. Will return [SPARSE_ILLEGAL_PARAMETER](sparse_illegal_parameter.md) if not a triangular matrix.
- `x`: Pointer to the dense vector *x*. The dimension must match the dimension of the triangular matrix *T*. Behavior undefined if this is not met.  Negative strides are supported.  Note, unlike dense BLAS routines, the pointer points to the last element when stride is negative.  On exit holds the solution to the system of equations.
- `incx`: Increment between valid values in the dense vector *x*. Negative strides are supported.

<a id="return-value"></a>

## Return Value

On success, [SPARSE_SUCCESS](sparse_success.md) (`x` will be updated with result of the  operation).  Will return [SPARSE_ILLEGAL_PARAMETER](sparse_illegal_parameter.md) if `transt` is invalid or if the matrix `T` is not triangular and `x` will be unchanged.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Matrix-Vector Operations

- [sparse_matrix_vector_product_dense_double](sparse_matrix_vector_product_dense_double%28______________%29.md): Multiplies the dense vector *x* by the sparse matrix *A* and adds the result to the dense vector *y*, with all operands containing double-precision values.
- [sparse_matrix_vector_product_dense_float](sparse_matrix_vector_product_dense_float%28______________%29.md): Multiplies the dense vector *x* by the sparse matrix *A* and adds the result to the dense vector *y*, with all operands containing single-precision values.
- [sparse_vector_triangular_solve_dense_float](sparse_vector_triangular_solve_dense_float%28__________%29.md): Solves the system of equations *x = alpha \* T⁻¹ \* x* for x where *x* is a dense vector and *T* is a triangular sparse matrix, with all operands containing single-precision values.
- [sparse_outer_product_dense_double](sparse_outer_product_dense_double%28__________________%29.md): Computes the outer product of the dense vector *x* and the sparse vector *y*, with both operands containing double-precision values.
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
