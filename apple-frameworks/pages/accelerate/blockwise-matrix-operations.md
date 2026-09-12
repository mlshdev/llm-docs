> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/blockwise-matrix-operations](https://developer.apple.com/documentation/accelerate/blockwise-matrix-operations)

# Blockwise Matrix Operations (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Create, insert values into, and extract values from a blockwise sparse matrix.

## Topics

### Matrix creation and population

- [sparse_matrix_block_create_double(\_:\_:\_:\_:)](sparse_matrix_block_create_double%28________%29.md): Returns a double-precision sparse matrix object that is stored in block-entry format with a fixed block size.
- [sparse_matrix_block_create_float(\_:\_:\_:\_:)](sparse_matrix_block_create_float%28________%29.md): Returns a single-precision sparse matrix object that is stored in block-entry format with a fixed block size.
- [sparse_matrix_variable_block_create_double(\_:\_:\_:\_:)](sparse_matrix_variable_block_create_double%28________%29.md): Returns a double-precision sparse matrix object that is stored in block-entry format with a variable block size.
- [sparse_matrix_variable_block_create_float(\_:\_:\_:\_:)](sparse_matrix_variable_block_create_float%28________%29.md): Returns a single-precision sparse matrix object that is stored in block-entry format with a variable block size.
- [sparse_insert_block_double(\_:\_:\_:\_:\_:\_:)](sparse_insert_block_double%28____________%29.md): Inserts a dense block of entries into a double-precision matrix.
- [sparse_insert_block_float(\_:\_:\_:\_:\_:\_:)](sparse_insert_block_float%28____________%29.md): Inserts a dense block of entries into a single-precision matrix.
- [sparse_matrix_block_create_double_complex(\_:\_:\_:\_:)](sparse_matrix_block_create_double_complex%28________%29.md)
- [sparse_matrix_block_create_float_complex(\_:\_:\_:\_:)](sparse_matrix_block_create_float_complex%28________%29.md)

### Complex matrix creation and population

- [sparse_matrix_variable_block_create_double_complex(\_:\_:\_:\_:)](sparse_matrix_variable_block_create_double_complex%28________%29.md)
- [sparse_matrix_variable_block_create_float_complex(\_:\_:\_:\_:)](sparse_matrix_variable_block_create_float_complex%28________%29.md)

### Value insertion

- [sparse_insert_block_double_complex(\_:\_:\_:\_:\_:\_:)](sparse_insert_block_double_complex%28____________%29.md)
- [sparse_insert_block_float_complex(\_:\_:\_:\_:\_:\_:)](sparse_insert_block_float_complex%28____________%29.md)

### Value extraction

- [sparse_extract_block_double(\_:\_:\_:\_:\_:\_:)](sparse_extract_block_double%28____________%29.md): Extracts values from a specified block of a double-precision matrix.
- [sparse_extract_block_float(\_:\_:\_:\_:\_:\_:)](sparse_extract_block_float%28____________%29.md): Extracts values from a specified block of a single-precision matrix.
- [sparse_extract_block_double_complex(\_:\_:\_:\_:\_:\_:)](sparse_extract_block_double_complex%28____________%29.md)
- [sparse_extract_block_float_complex(\_:\_:\_:\_:\_:\_:)](sparse_extract_block_float_complex%28____________%29.md)

### Block dimension queries

- [sparse_get_block_dimension_for_row(\_:\_:)](sparse_get_block_dimension_for_row%28____%29.md): Returns the dimension of the block for a specified row of a double-precision matrix.
- [sparse_get_block_dimension_for_col(\_:\_:)](sparse_get_block_dimension_for_col%28____%29.md): Returns the dimension of the block for a specified column of a single-precision matrix.

### Supporting types

- [sparse_dimension](sparse_dimension.md): The dimension type.
- [sparse_index](sparse_index.md): The index type.
- [sparse_matrix_double](sparse_matrix_double.md): Sparse matrix opaque type for double.
- [sparse_matrix_float](sparse_matrix_float.md): Sparse matrix opaque type for float.
- [sparse_status](sparse_status.md): The type reflecting the status of an operations.

## See Also

### Sparse computation

- [Matrix and Vector Operations](matrix-and-vector-operations.md): Perform computations with matrices and vectors.
- [Pointwise Matrix Operations](pointwise-matrix-operations.md): Create, insert values into, and extract values from a pointwise sparse matrix.
- [General Sparse Matrix Management Operations](general-sparse-matrix-management-operations.md): Manage and work with the properties of a sparse matrix.
- [Sparse Vector Utility Operations](sparse-vector-utility-operations.md): Create and work with sparse vector structures.

# Blockwise Matrix Operations (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Create, insert values into, and extract values from a blockwise sparse matrix.

## Topics

### Matrix creation and population

- [sparse_matrix_block_create_double](sparse_matrix_block_create_double%28________%29.md): Returns a double-precision sparse matrix object that is stored in block-entry format with a fixed block size.
- [sparse_matrix_block_create_float](sparse_matrix_block_create_float%28________%29.md): Returns a single-precision sparse matrix object that is stored in block-entry format with a fixed block size.
- [sparse_matrix_variable_block_create_double](sparse_matrix_variable_block_create_double%28________%29.md): Returns a double-precision sparse matrix object that is stored in block-entry format with a variable block size.
- [sparse_matrix_variable_block_create_float](sparse_matrix_variable_block_create_float%28________%29.md): Returns a single-precision sparse matrix object that is stored in block-entry format with a variable block size.
- [sparse_insert_block_double](sparse_insert_block_double%28____________%29.md): Inserts a dense block of entries into a double-precision matrix.
- [sparse_insert_block_float](sparse_insert_block_float%28____________%29.md): Inserts a dense block of entries into a single-precision matrix.
- [sparse_matrix_block_create_double_complex](sparse_matrix_block_create_double_complex%28________%29.md)
- [sparse_matrix_block_create_float_complex](sparse_matrix_block_create_float_complex%28________%29.md)

### Complex matrix creation and population

- [sparse_matrix_variable_block_create_double_complex](sparse_matrix_variable_block_create_double_complex%28________%29.md)
- [sparse_matrix_variable_block_create_float_complex](sparse_matrix_variable_block_create_float_complex%28________%29.md)

### Value insertion

- [sparse_insert_block_double_complex](sparse_insert_block_double_complex%28____________%29.md)
- [sparse_insert_block_float_complex](sparse_insert_block_float_complex%28____________%29.md)

### Value extraction

- [sparse_extract_block_double](sparse_extract_block_double%28____________%29.md): Extracts values from a specified block of a double-precision matrix.
- [sparse_extract_block_float](sparse_extract_block_float%28____________%29.md): Extracts values from a specified block of a single-precision matrix.
- [sparse_extract_block_double_complex](sparse_extract_block_double_complex%28____________%29.md)
- [sparse_extract_block_float_complex](sparse_extract_block_float_complex%28____________%29.md)

### Block dimension queries

- [sparse_get_block_dimension_for_row](sparse_get_block_dimension_for_row%28____%29.md): Returns the dimension of the block for a specified row of a double-precision matrix.
- [sparse_get_block_dimension_for_col](sparse_get_block_dimension_for_col%28____%29.md): Returns the dimension of the block for a specified column of a single-precision matrix.

### Supporting types

- [sparse_dimension](sparse_dimension.md): The dimension type.
- [sparse_index](sparse_index.md): The index type.
- [sparse_matrix_double](sparse_matrix_double.md): Sparse matrix opaque type for double.
- [sparse_matrix_float](sparse_matrix_float.md): Sparse matrix opaque type for float.
- [sparse_status](sparse_status.md): The type reflecting the status of an operations.

## See Also

### Sparse computation

- [Matrix and Vector Operations](matrix-and-vector-operations.md): Perform computations with matrices and vectors.
- [Pointwise Matrix Operations](pointwise-matrix-operations.md): Create, insert values into, and extract values from a pointwise sparse matrix.
- [General Sparse Matrix Management Operations](general-sparse-matrix-management-operations.md): Manage and work with the properties of a sparse matrix.
- [Sparse Vector Utility Operations](sparse-vector-utility-operations.md): Create and work with sparse vector structures.
