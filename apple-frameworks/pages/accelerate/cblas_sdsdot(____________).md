> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/cblas_sdsdot(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/cblas_sdsdot(_:_:_:_:_:_:))

# cblas_sdsdot(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Computes the dot product of two single-precision vectors plus an initial single-precision value.

## Declaration

```swift
func cblas_sdsdot(_ N: __LAPACK_int, _ ALPHA: Float, _ X: UnsafePointer<Float>?, _ INCX: __LAPACK_int, _ Y: UnsafePointer<Float>?, _ INCY: __LAPACK_int) -> Float
```

## Parameters

- `N`: The number of elements in the vectors.
- `ALPHA`: The initial value to add to the dot product.
- `X`: Vector `X`.
- `INCX`: Stride within `X`. For example, if `incX` is 7, every 7th element is used.
- `Y`: Vector `Y`.
- `INCY`: Stride within `Y`. For example, if `incY` is 7, every 7th element is used.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### CATLAS and CBLAS vector functions

- [catlas_caxpby(\_:\_:\_:\_:\_:\_:\_:)](catlas_caxpby%28______________%29.md): Computes the product of two vectors, scaling each one separately (single-precision complex).
- [catlas_cset(\_:\_:\_:\_:)](catlas_cset%28________%29.md): Modifies a vector (single-precision complex) in place, setting each element to a given value.
- [catlas_daxpby(\_:\_:\_:\_:\_:\_:\_:)](catlas_daxpby%28______________%29.md): Computes the sum of two vectors, scaling each one separately (double-precision).
- [catlas_dset(\_:\_:\_:\_:)](catlas_dset%28________%29.md): Modifies a vector (double-precision) in place, setting each element to a given value.
- [catlas_saxpby(\_:\_:\_:\_:\_:\_:\_:)](catlas_saxpby%28______________%29.md): Computes the sum of two vectors, scaling each one separately (single-precision).
- [catlas_sset(\_:\_:\_:\_:)](catlas_sset%28________%29.md): Modifies a vector (single-precision) in place, setting each element to a given value.
- [catlas_zaxpby(\_:\_:\_:\_:\_:\_:\_:)](catlas_zaxpby%28______________%29.md): Computes the sum of two vectors, scaling each one separately (double-precision complex).
- [catlas_zset(\_:\_:\_:\_:)](catlas_zset%28________%29.md): Modifies a vector (double-precision complex) in place, setting each element to a given value.
- [cblas_sdot(\_:\_:\_:\_:\_:)](cblas_sdot%28__________%29.md): Computes the dot product of two vectors (single-precision).
- [cblas_cdotc_sub(\_:\_:\_:\_:\_:\_:)](cblas_cdotc_sub%28____________%29.md): Calculates the dot product of the complex conjugate of a single-precision complex vector with a second single-precision complex vector.
- [cblas_cdotu_sub(\_:\_:\_:\_:\_:\_:)](cblas_cdotu_sub%28____________%29.md): Computes the dot product of two single-precision complex vectors.
- [cblas_ddot(\_:\_:\_:\_:\_:)](cblas_ddot%28__________%29.md): Computes the dot product of two vectors (double-precision).
- [cblas_dsdot(\_:\_:\_:\_:\_:)](cblas_dsdot%28__________%29.md): Computes the double-precision dot product of a pair of single-precision vectors.
- [cblas_zdotc_sub(\_:\_:\_:\_:\_:\_:)](cblas_zdotc_sub%28____________%29.md): Calculates the dot product of the complex conjugate of a double-precision complex vector with a second double-precision complex vector.
- [cblas_zdotu_sub(\_:\_:\_:\_:\_:\_:)](cblas_zdotu_sub%28____________%29.md): Computes the dot product of two double-precision complex vectors.

# cblas_sdsdot (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Computes the dot product of two single-precision vectors plus an initial single-precision value.

## Declaration

```objectivec
float cblas_sdsdot(const __LAPACK_int N, const float ALPHA, const float *X, const __LAPACK_int INCX, const float *Y, const __LAPACK_int INCY);
```

## Parameters

- `N`: The number of elements in the vectors.
- `ALPHA`: The initial value to add to the dot product.
- `X`: Vector `X`.
- `INCX`: Stride within `X`. For example, if `incX` is 7, every 7th element is used.
- `Y`: Vector `Y`.
- `INCY`: Stride within `Y`. For example, if `incY` is 7, every 7th element is used.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### CATLAS and CBLAS vector functions

- [catlas_caxpby](catlas_caxpby%28______________%29.md): Computes the product of two vectors, scaling each one separately (single-precision complex).
- [catlas_cset](catlas_cset%28________%29.md): Modifies a vector (single-precision complex) in place, setting each element to a given value.
- [catlas_daxpby](catlas_daxpby%28______________%29.md): Computes the sum of two vectors, scaling each one separately (double-precision).
- [catlas_dset](catlas_dset%28________%29.md): Modifies a vector (double-precision) in place, setting each element to a given value.
- [catlas_saxpby](catlas_saxpby%28______________%29.md): Computes the sum of two vectors, scaling each one separately (single-precision).
- [catlas_sset](catlas_sset%28________%29.md): Modifies a vector (single-precision) in place, setting each element to a given value.
- [catlas_zaxpby](catlas_zaxpby%28______________%29.md): Computes the sum of two vectors, scaling each one separately (double-precision complex).
- [catlas_zset](catlas_zset%28________%29.md): Modifies a vector (double-precision complex) in place, setting each element to a given value.
- [cblas_sdot](cblas_sdot%28__________%29.md): Computes the dot product of two vectors (single-precision).
- [cblas_cdotc_sub](cblas_cdotc_sub%28____________%29.md): Calculates the dot product of the complex conjugate of a single-precision complex vector with a second single-precision complex vector.
- [cblas_cdotu_sub](cblas_cdotu_sub%28____________%29.md): Computes the dot product of two single-precision complex vectors.
- [cblas_ddot](cblas_ddot%28__________%29.md): Computes the dot product of two vectors (double-precision).
- [cblas_dsdot](cblas_dsdot%28__________%29.md): Computes the double-precision dot product of a pair of single-precision vectors.
- [cblas_zdotc_sub](cblas_zdotc_sub%28____________%29.md): Calculates the dot product of the complex conjugate of a double-precision complex vector with a second double-precision complex vector.
- [cblas_zdotu_sub](cblas_zdotu_sub%28____________%29.md): Computes the dot product of two double-precision complex vectors.
