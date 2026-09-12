> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/curve25519/keyagreement/privatekey/init(rawrepresentation:)](https://developer.apple.com/documentation/cryptokit/curve25519/keyagreement/privatekey/init(rawrepresentation:))

# init(rawRepresentation:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a Curve25519 private key for key agreement from a collection of bytes.

## Declaration

```swift
init<D>(rawRepresentation: D) throws where D : ContiguousBytes
```

## Parameters

- `rawRepresentation`: A raw representation of the key as a collection of contiguous bytes.

## See Also

### Creating a private key

- [init()](init%28%29.md): Creates a random Curve25519 private key for key agreement.
