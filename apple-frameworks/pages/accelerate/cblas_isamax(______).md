> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/cblas_isamax(_:_:_:)](https://developer.apple.com/documentation/accelerate/cblas_isamax(_:_:_:))

# cblas_isamax(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Returns the index of the element with the largest absolute value in a vector (single-precision).

## Declaration

```swift
func cblas_isamax(_ N: __LAPACK_int, _ X: UnsafePointer<Float>?, _ INCX: __LAPACK_int) -> __LAPACK_int
```

## Parameters

- `N`: Number of elements in the vector.
- `X`: The vector.
- `INCX`: Stride within `X`. For example, if `incX` is 7, every 7th element is used.

<a id="return-value"></a>

## Return Value

Returns an index in the range 0..N-1 corresponding with the element with the largest absolute value.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### General functions

- [cblas_icamax(\_:\_:\_:)](cblas_icamax%28______%29.md): Returns the index of the element with the largest absolute value in a vector (single-precision complex).
- [cblas_idamax(\_:\_:\_:)](cblas_idamax%28______%29.md): Returns the index of the element with the largest absolute value in a vector (double-precision).
- [cblas_izamax(\_:\_:\_:)](cblas_izamax%28______%29.md): Returns the index of the element with the largest absolute value in a vector (double-precision complex).

# cblas_isamax (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Returns the index of the element with the largest absolute value in a vector (single-precision).

## Declaration

```objectivec
__LAPACK_int cblas_isamax(const __LAPACK_int N, const float *X, const __LAPACK_int INCX);
```

## Parameters

- `N`: Number of elements in the vector.
- `X`: The vector.
- `INCX`: Stride within `X`. For example, if `incX` is 7, every 7th element is used.

<a id="return-value"></a>

## Return Value

Returns an index in the range 0..N-1 corresponding with the element with the largest absolute value.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1. Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0. These new interfaces provide additional functionality, as well as a new ILP64 interface. To use the new interfaces, define `ACCELERATE_NEW_LAPACK` before including the Accelerate or vecLib headers. For ILP64 interfaces, also define `ACCELERATE_LAPACK_ILP64`. For Swift projects, specify `ACCELERATE_NEW_LAPACK=1` and `ACCELERATE_LAPACK_ILP64=1` as preprocessor macros in Xcode build settings under Apple Clang - Preprocessing \> Preprocessor Macros.

## See Also

### General functions

- [SetBLASParamErrorProc](setblasparamerrorproc.md): Sets an error handler function.
- [cblas_errprn](cblas_errprn.md): Prints an error message.
- [cblas_xerbla](cblas_xerbla.md): The default error handler for BLAS routines.
- [cblas_icamax](cblas_icamax%28______%29.md): Returns the index of the element with the largest absolute value in a vector (single-precision complex).
- [cblas_idamax](cblas_idamax%28______%29.md): Returns the index of the element with the largest absolute value in a vector (double-precision).
- [cblas_izamax](cblas_izamax%28______%29.md): Returns the index of the element with the largest absolute value in a vector (double-precision complex).
