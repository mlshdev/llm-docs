> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/read(bufferindex:using:)](https://developer.apple.com/documentation/realitykit/lowlevelmesh/read(bufferindex:using:))

# read(bufferIndex:using:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Retrieves a Metal vertex buffer at the specified index, for GPU reading.

## Declaration

```swift
@MainActor func read(bufferIndex index: Int, using commandBuffer: any MTLCommandBuffer) -> any MTLBuffer
```

## Parameters

- `index`: The index of the buffer to read. Use a value that is less than [vertexBufferCount](descriptor-swift.struct/vertexbuffercount.md).
- `commandBuffer`: The [MTLCommandBuffer](../../metal/mtlcommandbuffer.md) you intend to use for reading. RealityKit waits for the command buffer to complete before discarding the buffer.

## See Also

### Accessing mesh data on the GPU with Metal

- [readIndices(using:)](readindices%28using_%29.md): Retrieves the Metal index buffer for GPU reading.
- [replace(bufferIndex:using:)](replace%28bufferindex_using_%29.md): Retrieves a Metal vertex buffer you can use to replace the contents of the specified buffer on the GPU using Metal.
- [replaceIndices(using:)](replaceindices%28using_%29.md): Retrieves a Metal index buffer that you can use to replace the indices of this low-level mesh.
