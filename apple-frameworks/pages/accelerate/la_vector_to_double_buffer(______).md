> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/la_vector_to_double_buffer(_:_:_:)](https://developer.apple.com/documentation/accelerate/la_vector_to_double_buffer(_:_:_:))

# la_vector_to_double_buffer(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```swift
func la_vector_to_double_buffer(_ buffer: UnsafeMutablePointer<Double>, _ buffer_stride: la_index_t, _ vector: la_object_t) -> la_status_t
```

## Parameters

- `buffer`: Pointer to the destination buffer.
- `buffer_stride`: Offset (in doubles) between the destinations of consecutive vector elements in the buffer.  Negative strides are not supported (you can get the same effect by reversing the vector before calling this function).
- `vector`: The vector to store.

<a id="return-value"></a>

## Return Value

If vector is a valid vector object, its status is returned.  Otherwise the return value is LA_INVALID_PARAMETER_ERROR.

<a id="discussion"></a>

## Discussion

Stores the elements of a vector to a buffer.

The buffer must be large enough to accomodate the vector being stored. Specifically, it must have have sufficient space to hold

buffer_stride\*(la_vector_length(vector)-1) + 1

double elements.  Real usage in the most common case (stride = 1) will look roughly like this:

la_count_t length = la_vector_length(vector); if (!length) { // an error occured. } double \*buffer = malloc(length \* sizeof buffer\[0\]); la_vector_to_double_buffer(buffer, 1, vector);

This function supports storing the contents of a vector, or a matrix that has only one row or only one column.  If the object satisfies those requirements, and it does not have an error status, its contents are stored to the buffer.  If it has an error status, NaNs are stored to the buffer.

If the object is not a matrix or vector, or if it is a matrix with both dimensions larger than one, nothing is written to the buffer and LA_INVALID_PARAMETER_ERROR is returned.

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

# la_vector_to_double_buffer (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```objectivec
extern la_status_t la_vector_to_double_buffer(double *buffer, la_index_t buffer_stride, la_object_t vector);
```

## Parameters

- `buffer`: Pointer to the destination buffer.
- `buffer_stride`: Offset (in doubles) between the destinations of consecutive vector elements in the buffer.  Negative strides are not supported (you can get the same effect by reversing the vector before calling this function).
- `vector`: The vector to store.

<a id="return-value"></a>

## Return Value

If vector is a valid vector object, its status is returned.  Otherwise the return value is LA_INVALID_PARAMETER_ERROR.

<a id="discussion"></a>

## Discussion

Stores the elements of a vector to a buffer.

The buffer must be large enough to accomodate the vector being stored. Specifically, it must have have sufficient space to hold

buffer_stride\*(la_vector_length(vector)-1) + 1

double elements.  Real usage in the most common case (stride = 1) will look roughly like this:

la_count_t length = la_vector_length(vector); if (!length) { // an error occured. } double \*buffer = malloc(length \* sizeof buffer\[0\]); la_vector_to_double_buffer(buffer, 1, vector);

This function supports storing the contents of a vector, or a matrix that has only one row or only one column.  If the object satisfies those requirements, and it does not have an error status, its contents are stored to the buffer.  If it has an error status, NaNs are stored to the buffer.

If the object is not a matrix or vector, or if it is a matrix with both dimensions larger than one, nothing is written to the buffer and LA_INVALID_PARAMETER_ERROR is returned.

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
