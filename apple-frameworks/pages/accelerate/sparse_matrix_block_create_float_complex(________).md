> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_matrix_block_create_float_complex(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/sparse_matrix_block_create_float_complex(_:_:_:_:))

# sparse_matrix_block_create_float_complex(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```swift
func sparse_matrix_block_create_float_complex(_ Mb: sparse_dimension, _ Nb: sparse_dimension, _ k: sparse_dimension, _ l: sparse_dimension) -> sparse_matrix_float_complex!
```

## See Also

### Matrix creation and population

- [sparse_matrix_block_create_double(\_:\_:\_:\_:)](sparse_matrix_block_create_double%28________%29.md): Returns a double-precision sparse matrix object that is stored in block-entry format with a fixed block size.
- [sparse_matrix_block_create_float(\_:\_:\_:\_:)](sparse_matrix_block_create_float%28________%29.md): Returns a single-precision sparse matrix object that is stored in block-entry format with a fixed block size.
- [sparse_matrix_variable_block_create_double(\_:\_:\_:\_:)](sparse_matrix_variable_block_create_double%28________%29.md): Returns a double-precision sparse matrix object that is stored in block-entry format with a variable block size.
- [sparse_matrix_variable_block_create_float(\_:\_:\_:\_:)](sparse_matrix_variable_block_create_float%28________%29.md): Returns a single-precision sparse matrix object that is stored in block-entry format with a variable block size.
- [sparse_insert_block_double(\_:\_:\_:\_:\_:\_:)](sparse_insert_block_double%28____________%29.md): Inserts a dense block of entries into a double-precision matrix.
- [sparse_insert_block_float(\_:\_:\_:\_:\_:\_:)](sparse_insert_block_float%28____________%29.md): Inserts a dense block of entries into a single-precision matrix.
- [sparse_matrix_block_create_double_complex(\_:\_:\_:\_:)](sparse_matrix_block_create_double_complex%28________%29.md)

# sparse_matrix_block_create_float_complex (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```objectivec
sparse_matrix_float_complexsparse_matrix_block_create_float_complex(sparse_dimension Mb, sparse_dimension Nb, sparse_dimension k, sparse_dimension l);
```

## See Also

### Matrix creation and population

- [sparse_matrix_block_create_double](sparse_matrix_block_create_double%28________%29.md): Returns a double-precision sparse matrix object that is stored in block-entry format with a fixed block size.
- [sparse_matrix_block_create_float](sparse_matrix_block_create_float%28________%29.md): Returns a single-precision sparse matrix object that is stored in block-entry format with a fixed block size.
- [sparse_matrix_variable_block_create_double](sparse_matrix_variable_block_create_double%28________%29.md): Returns a double-precision sparse matrix object that is stored in block-entry format with a variable block size.
- [sparse_matrix_variable_block_create_float](sparse_matrix_variable_block_create_float%28________%29.md): Returns a single-precision sparse matrix object that is stored in block-entry format with a variable block size.
- [sparse_insert_block_double](sparse_insert_block_double%28____________%29.md): Inserts a dense block of entries into a double-precision matrix.
- [sparse_insert_block_float](sparse_insert_block_float%28____________%29.md): Inserts a dense block of entries into a single-precision matrix.
- [sparse_matrix_block_create_double_complex](sparse_matrix_block_create_double_complex%28________%29.md)
