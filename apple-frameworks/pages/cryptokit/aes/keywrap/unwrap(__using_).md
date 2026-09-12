> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/aes/keywrap/unwrap(_:using:)](https://developer.apple.com/documentation/cryptokit/aes/keywrap/unwrap(_:using:))

# unwrap(\_:using:)

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Unwraps a key using the AES wrap algorithm.

## Declaration

```swift
static func unwrap<WrappedKey>(_ wrappedKey: WrappedKey, using kek: SymmetricKey) throws -> SymmetricKey where WrappedKey : DataProtocol
```

## Parameters

- `wrappedKey`: The key to unwrap.
- `kek`: The key encryption key.

<a id="return-value"></a>

## Return Value

The unwrapped key.

<a id="discussion"></a>

## Discussion

Wrap is an implementation of the AES key wrap algorithm as specified in IETF RFC 3394. The method throws an error is the key was incorrectly wrapped.
