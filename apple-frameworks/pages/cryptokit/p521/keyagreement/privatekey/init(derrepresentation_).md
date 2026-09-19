> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/p521/keyagreement/privatekey/init(derrepresentation:)

# init(derRepresentation:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a P-521 private key for key agreement from a Distinguished Encoding Rules (DER) encoded representation.

## Declaration

```swift
init<Bytes>(derRepresentation: Bytes) throws where Bytes : RandomAccessCollection, Bytes.Element == UInt8
```

## Parameters

- `derRepresentation`: A DER-encoded representation of the key.

## See Also

### Creating a private key

- [init(compactRepresentable:)](init%28compactrepresentable_%29.md): Creates a random P-521 private key for key agreement.
- [init(rawRepresentation:)](init%28rawrepresentation_%29.md): Creates a P-521 private key for key agreement from a collection of bytes.
- [init(pemRepresentation:)](init%28pemrepresentation_%29.md): Creates a P-521 private key for key agreement from a Privacy-Enhanced Mail PEM) representation.
- [init(x963Representation:)](init%28x963representation_%29.md): Creates a P-521 private key for key agreement from an ANSI x9.63 representation.
