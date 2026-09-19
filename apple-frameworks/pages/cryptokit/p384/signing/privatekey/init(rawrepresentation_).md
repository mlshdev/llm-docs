> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/p384/signing/privatekey/init(rawrepresentation:)

# init(rawRepresentation:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a P-384 private key for signing from a collection of bytes.

## Declaration

```swift
init<Bytes>(rawRepresentation: Bytes) throws where Bytes : ContiguousBytes
```

## Parameters

- `rawRepresentation`: A raw representation of the key as a collection of contiguous bytes.

## See Also

### Creating a private key

- [init(compactRepresentable:)](init%28compactrepresentable_%29.md): Creates a random P-384 private key for signing.
- [init(derRepresentation:)](init%28derrepresentation_%29.md): Creates a P-384 private key for signing from a Distinguished Encoding Rules (DER) encoded representation.
- [init(pemRepresentation:)](init%28pemrepresentation_%29.md): Creates a P-384 private key for signing from a Privacy-Enhanced Mail PEM) representation.
- [init(x963Representation:)](init%28x963representation_%29.md): Creates a P-384 private key for signing from an ANSI x9.63 representation.
