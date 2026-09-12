> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p256/signing/publickey/compactrepresentation](https://developer.apple.com/documentation/cryptokit/p256/signing/publickey/compactrepresentation)

# compactRepresentation

**Framework:** Apple CryptoKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A compact representation of the public key.

## Declaration

```swift
var compactRepresentation: Data? { get }
```

## See Also

### Representing the key

- [rawRepresentation](rawrepresentation.md): A full representation of the public key.
- [compressedRepresentation](compressedrepresentation.md): A compressed representation of the public key.
- [derRepresentation](derrepresentation.md): A Distinguished Encoding Rules (DER) encoded representation of the public key.
- [pemRepresentation](pemrepresentation.md): A Privacy-Enhanced Mail (PEM) representation of the public key.
- [x963Representation](x963representation.md): An ANSI x9.63 representation of the public key.
