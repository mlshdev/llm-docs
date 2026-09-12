> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone)

# LowLevelRenderContextStandalone

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A standalone Metal-backed render context for creating low-level rendering resources.

## Declaration

```swift
final class LowLevelRenderContextStandalone
```

<a id="overview"></a>

## Overview

`LowLevelRenderContextStandalone` is a concrete implementation of [LowLevelRenderContext](lowlevelrendercontext.md), [LowLevelRenderContextLighting](lowlevelrendercontextlighting.md), and [LowLevelRenderContextShaderGraph](lowlevelrendercontextshadergraph.md). Create one using [init(configuration:)](lowlevelrendercontextstandalone/init%28configuration_%29.md) , or [init(configuration:resources:)](lowlevelrendercontextstandalone/init%28configuration_resources_%29.md) with a prepared [LowLevelRenderContextStandalone.Resources](lowlevelrendercontextstandalone/resources.md) instance.

## Topics

### Creating a render context

- [init(configuration:resources:)](lowlevelrendercontextstandalone/init%28configuration_resources_%29.md): Creates a standalone render context using resources prepared ahead of time.
- [init(configuration:)](lowlevelrendercontextstandalone/init%28configuration_%29.md): Creates a standalone render context, asynchronously preparing required resources.
- [LowLevelRenderContextStandalone.Configuration](lowlevelrendercontextstandalone/configuration.md): Configuration for creating a standalone render context backed by a Metal device.
- [LowLevelRenderContextStandalone.Resources](lowlevelrendercontextstandalone/resources.md): Resources needed for a render context

### Creating lighting functions

- [makeImageBasedLightingFunction()](lowlevelrendercontextstandalone/makeimagebasedlightingfunction%28%29.md): Returns a lighting function using image-based lighting (IBL).
- [makeUnlitLightingFunction()](lowlevelrendercontextstandalone/makeunlitlightingfunction%28%29.md): Returns an unlit lighting function that emits the surface emissive color directly, without any lighting calculations.

### Default Implementations

- [LowLevelRenderContext Implementations](lowlevelrendercontextstandalone/lowlevelrendercontext-implementations.md)
- [LowLevelRenderContextLighting Implementations](lowlevelrendercontextstandalone/lowlevelrendercontextlighting-implementations.md)
- [LowLevelRenderContextShaderGraph Implementations](lowlevelrendercontextstandalone/lowlevelrendercontextshadergraph-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [LowLevelRenderContext](lowlevelrendercontext.md)
- [LowLevelRenderContextLighting](lowlevelrendercontextlighting.md)
- [LowLevelRenderContextShaderGraph](lowlevelrendercontextshadergraph.md)

## See Also

### Render contexts

- [LowLevelRenderer](lowlevelrenderer.md): A renderer that encodes draw calls for a collection of mesh instances into a Metal command buffer.
- [LowLevelRenderContext](lowlevelrendercontext.md): An entry point for creating rendering resources and compiling materials.
- [LowLevelRenderContextLighting](lowlevelrendercontextlighting.md): The interface for creating lighting functions for use in materials.
- [LowLevelRenderContextShaderGraph](lowlevelrendercontextshadergraph.md): The interface for creating Metal shader functions from a ShaderGraph.
- [LowLevelRenderContextError](lowlevelrendercontexterror.md): An error thrown when binding or updating a low-level rendering resource fails.
- [LowLevelRendererError](lowlevelrenderererror.md): An error thrown when creating or configuring a renderer.
