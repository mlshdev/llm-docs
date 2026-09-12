> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenkeychaincertificate](https://developer.apple.com/documentation/cryptotokenkit/tktokenkeychaincertificate)

# TKTokenKeychainCertificate (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A token’s certificate as stored in the keychain.

## Declaration

```swift
class TKTokenKeychainCertificate
```

## Topics

### Creating Token Keychain Certificates

- [init(certificate:objectID:)](tktokenkeychaincertificate/init%28certificate_objectid_%29.md): Initializes a token keychain certificate with data from the specified certificate reference and a given object ID.

### Accessing Certificate Data

- [data](tktokenkeychaincertificate/data.md): Returns a DER-encoded representation of an X.509 certificate.

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
- [TKTokenKeychainKey](tktokenkeychainkey.md): A token’s key as stored in the keychain.
- [TKToken.ObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
- [TKToken.ObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.

# TKTokenKeychainCertificate (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A token’s certificate as stored in the keychain.

## Declaration

```objectivec
@interface TKTokenKeychainCertificate : TKTokenKeychainItem
```

## Topics

### Creating Token Keychain Certificates

- [initWithCertificate:objectID:](tktokenkeychaincertificate/init%28certificate_objectid_%29.md): Initializes a token keychain certificate with data from the specified certificate reference and a given object ID.

### Accessing Certificate Data

- [data](tktokenkeychaincertificate/data.md): Returns a DER-encoded representation of an X.509 certificate.

## Relationships

### Inherits From

- [TKTokenKeychainItem](tktokenkeychainitem.md)

## See Also

### Accessing Keychain Items

- [keychainContents](tktoken/keychaincontents.md): The contents of the keychain for this token.
- [TKTokenKeychainContents](tktokenkeychaincontents.md): A representation of the state of the keychain for a particular token.
- [TKTokenKeychainItem](tktokenkeychainitem.md): An abstract base class for managing a token’s contents as keychain items.
- [TKTokenKeychainKey](tktokenkeychainkey.md): A token’s key as stored in the keychain.
- [TKTokenObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
- [TKTokenObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
