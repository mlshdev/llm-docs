> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardslot](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardslot)

# TKSmartCardSlot (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A single smart card reader slot in the system.

## Declaration

```swift
class TKSmartCardSlot
```

<a id="overview"></a>

## Overview

Use the [TKSmartCardSlotManager](tksmartcardslotmanager.md) class to manage all the smart card reader slots available to the system. You can retrieve the names of available smart card reader slots for a system using the [slotNames](tksmartcardslotmanager/slotnames.md) property of a manager object, and access instances of [TKSmartCardSlot](tksmartcardslot.md) using the  [getSlot(withName:reply:)](tksmartcardslotmanager/getslot%28withname_reply_%29.md) method.

## Topics

### Instantiating Smart Cards

- [makeSmartCard()](tksmartcardslot/makesmartcard%28%29.md): Creates a new [TKSmartCard](tksmartcard.md) object representing the currently inserted Smart Card.

### Getting the Slot State

- [state](tksmartcardslot/state-swift.property.md): The current state of the Smart Card reader slot.
- [TKSmartCardSlot.State](tksmartcardslot/state-swift.enum.md): All smart card slot states.

### Getting the Slot Configuration

- [name](tksmartcardslot/name.md): The name of the Smart Card reader slot.
- [maxInputLength](tksmartcardslot/maxinputlength.md): The maximum length of input APDU (Application Protocol Data Unit) that the Smart Card reader slot is able to transfer to the Smart Card.
- [maxOutputLength](tksmartcardslot/maxoutputlength.md): The maximum length of output APDU (Application Protocol Data Unit) that the Smart Card reader slot is able to transfer from the Smart Card.

### Reading the Answer to Reset

- [atr](tksmartcardslot/atr.md): The ATR (Answer to Reset) of the inserted Smart Card, or `nil` if no Smart Card is inserted or the inserted Smart Card is mute.
- [TKSmartCardATR](tksmartcardatr.md): A parsed ATR (Answer To Reset) message from a Smart Card.

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
- [TKSmartCard](tksmartcard.md): A representation of a smart card.

# TKSmartCardSlot (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A single smart card reader slot in the system.

## Declaration

```objectivec
@interface TKSmartCardSlot : NSObject
```

<a id="overview"></a>

## Overview

Use the [TKSmartCardSlotManager](tksmartcardslotmanager.md) class to manage all the smart card reader slots available to the system. You can retrieve the names of available smart card reader slots for a system using the [slotNames](tksmartcardslotmanager/slotnames.md) property of a manager object, and access instances of [TKSmartCardSlot](tksmartcardslot.md) using the  [getSlotWithName:reply:](tksmartcardslotmanager/getslot%28withname_reply_%29.md) method.

## Topics

### Instantiating Smart Cards

- [makeSmartCard](tksmartcardslot/makesmartcard%28%29.md): Creates a new [TKSmartCard](tksmartcard.md) object representing the currently inserted Smart Card.

### Getting the Slot State

- [state](tksmartcardslot/state-swift.property.md): The current state of the Smart Card reader slot.
- [TKSmartCardSlotState](tksmartcardslot/state-swift.enum.md): All smart card slot states.

### Getting the Slot Configuration

- [name](tksmartcardslot/name.md): The name of the Smart Card reader slot.
- [maxInputLength](tksmartcardslot/maxinputlength.md): The maximum length of input APDU (Application Protocol Data Unit) that the Smart Card reader slot is able to transfer to the Smart Card.
- [maxOutputLength](tksmartcardslot/maxoutputlength.md): The maximum length of output APDU (Application Protocol Data Unit) that the Smart Card reader slot is able to transfer from the Smart Card.

### Reading the Answer to Reset

- [ATR](tksmartcardslot/atr.md): The ATR (Answer to Reset) of the inserted Smart Card, or `nil` if no Smart Card is inserted or the inserted Smart Card is mute.
- [TKSmartCardATR](tksmartcardatr.md): A parsed ATR (Answer To Reset) message from a Smart Card.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Smart Cards

- [Using Cryptographic Assets Stored on a Smart Card](using-cryptographic-assets-stored-on-a-smart-card.md): Access certificates, keys, and identities stored on a smart card as if they were part of the keychain.
- [TKSmartCardSlotManager](tksmartcardslotmanager.md): An interface to all available smart card reader slots.
- [TKSmartCard](tksmartcard.md): A representation of a smart card.
