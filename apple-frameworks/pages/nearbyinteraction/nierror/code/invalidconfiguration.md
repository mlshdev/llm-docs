> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nierror/code/invalidconfiguration](https://developer.apple.com/documentation/nearbyinteraction/nierror/code/invalidconfiguration)

# NIError.Code.invalidConfiguration (Swift)

**Framework:** Nearby Interaction  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

An error code that indicates that the nearby-interaction configuration isn’t valid.

## Declaration

```swift
case invalidConfiguration
```

## Mentioned In

- [Initiating and maintaining a session](../../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

The framework invalidates a session with this error code if the app provides an invalid discovery token to the [init(peerToken:)](../../ninearbypeerconfiguration/init%28peertoken_%29.md) initializer.

## See Also

### Errors

- [NIError.Code.activeSessionsLimitExceeded](activesessionslimitexceeded.md): An error code that indicates that the app reached the maximum number of sessions.
- [NIError.Code.resourceUsageTimeout](resourceusagetimeout.md): An error code that indicates that the framework timed out the session.
- [NIError.Code.sessionFailed](sessionfailed.md): An error code that indicates that the session failed.
- [NIError.Code.unsupportedPlatform](unsupportedplatform.md): An error code that indicates that the framework doesn’t support the device platform.
- [NIError.Code.userDidNotAllow](userdidnotallow.md): An error code that indicates that the user declined the request to share their relative position with nearby devices.
- [NIError.Code.invalidARConfiguration](invalidarconfiguration.md): An error that indicates the framework can’t begin Camera Assistance.
- [NIError.Code.accessoryPeerDeviceUnavailable](accessorypeerdeviceunavailable.md): An error that indicates the peer Bluetooth accessory isn’t connected or paired.
- [NIError.Code.incompatiblePeerDevice](incompatiblepeerdevice.md): An error that indicates the peer device isn’t compatible with this Nearby Interaction session instance.
- [NIError.Code.activeExtendedDistanceSessionsLimitExceeded](activeextendeddistancesessionslimitexceeded.md): An error that indicates the device exceeds the available number of active extended distance sessions.

# NIErrorCodeInvalidConfiguration (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · watchOS

An error code that indicates that the nearby-interaction configuration isn’t valid.

## Declaration

```objectivec
NIErrorCodeInvalidConfiguration
```

## Mentioned In

- [Initiating and maintaining a session](../../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

The framework invalidates a session with this error code if the app provides an invalid discovery token to the [initWithPeerToken:](../../ninearbypeerconfiguration/init%28peertoken_%29.md) initializer.

## See Also

### Errors

- [NIErrorCodeActiveSessionsLimitExceeded](activesessionslimitexceeded.md): An error code that indicates that the app reached the maximum number of sessions.
- [NIErrorCodeResourceUsageTimeout](resourceusagetimeout.md): An error code that indicates that the framework timed out the session.
- [NIErrorCodeSessionFailed](sessionfailed.md): An error code that indicates that the session failed.
- [NIErrorCodeUnsupportedPlatform](unsupportedplatform.md): An error code that indicates that the framework doesn’t support the device platform.
- [NIErrorCodeUserDidNotAllow](userdidnotallow.md): An error code that indicates that the user declined the request to share their relative position with nearby devices.
- [NIErrorCodeInvalidARConfiguration](invalidarconfiguration.md): An error that indicates the framework can’t begin Camera Assistance.
- [NIErrorCodeAccessoryPeerDeviceUnavailable](accessorypeerdeviceunavailable.md): An error that indicates the peer Bluetooth accessory isn’t connected or paired.
- [NIErrorCodeIncompatiblePeerDevice](incompatiblepeerdevice.md): An error that indicates the peer device isn’t compatible with this Nearby Interaction session instance.
- [NIErrorCodeActiveExtendedDistanceSessionsLimitExceeded](activeextendeddistancesessionslimitexceeded.md): An error that indicates the device exceeds the available number of active extended distance sessions.
