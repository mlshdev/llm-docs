> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/aes/keywrap

# AES.KeyWrap

**Framework:** Apple CryptoKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An implementation of AES Key Wrapping in accordance with the IETF RFC 3394 specification.

## Declaration

```swift
enum KeyWrap
```

## Topics

### Wrapping an AES key

- [wrap(\_:using:)](keywrap/wrap%28__using_%29.md): Wraps a key using the AES wrap algorithm.

### Unwrapping an AES key

- [unwrap(\_:using:)](keywrap/unwrap%28__using_%29.md): Unwraps a key using the AES wrap algorithm.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
