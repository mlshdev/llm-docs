> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshader](https://developer.apple.com/documentation/spritekit/skshader)

# SKShader (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object that allows you to apply a custom fragment shader.

## Declaration

```swift
class SKShader
```

## Mentioned In

- [Controlling Shape Drawing with Shaders](controlling-shape-drawing-with-shaders.md)
- [Applying Shaders to a Sprite](applying-shaders-to-a-sprite.md)
- [Creating a Custom Fragment Shader](creating-a-custom-fragment-shader.md)
- [Creating a New Node By Rendering To a Texture](creating-a-new-node-by-rendering-to-a-texture.md)
- [Customizing the Behavior of a Node](customizing-the-behavior-of-a-node.md)
- [Executing Shaders in Metal and OpenGL](executing-shaders-in-metal-and-opengl.md)
- [Getting Started with Particle Shaders](getting-started-with-particle-shaders.md)

<a id="overview"></a>

## Overview

An [SKShader](skshader.md) object holds a custom OpenGL ES fragment shader. Shader objects are used to customize the drawing behavior of many different kinds of nodes in SpriteKit.

To use a custom shader, create an [SKShader](skshader.md) object and provide the source for the custom fragment shader. If your shader needs to provide uniform data to the shader, create one or more [SKUniform](skuniform.md) objects and associate them with the shader object. If your shader needs to provide per-node data to the shader, create one or more [SKAttribute](skattribute.md) objects and associate them with the relevant nodes. Then, assign the shader object to the [shader](skspritenode/shader.md) property of any sprites that need the custom behavior.

Compiling a shader and the uniform data associated with it can be expensive. Because of this, you should:

- Initialize shader objects when your game launches, not while the game is running.
- Avoid changing the shader’s source or changing the list of uniforms or attributes while your game is running. Either of these things recompiles the shader.
- Share shader objects whenever possible. If multiple sprites need the same behavior, create one shader object and associate it with every sprite that needs that behavior. Do not create a separate shader for each sprite.

> **Important**

>  [SKShader](skshader.md) does not support OpenGL Extensions. SpriteKit will return an error if you compile a project containing a fragment shader using extensions.

## Topics

### Creating a Shader

- [Creating a Custom Fragment Shader](creating-a-custom-fragment-shader.md): Write a fragment shader using the set of SpriteKit-exposed symbols, and supply it with custom data.
- [init(fileNamed:)](skshader/init%28filenamed_%29.md): Creates a new shader object by loading the source for a fragment shader from a file stored in the app’s bundle.
- [init(source:uniforms:)](skshader/init%28source_uniforms_%29.md): Initializes a new shader object using the specified source and uniform data.
- [init(source:)](skshader/init%28source_%29.md): Initializes a new shader object using the specified source code.

### Providing Uniform Data to a Shader

- [addUniform(\_:)](skshader/adduniform%28__%29.md): Adds a uniform to the shader.
- [removeUniformNamed(\_:)](skshader/removeuniformnamed%28__%29.md): Removes a uniform from the shader.
- [uniforms](skshader/uniforms.md): The list of uniforms associated with the shader.
- [uniformNamed(\_:)](skshader/uniformnamed%28__%29.md): Returns the uniform object corresponding to a particular uniform variable.

### Providing Attribute Data to a Shader

- [attributes](skshader/attributes.md): The list of attributes associated with the shader.

### Accessing or Setting a Shader’s Source Code

- [source](skshader/source.md): The source code for the shader.

### Executing Shaders in Metal and OpenGL

- [Executing Shaders in Metal and OpenGL](executing-shaders-in-metal-and-opengl.md): Toggle between renderers to make sure your shader code compiles in both the Metal and OpenGL environments.

### Initializers

- [init(coder:)](skshader/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Shaders

- [SKAttribute](skattribute.md): A specification for dynamic per-node data used with a custom shader.
- [SKAttributeValue](skattributevalue.md): A container for dynamic shader data associated with a node.
- [SKUniform](skuniform.md): A container for uniform shader data.

# SKShader (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object that allows you to apply a custom fragment shader.

## Declaration

```objectivec
@interface SKShader : NSObject
```

## Mentioned In

- [Controlling Shape Drawing with Shaders](controlling-shape-drawing-with-shaders.md)
- [Applying Shaders to a Sprite](applying-shaders-to-a-sprite.md)
- [Creating a Custom Fragment Shader](creating-a-custom-fragment-shader.md)
- [Creating a New Node By Rendering To a Texture](creating-a-new-node-by-rendering-to-a-texture.md)
- [Customizing the Behavior of a Node](customizing-the-behavior-of-a-node.md)
- [Executing Shaders in Metal and OpenGL](executing-shaders-in-metal-and-opengl.md)
- [Getting Started with Particle Shaders](getting-started-with-particle-shaders.md)

<a id="overview"></a>

## Overview

An [SKShader](skshader.md) object holds a custom OpenGL ES fragment shader. Shader objects are used to customize the drawing behavior of many different kinds of nodes in SpriteKit.

To use a custom shader, create an [SKShader](skshader.md) object and provide the source for the custom fragment shader. If your shader needs to provide uniform data to the shader, create one or more [SKUniform](skuniform.md) objects and associate them with the shader object. If your shader needs to provide per-node data to the shader, create one or more [SKAttribute](skattribute.md) objects and associate them with the relevant nodes. Then, assign the shader object to the [shader](skspritenode/shader.md) property of any sprites that need the custom behavior.

Compiling a shader and the uniform data associated with it can be expensive. Because of this, you should:

- Initialize shader objects when your game launches, not while the game is running.
- Avoid changing the shader’s source or changing the list of uniforms or attributes while your game is running. Either of these things recompiles the shader.
- Share shader objects whenever possible. If multiple sprites need the same behavior, create one shader object and associate it with every sprite that needs that behavior. Do not create a separate shader for each sprite.

> **Important**

>  [SKShader](skshader.md) does not support OpenGL Extensions. SpriteKit will return an error if you compile a project containing a fragment shader using extensions.

## Topics

### Creating a Shader

- [Creating a Custom Fragment Shader](creating-a-custom-fragment-shader.md): Write a fragment shader using the set of SpriteKit-exposed symbols, and supply it with custom data.
- [shaderWithFileNamed:](skshader/init%28filenamed_%29.md): Creates a new shader object by loading the source for a fragment shader from a file stored in the app’s bundle.
- [shaderWithSource:uniforms:](skshader/shaderwithsource_uniforms_.md): Creates a new shader object using the specified source and uniform data.
- [shaderWithSource:](skshader/shaderwithsource_.md): Creates a new shader object using the specified source code.
- [shader](skshader/shader.md): Creates a new empty shader object.
- [initWithSource:uniforms:](skshader/init%28source_uniforms_%29.md): Initializes a new shader object using the specified source and uniform data.
- [initWithSource:](skshader/init%28source_%29.md): Initializes a new shader object using the specified source code.

### Providing Uniform Data to a Shader

- [addUniform:](skshader/adduniform%28__%29.md): Adds a uniform to the shader.
- [removeUniformNamed:](skshader/removeuniformnamed%28__%29.md): Removes a uniform from the shader.
- [uniforms](skshader/uniforms.md): The list of uniforms associated with the shader.
- [uniformNamed:](skshader/uniformnamed%28__%29.md): Returns the uniform object corresponding to a particular uniform variable.

### Providing Attribute Data to a Shader

- [attributes](skshader/attributes.md): The list of attributes associated with the shader.

### Accessing or Setting a Shader’s Source Code

- [source](skshader/source.md): The source code for the shader.

### Executing Shaders in Metal and OpenGL

- [Executing Shaders in Metal and OpenGL](executing-shaders-in-metal-and-opengl.md): Toggle between renderers to make sure your shader code compiles in both the Metal and OpenGL environments.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Shaders

- [SKAttribute](skattribute.md): A specification for dynamic per-node data used with a custom shader.
- [SKAttributeValue](skattributevalue.md): A container for dynamic shader data associated with a node.
- [SKUniform](skuniform.md): A container for uniform shader data.
