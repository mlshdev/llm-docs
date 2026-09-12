> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/shader](https://developer.apple.com/documentation/spritekit/skspritenode/shader)

# shader (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A text file that defines code that does custom per-pixel drawing or colorization.

## Declaration

```swift
var shader: SKShader? { get set }
```

## Mentioned In

- [Applying Shaders to a Sprite](../applying-shaders-to-a-sprite.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which means the default behavior for sprite rendering is performed. SpriteKit implements many sprite features using a default shader, such as:

- Animations on [alpha](../sknode/alpha.md).
- `SKTexture` [filteringMode](../sktexture/filteringmode.md).
- Light from [SKLightNode](../sklightnode.md).

If you supply a custom value for `shader`, your custom shader overrides the default shader which neutralizes the default features. It is the responsibility of your custom shader to implement any of the features your sprites require.

## See Also

### Adding a Custom Shader to a Sprite

- [Applying Shaders to a Sprite](../applying-shaders-to-a-sprite.md): Write custom GLSL code that modifies the look of your sprite.
- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue(\_:forAttribute:)](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [value(forAttributeNamed:)](value%28forattributenamed_%29.md): Sets the value of a shader attribute.

# shader (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A text file that defines code that does custom per-pixel drawing or colorization.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKShader * shader;
```

## Mentioned In

- [Applying Shaders to a Sprite](../applying-shaders-to-a-sprite.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which means the default behavior for sprite rendering is performed. SpriteKit implements many sprite features using a default shader, such as:

- Animations on [alpha](../sknode/alpha.md).
- `SKTexture` [filteringMode](../sktexture/filteringmode.md).
- Light from [SKLightNode](../sklightnode.md).

If you supply a custom value for `shader`, your custom shader overrides the default shader which neutralizes the default features. It is the responsibility of your custom shader to implement any of the features your sprites require.

## See Also

### Adding a Custom Shader to a Sprite

- [Applying Shaders to a Sprite](../applying-shaders-to-a-sprite.md): Write custom GLSL code that modifies the look of your sprite.
- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue:forAttributeNamed:](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [valueForAttributeNamed:](value%28forattributenamed_%29.md): Sets the value of a shader attribute.
