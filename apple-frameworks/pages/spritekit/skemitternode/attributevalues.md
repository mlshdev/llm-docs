> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/attributevalues](https://developer.apple.com/documentation/spritekit/skemitternode/attributevalues)

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

All nodes have their own copy of an attribute value and therefore the attribute values can be different per-node across the same [SKShader](../skshader.md). If instead you need all nodes to share the same value, use [SKUniform](../skuniform.md). Uniforms can change values every frame, but uniforms cannot vary per-node like attributes can.

## See Also

### Taking Full Control of Particle Drawing with a Shader

- [Getting Started with Particle Shaders](../getting-started-with-particle-shaders.md): Provide custom shader code to alter a particle’s look.
- [shader](shader.md): A custom shader used to determine how particles are rendered.
- [setValue(\_:forAttribute:)](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [value(forAttributeNamed:)](value%28forattributenamed_%29.md): Gets the value of a shader attribute.

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

All nodes have their own copy of an attribute value and therefore the attribute values can be different per-node across the same [SKShader](../skshader.md). If instead you need all nodes to share the same value, use [SKUniform](../skuniform.md). Uniforms can change values every frame, but uniforms cannot vary per-node like attributes can.

## See Also

### Taking Full Control of Particle Drawing with a Shader

- [Getting Started with Particle Shaders](../getting-started-with-particle-shaders.md): Provide custom shader code to alter a particle’s look.
- [shader](shader.md): A custom shader used to determine how particles are rendered.
- [setValue:forAttributeNamed:](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [valueForAttributeNamed:](value%28forattributenamed_%29.md): Gets the value of a shader attribute.
