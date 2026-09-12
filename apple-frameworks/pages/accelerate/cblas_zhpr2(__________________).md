> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/cblas_zhpr2(_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/cblas_zhpr2(_:_:_:_:_:_:_:_:_:))

# cblas_zhpr2(\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Multiplies a vector times the conjugate transpose of a second vector and vice-versa, sums the results, and adds a matrix.

## Declaration

```swift
func cblas_zhpr2(_ ORDER: CBLAS_ORDER, _ UPLO: CBLAS_UPLO, _ N: __LAPACK_int, _ ALPHA: OpaquePointer, _ X: OpaquePointer?, _ INCX: __LAPACK_int, _ Y: OpaquePointer?, _ INCY: __LAPACK_int, _ AP: OpaquePointer?)
```

## Parameters

- `ORDER`: Specifies row-major (C) or column-major (Fortran) data ordering.
- `UPLO`: Specifies whether to use the upper or lower triangle from the matrix. Valid values are `'U'` or `'L'`.
- `N`: Order of matrix `A` and the number of elements in vectors `x` and `y`.
- `ALPHA`: Scaling factor that vector `x` is multiplied by.
- `X`: Vector `x`.
- `INCX`: Stride within `X`. For example, if `incX` is 7, every 7th element is used.
- `Y`: Vector `y`.
- `INCY`: Stride within `Y`. For example, if `incY` is 7, every 7th element is used.
- `AP`: Matrix `A` in packed storage format. Overwritten by the results on return.

<a id="Discussion"></a>

## Discussion

Calcuates `alpha*x*conjg(y') + conjg(alpha)*y*conjg(x') + A`, and stores the result in `A`.

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Double-precision complex matrix functions

- [cblas_dzasum(\_:\_:\_:)](cblas_dzasum%28______%29.md): Computes the sum of the absolute values of real and imaginary parts of elements in a vector (single-precision complex).
- [cblas_dznrm2(\_:\_:\_:)](cblas_dznrm2%28______%29.md): Computes the unitary norm of a vector (double-precision complex).
- [cblas_zaxpy(\_:\_:\_:\_:\_:\_:)](cblas_zaxpy%28____________%29.md): Computes a constant times a vector plus a vector (double-precision complex).
- [cblas_zcopy(\_:\_:\_:\_:\_:)](cblas_zcopy%28__________%29.md): Copies a vector to another vector (double-precision complex).
- [cblas_zdrot(\_:\_:\_:\_:\_:\_:\_:)](cblas_zdrot%28______________%29.md): Applies a Givens rotation matrix to a pair of complex vectors.
- [cblas_zdscal(\_:\_:\_:\_:)](cblas_zdscal%28________%29.md): Multiplies each element of a vector by a constant (double-precision complex).
- [cblas_zgbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zgbmv%28____________________________%29.md): Scales a general band matrix, then multiplies by a vector, then adds a vector (double-precision complex).
- [cblas_zgemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zgemm%28____________________________%29.md): Multiplies two matrices (double-precision complex).
- [cblas_zgemv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zgemv%28________________________%29.md): Multiplies a matrix by a vector (double-precision complex).
- [cblas_zgerc(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zgerc%28____________________%29.md): Multiplies vector X by the conjugate transpose of vector Y, then adds matrix A (double-precision complex).
- [cblas_zgeru(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zgeru%28____________________%29.md): Multiplies vector X by the transpose of vector Y, then adds matrix A (double-precision complex).
- [cblas_zhbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zhbmv%28________________________%29.md): Scales a Hermitian band matrix, then multiplies by a vector, then adds a vector (double-precision complex).
- [cblas_zhemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zhemm%28__________________________%29.md): Multiplies two Hermitian matrices (double-precision complex).
- [cblas_zhemv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zhemv%28______________________%29.md): Scales and multiplies a Hermitian matrix by a vector, then adds a second (scaled) vector.
- [cblas_zher(\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_zher%28________________%29.md): Adds the product of a scaling factor, vector `X`, and the conjugate transpose of `X` to matrix `A`.

# cblas_zhpr2 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Multiplies a vector times the conjugate transpose of a second vector and vice-versa, sums the results, and adds a matrix.

## Declaration

```objectivec
void cblas_zhpr2(const enum CBLAS_ORDER ORDER, const enum CBLAS_UPLO UPLO, const __LAPACK_int N, const __LAPACK_double_complex *ALPHA, const __LAPACK_double_complex *X, const __LAPACK_int INCX, const __LAPACK_double_complex *Y, const __LAPACK_int INCY, __LAPACK_double_complex *AP);
```

## Parameters

- `ORDER`: Specifies row-major (C) or column-major (Fortran) data ordering.
- `UPLO`: Specifies whether to use the upper or lower triangle from the matrix. Valid values are `'U'` or `'L'`.
- `N`: Order of matrix `A` and the number of elements in vectors `x` and `y`.
- `ALPHA`: Scaling factor that vector `x` is multiplied by.
- `X`: Vector `x`.
- `INCX`: Stride within `X`. For example, if `incX` is 7, every 7th element is used.
- `Y`: Vector `y`.
- `INCY`: Stride within `Y`. For example, if `incY` is 7, every 7th element is used.
- `AP`: Matrix `A` in packed storage format. Overwritten by the results on return.

<a id="Discussion"></a>

## Discussion

Calcuates `alpha*x*conjg(y') + conjg(alpha)*y*conjg(x') + A`, and stores the result in `A`.

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Double-precision complex matrix functions

- [cblas_dzasum](cblas_dzasum%28______%29.md): Computes the sum of the absolute values of real and imaginary parts of elements in a vector (single-precision complex).
- [cblas_dznrm2](cblas_dznrm2%28______%29.md): Computes the unitary norm of a vector (double-precision complex).
- [cblas_zaxpy](cblas_zaxpy%28____________%29.md): Computes a constant times a vector plus a vector (double-precision complex).
- [cblas_zcopy](cblas_zcopy%28__________%29.md): Copies a vector to another vector (double-precision complex).
- [cblas_zdrot](cblas_zdrot%28______________%29.md): Applies a Givens rotation matrix to a pair of complex vectors.
- [cblas_zdscal](cblas_zdscal%28________%29.md): Multiplies each element of a vector by a constant (double-precision complex).
- [cblas_zgbmv](cblas_zgbmv%28____________________________%29.md): Scales a general band matrix, then multiplies by a vector, then adds a vector (double-precision complex).
- [cblas_zgemm](cblas_zgemm%28____________________________%29.md): Multiplies two matrices (double-precision complex).
- [cblas_zgemv](cblas_zgemv%28________________________%29.md): Multiplies a matrix by a vector (double-precision complex).
- [cblas_zgerc](cblas_zgerc%28____________________%29.md): Multiplies vector X by the conjugate transpose of vector Y, then adds matrix A (double-precision complex).
- [cblas_zgeru](cblas_zgeru%28____________________%29.md): Multiplies vector X by the transpose of vector Y, then adds matrix A (double-precision complex).
- [cblas_zhbmv](cblas_zhbmv%28________________________%29.md): Scales a Hermitian band matrix, then multiplies by a vector, then adds a vector (double-precision complex).
- [cblas_zhemm](cblas_zhemm%28__________________________%29.md): Multiplies two Hermitian matrices (double-precision complex).
- [cblas_zhemv](cblas_zhemv%28______________________%29.md): Scales and multiplies a Hermitian matrix by a vector, then adds a second (scaled) vector.
- [cblas_zher](cblas_zher%28________________%29.md): Adds the product of a scaling factor, vector `X`, and the conjugate transpose of `X` to matrix `A`.
