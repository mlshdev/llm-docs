> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p256/keyagreement/privatekey/init(x963representation:)](https://developer.apple.com/documentation/cryptokit/p256/keyagreement/privatekey/init(x963representation:))

# init(x963Representation:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a P-256 private key for key agreement from an ANSI x9.63 representation.

## Declaration

```swift
init<Bytes>(x963Representation: Bytes) throws where Bytes : ContiguousBytes
```

## Parameters

- `x963Representation`: An ANSI x9.63 representation of the key.

## See Also

### Creating a private key

- [init(rawRepresentation:)](init%28rawrepresentation_%29.md): Creates a P-256 private key for key agreement from a collection of bytes.
- [init(compactRepresentable:)](init%28compactrepresentable_%29.md): Creates a random P-256 private key for key agreement.
- [init(derRepresentation:)](init%28derrepresentation_%29.md): Creates a P-256 private key for key agreement from a Distinguished Encoding Rules (DER) encoded representation.
- [init(pemRepresentation:)](init%28pemrepresentation_%29.md): Creates a P-256 private key for key agreement from a Privacy-Enhanced Mail PEM) representation.
