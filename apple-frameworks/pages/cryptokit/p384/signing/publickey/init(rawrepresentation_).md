> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/p384/signing/publickey/init(rawrepresentation:)

# init(rawRepresentation:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a P-384 public key for signing from a collection of bytes.

## Declaration

```swift
init<D>(rawRepresentation: D) throws where D : ContiguousBytes
```

## Parameters

- `rawRepresentation`: A raw representation of the key as a collection of contiguous bytes.

## See Also

### Creating a key

- [init(compactRepresentation:)](init%28compactrepresentation_%29.md): Creates a P-384 public key for signing from a compact representation of the key.
- [init(compressedRepresentation:)](init%28compressedrepresentation_%29.md): Creates a P-384 public key for signing from a compressed representation of the key.
- [init(derRepresentation:)](init%28derrepresentation_%29.md): Creates a P-384 public key for signing from a Distinguished Encoding Rules (DER) encoded representation.
- [init(pemRepresentation:)](init%28pemrepresentation_%29.md): Creates a P-384 public key for signing from a Privacy-Enhanced Mail (PEM) representation.
- [init(x963Representation:)](init%28x963representation_%29.md): Creates a P-384 public key for signing from an ANSI x9.63 representation.
