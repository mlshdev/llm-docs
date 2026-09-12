> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p384/signing/publickey/compressedrepresentation](https://developer.apple.com/documentation/cryptokit/p384/signing/publickey/compressedrepresentation)

# compressedRepresentation

**Framework:** Apple CryptoKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A compressed representation of the public key.

## Declaration

```swift
var compressedRepresentation: Data { get }
```

## See Also

### Representing the key

- [rawRepresentation](rawrepresentation.md): A full representation of the public key.
- [compactRepresentation](compactrepresentation.md): A compact representation of the public key.
- [derRepresentation](derrepresentation.md): A Distinguished Encoding Rules (DER) encoded representation of the public key.
- [pemRepresentation](pemrepresentation.md): A Privacy-Enhanced Mail (PEM) representation of the public key.
- [x963Representation](x963representation.md): An ANSI x9.63 representation of the public key.
