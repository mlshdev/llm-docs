> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpke/ciphersuite/p384_sha384_aes_gcm_256](https://developer.apple.com/documentation/cryptokit/hpke/ciphersuite/p384_sha384_aes_gcm_256)

# P384_SHA384_AES_GCM_256

**Framework:** Apple CryptoKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A cipher suite that you use for HPKE using NIST P-384 elliptic curve key agreement, SHA-2 key derivation with a 384-bit digest, and the Advanced Encryption Standard cipher in Galois/Counter Mode with a key length of 256 bits.

## Declaration

```swift
static let P384_SHA384_AES_GCM_256: HPKE.Ciphersuite
```

## See Also

### Using elliptic curve cipher suites

- [Curve25519_SHA256_ChachaPoly](curve25519_sha256_chachapoly.md): A cipher suite for HPKE that uses X25519 elliptic curve key agreement, SHA-2 key derivation with a 256-bit digest, and the ChaCha20 stream cipher with the Poly1305 message authentication code.
- [P256_SHA256_AES_GCM_256](p256_sha256_aes_gcm_256.md): A cipher suite for HPKE that uses NIST P-256 elliptic curve key agreement, SHA-2 key derivation with a 256-bit digest, and the Advanced Encryption Standard cipher in Galois/Counter Mode with a key length of 256 bits.
- [P521_SHA512_AES_GCM_256](p521_sha512_aes_gcm_256.md): A cipher suite for HPKE that uses NIST P-521 elliptic curve key agreement, SHA-2 key derivation with a 512-bit digest, and the Advanced Encryption Standard cipher in Galois/Counter Mode with a key length of 256 bits.
