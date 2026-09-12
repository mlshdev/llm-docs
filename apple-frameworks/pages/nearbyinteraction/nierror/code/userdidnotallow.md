> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nierror/code/userdidnotallow](https://developer.apple.com/documentation/nearbyinteraction/nierror/code/userdidnotallow)

# NIError.Code.userDidNotAllow (Swift)

**Framework:** Nearby Interaction  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

An error code that indicates that the user declined the request to share their relative position with nearby devices.

## Declaration

```swift
case userDidNotAllow
```

## Mentioned In

- [Initiating and maintaining a session](../../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

In this case, the user needs to enable Nearby Interaction in Settings. For more information, see [Initiating and maintaining a session](../../initiating-and-maintaining-a-session.md).

## See Also

### Errors

- [NIError.Code.activeSessionsLimitExceeded](activesessionslimitexceeded.md): An error code that indicates that the app reached the maximum number of sessions.
- [NIError.Code.invalidConfiguration](invalidconfiguration.md): An error code that indicates that the nearby-interaction configuration isn’t valid.
- [NIError.Code.resourceUsageTimeout](resourceusagetimeout.md): An error code that indicates that the framework timed out the session.
- [NIError.Code.sessionFailed](sessionfailed.md): An error code that indicates that the session failed.
- [NIError.Code.unsupportedPlatform](unsupportedplatform.md): An error code that indicates that the framework doesn’t support the device platform.
- [NIError.Code.invalidARConfiguration](invalidarconfiguration.md): An error that indicates the framework can’t begin Camera Assistance.
- [NIError.Code.accessoryPeerDeviceUnavailable](accessorypeerdeviceunavailable.md): An error that indicates the peer Bluetooth accessory isn’t connected or paired.
- [NIError.Code.incompatiblePeerDevice](incompatiblepeerdevice.md): An error that indicates the peer device isn’t compatible with this Nearby Interaction session instance.
- [NIError.Code.activeExtendedDistanceSessionsLimitExceeded](activeextendeddistancesessionslimitexceeded.md): An error that indicates the device exceeds the available number of active extended distance sessions.

# NIErrorCodeUserDidNotAllow (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · watchOS

An error code that indicates that the user declined the request to share their relative position with nearby devices.

## Declaration

```objectivec
NIErrorCodeUserDidNotAllow
```

## Mentioned In

- [Initiating and maintaining a session](../../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

In this case, the user needs to enable Nearby Interaction in Settings. For more information, see [Initiating and maintaining a session](../../initiating-and-maintaining-a-session.md).

## See Also

### Errors

- [NIErrorCodeActiveSessionsLimitExceeded](activesessionslimitexceeded.md): An error code that indicates that the app reached the maximum number of sessions.
- [NIErrorCodeInvalidConfiguration](invalidconfiguration.md): An error code that indicates that the nearby-interaction configuration isn’t valid.
- [NIErrorCodeResourceUsageTimeout](resourceusagetimeout.md): An error code that indicates that the framework timed out the session.
- [NIErrorCodeSessionFailed](sessionfailed.md): An error code that indicates that the session failed.
- [NIErrorCodeUnsupportedPlatform](unsupportedplatform.md): An error code that indicates that the framework doesn’t support the device platform.
- [NIErrorCodeInvalidARConfiguration](invalidarconfiguration.md): An error that indicates the framework can’t begin Camera Assistance.
- [NIErrorCodeAccessoryPeerDeviceUnavailable](accessorypeerdeviceunavailable.md): An error that indicates the peer Bluetooth accessory isn’t connected or paired.
- [NIErrorCodeIncompatiblePeerDevice](incompatiblepeerdevice.md): An error that indicates the peer device isn’t compatible with this Nearby Interaction session instance.
- [NIErrorCodeActiveExtendedDistanceSessionsLimitExceeded](activeextendeddistancesessionslimitexceeded.md): An error that indicates the device exceeds the available number of active extended distance sessions.
