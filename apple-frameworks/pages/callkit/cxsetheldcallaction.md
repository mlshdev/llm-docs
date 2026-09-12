> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxsetheldcallaction](https://developer.apple.com/documentation/callkit/cxsetheldcallaction)

# CXSetHeldCallAction (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of the act of placing a call on hold or removing a call from hold.

## Declaration

```swift
class CXSetHeldCallAction
```

<a id="overview"></a>

## Overview

[CXSetHeldCallAction](cxsetheldcallaction.md) is a concrete subclass of [CXCallAction](cxcallaction.md).

When a caller places a call on hold, callers are unable to communicate with one another until the holding caller removes the call from hold. Placing a call on hold doesn’t end the call.

When the user or the system places a call on hold, the provider sends [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-947b1.md) to its delegate. The provider’s delegate calls the [fulfill()](cxaction/fulfill%28%29.md) method to indicate that the action was successfully performed.

## Topics

### Creating New Actions

- [init(call:onHold:)](cxsetheldcallaction/init%28call_onhold_%29.md): Initializes a new action for a call identified by a given UUID, as well as whether the call is on hold.
- [init(coder:)](cxsetheldcallaction/init%28coder_%29.md): Creates a new action to place a call on hold with data in an unarchiver.

### Accessing Action Information

- [isOnHold](cxsetheldcallaction/isonhold.md): A Boolean value that indicates whether the call is placed on hold.

### Initializers

- [init(callUUID:onHold:)](cxsetheldcallaction/init%28calluuid_onhold_%29.md)

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
- [CXSetGroupCallAction](cxsetgroupcallaction.md): An encapsulation of the act of grouping or ungrouping calls.
- [CXSetMutedCallAction](cxsetmutedcallaction.md): An encapsulation of the act of muting or unmuting a call.
- [CXSetTranslatingCallAction](cxsettranslatingcallaction.md): An encapsulation of the act of translating a call.

# CXSetHeldCallAction (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of the act of placing a call on hold or removing a call from hold.

## Declaration

```objectivec
@interface CXSetHeldCallAction : CXCallAction
```

<a id="overview"></a>

## Overview

[CXSetHeldCallAction](cxsetheldcallaction.md) is a concrete subclass of [CXCallAction](cxcallaction.md).

When a caller places a call on hold, callers are unable to communicate with one another until the holding caller removes the call from hold. Placing a call on hold doesn’t end the call.

When the user or the system places a call on hold, the provider sends [provider:performSetHeldCallAction:](cxproviderdelegate/provider%28__perform_%29-947b1.md) to its delegate. The provider’s delegate calls the [fulfill](cxaction/fulfill%28%29.md) method to indicate that the action was successfully performed.

## Topics

### Creating New Actions

- [initWithCallUUID:onHold:](cxsetheldcallaction/init%28call_onhold_%29.md): Initializes a new action for a call identified by a given UUID, as well as whether the call is on hold.
- [initWithCoder:](cxsetheldcallaction/init%28coder_%29.md): Creates a new action to place a call on hold with data in an unarchiver.

### Accessing Action Information

- [onHold](cxsetheldcallaction/isonhold.md): A Boolean value that indicates whether the call is placed on hold.

## Relationships

### Inherits From

- [CXCallAction](cxcallaction.md)

## See Also

### Call-related actions

- [CXAction](cxaction.md): An abstract class that declares a programmatic interface for objects that represent a telephony action.
- [CXCallAction](cxcallaction.md): A programmatic interface for objects that represent a telephony action associated with a call object.
- [CXEndCallAction](cxendcallaction.md): An encapsulation of the act of ending a call.
- [CXPlayDTMFCallAction](cxplaydtmfcallaction.md): An encapsulation of the act of playing a dual tone multifrequency (DTMF) sequence.
- [CXSetGroupCallAction](cxsetgroupcallaction.md): An encapsulation of the act of grouping or ungrouping calls.
- [CXSetMutedCallAction](cxsetmutedcallaction.md): An encapsulation of the act of muting or unmuting a call.
- [CXSetTranslatingCallAction](cxsettranslatingcallaction.md): An encapsulation of the act of translating a call.
