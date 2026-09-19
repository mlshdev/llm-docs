> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/curve25519/signing/publickey/init(rawrepresentation:)

# init(rawRepresentation:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a Curve25519 public key from a data representation.

## Declaration

```swift
init<D>(rawRepresentation: D) throws where D : ContiguousBytes
```

## Parameters

- `rawRepresentation`: A representation of the key as contiguous bytes from which to create the key.
