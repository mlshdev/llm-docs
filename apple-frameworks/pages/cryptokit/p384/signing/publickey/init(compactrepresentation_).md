> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p384/signing/publickey/init(compactrepresentation:)](https://developer.apple.com/documentation/cryptokit/p384/signing/publickey/init(compactrepresentation:))

# init(compactRepresentation:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a P-384 public key for signing from a compact representation of the key.

## Declaration

```swift
init<Bytes>(compactRepresentation: Bytes) throws where Bytes : ContiguousBytes
```

## Parameters

- `compactRepresentation`: A compact representation of the key as a collection of contiguous bytes.

## See Also

### Creating a key

- [init(rawRepresentation:)](init%28rawrepresentation_%29.md): Creates a P-384 public key for signing from a collection of bytes.
- [init(compressedRepresentation:)](init%28compressedrepresentation_%29.md): Creates a P-384 public key for signing from a compressed representation of the key.
- [init(derRepresentation:)](init%28derrepresentation_%29.md): Creates a P-384 public key for signing from a Distinguished Encoding Rules (DER) encoded representation.
- [init(pemRepresentation:)](init%28pemrepresentation_%29.md): Creates a P-384 public key for signing from a Privacy-Enhanced Mail (PEM) representation.
- [init(x963Representation:)](init%28x963representation_%29.md): Creates a P-384 public key for signing from an ANSI x9.63 representation.
