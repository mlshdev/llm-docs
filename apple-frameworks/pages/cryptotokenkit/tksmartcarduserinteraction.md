> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcarduserinteraction](https://developer.apple.com/documentation/cryptotokenkit/tksmartcarduserinteraction)

# TKSmartCardUserInteraction (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The base class for encapsulating user interaction with a Smart Card reader.

## Declaration

```swift
class TKSmartCardUserInteraction
```

<a id="overview"></a>

## Overview

There are two types of user interactions: those for secure PIN change and those for secure PIN validation. These interactions are instances of the [TKSmartCardUserInteractionForSecurePINChange](tksmartcarduserinteractionforsecurepinchange.md), or [TKSmartCardUserInteractionForSecurePINVerification](tksmartcarduserinteractionforsecurepinverification.md) subclasses of [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md), respectively. [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md) is a subclass of `TKSmartCardUserInteraction`.

You interact with instances of one of the subclasses of [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md)when calling the [userInteractionForSecurePINChange(\_:apdu:currentPINByteOffset:newPINByteOffset:)](tksmartcard/userinteractionforsecurepinchange%28__apdu_currentpinbyteoffset_newpinbyteoffset_%29.md) and [userInteractionForSecurePINVerification(\_:apdu:pinByteOffset:)](tksmartcard/userinteractionforsecurepinverification%28__apdu_pinbyteoffset_%29.md) methods on an [TKSmartCard](tksmartcard.md) object.

## Topics

### Handling User Interaction Events

- [delegate](tksmartcarduserinteraction/delegate.md): The delegate for observing events that occur during the user interaction.
- [TKSmartCardUserInteractionDelegate](tksmartcarduserinteractiondelegate.md): The interface implemented by a Smart Card user interaction delegate to handle user interaction events.

### Configuring Timeout

- [initialTimeout](tksmartcarduserinteraction/initialtimeout.md): The timeout, in seconds, for initial interaction. If set to `0`, the reader-defined default timeout is used. `0` by default.
- [interactionTimeout](tksmartcarduserinteraction/interactiontimeout.md): The timeout, in seconds, after the first key stroke. If set to `0`, the reader-defined default timeout is used. `0` by default.

### Starting and Stopping

- [run(reply:)](tksmartcarduserinteraction/run%28reply_%29.md): Runs the user interaction and asynchronously receives a reply.
- [cancel()](tksmartcarduserinteraction/cancel%28%29.md): Attempts to cancel an interaction started by calling [run(reply:)](tksmartcarduserinteraction/run%28reply_%29.md). For certain interactions, cancellation may not be available.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing User Interaction

- [userInteractionForSecurePINVerification(\_:apdu:pinByteOffset:)](tksmartcard/userinteractionforsecurepinverification%28__apdu_pinbyteoffset_%29.md): Creates and returns a new user interaction object for secure PIN verification using the Smart Card reader facilities.
- [userInteractionForSecurePINChange(\_:apdu:currentPINByteOffset:newPINByteOffset:)](tksmartcard/userinteractionforsecurepinchange%28__apdu_currentpinbyteoffset_newpinbyteoffset_%29.md): Creates a new user interaction object for secure PIN change using the smart card reader facilities (typically a HW keypad).
- [TKSmartCardPINFormat](tksmartcardpinformat.md): The formatting properties for a PIN, such as character encoding and length constraints.
- [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md): A representation of user interaction for secure PIN operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINChange](tksmartcarduserinteractionforsecurepinchange.md): A representation of the user interaction for secure PIN change operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINVerification](tksmartcarduserinteractionforsecurepinverification.md): A representation of the user interaction for secure PIN change verification on a Smart Card reader.

# TKSmartCardUserInteraction (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The base class for encapsulating user interaction with a Smart Card reader.

## Declaration

```objectivec
@interface TKSmartCardUserInteraction : NSObject
```

<a id="overview"></a>

## Overview

There are two types of user interactions: those for secure PIN change and those for secure PIN validation. These interactions are instances of the [TKSmartCardUserInteractionForSecurePINChange](tksmartcarduserinteractionforsecurepinchange.md), or [TKSmartCardUserInteractionForSecurePINVerification](tksmartcarduserinteractionforsecurepinverification.md) subclasses of [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md), respectively. [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md) is a subclass of `TKSmartCardUserInteraction`.

You interact with instances of one of the subclasses of [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md)when calling the [userInteractionForSecurePINChangeWithPINFormat:APDU:currentPINByteOffset:newPINByteOffset:](tksmartcard/userinteractionforsecurepinchange%28__apdu_currentpinbyteoffset_newpinbyteoffset_%29.md) and [userInteractionForSecurePINVerificationWithPINFormat:APDU:PINByteOffset:](tksmartcard/userinteractionforsecurepinverification%28__apdu_pinbyteoffset_%29.md) methods on an [TKSmartCard](tksmartcard.md) object.

## Topics

### Handling User Interaction Events

- [delegate](tksmartcarduserinteraction/delegate.md): The delegate for observing events that occur during the user interaction.
- [TKSmartCardUserInteractionDelegate](tksmartcarduserinteractiondelegate.md): The interface implemented by a Smart Card user interaction delegate to handle user interaction events.

### Configuring Timeout

- [initialTimeout](tksmartcarduserinteraction/initialtimeout.md): The timeout, in seconds, for initial interaction. If set to `0`, the reader-defined default timeout is used. `0` by default.
- [interactionTimeout](tksmartcarduserinteraction/interactiontimeout.md): The timeout, in seconds, after the first key stroke. If set to `0`, the reader-defined default timeout is used. `0` by default.

### Starting and Stopping

- [runWithReply:](tksmartcarduserinteraction/run%28reply_%29.md): Runs the user interaction and asynchronously receives a reply.
- [cancel](tksmartcarduserinteraction/cancel%28%29.md): Attempts to cancel an interaction started by calling [runWithReply:](tksmartcarduserinteraction/run%28reply_%29.md). For certain interactions, cancellation may not be available.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md)

## See Also

### Managing User Interaction

- [userInteractionForSecurePINVerificationWithPINFormat:APDU:PINByteOffset:](tksmartcard/userinteractionforsecurepinverification%28__apdu_pinbyteoffset_%29.md): Creates and returns a new user interaction object for secure PIN verification using the Smart Card reader facilities.
- [userInteractionForSecurePINChangeWithPINFormat:APDU:currentPINByteOffset:newPINByteOffset:](tksmartcard/userinteractionforsecurepinchange%28__apdu_currentpinbyteoffset_newpinbyteoffset_%29.md): Creates a new user interaction object for secure PIN change using the smart card reader facilities (typically a HW keypad).
- [TKSmartCardPINFormat](tksmartcardpinformat.md): The formatting properties for a PIN, such as character encoding and length constraints.
- [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md): A representation of user interaction for secure PIN operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINChange](tksmartcarduserinteractionforsecurepinchange.md): A representation of the user interaction for secure PIN change operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINVerification](tksmartcarduserinteractionforsecurepinverification.md): A representation of the user interaction for secure PIN change verification on a Smart Card reader.
