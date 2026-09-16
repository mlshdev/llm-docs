> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unkeyedencodingcontainer/superencoder()

# superEncoder()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes a nested container and returns an `Encoder` instance for encoding `super` into that container.

## Declaration

```swift
mutating func superEncoder() -> any Encoder
```

<a id="return-value"></a>

## Return Value

A new encoder to pass to `super.encode(to:)`.
