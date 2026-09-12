> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_get_vector_nonzero_count_float(_:_:_:)](https://developer.apple.com/documentation/accelerate/sparse_get_vector_nonzero_count_float(_:_:_:))

# sparse_get_vector_nonzero_count_float(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the number of nonzero values in the single-precision dense vector *x*.

## Declaration

```swift
func sparse_get_vector_nonzero_count_float(_ N: sparse_dimension, _ x: UnsafePointer<Float>!, _ incx: sparse_stride) -> Int
```

## Parameters

- `N`: The number of elements in the dense vector *x*.
- `x`: Pointer to the vector *x*.
- `incx`: Increment between valid values in the dense vector x.  Negative strides are supported.

<a id="return-value"></a>

## Return Value

The count of the nonzero values in the vector *x*.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Sparse Utility Operations

- [sparse_get_vector_nonzero_count_double(\_:\_:\_:)](sparse_get_vector_nonzero_count_double%28______%29.md): Returns the number of nonzero values in the double-precision dense vector *x*.
- [sparse_pack_vector_double(\_:\_:\_:\_:\_:\_:)](sparse_pack_vector_double%28____________%29.md): Packs nonzero values from a double-precision dense vector to a destination array.
- [sparse_pack_vector_float(\_:\_:\_:\_:\_:\_:)](sparse_pack_vector_float%28____________%29.md): Packs nonzero values from a single-precision dense vector to a destination array.
- [sparse_unpack_vector_double(\_:\_:\_:\_:\_:\_:\_:)](sparse_unpack_vector_double%28______________%29.md): Extracts elements from the sparse vector *x* into the corresponding location in the dense vector *y*, with both vectors containing double-precision values.
- [sparse_unpack_vector_float(\_:\_:\_:\_:\_:\_:\_:)](sparse_unpack_vector_float%28______________%29.md): Extracts elements from the sparse vector *x* into the corresponding location in the dense vector *y*, with both vectors containing single-precision values.

# sparse_get_vector_nonzero_count_float (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the number of nonzero values in the single-precision dense vector *x*.

## Declaration

```objectivec
long sparse_get_vector_nonzero_count_float(sparse_dimension N, const float * restrictx, sparse_stride incx);
```

## Parameters

- `N`: The number of elements in the dense vector *x*.
- `x`: Pointer to the vector *x*.
- `incx`: Increment between valid values in the dense vector x.  Negative strides are supported.

<a id="return-value"></a>

## Return Value

The count of the nonzero values in the vector *x*.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Sparse Utility Operations

- [sparse_get_vector_nonzero_count_double](sparse_get_vector_nonzero_count_double%28______%29.md): Returns the number of nonzero values in the double-precision dense vector *x*.
- [sparse_pack_vector_double](sparse_pack_vector_double%28____________%29.md): Packs nonzero values from a double-precision dense vector to a destination array.
- [sparse_pack_vector_float](sparse_pack_vector_float%28____________%29.md): Packs nonzero values from a single-precision dense vector to a destination array.
- [sparse_unpack_vector_double](sparse_unpack_vector_double%28______________%29.md): Extracts elements from the sparse vector *x* into the corresponding location in the dense vector *y*, with both vectors containing double-precision values.
- [sparse_unpack_vector_float](sparse_unpack_vector_float%28______________%29.md): Extracts elements from the sparse vector *x* into the corresponding location in the dense vector *y*, with both vectors containing single-precision values.
