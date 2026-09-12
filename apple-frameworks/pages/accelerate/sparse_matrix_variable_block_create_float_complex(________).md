> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_matrix_variable_block_create_float_complex(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/sparse_matrix_variable_block_create_float_complex(_:_:_:_:))

# sparse_matrix_variable_block_create_float_complex(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```swift
func sparse_matrix_variable_block_create_float_complex(_ Mb: sparse_dimension, _ Nb: sparse_dimension, _ K: UnsafePointer<sparse_dimension>!, _ L: UnsafePointer<sparse_dimension>!) -> sparse_matrix_float_complex!
```

## See Also

### Complex matrix creation and population

- [sparse_matrix_variable_block_create_double_complex(\_:\_:\_:\_:)](sparse_matrix_variable_block_create_double_complex%28________%29.md)

# sparse_matrix_variable_block_create_float_complex (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```objectivec
sparse_matrix_float_complexsparse_matrix_variable_block_create_float_complex(sparse_dimension Mb, sparse_dimension Nb, const sparse_dimension *K, const sparse_dimension *L);
```

## See Also

### Complex matrix creation and population

- [sparse_matrix_variable_block_create_double_complex](sparse_matrix_variable_block_create_double_complex%28________%29.md)
