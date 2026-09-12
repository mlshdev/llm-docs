> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p256/signing/privatekey/signature(for:)-5h94p](https://developer.apple.com/documentation/cryptokit/p256/signing/privatekey/signature(for:)-5h94p)

# signature(for:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Generates an Elliptic Curve Digital Signature Algorithm (ECDSA) signature of the data you provide over the P-256 elliptic curve, using SHA-256 as the hash function.

## Declaration

```swift
func signature<D>(for data: D) throws -> P256.Signing.ECDSASignature where D : DataProtocol
```

## Parameters

- `data`: The data to sign.

<a id="return-value"></a>

## Return Value

The signature corresponding to the data. The signing algorithm employs randomization to generate a different signature on every call, even for the same data and key.

## See Also

### Creating a signature

- [signature(for:)](signature%28for_%29-1iyzc.md): Generates an Elliptic Curve Digital Signature Algorithm (ECDSA) signature of the digest you provide over the P-256 elliptic curve.
- [P256.Signing.ECDSASignature](../ecdsasignature.md): A P-256 elliptic curve digital signature algorithm (ECDSA) signature.
