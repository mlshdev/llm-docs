> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxanswercallaction](https://developer.apple.com/documentation/callkit/cxanswercallaction)

# CXAnswerCallAction (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of the act of answering an incoming call.

## Declaration

```swift
class CXAnswerCallAction
```

<a id="overview"></a>

## Overview

[CXAnswerCallAction](cxanswercallaction.md) is a concrete subclass of [CXCallAction](cxcallaction.md).

When an incoming call is allowed by the system and approved by the user, the provider sends [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-h4in.md) to its delegate. The provider’s delegate calls the [fulfill()](cxaction/fulfill%28%29.md) method to indicate that the action was successfully performed. To indicate that the call connected at a time other than the current time, you can instead call the [fulfill(withDateConnected:)](cxanswercallaction/fulfill%28withdateconnected_%29.md).

## Topics

### Completing Actions

- [fulfill(withDateConnected:)](cxanswercallaction/fulfill%28withdateconnected_%29.md): Reports the successful execution of the action at the specified time.

## Relationships

### Inherits From

- [CXCallAction](cxcallaction.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Incoming calls

- [Responding to VoIP Notifications from PushKit](../pushkit/responding-to-voip-notifications-from-pushkit.md): Receive incoming Voice-over-IP (VoIP) push notifications and use them to display the system call interface to the user.
- [CXCallUpdate](cxcallupdate.md): An encapsulation of new and changed information about a call.

# CXAnswerCallAction (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of the act of answering an incoming call.

## Declaration

```objectivec
@interface CXAnswerCallAction : CXCallAction
```

<a id="overview"></a>

## Overview

[CXAnswerCallAction](cxanswercallaction.md) is a concrete subclass of [CXCallAction](cxcallaction.md).

When an incoming call is allowed by the system and approved by the user, the provider sends [provider:performAnswerCallAction:](cxproviderdelegate/provider%28__perform_%29-h4in.md) to its delegate. The provider’s delegate calls the [fulfill](cxaction/fulfill%28%29.md) method to indicate that the action was successfully performed. To indicate that the call connected at a time other than the current time, you can instead call the [fulfillWithDateConnected:](cxanswercallaction/fulfill%28withdateconnected_%29.md).

## Topics

### Completing Actions

- [fulfillWithDateConnected:](cxanswercallaction/fulfill%28withdateconnected_%29.md): Reports the successful execution of the action at the specified time.

## Relationships

### Inherits From

- [CXCallAction](cxcallaction.md)

## See Also

### Incoming calls

- [Responding to VoIP Notifications from PushKit](../pushkit/responding-to-voip-notifications-from-pushkit.md): Receive incoming Voice-over-IP (VoIP) push notifications and use them to display the system call interface to the user.
- [CXCallUpdate](cxcallupdate.md): An encapsulation of new and changed information about a call.
