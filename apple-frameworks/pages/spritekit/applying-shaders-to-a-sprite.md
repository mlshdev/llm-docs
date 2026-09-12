> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/applying-shaders-to-a-sprite](https://developer.apple.com/documentation/spritekit/applying-shaders-to-a-sprite)

# Applying Shaders to a Sprite (Swift)

**Framework:** SpriteKit  
**Kind:** Article

Write custom GLSL code that modifies the look of your sprite.

<a id="overview"></a>

## Overview

You can use the [shader](skspritenode/shader.md) property of a sprite node to change the appearance of a texture with a custom OpenGL ES fragment shader embedded within a [SKShader](skshader.md) object. Custom shaders offer almost limitless possibilities, from adding blurs and color treatments to textures to generating imagery such as random noise.

The following code shows a small custom shader which inverts the color of a texture while leaving the alpha or transparency unaffected:

**Swift**

```swift
let negativeShader = SKShader(source: "void main() { " +
    "    gl_FragColor = vec4(1.0 - SKDefaultShading().rgb, SKDefaultShading().a); " +
    "}")
rocket.shader = negativeShader
```

**Obj-C**

```objc
void main() {

    gl_FragColor = vec4(1.0 - SKDefaultShading().rgb, SKDefaultShading().a);
}
```

The following figure illustrates the effect of the shader. The original image, on the left, has its colors inverted by the shader:

![Example of a color inverted sprite](https://developer.apple.com/images/com.apple.spritekit/media-2983067@2x.png)

## See Also

### Adding a Custom Shader to a Sprite

- [shader](skspritenode/shader.md): A text file that defines code that does custom per-pixel drawing or colorization.
- [attributeValues](skspritenode/attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue(\_:forAttribute:)](skspritenode/setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [value(forAttributeNamed:)](skspritenode/value%28forattributenamed_%29.md): Sets the value of a shader attribute.

# Applying Shaders to a Sprite (Objective-C)

**Framework:** SpriteKit  
**Kind:** Article

Write custom GLSL code that modifies the look of your sprite.

<a id="overview"></a>

## Overview

You can use the [shader](skspritenode/shader.md) property of a sprite node to change the appearance of a texture with a custom OpenGL ES fragment shader embedded within a [SKShader](skshader.md) object. Custom shaders offer almost limitless possibilities, from adding blurs and color treatments to textures to generating imagery such as random noise.

The following code shows a small custom shader which inverts the color of a texture while leaving the alpha or transparency unaffected:

**Swift**

```swift
let negativeShader = SKShader(source: "void main() { " +
    "    gl_FragColor = vec4(1.0 - SKDefaultShading().rgb, SKDefaultShading().a); " +
    "}")
rocket.shader = negativeShader
```

**Obj-C**

```objc
void main() {

    gl_FragColor = vec4(1.0 - SKDefaultShading().rgb, SKDefaultShading().a);
}
```

The following figure illustrates the effect of the shader. The original image, on the left, has its colors inverted by the shader:

![Example of a color inverted sprite](https://developer.apple.com/images/com.apple.spritekit/media-2983067@2x.png)

## See Also

### Adding a Custom Shader to a Sprite

- [shader](skspritenode/shader.md): A text file that defines code that does custom per-pixel drawing or colorization.
- [attributeValues](skspritenode/attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue:forAttributeNamed:](skspritenode/setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [valueForAttributeNamed:](skspritenode/value%28forattributenamed_%29.md): Sets the value of a shader attribute.
