> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxendcallaction](https://developer.apple.com/documentation/callkit/cxendcallaction)

# CXEndCallAction (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of the act of ending a call.

## Declaration

```swift
class CXEndCallAction
```

<a id="overview"></a>

## Overview

[CXEndCallAction](cxendcallaction.md) is a concrete subclass of [CXCallAction](cxcallaction.md). When the user initiates an outgoing call, the provider sends [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-9a0m.md) to its delegate. The provider’s delegate calls the [fulfill()](cxaction/fulfill%28%29.md) method to indicate that the action was successfully performed. To indicate that the call ended at a time other than the current time, you can instead call the [fulfill(withDateEnded:)](cxendcallaction/fulfill%28withdateended_%29.md)

## Topics

### Completing Actions

- [fulfill(withDateEnded:)](cxendcallaction/fulfill%28withdateended_%29.md): Reports the successful execution of the action at the specified time.

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
- [CXPlayDTMFCallAction](cxplaydtmfcallaction.md): An encapsulation of the act of playing a dual tone multifrequency (DTMF) sequence.
- [CXSetGroupCallAction](cxsetgroupcallaction.md): An encapsulation of the act of grouping or ungrouping calls.
- [CXSetHeldCallAction](cxsetheldcallaction.md): An encapsulation of the act of placing a call on hold or removing a call from hold.
- [CXSetMutedCallAction](cxsetmutedcallaction.md): An encapsulation of the act of muting or unmuting a call.
- [CXSetTranslatingCallAction](cxsettranslatingcallaction.md): An encapsulation of the act of translating a call.

# CXEndCallAction (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of the act of ending a call.

## Declaration

```objectivec
@interface CXEndCallAction : CXCallAction
```

<a id="overview"></a>

## Overview

[CXEndCallAction](cxendcallaction.md) is a concrete subclass of [CXCallAction](cxcallaction.md). When the user initiates an outgoing call, the provider sends [provider:performEndCallAction:](cxproviderdelegate/provider%28__perform_%29-9a0m.md) to its delegate. The provider’s delegate calls the [fulfill](cxaction/fulfill%28%29.md) method to indicate that the action was successfully performed. To indicate that the call ended at a time other than the current time, you can instead call the [fulfillWithDateEnded:](cxendcallaction/fulfill%28withdateended_%29.md)

## Topics

### Completing Actions

- [fulfillWithDateEnded:](cxendcallaction/fulfill%28withdateended_%29.md): Reports the successful execution of the action at the specified time.

## Relationships

### Inherits From

- [CXCallAction](cxcallaction.md)

## See Also

### Call-related actions

- [CXAction](cxaction.md): An abstract class that declares a programmatic interface for objects that represent a telephony action.
- [CXCallAction](cxcallaction.md): A programmatic interface for objects that represent a telephony action associated with a call object.
- [CXPlayDTMFCallAction](cxplaydtmfcallaction.md): An encapsulation of the act of playing a dual tone multifrequency (DTMF) sequence.
- [CXSetGroupCallAction](cxsetgroupcallaction.md): An encapsulation of the act of grouping or ungrouping calls.
- [CXSetHeldCallAction](cxsetheldcallaction.md): An encapsulation of the act of placing a call on hold or removing a call from hold.
- [CXSetMutedCallAction](cxsetmutedcallaction.md): An encapsulation of the act of muting or unmuting a call.
- [CXSetTranslatingCallAction](cxsettranslatingcallaction.md): An encapsulation of the act of translating a call.
