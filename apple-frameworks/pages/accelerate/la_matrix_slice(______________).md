> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/la_matrix_slice(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/la_matrix_slice(_:_:_:_:_:_:_:))

# la_matrix_slice(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```swift
func la_matrix_slice(_ matrix: la_object_t, _ matrix_first_row: la_index_t, _ matrix_first_col: la_index_t, _ matrix_row_stride: la_index_t, _ matrix_col_stride: la_index_t, _ slice_rows: la_count_t, _ slice_cols: la_count_t) -> la_object_t
```

## Parameters

- `matrix`: The matrix to be sliced.
- `matrix_first_row`: The index of the row of the source matrix containing the first element of new slice matrix.
- `matrix_first_col`: The index of the column of the source matrix containing the first element of the slice matrix.
- `matrix_row_stride`: The offset in the source matrix between rows that will be consecutive in the slice matrix.
- `matrix_col_stride`: The offset in the source matrix between columns that will be consecutve in the slice matrix.
- `slice_rows`: The number of rows in the slice matrix.
- `slice_cols`: The number of columns in the slice matrix.

<a id="return-value"></a>

## Return Value

A new matrix with size slice_rows x slice_cols whose elements are taken from the source matrix.

<a id="discussion"></a>

## Discussion

Create a slice of a matrix.

The result object is the slice_rows x slice_cols matrix whose i,jth entry is:

matrix\[matrix_first_row + i*matrix_row_stride, matrix_first_col + j*matrix_col_stride\]

Slices provide an efficient means to operate on tiles and strides.  These are lightweight objects that reference the storage of the matrix from which they originate.  In most cases, creating a slice does not require any allocation beyond the object representing the slice, nor require copying.  In some less common cases, a copy may be required.

This function supports slicing a vector (interpreted as rows(matrix) x cols(matrix)) or a matrix.  If the object is not a matrix or vector, the returned object will have status LA_INVALID_PARAMETER_ERROR.

If the slice references indices that are less than zero or greater than or equal to the dimensions of the matrix, LA_SLICE_OUT_OF_BOUNDS_ERROR is returned.

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

# la_matrix_slice (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```objectivec
extern la_object_tla_matrix_slice(la_object_t matrix, la_index_t matrix_first_row, la_index_t matrix_first_col, la_index_t matrix_row_stride, la_index_t matrix_col_stride, la_count_t slice_rows, la_count_t slice_cols);
```

## Parameters

- `matrix`: The matrix to be sliced.
- `matrix_first_row`: The index of the row of the source matrix containing the first element of new slice matrix.
- `matrix_first_col`: The index of the column of the source matrix containing the first element of the slice matrix.
- `matrix_row_stride`: The offset in the source matrix between rows that will be consecutive in the slice matrix.
- `matrix_col_stride`: The offset in the source matrix between columns that will be consecutve in the slice matrix.
- `slice_rows`: The number of rows in the slice matrix.
- `slice_cols`: The number of columns in the slice matrix.

<a id="return-value"></a>

## Return Value

A new matrix with size slice_rows x slice_cols whose elements are taken from the source matrix.

<a id="discussion"></a>

## Discussion

Create a slice of a matrix.

The result object is the slice_rows x slice_cols matrix whose i,jth entry is:

matrix\[matrix_first_row + i*matrix_row_stride, matrix_first_col + j*matrix_col_stride\]

Slices provide an efficient means to operate on tiles and strides.  These are lightweight objects that reference the storage of the matrix from which they originate.  In most cases, creating a slice does not require any allocation beyond the object representing the slice, nor require copying.  In some less common cases, a copy may be required.

This function supports slicing a vector (interpreted as rows(matrix) x cols(matrix)) or a matrix.  If the object is not a matrix or vector, the returned object will have status LA_INVALID_PARAMETER_ERROR.

If the slice references indices that are less than zero or greater than or equal to the dimensions of the matrix, LA_SLICE_OUT_OF_BOUNDS_ERROR is returned.

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
