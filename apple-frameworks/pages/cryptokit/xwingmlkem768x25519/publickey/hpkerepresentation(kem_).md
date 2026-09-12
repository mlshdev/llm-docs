> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/xwingmlkem768x25519/publickey/hpkerepresentation(kem:)](https://developer.apple.com/documentation/cryptokit/xwingmlkem768x25519/publickey/hpkerepresentation(kem:))

# hpkeRepresentation(kem:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a serialized representation of the public key.

## Declaration

```swift
func hpkeRepresentation(kem: HPKE.KEM) throws -> Data
```

<a id="return-value"></a>

## Return Value

The serialized representation of the public key.

<a id="discussion"></a>

## Discussion

- kem: The Key Encapsulation Mechanism to use with the public key.

> **Throws**

> [HPKE.Errors.inconsistentCiphersuiteAndKey](../../hpke/errors/inconsistentciphersuiteandkey.md) if the key encapsulation mechanism requested is incompatible with this public key.
