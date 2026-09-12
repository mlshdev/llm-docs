> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/appleblas_sgeadd(_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/appleblas_sgeadd(_:_:_:_:_:_:_:_:_:_:_:_:_:))

# appleblas_sgeadd(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func appleblas_sgeadd(_ ORDER: CBLAS_ORDER, _ TRANSA: CBLAS_TRANSPOSE, _ TRANSB: CBLAS_TRANSPOSE, _ M: __LAPACK_int, _ N: __LAPACK_int, _ ALPHA: Float, _ A: UnsafePointer<Float>?, _ LDA: __LAPACK_int, _ BETA: Float, _ B: UnsafePointer<Float>?, _ LDB: __LAPACK_int, _ C: UnsafeMutablePointer<Float>, _ LDC: __LAPACK_int)
```

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

# appleblas_sgeadd (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
extern void appleblas_sgeadd(const enum CBLAS_ORDER ORDER, const enum CBLAS_TRANSPOSE TRANSA, const enum CBLAS_TRANSPOSE TRANSB, const __LAPACK_int M, const __LAPACK_int N, const float ALPHA, const float *A, const __LAPACK_int LDA, const float BETA, const float *B, const __LAPACK_int LDB, float *C, const __LAPACK_int LDC);
```

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
