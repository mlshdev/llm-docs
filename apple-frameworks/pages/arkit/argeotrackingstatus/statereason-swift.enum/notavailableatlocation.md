> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingstatus/statereason-swift.enum/notavailableatlocation](https://developer.apple.com/documentation/arkit/argeotrackingstatus/statereason-swift.enum/notavailableatlocation)

# ARGeoTrackingStatus.StateReason.notAvailableAtLocation (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The location doesn’t provide geotracking.

## Declaration

```swift
case notAvailableAtLocation
```

<a id="Discussion"></a>

## Discussion

This reason indicates that ARKit does not have the necessary landscape data to support geo tracking at the user’s current location. See [checkAvailability(completionHandler:)](../../argeotrackingconfiguration/checkavailability%28completionhandler_%29.md) for more information.

If [checkAvailability(completionHandler:)](../../argeotrackingconfiguration/checkavailability%28completionhandler_%29.md) returns [true](https://developer.apple.com/documentation/swift/true) and an app begins a geo-tracking session, ARKit provides this state reason when the user has moved to an unsupported area.

## See Also

### Status Reasons

- [ARGeoTrackingStatus.StateReason.none](none.md): No issues reported.
- [ARGeoTrackingStatus.StateReason.needLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStatus.StateReason.devicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStatus.StateReason.worldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStatus.StateReason.waitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStatus.StateReason.geoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.
- [ARGeoTrackingStatus.StateReason.visualLocalizationFailed](visuallocalizationfailed.md): Localization imagery failed to match the view from the device’s camera.
- [ARGeoTrackingStatus.StateReason.none](none.md): No issues reported.
- [ARGeoTrackingStatus.StateReason.needLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStatus.StateReason.devicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStatus.StateReason.worldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStatus.StateReason.waitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStatus.StateReason.geoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.

# ARGeoTrackingStateReasonNotAvailableAtLocation (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

The location doesn’t provide geotracking.

## Declaration

```objectivec
ARGeoTrackingStateReasonNotAvailableAtLocation
```

<a id="Discussion"></a>

## Discussion

This reason indicates that ARKit does not have the necessary landscape data to support geo tracking at the user’s current location. See [checkAvailabilityWithCompletionHandler:](../../argeotrackingconfiguration/checkavailability%28completionhandler_%29.md) for more information.

If [checkAvailabilityWithCompletionHandler:](../../argeotrackingconfiguration/checkavailability%28completionhandler_%29.md) returns [true](https://developer.apple.com/documentation/swift/true) and an app begins a geo-tracking session, ARKit provides this state reason when the user has moved to an unsupported area.

## See Also

### Status Reasons

- [ARGeoTrackingStateReasonNone](none.md): No issues reported.
- [ARGeoTrackingStateReasonNeedLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStateReasonDevicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStateReasonWorldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStateReasonWaitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStateReasonWaitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStateReasonGeoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.
- [ARGeoTrackingStateReasonVisualLocalizationFailed](visuallocalizationfailed.md): Localization imagery failed to match the view from the device’s camera.
- [ARGeoTrackingStateReasonNone](none.md): No issues reported.
- [ARGeoTrackingStateReasonNeedLocationPermissions](needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStateReasonDevicePointedTooLow](devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStateReasonWorldTrackingUnstable](worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStateReasonWaitingForLocation](waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStateReasonWaitingForAvailabilityCheck](waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStateReasonGeoDataNotLoaded](geodatanotloaded.md): A state in which the framework downloads localization imagery.
