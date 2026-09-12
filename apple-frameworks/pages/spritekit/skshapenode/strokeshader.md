> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/strokeshader](https://developer.apple.com/documentation/spritekit/skshapenode/strokeshader)

# strokeShader (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A custom shader used to determine the color of the stroked portion of the shape node.

## Declaration

```swift
var strokeShader: SKShader? { get set }
```

## Mentioned In

- [Controlling Shape Drawing with Shaders](../controlling-shape-drawing-with-shaders.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a `strokeShader` is specified, when the shape node is drawn, the shader is used to determine the output colors for any part of the shape node that’s stroked. SpriteKit implements many stroke features using a default shader, such as:

- [lineCap](../../quartzcore/cashapelayer/linecap.md)
- [glowWidth](glowwidth.md)
- [strokeColor](strokecolor.md)

If you supply a custom value for `strokeShader`, your custom shader overrides the default shader which neutralizes the default features. It is the responsibility of your custom `strokeShader` to implement any of the features your shape requires.

## See Also

### Customizing Stroking or Fill Drawing

- [Controlling Shape Drawing with Shaders](../controlling-shape-drawing-with-shaders.md): Change a shape node’s appearance by supplying custom shader code.
- [fillShader](fillshader.md): A custom shader used to determine the color of the filled portion of the shape node.
- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue(\_:forAttribute:)](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [value(forAttributeNamed:)](value%28forattributenamed_%29.md): The value of a shader attribute.

# strokeShader (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A custom shader used to determine the color of the stroked portion of the shape node.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKShader * strokeShader;
```

## Mentioned In

- [Controlling Shape Drawing with Shaders](../controlling-shape-drawing-with-shaders.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a `strokeShader` is specified, when the shape node is drawn, the shader is used to determine the output colors for any part of the shape node that’s stroked. SpriteKit implements many stroke features using a default shader, such as:

- [lineCap](../../quartzcore/cashapelayer/linecap.md)
- [glowWidth](glowwidth.md)
- [strokeColor](strokecolor.md)

If you supply a custom value for `strokeShader`, your custom shader overrides the default shader which neutralizes the default features. It is the responsibility of your custom `strokeShader` to implement any of the features your shape requires.

## See Also

### Customizing Stroking or Fill Drawing

- [Controlling Shape Drawing with Shaders](../controlling-shape-drawing-with-shaders.md): Change a shape node’s appearance by supplying custom shader code.
- [fillShader](fillshader.md): A custom shader used to determine the color of the filled portion of the shape node.
- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue:forAttributeNamed:](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [valueForAttributeNamed:](value%28forattributenamed_%29.md): The value of a shader attribute.
