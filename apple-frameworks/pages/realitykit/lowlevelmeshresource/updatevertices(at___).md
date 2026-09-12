> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/updatevertices(at:_:)](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/updatevertices(at:_:))

# updateVertices(at:\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Updates a vertex buffer in place synchronously on the CPU.

## Declaration

```swift
final func updateVertices<R, E>(at index: Int, _ body: @_lifetime(0: copy 0) (inout MutableRawSpan) throws(E) -> R) throws(E) -> R where E : Error, R : ~Copyable
```

## Parameters

- `index`: The vertex buffer index to update.
- `body`: A closure that receives a mutable span over the buffer’s bytes for in-place modification.

<a id="discussion"></a>

## Discussion

You pass a closure that receives a mutable span representing the contents of the vertex buffer, which the closure may modify. This span is valid only for the duration of the closure.

> **Throws**

> Any error thrown by `body`.

## See Also

### Accessing vertex data

- [readVertices(at:\_:)](readvertices%28at___%29.md): Reads the current contents of a vertex buffer synchronously on the CPU.
- [replaceVertices(at:\_:)](replacevertices%28at___%29.md): Replaces the entire contents of a vertex buffer synchronously on the CPU.
- [readVertices(at:commandBuffer:)](readvertices%28at_commandbuffer_%29.md): Returns a Metal buffer containing the current contents of the vertex buffer for GPU read operations.
- [replaceVertices(at:commandBuffer:)](replacevertices%28at_commandbuffer_%29.md): Returns a Metal buffer you populate on the GPU with the new contents of the vertex buffer.
