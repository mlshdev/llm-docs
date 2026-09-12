> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/kemonetimeprivatekey/generate()](https://developer.apple.com/documentation/cryptokit/kemonetimeprivatekey/generate())

# generate()

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Generates a new random private key.

## Declaration

```swift
static func generate() throws -> Self
```

<a id="return-value"></a>

## Return Value

The generated private key.

<a id="discussion"></a>

## Discussion

Give the [publicKey](publickey-swift.property.md) to another person so that they can encapsulate shared secrets that you recover by calling [decapsulate(\_:)](decapsulate%28__%29.md).
