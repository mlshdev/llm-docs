> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpke/sender/seal(_:authenticating:)](https://developer.apple.com/documentation/cryptokit/hpke/sender/seal(_:authenticating:))

# seal(\_:authenticating:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Encrypts the given cleartext message and attaches additional authenticated data.

## Declaration

```swift
mutating func seal<M, AD>(_ msg: M, authenticating aad: AD) throws -> Data where M : DataProtocol, AD : DataProtocol
```

## Parameters

- `msg`: The cleartext message to encrypt.
- `aad`: Additional data that the `Sender` authenticates and adds to the message in cleartext.

<a id="return-value"></a>

## Return Value

The ciphertext for the recipient to decrypt.

<a id="discussion"></a>

## Discussion

You can call this method multiple times to encrypt a series of messages. When using this method, you need to supply ciphertext messages to the decryption code on the receiving side in the same order as you encrypt them.

> **Note**

> The system throws errors from [HPKE.Errors](../errors.md) when it encounters them.
