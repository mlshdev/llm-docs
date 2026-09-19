> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/xwingmlkem768x25519/onetimeprivatekey/decapsulate(_:)

# decapsulate(\_:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Decapsulate a shared secret.

## Declaration

```swift
consuming func decapsulate(_ encapsulated: Data) throws -> SymmetricKey
```

## Parameters

- `encapsulated`: An encapsulated shared secret, that you get by calling `XWingMLKEM768X25519/PublicKey/encapsulate()` on the corresponding public key.

<a id="return-value"></a>

## Return Value

The shared secret.
