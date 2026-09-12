> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenkeychainkey](https://developer.apple.com/documentation/cryptotokenkit/tktokenkeychainkey)

# TKTokenKeychainKey (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A token’s key as stored in the keychain.

## Declaration

```swift
class TKTokenKeychainKey
```

## Topics

### Creating Token Keychain Keys

- [init(certificate:objectID:)](tktokenkeychainkey/init%28certificate_objectid_%29.md): Initializes a token keychain key with data from the specified certificate reference and a given object ID.

### Accessing Key Attributes

- [keyType](tktokenkeychainkey/keytype.md): The type of the key. Currently, only [kSecAttrKeyTypeRSA](../security/ksecattrkeytypersa.md) and `kSecAttrKeyTypeECSECPrimeRandom` are supported values.
- [keySizeInBits](tktokenkeychainkey/keysizeinbits.md)
- [applicationTag](tktokenkeychainkey/applicationtag.md): The private tag data.
- [publicKeyData](tktokenkeychainkey/publickeydata.md): The public key data.
- [publicKeyHash](tktokenkeychainkey/publickeyhash.md): The SHA1 hash of the raw public key.
- [canDecrypt](tktokenkeychainkey/candecrypt.md): Whether the key can be used to decrypt data.
- [canSign](tktokenkeychainkey/cansign.md): Whether the key can be used to sign data.
- [canPerformKeyExchange](tktokenkeychainkey/canperformkeyexchange.md): Whether the key can be used to perform Diffie-Hellman style cryptographic key exchange.
- [isSuitableForLogin](tktokenkeychainkey/issuitableforlogin.md): Whether the key can be used for system login.

## Relationships

### Inherits From

- [TKTokenKeychainItem](tktokenkeychainitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing Keychain Items

- [keychainContents](tktoken/keychaincontents.md): The contents of the keychain for this token.
- [TKTokenKeychainContents](tktokenkeychaincontents.md): A representation of the state of the keychain for a particular token.
- [TKTokenKeychainItem](tktokenkeychainitem.md): An abstract base class for managing a token’s contents as keychain items.
- [TKTokenKeychainCertificate](tktokenkeychaincertificate.md): A token’s certificate as stored in the keychain.
- [TKToken.ObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
- [TKToken.ObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.

# TKTokenKeychainKey (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A token’s key as stored in the keychain.

## Declaration

```objectivec
@interface TKTokenKeychainKey : TKTokenKeychainItem
```

## Topics

### Creating Token Keychain Keys

- [initWithCertificate:objectID:](tktokenkeychainkey/init%28certificate_objectid_%29.md): Initializes a token keychain key with data from the specified certificate reference and a given object ID.

### Accessing Key Attributes

- [keyType](tktokenkeychainkey/keytype.md): The type of the key. Currently, only [kSecAttrKeyTypeRSA](../security/ksecattrkeytypersa.md) and `kSecAttrKeyTypeECSECPrimeRandom` are supported values.
- [keySizeInBits](tktokenkeychainkey/keysizeinbits.md)
- [applicationTag](tktokenkeychainkey/applicationtag.md): The private tag data.
- [publicKeyData](tktokenkeychainkey/publickeydata.md): The public key data.
- [publicKeyHash](tktokenkeychainkey/publickeyhash.md): The SHA1 hash of the raw public key.
- [canDecrypt](tktokenkeychainkey/candecrypt.md): Whether the key can be used to decrypt data.
- [canSign](tktokenkeychainkey/cansign.md): Whether the key can be used to sign data.
- [canPerformKeyExchange](tktokenkeychainkey/canperformkeyexchange.md): Whether the key can be used to perform Diffie-Hellman style cryptographic key exchange.
- [suitableForLogin](tktokenkeychainkey/issuitableforlogin.md): Whether the key can be used for system login.

## Relationships

### Inherits From

- [TKTokenKeychainItem](tktokenkeychainitem.md)

## See Also

### Accessing Keychain Items

- [keychainContents](tktoken/keychaincontents.md): The contents of the keychain for this token.
- [TKTokenKeychainContents](tktokenkeychaincontents.md): A representation of the state of the keychain for a particular token.
- [TKTokenKeychainItem](tktokenkeychainitem.md): An abstract base class for managing a token’s contents as keychain items.
- [TKTokenKeychainCertificate](tktokenkeychaincertificate.md): A token’s certificate as stored in the keychain.
- [TKTokenObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
- [TKTokenObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
