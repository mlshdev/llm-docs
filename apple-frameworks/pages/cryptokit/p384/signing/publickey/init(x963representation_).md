> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p384/signing/publickey/init(x963representation:)](https://developer.apple.com/documentation/cryptokit/p384/signing/publickey/init(x963representation:))

# init(x963Representation:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a P-384 public key for signing from an ANSI x9.63 representation.

## Declaration

```swift
init<Bytes>(x963Representation: Bytes) throws where Bytes : ContiguousBytes
```

## Parameters

- `x963Representation`: An ANSI x9.63 representation of the key.

## See Also

### Creating a key

- [init(rawRepresentation:)](init%28rawrepresentation_%29.md): Creates a P-384 public key for signing from a collection of bytes.
- [init(compactRepresentation:)](init%28compactrepresentation_%29.md): Creates a P-384 public key for signing from a compact representation of the key.
- [init(compressedRepresentation:)](init%28compressedrepresentation_%29.md): Creates a P-384 public key for signing from a compressed representation of the key.
- [init(derRepresentation:)](init%28derrepresentation_%29.md): Creates a P-384 public key for signing from a Distinguished Encoding Rules (DER) encoded representation.
- [init(pemRepresentation:)](init%28pemrepresentation_%29.md): Creates a P-384 public key for signing from a Privacy-Enhanced Mail (PEM) representation.
