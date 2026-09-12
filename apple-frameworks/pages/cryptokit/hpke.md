> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpke](https://developer.apple.com/documentation/cryptokit/hpke)

# HPKE

**Framework:** Apple CryptoKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A container for hybrid public key encryption (HPKE) operations.

## Declaration

```swift
enum HPKE
```

<a id="overview"></a>

## Overview

Hybrid public key encryption (HPKE) uses a symmetric encryption algorithm to encrypt data, and encapsulates the symmetric encryption material using a public key encryption algorithm.

HPKE ensures that the ciphertext wasn’t tampered with after its creation. It can also check the validity of additional cleartext data in apps where you need to send headers or other metadata as cleartext.

HPKE optionally incorporates sender authentication, allowing the recipient to validate the authenticity of messages using the sender’s public key.

HPKE is described in the Internet Research Task Force (IRTF) document [RFC 9180](https://www.ietf.org/rfc/rfc9180.pdf).

## Topics

### Sending and receiving messages

- [HPKE.Sender](hpke/sender.md): A type that represents the sending side of an HPKE message exchange.
- [HPKE.Recipient](hpke/recipient.md): A type that represents the receiving side of an HPKE message exchange.

### Choosing cryptographic algorithms

- [HPKE.Ciphersuite](hpke/ciphersuite.md): Cipher suites to use in hybrid public key encryption (HPKE).
- [HPKE.AEAD](hpke/aead.md): The authenticated encryption with associated data (AEAD) algorithms to use in HPKE.
- [HPKE.KDF](hpke/kdf.md): The key derivation functions to use in HPKE.
- [HPKE.KEM](hpke/kem.md): The key encapsulation mechanisms to use in HPKE.
- [HPKE.DHKEM](hpke/dhkem.md): A container for Diffie-Hellman key encapsulation mechanisms (KEMs).

### Handling errors

- [HPKE.Errors](hpke/errors.md): Hybrid public key encryption (HPKE) errors that CryptoKit uses.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Public key cryptography

- [Curve25519](curve25519.md): An elliptic curve that enables X25519 key agreement and Ed25519 signatures.
- [P521](p521.md): An elliptic curve that enables NIST P-521 signatures and key agreement.
- [P384](p384.md): An elliptic curve that enables NIST P-384 signatures and key agreement.
- [P256](p256.md): An elliptic curve that enables NIST P-256 signatures and key agreement.
- [SharedSecret](sharedsecret.md): A key agreement result from which you can derive a symmetric cryptographic key.
- [SecureEnclave](secureenclave.md): A representation of a device’s hardware-based key manager.
