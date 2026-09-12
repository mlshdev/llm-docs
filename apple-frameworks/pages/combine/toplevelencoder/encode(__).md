> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/toplevelencoder/encode(_:)](https://developer.apple.com/documentation/combine/toplevelencoder/encode(_:))

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
