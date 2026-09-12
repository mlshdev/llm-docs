> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/kemprivatekey/decapsulate(_:)](https://developer.apple.com/documentation/cryptokit/kemprivatekey/decapsulate(_:))

# decapsulate(\_:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Recovers a shared secret from an encapsulated representation.

## Declaration

```swift
func decapsulate(_ encapsulated: Data) throws -> SymmetricKey
```

## Parameters

- `encapsulated`: The encapsulated shared secret that someone created using this key’s [publicKey](publickey-swift.property.md).

<a id="return-value"></a>

## Return Value

The decapsulated shared secret.
