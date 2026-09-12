> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxsetgroupcallaction](https://developer.apple.com/documentation/callkit/cxsetgroupcallaction)

# CXSetGroupCallAction (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of the act of grouping or ungrouping calls.

## Declaration

```swift
class CXSetGroupCallAction
```

<a id="overview"></a>

## Overview

[CXSetGroupCallAction](cxsetgroupcallaction.md) is a concrete subclass of [CXCallAction](cxcallaction.md). When the user or the system groups a call with another call, the provider sends [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-9masw.md) to its delegate. The provider’s delegate calls the [fulfill()](cxaction/fulfill%28%29.md) method to indicate that the action was successfully performed. A group call allows more than two recipients to simultaneously communicate with one another.

## Topics

### Creating New Actions

- [init(call:callUUIDToGroupWith:)](cxsetgroupcallaction/init%28call_calluuidtogroupwith_%29.md): Initializes a new action for a call identified by a given UUID, as well as a call to group with identified by another UUID.
- [init(coder:)](cxsetgroupcallaction/init%28coder_%29.md): Creates a new action to group calls with data in an unarchiver.

### Accessing Action Attributes

- [callUUIDToGroupWith](cxsetgroupcallaction/calluuidtogroupwith.md): The unique identifier of the call to be grouped with the call associated with the receiver.

### Initializers

- [init(callUUID:callUUIDToGroupWith:)](cxsetgroupcallaction/init%28calluuid_calluuidtogroupwith_%29.md)

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

### Call-related actions

- [CXAction](cxaction.md): An abstract class that declares a programmatic interface for objects that represent a telephony action.
- [CXCallAction](cxcallaction.md): A programmatic interface for objects that represent a telephony action associated with a call object.
- [CXEndCallAction](cxendcallaction.md): An encapsulation of the act of ending a call.
- [CXPlayDTMFCallAction](cxplaydtmfcallaction.md): An encapsulation of the act of playing a dual tone multifrequency (DTMF) sequence.
- [CXSetHeldCallAction](cxsetheldcallaction.md): An encapsulation of the act of placing a call on hold or removing a call from hold.
- [CXSetMutedCallAction](cxsetmutedcallaction.md): An encapsulation of the act of muting or unmuting a call.
- [CXSetTranslatingCallAction](cxsettranslatingcallaction.md): An encapsulation of the act of translating a call.

# CXSetGroupCallAction (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of the act of grouping or ungrouping calls.

## Declaration

```objectivec
@interface CXSetGroupCallAction : CXCallAction
```

<a id="overview"></a>

## Overview

[CXSetGroupCallAction](cxsetgroupcallaction.md) is a concrete subclass of [CXCallAction](cxcallaction.md). When the user or the system groups a call with another call, the provider sends [provider:performSetGroupCallAction:](cxproviderdelegate/provider%28__perform_%29-9masw.md) to its delegate. The provider’s delegate calls the [fulfill](cxaction/fulfill%28%29.md) method to indicate that the action was successfully performed. A group call allows more than two recipients to simultaneously communicate with one another.

## Topics

### Creating New Actions

- [initWithCallUUID:callUUIDToGroupWith:](cxsetgroupcallaction/init%28call_calluuidtogroupwith_%29.md): Initializes a new action for a call identified by a given UUID, as well as a call to group with identified by another UUID.
- [initWithCoder:](cxsetgroupcallaction/init%28coder_%29.md): Creates a new action to group calls with data in an unarchiver.

### Accessing Action Attributes

- [callUUIDToGroupWith](cxsetgroupcallaction/calluuidtogroupwith.md): The unique identifier of the call to be grouped with the call associated with the receiver.

## Relationships

### Inherits From

- [CXCallAction](cxcallaction.md)

## See Also

### Call-related actions

- [CXAction](cxaction.md): An abstract class that declares a programmatic interface for objects that represent a telephony action.
- [CXCallAction](cxcallaction.md): A programmatic interface for objects that represent a telephony action associated with a call object.
- [CXEndCallAction](cxendcallaction.md): An encapsulation of the act of ending a call.
- [CXPlayDTMFCallAction](cxplaydtmfcallaction.md): An encapsulation of the act of playing a dual tone multifrequency (DTMF) sequence.
- [CXSetHeldCallAction](cxsetheldcallaction.md): An encapsulation of the act of placing a call on hold or removing a call from hold.
- [CXSetMutedCallAction](cxsetmutedcallaction.md): An encapsulation of the act of muting or unmuting a call.
- [CXSetTranslatingCallAction](cxsettranslatingcallaction.md): An encapsulation of the act of translating a call.
