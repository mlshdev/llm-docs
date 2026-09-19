> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/mldsa65/publickey/init(rawrepresentation:)

# init(rawRepresentation:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Parses a public key from a serialized representation.

## Declaration

```swift
init<D>(rawRepresentation: D) throws where D : DataProtocol
```

## Parameters

- `rawRepresentation`: The public key, in the FIPS 204 standard serialization format.

<a id="return-value"></a>

## Return Value

The deserialized public key.
