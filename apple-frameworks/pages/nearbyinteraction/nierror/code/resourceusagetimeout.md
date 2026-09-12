> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nierror/code/resourceusagetimeout](https://developer.apple.com/documentation/nearbyinteraction/nierror/code/resourceusagetimeout)

# NIError.Code.resourceUsageTimeout (Swift)

**Framework:** Nearby Interaction  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

An error code that indicates that the framework timed out the session.

## Declaration

```swift
case resourceUsageTimeout
```

<a id="Discussion"></a>

## Discussion

The framework times out a session in some cases to preserve resources, such as battery life. An app needs to watch for timed-out peers. If the app wishes to continue interaction with a timed-out peer device, the app needs to begin a new nearby-interaction session.

## See Also

### Errors

- [NIError.Code.activeSessionsLimitExceeded](activesessionslimitexceeded.md): An error code that indicates that the app reached the maximum number of sessions.
- [NIError.Code.invalidConfiguration](invalidconfiguration.md): An error code that indicates that the nearby-interaction configuration isn’t valid.
- [NIError.Code.sessionFailed](sessionfailed.md): An error code that indicates that the session failed.
- [NIError.Code.unsupportedPlatform](unsupportedplatform.md): An error code that indicates that the framework doesn’t support the device platform.
- [NIError.Code.userDidNotAllow](userdidnotallow.md): An error code that indicates that the user declined the request to share their relative position with nearby devices.
- [NIError.Code.invalidARConfiguration](invalidarconfiguration.md): An error that indicates the framework can’t begin Camera Assistance.
- [NIError.Code.accessoryPeerDeviceUnavailable](accessorypeerdeviceunavailable.md): An error that indicates the peer Bluetooth accessory isn’t connected or paired.
- [NIError.Code.incompatiblePeerDevice](incompatiblepeerdevice.md): An error that indicates the peer device isn’t compatible with this Nearby Interaction session instance.
- [NIError.Code.activeExtendedDistanceSessionsLimitExceeded](activeextendeddistancesessionslimitexceeded.md): An error that indicates the device exceeds the available number of active extended distance sessions.

# NIErrorCodeResourceUsageTimeout (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · watchOS

An error code that indicates that the framework timed out the session.

## Declaration

```objectivec
NIErrorCodeResourceUsageTimeout
```

<a id="Discussion"></a>

## Discussion

The framework times out a session in some cases to preserve resources, such as battery life. An app needs to watch for timed-out peers. If the app wishes to continue interaction with a timed-out peer device, the app needs to begin a new nearby-interaction session.

## See Also

### Errors

- [NIErrorCodeActiveSessionsLimitExceeded](activesessionslimitexceeded.md): An error code that indicates that the app reached the maximum number of sessions.
- [NIErrorCodeInvalidConfiguration](invalidconfiguration.md): An error code that indicates that the nearby-interaction configuration isn’t valid.
- [NIErrorCodeSessionFailed](sessionfailed.md): An error code that indicates that the session failed.
- [NIErrorCodeUnsupportedPlatform](unsupportedplatform.md): An error code that indicates that the framework doesn’t support the device platform.
- [NIErrorCodeUserDidNotAllow](userdidnotallow.md): An error code that indicates that the user declined the request to share their relative position with nearby devices.
- [NIErrorCodeInvalidARConfiguration](invalidarconfiguration.md): An error that indicates the framework can’t begin Camera Assistance.
- [NIErrorCodeAccessoryPeerDeviceUnavailable](accessorypeerdeviceunavailable.md): An error that indicates the peer Bluetooth accessory isn’t connected or paired.
- [NIErrorCodeIncompatiblePeerDevice](incompatiblepeerdevice.md): An error that indicates the peer device isn’t compatible with this Nearby Interaction session instance.
- [NIErrorCodeActiveExtendedDistanceSessionsLimitExceeded](activeextendeddistancesessionslimitexceeded.md): An error that indicates the device exceeds the available number of active extended distance sessions.
