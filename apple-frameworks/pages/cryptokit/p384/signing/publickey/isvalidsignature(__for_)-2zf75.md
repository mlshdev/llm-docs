> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p384/signing/publickey/isvalidsignature(_:for:)-2zf75](https://developer.apple.com/documentation/cryptokit/p384/signing/publickey/isvalidsignature(_:for:)-2zf75)

# isValidSignature(\_:for:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Verifies an elliptic curve digital signature algorithm (ECDSA) signature on a block of data over the P-384 elliptic curve.

## Declaration

```swift
func isValidSignature<D>(_ signature: P384.Signing.ECDSASignature, for data: D) -> Bool where D : DataProtocol
```

## Parameters

- `signature`: The signature to verify.
- `data`: The signed data.

<a id="return-value"></a>

## Return Value

A Boolean value that’s `true` if the signature is valid for the given data; otherwise, `false`.

## See Also

### Verifying a signature

- [isValidSignature(\_:for:)](isvalidsignature%28__for_%29-1hrtv.md): Verifies an elliptic curve digital signature algorithm (ECDSA) signature on a digest over the P-384 elliptic curve.
- [P384.Signing.ECDSASignature](../ecdsasignature.md): A P-384 elliptic curve digital signature algorithm (ECDSA) signature.
