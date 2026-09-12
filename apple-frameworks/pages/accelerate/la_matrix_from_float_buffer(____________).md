> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/la_matrix_from_float_buffer(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/la_matrix_from_float_buffer(_:_:_:_:_:_:))

# la_matrix_from_float_buffer(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```swift
func la_matrix_from_float_buffer(_ buffer: UnsafePointer<Float>, _ matrix_rows: la_count_t, _ matrix_cols: la_count_t, _ matrix_row_stride: la_count_t, _ matrix_hint: la_hint_t, _ attributes: la_attribute_t) -> la_object_t
```

## Parameters

- `buffer`: Pointer to float data providing the elements of the matrix.
- `matrix_rows`: The number of rows in the matrix.
- `matrix_cols`: The number of columns in the matrix.
- `matrix_row_stride`: The offset in the buffer (measured in floats) between corresponding elements in consecutive rows of the matrix.  Must be positive.
- `matrix_hint`: Flags describing special matrix structures.
- `attributes`: Attributes to attach to the new la_object_t object.  Pass LA_DEFAULT_ATTRIBUTES to create a normal object.

<a id="return-value"></a>

## Return Value

A new la_object_t object representing the matrix.

<a id="discussion"></a>

## Discussion

Create a matrix using data from a buffer of floats.  Ownership of the buffer remains in control of the caller.

This function creates an object representing a matrix whose entries are copied out of the supplied buffer of floats.  Negative or zero strides are not supported by this function (but note that you can reverse the rows or columns using the la_matrix_slice function defined below).

This routine assumes that the elements of the matrix are stored in the buffer in row-major order.  If you need to work with data that is in column-major order, you can do that as follows:

1. Use this routine to create a matrix object, but pass the number of columns in your matrix for the matrix_rows parameter and vice-versa.  For the matrix_row_stride parameter, pass the column stride of your matrix.
2. Make a new matrix transpose object from the object created in step 1.  The resulting object represents the matrix that you want to work with.

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

# la_matrix_from_float_buffer (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```objectivec
extern la_object_tla_matrix_from_float_buffer(const float *buffer, la_count_t matrix_rows, la_count_t matrix_cols, la_count_t matrix_row_stride, la_hint_t matrix_hint, la_attribute_t attributes);
```

## Parameters

- `buffer`: Pointer to float data providing the elements of the matrix.
- `matrix_rows`: The number of rows in the matrix.
- `matrix_cols`: The number of columns in the matrix.
- `matrix_row_stride`: The offset in the buffer (measured in floats) between corresponding elements in consecutive rows of the matrix.  Must be positive.
- `matrix_hint`: Flags describing special matrix structures.
- `attributes`: Attributes to attach to the new la_object_t object.  Pass LA_DEFAULT_ATTRIBUTES to create a normal object.

<a id="return-value"></a>

## Return Value

A new la_object_t object representing the matrix.

<a id="discussion"></a>

## Discussion

Create a matrix using data from a buffer of floats.  Ownership of the buffer remains in control of the caller.

This function creates an object representing a matrix whose entries are copied out of the supplied buffer of floats.  Negative or zero strides are not supported by this function (but note that you can reverse the rows or columns using the la_matrix_slice function defined below).

This routine assumes that the elements of the matrix are stored in the buffer in row-major order.  If you need to work with data that is in column-major order, you can do that as follows:

1. Use this routine to create a matrix object, but pass the number of columns in your matrix for the matrix_rows parameter and vice-versa.  For the matrix_row_stride parameter, pass the column stride of your matrix.
2. Make a new matrix transpose object from the object created in step 1.  The resulting object represents the matrix that you want to work with.

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
