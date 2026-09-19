> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/p521/signing/ecdsasignature/init(rawrepresentation:)

# init(rawRepresentation:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a P-521 digital signature from a raw representation.

## Declaration

```swift
init<D>(rawRepresentation: D) throws where D : DataProtocol
```

## Parameters

- `rawRepresentation`: A raw representation of the signature as a collection of contiguous bytes.

## See Also

### Creating a signature

- [init(derRepresentation:)](init%28derrepresentation_%29.md): Creates a P-521 digital signature from a Distinguished Encoding Rules (DER) encoded representation.
