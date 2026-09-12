> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/authorizationstatus()](https://developer.apple.com/documentation/corelocation/cllocationmanager/authorizationstatus())

# authorizationStatus() (Swift)

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 4.2+ (deprecated in 14.0) · iPadOS 4.2+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.7+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

Returns the app’s authorization status for using location services.

> Use the [authorizationStatus](authorizationstatus-swift.property.md) instance property with [locationManagerDidChangeAuthorization(\_:)](../cllocationmanagerdelegate/locationmanagerdidchangeauthorization%28__%29.md) instead.

## Declaration

```swift
class func authorizationStatus() -> CLAuthorizationStatus
```

<a id="return-value"></a>

## Return Value

A value indicating whether the app is authorized to use location services.

<a id="Discussion"></a>

## Discussion

The system is guaranteed to call the delegate method with the app’s initial authorization state and all authorization status changes.

The system manages the authorization status of a given app according to several factors. Users must authorize the app to use location services explicitly, and location services must be enabled in Settings \> Privacy. See [Choosing the  Location Services Authorization to Request](../../bundleresources/choosing-the-location-services-authorization-to-request.md) for more information.

## See Also

### Methods

- [startMonitoring(for:)](startmonitoring%28for_%29.md): Deprecated. Starts monitoring the specified region.
- [stopMonitoring(for:)](stopmonitoring%28for_%29.md): Deprecated. Stops monitoring the specified region.
- [regionMonitoringAvailable()](regionmonitoringavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is supported on the current device.
- [regionMonitoringEnabled()](regionmonitoringenabled%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is currently enabled.
- [startMonitoring(for:desiredAccuracy:)](startmonitoring%28for_desiredaccuracy_%29.md): Deprecated. Starts monitoring the specified region for boundary crossings.
- [requestState(for:)](requeststate%28for_%29.md): Deprecated. Retrieves the state of a region asynchronously.
- [startRangingBeacons(in:)](startrangingbeacons%28in_%29.md): Deprecated. Starts the delivery of notifications for the specified beacon region.
- [stopRangingBeacons(in:)](stoprangingbeacons%28in_%29.md): Deprecated. Stops the delivery of notifications for the specified beacon region.
- [deferredLocationUpdatesAvailable()](deferredlocationupdatesavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether the device supports deferred location updates.
- [allowDeferredLocationUpdates(untilTraveled:timeout:)](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md): Deprecated. Asks the location manager to defer the delivery of location updates until the specified criteria are met.
- [disallowDeferredLocationUpdates()](disallowdeferredlocationupdates%28%29.md): Deprecated. Cancels the deferral of location updates for this app.

# authorizationStatus (Objective-C)

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 4.2+ (deprecated in 14.0) · iPadOS 4.2+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.7+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 7.0)

Returns the app’s authorization status for using location services.

> Use the [authorizationStatus](authorizationstatus-swift.property.md) instance property with [locationManagerDidChangeAuthorization:](../cllocationmanagerdelegate/locationmanagerdidchangeauthorization%28__%29.md) instead.

## Declaration

```objectivec
+ (CLAuthorizationStatus) authorizationStatus;
```

<a id="return-value"></a>

## Return Value

A value indicating whether the app is authorized to use location services.

<a id="Discussion"></a>

## Discussion

The system is guaranteed to call the delegate method with the app’s initial authorization state and all authorization status changes.

The system manages the authorization status of a given app according to several factors. Users must authorize the app to use location services explicitly, and location services must be enabled in Settings \> Privacy. See [Choosing the  Location Services Authorization to Request](../../bundleresources/choosing-the-location-services-authorization-to-request.md) for more information.

## See Also

### Methods

- [startMonitoringForRegion:](startmonitoring%28for_%29.md): Deprecated. Starts monitoring the specified region.
- [stopMonitoringForRegion:](stopmonitoring%28for_%29.md): Deprecated. Stops monitoring the specified region.
- [regionMonitoringAvailable](regionmonitoringavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is supported on the current device.
- [regionMonitoringEnabled](regionmonitoringenabled%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is currently enabled.
- [startMonitoringForRegion:desiredAccuracy:](startmonitoring%28for_desiredaccuracy_%29.md): Deprecated. Starts monitoring the specified region for boundary crossings.
- [requestStateForRegion:](requeststate%28for_%29.md): Deprecated. Retrieves the state of a region asynchronously.
- [startRangingBeaconsInRegion:](startrangingbeacons%28in_%29.md): Deprecated. Starts the delivery of notifications for the specified beacon region.
- [stopRangingBeaconsInRegion:](stoprangingbeacons%28in_%29.md): Deprecated. Stops the delivery of notifications for the specified beacon region.
- [deferredLocationUpdatesAvailable](deferredlocationupdatesavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether the device supports deferred location updates.
- [allowDeferredLocationUpdatesUntilTraveled:timeout:](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md): Deprecated. Asks the location manager to defer the delivery of location updates until the specified criteria are met.
- [disallowDeferredLocationUpdates](disallowdeferredlocationupdates%28%29.md): Deprecated. Cancels the deferral of location updates for this app.
