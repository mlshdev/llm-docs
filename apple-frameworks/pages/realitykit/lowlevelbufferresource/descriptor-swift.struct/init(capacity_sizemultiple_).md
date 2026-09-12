> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelbufferresource/descriptor-swift.struct/init(capacity:sizemultiple:)](https://developer.apple.com/documentation/realitykit/lowlevelbufferresource/descriptor-swift.struct/init(capacity:sizemultiple:))

# init(capacity:sizeMultiple:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a buffer descriptor with the given capacity and size alignment.

## Declaration

```swift
init(capacity: Int, sizeMultiple: Int = 16)
```

## Parameters

- `capacity`: The capacity of the buffer, in bytes.
- `sizeMultiple`: The required alignment of the buffer’s size, in bytes. Defaults to `16`.
