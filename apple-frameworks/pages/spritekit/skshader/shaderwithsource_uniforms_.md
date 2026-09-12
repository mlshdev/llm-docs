> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshader/shaderwithsource:uniforms:](https://developer.apple.com/documentation/spritekit/skshader/shaderwithsource:uniforms:)

# shaderWithSource:uniforms:

**Interface language:** Objective-C

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a new shader object using the specified source and uniform data.

## Declaration

```objectivec
+ (instancetype) shaderWithSource:(NSString *) source uniforms:(NSArray<SKUniform *> *) uniforms;
```

## Parameters

- `source`: A string that holds the source for a fragment shader.
- `uniforms`: A list of uniforms to add to the shader object.

<a id="return-value"></a>

## Return Value

A newly initialized shader object.

<a id="discussion"></a>

## Discussion

> **Important**

>  Even if their source code is identical, SpriteKit treats two shaders created with [initWithSource:uniforms:](init%28source_uniforms_%29.md) as two separate shaders. To improve the performance of multiple instances of the same fragment shader code, create [SKShader](../skshader.md) instances using [shaderWithFileNamed:](init%28filenamed_%29.md).

## See Also

### Creating a Shader

- [Creating a Custom Fragment Shader](../creating-a-custom-fragment-shader.md): Write a fragment shader using the set of SpriteKit-exposed symbols, and supply it with custom data.
- [shaderWithFileNamed:](init%28filenamed_%29.md): Creates a new shader object by loading the source for a fragment shader from a file stored in the app’s bundle.
- [shaderWithSource:](shaderwithsource_.md): Creates a new shader object using the specified source code.
- [shader](shader.md): Creates a new empty shader object.
- [initWithSource:uniforms:](init%28source_uniforms_%29.md): Initializes a new shader object using the specified source and uniform data.
- [initWithSource:](init%28source_%29.md): Initializes a new shader object using the specified source code.
