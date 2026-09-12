> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanagerdelegate](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate)

# CLLocationManagerDelegate (Swift)

**Framework:** Core Location  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The methods you use to receive events from an associated location-manager object.

## Declaration

```swift
protocol CLLocationManagerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The location manager calls its delegate’s methods to report location-related events to your app. Implement this protocol in an app-specific object and use the methods to update your app. For example, you might use the current location to update the user’s position on a map or you might return search results relevant only to the user’s current location.

> **Important**

>  Always implement the methods for handling any potential failures in addition to the methods for receiving location-related data.

Assign your delegate object to the [delegate](cllocationmanager/delegate.md) property of the [CLLocationManager](cllocationmanager.md) object before starting any services. Core Location may report a cached value to your delegate immediately after you start the service, followed by a more current value later. Check the time stamp of any data objects you receive before using them.

Core Location calls the methods of your delegate object on the runloop from the thread on which you initialized [CLLocationManager](cllocationmanager.md). That thread must itself have an active run loop, like the one found in your app’s main thread.

## Topics

### Responding to authorization changes

- [locationManagerDidChangeAuthorization(\_:)](cllocationmanagerdelegate/locationmanagerdidchangeauthorization%28__%29.md): Tells the delegate when the app creates the location manager and when the authorization status changes.
- [locationManager(\_:didChangeAuthorization:)](cllocationmanagerdelegate/locationmanager%28__didchangeauthorization_%29.md): Deprecated. Tells the delegate its authorization status when the app creates the location manager and when the authorization status changes.

### Handling errors

- [locationManager(\_:didFailWithError:)](cllocationmanagerdelegate/locationmanager%28__didfailwitherror_%29.md): Tells the delegate that the location manager was unable to retrieve a location value.

### Receiving location updates

- [locationManager(\_:didUpdateLocations:)](cllocationmanagerdelegate/locationmanager%28__didupdatelocations_%29.md): Tells the delegate that new location data is available.
- [locationManager(\_:didUpdateTo:from:)](cllocationmanagerdelegate/locationmanager%28__didupdateto_from_%29.md): Deprecated. Tells the delegate that a new location value is available.
- [locationManager(\_:didFinishDeferredUpdatesWithError:)](cllocationmanagerdelegate/locationmanager%28__didfinishdeferredupdateswitherror_%29.md): Tells the delegate that updates will no longer be deferred.

### Pausing location updates

- [locationManagerDidPauseLocationUpdates(\_:)](cllocationmanagerdelegate/locationmanagerdidpauselocationupdates%28__%29.md): Tells the delegate that location updates were paused.
- [locationManagerDidResumeLocationUpdates(\_:)](cllocationmanagerdelegate/locationmanagerdidresumelocationupdates%28__%29.md): Tells the delegate that the delivery of location updates has resumed.

### Receiving visit updates

- [locationManager(\_:didVisit:)](cllocationmanagerdelegate/locationmanager%28__didvisit_%29.md): Tells the delegate that a new visit-related event was received.

### Receiving heading updates

- [locationManager(\_:didUpdateHeading:)](cllocationmanagerdelegate/locationmanager%28__didupdateheading_%29.md): Tells the delegate that the location manager received updated heading information.
- [locationManagerShouldDisplayHeadingCalibration(\_:)](cllocationmanagerdelegate/locationmanagershoulddisplayheadingcalibration%28__%29.md): Asks the delegate whether the heading calibration alert should be displayed.

### Receiving region-related updates

- [locationManager(\_:didEnterRegion:)](cllocationmanagerdelegate/locationmanager%28__didenterregion_%29.md): Tells the delegate that the user entered the specified region.
- [locationManager(\_:didExitRegion:)](cllocationmanagerdelegate/locationmanager%28__didexitregion_%29.md): Tells the delegate that the user left the specified region.
- [locationManager(\_:didDetermineState:for:)](cllocationmanagerdelegate/locationmanager%28__diddeterminestate_for_%29.md): Tells the delegate about the state of the specified region.
- [locationManager(\_:monitoringDidFailFor:withError:)](cllocationmanagerdelegate/locationmanager%28__monitoringdidfailfor_witherror_%29.md): Tells the delegate that a region monitoring error occurred.
- [locationManager(\_:didStartMonitoringFor:)](cllocationmanagerdelegate/locationmanager%28__didstartmonitoringfor_%29.md): Tells the delegate that a new region is being monitored.
- [CLRegionState](clregionstate.md): Constants that reflect the relationship of the current location to the region boundaries.

### Receiving beacon-related updates

- [locationManager(\_:didRange:satisfying:)](cllocationmanagerdelegate/locationmanager%28__didrange_satisfying_%29.md): Tells the delegate that the location manager detected at least one beacon that satisfies the provided constraint.
- [locationManager(\_:didFailRangingFor:error:)](cllocationmanagerdelegate/locationmanager%28__didfailrangingfor_error_%29.md): Tells the delegate that the location manager couldn’t detect any beacons that satisfy the provided constraint.
- [locationManager(\_:didRangeBeacons:in:)](cllocationmanagerdelegate/locationmanager%28__didrangebeacons_in_%29.md): Deprecated. Tells the delegate that one or more beacons are in range.
- [locationManager(\_:rangingBeaconsDidFailFor:withError:)](cllocationmanagerdelegate/locationmanager%28__rangingbeaconsdidfailfor_witherror_%29.md): Deprecated. Tells the delegate that an error occurred while gathering ranging information for a set of beacons.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Receiving data from location services

- [delegate](cllocationmanager/delegate.md): The delegate object to receive update events.

# CLLocationManagerDelegate (Objective-C)

**Framework:** Core Location  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The methods you use to receive events from an associated location-manager object.

## Declaration

```objectivec
@protocol CLLocationManagerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The location manager calls its delegate’s methods to report location-related events to your app. Implement this protocol in an app-specific object and use the methods to update your app. For example, you might use the current location to update the user’s position on a map or you might return search results relevant only to the user’s current location.

> **Important**

>  Always implement the methods for handling any potential failures in addition to the methods for receiving location-related data.

Assign your delegate object to the [delegate](cllocationmanager/delegate.md) property of the [CLLocationManager](cllocationmanager.md) object before starting any services. Core Location may report a cached value to your delegate immediately after you start the service, followed by a more current value later. Check the time stamp of any data objects you receive before using them.

Core Location calls the methods of your delegate object on the runloop from the thread on which you initialized [CLLocationManager](cllocationmanager.md). That thread must itself have an active run loop, like the one found in your app’s main thread.

## Topics

### Responding to authorization changes

- [locationManagerDidChangeAuthorization:](cllocationmanagerdelegate/locationmanagerdidchangeauthorization%28__%29.md): Tells the delegate when the app creates the location manager and when the authorization status changes.
- [locationManager:didChangeAuthorizationStatus:](cllocationmanagerdelegate/locationmanager%28__didchangeauthorization_%29.md): Deprecated. Tells the delegate its authorization status when the app creates the location manager and when the authorization status changes.

### Handling errors

- [locationManager:didFailWithError:](cllocationmanagerdelegate/locationmanager%28__didfailwitherror_%29.md): Tells the delegate that the location manager was unable to retrieve a location value.

### Receiving location updates

- [locationManager:didUpdateLocations:](cllocationmanagerdelegate/locationmanager%28__didupdatelocations_%29.md): Tells the delegate that new location data is available.
- [locationManager:didUpdateToLocation:fromLocation:](cllocationmanagerdelegate/locationmanager%28__didupdateto_from_%29.md): Deprecated. Tells the delegate that a new location value is available.
- [locationManager:didFinishDeferredUpdatesWithError:](cllocationmanagerdelegate/locationmanager%28__didfinishdeferredupdateswitherror_%29.md): Tells the delegate that updates will no longer be deferred.

### Pausing location updates

- [locationManagerDidPauseLocationUpdates:](cllocationmanagerdelegate/locationmanagerdidpauselocationupdates%28__%29.md): Tells the delegate that location updates were paused.
- [locationManagerDidResumeLocationUpdates:](cllocationmanagerdelegate/locationmanagerdidresumelocationupdates%28__%29.md): Tells the delegate that the delivery of location updates has resumed.

### Receiving visit updates

- [locationManager:didVisit:](cllocationmanagerdelegate/locationmanager%28__didvisit_%29.md): Tells the delegate that a new visit-related event was received.

### Receiving heading updates

- [locationManager:didUpdateHeading:](cllocationmanagerdelegate/locationmanager%28__didupdateheading_%29.md): Tells the delegate that the location manager received updated heading information.
- [locationManagerShouldDisplayHeadingCalibration:](cllocationmanagerdelegate/locationmanagershoulddisplayheadingcalibration%28__%29.md): Asks the delegate whether the heading calibration alert should be displayed.

### Receiving region-related updates

- [locationManager:didEnterRegion:](cllocationmanagerdelegate/locationmanager%28__didenterregion_%29.md): Tells the delegate that the user entered the specified region.
- [locationManager:didExitRegion:](cllocationmanagerdelegate/locationmanager%28__didexitregion_%29.md): Tells the delegate that the user left the specified region.
- [locationManager:didDetermineState:forRegion:](cllocationmanagerdelegate/locationmanager%28__diddeterminestate_for_%29.md): Tells the delegate about the state of the specified region.
- [locationManager:monitoringDidFailForRegion:withError:](cllocationmanagerdelegate/locationmanager%28__monitoringdidfailfor_witherror_%29.md): Tells the delegate that a region monitoring error occurred.
- [locationManager:didStartMonitoringForRegion:](cllocationmanagerdelegate/locationmanager%28__didstartmonitoringfor_%29.md): Tells the delegate that a new region is being monitored.
- [CLRegionState](clregionstate.md): Constants that reflect the relationship of the current location to the region boundaries.

### Receiving beacon-related updates

- [locationManager:didRangeBeacons:satisfyingConstraint:](cllocationmanagerdelegate/locationmanager%28__didrange_satisfying_%29.md): Tells the delegate that the location manager detected at least one beacon that satisfies the provided constraint.
- [locationManager:didFailRangingBeaconsForConstraint:error:](cllocationmanagerdelegate/locationmanager%28__didfailrangingfor_error_%29.md): Tells the delegate that the location manager couldn’t detect any beacons that satisfy the provided constraint.
- [locationManager:didRangeBeacons:inRegion:](cllocationmanagerdelegate/locationmanager%28__didrangebeacons_in_%29.md): Deprecated. Tells the delegate that one or more beacons are in range.
- [locationManager:rangingBeaconsDidFailForRegion:withError:](cllocationmanagerdelegate/locationmanager%28__rangingbeaconsdidfailfor_witherror_%29.md): Deprecated. Tells the delegate that an error occurred while gathering ranging information for a set of beacons.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Receiving data from location services

- [delegate](cllocationmanager/delegate.md): The delegate object to receive update events.
