> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/la_vector_slice(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/la_vector_slice(_:_:_:_:))

# la_vector_slice(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```swift
func la_vector_slice(_ vector: la_object_t, _ vector_first: la_index_t, _ vector_stride: la_index_t, _ slice_length: la_count_t) -> la_object_t
```

## Parameters

- `vector`: The vector to be sliced.
- `vector_first`: The index of the source vector element that will become the first element of the new slice vector.
- `vector_stride`: The offset in the source vector between elements that will be consecutive in the new slice vector.
- `slice_length`: The length of the resulting slice vector.

<a id="return-value"></a>

## Return Value

A new vector with length slice_length whose elements are taken from vector.

<a id="discussion"></a>

## Discussion

Create a slice of a vector.

The result object is the vector:

\[ vector\[vector_first\], vector\[vector_first+vector_stride\], … … , vector\[vector_first + (slice_length-1)\*vector_stride\] \]

Slices provide an efficient means to operate on subvectors and strides. These are lightweight objects that reference the storage of the vector from which they originate.  Creating a vector slice does not require any allocation beyond the object representing the slice, nor does it require copying.

This function supports slicing a vector, or a matrix that has only one row or only one column.  If the object is not a matrix or vector, or if it is a matrix with both dimensions larger than one, the returned object will have status LA_INVALID_PARAMETER_ERROR.

If the slice references indices that are less than zero or greater than or equal to the length of the vector, LA_SLICE_OUT_OF_BOUNDS_ERROR is returned.

Always return a vector with the same orientation as the input.  If input is vector_length x 1, output is vector_length x 1 and if input is 1 x vector_length, output is 1 x vector_length.

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

# la_vector_slice (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```objectivec
extern la_object_tla_vector_slice(la_object_t vector, la_index_t vector_first, la_index_t vector_stride, la_count_t slice_length);
```

## Parameters

- `vector`: The vector to be sliced.
- `vector_first`: The index of the source vector element that will become the first element of the new slice vector.
- `vector_stride`: The offset in the source vector between elements that will be consecutive in the new slice vector.
- `slice_length`: The length of the resulting slice vector.

<a id="return-value"></a>

## Return Value

A new vector with length slice_length whose elements are taken from vector.

<a id="discussion"></a>

## Discussion

Create a slice of a vector.

The result object is the vector:

\[ vector\[vector_first\], vector\[vector_first+vector_stride\], … … , vector\[vector_first + (slice_length-1)\*vector_stride\] \]

Slices provide an efficient means to operate on subvectors and strides. These are lightweight objects that reference the storage of the vector from which they originate.  Creating a vector slice does not require any allocation beyond the object representing the slice, nor does it require copying.

This function supports slicing a vector, or a matrix that has only one row or only one column.  If the object is not a matrix or vector, or if it is a matrix with both dimensions larger than one, the returned object will have status LA_INVALID_PARAMETER_ERROR.

If the slice references indices that are less than zero or greater than or equal to the length of the vector, LA_SLICE_OUT_OF_BOUNDS_ERROR is returned.

Always return a vector with the same orientation as the input.  If input is vector_length x 1, output is vector_length x 1 and if input is 1 x vector_length, output is 1 x vector_length.

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
