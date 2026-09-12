> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxsetmutedcallaction](https://developer.apple.com/documentation/callkit/cxsetmutedcallaction)

# CXSetMutedCallAction (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of the act of muting or unmuting a call.

## Declaration

```swift
class CXSetMutedCallAction
```

<a id="overview"></a>

## Overview

[CXSetMutedCallAction](cxsetmutedcallaction.md) is a concrete subclass of [CXCallAction](cxcallaction.md). When the user or the system mutes a call, the provider sends [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-4u3yu.md) to its delegate. The provider’s delegate calls the [fulfill()](cxaction/fulfill%28%29.md) method to indicate that the action was successfully performed. When a caller mutes a call, that caller is unable to communicate with other callers until they unmute the call. A muted caller still receives communication from other unmuted callers.

## Topics

### Creating New Actions

- [init(call:muted:)](cxsetmutedcallaction/init%28call_muted_%29.md): Initializes a new action for a call identified by a given UUID, as well as whether the call is muted.
- [init(coder:)](cxsetmutedcallaction/init%28coder_%29.md): Creates a new action for a call with data in an unarchiver.

### Accessing Action Attributes

- [isMuted](cxsetmutedcallaction/ismuted.md): A Boolean value that indicates whether the call is muted.

### Initializers

- [init(callUUID:muted:)](cxsetmutedcallaction/init%28calluuid_muted_%29.md)

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
- [CXSetHeldCallAction](cxsetheldcallaction.md): An encapsulation of the act of placing a call on hold or removing a call from hold.
- [CXSetTranslatingCallAction](cxsettranslatingcallaction.md): An encapsulation of the act of translating a call.

# CXSetMutedCallAction (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of the act of muting or unmuting a call.

## Declaration

```objectivec
@interface CXSetMutedCallAction : CXCallAction
```

<a id="overview"></a>

## Overview

[CXSetMutedCallAction](cxsetmutedcallaction.md) is a concrete subclass of [CXCallAction](cxcallaction.md). When the user or the system mutes a call, the provider sends [provider:performSetMutedCallAction:](cxproviderdelegate/provider%28__perform_%29-4u3yu.md) to its delegate. The provider’s delegate calls the [fulfill](cxaction/fulfill%28%29.md) method to indicate that the action was successfully performed. When a caller mutes a call, that caller is unable to communicate with other callers until they unmute the call. A muted caller still receives communication from other unmuted callers.

## Topics

### Creating New Actions

- [initWithCallUUID:muted:](cxsetmutedcallaction/init%28call_muted_%29.md): Initializes a new action for a call identified by a given UUID, as well as whether the call is muted.
- [initWithCoder:](cxsetmutedcallaction/init%28coder_%29.md): Creates a new action for a call with data in an unarchiver.

### Accessing Action Attributes

- [muted](cxsetmutedcallaction/ismuted.md): A Boolean value that indicates whether the call is muted.

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
- [CXSetHeldCallAction](cxsetheldcallaction.md): An encapsulation of the act of placing a call on hold or removing a call from hold.
- [CXSetTranslatingCallAction](cxsettranslatingcallaction.md): An encapsulation of the act of translating a call.
