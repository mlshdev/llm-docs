> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/cblas_srotmg(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/cblas_srotmg(_:_:_:_:_:))

# cblas_srotmg(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Generates a modified Givens rotation matrix.

## Declaration

```swift
func cblas_srotmg(_ D1: UnsafeMutablePointer<Float>, _ D2: UnsafeMutablePointer<Float>, _ B1: UnsafeMutablePointer<Float>, _ B2: Float, _ P: UnsafeMutablePointer<Float>)
```

## Parameters

- `D1`: Scaling factor `D1`.
- `D2`: Scaling factor `D2`.
- `B1`: Scaling factor `B1`.
- `B2`: Scaling factor `B2`.
- `P`: A 5-element vector:

  - **`P[0]`**: Flag value that defines the form of matrix `H`.

  `-2.0`: matrix `H` contains the identity matrix.

  `-1.0`: matrix `H` is identical to matrix `SH` (defined by the remaining values in the vector).

  `0.0`: `H[1,2]` and `H[2,1]` are obtained from matrix `SH`. The remaining values are both `1.0`.

  `1.0`: `H[1,1]` and `H[2,2]` are obtained from matrix `SH`. `H[1,2]` is 1.0. `H[2,1]` is -1.0.

  - **`P[1]`**: Contains `SH[1,1]`.
  - **`P[2]`**: Contains `SH[2,1]`.
  - **`P[3]`**: Contains `SH[1,2]`.
  - **`P[4]`**: Contains `SH[2,2]`.

<a id="Discussion"></a>

## Discussion

The resulting matrix zeroes the second component of the vector `(sqrt(D1)*B1, sqrt(SD2)*B2)`.

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
- [cblas_ssbmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_ssbmv%28________________________%29.md): Scales a symmetric band matrix, then multiplies by a vector, then adds a vector (single-precision).
- [cblas_sscal(\_:\_:\_:\_:)](cblas_sscal%28________%29.md): Multiplies each element of a vector by a constant (single-precision).
- [cblas_sspmv(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cblas_sspmv%28____________________%29.md): Scales a packed symmetric matrix, then multiplies by a vector, then scales and adds another vector (single precision).
- [cblas_sspr(\_:\_:\_:\_:\_:\_:\_:)](cblas_sspr%28______________%29.md): Rank one update: adds a packed symmetric matrix to the product of a scaling factor, a vector, and its transpose (single precision).

# cblas_srotmg (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Generates a modified Givens rotation matrix.

## Declaration

```objectivec
void cblas_srotmg(float *D1, float *D2, float *B1, const float B2, float *P);
```

## Parameters

- `D1`: Scaling factor `D1`.
- `D2`: Scaling factor `D2`.
- `B1`: Scaling factor `B1`.
- `B2`: Scaling factor `B2`.
- `P`: A 5-element vector:

  - **`P[0]`**: Flag value that defines the form of matrix `H`.

  `-2.0`: matrix `H` contains the identity matrix.

  `-1.0`: matrix `H` is identical to matrix `SH` (defined by the remaining values in the vector).

  `0.0`: `H[1,2]` and `H[2,1]` are obtained from matrix `SH`. The remaining values are both `1.0`.

  `1.0`: `H[1,1]` and `H[2,2]` are obtained from matrix `SH`. `H[1,2]` is 1.0. `H[2,1]` is -1.0.

  - **`P[1]`**: Contains `SH[1,1]`.
  - **`P[2]`**: Contains `SH[2,1]`.
  - **`P[3]`**: Contains `SH[1,2]`.
  - **`P[4]`**: Contains `SH[2,2]`.

<a id="Discussion"></a>

## Discussion

The resulting matrix zeroes the second component of the vector `(sqrt(D1)*B1, sqrt(SD2)*B2)`.

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
- [cblas_ssbmv](cblas_ssbmv%28________________________%29.md): Scales a symmetric band matrix, then multiplies by a vector, then adds a vector (single-precision).
- [cblas_sscal](cblas_sscal%28________%29.md): Multiplies each element of a vector by a constant (single-precision).
- [cblas_sspmv](cblas_sspmv%28____________________%29.md): Scales a packed symmetric matrix, then multiplies by a vector, then scales and adds another vector (single precision).
- [cblas_sspr](cblas_sspr%28______________%29.md): Rank one update: adds a packed symmetric matrix to the product of a scaling factor, a vector, and its transpose (single precision).
