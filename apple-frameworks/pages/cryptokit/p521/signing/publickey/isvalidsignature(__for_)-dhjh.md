> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p521/signing/publickey/isvalidsignature(_:for:)-dhjh](https://developer.apple.com/documentation/cryptokit/p521/signing/publickey/isvalidsignature(_:for:)-dhjh)

# isValidSignature(\_:for:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Verifies an elliptic curve digital signature algorithm (ECDSA) signature on a digest over the P-521 elliptic curve.

## Declaration

```swift
func isValidSignature<D>(_ signature: P521.Signing.ECDSASignature, for digest: D) -> Bool where D : Digest
```

## Parameters

- `signature`: The signature to verify.
- `digest`: The signed digest.

<a id="return-value"></a>

## Return Value

A Boolean value that’s `true` if the signature is valid for the given digest; otherwise, `false`.

## See Also

### Verifying a signature

- [isValidSignature(\_:for:)](isvalidsignature%28__for_%29-5kwev.md): Verifies an elliptic curve digital signature algorithm (ECDSA) signature on a block of data over the P-521 elliptic curve.
- [P521.Signing.ECDSASignature](../ecdsasignature.md): A P-521 elliptic curve digital signature algorithm (ECDSA) signature.
