> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexattributedescriptor/format](https://developer.apple.com/documentation/metal/mtlvertexattributedescriptor/format)

# format (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The format of the vertex attribute.

## Declaration

```swift
var format: MTLVertexFormat { get set }
```

<a id="discussion"></a>

## Discussion

This property specifies the data type of the vertex attribute that corresponds to an input argument of a shading language function. The [MTLVertexFormat](../mtlvertexformat.md) may be converted to the data type in the shading function argument with the following specified limitations. Invalid type conversion causes a compilation error.

Conversion of vectors of different lengths is valid. The length of vectors can be reduced. For example,  [MTLVertexFormat.int4](../mtlvertexformat/int4.md) data can be reduced to a single `int` shader argument is valid, and the last three values of the vector are discarded. Vectors can also be expanded; for example, expanding [MTLVertexFormat.int](../mtlvertexformat/int.md) to an `int4` vector shader argument is valid. When expanding, the extra components are filled with the corresponding components of (0,0,0,1).

The sign of an integer [MTLVertexFormat](../mtlvertexformat.md) can not be cast to a shader argument with an integer type of a different sign. For example, casting the signed format [MTLVertexFormat.int](../mtlvertexformat/int.md) to an `uint` shader argument is invalid. Casting [MTLVertexFormat.uint](../mtlvertexformat/uint.md) to an `int` argument is also invalid.

Integer truncation is not supported. For example, casting the [MTLVertexFormat.int](../mtlvertexformat/int.md) to a `short` is invalid. However, casting [MTLVertexFormat.short2](../mtlvertexformat/short2.md) to a vector of `int` values is valid.

Casting any [MTLVertexFormat](../mtlvertexformat.md) to a `float` or `half` is valid. Casting normalized [MTLVertexFormat](../mtlvertexformat.md) types (such as [MTLVertexFormat.short2Normalized](../mtlvertexformat/short2normalized.md)) are only valid to `float` or `half`.

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

### Organizing the vertex attribute

- [offset](offset.md): The location of an attribute in vertex data, determined by the byte offset from the start of the vertex data.
- [bufferIndex](bufferindex.md): The index in the argument table for the associated vertex buffer.
- [MTLVertexFormat](../mtlvertexformat.md): The vertex data format options for render pipelines.

# format (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The format of the vertex attribute.

## Declaration

```objectivec
@property (nonatomic, assign) MTLVertexFormat format;
```

<a id="discussion"></a>

## Discussion

This property specifies the data type of the vertex attribute that corresponds to an input argument of a shading language function. The [MTLVertexFormat](../mtlvertexformat.md) may be converted to the data type in the shading function argument with the following specified limitations. Invalid type conversion causes a compilation error.

Conversion of vectors of different lengths is valid. The length of vectors can be reduced. For example,  [MTLVertexFormatInt4](../mtlvertexformat/int4.md) data can be reduced to a single `int` shader argument is valid, and the last three values of the vector are discarded. Vectors can also be expanded; for example, expanding [MTLVertexFormatInt](../mtlvertexformat/int.md) to an `int4` vector shader argument is valid. When expanding, the extra components are filled with the corresponding components of (0,0,0,1).

The sign of an integer [MTLVertexFormat](../mtlvertexformat.md) can not be cast to a shader argument with an integer type of a different sign. For example, casting the signed format [MTLVertexFormatInt](../mtlvertexformat/int.md) to an `uint` shader argument is invalid. Casting [MTLVertexFormatUInt](../mtlvertexformat/uint.md) to an `int` argument is also invalid.

Integer truncation is not supported. For example, casting the [MTLVertexFormatInt](../mtlvertexformat/int.md) to a `short` is invalid. However, casting [MTLVertexFormatShort2](../mtlvertexformat/short2.md) to a vector of `int` values is valid.

Casting any [MTLVertexFormat](../mtlvertexformat.md) to a `float` or `half` is valid. Casting normalized [MTLVertexFormat](../mtlvertexformat.md) types (such as [MTLVertexFormatShort2Normalized](../mtlvertexformat/short2normalized.md)) are only valid to `float` or `half`.

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

### Organizing the vertex attribute

- [offset](offset.md): The location of an attribute in vertex data, determined by the byte offset from the start of the vertex data.
- [bufferIndex](bufferindex.md): The index in the argument table for the associated vertex buffer.
- [MTLVertexFormat](../mtlvertexformat.md): The vertex data format options for render pipelines.
