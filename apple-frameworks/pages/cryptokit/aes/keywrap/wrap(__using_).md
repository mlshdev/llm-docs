> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/aes/keywrap/wrap(_:using:)](https://developer.apple.com/documentation/cryptokit/aes/keywrap/wrap(_:using:))

# wrap(\_:using:)

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Wraps a key using the AES wrap algorithm.

## Declaration

```swift
static func wrap(_ keyToWrap: SymmetricKey, using kek: SymmetricKey) throws -> Data
```

## Parameters

- `keyToWrap`: The key to wrap.
- `kek`: The key encryption key.

<a id="return-value"></a>

## Return Value

The wrapped key.

<a id="discussion"></a>

## Discussion

Wrap is an implementation of the AES key wrap algorithm as specified in IETF RFC 3394.
