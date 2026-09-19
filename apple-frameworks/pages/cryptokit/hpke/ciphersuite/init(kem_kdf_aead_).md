> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/hpke/ciphersuite/init(kem:kdf:aead:)

# init(kem:kdf:aead:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates an HPKE cipher suite.

## Declaration

```swift
init(kem: HPKE.KEM, kdf: HPKE.KDF, aead: HPKE.AEAD)
```

## Parameters

- `kem`: The key encapsulation mechanism for encapsulating the symmetric key.
- `kdf`: The key derivation function for deriving the symmetric key.
- `aead`: The authenticated encryption with additional data (AEAD) algorithm for encrypting and decrypting messages.
