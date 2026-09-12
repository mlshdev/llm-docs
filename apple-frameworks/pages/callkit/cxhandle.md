> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxhandle](https://developer.apple.com/documentation/callkit/cxhandle)

# CXHandle (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

A way to reach a call recipient, such as a phone number or email address.

## Declaration

```swift
class CXHandle
```

## Mentioned In

- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md)

<a id="overview"></a>

## Overview

When the telephony provider receives an incoming call or the user starts an outgoing call, the other caller is identified by a [CXHandle](cxhandle.md) object. For a caller identified by a phone number, the handle type is [CXHandle.HandleType.phoneNumber](cxhandle/handletype/phonenumber.md) and the value is a sequence of digits. For a caller identified by an email address, the handle type is [CXHandle.HandleType.emailAddress](cxhandle/handletype/emailaddress.md) and the value is an email address. For a caller identified in any other way, the handle type is [CXHandle.HandleType.generic](cxhandle/handletype/generic.md) and the value typically follows some domain-specific format, such as a username, numeric ID, or URL.

## Topics

### Creating New Handles

- [init(type:value:)](cxhandle/init%28type_value_%29.md): Initializes a new handle of a given type with the specified value.

### Accessing Handle Attributes

- [type](cxhandle/type.md): The type of the handle.
- [value](cxhandle/value.md): The value of the handle.

### Constants

- [CXHandle.HandleType](cxhandle/handletype.md): The possible types of handles.

### Initializers

- [init(coder:)](cxhandle/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Call information

- [CXCall](cxcall.md): A telephony call.
- [CXCallObserver](cxcallobserver.md): A programmatic interface for an object that manages a list of active calls and observes call changes.
- [CXCallObserverDelegate](cxcallobserverdelegate.md): A collection of methods the system calls when a call changes state.

# CXHandle (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

A way to reach a call recipient, such as a phone number or email address.

## Declaration

```objectivec
@interface CXHandle : NSObject
```

## Mentioned In

- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md)

<a id="overview"></a>

## Overview

When the telephony provider receives an incoming call or the user starts an outgoing call, the other caller is identified by a [CXHandle](cxhandle.md) object. For a caller identified by a phone number, the handle type is [CXHandleTypePhoneNumber](cxhandle/handletype/phonenumber.md) and the value is a sequence of digits. For a caller identified by an email address, the handle type is [CXHandleTypeEmailAddress](cxhandle/handletype/emailaddress.md) and the value is an email address. For a caller identified in any other way, the handle type is [CXHandleTypeGeneric](cxhandle/handletype/generic.md) and the value typically follows some domain-specific format, such as a username, numeric ID, or URL.

## Topics

### Creating New Handles

- [initWithType:value:](cxhandle/init%28type_value_%29.md): Initializes a new handle of a given type with the specified value.

### Accessing Handle Attributes

- [type](cxhandle/type.md): The type of the handle.
- [value](cxhandle/value.md): The value of the handle.

### Comparing Handles

- [isEqualToHandle:](cxhandle/isequaltohandle_.md): Returns a Boolean value that indicates whether a given handle is equal to the receiver.

### Constants

- [CXHandleType](cxhandle/handletype.md): The possible types of handles.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Call information

- [CXCall](cxcall.md): A telephony call.
- [CXCallObserver](cxcallobserver.md): A programmatic interface for an object that manages a list of active calls and observes call changes.
- [CXCallObserverDelegate](cxcallobserverdelegate.md): A collection of methods the system calls when a call changes state.
