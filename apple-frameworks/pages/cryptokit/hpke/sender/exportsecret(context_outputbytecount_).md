> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/hpke/sender/exportsecret(context:outputbytecount:)

# exportSecret(context:outputByteCount:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Exports a secret given domain-separation context and the desired output length.

## Declaration

```swift
func exportSecret<Context>(context: Context, outputByteCount: Int) throws -> SymmetricKey where Context : DataProtocol
```

## Parameters

- `context`: Application-specific information providing context on the use of this key.
- `outputByteCount`: The desired length of the exported secret.

<a id="return-value"></a>

## Return Value

The exported secret.
