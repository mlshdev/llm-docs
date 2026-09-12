> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p521/keyagreement/publickey/init(_:kem:)](https://developer.apple.com/documentation/cryptokit/p521/keyagreement/publickey/init(_:kem:))

# init(\_:kem:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a NIST P-521 elliptic curve public key for use with Diffie-Hellman key exchange.

## Declaration

```swift
init<D>(_ serialization: D, kem: HPKE.KEM) throws where D : ContiguousBytes
```

<a id="discussion"></a>

## Discussion

- serialization: The serialized bytes of the public key.
- kem: The Key Encapsulation Mechanism to use with the public key.

> **Throws**

> [HPKE.Errors.inconsistentCiphersuiteAndKey](../../../hpke/errors/inconsistentciphersuiteandkey.md) if the key encapsulation mechanism requested is incompatible with this public key.
