> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_insert_block_float_complex(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/sparse_insert_block_float_complex(_:_:_:_:_:_:))

# sparse_insert_block_float_complex(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```swift
func sparse_insert_block_float_complex(_ A: sparse_matrix_float_complex!, _ val: OpaquePointer!, _ row_stride: sparse_dimension, _ col_stride: sparse_dimension, _ bi: sparse_index, _ bj: sparse_index) -> sparse_status
```

## See Also

### Value insertion

- [sparse_insert_block_double_complex(\_:\_:\_:\_:\_:\_:)](sparse_insert_block_double_complex%28____________%29.md)

# sparse_insert_block_float_complex (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```objectivec
sparse_status sparse_insert_block_float_complex(sparse_matrix_float_complex A, const _Complex float * restrictval, sparse_dimension row_stride, sparse_dimension col_stride, sparse_index bi, sparse_index bj);
```

## See Also

### Value insertion

- [sparse_insert_block_double_complex](sparse_insert_block_double_complex%28____________%29.md)
