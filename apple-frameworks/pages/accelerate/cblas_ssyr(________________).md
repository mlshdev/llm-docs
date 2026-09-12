> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/cblas_ssyr(_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/cblas_ssyr(_:_:_:_:_:_:_:_:))

# cblas_ssyr(\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Rank one update: adds a symmetric matrix to the product of a scaling factor, a vector, and its transpose (single precision).

## Declaration

```swift
func cblas_ssyr(_ ORDER: CBLAS_ORDER, _ UPLO: CBLAS_UPLO, _ N: __LAPACK_int, _ ALPHA: Float, _ X: UnsafePointer<Float>?, _ INCX: __LAPACK_int, _ A: UnsafeMutablePointer<Float>?, _ LDA: __LAPACK_int)
```

## Parameters

- `ORDER`: Specifies row-major (C) or column-major (Fortran) data ordering.
- `UPLO`: Specifies whether to use the upper or lower triangle from the matrix. Valid values are `'U'` or `'L'`.
- `N`: Order of matrix `A`; number of elements in vector `x`.
- `ALPHA`: Scaling factor to multiply `x` by.
- `X`: Vector `x`.
- `INCX`: Stride within `X`. For example, if `incX` is 7, every 7th element is used.
- `A`: Matrix `A`.
- `LDA`: Leading dimension of array containing matrix `A`.

<a id="Discussion"></a>

## Discussion

Calculates `A + alpha*x*x` and stores the result in `A`.

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Single-precision float matrix functions

- [cblas_sasum(\_:\_:\_:)](cblas_sasum%28______%29.md): Computes the sum of the absolute values of elements in a vector (single-precision).
- [cblas_saxpy(\_:\_:\_:\_:\_:\_:)](cblas_saxpy%28____________%29.md): Computes a constant times a vector plus a vector (single-precision).
- [cblas_scopy(\_:\_:\_:\_:\_:)](cblas_scopy%28__________%29.md): Copies a vector to another vector (single-precision).
- [cblas_sgbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_sgbmv%28____________________________%29.md): Scales a general band matrix, then multiplies by a vector, then adds a vector (single precision).
- [cblas_sgemm(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_sgemm%28____________________________%29.md): Multiplies two matrices (single-precision).
- [cblas_sgemv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_sgemv%28________________________%29.md): Multiplies a single-precision matrix by a vector.
- [cblas_sger(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_sger%28____________________%29.md): Multiplies vector X by the transpose of vector Y, then adds matrix A (single precison).
- [cblas_snrm2(\_:\_:\_:)](cblas_snrm2%28______%29.md): Computes the L2 norm (Euclidian length) of a vector (single precision).
- [cblas_srot(\_:\_:\_:\_:\_:\_:\_:)](cblas_srot%28______________%29.md): Applies a Givens rotation matrix to a pair of vectors.
- [cblas_srotg(\_:\_:\_:\_:)](cblas_srotg%28________%29.md): Constructs a Givens rotation matrix.
- [cblas_srotm(\_:\_:\_:\_:\_:\_:)](cblas_srotm%28____________%29.md): Applies a modified Givens transformation (single precision).
- [cblas_srotmg(\_:\_:\_:\_:\_:)](cblas_srotmg%28__________%29.md): Generates a modified Givens rotation matrix.
- [cblas_ssbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ssbmv%28________________________%29.md): Scales a symmetric band matrix, then multiplies by a vector, then adds a vector (single-precision).
- [cblas_sscal(\_:\_:\_:\_:)](cblas_sscal%28________%29.md): Multiplies each element of a vector by a constant (single-precision).
- [cblas_sspmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_sspmv%28____________________%29.md): Scales a packed symmetric matrix, then multiplies by a vector, then scales and adds another vector (single precision).

# cblas_ssyr (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Rank one update: adds a symmetric matrix to the product of a scaling factor, a vector, and its transpose (single precision).

## Declaration

```objectivec
void cblas_ssyr(const enum CBLAS_ORDER ORDER, const enum CBLAS_UPLO UPLO, const __LAPACK_int N, const float ALPHA, const float *X, const __LAPACK_int INCX, float *A, const __LAPACK_int LDA);
```

## Parameters

- `ORDER`: Specifies row-major (C) or column-major (Fortran) data ordering.
- `UPLO`: Specifies whether to use the upper or lower triangle from the matrix. Valid values are `'U'` or `'L'`.
- `N`: Order of matrix `A`; number of elements in vector `x`.
- `ALPHA`: Scaling factor to multiply `x` by.
- `X`: Vector `x`.
- `INCX`: Stride within `X`. For example, if `incX` is 7, every 7th element is used.
- `A`: Matrix `A`.
- `LDA`: Leading dimension of array containing matrix `A`.

<a id="Discussion"></a>

## Discussion

Calculates `A + alpha*x*x` and stores the result in `A`.

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### Single-precision float matrix functions

- [cblas_sasum](cblas_sasum%28______%29.md): Computes the sum of the absolute values of elements in a vector (single-precision).
- [cblas_saxpy](cblas_saxpy%28____________%29.md): Computes a constant times a vector plus a vector (single-precision).
- [cblas_scopy](cblas_scopy%28__________%29.md): Copies a vector to another vector (single-precision).
- [cblas_sgbmv](cblas_sgbmv%28____________________________%29.md): Scales a general band matrix, then multiplies by a vector, then adds a vector (single precision).
- [cblas_sgemm](cblas_sgemm%28____________________________%29.md): Multiplies two matrices (single-precision).
- [cblas_sgemv](cblas_sgemv%28________________________%29.md): Multiplies a single-precision matrix by a vector.
- [cblas_sger](cblas_sger%28____________________%29.md): Multiplies vector X by the transpose of vector Y, then adds matrix A (single precison).
- [cblas_snrm2](cblas_snrm2%28______%29.md): Computes the L2 norm (Euclidian length) of a vector (single precision).
- [cblas_srot](cblas_srot%28______________%29.md): Applies a Givens rotation matrix to a pair of vectors.
- [cblas_srotg](cblas_srotg%28________%29.md): Constructs a Givens rotation matrix.
- [cblas_srotm](cblas_srotm%28____________%29.md): Applies a modified Givens transformation (single precision).
- [cblas_srotmg](cblas_srotmg%28__________%29.md): Generates a modified Givens rotation matrix.
- [cblas_ssbmv](cblas_ssbmv%28________________________%29.md): Scales a symmetric band matrix, then multiplies by a vector, then adds a vector (single-precision).
- [cblas_sscal](cblas_sscal%28________%29.md): Multiplies each element of a vector by a constant (single-precision).
- [cblas_sspmv](cblas_sspmv%28____________________%29.md): Scales a packed symmetric matrix, then multiplies by a vector, then scales and adds another vector (single precision).
