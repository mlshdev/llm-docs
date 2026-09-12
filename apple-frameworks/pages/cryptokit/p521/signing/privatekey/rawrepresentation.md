> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p521/signing/privatekey/rawrepresentation](https://developer.apple.com/documentation/cryptokit/p521/signing/privatekey/rawrepresentation)

# rawRepresentation

**Framework:** Apple CryptoKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A data representation of the private key.

## Declaration

```swift
var rawRepresentation: Data { get }
```

## See Also

### Representing the key

- [derRepresentation](derrepresentation.md): A Distinguished Encoding Rules (DER) encoded representation of the private key.
- [pemRepresentation](pemrepresentation.md): A Privacy-Enhanced Mail (PEM) representation of the private key.
- [x963Representation](x963representation.md): An ANSI x9.63 representation of the private key.
