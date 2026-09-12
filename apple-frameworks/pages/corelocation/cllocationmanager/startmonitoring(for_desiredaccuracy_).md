> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/startmonitoring(for:desiredaccuracy:)](https://developer.apple.com/documentation/corelocation/cllocationmanager/startmonitoring(for:desiredaccuracy:))

# startMonitoring(for:desiredAccuracy:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15)

Starts monitoring the specified region for boundary crossings.

> Use [startMonitoring(for:)](startmonitoring%28for_%29.md) instead.

## Declaration

```swift
func startMonitoring(for region: CLRegion, desiredAccuracy accuracy: CLLocationAccuracy)
```

## Parameters

- `region`: The region object that defines the boundary to monitor. This parameter must not be `nil`.
- `accuracy`: The distance past the border (measured in meters) at which to generate notifications. You can use this value to prevent the delivery of multiple notifications when the user is close to the border’s edge.

<a id="Discussion"></a>

## Discussion

You must call this method separately for each region you want to monitor. If an existing region with the same identifier is already being monitored by the app, the old region is replaced by the new one. The regions you add using this method are shared by all location manager objects in your app and stored in the [monitoredRegions](monitoredregions.md) property.

If you begin monitoring a region and your app is subsequently terminated, the system automatically relaunches it into the background if the region boundary is crossed. In such a case, the options dictionary passed to the [application(\_:didFinishLaunchingWithOptions:)](../../uikit/uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) method of your app delegate contains the key [location](../../uikit/uiapplication/launchoptionskey/location.md) to indicate that your app was launched because of a location-related event. In addition, creating a new location manager and assigning a delegate results in the delivery of the corresponding region messages. The newly created location manager’s [location](location.md) property also contains the current location even if location services are not enabled.

Region events are delivered to the [locationManager(\_:didEnterRegion:)](../cllocationmanagerdelegate/locationmanager%28__didenterregion_%29.md) and [locationManager(\_:didExitRegion:)](../cllocationmanagerdelegate/locationmanager%28__didexitregion_%29.md) methods of your delegate. If there is an error, the location manager calls the [locationManager(\_:monitoringDidFailFor:withError:)](../cllocationmanagerdelegate/locationmanager%28__monitoringdidfailfor_witherror_%29.md) method of your delegate instead.

## See Also

### Methods

- [startMonitoring(for:)](startmonitoring%28for_%29.md): Deprecated. Starts monitoring the specified region.
- [stopMonitoring(for:)](stopmonitoring%28for_%29.md): Deprecated. Stops monitoring the specified region.
- [regionMonitoringAvailable()](regionmonitoringavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is supported on the current device.
- [regionMonitoringEnabled()](regionmonitoringenabled%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is currently enabled.
- [authorizationStatus()](authorizationstatus%28%29.md): Deprecated. Returns the app’s authorization status for using location services.
- [requestState(for:)](requeststate%28for_%29.md): Deprecated. Retrieves the state of a region asynchronously.
- [startRangingBeacons(in:)](startrangingbeacons%28in_%29.md): Deprecated. Starts the delivery of notifications for the specified beacon region.
- [stopRangingBeacons(in:)](stoprangingbeacons%28in_%29.md): Deprecated. Stops the delivery of notifications for the specified beacon region.
- [deferredLocationUpdatesAvailable()](deferredlocationupdatesavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether the device supports deferred location updates.
- [allowDeferredLocationUpdates(untilTraveled:timeout:)](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md): Deprecated. Asks the location manager to defer the delivery of location updates until the specified criteria are met.
- [disallowDeferredLocationUpdates()](disallowdeferredlocationupdates%28%29.md): Deprecated. Cancels the deferral of location updates for this app.

# startMonitoringForRegion:desiredAccuracy: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15)

Starts monitoring the specified region for boundary crossings.

> Use [startMonitoringForRegion:](startmonitoring%28for_%29.md) instead.

## Declaration

```objectivec
- (void) startMonitoringForRegion:(CLRegion *) region desiredAccuracy:(CLLocationAccuracy) accuracy;
```

## Parameters

- `region`: The region object that defines the boundary to monitor. This parameter must not be `nil`.
- `accuracy`: The distance past the border (measured in meters) at which to generate notifications. You can use this value to prevent the delivery of multiple notifications when the user is close to the border’s edge.

<a id="Discussion"></a>

## Discussion

You must call this method separately for each region you want to monitor. If an existing region with the same identifier is already being monitored by the app, the old region is replaced by the new one. The regions you add using this method are shared by all location manager objects in your app and stored in the [monitoredRegions](monitoredregions.md) property.

If you begin monitoring a region and your app is subsequently terminated, the system automatically relaunches it into the background if the region boundary is crossed. In such a case, the options dictionary passed to the [application:didFinishLaunchingWithOptions:](../../uikit/uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) method of your app delegate contains the key [UIApplicationLaunchOptionsLocationKey](../../uikit/uiapplication/launchoptionskey/location.md) to indicate that your app was launched because of a location-related event. In addition, creating a new location manager and assigning a delegate results in the delivery of the corresponding region messages. The newly created location manager’s [location](location.md) property also contains the current location even if location services are not enabled.

Region events are delivered to the [locationManager:didEnterRegion:](../cllocationmanagerdelegate/locationmanager%28__didenterregion_%29.md) and [locationManager:didExitRegion:](../cllocationmanagerdelegate/locationmanager%28__didexitregion_%29.md) methods of your delegate. If there is an error, the location manager calls the [locationManager:monitoringDidFailForRegion:withError:](../cllocationmanagerdelegate/locationmanager%28__monitoringdidfailfor_witherror_%29.md) method of your delegate instead.

## See Also

### Methods

- [startMonitoringForRegion:](startmonitoring%28for_%29.md): Deprecated. Starts monitoring the specified region.
- [stopMonitoringForRegion:](stopmonitoring%28for_%29.md): Deprecated. Stops monitoring the specified region.
- [regionMonitoringAvailable](regionmonitoringavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is supported on the current device.
- [regionMonitoringEnabled](regionmonitoringenabled%28%29.md): Deprecated. Returns a Boolean value indicating whether region monitoring is currently enabled.
- [authorizationStatus](authorizationstatus%28%29.md): Deprecated. Returns the app’s authorization status for using location services.
- [requestStateForRegion:](requeststate%28for_%29.md): Deprecated. Retrieves the state of a region asynchronously.
- [startRangingBeaconsInRegion:](startrangingbeacons%28in_%29.md): Deprecated. Starts the delivery of notifications for the specified beacon region.
- [stopRangingBeaconsInRegion:](stoprangingbeacons%28in_%29.md): Deprecated. Stops the delivery of notifications for the specified beacon region.
- [deferredLocationUpdatesAvailable](deferredlocationupdatesavailable%28%29.md): Deprecated. Returns a Boolean value indicating whether the device supports deferred location updates.
- [allowDeferredLocationUpdatesUntilTraveled:timeout:](allowdeferredlocationupdates%28untiltraveled_timeout_%29.md): Deprecated. Asks the location manager to defer the delivery of location updates until the specified criteria are met.
- [disallowDeferredLocationUpdates](disallowdeferredlocationupdates%28%29.md): Deprecated. Cancels the deferral of location updates for this app.
