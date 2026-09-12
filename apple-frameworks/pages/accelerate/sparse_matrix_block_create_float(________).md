> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_matrix_block_create_float(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/sparse_matrix_block_create_float(_:_:_:_:))

# sparse_matrix_block_create_float(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a single-precision sparse matrix object that is stored in block-entry format with a fixed block size.

## Declaration

```swift
func sparse_matrix_block_create_float(_ Mb: sparse_dimension, _ Nb: sparse_dimension, _ k: sparse_dimension, _ l: sparse_dimension) -> sparse_matrix_float!
```

## Parameters

- `Mb`: The number of rows in terms of blocks of the matrix. There are a total of `Mb * k` rows in the matrix.  Must be greater than 0.
- `Nb`: The number of columns in terms of blocks of the matrix.  There are a total of `Nb * l` columns in the matrix.  Must be greater than 0.
- `k`: The row dimension of a block in the sparse matrix.  Must be greater than 0.
- `l`: The column dimension of a block in the sparse matrix.  Must be greater than 0.

<a id="return-value"></a>

## Return Value

A matrix object that is ready for receiving entries.  If an error occurs, `nil` is returned.

<a id="Discussion"></a>

## Discussion

Create a sparse matrix object that is stored in block-entry format and is ready to receive values from the various block insert routines.  Blocks are are of fixed dimensions `k * l`.  Block-entry format means blocks of dense regions will be stored at block indices `i,j`.  For point wise format use non block version of create. See the various insert routines for details on inserting values into this matrix object.

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Matrix creation and population

- [sparse_matrix_block_create_double(\_:\_:\_:\_:)](sparse_matrix_block_create_double%28________%29.md): Returns a double-precision sparse matrix object that is stored in block-entry format with a fixed block size.
- [sparse_matrix_variable_block_create_double(\_:\_:\_:\_:)](sparse_matrix_variable_block_create_double%28________%29.md): Returns a double-precision sparse matrix object that is stored in block-entry format with a variable block size.
- [sparse_matrix_variable_block_create_float(\_:\_:\_:\_:)](sparse_matrix_variable_block_create_float%28________%29.md): Returns a single-precision sparse matrix object that is stored in block-entry format with a variable block size.
- [sparse_insert_block_double(\_:\_:\_:\_:\_:\_:)](sparse_insert_block_double%28____________%29.md): Inserts a dense block of entries into a double-precision matrix.
- [sparse_insert_block_float(\_:\_:\_:\_:\_:\_:)](sparse_insert_block_float%28____________%29.md): Inserts a dense block of entries into a single-precision matrix.
- [sparse_matrix_block_create_double_complex(\_:\_:\_:\_:)](sparse_matrix_block_create_double_complex%28________%29.md)
- [sparse_matrix_block_create_float_complex(\_:\_:\_:\_:)](sparse_matrix_block_create_float_complex%28________%29.md)

# sparse_matrix_block_create_float (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a single-precision sparse matrix object that is stored in block-entry format with a fixed block size.

## Declaration

```objectivec
sparse_matrix_floatsparse_matrix_block_create_float(sparse_dimension Mb, sparse_dimension Nb, sparse_dimension k, sparse_dimension l);
```

## Parameters

- `Mb`: The number of rows in terms of blocks of the matrix. There are a total of `Mb * k` rows in the matrix.  Must be greater than 0.
- `Nb`: The number of columns in terms of blocks of the matrix.  There are a total of `Nb * l` columns in the matrix.  Must be greater than 0.
- `k`: The row dimension of a block in the sparse matrix.  Must be greater than 0.
- `l`: The column dimension of a block in the sparse matrix.  Must be greater than 0.

<a id="return-value"></a>

## Return Value

A matrix object that is ready for receiving entries.  If an error occurs, `nil` is returned.

<a id="Discussion"></a>

## Discussion

Create a sparse matrix object that is stored in block-entry format and is ready to receive values from the various block insert routines.  Blocks are are of fixed dimensions `k * l`.  Block-entry format means blocks of dense regions will be stored at block indices `i,j`.  For point wise format use non block version of create. See the various insert routines for details on inserting values into this matrix object.

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Matrix creation and population

- [sparse_matrix_block_create_double](sparse_matrix_block_create_double%28________%29.md): Returns a double-precision sparse matrix object that is stored in block-entry format with a fixed block size.
- [sparse_matrix_variable_block_create_double](sparse_matrix_variable_block_create_double%28________%29.md): Returns a double-precision sparse matrix object that is stored in block-entry format with a variable block size.
- [sparse_matrix_variable_block_create_float](sparse_matrix_variable_block_create_float%28________%29.md): Returns a single-precision sparse matrix object that is stored in block-entry format with a variable block size.
- [sparse_insert_block_double](sparse_insert_block_double%28____________%29.md): Inserts a dense block of entries into a double-precision matrix.
- [sparse_insert_block_float](sparse_insert_block_float%28____________%29.md): Inserts a dense block of entries into a single-precision matrix.
- [sparse_matrix_block_create_double_complex](sparse_matrix_block_create_double_complex%28________%29.md)
- [sparse_matrix_block_create_float_complex](sparse_matrix_block_create_float_complex%28________%29.md)
