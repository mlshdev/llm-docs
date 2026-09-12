> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/kemonetimeprivatekey/decapsulate(_:)](https://developer.apple.com/documentation/cryptokit/kemonetimeprivatekey/decapsulate(_:))

# decapsulate(\_:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Recovers a shared secret from an encapsulated representation.

## Declaration

```swift
consuming func decapsulate(_ encapsulated: Data) throws -> SymmetricKey
```

## Parameters

- `encapsulated`: The encapsulated shared secret that someone created using this key’s [publicKey](publickey-swift.property.md).

<a id="return-value"></a>

## Return Value

The decapsulated shared secret.
