> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktoken/keychaincontents](https://developer.apple.com/documentation/cryptotokenkit/tktoken/keychaincontents)

# keychainContents (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The contents of the keychain for this token.

## Declaration

```swift
var keychainContents: TKTokenKeychainContents? { get }
```

## See Also

### Accessing Keychain Items

- [TKTokenKeychainContents](../tktokenkeychaincontents.md): A representation of the state of the keychain for a particular token.
- [TKTokenKeychainItem](../tktokenkeychainitem.md): An abstract base class for managing a token’s contents as keychain items.
- [TKTokenKeychainCertificate](../tktokenkeychaincertificate.md): A token’s certificate as stored in the keychain.
- [TKTokenKeychainKey](../tktokenkeychainkey.md): A token’s key as stored in the keychain.
- [TKToken.ObjectID](objectid.md): A unique and persistent identifier of a particular token object.
- [TKToken.ObjectID](objectid.md): A unique and persistent identifier of a particular token object.

# keychainContents (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The contents of the keychain for this token.

## Declaration

```objectivec
@property (readonly, nullable) TKTokenKeychainContents * keychainContents;
```

## See Also

### Accessing Keychain Items

- [TKTokenKeychainContents](../tktokenkeychaincontents.md): A representation of the state of the keychain for a particular token.
- [TKTokenKeychainItem](../tktokenkeychainitem.md): An abstract base class for managing a token’s contents as keychain items.
- [TKTokenKeychainCertificate](../tktokenkeychaincertificate.md): A token’s certificate as stored in the keychain.
- [TKTokenKeychainKey](../tktokenkeychainkey.md): A token’s key as stored in the keychain.
- [TKTokenObjectID](objectid.md): A unique and persistent identifier of a particular token object.
- [TKTokenObjectID](objectid.md): A unique and persistent identifier of a particular token object.
