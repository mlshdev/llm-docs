> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/fillshader](https://developer.apple.com/documentation/spritekit/skshapenode/fillshader)

# fillShader (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A custom shader used to determine the color of the filled portion of the shape node.

## Declaration

```swift
var fillShader: SKShader? { get set }
```

## Mentioned In

- [Controlling Shape Drawing with Shaders](../controlling-shape-drawing-with-shaders.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a `fillShader` is specified, when the shape node is drawn, the shader is used to determine the output colors for any part of the shape node that’s fillled. SpriteKit implements many fill features using a default shader, such as:

- Fill color.
- Animations on [alpha](../sknode/alpha.md).
- Light cast by [SKLightNode](../sklightnode.md).

If you supply a custom value for `fillShader`, your custom shader overrides the default shader which neutralizes the default features. It is the responsibility of your custom fillShader to implement any of the features your shape requires.

## See Also

### Customizing Stroking or Fill Drawing

- [Controlling Shape Drawing with Shaders](../controlling-shape-drawing-with-shaders.md): Change a shape node’s appearance by supplying custom shader code.
- [strokeShader](strokeshader.md): A custom shader used to determine the color of the stroked portion of the shape node.
- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue(\_:forAttribute:)](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [value(forAttributeNamed:)](value%28forattributenamed_%29.md): The value of a shader attribute.

# fillShader (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A custom shader used to determine the color of the filled portion of the shape node.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKShader * fillShader;
```

## Mentioned In

- [Controlling Shape Drawing with Shaders](../controlling-shape-drawing-with-shaders.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a `fillShader` is specified, when the shape node is drawn, the shader is used to determine the output colors for any part of the shape node that’s fillled. SpriteKit implements many fill features using a default shader, such as:

- Fill color.
- Animations on [alpha](../sknode/alpha.md).
- Light cast by [SKLightNode](../sklightnode.md).

If you supply a custom value for `fillShader`, your custom shader overrides the default shader which neutralizes the default features. It is the responsibility of your custom fillShader to implement any of the features your shape requires.

## See Also

### Customizing Stroking or Fill Drawing

- [Controlling Shape Drawing with Shaders](../controlling-shape-drawing-with-shaders.md): Change a shape node’s appearance by supplying custom shader code.
- [strokeShader](strokeshader.md): A custom shader used to determine the color of the stroked portion of the shape node.
- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue:forAttributeNamed:](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [valueForAttributeNamed:](value%28forattributenamed_%29.md): The value of a shader attribute.
