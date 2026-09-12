> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nierror/code](https://developer.apple.com/documentation/nearbyinteraction/nierror/code)

# NIError.Code (Swift)

**Framework:** Nearby Interaction  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Codes that identify errors in Nearby Interaction.

## Declaration

```swift
enum Code
```

<a id="overview"></a>

## Overview

This enumeration uses [session(\_:didInvalidateWith:)](../nisessiondelegate/session%28__didinvalidatewith_%29.md) to collect the errors the framework provides to the delegate.

## Topics

### Errors

- [NIError.Code.activeSessionsLimitExceeded](code/activesessionslimitexceeded.md): An error code that indicates that the app reached the maximum number of sessions.
- [NIError.Code.invalidConfiguration](code/invalidconfiguration.md): An error code that indicates that the nearby-interaction configuration isn’t valid.
- [NIError.Code.resourceUsageTimeout](code/resourceusagetimeout.md): An error code that indicates that the framework timed out the session.
- [NIError.Code.sessionFailed](code/sessionfailed.md): An error code that indicates that the session failed.
- [NIError.Code.unsupportedPlatform](code/unsupportedplatform.md): An error code that indicates that the framework doesn’t support the device platform.
- [NIError.Code.userDidNotAllow](code/userdidnotallow.md): An error code that indicates that the user declined the request to share their relative position with nearby devices.
- [NIError.Code.invalidARConfiguration](code/invalidarconfiguration.md): An error that indicates the framework can’t begin Camera Assistance.
- [NIError.Code.accessoryPeerDeviceUnavailable](code/accessorypeerdeviceunavailable.md): An error that indicates the peer Bluetooth accessory isn’t connected or paired.
- [NIError.Code.incompatiblePeerDevice](code/incompatiblepeerdevice.md): An error that indicates the peer device isn’t compatible with this Nearby Interaction session instance.
- [NIError.Code.activeExtendedDistanceSessionsLimitExceeded](code/activeextendeddistancesessionslimitexceeded.md): An error that indicates the device exceeds the available number of active extended distance sessions.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [NIError](../nierror.md): An error Nearby Interaction reports.
- [NIErrorDomain](../nierrordomain.md): A unique error domain for Nearby Interaction.

# NIErrorCode (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · watchOS

Codes that identify errors in Nearby Interaction.

## Declaration

```objectivec
enum NIErrorCode : NSInteger;
```

<a id="overview"></a>

## Overview

This enumeration uses [session:didInvalidateWithError:](../nisessiondelegate/session%28__didinvalidatewith_%29.md) to collect the errors the framework provides to the delegate.

## Topics

### Errors

- [NIErrorCodeActiveSessionsLimitExceeded](code/activesessionslimitexceeded.md): An error code that indicates that the app reached the maximum number of sessions.
- [NIErrorCodeInvalidConfiguration](code/invalidconfiguration.md): An error code that indicates that the nearby-interaction configuration isn’t valid.
- [NIErrorCodeResourceUsageTimeout](code/resourceusagetimeout.md): An error code that indicates that the framework timed out the session.
- [NIErrorCodeSessionFailed](code/sessionfailed.md): An error code that indicates that the session failed.
- [NIErrorCodeUnsupportedPlatform](code/unsupportedplatform.md): An error code that indicates that the framework doesn’t support the device platform.
- [NIErrorCodeUserDidNotAllow](code/userdidnotallow.md): An error code that indicates that the user declined the request to share their relative position with nearby devices.
- [NIErrorCodeInvalidARConfiguration](code/invalidarconfiguration.md): An error that indicates the framework can’t begin Camera Assistance.
- [NIErrorCodeAccessoryPeerDeviceUnavailable](code/accessorypeerdeviceunavailable.md): An error that indicates the peer Bluetooth accessory isn’t connected or paired.
- [NIErrorCodeIncompatiblePeerDevice](code/incompatiblepeerdevice.md): An error that indicates the peer device isn’t compatible with this Nearby Interaction session instance.
- [NIErrorCodeActiveExtendedDistanceSessionsLimitExceeded](code/activeextendeddistancesessionslimitexceeded.md): An error that indicates the device exceeds the available number of active extended distance sessions.

## See Also

### Errors

- [NIErrorDomain](../nierrordomain.md): A unique error domain for Nearby Interaction.
