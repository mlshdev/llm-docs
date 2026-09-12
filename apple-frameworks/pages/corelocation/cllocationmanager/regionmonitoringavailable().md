> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/regionmonitoringavailable()](https://developer.apple.com/documentation/corelocation/cllocationmanager/regionmonitoringavailable())

# regionMonitoringAvailable() (Swift)

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 4.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Returns a Boolean value indicating whether region monitoring is supported on the current device.

> Use [isMonitoringAvailable(for:)](ismonitoringavailable%28for_%29.md) instead.

## Declaration

```swift
class func regionMonitoringAvailable() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if region monitoring is available; [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Support for region monitoring may not be available on all devices and models. You should check the value of this property before attempting to set up any regions or initiate region monitoring.

Even if region monitoring support is present on a device, it may still be unavailable because the user disabled it for the current app or for all apps.

<a id="Special-Considerations"></a>

### Special Considerations

This class is deprecated in iOS 7 and later but is still supported in macOS.

## See Also

### Methods

- [startMonitoring(for:)](startmonitoring%28for_%29.md): Deprecated. Starts monitoring the specified region.
- [stopMonitoring(for:)](stopmonitoring%28for_%29.md): Deprecated. Stops monitoring the specified region.
- [regionMonitoringEnabled()](regionmonitoringenabled%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is currently enabled.
- [authorizationStatus()](authorizationstatus%28%29.md): Deprecated. Returns the app’s authorization status for using location services.
- [startMonitoring(for:desiredAccuracy:)](startmonitoring%28for_desiredaccuracy_%29.md): Deprecated. Starts monitoring the specified region for boundary crossings.
- [requestState(for:)](requeststate%28for_%29.md): Deprecated. Retrieves the state of a region asynchronously.
- [startRangingBeacons(in:)](startrangingbeacons%28in_%29.md): Deprecated. Starts the delivery of notifications for the specified beacon region.
- [stopRangingBeacons(in:)](stoprangingbeacons%28in_%29.md): Deprecated. Stops the delivery of notifications for the specified beacon region.
- [deferredLocationUpdatesAvailable()](deferredlocationupdatesavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether the device supports deferred location updates.
- [allowDeferredLocationUpdates(untilTraveled:timeout:)](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md): Deprecated. Asks the location manager to defer the delivery of location updates until the specified criteria are met.
- [disallowDeferredLocationUpdates()](disallowdeferredlocationupdates%28%29.md): Deprecated. Cancels the deferral of location updates for this app.

# regionMonitoringAvailable (Objective-C)

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Returns a Boolean value indicating whether region monitoring is supported on the current device.

> Use [isMonitoringAvailableForClass:](ismonitoringavailable%28for_%29.md) instead.

## Declaration

```objectivec
+ (BOOL) regionMonitoringAvailable;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if region monitoring is available; [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Support for region monitoring may not be available on all devices and models. You should check the value of this property before attempting to set up any regions or initiate region monitoring.

Even if region monitoring support is present on a device, it may still be unavailable because the user disabled it for the current app or for all apps.

<a id="Special-Considerations"></a>

### Special Considerations

This class is deprecated in iOS 7 and later but is still supported in macOS.

## See Also

### Methods

- [startMonitoringForRegion:](startmonitoring%28for_%29.md): Deprecated. Starts monitoring the specified region.
- [stopMonitoringForRegion:](stopmonitoring%28for_%29.md): Deprecated. Stops monitoring the specified region.
- [regionMonitoringEnabled](regionmonitoringenabled%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is currently enabled.
- [authorizationStatus](authorizationstatus%28%29.md): Deprecated. Returns the app’s authorization status for using location services.
- [startMonitoringForRegion:desiredAccuracy:](startmonitoring%28for_desiredaccuracy_%29.md): Deprecated. Starts monitoring the specified region for boundary crossings.
- [requestStateForRegion:](requeststate%28for_%29.md): Deprecated. Retrieves the state of a region asynchronously.
- [startRangingBeaconsInRegion:](startrangingbeacons%28in_%29.md): Deprecated. Starts the delivery of notifications for the specified beacon region.
- [stopRangingBeaconsInRegion:](stoprangingbeacons%28in_%29.md): Deprecated. Stops the delivery of notifications for the specified beacon region.
- [deferredLocationUpdatesAvailable](deferredlocationupdatesavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether the device supports deferred location updates.
- [allowDeferredLocationUpdatesUntilTraveled:timeout:](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md): Deprecated. Asks the location manager to defer the delivery of location updates until the specified criteria are met.
- [disallowDeferredLocationUpdates](disallowdeferredlocationupdates%28%29.md): Deprecated. Cancels the deferral of location updates for this app.
