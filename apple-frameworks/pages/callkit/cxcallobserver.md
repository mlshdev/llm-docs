> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcallobserver](https://developer.apple.com/documentation/callkit/cxcallobserver)

# CXCallObserver (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

A programmatic interface for an object that manages a list of active calls and observes call changes.

## Declaration

```swift
class CXCallObserver
```

<a id="overview"></a>

## Overview

You can retrieve a list of active calls on an [CXCallObserver](cxcallobserver.md) object using the [calls](cxcallobserver/calls.md) property. You can also provide an object conforming to the [CXCallObserverDelegate](cxcallobserverdelegate.md) protocol as the call observer delegate using the [setDelegate(\_:queue:)](cxcallobserver/setdelegate%28__queue_%29.md) method to respond to any active call changes.

VoIP apps typically interact with the [CXCallObserver](cxcallobserver.md) object returned by the [callObserver](cxcallcontroller/callobserver.md) property of a [CXCallController](cxcallcontroller.md) instance. However, any app can create a new [CXCallObserver](cxcallobserver.md) object to be notified of any calls activity on the system.

## Topics

### Setting a Delegate

- [setDelegate(\_:queue:)](cxcallobserver/setdelegate%28__queue_%29.md): Sets a call observer delegate, specifying an optional queue on which to execute delegate methods.

### Accessing Calls

- [calls](cxcallobserver/calls.md): Returns the active calls of the telephony provider.

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

- [CXCall](cxcall.md): A telephony call.
- [CXCallObserverDelegate](cxcallobserverdelegate.md): A collection of methods the system calls when a call changes state.
- [CXHandle](cxhandle.md): A way to reach a call recipient, such as a phone number or email address.

# CXCallObserver (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

A programmatic interface for an object that manages a list of active calls and observes call changes.

## Declaration

```objectivec
@interface CXCallObserver : NSObject
```

<a id="overview"></a>

## Overview

You can retrieve a list of active calls on an [CXCallObserver](cxcallobserver.md) object using the [calls](cxcallobserver/calls.md) property. You can also provide an object conforming to the [CXCallObserverDelegate](cxcallobserverdelegate.md) protocol as the call observer delegate using the [setDelegate:queue:](cxcallobserver/setdelegate%28__queue_%29.md) method to respond to any active call changes.

VoIP apps typically interact with the [CXCallObserver](cxcallobserver.md) object returned by the [callObserver](cxcallcontroller/callobserver.md) property of a [CXCallController](cxcallcontroller.md) instance. However, any app can create a new [CXCallObserver](cxcallobserver.md) object to be notified of any calls activity on the system.

## Topics

### Setting a Delegate

- [setDelegate:queue:](cxcallobserver/setdelegate%28__queue_%29.md): Sets a call observer delegate, specifying an optional queue on which to execute delegate methods.

### Accessing Calls

- [calls](cxcallobserver/calls.md): Returns the active calls of the telephony provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Call information

- [CXCall](cxcall.md): A telephony call.
- [CXCallObserverDelegate](cxcallobserverdelegate.md): A collection of methods the system calls when a call changes state.
- [CXHandle](cxhandle.md): A way to reach a call recipient, such as a phone number or email address.
