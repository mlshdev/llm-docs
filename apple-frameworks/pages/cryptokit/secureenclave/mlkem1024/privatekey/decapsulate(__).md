> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/secureenclave/mlkem1024/privatekey/decapsulate(_:)

# decapsulate(\_:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Decapsulates the encapsulated shared secret

## Declaration

```swift
func decapsulate<D>(_ encapsulated: D) throws -> SymmetricKey where D : DataProtocol
```

## Parameters

- `encapsulated`: The encapsulated shared secret

<a id="return-value"></a>

## Return Value

The decapsulated shared secret
