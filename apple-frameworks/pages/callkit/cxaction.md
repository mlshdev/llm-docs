> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxaction](https://developer.apple.com/documentation/callkit/cxaction)

# CXAction (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

An abstract class that declares a programmatic interface for objects that represent a telephony action.

## Declaration

```swift
class CXAction
```

<a id="overview"></a>

## Overview

Each instance of [CXAction](cxaction.md) is uniquely identified by a [uuid](cxaction/uuid.md), which is generated on initialization. An action also tracks whether it has been completed or not.

To perform one or more actions, you add them to a new [CXTransaction](cxtransaction.md) object and pass the transaction to an instance of [CXCallController](cxcallcontroller.md) using the [request(\_:completion:)](cxcallcontroller/request%28__completion_%29.md) method. After each action is performed by the telephony provider, the provider’s delegate calls either the [fulfill()](cxaction/fulfill%28%29.md) method, indicating that the action was successfully performed, or the [fail()](cxaction/fail%28%29.md) method, to indicate that an error occurred; both of these methods set the [isComplete](cxaction/iscomplete.md) property of the action to [true](https://developer.apple.com/documentation/swift/true).

The [CXCallAction](cxcallaction.md) subclass is an abstract class that represents an action associated with a [CXCall](cxcall.md) object. The CallKit framework provides several concrete [CXCallAction](cxcallaction.md) subclasses to represent actions such as answering a call and putting a call on hold.

## Topics

### Creating an Action

- [init()](cxaction/init%28%29.md): Initializes a new telephony action.
- [init(coder:)](cxaction/init%28coder_%29.md): Creates a new telephony action with data in an unarchiver.

### Accessing Action Attributes

- [uuid](cxaction/uuid.md): The unique identifier for the action.
- [isComplete](cxaction/iscomplete.md): A Boolean value that indicates whether the action has been performed by the provider.
- [timeoutDate](cxaction/timeoutdate.md): The time after which the action cannot be completed.

### Completing Actions

- [fulfill()](cxaction/fulfill%28%29.md): Reports the successful execution of the action.
- [fail()](cxaction/fail%28%29.md): Reports the failed execution of the action.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

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

### Call-related actions

- [CXCallAction](cxcallaction.md): A programmatic interface for objects that represent a telephony action associated with a call object.
- [CXEndCallAction](cxendcallaction.md): An encapsulation of the act of ending a call.
- [CXPlayDTMFCallAction](cxplaydtmfcallaction.md): An encapsulation of the act of playing a dual tone multifrequency (DTMF) sequence.
- [CXSetGroupCallAction](cxsetgroupcallaction.md): An encapsulation of the act of grouping or ungrouping calls.
- [CXSetHeldCallAction](cxsetheldcallaction.md): An encapsulation of the act of placing a call on hold or removing a call from hold.
- [CXSetMutedCallAction](cxsetmutedcallaction.md): An encapsulation of the act of muting or unmuting a call.
- [CXSetTranslatingCallAction](cxsettranslatingcallaction.md): An encapsulation of the act of translating a call.

# CXAction (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

An abstract class that declares a programmatic interface for objects that represent a telephony action.

## Declaration

```objectivec
@interface CXAction : NSObject
```

<a id="overview"></a>

## Overview

Each instance of [CXAction](cxaction.md) is uniquely identified by a [UUID](cxaction/uuid.md), which is generated on initialization. An action also tracks whether it has been completed or not.

To perform one or more actions, you add them to a new [CXTransaction](cxtransaction.md) object and pass the transaction to an instance of [CXCallController](cxcallcontroller.md) using the [requestTransaction:completion:](cxcallcontroller/request%28__completion_%29.md) method. After each action is performed by the telephony provider, the provider’s delegate calls either the [fulfill](cxaction/fulfill%28%29.md) method, indicating that the action was successfully performed, or the [fail](cxaction/fail%28%29.md) method, to indicate that an error occurred; both of these methods set the [complete](cxaction/iscomplete.md) property of the action to [true](https://developer.apple.com/documentation/swift/true).

The [CXCallAction](cxcallaction.md) subclass is an abstract class that represents an action associated with a [CXCall](cxcall.md) object. The CallKit framework provides several concrete [CXCallAction](cxcallaction.md) subclasses to represent actions such as answering a call and putting a call on hold.

## Topics

### Creating an Action

- [init](cxaction/init%28%29.md): Initializes a new telephony action.
- [initWithCoder:](cxaction/init%28coder_%29.md): Creates a new telephony action with data in an unarchiver.

### Accessing Action Attributes

- [UUID](cxaction/uuid.md): The unique identifier for the action.
- [complete](cxaction/iscomplete.md): A Boolean value that indicates whether the action has been performed by the provider.
- [timeoutDate](cxaction/timeoutdate.md): The time after which the action cannot be completed.

### Completing Actions

- [fulfill](cxaction/fulfill%28%29.md): Reports the successful execution of the action.
- [fail](cxaction/fail%28%29.md): Reports the failed execution of the action.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CXCallAction](cxcallaction.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Call-related actions

- [CXCallAction](cxcallaction.md): A programmatic interface for objects that represent a telephony action associated with a call object.
- [CXEndCallAction](cxendcallaction.md): An encapsulation of the act of ending a call.
- [CXPlayDTMFCallAction](cxplaydtmfcallaction.md): An encapsulation of the act of playing a dual tone multifrequency (DTMF) sequence.
- [CXSetGroupCallAction](cxsetgroupcallaction.md): An encapsulation of the act of grouping or ungrouping calls.
- [CXSetHeldCallAction](cxsetheldcallaction.md): An encapsulation of the act of placing a call on hold or removing a call from hold.
- [CXSetMutedCallAction](cxsetmutedcallaction.md): An encapsulation of the act of muting or unmuting a call.
- [CXSetTranslatingCallAction](cxsettranslatingcallaction.md): An encapsulation of the act of translating a call.
