> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/curve25519/signing/privatekey/signature(for:)](https://developer.apple.com/documentation/cryptokit/curve25519/signing/privatekey/signature(for:))

# signature(for:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Generates an EdDSA signature over Curve25519.

## Declaration

```swift
func signature<D>(for data: D) throws -> Data where D : DataProtocol
```

## Parameters

- `data`: The data to sign.

<a id="return-value"></a>

## Return Value

The signature for the data. Although not required by [RFC 8032](https://tools.ietf.org/html/rfc8032), which describes the Edwards-Curve Digital Signature Algorithm (EdDSA), the CryptoKit implementation of the algorithm employs randomization to generate a different signature on every call, even for the same data and key, to guard against side-channel attacks.
