> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/drawprimitives(primitivetype:vertexstart:vertexcount:instancecount:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/drawprimitives(primitivetype:vertexstart:vertexcount:instancecount:))

# drawPrimitives(primitiveType:vertexStart:vertexCount:instanceCount:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a draw command that renders multiple instances of a geometric primitive.

## Declaration

```swift
func drawPrimitives(primitiveType: MTLPrimitiveType, vertexStart: Int, vertexCount: Int, instanceCount: Int)
```

## Parameters

- `primitiveType`: A [MTLPrimitiveType](../mtlprimitivetype.md) represents how the command interprets vertex argument data.
- `vertexStart`: The lowest value the command passes to your vertex shader function’s parameter with the `vertex_id` attribute.
- `vertexCount`: An integer that represents the number of vertices of `primitiveType` the command draws.
- `instanceCount`: An integer that represents the number of times the command draws `primitiveType` primitives with `vertexCount` vertices.

<a id="discussion"></a>

## Discussion

The command assigns each vertex a unique `vertex_id` value within its drawing instance that increases from `vertexStart` through `(vertexStart + vertexCount - 1)`.

Additionally, the command assigns each drawing instance a unique `instance_id` value that increases from `0` through `(instanceCount - 1)`.

Your vertex shader can use the `vertex_id` value to uniquely identify each vertex in each drawing instance, and the `instance_id` value to identify which instance that vertex belongs to.

## See Also

### Drawing with vertices

- [drawPrimitives(primitiveType:vertexStart:vertexCount:)](drawprimitives%28primitivetype_vertexstart_vertexcount_%29.md): Encodes a draw command that renders an instance of a geometric primitive.
- [drawPrimitives(primitiveType:vertexStart:vertexCount:instanceCount:baseInstance:)](drawprimitives%28primitivetype_vertexstart_vertexcount_instancecount_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive, starting with a custom instance identification number.
- [drawPrimitives(primitiveType:indirectBuffer:)](drawprimitives%28primitivetype_indirectbuffer_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indirect arguments.

# drawPrimitives:vertexStart:vertexCount:instanceCount: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a draw command that renders multiple instances of a geometric primitive.

## Declaration

```objectivec
- (void) drawPrimitives:(MTLPrimitiveType) primitiveType vertexStart:(NSUInteger) vertexStart vertexCount:(NSUInteger) vertexCount instanceCount:(NSUInteger) instanceCount;
```

## Parameters

- `primitiveType`: A [MTLPrimitiveType](../mtlprimitivetype.md) represents how the command interprets vertex argument data.
- `vertexStart`: The lowest value the command passes to your vertex shader function’s parameter with the `vertex_id` attribute.
- `vertexCount`: An integer that represents the number of vertices of `primitiveType` the command draws.
- `instanceCount`: An integer that represents the number of times the command draws `primitiveType` primitives with `vertexCount` vertices.

<a id="discussion"></a>

## Discussion

The command assigns each vertex a unique `vertex_id` value within its drawing instance that increases from `vertexStart` through `(vertexStart + vertexCount - 1)`.

Additionally, the command assigns each drawing instance a unique `instance_id` value that increases from `0` through `(instanceCount - 1)`.

Your vertex shader can use the `vertex_id` value to uniquely identify each vertex in each drawing instance, and the `instance_id` value to identify which instance that vertex belongs to.

## See Also

### Drawing with vertices

- [drawPrimitives:vertexStart:vertexCount:](drawprimitives%28primitivetype_vertexstart_vertexcount_%29.md): Encodes a draw command that renders an instance of a geometric primitive.
- [drawPrimitives:vertexStart:vertexCount:instanceCount:baseInstance:](drawprimitives%28primitivetype_vertexstart_vertexcount_instancecount_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive, starting with a custom instance identification number.
- [drawPrimitives:indirectBuffer:](drawprimitives%28primitivetype_indirectbuffer_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indirect arguments.
