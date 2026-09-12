> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshader/shader](https://developer.apple.com/documentation/spritekit/skshader/shader)

# shader

**Interface language:** Objective-C

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a new empty shader object.

## Declaration

```objectivec
+ (instancetype) shader;
```

<a id="return-value"></a>

## Return Value

A newly initialized shader object.

<a id="Discussion"></a>

## Discussion

The shader is initialized without any source code or uniform data. You must assign source code to the shader before using it.

## See Also

### Creating a Shader

- [Creating a Custom Fragment Shader](../creating-a-custom-fragment-shader.md): Write a fragment shader using the set of SpriteKit-exposed symbols, and supply it with custom data.
- [shaderWithFileNamed:](init%28filenamed_%29.md): Creates a new shader object by loading the source for a fragment shader from a file stored in the app’s bundle.
- [shaderWithSource:uniforms:](shaderwithsource_uniforms_.md): Creates a new shader object using the specified source and uniform data.
- [shaderWithSource:](shaderwithsource_.md): Creates a new shader object using the specified source code.
- [initWithSource:uniforms:](init%28source_uniforms_%29.md): Initializes a new shader object using the specified source and uniform data.
- [initWithSource:](init%28source_%29.md): Initializes a new shader object using the specified source code.
