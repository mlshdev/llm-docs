> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkmeshbuffer/zone](https://developer.apple.com/documentation/metalkit/mtkmeshbuffer/zone)

# zone

**Interface language:** Objective-C

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The zone, if any, from which this mesh buffer was created.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<MDLMeshBufferZone> zone;
```

<a id="Discussion"></a>

## Discussion

A single [MTLBuffer](../../metal/mtlbuffer.md) object is allocated for each zone, but each zone can have multiple [MTKMeshBuffer](../mtkmeshbuffer.md) objects, each with its own [offset](offset.md). Though there may be many [MTKMeshBuffer](../mtkmeshbuffer.md) objects for a model, they are all backed with the same contiguous [MTLBuffer](../../metal/mtlbuffer.md) objects.

If a [MTKMeshBufferAllocator](../mtkmeshbufferallocator.md) object is used, Model I/O attempts to load all vertex and index data of a single mesh into a single zone. This allows the GPU to achieve a higher cache hit rate when drawing the mesh.

## See Also

### Originating Objects

- [allocator](allocator.md): The allocator object used to create this mesh buffer.
- [type](type.md): The type of data contained in the originating Model I/O buffer.
