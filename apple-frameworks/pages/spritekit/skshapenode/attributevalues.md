> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/attributevalues](https://developer.apple.com/documentation/spritekit/skshapenode/attributevalues)

# attributeValues (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The values of each attribute associated with the node’s attached shader.

## Declaration

```swift
var attributeValues: [String : SKAttributeValue] { get set }
```

<a id="Discussion"></a>

## Discussion

All nodes have their own copy of an attribute value and therefore the attribute values can be different across the same [SKShader](../skshader.md). If instead you need all nodes to share the same value, use [SKUniform](../skuniform.md). Uniforms can change values every frame, but uniforms cannot vary per-node like attributes can.

## See Also

### Customizing Stroking or Fill Drawing

- [Controlling Shape Drawing with Shaders](../controlling-shape-drawing-with-shaders.md): Change a shape node’s appearance by supplying custom shader code.
- [strokeShader](strokeshader.md): A custom shader used to determine the color of the stroked portion of the shape node.
- [fillShader](fillshader.md): A custom shader used to determine the color of the filled portion of the shape node.
- [setValue(\_:forAttribute:)](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [value(forAttributeNamed:)](value%28forattributenamed_%29.md): The value of a shader attribute.

# attributeValues (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The values of each attribute associated with the node’s attached shader.

## Declaration

```objectivec
@property (nonatomic, copy, nonnull) NSDictionary<NSString *,SKAttributeValue *> * attributeValues;
```

<a id="Discussion"></a>

## Discussion

All nodes have their own copy of an attribute value and therefore the attribute values can be different across the same [SKShader](../skshader.md). If instead you need all nodes to share the same value, use [SKUniform](../skuniform.md). Uniforms can change values every frame, but uniforms cannot vary per-node like attributes can.

## See Also

### Customizing Stroking or Fill Drawing

- [Controlling Shape Drawing with Shaders](../controlling-shape-drawing-with-shaders.md): Change a shape node’s appearance by supplying custom shader code.
- [strokeShader](strokeshader.md): A custom shader used to determine the color of the stroked portion of the shape node.
- [fillShader](fillshader.md): A custom shader used to determine the color of the filled portion of the shape node.
- [setValue:forAttributeNamed:](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [valueForAttributeNamed:](value%28forattributenamed_%29.md): The value of a shader attribute.
