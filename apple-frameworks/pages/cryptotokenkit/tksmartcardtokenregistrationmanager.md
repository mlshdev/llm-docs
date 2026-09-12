> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardtokenregistrationmanager](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardtokenregistrationmanager)

# TKSmartCardTokenRegistrationManager (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Provides a centralized management system for registering and unregistering smartcards using their token IDs.

## Declaration

```swift
class TKSmartCardTokenRegistrationManager
```

<a id="overview"></a>

## Overview

`Registered smartcard` keeps its itself accessible via Keychain and system will automatically invoke an NFC slot when a cryptographic operation is required and asks to provide the registered card.

## Topics

### Instance Properties

- [registeredSmartCardTokens](tksmartcardtokenregistrationmanager/registeredsmartcardtokens.md): Returns the tokenIDs of all currently registered smart card tokens

### Instance Methods

- [registerSmartCard(tokenID:promptMessage:)](tksmartcardtokenregistrationmanager/registersmartcard%28tokenid_promptmessage_%29.md): Registers a smartcard with a specific token ID.
- [unregisterSmartCard(tokenID:)](tksmartcardtokenregistrationmanager/unregistersmartcard%28tokenid_%29.md): Unregisters a smartcard for the provided token ID.

### Type Properties

- [default](tksmartcardtokenregistrationmanager/default.md): Default instance of registration manager

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# TKSmartCardTokenRegistrationManager (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Provides a centralized management system for registering and unregistering smartcards using their token IDs.

## Declaration

```objectivec
@interface TKSmartCardTokenRegistrationManager : NSObject
```

<a id="overview"></a>

## Overview

`Registered smartcard` keeps its itself accessible via Keychain and system will automatically invoke an NFC slot when a cryptographic operation is required and asks to provide the registered card.

## Topics

### Instance Properties

- [registeredSmartCardTokens](tksmartcardtokenregistrationmanager/registeredsmartcardtokens.md): Returns the tokenIDs of all currently registered smart card tokens

### Instance Methods

- [registerSmartCardWithTokenID:promptMessage:error:](tksmartcardtokenregistrationmanager/registersmartcard%28tokenid_promptmessage_%29.md): Registers a smartcard with a specific token ID.
- [unregisterSmartCardWithTokenID:error:](tksmartcardtokenregistrationmanager/unregistersmartcard%28tokenid_%29.md): Unregisters a smartcard for the provided token ID.

### Type Properties

- [defaultManager](tksmartcardtokenregistrationmanager/default.md): Default instance of registration manager

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
