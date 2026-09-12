> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/stopmonitoring(for:)](https://developer.apple.com/documentation/corelocation/cllocationmanager/stopmonitoring(for:))

# stopMonitoring(for:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.0)

Stops monitoring the specified region.

> Use [removeConditionFromMonitoringWithIdentifier:](../clmonitor-6ynwz/removeconditionfrommonitoringwithidentifier_.md) instead.

## Declaration

```swift
func stopMonitoring(for region: CLRegion)
```

## Parameters

- `region`: The region object currently being monitored. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

If the specified region object is not currently being monitored, this method has no effect. If a compatible iPad or iPhone app calls this method when running in visionOS, the method does nothing.

## See Also

### Methods

- [startMonitoring(for:)](startmonitoring%28for_%29.md): Deprecated. Starts monitoring the specified region.
- [regionMonitoringAvailable()](regionmonitoringavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is supported on the current device.
- [regionMonitoringEnabled()](regionmonitoringenabled%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is currently enabled.
- [authorizationStatus()](authorizationstatus%28%29.md): Deprecated. Returns the app’s authorization status for using location services.
- [startMonitoring(for:desiredAccuracy:)](startmonitoring%28for_desiredaccuracy_%29.md): Deprecated. Starts monitoring the specified region for boundary crossings.
- [requestState(for:)](requeststate%28for_%29.md): Deprecated. Retrieves the state of a region asynchronously.
- [startRangingBeacons(in:)](startrangingbeacons%28in_%29.md): Deprecated. Starts the delivery of notifications for the specified beacon region.
- [stopRangingBeacons(in:)](stoprangingbeacons%28in_%29.md): Deprecated. Stops the delivery of notifications for the specified beacon region.
- [deferredLocationUpdatesAvailable()](deferredlocationupdatesavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether the device supports deferred location updates.
- [allowDeferredLocationUpdates(untilTraveled:timeout:)](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md): Deprecated. Asks the location manager to defer the delivery of location updates until the specified criteria are met.
- [disallowDeferredLocationUpdates()](disallowdeferredlocationupdates%28%29.md): Deprecated. Cancels the deferral of location updates for this app.

# stopMonitoringForRegion: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.0)

Stops monitoring the specified region.

> Use [removeConditionFromMonitoringWithIdentifier:](../clmonitor-6ynwz/removeconditionfrommonitoringwithidentifier_.md) instead.

## Declaration

```objectivec
- (void) stopMonitoringForRegion:(CLRegion *) region;
```

## Parameters

- `region`: The region object currently being monitored. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

If the specified region object is not currently being monitored, this method has no effect. If a compatible iPad or iPhone app calls this method when running in visionOS, the method does nothing.

## See Also

### Methods

- [startMonitoringForRegion:](startmonitoring%28for_%29.md): Deprecated. Starts monitoring the specified region.
- [regionMonitoringAvailable](regionmonitoringavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is supported on the current device.
- [regionMonitoringEnabled](regionmonitoringenabled%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is currently enabled.
- [authorizationStatus](authorizationstatus%28%29.md): Deprecated. Returns the app’s authorization status for using location services.
- [startMonitoringForRegion:desiredAccuracy:](startmonitoring%28for_desiredaccuracy_%29.md): Deprecated. Starts monitoring the specified region for boundary crossings.
- [requestStateForRegion:](requeststate%28for_%29.md): Deprecated. Retrieves the state of a region asynchronously.
- [startRangingBeaconsInRegion:](startrangingbeacons%28in_%29.md): Deprecated. Starts the delivery of notifications for the specified beacon region.
- [stopRangingBeaconsInRegion:](stoprangingbeacons%28in_%29.md): Deprecated. Stops the delivery of notifications for the specified beacon region.
- [deferredLocationUpdatesAvailable](deferredlocationupdatesavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether the device supports deferred location updates.
- [allowDeferredLocationUpdatesUntilTraveled:timeout:](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md): Deprecated. Asks the location manager to defer the delivery of location updates until the specified criteria are met.
- [disallowDeferredLocationUpdates](disallowdeferredlocationupdates%28%29.md): Deprecated. Cancels the deferral of location updates for this app.
