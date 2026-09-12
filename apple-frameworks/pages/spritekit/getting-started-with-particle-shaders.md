> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/getting-started-with-particle-shaders](https://developer.apple.com/documentation/spritekit/getting-started-with-particle-shaders)

# Getting Started with Particle Shaders (Swift)

**Framework:** SpriteKit  
**Kind:** Article

Provide custom shader code to alter a particle’s look.

<a id="overview"></a>

## Overview

Use the shader property of an emitter node to change the appearance of a texture with a custom OpenGL ES fragment shader embedded within an [SKShader](skshader.md). Custom shaders offer almost limitless possibilities, from adding blurs and color treatments to textures, to generating imagery such as random noise.

The following code shows a custom shader that renders particles with a radial gradient. The center of each particle is opaque white and the edges are transparent black.

```swift
let emitter = SKEmitterNode()
    
let radialGradientShader = SKShader(source: "void main() {" +
    "    vec2 coord = (v_tex_coord - 0.5) * 2.0;" +
    "    gl_FragColor = vec4(1.0 - length(coord));" +
    "}")  
      
emitter.shader = radialGradientShader
```

## See Also

### Taking Full Control of Particle Drawing with a Shader

- [shader](skemitternode/shader.md): A custom shader used to determine how particles are rendered.
- [attributeValues](skemitternode/attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue(\_:forAttribute:)](skemitternode/setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [value(forAttributeNamed:)](skemitternode/value%28forattributenamed_%29.md): Gets the value of a shader attribute.

# Getting Started with Particle Shaders (Objective-C)

**Framework:** SpriteKit  
**Kind:** Article

Provide custom shader code to alter a particle’s look.

<a id="overview"></a>

## Overview

Use the shader property of an emitter node to change the appearance of a texture with a custom OpenGL ES fragment shader embedded within an [SKShader](skshader.md). Custom shaders offer almost limitless possibilities, from adding blurs and color treatments to textures, to generating imagery such as random noise.

The following code shows a custom shader that renders particles with a radial gradient. The center of each particle is opaque white and the edges are transparent black.

```swift
let emitter = SKEmitterNode()
    
let radialGradientShader = SKShader(source: "void main() {" +
    "    vec2 coord = (v_tex_coord - 0.5) * 2.0;" +
    "    gl_FragColor = vec4(1.0 - length(coord));" +
    "}")  
      
emitter.shader = radialGradientShader
```

## See Also

### Taking Full Control of Particle Drawing with a Shader

- [shader](skemitternode/shader.md): A custom shader used to determine how particles are rendered.
- [attributeValues](skemitternode/attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue:forAttributeNamed:](skemitternode/setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [valueForAttributeNamed:](skemitternode/value%28forattributenamed_%29.md): Gets the value of a shader attribute.
