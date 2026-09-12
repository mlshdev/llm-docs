> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenkeychaincontents/key(forobjectid:)](https://developer.apple.com/documentation/cryptotokenkit/tktokenkeychaincontents/key(forobjectid:))

# key(forObjectID:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the key for a specified object identifier.

## Declaration

```swift
func key(forObjectID objectID: TKToken.ObjectID) throws -> TKTokenKeychainKey
```

## Parameters

- `objectID`: The object identifier for the keychain item.

<a id="return-value"></a>

## Return Value

The key, or `nil` if no key exists.

## See Also

### Accessing Keychain Items

- [items](items.md): Returns all items for token in the keychain.
- [certificate(forObjectID:)](certificate%28forobjectid_%29.md): Returns the key for a specified object identifier.

# keyForObjectID:error: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the key for a specified object identifier.

## Declaration

```objectivec
- (TKTokenKeychainKey *) keyForObjectID:(TKTokenObjectID) objectID error:(NSError **) error;
```

## Parameters

- `objectID`: The object identifier for the keychain item.
- `error`: On return, if no such key exists, contains information about the error.

<a id="return-value"></a>

## Return Value

The key, or `nil` if no key exists.

## See Also

### Accessing Keychain Items

- [items](items.md): Returns all items for token in the keychain.
- [certificateForObjectID:error:](certificate%28forobjectid_%29.md): Returns the key for a specified object identifier.
