> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/drawprimitives(type:indirectbuffer:indirectbufferoffset:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/drawprimitives(type:indirectbuffer:indirectbufferoffset:))

# drawPrimitives(type:indirectBuffer:indirectBufferOffset:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Encodes a draw command that renders multiple instances of a geometric primitive with indirect arguments.

## Declaration

```swift
func drawPrimitives(type primitiveType: MTLPrimitiveType, indirectBuffer: any MTLBuffer, indirectBufferOffset: Int)
```

## Parameters

- `primitiveType`: An [MTLPrimitiveType](../mtlprimitivetype.md) instance that represents how the command interprets vertex argument data.

  See the [setVertexBuffer(\_:offset:index:)](setvertexbuffer%28__offset_index_%29.md) method and its siblings for more information about setting an entry in the vertex shader argument table for buffers.
- `indirectBuffer`: An [MTLBuffer](../mtlbuffer.md) instance with data that matches the layout of the [MTLDrawPrimitivesIndirectArguments](../mtldrawprimitivesindirectarguments.md) structure.
- `indirectBufferOffset`: An integer that represents the location, in bytes, from the start of `indirectBuffer` where the indirect arguments structure begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.

<a id="discussion"></a>

## Discussion

Indirect drawing methods may help your app avoid expensive latency costs. This is because the command reads arguments from an [MTLBuffer](../mtlbuffer.md) instance instead of using the CPU to pass parameters to the command.

The method records the encoder’s current rendering state and resources the command needs as it runs. You can safely change the encoder’s render pipeline state to encode other commands after calling this method. Subsequent changes to the state don’t affect the commands already in the encoder’s [MTLCommandBuffer](../mtlcommandbuffer.md).

## See Also

### Drawing with vertices

- [drawPrimitives(type:vertexStart:vertexCount:)](drawprimitives%28type_vertexstart_vertexcount_%29.md): Encodes a draw command that renders an instance of a geometric primitive.
- [drawPrimitives(type:vertexStart:vertexCount:instanceCount:)](drawprimitives%28type_vertexstart_vertexcount_instancecount_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive.
- [drawPrimitives(type:vertexStart:vertexCount:instanceCount:baseInstance:)](drawprimitives%28type_vertexstart_vertexcount_instancecount_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive that starts with a custom instance identification number.

# drawPrimitives:indirectBuffer:indirectBufferOffset: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Encodes a draw command that renders multiple instances of a geometric primitive with indirect arguments.

## Declaration

```objectivec
- (void) drawPrimitives:(MTLPrimitiveType) primitiveType indirectBuffer:(id<MTLBuffer>) indirectBuffer indirectBufferOffset:(NSUInteger) indirectBufferOffset;
```

## Parameters

- `primitiveType`: An [MTLPrimitiveType](../mtlprimitivetype.md) instance that represents how the command interprets vertex argument data.

  See the [setVertexBuffer:offset:atIndex:](setvertexbuffer%28__offset_index_%29.md) method and its siblings for more information about setting an entry in the vertex shader argument table for buffers.
- `indirectBuffer`: An [MTLBuffer](../mtlbuffer.md) instance with data that matches the layout of the [MTLDrawPrimitivesIndirectArguments](../mtldrawprimitivesindirectarguments.md) structure.
- `indirectBufferOffset`: An integer that represents the location, in bytes, from the start of `indirectBuffer` where the indirect arguments structure begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.

<a id="discussion"></a>

## Discussion

Indirect drawing methods may help your app avoid expensive latency costs. This is because the command reads arguments from an [MTLBuffer](../mtlbuffer.md) instance instead of using the CPU to pass parameters to the command.

The method records the encoder’s current rendering state and resources the command needs as it runs. You can safely change the encoder’s render pipeline state to encode other commands after calling this method. Subsequent changes to the state don’t affect the commands already in the encoder’s [MTLCommandBuffer](../mtlcommandbuffer.md).

## See Also

### Drawing with vertices

- [drawPrimitives:vertexStart:vertexCount:](drawprimitives%28type_vertexstart_vertexcount_%29.md): Encodes a draw command that renders an instance of a geometric primitive.
- [drawPrimitives:vertexStart:vertexCount:instanceCount:](drawprimitives%28type_vertexstart_vertexcount_instancecount_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive.
- [drawPrimitives:vertexStart:vertexCount:instanceCount:baseInstance:](drawprimitives%28type_vertexstart_vertexcount_instancecount_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive that starts with a custom instance identification number.
