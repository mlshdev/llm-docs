> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p384/signing/privatekey/init(derrepresentation:)](https://developer.apple.com/documentation/cryptokit/p384/signing/privatekey/init(derrepresentation:))

# init(derRepresentation:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a P-384 private key for signing from a Distinguished Encoding Rules (DER) encoded representation.

## Declaration

```swift
init<Bytes>(derRepresentation: Bytes) throws where Bytes : RandomAccessCollection, Bytes.Element == UInt8
```

## Parameters

- `derRepresentation`: A DER-encoded representation of the key.

## See Also

### Creating a private key

- [init(rawRepresentation:)](init%28rawrepresentation_%29.md): Creates a P-384 private key for signing from a collection of bytes.
- [init(compactRepresentable:)](init%28compactrepresentable_%29.md): Creates a random P-384 private key for signing.
- [init(pemRepresentation:)](init%28pemrepresentation_%29.md): Creates a P-384 private key for signing from a Privacy-Enhanced Mail PEM) representation.
- [init(x963Representation:)](init%28x963representation_%29.md): Creates a P-384 private key for signing from an ANSI x9.63 representation.
