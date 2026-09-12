> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktoken/objectid](https://developer.apple.com/documentation/cryptotokenkit/tktoken/objectid)

# TKToken.ObjectID (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A unique and persistent identifier of a particular token object.

## Declaration

```swift
typealias ObjectID = Any
```

<a id="Discussion"></a>

## Discussion

The type of this identifier must support property list serialization and must define its format by the implementation of the token extension.

## See Also

### Accessing Keychain Items

- [keychainContents](keychaincontents.md): The contents of the keychain for this token.
- [TKTokenKeychainContents](../tktokenkeychaincontents.md): A representation of the state of the keychain for a particular token.
- [TKTokenKeychainItem](../tktokenkeychainitem.md): An abstract base class for managing a token’s contents as keychain items.
- [TKTokenKeychainCertificate](../tktokenkeychaincertificate.md): A token’s certificate as stored in the keychain.
- [TKTokenKeychainKey](../tktokenkeychainkey.md): A token’s key as stored in the keychain.

# TKTokenObjectID (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A unique and persistent identifier of a particular token object.

## Declaration

```objectivec
typedef id TKTokenObjectID;
```

<a id="Discussion"></a>

## Discussion

The type of this identifier must support property list serialization and must define its format by the implementation of the token extension.

## See Also

### Accessing Keychain Items

- [keychainContents](keychaincontents.md): The contents of the keychain for this token.
- [TKTokenKeychainContents](../tktokenkeychaincontents.md): A representation of the state of the keychain for a particular token.
- [TKTokenKeychainItem](../tktokenkeychainitem.md): An abstract base class for managing a token’s contents as keychain items.
- [TKTokenKeychainCertificate](../tktokenkeychaincertificate.md): A token’s certificate as stored in the keychain.
- [TKTokenKeychainKey](../tktokenkeychainkey.md): A token’s key as stored in the keychain.
