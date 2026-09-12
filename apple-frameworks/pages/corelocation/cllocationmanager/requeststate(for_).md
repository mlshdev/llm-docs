> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/requeststate(for:)](https://developer.apple.com/documentation/corelocation/cllocationmanager/requeststate(for:))

# requestState(for:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.0)

Retrieves the state of a region asynchronously.

> Use [CLMonitor](../clmonitor-2r51v.md) to track and query the state for monitored constraints.

## Declaration

```swift
func requestState(for region: CLRegion)
```

## Parameters

- `region`: The region with the state you want to know. This object needs to be an instance of one of the standard region subclasses that [Core Location](../../corelocation.md) provides, such as [CLCircularRegion](../clcircularregion.md) or [CLBeaconRegion](../clbeaconregion.md). You can’t use this method to determine the state of custom regions you define yourself.

<a id="Discussion"></a>

## Discussion

This method performs the request asynchronously and delivers the results to the location manager’s delegate. You must implement the [locationManager(\_:didDetermineState:for:)](../cllocationmanagerdelegate/locationmanager%28__diddeterminestate_for_%29.md) method in the delegate to receive the results.

If the `region` parameter contains an unknown type of region object, this method does nothing. If a compatible iPad or iPhone app calls this method when running in visionOS, the method does nothing.

## See Also

### Methods

- [startMonitoring(for:)](startmonitoring%28for_%29.md): Deprecated. Starts monitoring the specified region.
- [stopMonitoring(for:)](stopmonitoring%28for_%29.md): Deprecated. Stops monitoring the specified region.
- [regionMonitoringAvailable()](regionmonitoringavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is supported on the current device.
- [regionMonitoringEnabled()](regionmonitoringenabled%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is currently enabled.
- [authorizationStatus()](authorizationstatus%28%29.md): Deprecated. Returns the app’s authorization status for using location services.
- [startMonitoring(for:desiredAccuracy:)](startmonitoring%28for_desiredaccuracy_%29.md): Deprecated. Starts monitoring the specified region for boundary crossings.
- [startRangingBeacons(in:)](startrangingbeacons%28in_%29.md): Deprecated. Starts the delivery of notifications for the specified beacon region.
- [stopRangingBeacons(in:)](stoprangingbeacons%28in_%29.md): Deprecated. Stops the delivery of notifications for the specified beacon region.
- [deferredLocationUpdatesAvailable()](deferredlocationupdatesavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether the device supports deferred location updates.
- [allowDeferredLocationUpdates(untilTraveled:timeout:)](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md): Deprecated. Asks the location manager to defer the delivery of location updates until the specified criteria are met.
- [disallowDeferredLocationUpdates()](disallowdeferredlocationupdates%28%29.md): Deprecated. Cancels the deferral of location updates for this app.

# requestStateForRegion: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.0)

Retrieves the state of a region asynchronously.

> Use [CLMonitor](../clmonitor-2r51v.md) to track and query the state for monitored constraints.

## Declaration

```objectivec
- (void) requestStateForRegion:(CLRegion *) region;
```

## Parameters

- `region`: The region with the state you want to know. This object needs to be an instance of one of the standard region subclasses that [Core Location](../../corelocation.md) provides, such as [CLCircularRegion](../clcircularregion.md) or [CLBeaconRegion](../clbeaconregion.md). You can’t use this method to determine the state of custom regions you define yourself.

<a id="Discussion"></a>

## Discussion

This method performs the request asynchronously and delivers the results to the location manager’s delegate. You must implement the [locationManager:didDetermineState:forRegion:](../cllocationmanagerdelegate/locationmanager%28__diddeterminestate_for_%29.md) method in the delegate to receive the results.

If the `region` parameter contains an unknown type of region object, this method does nothing. If a compatible iPad or iPhone app calls this method when running in visionOS, the method does nothing.

## See Also

### Methods

- [startMonitoringForRegion:](startmonitoring%28for_%29.md): Deprecated. Starts monitoring the specified region.
- [stopMonitoringForRegion:](stopmonitoring%28for_%29.md): Deprecated. Stops monitoring the specified region.
- [regionMonitoringAvailable](regionmonitoringavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is supported on the current device.
- [regionMonitoringEnabled](regionmonitoringenabled%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is currently enabled.
- [authorizationStatus](authorizationstatus%28%29.md): Deprecated. Returns the app’s authorization status for using location services.
- [startMonitoringForRegion:desiredAccuracy:](startmonitoring%28for_desiredaccuracy_%29.md): Deprecated. Starts monitoring the specified region for boundary crossings.
- [startRangingBeaconsInRegion:](startrangingbeacons%28in_%29.md): Deprecated. Starts the delivery of notifications for the specified beacon region.
- [stopRangingBeaconsInRegion:](stoprangingbeacons%28in_%29.md): Deprecated. Stops the delivery of notifications for the specified beacon region.
- [deferredLocationUpdatesAvailable](deferredlocationupdatesavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether the device supports deferred location updates.
- [allowDeferredLocationUpdatesUntilTraveled:timeout:](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md): Deprecated. Asks the location manager to defer the delivery of location updates until the specified criteria are met.
- [disallowDeferredLocationUpdates](disallowdeferredlocationupdates%28%29.md): Deprecated. Cancels the deferral of location updates for this app.
