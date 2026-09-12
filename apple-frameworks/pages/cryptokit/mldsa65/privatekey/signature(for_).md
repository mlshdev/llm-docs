> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/mldsa65/privatekey/signature(for:)](https://developer.apple.com/documentation/cryptokit/mldsa65/privatekey/signature(for:))

# signature(for:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Generates a MLDSA65 signature.

## Declaration

```swift
func signature<D>(for data: D) throws -> Data where D : DataProtocol
```

## Parameters

- `data`: The data to sign.

<a id="return-value"></a>

## Return Value

The MLDSA65 signature. This method throws if CryptoKit encounters an error producing the signature.

## See Also

### Signing data

- [signature(for:context:)](signature%28for_context_%29.md): Generates a MLDSA65 signature, with context.
