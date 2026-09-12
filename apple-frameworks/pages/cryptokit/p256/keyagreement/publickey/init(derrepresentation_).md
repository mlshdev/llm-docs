> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p256/keyagreement/publickey/init(derrepresentation:)](https://developer.apple.com/documentation/cryptokit/p256/keyagreement/publickey/init(derrepresentation:))

# init(derRepresentation:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a P-256 public key for key agreement from a Distinguished Encoding Rules (DER) encoded representation.

## Declaration

```swift
init<Bytes>(derRepresentation: Bytes) throws where Bytes : RandomAccessCollection, Bytes.Element == UInt8
```

## Parameters

- `derRepresentation`: A DER-encoded representation of the key.

## See Also

### Creating a public key

- [init(rawRepresentation:)](init%28rawrepresentation_%29.md): Creates a P-256 public key for key agreement from a collection of bytes.
- [init(compactRepresentation:)](init%28compactrepresentation_%29.md): Creates a P-256 public key for key agreement from a compact representation of the key.
- [init(pemRepresentation:)](init%28pemrepresentation_%29.md): Creates a P-256 public key for key agreement from a Privacy-Enhanced Mail (PEM) representation.
- [init(x963Representation:)](init%28x963representation_%29.md): Creates a P-256 public key for key agreement from an ANSI x9.63 representation.
- [init(compressedRepresentation:)](init%28compressedrepresentation_%29.md): Creates a P-256 public key for key agreement from a compressed representation of the key.
