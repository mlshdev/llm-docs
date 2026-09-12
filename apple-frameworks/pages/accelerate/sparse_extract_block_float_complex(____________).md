> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_extract_block_float_complex(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/sparse_extract_block_float_complex(_:_:_:_:_:_:))

# sparse_extract_block_float_complex(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```swift
func sparse_extract_block_float_complex(_ A: sparse_matrix_float_complex!, _ bi: sparse_index, _ bj: sparse_index, _ row_stride: sparse_dimension, _ col_stride: sparse_dimension, _ val: OpaquePointer!) -> sparse_status
```

## See Also

### Value extraction

- [sparse_extract_block_double(\_:\_:\_:\_:\_:\_:)](sparse_extract_block_double%28____________%29.md): Extracts values from a specified block of a double-precision matrix.
- [sparse_extract_block_float(\_:\_:\_:\_:\_:\_:)](sparse_extract_block_float%28____________%29.md): Extracts values from a specified block of a single-precision matrix.
- [sparse_extract_block_double_complex(\_:\_:\_:\_:\_:\_:)](sparse_extract_block_double_complex%28____________%29.md)

# sparse_extract_block_float_complex (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```objectivec
sparse_status sparse_extract_block_float_complex(sparse_matrix_float_complex A, sparse_index bi, sparse_index bj, sparse_dimension row_stride, sparse_dimension col_stride, _Complex float * restrictval);
```

## See Also

### Value extraction

- [sparse_extract_block_double](sparse_extract_block_double%28____________%29.md): Extracts values from a specified block of a double-precision matrix.
- [sparse_extract_block_float](sparse_extract_block_float%28____________%29.md): Extracts values from a specified block of a single-precision matrix.
- [sparse_extract_block_double_complex](sparse_extract_block_double_complex%28____________%29.md)
