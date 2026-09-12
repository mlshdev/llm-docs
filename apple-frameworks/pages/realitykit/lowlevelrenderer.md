> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer](https://developer.apple.com/documentation/realitykit/lowlevelrenderer)

# LowLevelRenderer

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A renderer that encodes draw calls for a collection of mesh instances into a Metal command buffer.

## Declaration

```swift
final class LowLevelRenderer
```

<a id="overview"></a>

## Overview

`LowLevelRenderer` manages camera constants, per-instance transforms, MSAA resolve, tonemapping, and optional color gamut conversion. You are responsible for creating and committing the Metal command buffer; the renderer only encodes into it.

## Topics

### Creating a renderer

- [init(configuration:renderContext:)](lowlevelrenderer/init%28configuration_rendercontext_%29.md): Creates a renderer, asynchronously compiling all required GPU resources.
- [LowLevelRenderer.Configuration](lowlevelrenderer/configuration.md): The configuration for a renderer.

### Rendering a frame

- [render(using:\_:)](lowlevelrenderer/render%28using___%29.md): Encodes draw calls for the frame into the given command buffer using a caller-controlled render callback.
- [LowLevelRenderer.RenderState](lowlevelrenderer/renderstate.md): The per-frame render state passed to the `render(using:_:)` callback.
- [LowLevelRenderer.Resources](lowlevelrenderer/resources.md): Prepared GPU resources for a renderer.

### Managing mesh instances

- [meshInstances(at:)](lowlevelrenderer/meshinstances%28at_%29.md): Returns the mesh instance array at the given slot index, or `nil` if the slot is unoccupied.
- [setMeshInstances(\_:at:)](lowlevelrenderer/setmeshinstances%28__at_%29.md): Assigns a mesh instance array to the given slot index.
- [meshInstancesArrayCount](lowlevelrenderer/meshinstancesarraycount.md): The number of mesh instance array slots.

### Culling and sorting instances

- [cullMeshInstances(\_:indices:outIndices:configuration:)](lowlevelrenderer/cullmeshinstances%28__indices_outindices_configuration_%29.md): Culls mesh instances against a frustum, writing surviving indices to an output span.
- [cullMeshInstances(\_:indices:configuration:)](lowlevelrenderer/cullmeshinstances%28__indices_configuration_%29.md): Culls mesh instances against a frustum and returns the surviving indices.
- [LowLevelRenderer.CullConfiguration](lowlevelrenderer/cullconfiguration.md): The configuration for a frustum culling operation.
- [sortMeshInstances(\_:indices:configuration:)](lowlevelrenderer/sortmeshinstances%28__indices_configuration_%29.md): Sorts the given mesh instances by sort category and, for transparent instances, by back-to-front distance from the camera.
- [LowLevelRenderer.SortConfiguration](lowlevelrenderer/sortconfiguration.md): The configuration for a mesh instance sort pass.

### Configuring cameras

- [cameras](lowlevelrenderer/cameras.md): The array of active cameras.
- [LowLevelRenderer.CameraArray](lowlevelrenderer/cameraarray.md): A mutable, fixed-capacity array of camera values.
- [LowLevelRenderer.Camera](lowlevelrenderer/camera.md): The view and projection parameters for a single camera.

### Managing color matching

- [colorMatch](lowlevelrenderer/colormatch-swift.property.md): The active color gamut conversion. The renderer applies this value only when `enableColorMatch` is `true` in `Configuration`.
- [LowLevelRenderer.ColorMatch](lowlevelrenderer/colormatch-swift.struct.md): A color gamut conversion applied during resolve.
- [setColorMatch(targetingColorSpace:)](lowlevelrenderer/setcolormatch%28targetingcolorspace_%29.md): Updates the color match by computing a gamut conversion matrix from the renderer’s working color space to the given target display color space.
- [workingColorSpace](lowlevelrenderer/workingcolorspace.md): The color space in which the renderer performs all shading calculations.

### Accessing render output

- [output](lowlevelrenderer/output-swift.property.md): The per-frame output target configuration, including color and depth textures, viewports, and render target dimensions.
- [LowLevelRenderer.Output](lowlevelrenderer/output-swift.struct.md): The per-frame output target configuration for a renderer.
- [renderTargetDescriptor](lowlevelrenderer/rendertargetdescriptor.md): The render target descriptor derived from the renderer’s configuration.

### Initializers

- [init(resources:)](lowlevelrenderer/init%28resources_%29.md): Creates a renderer using pre-compiled GPU resources.

### Instance Properties

- [time](lowlevelrenderer/time.md): The scene time, in seconds, that the renderer passes to shaders as a uniform.

## See Also

### Render contexts

- [LowLevelRenderContext](lowlevelrendercontext.md): An entry point for creating rendering resources and compiling materials.
- [LowLevelRenderContextLighting](lowlevelrendercontextlighting.md): The interface for creating lighting functions for use in materials.
- [LowLevelRenderContextShaderGraph](lowlevelrendercontextshadergraph.md): The interface for creating Metal shader functions from a ShaderGraph.
- [LowLevelRenderContextStandalone](lowlevelrendercontextstandalone.md): A standalone Metal-backed render context for creating low-level rendering resources.
- [LowLevelRenderContextError](lowlevelrendercontexterror.md): An error thrown when binding or updating a low-level rendering resource fails.
- [LowLevelRendererError](lowlevelrenderererror.md): An error thrown when creating or configuring a renderer.
