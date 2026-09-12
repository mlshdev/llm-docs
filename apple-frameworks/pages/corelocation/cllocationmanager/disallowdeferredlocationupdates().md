> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/disallowdeferredlocationupdates()](https://developer.apple.com/documentation/corelocation/cllocationmanager/disallowdeferredlocationupdates())

# disallowDeferredLocationUpdates() (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15)

Cancels the deferral of location updates for this app.

> You can remove calls to this method

## Declaration

```swift
func disallowDeferredLocationUpdates()
```

<a id="Discussion"></a>

## Discussion

Call this method if you previously deferred location event delivery using the [allowDeferredLocationUpdates(untilTraveled:timeout:)](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md) method and now want to resume the delivery of events at normal intervals.

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
- [deferredLocationUpdatesAvailable()](deferredlocationupdatesavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether the device supports deferred location updates.
- [allowDeferredLocationUpdates(untilTraveled:timeout:)](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md): Deprecated. Asks the location manager to defer the delivery of location updates until the specified criteria are met.

# disallowDeferredLocationUpdates (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15)

Cancels the deferral of location updates for this app.

> You can remove calls to this method

## Declaration

```objectivec
- (void) disallowDeferredLocationUpdates;
```

<a id="Discussion"></a>

## Discussion

Call this method if you previously deferred location event delivery using the [allowDeferredLocationUpdatesUntilTraveled:timeout:](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md) method and now want to resume the delivery of events at normal intervals.

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
- [deferredLocationUpdatesAvailable](deferredlocationupdatesavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether the device supports deferred location updates.
- [allowDeferredLocationUpdatesUntilTraveled:timeout:](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md): Deprecated. Asks the location manager to defer the delivery of location updates until the specified criteria are met.
