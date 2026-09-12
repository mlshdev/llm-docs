> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/securitymessage/keytype-swift.enum](https://developer.apple.com/documentation/accessorytransportextension/securitymessage/keytype-swift.enum)

# SecurityMessage.KeyType

**Framework:** Accessory Transport Extension  
**Kind:** Enumeration  
**Availability:** iOS 26.5+

A type that identifies the key material a security message carries.

## Declaration

```swift
enum KeyType
```

<a id="overview"></a>

## Overview

Use this enumeration to specify the type of cryptographic key when creating a [SecurityMessage](../securitymessage.md) for the key exchange process. The accessory initiates key exchange by sending a message with [SecurityMessage.KeyType.publicKey](keytype-swift.enum/publickey.md). The system responds with a message containing [SecurityMessage.KeyType.encapsulatedKey](keytype-swift.enum/encapsulatedkey.md), which completes the exchange.

## Topics

### Identifying key types

- [SecurityMessage.KeyType.encapsulatedKey](keytype-swift.enum/encapsulatedkey.md): An encapsulated key, sent from the host to the accessory.
- [SecurityMessage.KeyType.publicKey](keytype-swift.enum/publickey.md): A public key, sent from the accessory to the host.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing key material

- [key](key.md): The key data carried by this message.
- [keyType](keytype-swift.property.md): The type of key carried by this message.
