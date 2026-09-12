> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/la_status(_:)](https://developer.apple.com/documentation/accelerate/la_status(_:))

# la_status(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```swift
func la_status(_ object: la_object_t) -> la_status_t
```

## Parameters

- `object`: The object whose status is being requested.

<a id="return-value"></a>

## Return Value

The status of the supplied object.

<a id="discussion"></a>

## Discussion

Query the status of an la_object.

Returns the status of a LinearAlgebra object.  The status will be one of the codes defined in LinearAlgebra/base.h.  New status codes may be added in the future, but the following basic principle will continue to hold: zero indicates success, status codes greater than zero are warnings, and status codes less than zero are errors.  Thus, careful error handling might look like the following:

la_status_t status = la_status(result_object); if (status == LA_SUCCESS) { // Everything is copacetic.  Get your data from result_object. } else if (status \> 0) { // No errors occured, but the result does not have full accuracy due to // numerical considerations.  Here, you might re-compute the result using // a more careful or stable algorithm. } else { // An error occured.  Something is seriously amiss and you will need // to handle it however makes sense for your application. }

Note that errors and warnings are propagated.  In general, there is no need to check the status of each subcomputation.  Rather, the preferred idiom is to do a complete computation, then check to see if anything went wrong. Querying status may force evaluation of parts of your computation that might otherwise be deferred until their results were actually needed.

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

# la_status (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 8.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

> This API is deprecated, please use BLAS and LAPACK

## Declaration

```objectivec
extern la_status_t la_status(la_object_t object);
```

## Parameters

- `object`: The object whose status is being requested.

<a id="return-value"></a>

## Return Value

The status of the supplied object.

<a id="discussion"></a>

## Discussion

Query the status of an la_object.

Returns the status of a LinearAlgebra object.  The status will be one of the codes defined in LinearAlgebra/base.h.  New status codes may be added in the future, but the following basic principle will continue to hold: zero indicates success, status codes greater than zero are warnings, and status codes less than zero are errors.  Thus, careful error handling might look like the following:

la_status_t status = la_status(result_object); if (status == LA_SUCCESS) { // Everything is copacetic.  Get your data from result_object. } else if (status \> 0) { // No errors occured, but the result does not have full accuracy due to // numerical considerations.  Here, you might re-compute the result using // a more careful or stable algorithm. } else { // An error occured.  Something is seriously amiss and you will need // to handle it however makes sense for your application. }

Note that errors and warnings are propagated.  In general, there is no need to check the status of each subcomputation.  Rather, the preferred idiom is to do a complete computation, then check to see if anything went wrong. Querying status may force evaluation of parts of your computation that might otherwise be deferred until their results were actually needed.

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
