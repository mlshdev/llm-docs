> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/readvertices(at:_:)](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/readvertices(at:_:))

# readVertices(at:\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Reads the current contents of a vertex buffer synchronously on the CPU.

## Declaration

```swift
final func readVertices<R, E>(at index: Int, _ body: (RawSpan) throws(E) -> R) throws(E) -> R where E : Error, R : ~Copyable
```

## Parameters

- `index`: The vertex buffer index to read.
- `body`: A closure that receives a read-only span over the buffer’s bytes.

<a id="discussion"></a>

## Discussion

You pass a closure that receives a read-only span representing the contents of the vertex buffer. This span is valid only for the duration of the closure.

> **Throws**

> Any error thrown by `body`.

## See Also

### Accessing vertex data

- [updateVertices(at:\_:)](updatevertices%28at___%29.md): Updates a vertex buffer in place synchronously on the CPU.
- [replaceVertices(at:\_:)](replacevertices%28at___%29.md): Replaces the entire contents of a vertex buffer synchronously on the CPU.
- [readVertices(at:commandBuffer:)](readvertices%28at_commandbuffer_%29.md): Returns a Metal buffer containing the current contents of the vertex buffer for GPU read operations.
- [replaceVertices(at:commandBuffer:)](replacevertices%28at_commandbuffer_%29.md): Returns a Metal buffer you populate on the GPU with the new contents of the vertex buffer.
