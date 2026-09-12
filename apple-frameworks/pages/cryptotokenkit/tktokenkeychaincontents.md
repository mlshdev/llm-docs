> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenkeychaincontents](https://developer.apple.com/documentation/cryptotokenkit/tktokenkeychaincontents)

# TKTokenKeychainContents (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A representation of the state of the keychain for a particular token.

## Declaration

```swift
class TKTokenKeychainContents
```

## Topics

### Adding Keychain Items

- [fill(with:)](tktokenkeychaincontents/fill%28with_%29.md): Fills the keychain with the specified items.

### Accessing Keychain Items

- [items](tktokenkeychaincontents/items.md): Returns all items for token in the keychain.
- [key(forObjectID:)](tktokenkeychaincontents/key%28forobjectid_%29.md): Returns the key for a specified object identifier.
- [certificate(forObjectID:)](tktokenkeychaincontents/certificate%28forobjectid_%29.md): Returns the key for a specified object identifier.

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

### Accessing Keychain Items

- [keychainContents](tktoken/keychaincontents.md): The contents of the keychain for this token.
- [TKTokenKeychainItem](tktokenkeychainitem.md): An abstract base class for managing a token’s contents as keychain items.
- [TKTokenKeychainCertificate](tktokenkeychaincertificate.md): A token’s certificate as stored in the keychain.
- [TKTokenKeychainKey](tktokenkeychainkey.md): A token’s key as stored in the keychain.
- [TKToken.ObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
- [TKToken.ObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.

# TKTokenKeychainContents (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A representation of the state of the keychain for a particular token.

## Declaration

```objectivec
@interface TKTokenKeychainContents : NSObject
```

## Topics

### Adding Keychain Items

- [fillWithItems:](tktokenkeychaincontents/fill%28with_%29.md): Fills the keychain with the specified items.

### Accessing Keychain Items

- [items](tktokenkeychaincontents/items.md): Returns all items for token in the keychain.
- [keyForObjectID:error:](tktokenkeychaincontents/key%28forobjectid_%29.md): Returns the key for a specified object identifier.
- [certificateForObjectID:error:](tktokenkeychaincontents/certificate%28forobjectid_%29.md): Returns the key for a specified object identifier.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Accessing Keychain Items

- [keychainContents](tktoken/keychaincontents.md): The contents of the keychain for this token.
- [TKTokenKeychainItem](tktokenkeychainitem.md): An abstract base class for managing a token’s contents as keychain items.
- [TKTokenKeychainCertificate](tktokenkeychaincertificate.md): A token’s certificate as stored in the keychain.
- [TKTokenKeychainKey](tktokenkeychainkey.md): A token’s key as stored in the keychain.
- [TKTokenObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
- [TKTokenObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
