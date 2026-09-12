> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/la_vector_from_matrix_diagonal(_:_:)](https://developer.apple.com/documentation/accelerate/la_vector_from_matrix_diagonal(_:_:))

# la_vector_from_matrix_diagonal(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

Creates a vector from the specified diagonal of the matrix.

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```swift
func la_vector_from_matrix_diagonal(_ matrix: la_object_t, _ matrix_diagonal: la_index_t) -> la_object_t
```

## Parameters

- `matrix`: Matrix from which to create the vector.
- `matrix_diagonal`: The index of the diagonal to create the vector from.

<a id="return-value"></a>

## Return Value

The resulting vector is a length x 1 vector where length is `min(rows(matrix),cols(matrix)-abs(matrix_diagonal)`

<a id="discussion"></a>

## Discussion

Creates a vector from the specified diagonal of the matrix.  If the value for `matrix_diagonal` is less than zero and `abs(matrix_diagonal) > rows(matrix)-1`, or if `matrix_diagonal` is greater than zero and `matrix_diagonal >  cols(matrix)-1`, `LA_INVALID_PARAMETER_ERROR` is returned.

If matrix is a splat, `LA_INVALID_PARAMETER_ERROR` is returned.

Always returns a `vector_length x 1` vector.

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

# la_vector_from_matrix_diagonal (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

Creates a vector from the specified diagonal of the matrix.

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```objectivec
extern la_object_tla_vector_from_matrix_diagonal(la_object_t matrix, la_index_t matrix_diagonal);
```

## Parameters

- `matrix`: Matrix from which to create the vector.
- `matrix_diagonal`: The index of the diagonal to create the vector from.

<a id="return-value"></a>

## Return Value

The resulting vector is a length x 1 vector where length is `min(rows(matrix),cols(matrix)-abs(matrix_diagonal)`

<a id="discussion"></a>

## Discussion

Creates a vector from the specified diagonal of the matrix.  If the value for `matrix_diagonal` is less than zero and `abs(matrix_diagonal) > rows(matrix)-1`, or if `matrix_diagonal` is greater than zero and `matrix_diagonal >  cols(matrix)-1`, `LA_INVALID_PARAMETER_ERROR` is returned.

If matrix is a splat, `LA_INVALID_PARAMETER_ERROR` is returned.

Always returns a `vector_length x 1` vector.

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
