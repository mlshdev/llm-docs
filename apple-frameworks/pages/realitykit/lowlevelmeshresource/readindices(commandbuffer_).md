> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/readindices(commandbuffer:)](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/readindices(commandbuffer:))

# readIndices(commandBuffer:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a Metal buffer containing the current contents of the index buffer for GPU read operations.

## Declaration

```swift
final func readIndices(commandBuffer: (any MTLCommandBuffer)?) -> any MTLBuffer
```

## Parameters

- `commandBuffer`: The command buffer that reads from this buffer, or `nil` to skip synchronization.

<a id="return-value"></a>

## Return Value

A `MTLBuffer` ready for GPU read operations.

<a id="discussion"></a>

## Discussion

The renderer waits for the provided command buffer to complete before discarding the buffer.

## See Also

### Accessing index data

- [readIndices(\_:)](readindices%28__%29.md): Reads the current contents of the index buffer synchronously on the CPU.
- [updateIndices(\_:)](updateindices%28__%29.md): Updates the index buffer in place synchronously on the CPU.
- [replaceIndices(\_:)](replaceindices%28__%29.md): Replaces the entire contents of the index buffer synchronously on the CPU.
- [replaceIndices(commandBuffer:)](replaceindices%28commandbuffer_%29.md): Returns a Metal buffer you populate on the GPU with the new contents of the index buffer.
