> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nierror/activeextendeddistancesessionslimitexceeded](https://developer.apple.com/documentation/nearbyinteraction/nierror/activeextendeddistancesessionslimitexceeded)

# activeExtendedDistanceSessionsLimitExceeded

**Framework:** Nearby Interaction  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · watchOS 10.0+

An error code that indicates that the device exceeds the available number of active extended distance sessions.

## Declaration

```swift
static var activeExtendedDistanceSessionsLimitExceeded: NIError.Code { get }
```

## See Also

### Identifying an error cause

- [NIError.Code](code.md): Codes that identify errors in Nearby Interaction.
- [activeSessionsLimitExceeded](activesessionslimitexceeded.md): An error code that indicates that the app reached the maximum number of sessions.
- [invalidConfiguration](invalidconfiguration.md): An error code that indicates that the nearby-interaction configuration isn’t valid.
- [resourceUsageTimeout](resourceusagetimeout.md): An error code that indicates that the framework timed out the session.
- [sessionFailed](sessionfailed.md): An error code that indicates that the session failed.
- [unsupportedPlatform](unsupportedplatform.md): An error code that indicates that the framework doesn’t support the device platform.
- [userDidNotAllow](userdidnotallow.md): An error code that indicates that the user declined the request to share their relative position with nearby devices.
- [invalidARConfiguration](invalidarconfiguration.md): An error that indicates the framework can’t begin Camera Assistance.
- [incompatiblePeerDevice](incompatiblepeerdevice.md): An error that indicates the peer device isn’t compatible with this Nearby Interaction session instance.
- [accessoryPeerDeviceUnavailable](accessorypeerdeviceunavailable.md): An error that indicates the peer Bluetooth accessory isn’t connected or paired.
