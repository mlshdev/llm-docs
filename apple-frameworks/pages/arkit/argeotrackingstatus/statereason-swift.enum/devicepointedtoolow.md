> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingstatus/statereason-swift.enum/devicepointedtoolow](https://developer.apple.com/documentation/arkit/argeotrackingstatus/statereason-swift.enum/devicepointedtoolow)

# ARGeoTrackingStatus.StateReason.devicePointedTooLow (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The position of the device is too low for geotracking.

## Declaration

```swift
case devicePointedTooLow
```

<a id="Discussion"></a>

## Discussion

ARKit provides the app with this reason when the app is in state [ARGeoTrackingStatus.State.localizing](../state-swift.enum/localizing.md) and the device is not capturing enough of the necessary live-camera imagery needed for visual localization because the user is pointing the camera too low. To resolve the issue, the app needs to instruct the user to raise the device and follow the guidance in [Assisting the User with Visual Localization](../state-swift.enum/localizing.md#Assisting-the-User-with-Visual-Localization).

## See Also

### Status Reasons

- [ARGeoTrackingStatus.StateReason.none](none.md): No issues reported.
- [ARGeoTrackingStatus.StateReason.notAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStatus.StateReason.needLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStatus.StateReason.worldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStatus.StateReason.waitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStatus.StateReason.geoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.
- [ARGeoTrackingStatus.StateReason.visualLocalizationFailed](visuallocalizationfailed.md): Localization imagery failed to match the view from the device’s camera.
- [ARGeoTrackingStatus.StateReason.none](none.md): No issues reported.
- [ARGeoTrackingStatus.StateReason.notAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStatus.StateReason.needLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStatus.StateReason.worldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStatus.StateReason.waitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStatus.StateReason.geoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.

# ARGeoTrackingStateReasonDevicePointedTooLow (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

The position of the device is too low for geotracking.

## Declaration

```objectivec
ARGeoTrackingStateReasonDevicePointedTooLow
```

<a id="Discussion"></a>

## Discussion

ARKit provides the app with this reason when the app is in state [ARGeoTrackingStateLocalizing](../state-swift.enum/localizing.md) and the device is not capturing enough of the necessary live-camera imagery needed for visual localization because the user is pointing the camera too low. To resolve the issue, the app needs to instruct the user to raise the device and follow the guidance in [Assisting the User with Visual Localization](../state-swift.enum/localizing.md#Assisting-the-User-with-Visual-Localization).

## See Also

### Status Reasons

- [ARGeoTrackingStateReasonNone](none.md): No issues reported.
- [ARGeoTrackingStateReasonNotAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStateReasonNeedLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStateReasonWorldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStateReasonWaitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStateReasonWaitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStateReasonGeoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.
- [ARGeoTrackingStateReasonVisualLocalizationFailed](visuallocalizationfailed.md): Localization imagery failed to match the view from the device’s camera.
- [ARGeoTrackingStateReasonNone](none.md): No issues reported.
- [ARGeoTrackingStateReasonNotAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStateReasonNeedLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStateReasonWorldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStateReasonWaitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStateReasonWaitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStateReasonGeoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.
