> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/mldsa65/publickey/rawrepresentation

# rawRepresentation

**Framework:** Apple CryptoKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A serialized representation of the public key.

## Declaration

```swift
var rawRepresentation: Data { get }
```

<a id="discussion"></a>

## Discussion

This property provides a representation of the public key in the FIPS 204 standard serialization format.
