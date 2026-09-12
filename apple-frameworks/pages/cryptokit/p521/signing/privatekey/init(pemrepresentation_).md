> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p521/signing/privatekey/init(pemrepresentation:)](https://developer.apple.com/documentation/cryptokit/p521/signing/privatekey/init(pemrepresentation:))

# init(pemRepresentation:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a P-521 private key for signing from a Privacy-Enhanced Mail PEM) representation.

## Declaration

```swift
init(pemRepresentation: String) throws
```

## Parameters

- `pemRepresentation`: A PEM representation of the key.

## See Also

### Creating a key

- [init(rawRepresentation:)](init%28rawrepresentation_%29.md): Creates a P-521 private key for signing from a collection of bytes.
- [init(compactRepresentable:)](init%28compactrepresentable_%29.md): Creates a random P-521 private key for signing.
- [init(derRepresentation:)](init%28derrepresentation_%29.md): Creates a P-521 private key for signing from a Distinguished Encoding Rules (DER) encoded representation.
- [init(x963Representation:)](init%28x963representation_%29.md): Creates a P-521 private key for signing from an ANSI x9.63 representation.
