> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelbufferslice/init(buffer:offset:size:)](https://developer.apple.com/documentation/realitykit/lowlevelbufferslice/init(buffer:offset:size:))

# init(buffer:offset:size:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a slice referencing a sub-range of the given buffer.

## Declaration

```swift
init(buffer: LowLevelBufferResource, offset: Int, size: Int) throws(LowLevelRenderContextError)
```

## Parameters

- `buffer`: The buffer this slice references.
- `offset`: The byte offset into `buffer` at which this slice begins.
- `size`: The size of this slice, in bytes.

<a id="discussion"></a>

## Discussion

> **Throws**

> [LowLevelRenderContextError](../lowlevelrendercontexterror.md) if `offset` or `size` fall outside the buffer’s allocated capacity.
