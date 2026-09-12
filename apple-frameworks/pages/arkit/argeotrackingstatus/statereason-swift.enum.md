> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingstatus/statereason-swift.enum](https://developer.apple.com/documentation/arkit/argeotrackingstatus/statereason-swift.enum)

# ARGeoTrackingStatus.StateReason (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The reasons for the app’s geotracking status.

## Declaration

```swift
enum StateReason
```

<a id="overview"></a>

## Overview

These possible values of [stateReason](statereason-swift.property.md) provide more information about a geotracking session’s current [state](state-swift.property.md).

## Topics

### Status Reasons

- [ARGeoTrackingStatus.StateReason.none](statereason-swift.enum/none.md): No issues reported.
- [ARGeoTrackingStatus.StateReason.notAvailableAtLocation](statereason-swift.enum/notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStatus.StateReason.needLocationPermissions](statereason-swift.enum/needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStatus.StateReason.devicePointedTooLow](statereason-swift.enum/devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStatus.StateReason.worldTrackingUnstable](statereason-swift.enum/worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStatus.StateReason.waitingForLocation](statereason-swift.enum/waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck](statereason-swift.enum/waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStatus.StateReason.geoDataNotLoaded](statereason-swift.enum/geodatanotloaded.md): A state in which the framework downloads localization imagery.
- [ARGeoTrackingStatus.StateReason.visualLocalizationFailed](statereason-swift.enum/visuallocalizationfailed.md): Localization imagery failed to match the view from the device’s camera.
- [ARGeoTrackingStatus.StateReason.none](statereason-swift.enum/none.md): No issues reported.
- [ARGeoTrackingStatus.StateReason.notAvailableAtLocation](statereason-swift.enum/notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStatus.StateReason.needLocationPermissions](statereason-swift.enum/needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStatus.StateReason.devicePointedTooLow](statereason-swift.enum/devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStatus.StateReason.worldTrackingUnstable](statereason-swift.enum/worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStatus.StateReason.waitingForLocation](statereason-swift.enum/waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck](statereason-swift.enum/waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStatus.StateReason.geoDataNotLoaded](statereason-swift.enum/geodatanotloaded.md): A state in which the framework downloads localization imagery.
- [ARGeoTrackingStatus.StateReason.visualLocalizationFailed](statereason-swift.enum/visuallocalizationfailed.md): Localization imagery failed to match the view from the device’s camera.

### Initializers

- [init(rawValue:)](statereason-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining the Reason

- [stateReason](statereason-swift.property.md): The reasons for the app’s geotracking status.

# ARGeoTrackingStateReason (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

The reasons for the app’s geotracking status.

## Declaration

```objectivec
enum ARGeoTrackingStateReason : NSInteger;
```

<a id="overview"></a>

## Overview

These possible values of [stateReason](statereason-swift.property.md) provide more information about a geotracking session’s current [state](state-swift.property.md).

## Topics

### Status Reasons

- [ARGeoTrackingStateReasonNone](statereason-swift.enum/none.md): No issues reported.
- [ARGeoTrackingStateReasonNotAvailableAtLocation](statereason-swift.enum/notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStateReasonNeedLocationPermissions](statereason-swift.enum/needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStateReasonDevicePointedTooLow](statereason-swift.enum/devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStateReasonWorldTrackingUnstable](statereason-swift.enum/worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStateReasonWaitingForLocation](statereason-swift.enum/waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStateReasonWaitingForAvailabilityCheck](statereason-swift.enum/waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStateReasonGeoDataNotLoaded](statereason-swift.enum/geodatanotloaded.md): A state in which the framework downloads localization imagery.
- [ARGeoTrackingStateReasonVisualLocalizationFailed](statereason-swift.enum/visuallocalizationfailed.md): Localization imagery failed to match the view from the device’s camera.
- [ARGeoTrackingStateReasonNone](statereason-swift.enum/none.md): No issues reported.
- [ARGeoTrackingStateReasonNotAvailableAtLocation](statereason-swift.enum/notavailableatlocation.md): The location doesn’t provide geotracking.
- [ARGeoTrackingStateReasonNeedLocationPermissions](statereason-swift.enum/needlocationpermissions.md): The location requires user permission for geotracking.
- [ARGeoTrackingStateReasonDevicePointedTooLow](statereason-swift.enum/devicepointedtoolow.md): The position of the device is too low for geotracking.
- [ARGeoTrackingStateReasonWorldTrackingUnstable](statereason-swift.enum/worldtrackingunstable.md): The position or motion of the device makes geotracking unstable.
- [ARGeoTrackingStateReasonWaitingForLocation](statereason-swift.enum/waitingforlocation.md): A state in which the framework performs a check for the user’s GPS position.
- [ARGeoTrackingStateReasonWaitingForAvailabilityCheck](statereason-swift.enum/waitingforavailabilitycheck.md): A state in which the framework performs a check for geotracking availability at the user’s location.
- [ARGeoTrackingStateReasonGeoDataNotLoaded](statereason-swift.enum/geodatanotloaded.md): A state in which the framework downloads localization imagery.
- [ARGeoTrackingStateReasonVisualLocalizationFailed](statereason-swift.enum/visuallocalizationfailed.md): Localization imagery failed to match the view from the device’s camera.

## See Also

### Determining the Reason

- [stateReason](statereason-swift.property.md): The reasons for the app’s geotracking status.
