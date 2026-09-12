> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/secureenclave/mldsa87/privatekey/signature(for:context:)](https://developer.apple.com/documentation/cryptokit/secureenclave/mldsa87/privatekey/signature(for:context:))

# signature(for:context:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Generates a MLDSA87 signature, with context

## Declaration

```swift
func signature<D, C>(for data: D, context: C) throws -> Data where D : DataProtocol, C : DataProtocol
```

## Parameters

- `data`: The data to sign
- `context`: Context for the signature

<a id="return-value"></a>

## Return Value

The MLDSA87 signature

<a id="discussion"></a>

## Discussion

> **Throws**

> If there is a failure producing the signature
