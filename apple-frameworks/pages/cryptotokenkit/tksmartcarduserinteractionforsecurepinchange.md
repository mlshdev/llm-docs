> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcarduserinteractionforsecurepinchange](https://developer.apple.com/documentation/cryptotokenkit/tksmartcarduserinteractionforsecurepinchange)

# TKSmartCardUserInteractionForSecurePINChange (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A representation of the user interaction for secure PIN change operations on a Smart Card reader.

## Declaration

```swift
class TKSmartCardUserInteractionForSecurePINChange
```

<a id="overview"></a>

## Overview

The result of a user interaction is available once the interaction has completed.

## Topics

### Configuring User Interaction

- [pinConfirmation](tksmartcarduserinteractionforsecurepinchange/pinconfirmation.md): The way PIN confirmation is requested. `TKSmartCardPINConfirmationNone` by default.
- [TKSmartCardUserInteractionForSecurePINChange.Confirmation](tksmartcarduserinteractionforsecurepinchange/confirmation.md)

## Relationships

### Inherits From

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
- [TKSmartCardUserInteraction](tksmartcarduserinteraction.md): The base class for encapsulating user interaction with a Smart Card reader.
- [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md): A representation of user interaction for secure PIN operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINVerification](tksmartcarduserinteractionforsecurepinverification.md): A representation of the user interaction for secure PIN change verification on a Smart Card reader.

# TKSmartCardUserInteractionForSecurePINChange (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A representation of the user interaction for secure PIN change operations on a Smart Card reader.

## Declaration

```objectivec
@interface TKSmartCardUserInteractionForSecurePINChange : TKSmartCardUserInteractionForPINOperation
```

<a id="overview"></a>

## Overview

The result of a user interaction is available once the interaction has completed.

## Topics

### Configuring User Interaction

- [PINConfirmation](tksmartcarduserinteractionforsecurepinchange/pinconfirmation.md): The way PIN confirmation is requested. `TKSmartCardPINConfirmationNone` by default.
- [TKSmartCardPINConfirmation](tksmartcarduserinteractionforsecurepinchange/confirmation.md)

## Relationships

### Inherits From

- [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md)

## See Also

### Managing User Interaction

- [userInteractionForSecurePINVerificationWithPINFormat:APDU:PINByteOffset:](tksmartcard/userinteractionforsecurepinverification%28__apdu_pinbyteoffset_%29.md): Creates and returns a new user interaction object for secure PIN verification using the Smart Card reader facilities.
- [userInteractionForSecurePINChangeWithPINFormat:APDU:currentPINByteOffset:newPINByteOffset:](tksmartcard/userinteractionforsecurepinchange%28__apdu_currentpinbyteoffset_newpinbyteoffset_%29.md): Creates a new user interaction object for secure PIN change using the smart card reader facilities (typically a HW keypad).
- [TKSmartCardPINFormat](tksmartcardpinformat.md): The formatting properties for a PIN, such as character encoding and length constraints.
- [TKSmartCardUserInteraction](tksmartcarduserinteraction.md): The base class for encapsulating user interaction with a Smart Card reader.
- [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md): A representation of user interaction for secure PIN operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINVerification](tksmartcarduserinteractionforsecurepinverification.md): A representation of the user interaction for secure PIN change verification on a Smart Card reader.
