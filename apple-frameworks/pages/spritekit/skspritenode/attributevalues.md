> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/attributevalues](https://developer.apple.com/documentation/spritekit/skspritenode/attributevalues)

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

### Adding a Custom Shader to a Sprite

- [Applying Shaders to a Sprite](../applying-shaders-to-a-sprite.md): Write custom GLSL code that modifies the look of your sprite.
- [shader](shader.md): A text file that defines code that does custom per-pixel drawing or colorization.
- [setValue(\_:forAttribute:)](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [value(forAttributeNamed:)](value%28forattributenamed_%29.md): Sets the value of a shader attribute.

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

### Adding a Custom Shader to a Sprite

- [Applying Shaders to a Sprite](../applying-shaders-to-a-sprite.md): Write custom GLSL code that modifies the look of your sprite.
- [shader](shader.md): A text file that defines code that does custom per-pixel drawing or colorization.
- [setValue:forAttributeNamed:](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [valueForAttributeNamed:](value%28forattributenamed_%29.md): Sets the value of a shader attribute.
