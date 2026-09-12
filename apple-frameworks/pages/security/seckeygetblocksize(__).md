> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeygetblocksize(_:)](https://developer.apple.com/documentation/security/seckeygetblocksize(_:))

# SecKeyGetBlockSize(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 4.0+ · visionOS 1.0+ · watchOS 1.0+

Gets the block length associated with a cryptographic key.

## Declaration

```swift
func SecKeyGetBlockSize(_ key: SecKey) -> Int
```

## Parameters

- `key`: The key for which you want the block length.

<a id="return-value"></a>

## Return Value

The block length associated with the key in bytes. If the key is an RSA key, for example, this is the size of the modulus.

## Mentioned In

- [Using Keys for Encryption](using-keys-for-encryption.md)

# SecKeyGetBlockSize (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 4.0+ · visionOS 1.0+ · watchOS 1.0+

Gets the block length associated with a cryptographic key.

## Declaration

```objectivec
size_t SecKeyGetBlockSize(SecKeyRef key);
```

## Parameters

- `key`: The key for which you want the block length.

<a id="return-value"></a>

## Return Value

The block length associated with the key in bytes. If the key is an RSA key, for example, this is the size of the modulus.

## Mentioned In

- [Using Keys for Encryption](using-keys-for-encryption.md)
