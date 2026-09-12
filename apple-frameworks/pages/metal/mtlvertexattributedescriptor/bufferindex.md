> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexattributedescriptor/bufferindex](https://developer.apple.com/documentation/metal/mtlvertexattributedescriptor/bufferindex)

# bufferIndex (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The index in the argument table for the associated vertex buffer.

## Declaration

```swift
var bufferIndex: Int { get set }
```

## See Also

### Related Documentation

- [setVertexBuffer(\_:offset:index:)](../mtlrendercommandencoder/setvertexbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the vertex shader argument table.

### Organizing the vertex attribute

- [format](format.md): The format of the vertex attribute.
- [offset](offset.md): The location of an attribute in vertex data, determined by the byte offset from the start of the vertex data.
- [MTLVertexFormat](../mtlvertexformat.md): The vertex data format options for render pipelines.

# bufferIndex (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The index in the argument table for the associated vertex buffer.

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger bufferIndex;
```

## See Also

### Related Documentation

- [setVertexBuffers:offsets:withRange:](../mtlrendercommandencoder/setvertexbuffers_offsets_withrange_.md): Assigns multiple buffers to a range of entries in the vertex shader argument table.
- [setVertexBuffer:offset:atIndex:](../mtlrendercommandencoder/setvertexbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the vertex shader argument table.

### Organizing the vertex attribute

- [format](format.md): The format of the vertex attribute.
- [offset](offset.md): The location of an attribute in vertex data, determined by the byte offset from the start of the vertex data.
- [MTLVertexFormat](../mtlvertexformat.md): The vertex data format options for render pipelines.
