> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/cblas_ztrmm(_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/cblas_ztrmm(_:_:_:_:_:_:_:_:_:_:_:_:))

# cblas_ztrmm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Scales a triangular matrix and multiplies it by a matrix.

## Declaration

```swift
func cblas_ztrmm(_ ORDER: CBLAS_ORDER, _ SIDE: CBLAS_SIDE, _ UPLO: CBLAS_UPLO, _ TRANSA: CBLAS_TRANSPOSE, _ DIAG: CBLAS_DIAG, _ M: __LAPACK_int, _ N: __LAPACK_int, _ ALPHA: OpaquePointer, _ A: OpaquePointer?, _ LDA: __LAPACK_int, _ B: OpaquePointer?, _ LDB: __LAPACK_int)
```

## Parameters

- `ORDER`: Specifies row-major (C) or column-major (Fortran) data ordering.
- `SIDE`: Determines the order in which the matrices should be multiplied.
- `UPLO`: Specifies whether to use the upper or lower triangle from the matrix. Valid values are `'U'` or `'L'`.
- `TRANSA`: Specifies whether to use matrix A (`'N'` or `'n'`) or the transpose of A (`'T'`, `'t'`, `'C'`, or `'c'`).
- `DIAG`: Specifies whether the matrix is unit triangular. Possible values are `'U'` (unit triangular) or `'N'` (not unit triangular).
- `M`: Number of rows in matrix `B`.
- `N`: Number of columns in matrix `B`.
- `ALPHA`: Scaling factor for matrix `A`.
- `A`: Matrix `A`.
- `LDA`: Leading dimension of matrix `A`.
- `B`: Matrix `B`. Overwritten by results on return.
- `LDB`: Leading dimension of matrix `B`.

<a id="Discussion"></a>

## Discussion

If `Side` is `'L'`, multiplies `alpha*A*B` or `alpha*A'*B`, depending on `TransA`.

If `Side` is `'R'`, multiplies `alpha*B*A` or `alpha*B*A'`, depending on `TransA`.

In either case, the results are stored in matrix `B`.

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

# cblas_ztrmm (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Scales a triangular matrix and multiplies it by a matrix.

## Declaration

```objectivec
void cblas_ztrmm(const enum CBLAS_ORDER ORDER, const enum CBLAS_SIDE SIDE, const enum CBLAS_UPLO UPLO, const enum CBLAS_TRANSPOSE TRANSA, const enum CBLAS_DIAG DIAG, const __LAPACK_int M, const __LAPACK_int N, const __LAPACK_double_complex *ALPHA, const __LAPACK_double_complex *A, const __LAPACK_int LDA, __LAPACK_double_complex *B, const __LAPACK_int LDB);
```

## Parameters

- `ORDER`: Specifies row-major (C) or column-major (Fortran) data ordering.
- `SIDE`: Determines the order in which the matrices should be multiplied.
- `UPLO`: Specifies whether to use the upper or lower triangle from the matrix. Valid values are `'U'` or `'L'`.
- `TRANSA`: Specifies whether to use matrix A (`'N'` or `'n'`) or the transpose of A (`'T'`, `'t'`, `'C'`, or `'c'`).
- `DIAG`: Specifies whether the matrix is unit triangular. Possible values are `'U'` (unit triangular) or `'N'` (not unit triangular).
- `M`: Number of rows in matrix `B`.
- `N`: Number of columns in matrix `B`.
- `ALPHA`: Scaling factor for matrix `A`.
- `A`: Matrix `A`.
- `LDA`: Leading dimension of matrix `A`.
- `B`: Matrix `B`. Overwritten by results on return.
- `LDB`: Leading dimension of matrix `B`.

<a id="Discussion"></a>

## Discussion

If `Side` is `'L'`, multiplies `alpha*A*B` or `alpha*A'*B`, depending on `TransA`.

If `Side` is `'R'`, multiplies `alpha*B*A` or `alpha*B*A'`, depending on `TransA`.

In either case, the results are stored in matrix `B`.

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
