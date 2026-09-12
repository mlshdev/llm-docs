> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_insert_col_double_complex(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/sparse_insert_col_double_complex(_:_:_:_:_:))

# sparse_insert_col_double_complex(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```swift
func sparse_insert_col_double_complex(_ A: sparse_matrix_double_complex!, _ j: sparse_index, _ nz: sparse_dimension, _ val: OpaquePointer!, _ indx: UnsafePointer<sparse_index>!) -> sparse_status
```

## See Also

### Value insertion

- [sparse_insert_col_float_complex(\_:\_:\_:\_:\_:)](sparse_insert_col_float_complex%28__________%29.md)
- [sparse_insert_entries_double_complex(\_:\_:\_:\_:\_:)](sparse_insert_entries_double_complex%28__________%29.md)
- [sparse_insert_entries_float_complex(\_:\_:\_:\_:\_:)](sparse_insert_entries_float_complex%28__________%29.md)
- [sparse_insert_row_double_complex(\_:\_:\_:\_:\_:)](sparse_insert_row_double_complex%28__________%29.md)
- [sparse_insert_row_float_complex(\_:\_:\_:\_:\_:)](sparse_insert_row_float_complex%28__________%29.md)

# sparse_insert_col_double_complex (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```objectivec
sparse_status sparse_insert_col_double_complex(sparse_matrix_double_complex A, sparse_index j, sparse_dimension nz, const _Complex double * restrictval, const sparse_index * restrictindx);
```

## See Also

### Value insertion

- [sparse_insert_col_float_complex](sparse_insert_col_float_complex%28__________%29.md)
- [sparse_insert_entries_double_complex](sparse_insert_entries_double_complex%28__________%29.md)
- [sparse_insert_entries_float_complex](sparse_insert_entries_float_complex%28__________%29.md)
- [sparse_insert_row_double_complex](sparse_insert_row_double_complex%28__________%29.md)
- [sparse_insert_row_float_complex](sparse_insert_row_float_complex%28__________%29.md)
