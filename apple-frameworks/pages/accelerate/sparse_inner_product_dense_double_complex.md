> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/sparse_inner_product_dense_double_complex

# sparse_inner_product_dense_double_complex

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```objectivec
_Complex double sparse_inner_product_dense_double_complex(sparse_dimension nz, const _Complex double * restrictx, const sparse_index * restrictindx, const _Complex double * restricty, sparse_stride incy);
```
