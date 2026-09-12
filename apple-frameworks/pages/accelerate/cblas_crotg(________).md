> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/cblas_crotg(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/cblas_crotg(_:_:_:_:))

# cblas_crotg(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Constructs a complex Givens rotation.

## Declaration

```swift
func cblas_crotg(_ A: OpaquePointer, _ B: OpaquePointer, _ C: UnsafeMutablePointer<Float>, _ S: OpaquePointer)
```

## Parameters

- `A`: Complex value `a`. Overwritten on output.
- `B`: Complex value `a`.
- `C`: Real value `c`. Unused on entry. Overwritten on return with the value `cos(θ)`.
- `S`: Complex value `s`. Unused on entry. Overwritten on return with the value `sin(θ)`.

<a id="Discussion"></a>

## Discussion

Given a vertical matrix containing `a` and `b`, computes the values of `cos θ` and `sin θ` that zero the lower value (`b`). Returns the value of `sin θ` in `s`, the value of `cos θ` in `c`, and the upper value (`r`) in `a`.

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

# cblas_crotg (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Constructs a complex Givens rotation.

## Declaration

```objectivec
void cblas_crotg(__LAPACK_float_complex *A, __LAPACK_float_complex *B, float *C, __LAPACK_float_complex *S);
```

## Parameters

- `A`: Complex value `a`. Overwritten on output.
- `B`: Complex value `a`.
- `C`: Real value `c`. Unused on entry. Overwritten on return with the value `cos(θ)`.
- `S`: Complex value `s`. Unused on entry. Overwritten on return with the value `sin(θ)`.

<a id="Discussion"></a>

## Discussion

Given a vertical matrix containing `a` and `b`, computes the values of `cos θ` and `sin θ` that zero the lower value (`b`). Returns the value of `sin θ` in `s`, the value of `cos θ` in `c`, and the upper value (`r`) in `a`.

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
