> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/regionmonitoringenabled()](https://developer.apple.com/documentation/corelocation/cllocationmanager/regionmonitoringenabled())

# regionMonitoringEnabled() (Swift)

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 4.0+ (deprecated in 6.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Returns a Boolean value indicating whether region monitoring is currently enabled.

> Use [isMonitoringAvailable(for:)](ismonitoringavailable%28for_%29.md) instead.

## Declaration

```swift
class func regionMonitoringEnabled() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if region monitoring is available and is currently enabled; [false](https://developer.apple.com/documentation/swift/false) if it is unavailable or not enabled.

<a id="Discussion"></a>

## Discussion

In iOS, the user can enable or disable location services (including region monitoring) using the controls in Settings \> Location Services.

You should check the return value of this method before starting region monitoring updates to determine whether the user currently allows location services to be used at all. If this method returns [false](https://developer.apple.com/documentation/swift/false) and you start region monitoring updates anyway, the Core Location framework prompts the user to confirm asking whether location services should be reenabled.

This method does not check to see if region monitoring capabilities are actually supported by the device. Therefore, you should also check the return value of the [regionMonitoringAvailable()](regionmonitoringavailable%28%29.md) class method before attempting to start region monitoring services.

## See Also

### Methods

- [startMonitoring(for:)](startmonitoring%28for_%29.md): Deprecated. Starts monitoring the specified region.
- [stopMonitoring(for:)](stopmonitoring%28for_%29.md): Deprecated. Stops monitoring the specified region.
- [regionMonitoringAvailable()](regionmonitoringavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is supported on the current device.
- [authorizationStatus()](authorizationstatus%28%29.md): Deprecated. Returns the app’s authorization status for using location services.
- [startMonitoring(for:desiredAccuracy:)](startmonitoring%28for_desiredaccuracy_%29.md): Deprecated. Starts monitoring the specified region for boundary crossings.
- [requestState(for:)](requeststate%28for_%29.md): Deprecated. Retrieves the state of a region asynchronously.
- [startRangingBeacons(in:)](startrangingbeacons%28in_%29.md): Deprecated. Starts the delivery of notifications for the specified beacon region.
- [stopRangingBeacons(in:)](stoprangingbeacons%28in_%29.md): Deprecated. Stops the delivery of notifications for the specified beacon region.
- [deferredLocationUpdatesAvailable()](deferredlocationupdatesavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether the device supports deferred location updates.
- [allowDeferredLocationUpdates(untilTraveled:timeout:)](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md): Deprecated. Asks the location manager to defer the delivery of location updates until the specified criteria are met.
- [disallowDeferredLocationUpdates()](disallowdeferredlocationupdates%28%29.md): Deprecated. Cancels the deferral of location updates for this app.

# regionMonitoringEnabled (Objective-C)

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Returns a Boolean value indicating whether region monitoring is currently enabled.

> Use [isMonitoringAvailableForClass:](ismonitoringavailable%28for_%29.md) instead.

## Declaration

```objectivec
+ (BOOL) regionMonitoringEnabled;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if region monitoring is available and is currently enabled; [false](https://developer.apple.com/documentation/swift/false) if it is unavailable or not enabled.

<a id="Discussion"></a>

## Discussion

In iOS, the user can enable or disable location services (including region monitoring) using the controls in Settings \> Location Services.

You should check the return value of this method before starting region monitoring updates to determine whether the user currently allows location services to be used at all. If this method returns [false](https://developer.apple.com/documentation/swift/false) and you start region monitoring updates anyway, the Core Location framework prompts the user to confirm asking whether location services should be reenabled.

This method does not check to see if region monitoring capabilities are actually supported by the device. Therefore, you should also check the return value of the [regionMonitoringAvailable](regionmonitoringavailable%28%29.md) class method before attempting to start region monitoring services.

## See Also

### Methods

- [startMonitoringForRegion:](startmonitoring%28for_%29.md): Deprecated. Starts monitoring the specified region.
- [stopMonitoringForRegion:](stopmonitoring%28for_%29.md): Deprecated. Stops monitoring the specified region.
- [regionMonitoringAvailable](regionmonitoringavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is supported on the current device.
- [authorizationStatus](authorizationstatus%28%29.md): Deprecated. Returns the app’s authorization status for using location services.
- [startMonitoringForRegion:desiredAccuracy:](startmonitoring%28for_desiredaccuracy_%29.md): Deprecated. Starts monitoring the specified region for boundary crossings.
- [requestStateForRegion:](requeststate%28for_%29.md): Deprecated. Retrieves the state of a region asynchronously.
- [startRangingBeaconsInRegion:](startrangingbeacons%28in_%29.md): Deprecated. Starts the delivery of notifications for the specified beacon region.
- [stopRangingBeaconsInRegion:](stoprangingbeacons%28in_%29.md): Deprecated. Stops the delivery of notifications for the specified beacon region.
- [deferredLocationUpdatesAvailable](deferredlocationupdatesavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether the device supports deferred location updates.
- [allowDeferredLocationUpdatesUntilTraveled:timeout:](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md): Deprecated. Asks the location manager to defer the delivery of location updates until the specified criteria are met.
- [disallowDeferredLocationUpdates](disallowdeferredlocationupdates%28%29.md): Deprecated. Cancels the deferral of location updates for this app.
