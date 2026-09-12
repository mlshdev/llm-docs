> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hashfunction/hash(bytes:)](https://developer.apple.com/documentation/cryptokit/hashfunction/hash(bytes:))

# hash(bytes:)

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Computes a digest of a span of bytes.

## Declaration

```swift
@export(implementation) static func hash(bytes: RawSpan) -> Self.Digest
```

## Parameters

- `bytes`: The bytes to be hashed.

<a id="return-value"></a>

## Return Value

The computed digest.
