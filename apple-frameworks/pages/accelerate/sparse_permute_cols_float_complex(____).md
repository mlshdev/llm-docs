> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_permute_cols_float_complex(_:_:)](https://developer.apple.com/documentation/accelerate/sparse_permute_cols_float_complex(_:_:))

# sparse_permute_cols_float_complex(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```swift
func sparse_permute_cols_float_complex(_ A: sparse_matrix_float_complex!, _ perm: UnsafePointer<sparse_index>!) -> sparse_status
```

## See Also

### Complex matrix operations

- [sparse_elementwise_norm_double_complex(\_:\_:)](sparse_elementwise_norm_double_complex%28____%29.md)
- [sparse_elementwise_norm_float_complex(\_:\_:)](sparse_elementwise_norm_float_complex%28____%29.md)
- [sparse_get_vector_nonzero_count_double_complex(\_:\_:\_:)](sparse_get_vector_nonzero_count_double_complex%28______%29.md)
- [sparse_get_vector_nonzero_count_float_complex(\_:\_:\_:)](sparse_get_vector_nonzero_count_float_complex%28______%29.md)
- [sparse_operator_norm_double_complex(\_:\_:)](sparse_operator_norm_double_complex%28____%29.md)
- [sparse_operator_norm_float_complex(\_:\_:)](sparse_operator_norm_float_complex%28____%29.md)
- [sparse_permute_cols_double_complex(\_:\_:)](sparse_permute_cols_double_complex%28____%29.md)
- [sparse_permute_rows_double_complex(\_:\_:)](sparse_permute_rows_double_complex%28____%29.md)
- [sparse_permute_rows_float_complex(\_:\_:)](sparse_permute_rows_float_complex%28____%29.md)
- [sparse_permute_rows_float_complex(\_:\_:)](sparse_permute_rows_float_complex%28____%29.md)

# sparse_permute_cols_float_complex (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```objectivec
sparse_status sparse_permute_cols_float_complex(sparse_matrix_float_complex A, const sparse_index * restrictperm);
```

## See Also

### Complex matrix operations

- [sparse_elementwise_norm_double_complex](sparse_elementwise_norm_double_complex%28____%29.md)
- [sparse_elementwise_norm_float_complex](sparse_elementwise_norm_float_complex%28____%29.md)
- [sparse_get_vector_nonzero_count_double_complex](sparse_get_vector_nonzero_count_double_complex%28______%29.md)
- [sparse_get_vector_nonzero_count_float_complex](sparse_get_vector_nonzero_count_float_complex%28______%29.md)
- [sparse_operator_norm_double_complex](sparse_operator_norm_double_complex%28____%29.md)
- [sparse_operator_norm_float_complex](sparse_operator_norm_float_complex%28____%29.md)
- [sparse_permute_cols_double_complex](sparse_permute_cols_double_complex%28____%29.md)
- [sparse_permute_rows_double_complex](sparse_permute_rows_double_complex%28____%29.md)
- [sparse_permute_rows_float_complex](sparse_permute_rows_float_complex%28____%29.md)
- [sparse_permute_rows_float_complex](sparse_permute_rows_float_complex%28____%29.md)
