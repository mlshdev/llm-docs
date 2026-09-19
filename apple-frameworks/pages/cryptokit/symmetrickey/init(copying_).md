> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/symmetrickey/init(copying:)

# init(copying:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a key from the given data.

## Declaration

```swift
@export(implementation) init(copying bytes: RawSpan)
```

## Parameters

- `bytes`: The span of bytes from which to create the key.
