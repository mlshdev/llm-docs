> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/cblas_dswap(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/cblas_dswap(_:_:_:_:_:))

# cblas_dswap(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Exchanges the elements of two vectors (double precision).

## Declaration

```swift
func cblas_dswap(_ N: __LAPACK_int, _ X: UnsafeMutablePointer<Double>?, _ INCX: __LAPACK_int, _ Y: UnsafeMutablePointer<Double>?, _ INCY: __LAPACK_int)
```

## Parameters

- `N`: Number of elements in vectors
- `X`: Vector `x`. On return, contains elements copied from vector `y`.
- `INCX`: Stride within `X`. For example, if `incX` is 7, every 7th element is used.
- `Y`: Vector `y`. On return, contains elements copied from vector `x`.
- `INCY`: Stride within `Y`. For example, if `incY` is 7, every 7th element is used.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Double-precision float matrix functions

- [cblas_dasum(\_:\_:\_:)](cblas_dasum%28______%29.md): Computes the sum of the absolute values of elements in a vector (double-precision).
- [cblas_daxpy(\_:\_:\_:\_:\_:\_:)](cblas_daxpy%28____________%29.md): Computes a constant times a vector plus a vector (double-precision).
- [cblas_dcopy(\_:\_:\_:\_:\_:)](cblas_dcopy%28__________%29.md): Copies a vector to another vector (double-precision).
- [cblas_dgbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dgbmv%28____________________________%29.md): Scales a general band matrix, then multiplies by a vector, then adds a vector (double precision).
- [cblas_dgemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dgemm%28____________________________%29.md): Multiplies two matrices (double-precision).
- [cblas_dgemv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dgemv%28________________________%29.md): Multiplies a matrix by a vector (double precision).
- [cblas_dger(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dger%28____________________%29.md): Multiplies vector X by the transpose of vector Y, then adds matrix A (double precison).
- [cblas_dnrm2(\_:\_:\_:)](cblas_dnrm2%28______%29.md): Computes the L2 norm (Euclidian length) of a vector (double precision).
- [cblas_drot(\_:\_:\_:\_:\_:\_:\_:)](cblas_drot%28______________%29.md): Applies a Givens rotation matrix to a pair of vectors.
- [cblas_drotg(\_:\_:\_:\_:)](cblas_drotg%28________%29.md): Constructs a Givens rotation matrix.
- [cblas_drotm(\_:\_:\_:\_:\_:\_:)](cblas_drotm%28____________%29.md): Applies a modified Givens transformation (single precision).
- [cblas_drotmg(\_:\_:\_:\_:\_:)](cblas_drotmg%28__________%29.md): Generates a modified Givens rotation matrix.
- [cblas_dsbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dsbmv%28________________________%29.md): Scales a symmetric band matrix, then multiplies by a vector, then adds a vector (double precision).
- [cblas_dscal(\_:\_:\_:\_:)](cblas_dscal%28________%29.md): Multiplies each element of a vector by a constant (double-precision).
- [cblas_dspmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_dspmv%28____________________%29.md): Scales a packed symmetric matrix, then multiplies by a vector, then scales and adds another vector (double precision).

# cblas_dswap (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Exchanges the elements of two vectors (double precision).

## Declaration

```objectivec
void cblas_dswap(const __LAPACK_int N, double *X, const __LAPACK_int INCX, double *Y, const __LAPACK_int INCY);
```

## Parameters

- `N`: Number of elements in vectors
- `X`: Vector `x`. On return, contains elements copied from vector `y`.
- `INCX`: Stride within `X`. For example, if `incX` is 7, every 7th element is used.
- `Y`: Vector `y`. On return, contains elements copied from vector `x`.
- `INCY`: Stride within `Y`. For example, if `incY` is 7, every 7th element is used.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Double-precision float matrix functions

- [cblas_dasum](cblas_dasum%28______%29.md): Computes the sum of the absolute values of elements in a vector (double-precision).
- [cblas_daxpy](cblas_daxpy%28____________%29.md): Computes a constant times a vector plus a vector (double-precision).
- [cblas_dcopy](cblas_dcopy%28__________%29.md): Copies a vector to another vector (double-precision).
- [cblas_dgbmv](cblas_dgbmv%28____________________________%29.md): Scales a general band matrix, then multiplies by a vector, then adds a vector (double precision).
- [cblas_dgemm](cblas_dgemm%28____________________________%29.md): Multiplies two matrices (double-precision).
- [cblas_dgemv](cblas_dgemv%28________________________%29.md): Multiplies a matrix by a vector (double precision).
- [cblas_dger](cblas_dger%28____________________%29.md): Multiplies vector X by the transpose of vector Y, then adds matrix A (double precison).
- [cblas_dnrm2](cblas_dnrm2%28______%29.md): Computes the L2 norm (Euclidian length) of a vector (double precision).
- [cblas_drot](cblas_drot%28______________%29.md): Applies a Givens rotation matrix to a pair of vectors.
- [cblas_drotg](cblas_drotg%28________%29.md): Constructs a Givens rotation matrix.
- [cblas_drotm](cblas_drotm%28____________%29.md): Applies a modified Givens transformation (single precision).
- [cblas_drotmg](cblas_drotmg%28__________%29.md): Generates a modified Givens rotation matrix.
- [cblas_dsbmv](cblas_dsbmv%28________________________%29.md): Scales a symmetric band matrix, then multiplies by a vector, then adds a vector (double precision).
- [cblas_dscal](cblas_dscal%28________%29.md): Multiplies each element of a vector by a constant (double-precision).
- [cblas_dspmv](cblas_dspmv%28____________________%29.md): Scales a packed symmetric matrix, then multiplies by a vector, then scales and adds another vector (double precision).
