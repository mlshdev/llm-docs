> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/securitymessage/init(keytype:ciphersuite:version:key:supportedtransports:identifier:)](https://developer.apple.com/documentation/accessorytransportextension/securitymessage/init(keytype:ciphersuite:version:key:supportedtransports:identifier:))

# init(keyType:cipherSuite:version:key:supportedTransports:identifier:)

**Framework:** Accessory Transport Extension  
**Kind:** Initializer  
**Availability:** iOS 26.5+

Initializes a security message with key material and metadata.

## Declaration

```swift
init(keyType: SecurityMessage.KeyType, cipherSuite: SecurityMessage.CipherSuite, version: SecurityMessage.CipherSuite.Version, key: Data, supportedTransports: [AccessoryTransport] = [.bluetooth], identifier: String? = nil)
```

## Parameters

- `keyType`: The type of key carried by this message.
- `cipherSuite`: The cryptographic cipher suite to use for key exchange.
- `version`: The cipher suite protocol version.
- `key`: The key data to send.
- `supportedTransports`: The transports the accessory supports for sending sensitive information. The default is Bluetooth only.
- `identifier`: An optional Bluetooth identifier for deriving HPKE keys.

<a id="discussion"></a>

## Discussion

When initiating key exchange from your accessory, create a message with [SecurityMessage.KeyType.publicKey](keytype-swift.enum/publickey.md) and your accessory’s public key. The system responds with a message containing [SecurityMessage.KeyType.encapsulatedKey](keytype-swift.enum/encapsulatedkey.md).
