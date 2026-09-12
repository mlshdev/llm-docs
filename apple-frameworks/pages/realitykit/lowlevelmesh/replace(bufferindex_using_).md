> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/replace(bufferindex:using:)](https://developer.apple.com/documentation/realitykit/lowlevelmesh/replace(bufferindex:using:))

# replace(bufferIndex:using:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Retrieves a Metal vertex buffer you can use to replace the contents of the specified buffer on the GPU using Metal.

## Declaration

```swift
@MainActor func replace(bufferIndex index: Int, using commandBuffer: any MTLCommandBuffer) -> any MTLBuffer
```

## Parameters

- `index`: The index of the buffer to modify. Use a value that is less than [vertexBufferCount](descriptor-swift.struct/vertexbuffercount.md).
- `commandBuffer`: The [MTLCommandBuffer](../../metal/mtlcommandbuffer.md) you intend to use for buffer modifications. RealityKit waits for the command buffer to complete before utilizing the buffer for rendering.

<a id="discussion"></a>

## Discussion

The buffer’s contents are in an uninitialized state.

## See Also

### Accessing mesh data on the GPU with Metal

- [read(bufferIndex:using:)](read%28bufferindex_using_%29.md): Retrieves a Metal vertex buffer at the specified index, for GPU reading.
- [readIndices(using:)](readindices%28using_%29.md): Retrieves the Metal index buffer for GPU reading.
- [replaceIndices(using:)](replaceindices%28using_%29.md): Retrieves a Metal index buffer that you can use to replace the indices of this low-level mesh.
