> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p384/keyagreement/privatekey/derrepresentation](https://developer.apple.com/documentation/cryptokit/p384/keyagreement/privatekey/derrepresentation)

# derRepresentation

**Framework:** Apple CryptoKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Distinguished Encoding Rules (DER) encoded representation of the private key.

## Declaration

```swift
var derRepresentation: Data { get }
```

## See Also

### Representing the key

- [rawRepresentation](rawrepresentation.md): A data representation of the private key.
- [pemRepresentation](pemrepresentation.md): A Privacy-Enhanced Mail (PEM) representation of the private key.
- [x963Representation](x963representation.md): An ANSI x9.63 representation of the private key.
