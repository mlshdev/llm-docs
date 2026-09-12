> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/replaceindices(commandbuffer:)](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/replaceindices(commandbuffer:))

# replaceIndices(commandBuffer:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a Metal buffer you populate on the GPU with the new contents of the index buffer.

## Declaration

```swift
final func replaceIndices(commandBuffer: (any MTLCommandBuffer)?) -> any MTLBuffer
```

## Parameters

- `commandBuffer`: The command buffer that writes to this buffer, or `nil` to skip synchronization.

<a id="return-value"></a>

## Return Value

A `MTLBuffer` ready for GPU write operations.

<a id="discussion"></a>

## Discussion

Upon return the buffer’s contents are undefined; the caller is responsible for populating it with valid data. The renderer waits for the provided command buffer to complete before using the buffer for rendering.

## See Also

### Accessing index data

- [readIndices(\_:)](readindices%28__%29.md): Reads the current contents of the index buffer synchronously on the CPU.
- [updateIndices(\_:)](updateindices%28__%29.md): Updates the index buffer in place synchronously on the CPU.
- [replaceIndices(\_:)](replaceindices%28__%29.md): Replaces the entire contents of the index buffer synchronously on the CPU.
- [readIndices(commandBuffer:)](readindices%28commandbuffer_%29.md): Returns a Metal buffer containing the current contents of the index buffer for GPU read operations.
