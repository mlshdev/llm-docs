> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skeffectnode/shader](https://developer.apple.com/documentation/spritekit/skeffectnode/shader)

# shader (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A custom shader that is called when the effect node is blended into the parent’s framebuffer.

## Declaration

```swift
var shader: SKShader? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, meaning that default blending behavior executes. If a shader is specified, it is called when the rasterized image is blended into the parent’s framebuffer.

## See Also

### Applying a Shader with an Effect Node

- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue(\_:forAttribute:)](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [value(forAttributeNamed:)](value%28forattributenamed_%29.md): Gets the value of a shader attribute.

# shader (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A custom shader that is called when the effect node is blended into the parent’s framebuffer.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKShader * shader;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, meaning that default blending behavior executes. If a shader is specified, it is called when the rasterized image is blended into the parent’s framebuffer.

## See Also

### Applying a Shader with an Effect Node

- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue:forAttributeNamed:](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [valueForAttributeNamed:](value%28forattributenamed_%29.md): Gets the value of a shader attribute.
