> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/mldsa87/publickey/isvalidsignature(_:for:)](https://developer.apple.com/documentation/cryptokit/mldsa87/publickey/isvalidsignature(_:for:))

# isValidSignature(\_:for:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Verifies a MLDSA87 signature.

## Declaration

```swift
func isValidSignature<S, D>(_ signature: S, for data: D) -> Bool where S : DataProtocol, D : DataProtocol
```

## Parameters

- `signature`: The MLDSA87 signature to verify.
- `data`: The signed data.

<a id="return-value"></a>

## Return Value

`true` if the signature is valid, `false` otherwise.
