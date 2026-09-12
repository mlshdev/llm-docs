> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxstartcallaction](https://developer.apple.com/documentation/callkit/cxstartcallaction)

# CXStartCallAction (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of the act of initiating an outgoing call.

## Declaration

```swift
class CXStartCallAction
```

## Mentioned In

- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md)

<a id="overview"></a>

## Overview

[CXStartCallAction](cxstartcallaction.md) is a concrete subclass of [CXCallAction](cxcallaction.md). When the user initiates an outgoing call, the provider sends [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-2lem5.md) to its delegate. The provider’s delegate calls the [fulfill()](cxaction/fulfill%28%29.md) method to indicate that the action was successfully performed. To indicate that the call started at a time other than the current time, you can instead call the [fulfill(withDateStarted:)](cxstartcallaction/fulfill%28withdatestarted_%29.md).

## Topics

### Creating New Actions

- [init(call:handle:)](cxstartcallaction/init%28call_handle_%29.md): Initializes a new action to start a call with the specified UUID to a recipient with the specified handle.
- [init(coder:)](cxstartcallaction/init%28coder_%29.md): Creates a new action to start a call with data in an unarchiver.

### Accessing Action Attributes

- [isVideo](cxstartcallaction/isvideo.md): A Boolean value that indicates whether the call is a video call.
- [contactIdentifier](cxstartcallaction/contactidentifier.md): The identifier for the call recipient.
- [handle](cxstartcallaction/handle.md): The handle of the call recipient.

### Completing Actions

- [fulfill(withDateStarted:)](cxstartcallaction/fulfill%28withdatestarted_%29.md): Reports the successful execution of the action at the specified time.

### Initializers

- [init(callUUID:handle:)](cxstartcallaction/init%28calluuid_handle_%29.md)

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

### Outgoing calls

- [Sending End-to-End Encrypted VoIP Calls](sending-end-to-end-encrypted-voip-calls.md): Initiate VoIP calls when your server can’t determine whether an outgoing notification is a request for a VoIP call due to metadata encryption.
- [CXCallController](cxcallcontroller.md): A programmatic interface for interacting with and observing calls.
- [CXTransaction](cxtransaction.md): An object that contains zero or more action objects for a call controller to perform.

# CXStartCallAction (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of the act of initiating an outgoing call.

## Declaration

```objectivec
@interface CXStartCallAction : CXCallAction
```

## Mentioned In

- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md)

<a id="overview"></a>

## Overview

[CXStartCallAction](cxstartcallaction.md) is a concrete subclass of [CXCallAction](cxcallaction.md). When the user initiates an outgoing call, the provider sends [provider:performStartCallAction:](cxproviderdelegate/provider%28__perform_%29-2lem5.md) to its delegate. The provider’s delegate calls the [fulfill](cxaction/fulfill%28%29.md) method to indicate that the action was successfully performed. To indicate that the call started at a time other than the current time, you can instead call the [fulfillWithDateStarted:](cxstartcallaction/fulfill%28withdatestarted_%29.md).

## Topics

### Creating New Actions

- [initWithCallUUID:handle:](cxstartcallaction/init%28call_handle_%29.md): Initializes a new action to start a call with the specified UUID to a recipient with the specified handle.
- [initWithCoder:](cxstartcallaction/init%28coder_%29.md): Creates a new action to start a call with data in an unarchiver.

### Accessing Action Attributes

- [video](cxstartcallaction/isvideo.md): A Boolean value that indicates whether the call is a video call.
- [contactIdentifier](cxstartcallaction/contactidentifier.md): The identifier for the call recipient.
- [handle](cxstartcallaction/handle.md): The handle of the call recipient.

### Completing Actions

- [fulfillWithDateStarted:](cxstartcallaction/fulfill%28withdatestarted_%29.md): Reports the successful execution of the action at the specified time.

## Relationships

### Inherits From

- [CXCallAction](cxcallaction.md)

## See Also

### Outgoing calls

- [Sending End-to-End Encrypted VoIP Calls](sending-end-to-end-encrypted-voip-calls.md): Initiate VoIP calls when your server can’t determine whether an outgoing notification is a request for a VoIP call due to metadata encryption.
- [CXCallController](cxcallcontroller.md): A programmatic interface for interacting with and observing calls.
- [CXTransaction](cxtransaction.md): An object that contains zero or more action objects for a call controller to perform.
