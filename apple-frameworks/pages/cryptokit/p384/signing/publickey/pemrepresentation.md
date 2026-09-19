> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/p384/signing/publickey/pemrepresentation

# pemRepresentation

**Framework:** Apple CryptoKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Privacy-Enhanced Mail (PEM) representation of the public key.

## Declaration

```swift
var pemRepresentation: String { get }
```

## See Also

### Representing the key

- [rawRepresentation](rawrepresentation.md): A full representation of the public key.
- [compactRepresentation](compactrepresentation.md): A compact representation of the public key.
- [compressedRepresentation](compressedrepresentation.md): A compressed representation of the public key.
- [derRepresentation](derrepresentation.md): A Distinguished Encoding Rules (DER) encoded representation of the public key.
- [x963Representation](x963representation.md): An ANSI x9.63 representation of the public key.
