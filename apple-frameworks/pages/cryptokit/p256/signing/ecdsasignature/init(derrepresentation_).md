> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p256/signing/ecdsasignature/init(derrepresentation:)](https://developer.apple.com/documentation/cryptokit/p256/signing/ecdsasignature/init(derrepresentation:))

# init(derRepresentation:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a P-256 digital signature from a Distinguished Encoding Rules (DER) encoded representation.

## Declaration

```swift
init<D>(derRepresentation: D) throws where D : DataProtocol
```

## Parameters

- `derRepresentation`: The DER-encoded representation of the signature.

## See Also

### Creating a signature

- [init(rawRepresentation:)](init%28rawrepresentation_%29.md): Creates a P-256 digital signature from a raw representation.
