> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingstatus/statereason-swift.enum/geodatanotloaded](https://developer.apple.com/documentation/arkit/argeotrackingstatus/statereason-swift.enum/geodatanotloaded)

# ARGeoTrackingStatus.StateReason.geoDataNotLoaded (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A state in which the framework downloads localization imagery.

## Declaration

```swift
case geoDataNotLoaded
```

<a id="Discussion"></a>

## Discussion

ARKit provides this reason in state [ARGeoTrackingStatus.State.localizing](../state-swift.enum/localizing.md) when the session is actively attempting to download localization imagery (see [Refine the user’s position with imagery](../../argeotrackingconfiguration.md#Refine-the-users-position-with-imagery)).

If this state persists for too long, it may indicate a network issue. If a reasonable amount of time elapses in this state reason, the app may consider requesting that the user check their internet connection.

## See Also

### Status Reasons

- [ARGeoTrackingStatus.StateReason.none](none.md): No issues reported.
- [ARGeoTrackingStatus.StateReason.notAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStatus.StateReason.needLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStatus.StateReason.devicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStatus.StateReason.worldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStatus.StateReason.waitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStatus.StateReason.visualLocalizationFailed](visuallocalizationfailed.md): Localization imagery failed to match the view from the device’s camera.
- [ARGeoTrackingStatus.StateReason.none](none.md): No issues reported.
- [ARGeoTrackingStatus.StateReason.notAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStatus.StateReason.needLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStatus.StateReason.devicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStatus.StateReason.worldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStatus.StateReason.waitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.

# ARGeoTrackingStateReasonGeoDataNotLoaded (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

A state in which the framework downloads localization imagery.

## Declaration

```objectivec
ARGeoTrackingStateReasonGeoDataNotLoaded
```

<a id="Discussion"></a>

## Discussion

ARKit provides this reason in state [ARGeoTrackingStateLocalizing](../state-swift.enum/localizing.md) when the session is actively attempting to download localization imagery (see [Refine the user’s position with imagery](../../argeotrackingconfiguration.md#Refine-the-users-position-with-imagery)).

If this state persists for too long, it may indicate a network issue. If a reasonable amount of time elapses in this state reason, the app may consider requesting that the user check their internet connection.

## See Also

### Status Reasons

- [ARGeoTrackingStateReasonNone](none.md): No issues reported.
- [ARGeoTrackingStateReasonNotAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStateReasonNeedLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStateReasonDevicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStateReasonWorldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStateReasonWaitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStateReasonWaitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStateReasonVisualLocalizationFailed](visuallocalizationfailed.md): Localization imagery failed to match the view from the device’s camera.
- [ARGeoTrackingStateReasonNone](none.md): No issues reported.
- [ARGeoTrackingStateReasonNotAvailableAtLocation](notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStateReasonNeedLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStateReasonDevicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStateReasonWorldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStateReasonWaitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStateReasonWaitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
