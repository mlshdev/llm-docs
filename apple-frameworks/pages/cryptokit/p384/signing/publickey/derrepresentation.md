> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p384/signing/publickey/derrepresentation](https://developer.apple.com/documentation/cryptokit/p384/signing/publickey/derrepresentation)

# derRepresentation

**Framework:** Apple CryptoKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Distinguished Encoding Rules (DER) encoded representation of the public key.

## Declaration

```swift
var derRepresentation: Data { get }
```

## See Also

### Representing the key

- [rawRepresentation](rawrepresentation.md): A full representation of the public key.
- [compactRepresentation](compactrepresentation.md): A compact representation of the public key.
- [compressedRepresentation](compressedrepresentation.md): A compressed representation of the public key.
- [pemRepresentation](pemrepresentation.md): A Privacy-Enhanced Mail (PEM) representation of the public key.
- [x963Representation](x963representation.md): An ANSI x9.63 representation of the public key.
