> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hkdf/derivekey(inputkeymaterial:info:outputbytecount:)](https://developer.apple.com/documentation/cryptokit/hkdf/derivekey(inputkeymaterial:info:outputbytecount:))

# deriveKey(inputKeyMaterial:info:outputByteCount:)

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Derives a symmetric encryption key from a main key or passcode using HKDF key derivation with information you specify.

## Declaration

```swift
static func deriveKey<Info>(inputKeyMaterial: SymmetricKey, info: Info, outputByteCount: Int) -> SymmetricKey where Info : DataProtocol
```

## Parameters

- `inputKeyMaterial`: The main key or passcode the derivation function uses to derive a key.
- `info`: The shared information to use for key derivation.
- `outputByteCount`: The length in bytes of the resulting symmetric key.

<a id="return-value"></a>

## Return Value

The derived symmetric key.

## See Also

### Deriving a key

- [deriveKey(inputKeyMaterial:outputByteCount:)](derivekey%28inputkeymaterial_outputbytecount_%29.md): Derives a symmetric encryption key from a main key or passcode using HKDF key derivation.
- [deriveKey(inputKeyMaterial:salt:outputByteCount:)](derivekey%28inputkeymaterial_salt_outputbytecount_%29.md): Derives a symmetric encryption key from a main key or passcode using HKDF key derivation with salt that you specify.
- [deriveKey(inputKeyMaterial:salt:info:outputByteCount:)](derivekey%28inputkeymaterial_salt_info_outputbytecount_%29.md): Derives a symmetric encryption key from a main key or passcode using HKDF key derivation with information and salt you specify.
