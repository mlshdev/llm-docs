> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/updateindices(_:)](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/updateindices(_:))

# updateIndices(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Updates the index buffer in place synchronously on the CPU.

## Declaration

```swift
final func updateIndices<R, E>(_ body: @_lifetime(0: copy 0) (inout MutableRawSpan) throws(E) -> R) throws(E) -> R where E : Error, R : ~Copyable
```

## Parameters

- `body`: A closure that receives a mutable span over the index buffer’s bytes for in-place modification.

<a id="discussion"></a>

## Discussion

You pass a closure that receives a mutable span representing the contents of the index buffer, which the closure may modify. This span is valid only for the duration of the closure.

> **Throws**

> Any error thrown by `body`.

## See Also

### Accessing index data

- [readIndices(\_:)](readindices%28__%29.md): Reads the current contents of the index buffer synchronously on the CPU.
- [replaceIndices(\_:)](replaceindices%28__%29.md): Replaces the entire contents of the index buffer synchronously on the CPU.
- [readIndices(commandBuffer:)](readindices%28commandbuffer_%29.md): Returns a Metal buffer containing the current contents of the index buffer for GPU read operations.
- [replaceIndices(commandBuffer:)](replaceindices%28commandbuffer_%29.md): Returns a Metal buffer you populate on the GPU with the new contents of the index buffer.
