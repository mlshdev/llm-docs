> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextlighting](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextlighting)

# LowLevelRenderContextLighting

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The interface for creating lighting functions for use in materials.

## Declaration

```swift
protocol LowLevelRenderContextLighting
```

## Topics

### Making lighting functions

- [makeImageBasedLightingFunction()](lowlevelrendercontextlighting/makeimagebasedlightingfunction%28%29.md): Returns a lighting function using image-based lighting (IBL).
- [makeUnlitLightingFunction()](lowlevelrendercontextlighting/makeunlitlightingfunction%28%29.md): Returns an unlit lighting function that emits the surface emissive color directly, without any lighting calculations.

## Relationships

### Conforming Types

- [LowLevelRenderContextStandalone](lowlevelrendercontextstandalone.md)

## See Also

### Render contexts

- [LowLevelRenderer](lowlevelrenderer.md): A renderer that encodes draw calls for a collection of mesh instances into a Metal command buffer.
- [LowLevelRenderContext](lowlevelrendercontext.md): An entry point for creating rendering resources and compiling materials.
- [LowLevelRenderContextShaderGraph](lowlevelrendercontextshadergraph.md): The interface for creating Metal shader functions from a ShaderGraph.
- [LowLevelRenderContextStandalone](lowlevelrendercontextstandalone.md): A standalone Metal-backed render context for creating low-level rendering resources.
- [LowLevelRenderContextError](lowlevelrendercontexterror.md): An error thrown when binding or updating a low-level rendering resource fails.
- [LowLevelRendererError](lowlevelrenderererror.md): An error thrown when creating or configuring a renderer.
