> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcallaction](https://developer.apple.com/documentation/callkit/cxcallaction)

# CXCallAction (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

A programmatic interface for objects that represent a telephony action associated with a call object.

## Declaration

```swift
class CXCallAction
```

<a id="overview"></a>

## Overview

The CallKit framework provides the following concrete [CXCallAction](cxcallaction.md) subclasses.

| CXCallAction subclass | Description |
| --- | --- |
| [CXAnswerCallAction](cxanswercallaction.md) | Answers an incoming call. |
| [CXStartCallAction](cxstartcallaction.md) | Initiates an outgoing call. |
| [CXEndCallAction](cxendcallaction.md) | Ends a call. |
| [CXSetHeldCallAction](cxsetheldcallaction.md) | Places a call on hold or removes a call from hold. |
| [CXSetGroupCallAction](cxsetgroupcallaction.md) | Groups a call with another call or removes a call from a group. |
| [CXSetMutedCallAction](cxsetmutedcallaction.md) | Mutes or unmutes a call. |
| [CXSetTranslatingCallAction](cxsettranslatingcallaction.md) | Starts or stops call translation. |
| [CXPlayDTMFCallAction](cxplaydtmfcallaction.md) | Plays a DTMF (dual tone multifrequency) tone sequence on a call. |

To perform one or more actions, you add them to a new [CXTransaction](cxtransaction.md) object and pass the transaction to an instance of [CXCallController](cxcallcontroller.md) using the [request(\_:completion:)](cxcallcontroller/request%28__completion_%29.md) method. After each action is performed by the telephony provider, the provider’s delegate calls either the [fulfill()](cxaction/fulfill%28%29.md) method, indicating that the action was successfully performed, or the [fail()](cxaction/fail%28%29.md) method, to indicate that an error occurred; both of these methods set the [isComplete](cxaction/iscomplete.md) property of the action to [true](https://developer.apple.com/documentation/swift/true).

## Topics

### Creating New Call Actions

- [init(call:)](cxcallaction/init%28call_%29.md): Initializes a new action for a call identified by a given UUID.
- [init(coder:)](cxcallaction/init%28coder_%29.md): Creates a new action for a call with data in an unarchiver.

### Accessing Call Action Attributes

- [callUUID](cxcallaction/calluuid.md): The unique identifier for the call associated with the action.

### Initializers

- [init(callUUID:)](cxcallaction/init%28calluuid_%29.md)

## Relationships

### Inherits From

- [CXAction](cxaction.md)

### Inherited By

- [CXAnswerCallAction](cxanswercallaction.md)
- [CXEndCallAction](cxendcallaction.md)
- [CXPlayDTMFCallAction](cxplaydtmfcallaction.md)
- [CXSetGroupCallAction](cxsetgroupcallaction.md)
- [CXSetHeldCallAction](cxsetheldcallaction.md)
- [CXSetMutedCallAction](cxsetmutedcallaction.md)
- [CXSetTranslatingCallAction](cxsettranslatingcallaction.md)
- [CXStartCallAction](cxstartcallaction.md)

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

- [CXAction](cxaction.md): An abstract class that declares a programmatic interface for objects that represent a telephony action.
- [CXEndCallAction](cxendcallaction.md): An encapsulation of the act of ending a call.
- [CXPlayDTMFCallAction](cxplaydtmfcallaction.md): An encapsulation of the act of playing a dual tone multifrequency (DTMF) sequence.
- [CXSetGroupCallAction](cxsetgroupcallaction.md): An encapsulation of the act of grouping or ungrouping calls.
- [CXSetHeldCallAction](cxsetheldcallaction.md): An encapsulation of the act of placing a call on hold or removing a call from hold.
- [CXSetMutedCallAction](cxsetmutedcallaction.md): An encapsulation of the act of muting or unmuting a call.
- [CXSetTranslatingCallAction](cxsettranslatingcallaction.md): An encapsulation of the act of translating a call.

# CXCallAction (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

A programmatic interface for objects that represent a telephony action associated with a call object.

## Declaration

```objectivec
@interface CXCallAction : CXAction
```

<a id="overview"></a>

## Overview

The CallKit framework provides the following concrete [CXCallAction](cxcallaction.md) subclasses.

| CXCallAction subclass | Description |
| --- | --- |
| [CXAnswerCallAction](cxanswercallaction.md) | Answers an incoming call. |
| [CXStartCallAction](cxstartcallaction.md) | Initiates an outgoing call. |
| [CXEndCallAction](cxendcallaction.md) | Ends a call. |
| [CXSetHeldCallAction](cxsetheldcallaction.md) | Places a call on hold or removes a call from hold. |
| [CXSetGroupCallAction](cxsetgroupcallaction.md) | Groups a call with another call or removes a call from a group. |
| [CXSetMutedCallAction](cxsetmutedcallaction.md) | Mutes or unmutes a call. |
| [CXSetTranslatingCallAction](cxsettranslatingcallaction.md) | Starts or stops call translation. |
| [CXPlayDTMFCallAction](cxplaydtmfcallaction.md) | Plays a DTMF (dual tone multifrequency) tone sequence on a call. |

To perform one or more actions, you add them to a new [CXTransaction](cxtransaction.md) object and pass the transaction to an instance of [CXCallController](cxcallcontroller.md) using the [requestTransaction:completion:](cxcallcontroller/request%28__completion_%29.md) method. After each action is performed by the telephony provider, the provider’s delegate calls either the [fulfill](cxaction/fulfill%28%29.md) method, indicating that the action was successfully performed, or the [fail](cxaction/fail%28%29.md) method, to indicate that an error occurred; both of these methods set the [complete](cxaction/iscomplete.md) property of the action to [true](https://developer.apple.com/documentation/swift/true).

## Topics

### Creating New Call Actions

- [initWithCallUUID:](cxcallaction/init%28call_%29.md): Initializes a new action for a call identified by a given UUID.
- [initWithCoder:](cxcallaction/init%28coder_%29.md): Creates a new action for a call with data in an unarchiver.

### Accessing Call Action Attributes

- [callUUID](cxcallaction/calluuid.md): The unique identifier for the call associated with the action.

## Relationships

### Inherits From

- [CXAction](cxaction.md)

### Inherited By

- [CXAnswerCallAction](cxanswercallaction.md)
- [CXEndCallAction](cxendcallaction.md)
- [CXPlayDTMFCallAction](cxplaydtmfcallaction.md)
- [CXSetGroupCallAction](cxsetgroupcallaction.md)
- [CXSetHeldCallAction](cxsetheldcallaction.md)
- [CXSetMutedCallAction](cxsetmutedcallaction.md)
- [CXSetTranslatingCallAction](cxsettranslatingcallaction.md)
- [CXStartCallAction](cxstartcallaction.md)

## See Also

### Call-related actions

- [CXAction](cxaction.md): An abstract class that declares a programmatic interface for objects that represent a telephony action.
- [CXEndCallAction](cxendcallaction.md): An encapsulation of the act of ending a call.
- [CXPlayDTMFCallAction](cxplaydtmfcallaction.md): An encapsulation of the act of playing a dual tone multifrequency (DTMF) sequence.
- [CXSetGroupCallAction](cxsetgroupcallaction.md): An encapsulation of the act of grouping or ungrouping calls.
- [CXSetHeldCallAction](cxsetheldcallaction.md): An encapsulation of the act of placing a call on hold or removing a call from hold.
- [CXSetMutedCallAction](cxsetmutedcallaction.md): An encapsulation of the act of muting or unmuting a call.
- [CXSetTranslatingCallAction](cxsettranslatingcallaction.md): An encapsulation of the act of translating a call.
