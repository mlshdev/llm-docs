> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/sparse_matrix_product_sparse_float_complex

# sparse_matrix_product_sparse_float_complex

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```objectivec
sparse_status sparse_matrix_product_sparse_float_complex(enum CBLAS_ORDER order, enum CBLAS_TRANSPOSE transa, _Complex float alpha, sparse_matrix_float_complex A, sparse_matrix_float_complex B, _Complex float * restrictC, sparse_dimension ldc);
```
