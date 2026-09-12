> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/shader](https://developer.apple.com/documentation/spritekit/skemitternode/shader)

# shader (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A custom shader used to determine how particles are rendered.

## Declaration

```swift
var shader: SKShader? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a shader is specified, then the shader is used to determine the output colors for any of the emitter’s particles.

## See Also

### Taking Full Control of Particle Drawing with a Shader

- [Getting Started with Particle Shaders](../getting-started-with-particle-shaders.md): Provide custom shader code to alter a particle’s look.
- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue(\_:forAttribute:)](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [value(forAttributeNamed:)](value%28forattributenamed_%29.md): Gets the value of a shader attribute.

# shader (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A custom shader used to determine how particles are rendered.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKShader * shader;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a shader is specified, then the shader is used to determine the output colors for any of the emitter’s particles.

## See Also

### Taking Full Control of Particle Drawing with a Shader

- [Getting Started with Particle Shaders](../getting-started-with-particle-shaders.md): Provide custom shader code to alter a particle’s look.
- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue:forAttributeNamed:](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [valueForAttributeNamed:](value%28forattributenamed_%29.md): Gets the value of a shader attribute.
