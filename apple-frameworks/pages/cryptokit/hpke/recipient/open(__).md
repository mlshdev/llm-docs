> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpke/recipient/open(_:)](https://developer.apple.com/documentation/cryptokit/hpke/recipient/open(_:))

# open(\_:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Decrypts a message, if the ciphertext is valid.

## Declaration

```swift
mutating func open<C>(_ ciphertext: C) throws -> Data where C : DataProtocol
```

## Parameters

- `ciphertext`: The ciphertext message to decrypt.

<a id="return-value"></a>

## Return Value

The resulting cleartext message if the message is authentic.

<a id="discussion"></a>

## Discussion

You can call this method multiple times to decrypt a series of messages. When using this method, the recipient of the ciphertext messages needs to decrypt them in the same order that the sender encrypts them.

> **Note**

> The system throws errors from [HPKE.Errors](../errors.md) when it encounters them.
