> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hkdf](https://developer.apple.com/documentation/cryptokit/hkdf)

# HKDF

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A standards-based implementation of an HMAC-based Key Derivation Function (HKDF).

## Declaration

```swift
struct HKDF<H> where H : HashFunction
```

<a id="overview"></a>

## Overview

The key derivation functions allow you to derive one or more secrets of the size of your choice from a main key or passcode. The key derivation function is compliant with IETF RFC 5869. Use one of the `deriveKey` functions, such as [deriveKey(inputKeyMaterial:outputByteCount:)](hkdf/derivekey%28inputkeymaterial_outputbytecount_%29.md) or [deriveKey(inputKeyMaterial:salt:info:outputByteCount:)](hkdf/derivekey%28inputkeymaterial_salt_info_outputbytecount_%29.md), to derive a key from a main secret or passcode in a single function.

To derive a key with more fine-grained control, use `extract(inputKeyMaterial:salt:)` to create cryptographically strong key material in the form of a hashed authentication code, then call [expand(pseudoRandomKey:info:outputByteCount:)](hkdf/expand%28pseudorandomkey_info_outputbytecount_%29.md) using that key material to generate a symmetric key of the length you specify.

## Topics

### Deriving a key

- [deriveKey(inputKeyMaterial:outputByteCount:)](hkdf/derivekey%28inputkeymaterial_outputbytecount_%29.md): Derives a symmetric encryption key from a main key or passcode using HKDF key derivation.
- [deriveKey(inputKeyMaterial:info:outputByteCount:)](hkdf/derivekey%28inputkeymaterial_info_outputbytecount_%29.md): Derives a symmetric encryption key from a main key or passcode using HKDF key derivation with information you specify.
- [deriveKey(inputKeyMaterial:salt:outputByteCount:)](hkdf/derivekey%28inputkeymaterial_salt_outputbytecount_%29.md): Derives a symmetric encryption key from a main key or passcode using HKDF key derivation with salt that you specify.
- [deriveKey(inputKeyMaterial:salt:info:outputByteCount:)](hkdf/derivekey%28inputkeymaterial_salt_info_outputbytecount_%29.md): Derives a symmetric encryption key from a main key or passcode using HKDF key derivation with information and salt you specify.

### Controlling key derivation

- [expand(pseudoRandomKey:info:outputByteCount:)](hkdf/expand%28pseudorandomkey_info_outputbytecount_%29.md): Expands cryptographically strong key material into a derived symmetric key.

### Type Methods

- [deriveKey(inputKeyMaterial:salt:info:output:)](hkdf/derivekey%28inputkeymaterial_salt_info_output_%29.md): Derives a symmetric encryption key from a main key or passcode using HKDF key derivation with information and salt you specify.
- [expand(pseudoRandomKey:info:into:)](hkdf/expand%28pseudorandomkey_info_into_%29.md): Expands cryptographically strong key material into a derived symmetric key.
- [extract(inputKeyMaterial:salt:)](hkdf/extract%28inputkeymaterial_salt_%29-4f5wf.md): Creates cryptographically strong key material from a main key or passcode that you specify.
- [extract(inputKeyMaterial:salt:)](hkdf/extract%28inputkeymaterial_salt_%29-7qmzj.md): Creates cryptographically strong key material from a main key or passcode that you specify.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
