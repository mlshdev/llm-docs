> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/kempublickey/encapsulate()](https://developer.apple.com/documentation/cryptokit/kempublickey/encapsulate())

# encapsulate()

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Generates and encapsulates a shared secret.

## Declaration

```swift
func encapsulate() throws -> KEM.EncapsulationResult
```

<a id="return-value"></a>

## Return Value

The shared secret, and its encapsulated version.

<a id="discussion"></a>

## Discussion

Share the encapsulated secret with the person who has the [KEMPrivateKey](../kemprivatekey.md). They use [decapsulate(\_:)](../kemprivatekey/decapsulate%28__%29.md) to recover the shared secret.
