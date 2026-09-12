> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/la_matrix_to_float_buffer(_:_:_:)](https://developer.apple.com/documentation/accelerate/la_matrix_to_float_buffer(_:_:_:))

# la_matrix_to_float_buffer(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```swift
func la_matrix_to_float_buffer(_ buffer: UnsafeMutablePointer<Float>, _ buffer_row_stride: la_count_t, _ matrix: la_object_t) -> la_status_t
```

## Parameters

- `buffer`: Pointer to the destination buffer.
- `buffer_row_stride`: Offset (measured in floats) between the destinations of corresponding elements of consecutive rows of the matrix.  Must be positive.
- `matrix`: The matrix to store.

<a id="discussion"></a>

## Discussion

Stores the elements of a matrix to a buffer.

The buffer must be large enough to accomodate the matrix being stored. Specifically, it must have sufficient space to hold

buffer_row_stride\*(la_matrix_rows(matrix)-1) + la_matrix_cols(matrix)

float elements.

This function supports storing the contents of a vector as well as a matrix. A vector of length n will be interpreted as a rows(matrix) x cols(matrix) by this function.  If the object is a vector or matrix and does not have an error status, its contents are stored to the buffer.  If it has an error status, NaNs are stored to the buffer.

If the object is not a matrix or vector, nothing is written to the buffer and LA_INVALID_PARAMETER_ERROR is returned.

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

# la_matrix_to_float_buffer (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```objectivec
extern la_status_t la_matrix_to_float_buffer(float *buffer, la_count_t buffer_row_stride, la_object_t matrix);
```

## Parameters

- `buffer`: Pointer to the destination buffer.
- `buffer_row_stride`: Offset (measured in floats) between the destinations of corresponding elements of consecutive rows of the matrix.  Must be positive.
- `matrix`: The matrix to store.

<a id="discussion"></a>

## Discussion

Stores the elements of a matrix to a buffer.

The buffer must be large enough to accomodate the matrix being stored. Specifically, it must have sufficient space to hold

buffer_row_stride\*(la_matrix_rows(matrix)-1) + la_matrix_cols(matrix)

float elements.

This function supports storing the contents of a vector as well as a matrix. A vector of length n will be interpreted as a rows(matrix) x cols(matrix) by this function.  If the object is a vector or matrix and does not have an error status, its contents are stored to the buffer.  If it has an error status, NaNs are stored to the buffer.

If the object is not a matrix or vector, nothing is written to the buffer and LA_INVALID_PARAMETER_ERROR is returned.

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
