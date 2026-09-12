> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clerror-swift.struct/code](https://developer.apple.com/documentation/corelocation/clerror-swift.struct/code)

# CLError.Code (Swift)

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Error codes returned by the location manager object.

## Declaration

```swift
enum Code
```

<a id="overview"></a>

## Overview

Instances of [NSError](../../foundation/nserror.md) object delivered to the delegate use these error codes for the [code](../../foundation/nserror/code.md) property of the error object.

## Topics

### Getting general errors

- [CLError.Code.locationUnknown](code/locationunknown.md): A constant that indicates the location manager was unable to obtain a location value right now.
- [CLError.Code.denied](code/denied.md): A constant that indicates the user denied access to the location service.
- [CLError.Code.promptDeclined](code/promptdeclined.md): A constant that indicates the user didn’t grant the requested temporary authorization.
- [CLError.Code.network](code/network.md): A constant that indicates the network was unavailable or a network error occurred.
- [CLError.Code.headingFailure](code/headingfailure.md): A constant that indicates the location manager can’t determine the heading.
- [CLError.Code.rangingUnavailable](code/rangingunavailable.md): A constant that indicates ranging is disabled.
- [CLError.Code.rangingFailure](code/rangingfailure.md): A constant that indicates a general ranging error occurred.

### Getting region monitoring errors

- [CLError.Code.regionMonitoringDenied](code/regionmonitoringdenied.md): A constant that indicates the user denied access to the region monitoring service.
- [CLError.Code.regionMonitoringFailure](code/regionmonitoringfailure.md): A constant that indicates the location manager failed to monitor a registered region.
- [CLError.Code.regionMonitoringSetupDelayed](code/regionmonitoringsetupdelayed.md): A constant that indicates Core Location failed to initialize the region monitoring feature.
- [CLError.Code.regionMonitoringResponseDelayed](code/regionmonitoringresponsedelayed.md): A constant that indicates Core Location will deliver events but they may be delayed.

### Getting geocoding errors

- [CLError.Code.geocodeCanceled](code/geocodecanceled.md): A constant that indicates the geocode request was canceled.
- [CLError.Code.geocodeFoundNoResult](code/geocodefoundnoresult.md): A constant that indicates the geocode request yielded no result.
- [CLError.Code.geocodeFoundPartialResult](code/geocodefoundpartialresult.md): A constant that indicates the geocode request yielded a partial result.

### Getting deferred location update errors

- [CLError.Code.deferredFailed](code/deferredfailed.md): A constant that indicates the location manager didn’t enter deferred mode for an unknown reason.
- [CLError.Code.deferredCanceled](code/deferredcanceled.md): A constant that indicates your app or the location manager canceled the request for deferred updates.
- [CLError.Code.deferredAccuracyTooLow](code/deferredaccuracytoolow.md): A constant that indicates deferred mode isn’t supported for the requested accuracy.
- [CLError.Code.deferredDistanceFiltered](code/deferreddistancefiltered.md): A constant that indicates deferred mode doesn’t support distance filters.
- [CLError.Code.deferredNotUpdatingLocation](code/deferrednotupdatinglocation.md): A constant that indicates the location manager didn’t enter deferred mode because location updates were already disabled or paused.

### Enumeration cases

- [CLError.Code.historicalLocationError](code/historicallocationerror.md)

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting general errors

- [locationUnknown](locationunknown.md): A constant that indicates the location manager was unable to obtain a location value right now.
- [denied](denied.md): A constant that indicates the user denied access to the location service.
- [promptDeclined](promptdeclined.md): A constant that indicates the user didn’t grant the requested temporary authorization.
- [network](network.md): A constant that indicates the network was unavailable or a network error occurred.
- [headingFailure](headingfailure.md): A constant that indicates the location manager can’t determine the heading.
- [rangingUnavailable](rangingunavailable.md): A constant that indicates ranging is disabled.
- [rangingFailure](rangingfailure.md): A constant that indicates a general ranging error occurred.

# CLError (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Error codes returned by the location manager object.

## Declaration

```objectivec
enum CLError : NSInteger;
```

<a id="overview"></a>

## Overview

Instances of [NSError](../../foundation/nserror.md) object delivered to the delegate use these error codes for the [code](../../foundation/nserror/code.md) property of the error object.

## Topics

### Getting general errors

- [kCLErrorLocationUnknown](code/locationunknown.md): A constant that indicates the location manager was unable to obtain a location value right now.
- [kCLErrorDenied](code/denied.md): A constant that indicates the user denied access to the location service.
- [kCLErrorPromptDeclined](code/promptdeclined.md): A constant that indicates the user didn’t grant the requested temporary authorization.
- [kCLErrorNetwork](code/network.md): A constant that indicates the network was unavailable or a network error occurred.
- [kCLErrorHeadingFailure](code/headingfailure.md): A constant that indicates the location manager can’t determine the heading.
- [kCLErrorRangingUnavailable](code/rangingunavailable.md): A constant that indicates ranging is disabled.
- [kCLErrorRangingFailure](code/rangingfailure.md): A constant that indicates a general ranging error occurred.

### Getting region monitoring errors

- [kCLErrorRegionMonitoringDenied](code/regionmonitoringdenied.md): A constant that indicates the user denied access to the region monitoring service.
- [kCLErrorRegionMonitoringFailure](code/regionmonitoringfailure.md): A constant that indicates the location manager failed to monitor a registered region.
- [kCLErrorRegionMonitoringSetupDelayed](code/regionmonitoringsetupdelayed.md): A constant that indicates Core Location failed to initialize the region monitoring feature.
- [kCLErrorRegionMonitoringResponseDelayed](code/regionmonitoringresponsedelayed.md): A constant that indicates Core Location will deliver events but they may be delayed.

### Getting geocoding errors

- [kCLErrorGeocodeCanceled](code/geocodecanceled.md): A constant that indicates the geocode request was canceled.
- [kCLErrorGeocodeFoundNoResult](code/geocodefoundnoresult.md): A constant that indicates the geocode request yielded no result.
- [kCLErrorGeocodeFoundPartialResult](code/geocodefoundpartialresult.md): A constant that indicates the geocode request yielded a partial result.

### Getting deferred location update errors

- [kCLErrorDeferredFailed](code/deferredfailed.md): A constant that indicates the location manager didn’t enter deferred mode for an unknown reason.
- [kCLErrorDeferredCanceled](code/deferredcanceled.md): A constant that indicates your app or the location manager canceled the request for deferred updates.
- [kCLErrorDeferredAccuracyTooLow](code/deferredaccuracytoolow.md): A constant that indicates deferred mode isn’t supported for the requested accuracy.
- [kCLErrorDeferredDistanceFiltered](code/deferreddistancefiltered.md): A constant that indicates deferred mode doesn’t support distance filters.
- [kCLErrorDeferredNotUpdatingLocation](code/deferrednotupdatinglocation.md): A constant that indicates the location manager didn’t enter deferred mode because location updates were already disabled or paused.

### Enumeration cases

- [kCLErrorHistoricalLocationError](code/historicallocationerror.md)
