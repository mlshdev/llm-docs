> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingstatus/statereason-swift.enum/worldtrackingunstable](https://developer.apple.com/documentation/arkit/argeotrackingstatus/statereason-swift.enum/worldtrackingunstable)

# ARGeoTrackingStatus.StateReason.worldTrackingUnstable (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The position or motion of the device makes geotracking unstable.

## Declaration

```swift
case worldTrackingUnstable
```

<a id="Discussion"></a>

## Discussion

This reason indicates that ARKit’s local-space tracking is functioning at a limited capacity. To retrieve more information about the cause, an app needs to refer to the camera’s [trackingState](../../arcamera/trackingstate-6i3pt.md). For the possible causes of this state, see [ARTrackingState](../../artrackingstate.md) and [ARTrackingStateReason](../../artrackingstatereason.md).

## See Also

### Status Reasons

- [ARGeoTrackingStatus.StateReason.none](none.md): No issues reported.
- [ARGeoTrackingStatus.StateReason.notAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStatus.StateReason.needLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStatus.StateReason.devicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStatus.StateReason.waitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStatus.StateReason.geoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.
- [ARGeoTrackingStatus.StateReason.visualLocalizationFailed](visuallocalizationfailed.md): Localization imagery failed to match the view from the device’s camera.
- [ARGeoTrackingStatus.StateReason.none](none.md): No issues reported.
- [ARGeoTrackingStatus.StateReason.notAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStatus.StateReason.needLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStatus.StateReason.devicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStatus.StateReason.waitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStatus.StateReason.geoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.

# ARGeoTrackingStateReasonWorldTrackingUnstable (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

The position or motion of the device makes geotracking unstable.

## Declaration

```objectivec
ARGeoTrackingStateReasonWorldTrackingUnstable
```

<a id="Discussion"></a>

## Discussion

This reason indicates that ARKit’s local-space tracking is functioning at a limited capacity. To retrieve more information about the cause, an app needs to refer to the camera’s [trackingState](../../arcamera/trackingstate-6i3pt.md). For the possible causes of this state, see [ARTrackingState](../../artrackingstate.md) and [ARTrackingStateReason](../../artrackingstatereason.md).

## See Also

### Status Reasons

- [ARGeoTrackingStateReasonNone](none.md): No issues reported.
- [ARGeoTrackingStateReasonNotAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStateReasonNeedLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStateReasonDevicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStateReasonWaitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStateReasonWaitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStateReasonGeoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.
- [ARGeoTrackingStateReasonVisualLocalizationFailed](visuallocalizationfailed.md): Localization imagery failed to match the view from the device’s camera.
- [ARGeoTrackingStateReasonNone](none.md): No issues reported.
- [ARGeoTrackingStateReasonNotAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStateReasonNeedLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStateReasonDevicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStateReasonWaitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStateReasonWaitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStateReasonGeoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.
