> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/readvertices(at:commandbuffer:)](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/readvertices(at:commandbuffer:))

# readVertices(at:commandBuffer:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a Metal buffer containing the current contents of the vertex buffer for GPU read operations.

## Declaration

```swift
final func readVertices(at index: Int, commandBuffer: (any MTLCommandBuffer)?) -> any MTLBuffer
```

## Parameters

- `index`: The vertex buffer index to read.
- `commandBuffer`: The command buffer that reads from this buffer, or `nil` to skip synchronization.

<a id="return-value"></a>

## Return Value

A `MTLBuffer` ready for GPU read operations.

<a id="discussion"></a>

## Discussion

The renderer waits for the provided command buffer to complete before discarding the buffer.

## See Also

### Accessing vertex data

- [readVertices(at:\_:)](readvertices%28at___%29.md): Reads the current contents of a vertex buffer synchronously on the CPU.
- [updateVertices(at:\_:)](updatevertices%28at___%29.md): Updates a vertex buffer in place synchronously on the CPU.
- [replaceVertices(at:\_:)](replacevertices%28at___%29.md): Replaces the entire contents of a vertex buffer synchronously on the CPU.
- [replaceVertices(at:commandBuffer:)](replacevertices%28at_commandbuffer_%29.md): Returns a Metal buffer you populate on the GPU with the new contents of the vertex buffer.
