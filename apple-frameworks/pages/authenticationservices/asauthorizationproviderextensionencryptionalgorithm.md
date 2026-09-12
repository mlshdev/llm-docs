> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionencryptionalgorithm](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionencryptionalgorithm)

# ASAuthorizationProviderExtensionEncryptionAlgorithm (Swift)

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** macOS 15.0+

## Declaration

```swift
struct ASAuthorizationProviderExtensionEncryptionAlgorithm
```

## Topics

### Initializers

- [init(\_:)](asauthorizationproviderextensionencryptionalgorithm/init%28__%29.md)
- [init(rawValue:)](asauthorizationproviderextensionencryptionalgorithm/init%28rawvalue_%29.md)

### Type Properties

- [ecdhe_A256GCM](asauthorizationproviderextensionencryptionalgorithm/ecdhe_a256gcm.md): A encryption algorithm that uses NIST P-256 elliptic curve key agreement, ConcatKDF key derivation with a 256-bit digest, and the Advanced Encryption Standard cipher in Galois/Counter Mode with a key length of 256 bits.
- [hpke_Curve25519_SHA256_ChachaPoly](asauthorizationproviderextensionencryptionalgorithm/hpke_curve25519_sha256_chachapoly.md): A cipher suite for HPKE that uses X25519 elliptic curve key agreement, SHA-2 key derivation with a 256-bit digest, and the ChaCha20 stream cipher with the Poly1305 message authentication code.
- [hpke_P256_SHA256_AES_GCM_256](asauthorizationproviderextensionencryptionalgorithm/hpke_p256_sha256_aes_gcm_256.md): A cipher suite for HPKE that uses NIST P-256 elliptic curve key agreement, SHA-2 key derivation with a 256-bit digest, and the Advanced Encryption Standard cipher in Galois/Counter Mode with a key length of 256 bits.
- [hpke_P384_SHA384_AES_GCM_256](asauthorizationproviderextensionencryptionalgorithm/hpke_p384_sha384_aes_gcm_256.md): A cipher suite that you use for HPKE using NIST P-384 elliptic curve key agreement, SHA-2 key derivation with a 384-bit digest, and the Advanced Encryption Standard cipher in Galois/Counter Mode with a key length of 256 bits.

## Relationships

### Conforms To

- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# ASAuthorizationProviderExtensionEncryptionAlgorithm (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Alias  
**Availability:** macOS 15.0+

## Declaration

```objectivec
typedef NSNumber * ASAuthorizationProviderExtensionEncryptionAlgorithm;
```
