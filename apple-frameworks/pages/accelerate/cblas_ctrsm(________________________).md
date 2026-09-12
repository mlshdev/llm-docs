> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/cblas_ctrsm(_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/cblas_ctrsm(_:_:_:_:_:_:_:_:_:_:_:_:))

# cblas_ctrsm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Solves a triangular system of equations with multiple values for the right side.

## Declaration

```swift
func cblas_ctrsm(_ ORDER: CBLAS_ORDER, _ SIDE: CBLAS_SIDE, _ UPLO: CBLAS_UPLO, _ TRANSA: CBLAS_TRANSPOSE, _ DIAG: CBLAS_DIAG, _ M: __LAPACK_int, _ N: __LAPACK_int, _ ALPHA: OpaquePointer, _ A: OpaquePointer?, _ LDA: __LAPACK_int, _ B: OpaquePointer?, _ LDB: __LAPACK_int)
```

## Parameters

- `ORDER`: Specifies row-major (C) or column-major (Fortran) data ordering.
- `SIDE`: Determines the order in which the matrix and vector should be multiplied.
- `UPLO`: Specifies whether to use the upper or lower triangle from the matrix. Valid values are `'U'` or `'L'`.
- `TRANSA`: Specifies whether to use matrix A (`'N'` or `'n'`) or the transpose of A (`'T'`, `'t'`, `'C'`, or `'c'`).
- `DIAG`: Specifies whether the matrix is unit triangular. Possible values are `'U'` (unit triangular) or `'N'` (not unit triangular).
- `M`: The number of rows in matrix `B`.
- `N`: The number of columns in matrix `B`.
- `ALPHA`: Scaling factor for matrix `A`.
- `A`: Triangular matrix `A`.
- `LDA`: The leading dimension of matrix `A`.
- `B`: On entry, matrix `B`. Overwritten on return by matrix `X`.
- `LDB`: The leading dimension of matrix `B`.

<a id="Discussion"></a>

## Discussion

If `Side` is `'L'`, solves `A*X=alpha*B` or `A'*X=alpha*B`, depending on `TransA`.

If `Side` is `'R'`, solves `X*A=alpha*B` or `X*A'=alpha*B`, depending on `TransA`.

In either case, the results overwrite the values of matrix `B` in `X`.

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Single-precision complex matrix functions

- [cblas_caxpy(\_:\_:\_:\_:\_:\_:)](cblas_caxpy%28____________%29.md): Computes a constant times a vector plus a vector (single-precision complex).
- [cblas_ccopy(\_:\_:\_:\_:\_:)](cblas_ccopy%28__________%29.md): Copies a vector to another vector (single-precision complex).
- [cblas_cgbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cgbmv%28____________________________%29.md): Scales a general band matrix, then multiplies by a vector, then adds a vector (single-precision complex).
- [cblas_cgemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cgemm%28____________________________%29.md): Multiplies two matrices (single-precision complex).
- [cblas_cgemv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cgemv%28________________________%29.md): Multiplies a matrix by a vector (single-precision complex).
- [cblas_cgerc(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cgerc%28____________________%29.md): Multiplies vector X by the conjugate transpose of vector Y, then adds matrix A (single-precision complex).
- [cblas_cgeru(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cgeru%28____________________%29.md): Multiplies vector X by the transpose of vector Y, then adds matrix A (single-precision complex).
- [cblas_chbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_chbmv%28________________________%29.md): Scales a Hermitian band matrix, then multiplies by a vector, then adds a vector (single-precision complex).
- [cblas_chemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_chemm%28__________________________%29.md): Multiplies two Hermitian matrices (single-precision complex), then adds a third (with scaling).
- [cblas_chemv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_chemv%28______________________%29.md): Scales and multiplies a Hermitian matrix by a vector, then adds a second (scaled) vector.
- [cblas_cher(\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cher%28________________%29.md): Hermitian rank 1 update: adds the product of a scaling factor, vector `X`, and the conjugate transpose of `X` to matrix `A`.
- [cblas_cher2(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cher2%28____________________%29.md): Hermitian rank 2 update: adds the product of a scaling factor, vector `X`, and the conjugate transpose of vector `Y` to the product of the conjugate of the scaling factor, vector `Y`, and the conjugate transpose of vector `X`, and adds the result to matrix `A`.
- [cblas_cher2k(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cher2k%28__________________________%29.md): Performs a rank-2k update of a complex Hermitian matrix (single-precision complex).
- [cblas_cherk(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_cherk%28______________________%29.md): Rank-k update—multiplies a Hermitian matrix by its transpose and adds a second matrix (single precision).
- [cblas_chpmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_chpmv%28____________________%29.md): Scales a packed hermitian matrix, multiplies it by a vector, and adds a scaled vector.

# cblas_ctrsm (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Solves a triangular system of equations with multiple values for the right side.

## Declaration

```objectivec
void cblas_ctrsm(const enum CBLAS_ORDER ORDER, const enum CBLAS_SIDE SIDE, const enum CBLAS_UPLO UPLO, const enum CBLAS_TRANSPOSE TRANSA, const enum CBLAS_DIAG DIAG, const __LAPACK_int M, const __LAPACK_int N, const __LAPACK_float_complex *ALPHA, const __LAPACK_float_complex *A, const __LAPACK_int LDA, __LAPACK_float_complex *B, const __LAPACK_int LDB);
```

## Parameters

- `ORDER`: Specifies row-major (C) or column-major (Fortran) data ordering.
- `SIDE`: Determines the order in which the matrix and vector should be multiplied.
- `UPLO`: Specifies whether to use the upper or lower triangle from the matrix. Valid values are `'U'` or `'L'`.
- `TRANSA`: Specifies whether to use matrix A (`'N'` or `'n'`) or the transpose of A (`'T'`, `'t'`, `'C'`, or `'c'`).
- `DIAG`: Specifies whether the matrix is unit triangular. Possible values are `'U'` (unit triangular) or `'N'` (not unit triangular).
- `M`: The number of rows in matrix `B`.
- `N`: The number of columns in matrix `B`.
- `ALPHA`: Scaling factor for matrix `A`.
- `A`: Triangular matrix `A`.
- `LDA`: The leading dimension of matrix `A`.
- `B`: On entry, matrix `B`. Overwritten on return by matrix `X`.
- `LDB`: The leading dimension of matrix `B`.

<a id="Discussion"></a>

## Discussion

If `Side` is `'L'`, solves `A*X=alpha*B` or `A'*X=alpha*B`, depending on `TransA`.

If `Side` is `'R'`, solves `X*A=alpha*B` or `X*A'=alpha*B`, depending on `TransA`.

In either case, the results overwrite the values of matrix `B` in `X`.

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Single-precision complex matrix functions

- [cblas_caxpy](cblas_caxpy%28____________%29.md): Computes a constant times a vector plus a vector (single-precision complex).
- [cblas_ccopy](cblas_ccopy%28__________%29.md): Copies a vector to another vector (single-precision complex).
- [cblas_cgbmv](cblas_cgbmv%28____________________________%29.md): Scales a general band matrix, then multiplies by a vector, then adds a vector (single-precision complex).
- [cblas_cgemm](cblas_cgemm%28____________________________%29.md): Multiplies two matrices (single-precision complex).
- [cblas_cgemv](cblas_cgemv%28________________________%29.md): Multiplies a matrix by a vector (single-precision complex).
- [cblas_cgerc](cblas_cgerc%28____________________%29.md): Multiplies vector X by the conjugate transpose of vector Y, then adds matrix A (single-precision complex).
- [cblas_cgeru](cblas_cgeru%28____________________%29.md): Multiplies vector X by the transpose of vector Y, then adds matrix A (single-precision complex).
- [cblas_chbmv](cblas_chbmv%28________________________%29.md): Scales a Hermitian band matrix, then multiplies by a vector, then adds a vector (single-precision complex).
- [cblas_chemm](cblas_chemm%28__________________________%29.md): Multiplies two Hermitian matrices (single-precision complex), then adds a third (with scaling).
- [cblas_chemv](cblas_chemv%28______________________%29.md): Scales and multiplies a Hermitian matrix by a vector, then adds a second (scaled) vector.
- [cblas_cher](cblas_cher%28________________%29.md): Hermitian rank 1 update: adds the product of a scaling factor, vector `X`, and the conjugate transpose of `X` to matrix `A`.
- [cblas_cher2](cblas_cher2%28____________________%29.md): Hermitian rank 2 update: adds the product of a scaling factor, vector `X`, and the conjugate transpose of vector `Y` to the product of the conjugate of the scaling factor, vector `Y`, and the conjugate transpose of vector `X`, and adds the result to matrix `A`.
- [cblas_cher2k](cblas_cher2k%28__________________________%29.md): Performs a rank-2k update of a complex Hermitian matrix (single-precision complex).
- [cblas_cherk](cblas_cherk%28______________________%29.md): Rank-k update—multiplies a Hermitian matrix by its transpose and adds a second matrix (single precision).
- [cblas_chpmv](cblas_chpmv%28____________________%29.md): Scales a packed hermitian matrix, multiplies it by a vector, and adds a scaled vector.
