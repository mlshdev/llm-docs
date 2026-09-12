> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/drawprimitives(primitivetype:vertexstart:vertexcount:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/drawprimitives(primitivetype:vertexstart:vertexcount:))

# drawPrimitives(primitiveType:vertexStart:vertexCount:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a draw command that renders an instance of a geometric primitive.

## Declaration

```swift
func drawPrimitives(primitiveType: MTLPrimitiveType, vertexStart: Int, vertexCount: Int)
```

## Parameters

- `primitiveType`: A [MTLPrimitiveType](../mtlprimitivetype.md) representing how the command interprets vertex argument data.
- `vertexStart`: The lowest value the command passes to your vertex shader function’s parameter with the `[[vertex_id]]` attribute.
- `vertexCount`: An integer that represents the number of vertices of `primitiveType` the command draws.

<a id="discussion"></a>

## Discussion

This command assigns each vertex a unique `vertex_id` value that increases from `vertexStart` through `(vertexStart + vertexCount - 1)`.

Your vertex shader function can use this value to uniquely identify each vertex.

## See Also

### Drawing with vertices

- [drawPrimitives(primitiveType:vertexStart:vertexCount:instanceCount:)](drawprimitives%28primitivetype_vertexstart_vertexcount_instancecount_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive.
- [drawPrimitives(primitiveType:vertexStart:vertexCount:instanceCount:baseInstance:)](drawprimitives%28primitivetype_vertexstart_vertexcount_instancecount_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive, starting with a custom instance identification number.
- [drawPrimitives(primitiveType:indirectBuffer:)](drawprimitives%28primitivetype_indirectbuffer_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indirect arguments.

# drawPrimitives:vertexStart:vertexCount: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a draw command that renders an instance of a geometric primitive.

## Declaration

```objectivec
- (void) drawPrimitives:(MTLPrimitiveType) primitiveType vertexStart:(NSUInteger) vertexStart vertexCount:(NSUInteger) vertexCount;
```

## Parameters

- `primitiveType`: A [MTLPrimitiveType](../mtlprimitivetype.md) representing how the command interprets vertex argument data.
- `vertexStart`: The lowest value the command passes to your vertex shader function’s parameter with the `[[vertex_id]]` attribute.
- `vertexCount`: An integer that represents the number of vertices of `primitiveType` the command draws.

<a id="discussion"></a>

## Discussion

This command assigns each vertex a unique `vertex_id` value that increases from `vertexStart` through `(vertexStart + vertexCount - 1)`.

Your vertex shader function can use this value to uniquely identify each vertex.

## See Also

### Drawing with vertices

- [drawPrimitives:vertexStart:vertexCount:instanceCount:](drawprimitives%28primitivetype_vertexstart_vertexcount_instancecount_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive.
- [drawPrimitives:vertexStart:vertexCount:instanceCount:baseInstance:](drawprimitives%28primitivetype_vertexstart_vertexcount_instancecount_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive, starting with a custom instance identification number.
- [drawPrimitives:indirectBuffer:](drawprimitives%28primitivetype_indirectbuffer_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indirect arguments.
