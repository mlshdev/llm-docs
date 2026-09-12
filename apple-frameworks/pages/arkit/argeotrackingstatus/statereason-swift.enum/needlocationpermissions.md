> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingstatus/statereason-swift.enum/needlocationpermissions](https://developer.apple.com/documentation/arkit/argeotrackingstatus/statereason-swift.enum/needlocationpermissions)

# ARGeoTrackingStatus.StateReason.needLocationPermissions (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The location requires user permission for geotracking.

## Declaration

```swift
case needLocationPermissions
```

<a id="Discussion"></a>

## Discussion

This reason indicates that the user has not given this app permission to access the user’s location. To enable geo tracking, an app needs to ask the user to enable location sharing for this app in Settings.

## See Also

### Status Reasons

- [ARGeoTrackingStatus.StateReason.none](none.md): No issues reported.
- [ARGeoTrackingStatus.StateReason.notAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStatus.StateReason.devicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStatus.StateReason.worldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStatus.StateReason.waitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStatus.StateReason.geoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.
- [ARGeoTrackingStatus.StateReason.visualLocalizationFailed](visuallocalizationfailed.md): Localization imagery failed to match the view from the device’s camera.
- [ARGeoTrackingStatus.StateReason.none](none.md): No issues reported.
- [ARGeoTrackingStatus.StateReason.notAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStatus.StateReason.devicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStatus.StateReason.worldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStatus.StateReason.waitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStatus.StateReason.geoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.

# ARGeoTrackingStateReasonNeedLocationPermissions (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

The location requires user permission for geotracking.

## Declaration

```objectivec
ARGeoTrackingStateReasonNeedLocationPermissions
```

<a id="Discussion"></a>

## Discussion

This reason indicates that the user has not given this app permission to access the user’s location. To enable geo tracking, an app needs to ask the user to enable location sharing for this app in Settings.

## See Also

### Status Reasons

- [ARGeoTrackingStateReasonNone](none.md): No issues reported.
- [ARGeoTrackingStateReasonNotAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStateReasonDevicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStateReasonWorldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStateReasonWaitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStateReasonWaitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStateReasonGeoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.
- [ARGeoTrackingStateReasonVisualLocalizationFailed](visuallocalizationfailed.md): Localization imagery failed to match the view from the device’s camera.
- [ARGeoTrackingStateReasonNone](none.md): No issues reported.
- [ARGeoTrackingStateReasonNotAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStateReasonDevicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStateReasonWorldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStateReasonWaitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStateReasonWaitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStateReasonGeoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.
