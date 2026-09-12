> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/matrix-and-vector-operations](https://developer.apple.com/documentation/accelerate/matrix-and-vector-operations)

# Matrix and Vector Operations (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Perform computations with matrices and vectors.

## Topics

### Complex vector operations

- [sparse_pack_vector_double_complex(\_:\_:\_:\_:\_:\_:)](sparse_pack_vector_double_complex%28____________%29.md)
- [sparse_pack_vector_float_complex(\_:\_:\_:\_:\_:\_:)](sparse_pack_vector_float_complex%28____________%29.md)
- [sparse_unpack_vector_double_complex(\_:\_:\_:\_:\_:\_:\_:)](sparse_unpack_vector_double_complex%28______________%29.md)
- [sparse_unpack_vector_float_complex(\_:\_:\_:\_:\_:\_:\_:)](sparse_unpack_vector_float_complex%28______________%29.md)
- [sparse_vector_norm_double_complex(\_:\_:\_:\_:)](sparse_vector_norm_double_complex%28________%29.md)
- [sparse_vector_norm_float_complex(\_:\_:\_:\_:)](sparse_vector_norm_float_complex%28________%29.md)

### Complex matrix operations

- [sparse_elementwise_norm_double_complex(\_:\_:)](sparse_elementwise_norm_double_complex%28____%29.md)
- [sparse_elementwise_norm_float_complex(\_:\_:)](sparse_elementwise_norm_float_complex%28____%29.md)
- [sparse_get_vector_nonzero_count_double_complex(\_:\_:\_:)](sparse_get_vector_nonzero_count_double_complex%28______%29.md)
- [sparse_get_vector_nonzero_count_float_complex(\_:\_:\_:)](sparse_get_vector_nonzero_count_float_complex%28______%29.md)
- [sparse_operator_norm_double_complex(\_:\_:)](sparse_operator_norm_double_complex%28____%29.md)
- [sparse_operator_norm_float_complex(\_:\_:)](sparse_operator_norm_float_complex%28____%29.md)
- [sparse_permute_cols_double_complex(\_:\_:)](sparse_permute_cols_double_complex%28____%29.md)
- [sparse_permute_cols_float_complex(\_:\_:)](sparse_permute_cols_float_complex%28____%29.md)
- [sparse_permute_rows_double_complex(\_:\_:)](sparse_permute_rows_double_complex%28____%29.md)
- [sparse_permute_rows_float_complex(\_:\_:)](sparse_permute_rows_float_complex%28____%29.md)
- [sparse_permute_rows_float_complex(\_:\_:)](sparse_permute_rows_float_complex%28____%29.md)

### Matrix-Matrix Operations

- [sparse_matrix_product_dense_double(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sparse_matrix_product_dense_double%28__________________%29.md): Multiplies the dense matrix *B* by the sparse matrix *A* and adds the result to the dense matrix *C*, all with double-precision values.
- [sparse_matrix_product_dense_float(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sparse_matrix_product_dense_float%28__________________%29.md): Multiplies the dense matrix *B* by the sparse matrix *A* and adds the result to the dense matrix *C*, all with single-precision values.
- [sparse_matrix_product_sparse_double(\_:\_:\_:\_:\_:\_:\_:)](sparse_matrix_product_sparse_double%28______________%29.md): Multiplies the sparse matrix *B* by the sparse matrix *A* and adds the result to the dense matrix *C*, all with double-precision values.
- [sparse_matrix_product_sparse_float(\_:\_:\_:\_:\_:\_:\_:)](sparse_matrix_product_sparse_float%28______________%29.md): Multiplies the sparse matrix *B* by the sparse matrix *A* and adds the result to the dense matrix *C*, all with single-precision values.
- [sparse_matrix_triangular_solve_dense_double(\_:\_:\_:\_:\_:\_:\_:)](sparse_matrix_triangular_solve_dense_double%28______________%29.md): Solves the system of equations *B = alpha \* T⁻¹ \* B* for *B* where *B* is a dense matrix and *T* is a triangular sparse matrix, both with double-precision values.
- [sparse_matrix_triangular_solve_dense_float(\_:\_:\_:\_:\_:\_:\_:)](sparse_matrix_triangular_solve_dense_float%28______________%29.md): Solves the system of equations *B = alpha \* T⁻¹ \* B* for *B* where *B* is a dense matrix and *T* is a triangular sparse matrix, both with double-precision values.

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
- [sparse_elementwise_norm_float(\_:\_:)](sparse_elementwise_norm_float%28____%29.md): Computes the specified element-wise norm of the single-precision sparse matrix *A*.
- [sparse_operator_norm_double(\_:\_:)](sparse_operator_norm_double%28____%29.md): Computes the specified operator norm of the double-precision sparse matrix *A*.
- [sparse_operator_norm_float(\_:\_:)](sparse_operator_norm_float%28____%29.md): Computes the specified operator norm of the single-precision sparse matrix *A*.
- [sparse_matrix_trace_double(\_:\_:)](sparse_matrix_trace_double%28____%29.md): Computes the sum along the specified diagonal of the double-precision sparse matrix *A*.
- [sparse_matrix_trace_float(\_:\_:)](sparse_matrix_trace_float%28____%29.md): Computes the sum along the specified diagonal of the single-precision sparse matrix *A*.

### Vector-Vector Operations

- [sparse_inner_product_dense_double(\_:\_:\_:\_:\_:)](sparse_inner_product_dense_double%28__________%29.md): Computes the inner product of sparse vector *x* with double-precision *y*, with both vectors containing double-precision values.
- [sparse_inner_product_dense_float(\_:\_:\_:\_:\_:)](sparse_inner_product_dense_float%28__________%29.md): Computes the inner product of sparse vector *x* with dense vector *y,* with both vectors containing single-precision values.
- [sparse_inner_product_sparse_double(\_:\_:\_:\_:\_:\_:)](sparse_inner_product_sparse_double%28____________%29.md): Computes the inner product of sparse vector *x* with sparse vector *y,* with both vectors containing double-precision values.
- [sparse_inner_product_sparse_float(\_:\_:\_:\_:\_:\_:)](sparse_inner_product_sparse_float%28____________%29.md): Computes the inner product of sparse vector *x* with sparse vector *y,* with both vectors containing single-precision values.
- [sparse_vector_add_with_scale_dense_double(\_:\_:\_:\_:\_:\_:)](sparse_vector_add_with_scale_dense_double%28____________%29.md): Scales the sparse vector *x* by *alpha* and adds the result to the dense vector *y,* with both vectors containing double-precision values.
- [sparse_vector_add_with_scale_dense_float(\_:\_:\_:\_:\_:\_:)](sparse_vector_add_with_scale_dense_float%28____________%29.md): Scales the sparse vector *x* by *alpha* and adds the result to the dense vector *y,* with both vectors containing single-precision values.
- [sparse_vector_norm_double(\_:\_:\_:\_:)](sparse_vector_norm_double%28________%29.md): Computes the specified norm of the double-precision sparse vector *x*.
- [sparse_vector_norm_float(\_:\_:\_:\_:)](sparse_vector_norm_float%28________%29.md): Computes the specified norm of the single-precision sparse vector *x*.

### Supporting Types

- [sparse_matrix_double](sparse_matrix_double.md): Sparse matrix opaque type for double.
- [sparse_matrix_float](sparse_matrix_float.md): Sparse matrix opaque type for float.
- [sparse_status](sparse_status.md): The type reflecting the status of an operations.
- [sparse_dimension](sparse_dimension.md): The dimension type.
- [sparse_index](sparse_index.md): The index type.
- [sparse_norm](sparse_norm.md): The norm specifier.
- [sparse_stride](sparse_stride.md): The stride type.

## See Also

### Sparse computation

- [Pointwise Matrix Operations](pointwise-matrix-operations.md): Create, insert values into, and extract values from a pointwise sparse matrix.
- [Blockwise Matrix Operations](blockwise-matrix-operations.md): Create, insert values into, and extract values from a blockwise sparse matrix.
- [General Sparse Matrix Management Operations](general-sparse-matrix-management-operations.md): Manage and work with the properties of a sparse matrix.
- [Sparse Vector Utility Operations](sparse-vector-utility-operations.md): Create and work with sparse vector structures.

# Matrix and Vector Operations (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Perform computations with matrices and vectors.

## Topics

### Complex vector operations

- [sparse_pack_vector_double_complex](sparse_pack_vector_double_complex%28____________%29.md)
- [sparse_pack_vector_float_complex](sparse_pack_vector_float_complex%28____________%29.md)
- [sparse_unpack_vector_double_complex](sparse_unpack_vector_double_complex%28______________%29.md)
- [sparse_unpack_vector_float_complex](sparse_unpack_vector_float_complex%28______________%29.md)
- [sparse_vector_norm_double_complex](sparse_vector_norm_double_complex%28________%29.md)
- [sparse_vector_norm_float_complex](sparse_vector_norm_float_complex%28________%29.md)

### Complex matrix operations

- [sparse_elementwise_norm_double_complex](sparse_elementwise_norm_double_complex%28____%29.md)
- [sparse_elementwise_norm_float_complex](sparse_elementwise_norm_float_complex%28____%29.md)
- [sparse_get_vector_nonzero_count_double_complex](sparse_get_vector_nonzero_count_double_complex%28______%29.md)
- [sparse_get_vector_nonzero_count_float_complex](sparse_get_vector_nonzero_count_float_complex%28______%29.md)
- [sparse_operator_norm_double_complex](sparse_operator_norm_double_complex%28____%29.md)
- [sparse_operator_norm_float_complex](sparse_operator_norm_float_complex%28____%29.md)
- [sparse_permute_cols_double_complex](sparse_permute_cols_double_complex%28____%29.md)
- [sparse_permute_cols_float_complex](sparse_permute_cols_float_complex%28____%29.md)
- [sparse_permute_rows_double_complex](sparse_permute_rows_double_complex%28____%29.md)
- [sparse_permute_rows_float_complex](sparse_permute_rows_float_complex%28____%29.md)
- [sparse_permute_rows_float_complex](sparse_permute_rows_float_complex%28____%29.md)

### Matrix-Matrix Operations

- [sparse_matrix_product_dense_double](sparse_matrix_product_dense_double%28__________________%29.md): Multiplies the dense matrix *B* by the sparse matrix *A* and adds the result to the dense matrix *C*, all with double-precision values.
- [sparse_matrix_product_dense_float](sparse_matrix_product_dense_float%28__________________%29.md): Multiplies the dense matrix *B* by the sparse matrix *A* and adds the result to the dense matrix *C*, all with single-precision values.
- [sparse_matrix_product_sparse_double](sparse_matrix_product_sparse_double%28______________%29.md): Multiplies the sparse matrix *B* by the sparse matrix *A* and adds the result to the dense matrix *C*, all with double-precision values.
- [sparse_matrix_product_sparse_float](sparse_matrix_product_sparse_float%28______________%29.md): Multiplies the sparse matrix *B* by the sparse matrix *A* and adds the result to the dense matrix *C*, all with single-precision values.
- [sparse_matrix_triangular_solve_dense_double](sparse_matrix_triangular_solve_dense_double%28______________%29.md): Solves the system of equations *B = alpha \* T⁻¹ \* B* for *B* where *B* is a dense matrix and *T* is a triangular sparse matrix, both with double-precision values.
- [sparse_matrix_triangular_solve_dense_float](sparse_matrix_triangular_solve_dense_float%28______________%29.md): Solves the system of equations *B = alpha \* T⁻¹ \* B* for *B* where *B* is a dense matrix and *T* is a triangular sparse matrix, both with double-precision values.

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
- [sparse_elementwise_norm_float](sparse_elementwise_norm_float%28____%29.md): Computes the specified element-wise norm of the single-precision sparse matrix *A*.
- [sparse_operator_norm_double](sparse_operator_norm_double%28____%29.md): Computes the specified operator norm of the double-precision sparse matrix *A*.
- [sparse_operator_norm_float](sparse_operator_norm_float%28____%29.md): Computes the specified operator norm of the single-precision sparse matrix *A*.
- [sparse_matrix_trace_double](sparse_matrix_trace_double%28____%29.md): Computes the sum along the specified diagonal of the double-precision sparse matrix *A*.
- [sparse_matrix_trace_float](sparse_matrix_trace_float%28____%29.md): Computes the sum along the specified diagonal of the single-precision sparse matrix *A*.

### Vector-Vector Operations

- [sparse_inner_product_dense_double](sparse_inner_product_dense_double%28__________%29.md): Computes the inner product of sparse vector *x* with double-precision *y*, with both vectors containing double-precision values.
- [sparse_inner_product_dense_float](sparse_inner_product_dense_float%28__________%29.md): Computes the inner product of sparse vector *x* with dense vector *y,* with both vectors containing single-precision values.
- [sparse_inner_product_sparse_double](sparse_inner_product_sparse_double%28____________%29.md): Computes the inner product of sparse vector *x* with sparse vector *y,* with both vectors containing double-precision values.
- [sparse_inner_product_sparse_float](sparse_inner_product_sparse_float%28____________%29.md): Computes the inner product of sparse vector *x* with sparse vector *y,* with both vectors containing single-precision values.
- [sparse_vector_add_with_scale_dense_double](sparse_vector_add_with_scale_dense_double%28____________%29.md): Scales the sparse vector *x* by *alpha* and adds the result to the dense vector *y,* with both vectors containing double-precision values.
- [sparse_vector_add_with_scale_dense_float](sparse_vector_add_with_scale_dense_float%28____________%29.md): Scales the sparse vector *x* by *alpha* and adds the result to the dense vector *y,* with both vectors containing single-precision values.
- [sparse_vector_norm_double](sparse_vector_norm_double%28________%29.md): Computes the specified norm of the double-precision sparse vector *x*.
- [sparse_vector_norm_float](sparse_vector_norm_float%28________%29.md): Computes the specified norm of the single-precision sparse vector *x*.

### Supporting Types

- [sparse_matrix_double](sparse_matrix_double.md): Sparse matrix opaque type for double.
- [sparse_matrix_float](sparse_matrix_float.md): Sparse matrix opaque type for float.
- [sparse_status](sparse_status.md): The type reflecting the status of an operations.
- [sparse_dimension](sparse_dimension.md): The dimension type.
- [sparse_index](sparse_index.md): The index type.
- [sparse_norm](sparse_norm.md): The norm specifier.
- [sparse_stride](sparse_stride.md): The stride type.

## See Also

### Sparse computation

- [Pointwise Matrix Operations](pointwise-matrix-operations.md): Create, insert values into, and extract values from a pointwise sparse matrix.
- [Blockwise Matrix Operations](blockwise-matrix-operations.md): Create, insert values into, and extract values from a blockwise sparse matrix.
- [General Sparse Matrix Management Operations](general-sparse-matrix-management-operations.md): Manage and work with the properties of a sparse matrix.
- [Sparse Vector Utility Operations](sparse-vector-utility-operations.md): Create and work with sparse vector structures.
