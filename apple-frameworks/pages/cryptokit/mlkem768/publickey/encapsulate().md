> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/mlkem768/publickey/encapsulate()](https://developer.apple.com/documentation/cryptokit/mlkem768/publickey/encapsulate())

# encapsulate()

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Generates and encapsulates a shared secret.

## Declaration

```swift
func encapsulate() throws -> KEM.EncapsulationResult
```

<a id="return-value"></a>

## Return Value

An encapsulated shared secret, that you decapsulate by calling [decapsulate(\_:)](../privatekey/decapsulate%28__%29.md) on the corresponding private key.
