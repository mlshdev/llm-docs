> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/kemprivatekey/generate()

# generate()

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

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
