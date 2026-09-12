> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/la_diagonal_matrix_from_vector(_:_:)](https://developer.apple.com/documentation/accelerate/la_diagonal_matrix_from_vector(_:_:))

# la_diagonal_matrix_from_vector(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```swift
func la_diagonal_matrix_from_vector(_ vector: la_object_t, _ matrix_diagonal: la_index_t) -> la_object_t
```

## Parameters

- `vector`: Vector providing the data for the non-zero diagonal.
- `matrix_diagonal`: The index of the non-zero diagonal.

<a id="discussion"></a>

## Discussion

Create a matrix with a specified diagonal provided by a vector, and zeros in all the other entries.

Creates a new matrix with entries on the specified diagonal taken from the vector argument, and zeros in the other entries.  The matrix is square, and has size length(vector) + abs(matrix_diagonal).

If matrix_diagonal is zero, the main diagonal is set.  If matrix_diagonal is +1, the first superdiagonal is set.  If matrix_diagonal is -2, the second subdiagonal is set.

The diagonal may be specified by a vector or by a matrix that has only one row or only one column.  If the provided object is not a vector or matrix, or is a matrix with both dimensions larger than one, the returned object will have status LA_INVALID_PARAMETER_ERROR.

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

# la_diagonal_matrix_from_vector (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```objectivec
extern la_object_tla_diagonal_matrix_from_vector(la_object_t vector, la_index_t matrix_diagonal);
```

## Parameters

- `vector`: Vector providing the data for the non-zero diagonal.
- `matrix_diagonal`: The index of the non-zero diagonal.

<a id="discussion"></a>

## Discussion

Create a matrix with a specified diagonal provided by a vector, and zeros in all the other entries.

Creates a new matrix with entries on the specified diagonal taken from the vector argument, and zeros in the other entries.  The matrix is square, and has size length(vector) + abs(matrix_diagonal).

If matrix_diagonal is zero, the main diagonal is set.  If matrix_diagonal is +1, the first superdiagonal is set.  If matrix_diagonal is -2, the second subdiagonal is set.

The diagonal may be specified by a vector or by a matrix that has only one row or only one column.  If the provided object is not a vector or matrix, or is a matrix with both dimensions larger than one, the returned object will have status LA_INVALID_PARAMETER_ERROR.

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
