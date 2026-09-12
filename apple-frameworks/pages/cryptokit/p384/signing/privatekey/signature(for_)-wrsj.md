> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p384/signing/privatekey/signature(for:)-wrsj](https://developer.apple.com/documentation/cryptokit/p384/signing/privatekey/signature(for:)-wrsj)

# signature(for:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Generates an Elliptic Curve Digital Signature Algorithm (ECDSA) signature of the digest you provide over the P-384 elliptic curve.

## Declaration

```swift
func signature<D>(for digest: D) throws -> P384.Signing.ECDSASignature where D : Digest
```

## Parameters

- `digest`: The digest of the data to sign.

<a id="return-value"></a>

## Return Value

The signature corresponding to the digest. The signing algorithm employs randomization to generate a different signature on every call, even for the same data and key.

## See Also

### Creating a signature

- [signature(for:)](signature%28for_%29-8nncg.md): Generates an Elliptic Curve Digital Signature Algorithm (ECDSA) signature of the data you provide over the P-384 elliptic curve, using SHA-384 as the hash function.
- [P384.Signing.ECDSASignature](../ecdsasignature.md): A P-384 elliptic curve digital signature algorithm (ECDSA) signature.
