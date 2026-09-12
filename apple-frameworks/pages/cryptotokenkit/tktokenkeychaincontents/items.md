> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenkeychaincontents/items](https://developer.apple.com/documentation/cryptotokenkit/tktokenkeychaincontents/items)

# items (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns all items for token in the keychain.

## Declaration

```swift
var items: [TKTokenKeychainItem] { get }
```

## See Also

### Accessing Keychain Items

- [key(forObjectID:)](key%28forobjectid_%29.md): Returns the key for a specified object identifier.
- [certificate(forObjectID:)](certificate%28forobjectid_%29.md): Returns the key for a specified object identifier.

# items (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns all items for token in the keychain.

## Declaration

```objectivec
@property (copy, readonly) NSArray<TKTokenKeychainItem *> * items;
```

## See Also

### Accessing Keychain Items

- [keyForObjectID:error:](key%28forobjectid_%29.md): Returns the key for a specified object identifier.
- [certificateForObjectID:error:](certificate%28forobjectid_%29.md): Returns the key for a specified object identifier.
