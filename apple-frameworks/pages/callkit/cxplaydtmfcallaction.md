> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxplaydtmfcallaction](https://developer.apple.com/documentation/callkit/cxplaydtmfcallaction)

# CXPlayDTMFCallAction (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of the act of playing a dual tone multifrequency (DTMF) sequence.

## Declaration

```swift
class CXPlayDTMFCallAction
```

<a id="overview"></a>

## Overview

[CXPlayDTMFCallAction](cxplaydtmfcallaction.md) is a concrete subclass of [CXCallAction](cxcallaction.md). Whenever digits are transmitted during a call, whether from a user interacting with a number pad or following a hard or soft pause, the provider sends [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-4htxt.md) to its delegate. The provider’s delegate calls the [fulfill()](cxaction/fulfill%28%29.md) method to indicate that the action was successfully performed.

The provider sends [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-4htxt.md) for successive actions only after the current action is fulfilled. When interacting with the number pad, each entered digit constitutes its own action. Digits following a hard or soft pause, however, are passed to [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-4htxt.md) as a single string of digits. For example, if a user taps the 4 button on the number pad, followed by the 2 button, the delegate is sent [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-4htxt.md) for the digit `4` and waits for the action to be fulfilled; after the action is fulfilled, the delegate is sent [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-4htxt.md) for the digit `2`.

CallKit automatically plays the corresponding DTMF frequencies for any digits transmitted over a call. The app is responsible for managing the timing and handling of digits as part of fulfilling the action.

## Topics

### Creating New Actions

- [init(call:digits:type:)](cxplaydtmfcallaction/init%28call_digits_type_%29.md): Initializes a new action for a call identified by a given UUID, as well as a specified type and sequence of digits.
- [init(coder:)](cxplaydtmfcallaction/init%28coder_%29.md): Creates a new action to play dual-tone multifrequency (DTMF) tones with data in an unarchiver.

### Accessing Action Information

- [digits](cxplaydtmfcallaction/digits.md): The digits tapped by the user into the in-call keypad or included in the dial string.
- [type](cxplaydtmfcallaction/type.md): The type of the call action.

### Constants

- [CXPlayDTMFCallAction.ActionType](cxplaydtmfcallaction/actiontype.md): The types of events that generate dial tones.

### Initializers

- [init(callUUID:digits:type:)](cxplaydtmfcallaction/init%28calluuid_digits_type_%29.md)

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
- [CXSetGroupCallAction](cxsetgroupcallaction.md): An encapsulation of the act of grouping or ungrouping calls.
- [CXSetHeldCallAction](cxsetheldcallaction.md): An encapsulation of the act of placing a call on hold or removing a call from hold.
- [CXSetMutedCallAction](cxsetmutedcallaction.md): An encapsulation of the act of muting or unmuting a call.
- [CXSetTranslatingCallAction](cxsettranslatingcallaction.md): An encapsulation of the act of translating a call.

# CXPlayDTMFCallAction (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of the act of playing a dual tone multifrequency (DTMF) sequence.

## Declaration

```objectivec
@interface CXPlayDTMFCallAction : CXCallAction
```

<a id="overview"></a>

## Overview

[CXPlayDTMFCallAction](cxplaydtmfcallaction.md) is a concrete subclass of [CXCallAction](cxcallaction.md). Whenever digits are transmitted during a call, whether from a user interacting with a number pad or following a hard or soft pause, the provider sends [provider:performPlayDTMFCallAction:](cxproviderdelegate/provider%28__perform_%29-4htxt.md) to its delegate. The provider’s delegate calls the [fulfill](cxaction/fulfill%28%29.md) method to indicate that the action was successfully performed.

The provider sends [provider:performPlayDTMFCallAction:](cxproviderdelegate/provider%28__perform_%29-4htxt.md) for successive actions only after the current action is fulfilled. When interacting with the number pad, each entered digit constitutes its own action. Digits following a hard or soft pause, however, are passed to [provider:performPlayDTMFCallAction:](cxproviderdelegate/provider%28__perform_%29-4htxt.md) as a single string of digits. For example, if a user taps the 4 button on the number pad, followed by the 2 button, the delegate is sent [provider:performPlayDTMFCallAction:](cxproviderdelegate/provider%28__perform_%29-4htxt.md) for the digit `4` and waits for the action to be fulfilled; after the action is fulfilled, the delegate is sent [provider:performPlayDTMFCallAction:](cxproviderdelegate/provider%28__perform_%29-4htxt.md) for the digit `2`.

CallKit automatically plays the corresponding DTMF frequencies for any digits transmitted over a call. The app is responsible for managing the timing and handling of digits as part of fulfilling the action.

## Topics

### Creating New Actions

- [initWithCallUUID:digits:type:](cxplaydtmfcallaction/init%28call_digits_type_%29.md): Initializes a new action for a call identified by a given UUID, as well as a specified type and sequence of digits.
- [initWithCoder:](cxplaydtmfcallaction/init%28coder_%29.md): Creates a new action to play dual-tone multifrequency (DTMF) tones with data in an unarchiver.

### Accessing Action Information

- [digits](cxplaydtmfcallaction/digits.md): The digits tapped by the user into the in-call keypad or included in the dial string.
- [type](cxplaydtmfcallaction/type.md): The type of the call action.

### Constants

- [CXPlayDTMFCallActionType](cxplaydtmfcallaction/actiontype.md): The types of events that generate dial tones.

## Relationships

### Inherits From

- [CXCallAction](cxcallaction.md)

## See Also

### Call-related actions

- [CXAction](cxaction.md): An abstract class that declares a programmatic interface for objects that represent a telephony action.
- [CXCallAction](cxcallaction.md): A programmatic interface for objects that represent a telephony action associated with a call object.
- [CXEndCallAction](cxendcallaction.md): An encapsulation of the act of ending a call.
- [CXSetGroupCallAction](cxsetgroupcallaction.md): An encapsulation of the act of grouping or ungrouping calls.
- [CXSetHeldCallAction](cxsetheldcallaction.md): An encapsulation of the act of placing a call on hold or removing a call from hold.
- [CXSetMutedCallAction](cxsetmutedcallaction.md): An encapsulation of the act of muting or unmuting a call.
- [CXSetTranslatingCallAction](cxsettranslatingcallaction.md): An encapsulation of the act of translating a call.
