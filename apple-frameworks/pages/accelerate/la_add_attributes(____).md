> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/la_add_attributes(_:_:)](https://developer.apple.com/documentation/accelerate/la_add_attributes(_:_:))

# la_add_attributes(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```swift
func la_add_attributes(_ object: la_object_t, _ attributes: la_attribute_t)
```

## Parameters

- `object`: The object that will have its attributes modified.
- `attributes`: Attributes which are to be added to the object’s existing attributes to create its new set of attributes.  This value should be constructed by or’ing together LA_ATTRIBUTE\_\* constants.

<a id="discussion"></a>

## Discussion

Add attributes to an la_object_t object.

This operation does not remove any existing attributes from the LinearAlgebra object, though it is possible that some attributes will override others (if so, this will be documented in the discussion of those attributes above).
Following this function call, the specified object has all of the attributes it had before the call, plus any new attributes specified by the second parameter.

Adding an attribute that the object already has does not change the object.

This function is not reentrant or thread-safe.  Attempting to add or remove attributes from multiple threads will have unpredictable results.

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

# la_add_attributes (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```objectivec
extern void la_add_attributes(la_object_t object, la_attribute_t attributes);
```

## Parameters

- `object`: The object that will have its attributes modified.
- `attributes`: Attributes which are to be added to the object’s existing attributes to create its new set of attributes.  This value should be constructed by or’ing together LA_ATTRIBUTE\_\* constants.

<a id="discussion"></a>

## Discussion

Add attributes to an la_object_t object.

This operation does not remove any existing attributes from the LinearAlgebra object, though it is possible that some attributes will override others (if so, this will be documented in the discussion of those attributes above).
Following this function call, the specified object has all of the attributes it had before the call, plus any new attributes specified by the second parameter.

Adding an attribute that the object already has does not change the object.

This function is not reentrant or thread-safe.  Attempting to add or remove attributes from multiple threads will have unpredictable results.

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
