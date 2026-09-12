> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/replacevertices(at:commandbuffer:)](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/replacevertices(at:commandbuffer:))

# replaceVertices(at:commandBuffer:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a Metal buffer you populate on the GPU with the new contents of the vertex buffer.

## Declaration

```swift
final func replaceVertices(at index: Int, commandBuffer: (any MTLCommandBuffer)?) -> any MTLBuffer
```

## Parameters

- `index`: The vertex buffer index to replace.
- `commandBuffer`: The command buffer that writes to this buffer, or `nil` to skip synchronization.

<a id="return-value"></a>

## Return Value

A `MTLBuffer` ready for GPU write operations.

<a id="discussion"></a>

## Discussion

Upon return the buffer’s contents are undefined; the caller is responsible for populating it with valid data. The renderer waits for the provided command buffer to complete before using the buffer for rendering.

## See Also

### Accessing vertex data

- [readVertices(at:\_:)](readvertices%28at___%29.md): Reads the current contents of a vertex buffer synchronously on the CPU.
- [updateVertices(at:\_:)](updatevertices%28at___%29.md): Updates a vertex buffer in place synchronously on the CPU.
- [replaceVertices(at:\_:)](replacevertices%28at___%29.md): Replaces the entire contents of a vertex buffer synchronously on the CPU.
- [readVertices(at:commandBuffer:)](readvertices%28at_commandbuffer_%29.md): Returns a Metal buffer containing the current contents of the vertex buffer for GPU read operations.
