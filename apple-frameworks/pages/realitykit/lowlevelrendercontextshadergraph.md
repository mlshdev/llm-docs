> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextshadergraph](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextshadergraph)

# LowLevelRenderContextShaderGraph

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The interface for creating Metal shader functions from a ShaderGraph.

## Declaration

```swift
protocol LowLevelRenderContextShaderGraph
```

<a id="overview"></a>

## Overview

Access this through [shaderGraph](lowlevelrendercontext/shadergraph.md).

## Topics

### Creating shader graph functions

- [makeShaderGraphFunctions(shaderGraph:constantValues:)](lowlevelrendercontextshadergraph/makeshadergraphfunctions%28shadergraph_constantvalues_%29-791l3.md): A synchronous variant of [makeShaderGraphFunctions(shaderGraph:constantValues:)](lowlevelrendercontextshadergraph/makeshadergraphfunctions%28shadergraph_constantvalues_%29-791l3.md) for non-async callers.
- [makeShaderGraphFunctions(shaderGraph:constantValues:)](lowlevelrendercontextshadergraph/makeshadergraphfunctions%28shadergraph_constantvalues_%29-9d8oc.md): Compiles a ShaderGraph into a geometry modifier and surface shader.

### Instance Methods

- [makeShaderGraphFunctions(shaderGraph:constantValues:)](lowlevelrendercontextshadergraph/makeshadergraphfunctions%28shadergraph_constantvalues_%29.md): A synchronous variant of [makeShaderGraphFunctions(shaderGraph:constantValues:)](lowlevelrendercontextshadergraph/makeshadergraphfunctions%28shadergraph_constantvalues_%29.md) for non-async callers.

## Relationships

### Conforming Types

- [LowLevelRenderContextStandalone](lowlevelrendercontextstandalone.md)

## See Also

### Render contexts

- [LowLevelRenderer](lowlevelrenderer.md): A renderer that encodes draw calls for a collection of mesh instances into a Metal command buffer.
- [LowLevelRenderContext](lowlevelrendercontext.md): An entry point for creating rendering resources and compiling materials.
- [LowLevelRenderContextLighting](lowlevelrendercontextlighting.md): The interface for creating lighting functions for use in materials.
- [LowLevelRenderContextStandalone](lowlevelrendercontextstandalone.md): A standalone Metal-backed render context for creating low-level rendering resources.
- [LowLevelRenderContextError](lowlevelrendercontexterror.md): An error thrown when binding or updating a low-level rendering resource fails.
- [LowLevelRendererError](lowlevelrenderererror.md): An error thrown when creating or configuring a renderer.
