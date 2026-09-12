> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/securitymessage](https://developer.apple.com/documentation/accessorytransportextension/securitymessage)

# SecurityMessage

**Framework:** Accessory Transport Extension  
**Kind:** Structure  
**Availability:** iOS 26.5+

A structure that carries key material for a secure channel between the system and an accessory.

## Declaration

```swift
struct SecurityMessage
```

## Mentioned In

- [Receiving iOS notifications on an accessory](receiving-ios-notifications-on-an-accessory.md)

<a id="overview"></a>

## Overview

Your [AccessoryTransportSecurity](accessorytransportsecurity.md) extension provides instances of this type to initiate key exchange and receives them during [messageReceived(\_:completion:)](accessorysecuritysession/eventhandler/messagereceived%28__completion_%29.md) to complete the exchange.

<a id="Derive-encryption-secrets"></a>

## Derive encryption secrets

Export HPKE secrets once during key exchange when handling [SecurityMessage.KeyType.encapsulatedKey](securitymessage/keytype-swift.enum/encapsulatedkey.md). Store the exported secrets for both `HostToAccessory` and `AccessoryToHost` directions for all subsequent message encryption and decryption.

> **Important**

> On the accessory, use `recipient.exportSecret(context:outputByteCount:)` to derive secrets. The accessory creates an HPKE recipient; iPhone creates the sender.

## Topics

### Creating security messages

- [init(keyType:cipherSuite:version:key:supportedTransports:identifier:)](securitymessage/init%28keytype_ciphersuite_version_key_supportedtransports_identifier_%29.md): Initializes a security message with key material and metadata.

### Accessing key material

- [key](securitymessage/key.md): The key data carried by this message.
- [keyType](securitymessage/keytype-swift.property.md): The type of key carried by this message.
- [SecurityMessage.KeyType](securitymessage/keytype-swift.enum.md): A type that identifies the key material a security message carries.

### Determining encryption method

- [cipherSuite](securitymessage/ciphersuite-swift.property.md): The cipher suite used for key exchange.
- [version](securitymessage/version.md): The cipher suite version.
- [SecurityMessage.CipherSuite](securitymessage/ciphersuite-swift.enum.md): A cryptographic cipher suite for key exchange.

### Specifying transport preferences

- [supportedTransports](securitymessage/supportedtransports.md): An array of transports that the accessory supports for sending sensitive information.

### Deriving HPKE keys

- [identifier](securitymessage/identifier.md): An optional Bluetooth identifier that the system uses to derive HPKE keys.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data and sessions

- [AccessoryFeature](accessoryfeature.md): A protocol that defines a capability for an accessory data provider extension.
- [AccessoryMessage](accessorymessage.md): A structure that represents a message to send to an accessory.
- [AccessorySecuritySession](accessorysecuritysession.md): A class that manages a security session between the extension and the system.
- [TransportMessage](transportmessage.md): A structure that represents a message for transmission between the system and an accessory.
- [AccessoryTransport](accessorytransport.md): Transport methods for communicating with an accessory.
