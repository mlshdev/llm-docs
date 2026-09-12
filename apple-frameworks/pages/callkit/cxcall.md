> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcall](https://developer.apple.com/documentation/callkit/cxcall)

# CXCall (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

A telephony call.

## Declaration

```swift
class CXCall
```

<a id="overview"></a>

## Overview

You don’t instantiate [CXCall](cxcall.md) objects directly. Instead, [CXCall](cxcall.md) objects are created by the telephony provider when an incoming call is received or an outgoing call is initiated.

Each [CXCall](cxcall.md) object is uniquely identified by a [uuid](cxcall/uuid.md). You primarily interact with calls by passing their unique identifiers to CallKit APIs. For example, to place a call on hold, you create an instance of [CXSetHeldCallAction](cxsetheldcallaction.md) with [init(call:onHold:)](cxsetheldcallaction/init%28call_onhold_%29.md) passing the [uuid](cxcall/uuid.md) of the call and [true](https://developer.apple.com/documentation/swift/true), create a [CXTransaction](cxtransaction.md) object containing the action, and then pass the transaction to an instance of [CXCallController](cxcallcontroller.md) using the [request(\_:completion:)](cxcallcontroller/request%28__completion_%29.md) method.

You can use the [CXCallObserver](cxcallobserver.md) managed by a [CXCallController](cxcallcontroller.md) to access [CXCall](cxcall.md) instances for active calls using the [calls](cxcallobserver/calls.md) property, or provide an object conforming to the [CXCallObserverDelegate](cxcallobserverdelegate.md) protocol to be notified anytime a call is updated.

## Topics

### Accessing Call Attributes

- [uuid](cxcall/uuid.md): The unique identifier for the call.
- [isOutgoing](cxcall/isoutgoing.md): A Boolean value that indicates whether the call is outgoing.
- [hasConnected](cxcall/hasconnected.md): A Boolean value that indicates whether the call has connected.
- [hasEnded](cxcall/hasended.md): A Boolean value that indicates whether the call has ended.
- [isOnHold](cxcall/isonhold.md): A Boolean value that indicates whether the call is on hold.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Call information

- [CXCallObserver](cxcallobserver.md): A programmatic interface for an object that manages a list of active calls and observes call changes.
- [CXCallObserverDelegate](cxcallobserverdelegate.md): A collection of methods the system calls when a call changes state.
- [CXHandle](cxhandle.md): A way to reach a call recipient, such as a phone number or email address.

# CXCall (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

A telephony call.

## Declaration

```objectivec
@interface CXCall : NSObject
```

<a id="overview"></a>

## Overview

You don’t instantiate [CXCall](cxcall.md) objects directly. Instead, [CXCall](cxcall.md) objects are created by the telephony provider when an incoming call is received or an outgoing call is initiated.

Each [CXCall](cxcall.md) object is uniquely identified by a [UUID](cxcall/uuid.md). You primarily interact with calls by passing their unique identifiers to CallKit APIs. For example, to place a call on hold, you create an instance of [CXSetHeldCallAction](cxsetheldcallaction.md) with [initWithCallUUID:onHold:](cxsetheldcallaction/init%28call_onhold_%29.md) passing the [UUID](cxcall/uuid.md) of the call and [true](https://developer.apple.com/documentation/swift/true), create a [CXTransaction](cxtransaction.md) object containing the action, and then pass the transaction to an instance of [CXCallController](cxcallcontroller.md) using the [requestTransaction:completion:](cxcallcontroller/request%28__completion_%29.md) method.

You can use the [CXCallObserver](cxcallobserver.md) managed by a [CXCallController](cxcallcontroller.md) to access [CXCall](cxcall.md) instances for active calls using the [calls](cxcallobserver/calls.md) property, or provide an object conforming to the [CXCallObserverDelegate](cxcallobserverdelegate.md) protocol to be notified anytime a call is updated.

## Topics

### Accessing Call Attributes

- [UUID](cxcall/uuid.md): The unique identifier for the call.
- [outgoing](cxcall/isoutgoing.md): A Boolean value that indicates whether the call is outgoing.
- [hasConnected](cxcall/hasconnected.md): A Boolean value that indicates whether the call has connected.
- [hasEnded](cxcall/hasended.md): A Boolean value that indicates whether the call has ended.
- [onHold](cxcall/isonhold.md): A Boolean value that indicates whether the call is on hold.

### Comparing Calls

- [isEqualToCall:](cxcall/isequaltocall_.md): Returns a Boolean value that indicates whether a given call is equal to the receiver.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Call information

- [CXCallObserver](cxcallobserver.md): A programmatic interface for an object that manages a list of active calls and observes call changes.
- [CXCallObserverDelegate](cxcallobserverdelegate.md): A collection of methods the system calls when a call changes state.
- [CXHandle](cxhandle.md): A way to reach a call recipient, such as a phone number or email address.
