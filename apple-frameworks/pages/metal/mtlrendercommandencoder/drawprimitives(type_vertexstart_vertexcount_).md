> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/drawprimitives(type:vertexstart:vertexcount:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/drawprimitives(type:vertexstart:vertexcount:))

# drawPrimitives(type:vertexStart:vertexCount:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes a draw command that renders an instance of a geometric primitive.

## Declaration

```swift
func drawPrimitives(type primitiveType: MTLPrimitiveType, vertexStart: Int, vertexCount: Int)
```

## Parameters

- `primitiveType`: An [MTLPrimitiveType](../mtlprimitivetype.md) instance that represents how the command interprets vertex argument data.

  See the [setVertexBuffer(\_:offset:index:)](setvertexbuffer%28__offset_index_%29.md) method and its siblings for more information about setting an entry in the vertex shader argument table for buffers.
- `vertexStart`: The lowest value the command passes to your vertex shader’s parameter with the `vertex_id` attribute. The command assigns each vertex a unique `vertex_id` value within its drawing instance that increases from `vertexStart` through `(vertexStart + vertexCount - 1)`. Your shader can use that value to identify a vertex in each drawing instance.

  For more information about the `vertex_id` argument attribute for vertex shaders, see the [Metal Shading Language Specification (PDF)](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf).
- `vertexCount`: An integer that represents the number of vertices of `primitiveType` the command draws.

<a id="discussion"></a>

## Discussion

The method records the encoder’s current rendering state and resources the command needs as it runs. You can safely change the encoder’s render pipeline state to encode other commands after calling this method. Subsequent changes to the state don’t affect the commands already in the encoder’s [MTLCommandBuffer](../mtlcommandbuffer.md).

## See Also

### Drawing with vertices

- [drawPrimitives(type:vertexStart:vertexCount:instanceCount:)](drawprimitives%28type_vertexstart_vertexcount_instancecount_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive.
- [drawPrimitives(type:vertexStart:vertexCount:instanceCount:baseInstance:)](drawprimitives%28type_vertexstart_vertexcount_instancecount_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive that starts with a custom instance identification number.
- [drawPrimitives(type:indirectBuffer:indirectBufferOffset:)](drawprimitives%28type_indirectbuffer_indirectbufferoffset_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indirect arguments.

# drawPrimitives:vertexStart:vertexCount: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes a draw command that renders an instance of a geometric primitive.

## Declaration

```objectivec
- (void) drawPrimitives:(MTLPrimitiveType) primitiveType vertexStart:(NSUInteger) vertexStart vertexCount:(NSUInteger) vertexCount;
```

## Parameters

- `primitiveType`: An [MTLPrimitiveType](../mtlprimitivetype.md) instance that represents how the command interprets vertex argument data.

  See the [setVertexBuffer:offset:atIndex:](setvertexbuffer%28__offset_index_%29.md) method and its siblings for more information about setting an entry in the vertex shader argument table for buffers.
- `vertexStart`: The lowest value the command passes to your vertex shader’s parameter with the `vertex_id` attribute. The command assigns each vertex a unique `vertex_id` value within its drawing instance that increases from `vertexStart` through `(vertexStart + vertexCount - 1)`. Your shader can use that value to identify a vertex in each drawing instance.

  For more information about the `vertex_id` argument attribute for vertex shaders, see the [Metal Shading Language Specification (PDF)](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf).
- `vertexCount`: An integer that represents the number of vertices of `primitiveType` the command draws.

<a id="discussion"></a>

## Discussion

The method records the encoder’s current rendering state and resources the command needs as it runs. You can safely change the encoder’s render pipeline state to encode other commands after calling this method. Subsequent changes to the state don’t affect the commands already in the encoder’s [MTLCommandBuffer](../mtlcommandbuffer.md).

## See Also

### Drawing with vertices

- [drawPrimitives:vertexStart:vertexCount:instanceCount:](drawprimitives%28type_vertexstart_vertexcount_instancecount_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive.
- [drawPrimitives:vertexStart:vertexCount:instanceCount:baseInstance:](drawprimitives%28type_vertexstart_vertexcount_instancecount_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive that starts with a custom instance identification number.
- [drawPrimitives:indirectBuffer:indirectBufferOffset:](drawprimitives%28type_indirectbuffer_indirectbufferoffset_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indirect arguments.
