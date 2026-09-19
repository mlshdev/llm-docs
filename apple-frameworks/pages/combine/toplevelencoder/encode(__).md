> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/toplevelencoder/encode(_:)

# encode(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Encodes an instance of the indicated type.

## Declaration

```swift
func encode<T>(_ value: T) throws -> Self.Output where T : Encodable
```

## Parameters

- `value`: The instance to encode.
