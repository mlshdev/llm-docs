> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/mlkem1024/privatekey/decapsulate(_:)](https://developer.apple.com/documentation/cryptokit/mlkem1024/privatekey/decapsulate(_:))

# decapsulate(\_:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Decapsulate a shared secret.

## Declaration

```swift
func decapsulate<D>(_ encapsulated: D) throws -> SymmetricKey where D : DataProtocol
```

## Parameters

- `encapsulated`: An encapsulated shared secret, that you get by calling [encapsulate()](../publickey/encapsulate%28%29.md) on the corresponding public key.

<a id="return-value"></a>

## Return Value

The shared secret.
