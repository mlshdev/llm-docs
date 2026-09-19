> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/mldsa65/privatekey/signature(for:context:)

# signature(for:context:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Generates a MLDSA65 signature, with context.

## Declaration

```swift
func signature<D, C>(for data: D, context: C) throws -> Data where D : DataProtocol, C : DataProtocol
```

## Parameters

- `data`: The data to sign.
- `context`: Context for the signature.

<a id="return-value"></a>

## Return Value

The MLDSA65 signature. This method throws if CryptoKit encounters an error producing the signature.

## See Also

### Signing data

- [signature(for:)](signature%28for_%29.md): Generates a MLDSA65 signature.
