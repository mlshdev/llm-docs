> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setvertexbytes(_:length:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setvertexbytes(_:length:index:))

# setVertexBytes(\_:length:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a buffer from bytes and assigns it to an entry in the vertex shader argument table.

## Declaration

```swift
func setVertexBytes(_ bytes: UnsafeRawPointer, length: Int, index: Int)
```

## Parameters

- `bytes`: A pointer to argument data the method copies to an [MTLBuffer](../mtlbuffer.md) and assigns to an entry in the vertex shader argument table for buffers.
- `length`: The number of bytes the method copies from the `bytes` pointer.
- `index`: An integer that represents the entry in the vertex shader argument table for buffers that stores a record of the [MTLBuffer](../mtlbuffer.md) the method creates from `bytes`.

<a id="discussion"></a>

## Discussion

The method is equivalent to creating an [MTLBuffer](../mtlbuffer.md) instance that contains the same data as `bytes` and calling the [setVertexBuffer(\_:offset:index:)](setvertexbuffer%28__offset_index_%29.md) method. However, this method avoids the overhead of creating a buffer to store your data; instead, Metal manages the data.

> **Important**

>  Only call this method for single-use data that’s smaller than 4 KB.

For data that’s more than 4 KB, create an [MTLBuffer](../mtlbuffer.md) instance and pass it to [setVertexBuffer(\_:offset:index:)](setvertexbuffer%28__offset_index_%29.md).

By default, the buffer at each index is `nil`.

## See Also

### Assigning buffers

- [setVertexBuffer(\_:offset:index:)](setvertexbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the vertex shader argument table.
- [setVertexBuffer(\_:offset:attributeStride:index:)](setvertexbuffer%28__offset_attributestride_index_%29.md)
- [setVertexBuffers(\_:offsets:range:)](setvertexbuffers%28__offsets_range_%29.md): Assigns multiple buffers to a range of entries in the vertex shader argument table.
- [setVertexBuffers(\_:offsets:attributeStrides:range:)](setvertexbuffers%28__offsets_attributestrides_range_%29.md)
- [setVertexBytes(\_:length:attributeStride:index:)](setvertexbytes%28__length_attributestride_index_%29.md)
- [setVertexBufferOffset(\_:index:)](setvertexbufferoffset%28__index_%29.md): Updates an entry in the vertex shader argument table with a new location within the entry’s current buffer.
- [setVertexBufferOffset(offset:attributeStride:index:)](setvertexbufferoffset%28offset_attributestride_index_%29.md)

# setVertexBytes:length:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a buffer from bytes and assigns it to an entry in the vertex shader argument table.

## Declaration

```objectivec
- (void) setVertexBytes:(const void *) bytes length:(NSUInteger) length atIndex:(NSUInteger) index;
```

## Parameters

- `bytes`: A pointer to argument data the method copies to an [MTLBuffer](../mtlbuffer.md) and assigns to an entry in the vertex shader argument table for buffers.
- `length`: The number of bytes the method copies from the `bytes` pointer.
- `index`: An integer that represents the entry in the vertex shader argument table for buffers that stores a record of the [MTLBuffer](../mtlbuffer.md) the method creates from `bytes`.

<a id="discussion"></a>

## Discussion

The method is equivalent to creating an [MTLBuffer](../mtlbuffer.md) instance that contains the same data as `bytes` and calling the [setVertexBuffer:offset:atIndex:](setvertexbuffer%28__offset_index_%29.md) method. However, this method avoids the overhead of creating a buffer to store your data; instead, Metal manages the data.

> **Important**

>  Only call this method for single-use data that’s smaller than 4 KB.

For data that’s more than 4 KB, create an [MTLBuffer](../mtlbuffer.md) instance and pass it to [setVertexBuffer:offset:atIndex:](setvertexbuffer%28__offset_index_%29.md).

By default, the buffer at each index is `nil`.

## See Also

### Assigning buffers

- [setVertexBuffer:offset:atIndex:](setvertexbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the vertex shader argument table.
- [setVertexBuffer:offset:attributeStride:atIndex:](setvertexbuffer%28__offset_attributestride_index_%29.md)
- [setVertexBuffers:offsets:withRange:](setvertexbuffers_offsets_withrange_.md): Assigns multiple buffers to a range of entries in the vertex shader argument table.
- [setVertexBuffers:offsets:attributeStrides:withRange:](setvertexbuffers_offsets_attributestrides_withrange_.md)
- [setVertexBytes:length:attributeStride:atIndex:](setvertexbytes%28__length_attributestride_index_%29.md)
- [setVertexBufferOffset:atIndex:](setvertexbufferoffset%28__index_%29.md): Updates an entry in the vertex shader argument table with a new location within the entry’s current buffer.
- [setVertexBufferOffset:attributeStride:atIndex:](setvertexbufferoffset%28offset_attributestride_index_%29.md)
