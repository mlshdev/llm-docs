> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcard](https://developer.apple.com/documentation/cryptotokenkit/tksmartcard)

# TKSmartCard (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A representation of a smart card.

## Declaration

```swift
class TKSmartCard
```

<a id="overview"></a>

## Overview

This class provides an interface for managing sessions with a smart card, transmitting requests, and facilitating user interaction.

You can create a [TKSmartCard](tksmartcard.md) object when a smart card is inserted into a slot, by calling the [makeSmartCard()](tksmartcardslot/makesmartcard%28%29.md) method on the corresponding [TKSmartCardSlot](tksmartcardslot.md) object. To start communicating with the smart card, call the [beginSession(reply:)](tksmartcard/beginsession%28reply_%29.md) method on the [TKSmartCard](tksmartcard.md) object. Once an exclusive session has been established, you transmit data using the [transmit(\_:reply:)](tksmartcard/transmit%28__reply_%29.md) method. After you’ve finished communicating with a smart card, you call the [endSession()](tksmartcard/endsession%28%29.md) method.

If the smart card is physically removed from its slot, the session object becomes invalid, and any further calls to [transmit(\_:reply:)](tksmartcard/transmit%28__reply_%29.md) will return an error. You can use Key-Value Observing on the [isValid](tksmartcard/isvalid.md) property to be notified when a smart card is invalidated, due to being removed from the slot or another reason.

## Topics

### Configuring the Smart Card

- [slot](tksmartcard/slot.md): The slot in which the Smart Card is inserted.
- [isValid](tksmartcard/isvalid.md): Whether the Smart Card is valid and accessible from its slot.
- [isSensitive](tksmartcard/issensitive.md): Whether sessions established for the Smart Card should be considered sensitive. [false](https://developer.apple.com/documentation/swift/false) by default.
- [context](tksmartcard/context.md): User-specified information. This property is automatically set to `nil` if the Smart Card is removed or another `TKSmartCard` object begins a session.

### Setting the Communication Protocol

- [allowedProtocols](tksmartcard/allowedprotocols.md): The protocols allowed for communication with the Smart Card. [any](tksmartcardprotocol/any.md) by default.
- [currentProtocol](tksmartcard/currentprotocol.md): The protocol used for communication with the Smart Card. Returns [TKSmartCardProtocolNone](tksmartcardprotocol/tksmartcardprotocolnone.md) if no session is currently established.
- [TKSmartCardProtocol](tksmartcardprotocol.md): Smart Card transmission protocols.

### Communicating with the Smart Card

- [beginSession(reply:)](tksmartcard/beginsession%28reply_%29.md): Begins a session with the Smart Card.
- [transmit(\_:reply:)](tksmartcard/transmit%28__reply_%29.md): Transmits data in Application Protocol Data Unit (APDU) format to the Smart Card.
- [endSession()](tksmartcard/endsession%28%29.md): Completes any pending transmissions and ends the session to the Smart Card.

### Managing User Interaction

- [userInteractionForSecurePINVerification(\_:apdu:pinByteOffset:)](tksmartcard/userinteractionforsecurepinverification%28__apdu_pinbyteoffset_%29.md): Creates and returns a new user interaction object for secure PIN verification using the Smart Card reader facilities.
- [userInteractionForSecurePINChange(\_:apdu:currentPINByteOffset:newPINByteOffset:)](tksmartcard/userinteractionforsecurepinchange%28__apdu_currentpinbyteoffset_newpinbyteoffset_%29.md): Creates a new user interaction object for secure PIN change using the smart card reader facilities (typically a HW keypad).
- [TKSmartCardPINFormat](tksmartcardpinformat.md): The formatting properties for a PIN, such as character encoding and length constraints.
- [TKSmartCardUserInteraction](tksmartcarduserinteraction.md): The base class for encapsulating user interaction with a Smart Card reader.
- [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md): A representation of user interaction for secure PIN operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINChange](tksmartcarduserinteractionforsecurepinchange.md): A representation of the user interaction for secure PIN change operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINVerification](tksmartcarduserinteractionforsecurepinverification.md): A representation of the user interaction for secure PIN change verification on a Smart Card reader.

### Configuring APDU Behavior

- [cla](tksmartcard/cla.md): The CLA byte used for APDU transmission. `0x00` by default.
- [useExtendedLength](tksmartcard/useextendedlength.md): Whether to use extended length APDU.
- [useCommandChaining](tksmartcard/usecommandchaining.md): Whether to use command chaining of APDU with a data field longer than 255 bytes.

### Transmitting Data

- [send(ins:p1:p2:data:le:reply:)](tksmartcard/send%28ins_p1_p2_data_le_reply_%29.md): Asynchronously transmits an APDU command to the card, returning the response in a completion handler.
- [withSession(\_:)](tksmartcard/withsession%28__%29.md): Synchronously begins a session, executes the given closure, and ends the session.

### Instance Methods

- [send(ins:p1:p2:data:le:)](tksmartcard/send%28ins_p1_p2_data_le_%29-1kbga.md): Synchronously sends an APDU command to the smart card.
- [send(ins:p1:p2:data:le:)](tksmartcard/send%28ins_p1_p2_data_le_%29-6dore.md): Asynchronously sends an APDU command to the smart card.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Smart Cards

- [Using Cryptographic Assets Stored on a Smart Card](using-cryptographic-assets-stored-on-a-smart-card.md): Access certificates, keys, and identities stored on a smart card as if they were part of the keychain.
- [TKSmartCardSlotManager](tksmartcardslotmanager.md): An interface to all available smart card reader slots.
- [TKSmartCardSlot](tksmartcardslot.md): A single smart card reader slot in the system.

# TKSmartCard (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A representation of a smart card.

## Declaration

```objectivec
@interface TKSmartCard : NSObject
```

<a id="overview"></a>

## Overview

This class provides an interface for managing sessions with a smart card, transmitting requests, and facilitating user interaction.

You can create a [TKSmartCard](tksmartcard.md) object when a smart card is inserted into a slot, by calling the [makeSmartCard](tksmartcardslot/makesmartcard%28%29.md) method on the corresponding [TKSmartCardSlot](tksmartcardslot.md) object. To start communicating with the smart card, call the [beginSessionWithReply:](tksmartcard/beginsession%28reply_%29.md) method on the [TKSmartCard](tksmartcard.md) object. Once an exclusive session has been established, you transmit data using the [transmitRequest:reply:](tksmartcard/transmit%28__reply_%29.md) method. After you’ve finished communicating with a smart card, you call the [endSession](tksmartcard/endsession%28%29.md) method.

If the smart card is physically removed from its slot, the session object becomes invalid, and any further calls to [transmitRequest:reply:](tksmartcard/transmit%28__reply_%29.md) will return an error. You can use Key-Value Observing on the [valid](tksmartcard/isvalid.md) property to be notified when a smart card is invalidated, due to being removed from the slot or another reason.

## Topics

### Configuring the Smart Card

- [slot](tksmartcard/slot.md): The slot in which the Smart Card is inserted.
- [valid](tksmartcard/isvalid.md): Whether the Smart Card is valid and accessible from its slot.
- [sensitive](tksmartcard/issensitive.md): Whether sessions established for the Smart Card should be considered sensitive. [false](https://developer.apple.com/documentation/swift/false) by default.
- [context](tksmartcard/context.md): User-specified information. This property is automatically set to `nil` if the Smart Card is removed or another `TKSmartCard` object begins a session.

### Setting the Communication Protocol

- [allowedProtocols](tksmartcard/allowedprotocols.md): The protocols allowed for communication with the Smart Card. [TKSmartCardProtocolAny](tksmartcardprotocol/any.md) by default.
- [currentProtocol](tksmartcard/currentprotocol.md): The protocol used for communication with the Smart Card. Returns [TKSmartCardProtocolNone](tksmartcardprotocol/tksmartcardprotocolnone.md) if no session is currently established.
- [TKSmartCardProtocol](tksmartcardprotocol.md): Smart Card transmission protocols.

### Communicating with the Smart Card

- [beginSessionWithReply:](tksmartcard/beginsession%28reply_%29.md): Begins a session with the Smart Card.
- [transmitRequest:reply:](tksmartcard/transmit%28__reply_%29.md): Transmits data in Application Protocol Data Unit (APDU) format to the Smart Card.
- [endSession](tksmartcard/endsession%28%29.md): Completes any pending transmissions and ends the session to the Smart Card.

### Managing User Interaction

- [userInteractionForSecurePINVerificationWithPINFormat:APDU:PINByteOffset:](tksmartcard/userinteractionforsecurepinverification%28__apdu_pinbyteoffset_%29.md): Creates and returns a new user interaction object for secure PIN verification using the Smart Card reader facilities.
- [userInteractionForSecurePINChangeWithPINFormat:APDU:currentPINByteOffset:newPINByteOffset:](tksmartcard/userinteractionforsecurepinchange%28__apdu_currentpinbyteoffset_newpinbyteoffset_%29.md): Creates a new user interaction object for secure PIN change using the smart card reader facilities (typically a HW keypad).
- [TKSmartCardPINFormat](tksmartcardpinformat.md): The formatting properties for a PIN, such as character encoding and length constraints.
- [TKSmartCardUserInteraction](tksmartcarduserinteraction.md): The base class for encapsulating user interaction with a Smart Card reader.
- [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md): A representation of user interaction for secure PIN operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINChange](tksmartcarduserinteractionforsecurepinchange.md): A representation of the user interaction for secure PIN change operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINVerification](tksmartcarduserinteractionforsecurepinverification.md): A representation of the user interaction for secure PIN change verification on a Smart Card reader.

### Configuring APDU Behavior

- [cla](tksmartcard/cla.md): The CLA byte used for APDU transmission. `0x00` by default.
- [useExtendedLength](tksmartcard/useextendedlength.md): Whether to use extended length APDU.
- [useCommandChaining](tksmartcard/usecommandchaining.md): Whether to use command chaining of APDU with a data field longer than 255 bytes.

### Transmitting Data

- [sendIns:p1:p2:data:le:reply:](tksmartcard/sendins_p1_p2_data_le_reply_.md): Asynchronously transmits an APDU command to the card, returning the response in a completion handler.
- [sendIns:p1:p2:data:le:sw:error:](tksmartcard/sendins_p1_p2_data_le_sw_error_.md): Synchronously transmits an APDU command to the card and returns the response.
- [inSessionWithError:executeBlock:](tksmartcard/insessionwitherror_executeblock_.md): Synchronously begins a session, executes the given block, and ends the session.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Smart Cards

- [Using Cryptographic Assets Stored on a Smart Card](using-cryptographic-assets-stored-on-a-smart-card.md): Access certificates, keys, and identities stored on a smart card as if they were part of the keychain.
- [TKSmartCardSlotManager](tksmartcardslotmanager.md): An interface to all available smart card reader slots.
- [TKSmartCardSlot](tksmartcardslot.md): A single smart card reader slot in the system.
