> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setmeshbytes(_:length:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setmeshbytes(_:length:index:))

# setMeshBytes(\_:length:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a buffer from bytes and assigns it to an entry in the mesh shader argument table.

## Declaration

```swift
func setMeshBytes(_ bytes: UnsafeRawPointer, length: Int, index: Int)
```

## Parameters

- `bytes`: A pointer to argument data the method copies to an [MTLBuffer](../mtlbuffer.md) and assigns to an entry in the mesh shader argument table for buffers.
- `length`: The number of bytes the method copies from the `bytes` pointer.
- `index`: An integer that represents the entry in the mesh shader argument table for buffers that stores a record of the [MTLBuffer](../mtlbuffer.md) the method creates from `bytes`.

<a id="discussion"></a>

## Discussion

The method is equivalent to creating an [MTLBuffer](../mtlbuffer.md) instance that contains the same data as `bytes` and calling the [setMeshBuffer(\_:offset:index:)](setmeshbuffer%28__offset_index_%29.md) method. However, this method avoids the overhead of creating a buffer to store your data; instead, Metal manages the data.

> **Important**

>  Only call this method for single-use data that’s smaller than 4 KB.

For data that’s more than 4 KB, create an [MTLBuffer](../mtlbuffer.md) instance and pass it to [setMeshBufferOffset(\_:index:)](setmeshbufferoffset%28__index_%29.md).

## See Also

### Assigning buffers for mesh shaders

- [setMeshBuffer(\_:offset:index:)](setmeshbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the mesh shader argument table.
- [setMeshBuffers(\_:offsets:range:)](setmeshbuffers%28__offsets_range_%29.md): Assigns multiple buffers to a range of entries in the mesh shader argument table.
- [setMeshBufferOffset(\_:index:)](setmeshbufferoffset%28__index_%29.md): Updates an entry in the mesh shader argument table with a new location within the entry’s current buffer.

# setMeshBytes:length:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a buffer from bytes and assigns it to an entry in the mesh shader argument table.

## Declaration

```objectivec
- (void) setMeshBytes:(const void *) bytes length:(NSUInteger) length atIndex:(NSUInteger) index;
```

## Parameters

- `bytes`: A pointer to argument data the method copies to an [MTLBuffer](../mtlbuffer.md) and assigns to an entry in the mesh shader argument table for buffers.
- `length`: The number of bytes the method copies from the `bytes` pointer.
- `index`: An integer that represents the entry in the mesh shader argument table for buffers that stores a record of the [MTLBuffer](../mtlbuffer.md) the method creates from `bytes`.

<a id="discussion"></a>

## Discussion

The method is equivalent to creating an [MTLBuffer](../mtlbuffer.md) instance that contains the same data as `bytes` and calling the [setMeshBuffer:offset:atIndex:](setmeshbuffer%28__offset_index_%29.md) method. However, this method avoids the overhead of creating a buffer to store your data; instead, Metal manages the data.

> **Important**

>  Only call this method for single-use data that’s smaller than 4 KB.

For data that’s more than 4 KB, create an [MTLBuffer](../mtlbuffer.md) instance and pass it to [setMeshBufferOffset:atIndex:](setmeshbufferoffset%28__index_%29.md).

## See Also

### Assigning buffers for mesh shaders

- [setMeshBuffer:offset:atIndex:](setmeshbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the mesh shader argument table.
- [setMeshBuffers:offsets:withRange:](setmeshbuffers_offsets_withrange_.md): Assigns multiple buffers to a range of entries in the mesh shader argument table.
- [setMeshBufferOffset:atIndex:](setmeshbufferoffset%28__index_%29.md): Updates an entry in the mesh shader argument table with a new location within the entry’s current buffer.
