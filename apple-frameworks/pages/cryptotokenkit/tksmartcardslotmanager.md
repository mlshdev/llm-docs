> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardslotmanager](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardslotmanager)

# TKSmartCardSlotManager (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An interface to all available smart card reader slots.

## Declaration

```swift
class TKSmartCardSlotManager
```

<a id="overview"></a>

## Overview

Get a list of all known smart card reader slots in the system using the [slotNames](tksmartcardslotmanager/slotnames.md) property, and access individual slots by name using the [getSlot(withName:reply:)](tksmartcardslotmanager/getslot%28withname_reply_%29.md) method.

> **Important**

>  The [com.apple.security.smartcard](../bundleresources/entitlements/com.apple.security.smartcard.md) entitlement is required in order to use `TKSmartCardSlotManager`.

## Topics

### Creating a Card Slot Manager

- [default](tksmartcardslotmanager/default.md): The shared singleton Smart Card reader slot manager.

### Accessing Smart Card Slots

- [slotNames](tksmartcardslotmanager/slotnames.md): A list of identifiers for all the Smart Card reader slots available to the system.
- [getSlot(withName:reply:)](tksmartcardslotmanager/getslot%28withname_reply_%29.md): Asynchronously calls a block with a Smart Card reader slot for a specified name.
- [slotNamed(\_:)](tksmartcardslotmanager/slotnamed%28__%29.md): Returns the Smart Card slot with a given name.

### Instance Methods

- [createNFCSlot(message:completion:)](tksmartcardslotmanager/createnfcslot%28message_completion_%29.md): Creates an NFC smart card slot using the device’s hardware and presents a system UI.
- [isNFCSupported()](tksmartcardslotmanager/isnfcsupported%28%29.md): Determines whether NFC (Near Field Communication) is supported on this device.

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
- [TKSmartCardSlot](tksmartcardslot.md): A single smart card reader slot in the system.
- [TKSmartCard](tksmartcard.md): A representation of a smart card.

# TKSmartCardSlotManager (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An interface to all available smart card reader slots.

## Declaration

```objectivec
@interface TKSmartCardSlotManager : NSObject
```

<a id="overview"></a>

## Overview

Get a list of all known smart card reader slots in the system using the [slotNames](tksmartcardslotmanager/slotnames.md) property, and access individual slots by name using the [getSlotWithName:reply:](tksmartcardslotmanager/getslot%28withname_reply_%29.md) method.

> **Important**

>  The [com.apple.security.smartcard](../bundleresources/entitlements/com.apple.security.smartcard.md) entitlement is required in order to use `TKSmartCardSlotManager`.

## Topics

### Creating a Card Slot Manager

- [defaultManager](tksmartcardslotmanager/default.md): The shared singleton Smart Card reader slot manager.

### Accessing Smart Card Slots

- [slotNames](tksmartcardslotmanager/slotnames.md): A list of identifiers for all the Smart Card reader slots available to the system.
- [getSlotWithName:reply:](tksmartcardslotmanager/getslot%28withname_reply_%29.md): Asynchronously calls a block with a Smart Card reader slot for a specified name.
- [slotNamed:](tksmartcardslotmanager/slotnamed%28__%29.md): Returns the Smart Card slot with a given name.

### Instance Methods

- [createNFCSlotWithMessage:completion:](tksmartcardslotmanager/createnfcslot%28message_completion_%29.md): Creates an NFC smart card slot using the device’s hardware and presents a system UI.
- [isNFCSupported](tksmartcardslotmanager/isnfcsupported%28%29.md): Determines whether NFC (Near Field Communication) is supported on this device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Smart Cards

- [Using Cryptographic Assets Stored on a Smart Card](using-cryptographic-assets-stored-on-a-smart-card.md): Access certificates, keys, and identities stored on a smart card as if they were part of the keychain.
- [TKSmartCardSlot](tksmartcardslot.md): A single smart card reader slot in the system.
- [TKSmartCard](tksmartcard.md): A representation of a smart card.
