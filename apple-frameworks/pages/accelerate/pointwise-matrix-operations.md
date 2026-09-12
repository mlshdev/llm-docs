> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/pointwise-matrix-operations](https://developer.apple.com/documentation/accelerate/pointwise-matrix-operations)

# Pointwise Matrix Operations (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Create, insert values into, and extract values from a pointwise sparse matrix.

## Topics

### Matrix creation and population

- [sparse_matrix_create_double(\_:\_:)](sparse_matrix_create_double%28____%29.md): Returns a double-precision sparse matrix object.
- [sparse_matrix_create_float(\_:\_:)](sparse_matrix_create_float%28____%29.md): Returns a single-precision sparse matrix object.
- [sparse_insert_entry_double(\_:\_:\_:\_:)](sparse_insert_entry_double%28________%29.md): Inserts a single scalar entry into a double-precision sparse matrix.
- [sparse_insert_entry_float(\_:\_:\_:\_:)](sparse_insert_entry_float%28________%29.md): Inserts a single scalar entry into a single-precision sparse matrix.
- [sparse_insert_entries_double(\_:\_:\_:\_:\_:)](sparse_insert_entries_double%28__________%29.md): Inserts a list of scalar entries into a double-precision sparse matrix.
- [sparse_insert_entries_float(\_:\_:\_:\_:\_:)](sparse_insert_entries_float%28__________%29.md): Inserts a list of scalar entries into a single-precision sparse matrix.
- [sparse_insert_col_double(\_:\_:\_:\_:\_:)](sparse_insert_col_double%28__________%29.md): Inserts a list of scalar entries into a single column of a double-precision sparse matrix.
- [sparse_insert_col_float(\_:\_:\_:\_:\_:)](sparse_insert_col_float%28__________%29.md): Inserts a list of scalar entries into a single column of a single-precision sparse matrix.
- [sparse_insert_row_double(\_:\_:\_:\_:\_:)](sparse_insert_row_double%28__________%29.md): Inserts a list of scalar entries into a single row of a double-precision sparse matrix.
- [sparse_insert_row_float(\_:\_:\_:\_:\_:)](sparse_insert_row_float%28__________%29.md): Inserts a list of scalar entries into a single row of a single-precision sparse matrix.

### Complex matrix creation and population

- [sparse_matrix_create_double_complex(\_:\_:)](sparse_matrix_create_double_complex%28____%29.md)
- [sparse_matrix_create_float_complex(\_:\_:)](sparse_matrix_create_float_complex%28____%29.md)

### Value insertion

- [sparse_insert_col_double_complex(\_:\_:\_:\_:\_:)](sparse_insert_col_double_complex%28__________%29.md)
- [sparse_insert_col_float_complex(\_:\_:\_:\_:\_:)](sparse_insert_col_float_complex%28__________%29.md)
- [sparse_insert_entries_double_complex(\_:\_:\_:\_:\_:)](sparse_insert_entries_double_complex%28__________%29.md)
- [sparse_insert_entries_float_complex(\_:\_:\_:\_:\_:)](sparse_insert_entries_float_complex%28__________%29.md)
- [sparse_insert_row_double_complex(\_:\_:\_:\_:\_:)](sparse_insert_row_double_complex%28__________%29.md)
- [sparse_insert_row_float_complex(\_:\_:\_:\_:\_:)](sparse_insert_row_float_complex%28__________%29.md)

### Value extraction

- [sparse_extract_sparse_row_double(\_:\_:\_:\_:\_:\_:\_:)](sparse_extract_sparse_row_double%28______________%29.md): Extracts values from a specified row of a double-precision sparse matrix.
- [sparse_extract_sparse_row_float(\_:\_:\_:\_:\_:\_:\_:)](sparse_extract_sparse_row_float%28______________%29.md): Extracts values from a specified row of a single-precision sparse matrix.
- [sparse_extract_sparse_column_double(\_:\_:\_:\_:\_:\_:\_:)](sparse_extract_sparse_column_double%28______________%29.md): Extracts values from a specified column of a double-precision sparse matrix.
- [sparse_extract_sparse_column_float(\_:\_:\_:\_:\_:\_:\_:)](sparse_extract_sparse_column_float%28______________%29.md): Extracts values from a specified column of a single-precision sparse matrix.
- [sparse_extract_sparse_column_double_complex(\_:\_:\_:\_:\_:\_:\_:)](sparse_extract_sparse_column_double_complex%28______________%29.md)
- [sparse_extract_sparse_column_float_complex(\_:\_:\_:\_:\_:\_:\_:)](sparse_extract_sparse_column_float_complex%28______________%29.md)
- [sparse_extract_sparse_row_float_complex(\_:\_:\_:\_:\_:\_:\_:)](sparse_extract_sparse_row_float_complex%28______________%29.md)
- [sparse_extract_sparse_row_double_complex(\_:\_:\_:\_:\_:\_:\_:)](sparse_extract_sparse_row_double_complex%28______________%29.md)

### Supporting types

- [sparse_dimension](sparse_dimension.md): The dimension type.
- [sparse_index](sparse_index.md): The index type.
- [sparse_matrix_double](sparse_matrix_double.md): Sparse matrix opaque type for double.
- [sparse_matrix_float](sparse_matrix_float.md): Sparse matrix opaque type for float.
- [sparse_status](sparse_status.md): The type reflecting the status of an operations.

## See Also

### Sparse computation

- [Matrix and Vector Operations](matrix-and-vector-operations.md): Perform computations with matrices and vectors.
- [Blockwise Matrix Operations](blockwise-matrix-operations.md): Create, insert values into, and extract values from a blockwise sparse matrix.
- [General Sparse Matrix Management Operations](general-sparse-matrix-management-operations.md): Manage and work with the properties of a sparse matrix.
- [Sparse Vector Utility Operations](sparse-vector-utility-operations.md): Create and work with sparse vector structures.

# Pointwise Matrix Operations (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Create, insert values into, and extract values from a pointwise sparse matrix.

## Topics

### Matrix creation and population

- [sparse_matrix_create_double](sparse_matrix_create_double%28____%29.md): Returns a double-precision sparse matrix object.
- [sparse_matrix_create_float](sparse_matrix_create_float%28____%29.md): Returns a single-precision sparse matrix object.
- [sparse_insert_entry_double](sparse_insert_entry_double%28________%29.md): Inserts a single scalar entry into a double-precision sparse matrix.
- [sparse_insert_entry_float](sparse_insert_entry_float%28________%29.md): Inserts a single scalar entry into a single-precision sparse matrix.
- [sparse_insert_entries_double](sparse_insert_entries_double%28__________%29.md): Inserts a list of scalar entries into a double-precision sparse matrix.
- [sparse_insert_entries_float](sparse_insert_entries_float%28__________%29.md): Inserts a list of scalar entries into a single-precision sparse matrix.
- [sparse_insert_col_double](sparse_insert_col_double%28__________%29.md): Inserts a list of scalar entries into a single column of a double-precision sparse matrix.
- [sparse_insert_col_float](sparse_insert_col_float%28__________%29.md): Inserts a list of scalar entries into a single column of a single-precision sparse matrix.
- [sparse_insert_row_double](sparse_insert_row_double%28__________%29.md): Inserts a list of scalar entries into a single row of a double-precision sparse matrix.
- [sparse_insert_row_float](sparse_insert_row_float%28__________%29.md): Inserts a list of scalar entries into a single row of a single-precision sparse matrix.

### Complex matrix creation and population

- [sparse_matrix_create_double_complex](sparse_matrix_create_double_complex%28____%29.md)
- [sparse_matrix_create_float_complex](sparse_matrix_create_float_complex%28____%29.md)

### Value insertion

- [sparse_insert_col_double_complex](sparse_insert_col_double_complex%28__________%29.md)
- [sparse_insert_col_float_complex](sparse_insert_col_float_complex%28__________%29.md)
- [sparse_insert_entries_double_complex](sparse_insert_entries_double_complex%28__________%29.md)
- [sparse_insert_entries_float_complex](sparse_insert_entries_float_complex%28__________%29.md)
- [sparse_insert_row_double_complex](sparse_insert_row_double_complex%28__________%29.md)
- [sparse_insert_row_float_complex](sparse_insert_row_float_complex%28__________%29.md)

### Value extraction

- [sparse_extract_sparse_row_double](sparse_extract_sparse_row_double%28______________%29.md): Extracts values from a specified row of a double-precision sparse matrix.
- [sparse_extract_sparse_row_float](sparse_extract_sparse_row_float%28______________%29.md): Extracts values from a specified row of a single-precision sparse matrix.
- [sparse_extract_sparse_column_double](sparse_extract_sparse_column_double%28______________%29.md): Extracts values from a specified column of a double-precision sparse matrix.
- [sparse_extract_sparse_column_float](sparse_extract_sparse_column_float%28______________%29.md): Extracts values from a specified column of a single-precision sparse matrix.
- [sparse_extract_sparse_column_double_complex](sparse_extract_sparse_column_double_complex%28______________%29.md)
- [sparse_extract_sparse_column_float_complex](sparse_extract_sparse_column_float_complex%28______________%29.md)
- [sparse_extract_sparse_row_float_complex](sparse_extract_sparse_row_float_complex%28______________%29.md)
- [sparse_extract_sparse_row_double_complex](sparse_extract_sparse_row_double_complex%28______________%29.md)

### Supporting types

- [sparse_dimension](sparse_dimension.md): The dimension type.
- [sparse_index](sparse_index.md): The index type.
- [sparse_matrix_double](sparse_matrix_double.md): Sparse matrix opaque type for double.
- [sparse_matrix_float](sparse_matrix_float.md): Sparse matrix opaque type for float.
- [sparse_status](sparse_status.md): The type reflecting the status of an operations.

## See Also

### Sparse computation

- [Matrix and Vector Operations](matrix-and-vector-operations.md): Perform computations with matrices and vectors.
- [Blockwise Matrix Operations](blockwise-matrix-operations.md): Create, insert values into, and extract values from a blockwise sparse matrix.
- [General Sparse Matrix Management Operations](general-sparse-matrix-management-operations.md): Manage and work with the properties of a sparse matrix.
- [Sparse Vector Utility Operations](sparse-vector-utility-operations.md): Create and work with sparse vector structures.
