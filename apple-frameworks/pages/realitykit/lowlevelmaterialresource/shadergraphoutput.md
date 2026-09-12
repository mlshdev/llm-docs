> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/shadergraphoutput](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/shadergraphoutput)

# LowLevelMaterialResource.ShaderGraphOutput

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The compiled Metal shader functions derived from a ShaderGraph.

## Declaration

```swift
struct ShaderGraphOutput
```

<a id="overview"></a>

## Overview

Obtain a `ShaderGraphOutput` by calling [makeShaderGraphFunctions(shaderGraph:constantValues:)](../lowlevelrendercontextshadergraph/makeshadergraphfunctions%28shadergraph_constantvalues_%29.md) on [shaderGraph](../lowlevelrendercontext/shadergraph.md).

## Topics

### Specifying the shaders

- [surfaceShader](shadergraphoutput/surfaceshader.md): The compiled surface shader.
- [geometryModifier](shadergraphoutput/geometrymodifier.md): The compiled geometry modifier, or `nil` if the ShaderGraph does not include one.

### Configuring blending

- [blending](shadergraphoutput/blending-swift.property.md): The blending mode derived from the ShaderGraph material.
- [LowLevelMaterialResource.ShaderGraphOutput.Blending](shadergraphoutput/blending-swift.enum.md): Indicates the blending mode of the ShaderGraph material.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
