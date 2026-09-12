> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_outer_product_dense_double_complex](https://developer.apple.com/documentation/accelerate/sparse_outer_product_dense_double_complex)

# sparse_outer_product_dense_double_complex

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```objectivec
sparse_status sparse_outer_product_dense_double_complex(sparse_dimension M, sparse_dimension N, sparse_dimension nz, _Complex double alpha, const _Complex double * restrictx, sparse_stride incx, const _Complex double * restricty, const sparse_index * restrictindy, sparse_matrix_double_complex* restrictC);
```
