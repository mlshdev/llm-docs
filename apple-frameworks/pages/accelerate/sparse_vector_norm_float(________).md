> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_vector_norm_float(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/sparse_vector_norm_float(_:_:_:_:))

# sparse_vector_norm_float(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Computes the specified norm of the single-precision sparse vector *x*.

## Declaration

```swift
func sparse_vector_norm_float(_ nz: sparse_dimension, _ x: UnsafePointer<Float>!, _ indx: UnsafePointer<sparse_index>!, _ norm: sparse_norm) -> Float
```

## Parameters

- `nz`: The number of nonzero values in the sparse vector *x*.
- `x`: Pointer to the dense storage for the values of the sparse vector *x*. The corresponding entry in indx holds the index of the value. Contains `nz` values.
- `indx`: Pointer to the dense storage for the index values of the sparse vector *x*. The corresponding entry in *x* holds the values of the vector. Contains `nz` values.
- `norm`: The norm to be computed. Must be one of [SPARSE_NORM_ONE](sparse_norm_one.md), [SPARSE_NORM_TWO](sparse_norm_two.md), or [SPARSE_NORM_INF](sparse_norm_inf.md). See discussion for further details.

<a id="return-value"></a>

## Return Value

The requested norm.

<a id="Discussion"></a>

## Discussion

Compute the specified norm of the sparse vector *x*.  Specify one of:

| [SPARSE_NORM_ONE](sparse_norm_one.md) | *sumᵢ ( | x\[i\] | )* | |—|—| | [SPARSE_NORM_TWO](sparse_norm_two.md) | *sqrt* *( sumᵢ (x\[i\])² )*\_\_ | | [SPARSE_NORM_INF](sparse_norm_inf.md) | *maxᵢ( | x\[i\] | )*\_\_ | | [SPARSE_NORM_R1](sparse_norm_r1.md) | Not supported, undefined. |

If `norm` is not one of the enumerated norm types, the default value is [SPARSE_NORM_INF](sparse_norm_inf.md).

Indices in `indx` are always assumed to be stored in ascending order. Additionally, indices are assumed to be unique.  The behavior of this function is undefined if either of these assumptions are not met.

All indices are 0 based (the first element of a pointer is `ptr[0]`).

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Vector-Vector Operations

- [sparse_inner_product_dense_double(\_:\_:\_:\_:\_:)](sparse_inner_product_dense_double%28__________%29.md): Computes the inner product of sparse vector *x* with double-precision *y*, with both vectors containing double-precision values.
- [sparse_inner_product_dense_float(\_:\_:\_:\_:\_:)](sparse_inner_product_dense_float%28__________%29.md): Computes the inner product of sparse vector *x* with dense vector *y,* with both vectors containing single-precision values.
- [sparse_inner_product_sparse_double(\_:\_:\_:\_:\_:\_:)](sparse_inner_product_sparse_double%28____________%29.md): Computes the inner product of sparse vector *x* with sparse vector *y,* with both vectors containing double-precision values.
- [sparse_inner_product_sparse_float(\_:\_:\_:\_:\_:\_:)](sparse_inner_product_sparse_float%28____________%29.md): Computes the inner product of sparse vector *x* with sparse vector *y,* with both vectors containing single-precision values.
- [sparse_vector_add_with_scale_dense_double(\_:\_:\_:\_:\_:\_:)](sparse_vector_add_with_scale_dense_double%28____________%29.md): Scales the sparse vector *x* by *alpha* and adds the result to the dense vector *y,* with both vectors containing double-precision values.
- [sparse_vector_add_with_scale_dense_float(\_:\_:\_:\_:\_:\_:)](sparse_vector_add_with_scale_dense_float%28____________%29.md): Scales the sparse vector *x* by *alpha* and adds the result to the dense vector *y,* with both vectors containing single-precision values.
- [sparse_vector_norm_double(\_:\_:\_:\_:)](sparse_vector_norm_double%28________%29.md): Computes the specified norm of the double-precision sparse vector *x*.

# sparse_vector_norm_float (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Computes the specified norm of the single-precision sparse vector *x*.

## Declaration

```objectivec
float sparse_vector_norm_float(sparse_dimension nz, const float * restrictx, const sparse_index * restrictindx, sparse_norm norm);
```

## Parameters

- `nz`: The number of nonzero values in the sparse vector *x*.
- `x`: Pointer to the dense storage for the values of the sparse vector *x*. The corresponding entry in indx holds the index of the value. Contains `nz` values.
- `indx`: Pointer to the dense storage for the index values of the sparse vector *x*. The corresponding entry in *x* holds the values of the vector. Contains `nz` values.
- `norm`: The norm to be computed. Must be one of [SPARSE_NORM_ONE](sparse_norm_one.md), [SPARSE_NORM_TWO](sparse_norm_two.md), or [SPARSE_NORM_INF](sparse_norm_inf.md). See discussion for further details.

<a id="return-value"></a>

## Return Value

The requested norm.

<a id="Discussion"></a>

## Discussion

Compute the specified norm of the sparse vector *x*.  Specify one of:

| [SPARSE_NORM_ONE](sparse_norm_one.md) | *sumᵢ ( | x\[i\] | )* | |—|—| | [SPARSE_NORM_TWO](sparse_norm_two.md) | *sqrt* *( sumᵢ (x\[i\])² )*\_\_ | | [SPARSE_NORM_INF](sparse_norm_inf.md) | *maxᵢ( | x\[i\] | )*\_\_ | | [SPARSE_NORM_R1](sparse_norm_r1.md) | Not supported, undefined. |

If `norm` is not one of the enumerated norm types, the default value is [SPARSE_NORM_INF](sparse_norm_inf.md).

Indices in `indx` are always assumed to be stored in ascending order. Additionally, indices are assumed to be unique.  The behavior of this function is undefined if either of these assumptions are not met.

All indices are 0 based (the first element of a pointer is `ptr[0]`).

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Vector-Vector Operations

- [sparse_inner_product_dense_double](sparse_inner_product_dense_double%28__________%29.md): Computes the inner product of sparse vector *x* with double-precision *y*, with both vectors containing double-precision values.
- [sparse_inner_product_dense_float](sparse_inner_product_dense_float%28__________%29.md): Computes the inner product of sparse vector *x* with dense vector *y,* with both vectors containing single-precision values.
- [sparse_inner_product_sparse_double](sparse_inner_product_sparse_double%28____________%29.md): Computes the inner product of sparse vector *x* with sparse vector *y,* with both vectors containing double-precision values.
- [sparse_inner_product_sparse_float](sparse_inner_product_sparse_float%28____________%29.md): Computes the inner product of sparse vector *x* with sparse vector *y,* with both vectors containing single-precision values.
- [sparse_vector_add_with_scale_dense_double](sparse_vector_add_with_scale_dense_double%28____________%29.md): Scales the sparse vector *x* by *alpha* and adds the result to the dense vector *y,* with both vectors containing double-precision values.
- [sparse_vector_add_with_scale_dense_float](sparse_vector_add_with_scale_dense_float%28____________%29.md): Scales the sparse vector *x* by *alpha* and adds the result to the dense vector *y,* with both vectors containing single-precision values.
- [sparse_vector_norm_double](sparse_vector_norm_double%28________%29.md): Computes the specified norm of the double-precision sparse vector *x*.
