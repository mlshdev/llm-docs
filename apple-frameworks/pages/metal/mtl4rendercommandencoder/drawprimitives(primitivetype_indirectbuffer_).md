> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/drawprimitives(primitivetype:indirectbuffer:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/drawprimitives(primitivetype:indirectbuffer:))

# drawPrimitives(primitiveType:indirectBuffer:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a draw command that renders multiple instances of a geometric primitive with indirect arguments.

## Declaration

```swift
func drawPrimitives(primitiveType: MTLPrimitiveType, indirectBuffer: MTLGPUAddress)
```

## Parameters

- `primitiveType`: A [MTLPrimitiveType](../mtlprimitivetype.md) representing how the command interprets vertex argument data.
- `indirectBuffer`: GPUAddress of a [MTLBuffer](../mtlbuffer.md) instance with data that matches the layout of the [MTLDrawPrimitivesIndirectArguments](../mtldrawprimitivesindirectarguments.md) structure. You are responsible for ensuring that the alignment of this address is 4 bytes.

<a id="discussion"></a>

## Discussion

When you use this function, Metal reads the parameters to the draw command from an [MTLBuffer](../mtlbuffer.md) instance, allowing you to implement a GPU-driven workflow where a compute pipeline state determines the draw arguments.

You are responsible for ensuring that the address of the indirect buffer you provide to this method has 4-byte alignment.

Because this is a non-indexed draw call, Metal interprets the contents of the indirect buffer to match the layout of struct [MTLDrawPrimitivesIndirectArguments](../mtldrawprimitivesindirectarguments.md).

Use an instance of [MTLResidencySet](../mtlresidencyset.md) to mark residency of the indirect buffer that the `indirectBuffer` parameter references.

## See Also

### Drawing with vertices

- [drawPrimitives(primitiveType:vertexStart:vertexCount:)](drawprimitives%28primitivetype_vertexstart_vertexcount_%29.md): Encodes a draw command that renders an instance of a geometric primitive.
- [drawPrimitives(primitiveType:vertexStart:vertexCount:instanceCount:)](drawprimitives%28primitivetype_vertexstart_vertexcount_instancecount_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive.
- [drawPrimitives(primitiveType:vertexStart:vertexCount:instanceCount:baseInstance:)](drawprimitives%28primitivetype_vertexstart_vertexcount_instancecount_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive, starting with a custom instance identification number.

# drawPrimitives:indirectBuffer: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a draw command that renders multiple instances of a geometric primitive with indirect arguments.

## Declaration

```objectivec
- (void) drawPrimitives:(MTLPrimitiveType) primitiveType indirectBuffer:(MTLGPUAddress) indirectBuffer;
```

## Parameters

- `primitiveType`: A [MTLPrimitiveType](../mtlprimitivetype.md) representing how the command interprets vertex argument data.
- `indirectBuffer`: GPUAddress of a [MTLBuffer](../mtlbuffer.md) instance with data that matches the layout of the [MTLDrawPrimitivesIndirectArguments](../mtldrawprimitivesindirectarguments.md) structure. You are responsible for ensuring that the alignment of this address is 4 bytes.

<a id="discussion"></a>

## Discussion

When you use this function, Metal reads the parameters to the draw command from an [MTLBuffer](../mtlbuffer.md) instance, allowing you to implement a GPU-driven workflow where a compute pipeline state determines the draw arguments.

You are responsible for ensuring that the address of the indirect buffer you provide to this method has 4-byte alignment.

Because this is a non-indexed draw call, Metal interprets the contents of the indirect buffer to match the layout of struct [MTLDrawPrimitivesIndirectArguments](../mtldrawprimitivesindirectarguments.md).

Use an instance of [MTLResidencySet](../mtlresidencyset.md) to mark residency of the indirect buffer that the `indirectBuffer` parameter references.

## See Also

### Drawing with vertices

- [drawPrimitives:vertexStart:vertexCount:](drawprimitives%28primitivetype_vertexstart_vertexcount_%29.md): Encodes a draw command that renders an instance of a geometric primitive.
- [drawPrimitives:vertexStart:vertexCount:instanceCount:](drawprimitives%28primitivetype_vertexstart_vertexcount_instancecount_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive.
- [drawPrimitives:vertexStart:vertexCount:instanceCount:baseInstance:](drawprimitives%28primitivetype_vertexstart_vertexcount_instancecount_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive, starting with a custom instance identification number.
