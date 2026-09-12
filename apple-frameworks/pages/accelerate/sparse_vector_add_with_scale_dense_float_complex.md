> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_vector_add_with_scale_dense_float_complex](https://developer.apple.com/documentation/accelerate/sparse_vector_add_with_scale_dense_float_complex)

# sparse_vector_add_with_scale_dense_float_complex

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```objectivec
void sparse_vector_add_with_scale_dense_float_complex(sparse_dimension nz, _Complex float alpha, const _Complex float * restrictx, const sparse_index * restrictindx, _Complex float * restricty, sparse_stride incy);
```
