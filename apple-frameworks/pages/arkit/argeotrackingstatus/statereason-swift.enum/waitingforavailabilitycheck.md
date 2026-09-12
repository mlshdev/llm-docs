> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingstatus/statereason-swift.enum/waitingforavailabilitycheck](https://developer.apple.com/documentation/arkit/argeotrackingstatus/statereason-swift.enum/waitingforavailabilitycheck)

# ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A state in which the framework performs a check for geotracking availability at the user’s location.

## Declaration

```swift
case waitingForAvailabilityCheck
```

<a id="Discussion"></a>

## Discussion

While in this state, the app waits for the geotracking subsystem to determine geotracking availability at the user’s GPS location. Inform the user of the check in progress; for instance, present a message alerting them to the geotracking initialization process.

## See Also

### Status Reasons

- [ARGeoTrackingStatus.StateReason.none](none.md): No issues reported.
- [ARGeoTrackingStatus.StateReason.notAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStatus.StateReason.needLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStatus.StateReason.devicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStatus.StateReason.worldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStatus.StateReason.waitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStatus.StateReason.geoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.
- [ARGeoTrackingStatus.StateReason.visualLocalizationFailed](visuallocalizationfailed.md): Localization imagery failed to match the view from the device’s camera.
- [ARGeoTrackingStatus.StateReason.none](none.md): No issues reported.
- [ARGeoTrackingStatus.StateReason.notAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStatus.StateReason.needLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStatus.StateReason.devicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStatus.StateReason.worldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStatus.StateReason.waitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStatus.StateReason.geoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.

# ARGeoTrackingStateReasonWaitingForAvailabilityCheck (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

A state in which the framework performs a check for geotracking availability at the user’s location.

## Declaration

```objectivec
ARGeoTrackingStateReasonWaitingForAvailabilityCheck
```

<a id="Discussion"></a>

## Discussion

While in this state, the app waits for the geotracking subsystem to determine geotracking availability at the user’s GPS location. Inform the user of the check in progress; for instance, present a message alerting them to the geotracking initialization process.

## See Also

### Status Reasons

- [ARGeoTrackingStateReasonNone](none.md): No issues reported.
- [ARGeoTrackingStateReasonNotAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStateReasonNeedLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStateReasonDevicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStateReasonWorldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStateReasonWaitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStateReasonGeoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.
- [ARGeoTrackingStateReasonVisualLocalizationFailed](visuallocalizationfailed.md): Localization imagery failed to match the view from the device’s camera.
- [ARGeoTrackingStateReasonNone](none.md): No issues reported.
- [ARGeoTrackingStateReasonNotAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStateReasonNeedLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStateReasonDevicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStateReasonWorldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStateReasonWaitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStateReasonGeoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.
