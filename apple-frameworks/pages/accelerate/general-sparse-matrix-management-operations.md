> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/general-sparse-matrix-management-operations](https://developer.apple.com/documentation/accelerate/general-sparse-matrix-management-operations)

# General Sparse Matrix Management Operations (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Manage and work with the properties of a sparse matrix.

## Topics

### General Sparse Matrix Management Operations

- [sparse_commit(\_:)](sparse_commit%28__%29.md): Puts values that you recently added to the matrix into the internal sparse storage format.
- [sparse_matrix_destroy(\_:)](sparse_matrix_destroy%28__%29.md): Releases any memory associated with the matrix object.
- [sparse_set_matrix_property(\_:\_:)](sparse_set_matrix_property%28____%29.md): Sets the given property for a matrix object.
- [sparse_get_matrix_property(\_:\_:)](sparse_get_matrix_property%28____%29.md): Returns the value of the given property name.
- [sparse_get_matrix_number_of_rows(\_:)](sparse_get_matrix_number_of_rows%28__%29.md): Returns the number of rows of a matrix.
- [sparse_get_matrix_number_of_columns(\_:)](sparse_get_matrix_number_of_columns%28__%29.md): Returns the number of columns of a matrix.
- [sparse_get_matrix_nonzero_count(\_:)](sparse_get_matrix_nonzero_count%28__%29.md): Returns the number of nonzero values of a matrix.
- [sparse_get_matrix_nonzero_count_for_row(\_:\_:)](sparse_get_matrix_nonzero_count_for_row%28____%29.md): Returns the number of nonzero values in a row of a matrix.
- [sparse_get_matrix_nonzero_count_for_column(\_:\_:)](sparse_get_matrix_nonzero_count_for_column%28____%29.md): Returns the number of nonzero values in a column of a matrix.

### Supporting Types

- [sparse_dimension](sparse_dimension.md): The dimension type.
- [sparse_index](sparse_index.md): The index type.
- [sparse_matrix_property](sparse_matrix_property.md): The matrix property type.

## See Also

### Sparse computation

- [Matrix and Vector Operations](matrix-and-vector-operations.md): Perform computations with matrices and vectors.
- [Pointwise Matrix Operations](pointwise-matrix-operations.md): Create, insert values into, and extract values from a pointwise sparse matrix.
- [Blockwise Matrix Operations](blockwise-matrix-operations.md): Create, insert values into, and extract values from a blockwise sparse matrix.
- [Sparse Vector Utility Operations](sparse-vector-utility-operations.md): Create and work with sparse vector structures.

# General Sparse Matrix Management Operations (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Manage and work with the properties of a sparse matrix.

## Topics

### General Sparse Matrix Management Operations

- [sparse_commit](sparse_commit%28__%29.md): Puts values that you recently added to the matrix into the internal sparse storage format.
- [sparse_matrix_destroy](sparse_matrix_destroy%28__%29.md): Releases any memory associated with the matrix object.
- [sparse_set_matrix_property](sparse_set_matrix_property%28____%29.md): Sets the given property for a matrix object.
- [sparse_get_matrix_property](sparse_get_matrix_property%28____%29.md): Returns the value of the given property name.
- [sparse_get_matrix_number_of_rows](sparse_get_matrix_number_of_rows%28__%29.md): Returns the number of rows of a matrix.
- [sparse_get_matrix_number_of_columns](sparse_get_matrix_number_of_columns%28__%29.md): Returns the number of columns of a matrix.
- [sparse_get_matrix_nonzero_count](sparse_get_matrix_nonzero_count%28__%29.md): Returns the number of nonzero values of a matrix.
- [sparse_get_matrix_nonzero_count_for_row](sparse_get_matrix_nonzero_count_for_row%28____%29.md): Returns the number of nonzero values in a row of a matrix.
- [sparse_get_matrix_nonzero_count_for_column](sparse_get_matrix_nonzero_count_for_column%28____%29.md): Returns the number of nonzero values in a column of a matrix.

### Supporting Types

- [sparse_dimension](sparse_dimension.md): The dimension type.
- [sparse_index](sparse_index.md): The index type.
- [sparse_matrix_property](sparse_matrix_property.md): The matrix property type.

## See Also

### Sparse computation

- [Matrix and Vector Operations](matrix-and-vector-operations.md): Perform computations with matrices and vectors.
- [Pointwise Matrix Operations](pointwise-matrix-operations.md): Create, insert values into, and extract values from a pointwise sparse matrix.
- [Blockwise Matrix Operations](blockwise-matrix-operations.md): Create, insert values into, and extract values from a blockwise sparse matrix.
- [Sparse Vector Utility Operations](sparse-vector-utility-operations.md): Create and work with sparse vector structures.
