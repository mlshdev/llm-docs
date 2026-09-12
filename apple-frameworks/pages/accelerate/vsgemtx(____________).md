> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vsgemtx(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vsgemtx(_:_:_:_:_:_:))

# vSgemtx(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Forms the transpose of a matrix, multiplies it by a scalar and then by a vector, and adds the resulting vector to a second vector.

> Use cblas_sgemv instead

## Declaration

```swift
func vSgemtx(_ m: Int32, _ n: Int32, _ alpha: Float, _ a: UnsafePointer<vFloat>, _ x: UnsafePointer<vFloat>, _ y: UnsafeMutablePointer<vFloat>)
```

## Parameters

- `m`: Number of rows in `a`, and the length of vector `y`; must be a multiple of 4.
- `n`: Number of columns in `a`, and the length of vector `x`; must be a multiple of 4.
- `alpha`: Scalar multiplier for matrix `a`.
- `a`: `m` by `n` matrix with elements of type `float`.
- `x`: Vector with elements of type `float`.
- `y`: Destination vector with `n` elements of type `float`.

<a id="Discussion"></a>

## Discussion

The transpose of matrix `a` is multiplied by `alpha` and then by vector `x`; the resulting vector is added to vector `y`, and the results are stored in `y`.

## See Also

### Matrix-Vector Linear Algebra Functions (from vectorOps.h)

- [vSgemv(\_:\_:\_:\_:\_:\_:\_:\_:)](vsgemv%28________________%29.md): Deprecated. Multiplies a vector by a scalar. Multiplies a matrix by another scalar, then by a second vector, and adds the resulting vector to the first vector. This function can also perform the calculation with the transpose of the original matrix instead of the matrix itself. A selector parameter determines whether the transpose is used.
- [vSgemx(\_:\_:\_:\_:\_:\_:)](vsgemx%28____________%29.md): Deprecated. Multiplies a matrix by a scalar and then by a vector, and adds the resulting vector to a second vector.

# vSgemtx (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Forms the transpose of a matrix, multiplies it by a scalar and then by a vector, and adds the resulting vector to a second vector.

> Use cblas_sgemv instead

## Declaration

```objectivec
extern void vSgemtx(int32_t m, int32_t n, float alpha, const vFloat *a, const vFloat *x, vFloat *y);
```

## Parameters

- `m`: Number of rows in `a`, and the length of vector `y`; must be a multiple of 4.
- `n`: Number of columns in `a`, and the length of vector `x`; must be a multiple of 4.
- `alpha`: Scalar multiplier for matrix `a`.
- `a`: `m` by `n` matrix with elements of type `float`.
- `x`: Vector with elements of type `float`.
- `y`: Destination vector with `n` elements of type `float`.

<a id="Discussion"></a>

## Discussion

The transpose of matrix `a` is multiplied by `alpha` and then by vector `x`; the resulting vector is added to vector `y`, and the results are stored in `y`.

## See Also

### Matrix-Vector Linear Algebra Functions (from vectorOps.h)

- [vSgemv](vsgemv%28________________%29.md): Deprecated. Multiplies a vector by a scalar. Multiplies a matrix by another scalar, then by a second vector, and adds the resulting vector to the first vector. This function can also perform the calculation with the transpose of the original matrix instead of the matrix itself. A selector parameter determines whether the transpose is used.
- [vSgemx](vsgemx%28____________%29.md): Deprecated. Multiplies a matrix by a scalar and then by a vector, and adds the resulting vector to a second vector.
