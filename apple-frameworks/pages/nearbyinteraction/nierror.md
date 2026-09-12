> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nierror](https://developer.apple.com/documentation/nearbyinteraction/nierror)

# NIError

**Framework:** Nearby Interaction  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

An error Nearby Interaction reports.

## Declaration

```swift
struct NIError
```

<a id="overview"></a>

## Overview

Implement the [session(\_:didInvalidateWith:)](nisessiondelegate/session%28__didinvalidatewith_%29.md) callback to check for errors.

## Topics

### Identifying an error cause

- [NIError.Code](nierror/code.md): Codes that identify errors in Nearby Interaction.
- [activeSessionsLimitExceeded](nierror/activesessionslimitexceeded.md): An error code that indicates that the app reached the maximum number of sessions.
- [invalidConfiguration](nierror/invalidconfiguration.md): An error code that indicates that the nearby-interaction configuration isn’t valid.
- [resourceUsageTimeout](nierror/resourceusagetimeout.md): An error code that indicates that the framework timed out the session.
- [sessionFailed](nierror/sessionfailed.md): An error code that indicates that the session failed.
- [unsupportedPlatform](nierror/unsupportedplatform.md): An error code that indicates that the framework doesn’t support the device platform.
- [userDidNotAllow](nierror/userdidnotallow.md): An error code that indicates that the user declined the request to share their relative position with nearby devices.
- [invalidARConfiguration](nierror/invalidarconfiguration.md): An error that indicates the framework can’t begin Camera Assistance.
- [activeExtendedDistanceSessionsLimitExceeded](nierror/activeextendeddistancesessionslimitexceeded.md): An error code that indicates that the device exceeds the available number of active extended distance sessions.
- [incompatiblePeerDevice](nierror/incompatiblepeerdevice.md): An error that indicates the peer device isn’t compatible with this Nearby Interaction session instance.
- [accessoryPeerDeviceUnavailable](nierror/accessorypeerdeviceunavailable.md): An error that indicates the peer Bluetooth accessory isn’t connected or paired.

### Type Properties

- [errorDomain](nierror/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [NIError.Code](nierror/code.md): Codes that identify errors in Nearby Interaction.
- [NIErrorDomain](nierrordomain.md): A unique error domain for Nearby Interaction.
