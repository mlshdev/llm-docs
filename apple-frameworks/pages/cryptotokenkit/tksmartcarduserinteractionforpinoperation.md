> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcarduserinteractionforpinoperation](https://developer.apple.com/documentation/cryptotokenkit/tksmartcarduserinteractionforpinoperation)

# TKSmartCardUserInteractionForPINOperation (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A representation of user interaction for secure PIN operations on a Smart Card reader.

## Declaration

```swift
class TKSmartCardUserInteractionForPINOperation
```

<a id="overview"></a>

## Overview

There are two types of user interactions: those for secure PIN change and those for secure PIN validation. These interactions are instances of the [TKSmartCardUserInteractionForSecurePINChange](tksmartcarduserinteractionforsecurepinchange.md), or [TKSmartCardUserInteractionForSecurePINVerification](tksmartcarduserinteractionforsecurepinverification.md) subclasses of [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md), respectively.

You interact with instances of one of the subclasses of [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md) when calling the [userInteractionForSecurePINChange(\_:apdu:currentPINByteOffset:newPINByteOffset:)](tksmartcard/userinteractionforsecurepinchange%28__apdu_currentpinbyteoffset_newpinbyteoffset_%29.md) and [userInteractionForSecurePINVerification(\_:apdu:pinByteOffset:)](tksmartcard/userinteractionforsecurepinverification%28__apdu_pinbyteoffset_%29.md) methods on an [TKSmartCard](tksmartcard.md) object.

The result of a user interaction is available once the interaction has completed.

## Topics

### Managing Pin Completion

- [pinCompletion](tksmartcarduserinteractionforpinoperation/pincompletion.md): The conditions under which PIN entry should be considered complete.
- [TKSmartCardUserInteractionForPINOperation.Completion](tksmartcarduserinteractionforpinoperation/completion.md)

### Configuring Messages

- [pinMessageIndices](tksmartcarduserinteractionforpinoperation/pinmessageindices.md): A list of message indices referring to a predefined message table, used to specify the type and number of messages displayed during the PIN operation. `nil` by default.
- [locale](tksmartcarduserinteractionforpinoperation/locale.md): The locale for the displayed messages. If `nil`, the user’s current locale is used. By default, this value is the current locale of the system.

### Accessing Response Data

- [resultSW](tksmartcarduserinteractionforpinoperation/resultsw.md): The SW1-SW2 status bytes.
- [resultData](tksmartcarduserinteractionforpinoperation/resultdata.md): The returned data without SW1-SW2 bytes, if any.

## Relationships

### Inherits From

- [TKSmartCardUserInteraction](tksmartcarduserinteraction.md)

### Inherited By

- [TKSmartCardUserInteractionForSecurePINChange](tksmartcarduserinteractionforsecurepinchange.md)
- [TKSmartCardUserInteractionForSecurePINVerification](tksmartcarduserinteractionforsecurepinverification.md)

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
- [TKSmartCardUserInteraction](tksmartcarduserinteraction.md): The base class for encapsulating user interaction with a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINChange](tksmartcarduserinteractionforsecurepinchange.md): A representation of the user interaction for secure PIN change operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINVerification](tksmartcarduserinteractionforsecurepinverification.md): A representation of the user interaction for secure PIN change verification on a Smart Card reader.

# TKSmartCardUserInteractionForPINOperation (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A representation of user interaction for secure PIN operations on a Smart Card reader.

## Declaration

```objectivec
@interface TKSmartCardUserInteractionForPINOperation : TKSmartCardUserInteraction
```

<a id="overview"></a>

## Overview

There are two types of user interactions: those for secure PIN change and those for secure PIN validation. These interactions are instances of the [TKSmartCardUserInteractionForSecurePINChange](tksmartcarduserinteractionforsecurepinchange.md), or [TKSmartCardUserInteractionForSecurePINVerification](tksmartcarduserinteractionforsecurepinverification.md) subclasses of [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md), respectively.

You interact with instances of one of the subclasses of [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md) when calling the [userInteractionForSecurePINChangeWithPINFormat:APDU:currentPINByteOffset:newPINByteOffset:](tksmartcard/userinteractionforsecurepinchange%28__apdu_currentpinbyteoffset_newpinbyteoffset_%29.md) and [userInteractionForSecurePINVerificationWithPINFormat:APDU:PINByteOffset:](tksmartcard/userinteractionforsecurepinverification%28__apdu_pinbyteoffset_%29.md) methods on an [TKSmartCard](tksmartcard.md) object.

The result of a user interaction is available once the interaction has completed.

## Topics

### Managing Pin Completion

- [PINCompletion](tksmartcarduserinteractionforpinoperation/pincompletion.md): The conditions under which PIN entry should be considered complete.
- [TKSmartCardPINCompletion](tksmartcarduserinteractionforpinoperation/completion.md)

### Configuring Messages

- [PINMessageIndices](tksmartcarduserinteractionforpinoperation/pinmessageindices.md): A list of message indices referring to a predefined message table, used to specify the type and number of messages displayed during the PIN operation. `nil` by default.
- [locale](tksmartcarduserinteractionforpinoperation/locale.md): The locale for the displayed messages. If `nil`, the user’s current locale is used. By default, this value is the current locale of the system.

### Accessing Response Data

- [resultSW](tksmartcarduserinteractionforpinoperation/resultsw.md): The SW1-SW2 status bytes.
- [resultData](tksmartcarduserinteractionforpinoperation/resultdata.md): The returned data without SW1-SW2 bytes, if any.

## Relationships

### Inherits From

- [TKSmartCardUserInteraction](tksmartcarduserinteraction.md)

### Inherited By

- [TKSmartCardUserInteractionForSecurePINChange](tksmartcarduserinteractionforsecurepinchange.md)
- [TKSmartCardUserInteractionForSecurePINVerification](tksmartcarduserinteractionforsecurepinverification.md)

## See Also

### Managing User Interaction

- [userInteractionForSecurePINVerificationWithPINFormat:APDU:PINByteOffset:](tksmartcard/userinteractionforsecurepinverification%28__apdu_pinbyteoffset_%29.md): Creates and returns a new user interaction object for secure PIN verification using the Smart Card reader facilities.
- [userInteractionForSecurePINChangeWithPINFormat:APDU:currentPINByteOffset:newPINByteOffset:](tksmartcard/userinteractionforsecurepinchange%28__apdu_currentpinbyteoffset_newpinbyteoffset_%29.md): Creates a new user interaction object for secure PIN change using the smart card reader facilities (typically a HW keypad).
- [TKSmartCardPINFormat](tksmartcardpinformat.md): The formatting properties for a PIN, such as character encoding and length constraints.
- [TKSmartCardUserInteraction](tksmartcarduserinteraction.md): The base class for encapsulating user interaction with a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINChange](tksmartcarduserinteractionforsecurepinchange.md): A representation of the user interaction for secure PIN change operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINVerification](tksmartcarduserinteractionforsecurepinverification.md): A representation of the user interaction for secure PIN change verification on a Smart Card reader.
