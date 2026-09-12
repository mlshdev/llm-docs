> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexattributedescriptor/offset](https://developer.apple.com/documentation/metal/mtlvertexattributedescriptor/offset)

# offset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The location of an attribute in vertex data, determined by the byte offset from the start of the vertex data.

## Declaration

```swift
var offset: Int { get set }
```

<a id="discussion"></a>

## Discussion

Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.

## See Also

### Organizing the vertex attribute

- [format](format.md): The format of the vertex attribute.
- [bufferIndex](bufferindex.md): The index in the argument table for the associated vertex buffer.
- [MTLVertexFormat](../mtlvertexformat.md): The vertex data format options for render pipelines.

# offset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The location of an attribute in vertex data, determined by the byte offset from the start of the vertex data.

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger offset;
```

<a id="discussion"></a>

## Discussion

Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.

## See Also

### Organizing the vertex attribute

- [format](format.md): The format of the vertex attribute.
- [bufferIndex](bufferindex.md): The index in the argument table for the associated vertex buffer.
- [MTLVertexFormat](../mtlvertexformat.md): The vertex data format options for render pipelines.
