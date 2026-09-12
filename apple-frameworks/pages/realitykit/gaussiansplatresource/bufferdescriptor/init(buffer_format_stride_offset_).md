> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/gaussiansplatresource/bufferdescriptor/init(buffer:format:stride:offset:)](https://developer.apple.com/documentation/realitykit/gaussiansplatresource/bufferdescriptor/init(buffer:format:stride:offset:))

# init(buffer:format:stride:offset:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a descriptor that locates a property within a buffer.

## Declaration

```swift
init(buffer: LowLevelBuffer, format: MTLAttributeFormat, stride: Int, offset: Int)
```

## Parameters

- `buffer`: The buffer that stores the property’s values.
- `format`: The element format of each value in the buffer.
- `stride`: The distance, in bytes, between consecutive splats’ values.
- `offset`: The byte offset of the first splat’s value within the buffer.
