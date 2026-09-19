> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/secureenclave/p256/signing/privatekey/init(datarepresentation:)

# init(dataRepresentation:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** tvOS 13.0+ · watchOS 6.0+

Creates a P-256 private key for signing from the specified data representation.

## Declaration

```swift
init(dataRepresentation: Data) throws
```

## Parameters

- `dataRepresentation`: A data representation of the key.
