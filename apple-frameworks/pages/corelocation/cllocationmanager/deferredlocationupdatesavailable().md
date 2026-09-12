> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/deferredlocationupdatesavailable()](https://developer.apple.com/documentation/corelocation/cllocationmanager/deferredlocationupdatesavailable())

# deferredLocationUpdatesAvailable() (Swift)

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15)

Returns a Boolean value indicating whether the device supports deferred location updates.

> You can remove calls to this method

## Declaration

```swift
class func deferredLocationUpdatesAvailable() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports deferred location updates or [false](https://developer.apple.com/documentation/swift/false) if it does not.

<a id="Discussion"></a>

## Discussion

Deferred location updates are a way for the location manager to avoid frequently waking up a background app to deliver location changes. Normally, when an app wants location updates in the background, the app must be woken up whenever a new event arrives. Waking up the app consumes power, which in some situations might be wasted if the app cannot do anything with the location information other than log it and go back to sleep anyway. Deferring location updates gives you the ability to wait until a time when your app can do something useful with the data and then process the updates all at once.

Deferred location updates require the presence of GPS hardware and may not be supported on all iOS devices.

## See Also

### Methods

- [startMonitoring(for:)](startmonitoring%28for_%29.md): Deprecated. Starts monitoring the specified region.
- [stopMonitoring(for:)](stopmonitoring%28for_%29.md): Deprecated. Stops monitoring the specified region.
- [regionMonitoringAvailable()](regionmonitoringavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is supported on the current device.
- [regionMonitoringEnabled()](regionmonitoringenabled%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is currently enabled.
- [authorizationStatus()](authorizationstatus%28%29.md): Deprecated. Returns the app’s authorization status for using location services.
- [startMonitoring(for:desiredAccuracy:)](startmonitoring%28for_desiredaccuracy_%29.md): Deprecated. Starts monitoring the specified region for boundary crossings.
- [requestState(for:)](requeststate%28for_%29.md): Deprecated. Retrieves the state of a region asynchronously.
- [startRangingBeacons(in:)](startrangingbeacons%28in_%29.md): Deprecated. Starts the delivery of notifications for the specified beacon region.
- [stopRangingBeacons(in:)](stoprangingbeacons%28in_%29.md): Deprecated. Stops the delivery of notifications for the specified beacon region.
- [allowDeferredLocationUpdates(untilTraveled:timeout:)](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md): Deprecated. Asks the location manager to defer the delivery of location updates until the specified criteria are met.
- [disallowDeferredLocationUpdates()](disallowdeferredlocationupdates%28%29.md): Deprecated. Cancels the deferral of location updates for this app.

# deferredLocationUpdatesAvailable (Objective-C)

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15)

Returns a Boolean value indicating whether the device supports deferred location updates.

> You can remove calls to this method

## Declaration

```objectivec
+ (BOOL) deferredLocationUpdatesAvailable;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports deferred location updates or [false](https://developer.apple.com/documentation/swift/false) if it does not.

<a id="Discussion"></a>

## Discussion

Deferred location updates are a way for the location manager to avoid frequently waking up a background app to deliver location changes. Normally, when an app wants location updates in the background, the app must be woken up whenever a new event arrives. Waking up the app consumes power, which in some situations might be wasted if the app cannot do anything with the location information other than log it and go back to sleep anyway. Deferring location updates gives you the ability to wait until a time when your app can do something useful with the data and then process the updates all at once.

Deferred location updates require the presence of GPS hardware and may not be supported on all iOS devices.

## See Also

### Methods

- [startMonitoringForRegion:](startmonitoring%28for_%29.md): Deprecated. Starts monitoring the specified region.
- [stopMonitoringForRegion:](stopmonitoring%28for_%29.md): Deprecated. Stops monitoring the specified region.
- [regionMonitoringAvailable](regionmonitoringavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is supported on the current device.
- [regionMonitoringEnabled](regionmonitoringenabled%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is currently enabled.
- [authorizationStatus](authorizationstatus%28%29.md): Deprecated. Returns the app’s authorization status for using location services.
- [startMonitoringForRegion:desiredAccuracy:](startmonitoring%28for_desiredaccuracy_%29.md): Deprecated. Starts monitoring the specified region for boundary crossings.
- [requestStateForRegion:](requeststate%28for_%29.md): Deprecated. Retrieves the state of a region asynchronously.
- [startRangingBeaconsInRegion:](startrangingbeacons%28in_%29.md): Deprecated. Starts the delivery of notifications for the specified beacon region.
- [stopRangingBeaconsInRegion:](stoprangingbeacons%28in_%29.md): Deprecated. Stops the delivery of notifications for the specified beacon region.
- [allowDeferredLocationUpdatesUntilTraveled:timeout:](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md): Deprecated. Asks the location manager to defer the delivery of location updates until the specified criteria are met.
- [disallowDeferredLocationUpdates](disallowdeferredlocationupdates%28%29.md): Deprecated. Cancels the deferral of location updates for this app.
