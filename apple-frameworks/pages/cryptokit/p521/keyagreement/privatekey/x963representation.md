> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p521/keyagreement/privatekey/x963representation](https://developer.apple.com/documentation/cryptokit/p521/keyagreement/privatekey/x963representation)

# x963Representation

**Framework:** Apple CryptoKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An ANSI x9.63 representation of the private key.

## Declaration

```swift
var x963Representation: Data { get }
```

## See Also

### Representing the key

- [rawRepresentation](rawrepresentation.md): A data representation of the private key.
- [derRepresentation](derrepresentation.md): A Distinguished Encoding Rules (DER) encoded representation of the private key.
- [pemRepresentation](pemrepresentation.md): A Privacy-Enhanced Mail (PEM) representation of the private key.
