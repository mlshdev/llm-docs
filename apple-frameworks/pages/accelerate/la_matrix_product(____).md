> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/la_matrix_product(_:_:)](https://developer.apple.com/documentation/accelerate/la_matrix_product(_:_:))

# la_matrix_product(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```swift
func la_matrix_product(_ matrix_left: la_object_t, _ matrix_right: la_object_t) -> la_object_t
```

<a id="discussion"></a>

## Discussion

Compute a matrix product.

Left splat operands are treated as 1 x rows(matrix_right) vectors and right splat operands are treated as cols(matrix_left) x 1 vectors.

For convenience, in certain situations vector operands may be implicitly transposed.  Specifically,

If cols(matrix_left) == rows(matrix_right) rows(matrix_left) x cols(matrix_right) = matrix_left \* matrix_right Else if cols(matrix_left) == 1 and rows(matrix_left) == rows(matrix_right) 1 x cols(matrix_right) = transpose(matrix_left) \* matrix_right Else if rows(matrix_right) == 1 and cols(matrix_left) == cols(matrix_right) rows(matrix_left) x 1 = matrix_left \* transpose(matrix_right) Else result has the status LA_DIMENSION_MISMATCH_ERROR.

If either operand is not a vector or matrix or splat, or if both operands are splats, the result has the status LA_INVALID_PARAMETER_ERROR.

Otherwise the result is a matrix with 1 row if matrix_left is vector or splat and rows(matrix_left) otherwise, and 1 column if matrix_right is vector or splat and cols(matrix_right) otherwise.

If cols(matrix_left) == rows(matrix_right), the i,jth element of the matrix is: sum\_{k=0…cols(matrix_left)} matrix_left\[i,k\] \* matrix_right\[k,j\] If cols(matrix_left) == 1 and rows(matrix_left) == rows(matrix_right), the 0,jth element of matrix is: sum\_{k=0…rows(matrix_right)} matrix_left\[k,0\] \* matrix_right\[k,j\] If rows(matrix_right) == 1 and cols(matrix_left) == cols(matrix_right), the i,0th element of matrix is: sum\_{k=0…cols(matrix_left)} matrix_left\[i,k\] \* matrix_right\[0,k\]

## See Also

### Functions

- [caxpy\_(\_:\_:\_:\_:\_:\_:)](caxpy_%28____________%29.md)
- [ccopy\_(\_:\_:\_:\_:\_:)](ccopy_%28__________%29.md)
- [cdotc\_(\_:\_:\_:\_:\_:\_:)](cdotc_%28____________%29.md)
- [cdotu\_(\_:\_:\_:\_:\_:\_:)](cdotu_%28____________%29.md)
- [cgbmv\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgbmv_%28__________________________%29.md)
- [cgemm\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgemm_%28__________________________%29.md)
- [cgemv\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgemv_%28______________________%29.md)
- [cgerc\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgerc_%28__________________%29.md)
- [cgeru\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgeru_%28__________________%29.md)
- [chbmv\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](chbmv_%28______________________%29.md)
- [chemm\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](chemm_%28________________________%29.md)
- [chemv\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](chemv_%28____________________%29.md)
- [cher2\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cher2_%28__________________%29.md)
- [cher2k\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cher2k_%28________________________%29.md)
- [cher\_(\_:\_:\_:\_:\_:\_:\_:)](cher_%28______________%29.md)

# la_matrix_product (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```objectivec
extern la_object_tla_matrix_product(la_object_t matrix_left, la_object_t matrix_right);
```

<a id="discussion"></a>

## Discussion

Compute a matrix product.

Left splat operands are treated as 1 x rows(matrix_right) vectors and right splat operands are treated as cols(matrix_left) x 1 vectors.

For convenience, in certain situations vector operands may be implicitly transposed.  Specifically,

If cols(matrix_left) == rows(matrix_right) rows(matrix_left) x cols(matrix_right) = matrix_left \* matrix_right Else if cols(matrix_left) == 1 and rows(matrix_left) == rows(matrix_right) 1 x cols(matrix_right) = transpose(matrix_left) \* matrix_right Else if rows(matrix_right) == 1 and cols(matrix_left) == cols(matrix_right) rows(matrix_left) x 1 = matrix_left \* transpose(matrix_right) Else result has the status LA_DIMENSION_MISMATCH_ERROR.

If either operand is not a vector or matrix or splat, or if both operands are splats, the result has the status LA_INVALID_PARAMETER_ERROR.

Otherwise the result is a matrix with 1 row if matrix_left is vector or splat and rows(matrix_left) otherwise, and 1 column if matrix_right is vector or splat and cols(matrix_right) otherwise.

If cols(matrix_left) == rows(matrix_right), the i,jth element of the matrix is: sum\_{k=0…cols(matrix_left)} matrix_left\[i,k\] \* matrix_right\[k,j\] If cols(matrix_left) == 1 and rows(matrix_left) == rows(matrix_right), the 0,jth element of matrix is: sum\_{k=0…rows(matrix_right)} matrix_left\[k,0\] \* matrix_right\[k,j\] If rows(matrix_right) == 1 and cols(matrix_left) == cols(matrix_right), the i,0th element of matrix is: sum\_{k=0…cols(matrix_left)} matrix_left\[i,k\] \* matrix_right\[0,k\]

## See Also

### Functions

- [caxpy\_](caxpy_%28____________%29.md)
- [ccopy\_](ccopy_%28__________%29.md)
- [cdotc\_](cdotc_%28____________%29.md)
- [cdotu\_](cdotu_%28____________%29.md)
- [cgbmv\_](cgbmv_%28__________________________%29.md)
- [cgemm\_](cgemm_%28__________________________%29.md)
- [cgemv\_](cgemv_%28______________________%29.md)
- [cgerc\_](cgerc_%28__________________%29.md)
- [cgeru\_](cgeru_%28__________________%29.md)
- [chbmv\_](chbmv_%28______________________%29.md)
- [chemm\_](chemm_%28________________________%29.md)
- [chemv\_](chemv_%28____________________%29.md)
- [cher2\_](cher2_%28__________________%29.md)
- [cher2k\_](cher2k_%28________________________%29.md)
- [cher\_](cher_%28______________%29.md)
