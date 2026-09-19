> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelbufferresource/descriptor-swift.struct/init(capacity:sizemultiple:)

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
