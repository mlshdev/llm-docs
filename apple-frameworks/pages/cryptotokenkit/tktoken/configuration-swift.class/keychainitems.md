> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktoken/configuration-swift.class/keychainitems](https://developer.apple.com/documentation/cryptotokenkit/tktoken/configuration-swift.class/keychainitems)

# keychainItems (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The keychain items associated with this token.

## Declaration

```swift
var keychainItems: [TKTokenKeychainItem] { get set }
```

## See Also

### Retrieving Keys and Certificates

- [certificate(for:)](certificate%28for_%29.md): Returns a certificate from the keychain with the object identifier you specify.
- [key(for:)](key%28for_%29.md): Returns a key from the keychain with the object identifier you specify.

# keychainItems (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The keychain items associated with this token.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<__kindof TKTokenKeychainItem *> * keychainItems;
```

## See Also

### Retrieving Keys and Certificates

- [certificateForObjectID:error:](certificate%28for_%29.md): Returns a certificate from the keychain with the object identifier you specify.
- [keyForObjectID:error:](key%28for_%29.md): Returns a key from the keychain with the object identifier you specify.
