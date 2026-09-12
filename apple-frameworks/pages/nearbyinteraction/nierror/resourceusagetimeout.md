> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nierror/resourceusagetimeout](https://developer.apple.com/documentation/nearbyinteraction/nierror/resourceusagetimeout)

# resourceUsageTimeout

**Framework:** Nearby Interaction  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

An error code that indicates that the framework timed out the session.

## Declaration

```swift
static var resourceUsageTimeout: NIError.Code { get }
```

<a id="Discussion"></a>

## Discussion

The framework times out a session in some cases to preserve resources, such as battery life. An app needs to watch for timed-out peers. If the app wishes to continue interaction with a timed-out peer device, the app needs to begin a new nearby-interaction session.

## See Also

### Identifying an error cause

- [NIError.Code](code.md): Codes that identify errors in Nearby Interaction.
- [activeSessionsLimitExceeded](activesessionslimitexceeded.md): An error code that indicates that the app reached the maximum number of sessions.
- [invalidConfiguration](invalidconfiguration.md): An error code that indicates that the nearby-interaction configuration isn’t valid.
- [sessionFailed](sessionfailed.md): An error code that indicates that the session failed.
- [unsupportedPlatform](unsupportedplatform.md): An error code that indicates that the framework doesn’t support the device platform.
- [userDidNotAllow](userdidnotallow.md): An error code that indicates that the user declined the request to share their relative position with nearby devices.
- [invalidARConfiguration](invalidarconfiguration.md): An error that indicates the framework can’t begin Camera Assistance.
- [activeExtendedDistanceSessionsLimitExceeded](activeextendeddistancesessionslimitexceeded.md): An error code that indicates that the device exceeds the available number of active extended distance sessions.
- [incompatiblePeerDevice](incompatiblepeerdevice.md): An error that indicates the peer device isn’t compatible with this Nearby Interaction session instance.
- [accessoryPeerDeviceUnavailable](accessorypeerdeviceunavailable.md): An error that indicates the peer Bluetooth accessory isn’t connected or paired.
