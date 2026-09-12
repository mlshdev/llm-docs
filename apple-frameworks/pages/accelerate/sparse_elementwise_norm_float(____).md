> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_elementwise_norm_float(_:_:)](https://developer.apple.com/documentation/accelerate/sparse_elementwise_norm_float(_:_:))

# sparse_elementwise_norm_float(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Computes the specified element-wise norm of the single-precision sparse matrix *A*.

## Declaration

```swift
func sparse_elementwise_norm_float(_ A: sparse_matrix_float!, _ norm: sparse_norm) -> Float
```

## Parameters

- `A`: The sparse matrix, *A*.
- `norm`: Specify the norm to be computed. Must be one of [SPARSE_NORM_ONE](sparse_norm_one.md), [SPARSE_NORM_TWO](sparse_norm_two.md), [SPARSE_NORM_INF](sparse_norm_inf.md), or [SPARSE_NORM_R1](sparse_norm_r1.md). See discussion for further details.

<a id="return-value"></a>

## Return Value

The requested norm.

<a id="Discussion"></a>

## Discussion

This is the norm of the matrix treated as a vector, not the operator norm. Specify one of:

| [SPARSE_NORM_ONE](sparse_norm_one.md) | *sum over i,j ( | A\[i,j\] | )* | |—|—| | [SPARSE_NORM_TWO](sparse_norm_two.md) | *sqrt ( sum over i,j (A\[i,j\])² )* | | [SPARSE_NORM_INF](sparse_norm_inf.md) | *max over i,j ( | A\[i,j\] | )* | | [SPARSE_NORM_R1](sparse_norm_r1.md) | *sum over j ( sqrt ( sum over i ( A\[i,j\]² ) ) )* |

If norm is not one of the enumerated norm types, the default value is [SPARSE_NORM_INF](sparse_norm_inf.md).

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Matrix-Vector Operations

- [sparse_matrix_vector_product_dense_double(\_:\_:\_:\_:\_:\_:\_:)](sparse_matrix_vector_product_dense_double%28______________%29.md): Multiplies the dense vector *x* by the sparse matrix *A* and adds the result to the dense vector *y*, with all operands containing double-precision values.
- [sparse_matrix_vector_product_dense_float(\_:\_:\_:\_:\_:\_:\_:)](sparse_matrix_vector_product_dense_float%28______________%29.md): Multiplies the dense vector *x* by the sparse matrix *A* and adds the result to the dense vector *y*, with all operands containing single-precision values.
- [sparse_vector_triangular_solve_dense_double(\_:\_:\_:\_:\_:)](sparse_vector_triangular_solve_dense_double%28__________%29.md): Solves the system of equations *x = alpha \* T⁻¹ \* x* for x where *x* is a dense vector and *T* is a triangular sparse matrix, with all operands containing double-precision values.
- [sparse_vector_triangular_solve_dense_float(\_:\_:\_:\_:\_:)](sparse_vector_triangular_solve_dense_float%28__________%29.md): Solves the system of equations *x = alpha \* T⁻¹ \* x* for x where *x* is a dense vector and *T* is a triangular sparse matrix, with all operands containing single-precision values.
- [sparse_outer_product_dense_double(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sparse_outer_product_dense_double%28__________________%29.md): Computes the outer product of the dense vector *x* and the sparse vector *y*, with both operands containing double-precision values.
- [sparse_outer_product_dense_float(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sparse_outer_product_dense_float%28__________________%29.md): Computes the outer product of the dense vector *x* and the sparse vector *y*, with both operands containing single-precision values.
- [sparse_permute_rows_double(\_:\_:)](sparse_permute_rows_double%28____%29.md): Permutes the rows of the double-precision sparse matrix *A* based on the provided permutation array.
- [sparse_permute_rows_float(\_:\_:)](sparse_permute_rows_float%28____%29.md): Permutes the rows of the single-precision sparse matrix *A* based on the provided permutation array.
- [sparse_permute_cols_double(\_:\_:)](sparse_permute_cols_double%28____%29.md): Permutes the columns of the double-precision sparse matrix *A* based on the provided permutation array.
- [sparse_permute_cols_float(\_:\_:)](sparse_permute_cols_float%28____%29.md): Permutes the columns of the single-precision sparse matrix *A* based on the provided permutation array.
- [sparse_elementwise_norm_double(\_:\_:)](sparse_elementwise_norm_double%28____%29.md): Computes the specified element-wise norm of the double-precision sparse matrix *A*.
- [sparse_operator_norm_double(\_:\_:)](sparse_operator_norm_double%28____%29.md): Computes the specified operator norm of the double-precision sparse matrix *A*.
- [sparse_operator_norm_float(\_:\_:)](sparse_operator_norm_float%28____%29.md): Computes the specified operator norm of the single-precision sparse matrix *A*.
- [sparse_matrix_trace_double(\_:\_:)](sparse_matrix_trace_double%28____%29.md): Computes the sum along the specified diagonal of the double-precision sparse matrix *A*.
- [sparse_matrix_trace_float(\_:\_:)](sparse_matrix_trace_float%28____%29.md): Computes the sum along the specified diagonal of the single-precision sparse matrix *A*.

# sparse_elementwise_norm_float (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Computes the specified element-wise norm of the single-precision sparse matrix *A*.

## Declaration

```objectivec
float sparse_elementwise_norm_float(sparse_matrix_float A, sparse_norm norm);
```

## Parameters

- `A`: The sparse matrix, *A*.
- `norm`: Specify the norm to be computed. Must be one of [SPARSE_NORM_ONE](sparse_norm_one.md), [SPARSE_NORM_TWO](sparse_norm_two.md), [SPARSE_NORM_INF](sparse_norm_inf.md), or [SPARSE_NORM_R1](sparse_norm_r1.md). See discussion for further details.

<a id="return-value"></a>

## Return Value

The requested norm.

<a id="Discussion"></a>

## Discussion

This is the norm of the matrix treated as a vector, not the operator norm. Specify one of:

| [SPARSE_NORM_ONE](sparse_norm_one.md) | *sum over i,j ( | A\[i,j\] | )* | |—|—| | [SPARSE_NORM_TWO](sparse_norm_two.md) | *sqrt ( sum over i,j (A\[i,j\])² )* | | [SPARSE_NORM_INF](sparse_norm_inf.md) | *max over i,j ( | A\[i,j\] | )* | | [SPARSE_NORM_R1](sparse_norm_r1.md) | *sum over j ( sqrt ( sum over i ( A\[i,j\]² ) ) )* |

If norm is not one of the enumerated norm types, the default value is [SPARSE_NORM_INF](sparse_norm_inf.md).

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Matrix-Vector Operations

- [sparse_matrix_vector_product_dense_double](sparse_matrix_vector_product_dense_double%28______________%29.md): Multiplies the dense vector *x* by the sparse matrix *A* and adds the result to the dense vector *y*, with all operands containing double-precision values.
- [sparse_matrix_vector_product_dense_float](sparse_matrix_vector_product_dense_float%28______________%29.md): Multiplies the dense vector *x* by the sparse matrix *A* and adds the result to the dense vector *y*, with all operands containing single-precision values.
- [sparse_vector_triangular_solve_dense_double](sparse_vector_triangular_solve_dense_double%28__________%29.md): Solves the system of equations *x = alpha \* T⁻¹ \* x* for x where *x* is a dense vector and *T* is a triangular sparse matrix, with all operands containing double-precision values.
- [sparse_vector_triangular_solve_dense_float](sparse_vector_triangular_solve_dense_float%28__________%29.md): Solves the system of equations *x = alpha \* T⁻¹ \* x* for x where *x* is a dense vector and *T* is a triangular sparse matrix, with all operands containing single-precision values.
- [sparse_outer_product_dense_double](sparse_outer_product_dense_double%28__________________%29.md): Computes the outer product of the dense vector *x* and the sparse vector *y*, with both operands containing double-precision values.
- [sparse_outer_product_dense_float](sparse_outer_product_dense_float%28__________________%29.md): Computes the outer product of the dense vector *x* and the sparse vector *y*, with both operands containing single-precision values.
- [sparse_permute_rows_double](sparse_permute_rows_double%28____%29.md): Permutes the rows of the double-precision sparse matrix *A* based on the provided permutation array.
- [sparse_permute_rows_float](sparse_permute_rows_float%28____%29.md): Permutes the rows of the single-precision sparse matrix *A* based on the provided permutation array.
- [sparse_permute_cols_double](sparse_permute_cols_double%28____%29.md): Permutes the columns of the double-precision sparse matrix *A* based on the provided permutation array.
- [sparse_permute_cols_float](sparse_permute_cols_float%28____%29.md): Permutes the columns of the single-precision sparse matrix *A* based on the provided permutation array.
- [sparse_elementwise_norm_double](sparse_elementwise_norm_double%28____%29.md): Computes the specified element-wise norm of the double-precision sparse matrix *A*.
- [sparse_operator_norm_double](sparse_operator_norm_double%28____%29.md): Computes the specified operator norm of the double-precision sparse matrix *A*.
- [sparse_operator_norm_float](sparse_operator_norm_float%28____%29.md): Computes the specified operator norm of the single-precision sparse matrix *A*.
- [sparse_matrix_trace_double](sparse_matrix_trace_double%28____%29.md): Computes the sum along the specified diagonal of the double-precision sparse matrix *A*.
- [sparse_matrix_trace_float](sparse_matrix_trace_float%28____%29.md): Computes the sum along the specified diagonal of the single-precision sparse matrix *A*.
