> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/configuration-swift.struct](https://developer.apple.com/documentation/compositorservices/layerrenderer/configuration-swift.struct)

# LayerRenderer.Configuration

**Framework:** Compositor Services  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that stores the texture formats, layout information, and other details you use to configure your rendering loop code.

## Declaration

```swift
struct Configuration
```

## Mentioned In

- [Defining layer renderer quality](../defining-layer-renderer-quality.md)

<a id="overview"></a>

## Overview

A [LayerRenderer.Configuration](configuration-swift.struct.md) type stores the configuration options for your app’s [LayerRenderer](../layerrenderer.md) object. When configuring your app’s [CompositorLayer](../compositorlayer.md) type, use this type to specify information about the texture layouts, pixel formats, and rendering options you want. The system uses the provided information to initialize the [LayerRenderer](../layerrenderer.md) object. It also uses the information to create the Metal textures and other data structures that you use for each frame of content.

You don’t create this type directly. When implementing the [makeConfiguration(capabilities:configuration:)](../compositorlayerconfiguration/makeconfiguration%28capabilities_configuration_%29.md) method of your [CompositorLayerConfiguration](../compositorlayerconfiguration.md) type, the system passes a set of default configuration values for you to modify.

## Topics

### Configuring the color textures

- [colorFormat](configuration-swift.struct/colorformat.md): The pixel format to use for color textures.
- [colorUsage](configuration-swift.struct/colorusage.md): The texture usage value to apply to the layer’s color textures.

### Configuring the depth information

- [depthFormat](configuration-swift.struct/depthformat.md): The pixel format to use for the layer’s depth textures.
- [depthUsage](configuration-swift.struct/depthusage.md): The texture usage value to apply to the layer’s depth textures.
- [defaultDepthRange](configuration-swift.struct/defaultdepthrange.md): The distances to the far and near clipping planes that define the bounds of your content.

### Configuring the texture layout

- [layout](configuration-swift.struct/layout.md): The layout being used by the layer.
- [LayerRenderer.Layout](layout.md): Constants that specify the organization of the textures you use for drawing.

### Configuring the foveation setting

- [isFoveationEnabled](configuration-swift.struct/isfoveationenabled.md): A value that indicates if the layer is using variable rasterization rates.
- [generateFlippedRasterizationRateMaps](configuration-swift.struct/generateflippedrasterizationratemaps.md): A Boolean value that indicates whether the layer renderer provides rasterization rate maps flipped around the y-axis.

### Configurating the render context

- [drawableRenderContextStencilFormat](configuration-swift.struct/drawablerendercontextstencilformat.md): The metal pixel format matching that of the stencil texture used in the layer renderer drawable’s render context.
- [drawableRenderContextRasterSampleCount](configuration-swift.struct/drawablerendercontextrastersamplecount.md): The multisample antialiasing sample count used for rendering.

### Configuring quality level

- [maxRenderQuality](configuration-swift.struct/maxrenderquality.md): The max render quality the layer can use when drawing to the drawables.

### Instance Properties

- [supportsMTL4](configuration-swift.struct/supportsmtl4.md): Whether the layer supports drawing using Metal4, if false assumed to be using Metal3.
- [trackingAreasFormat](configuration-swift.struct/trackingareasformat.md): The pixel format used when creating the tracking areas textures for the layer.
- [trackingAreasUsage](configuration-swift.struct/trackingareasusage.md): The texture usage value used when creating the tracking areas textures for the layer.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Configuring the layer renderer

- [configuration](configuration-swift.property.md): The configuration details for the specified layer.
- [LayerRenderer.Capabilities](capabilities.md): The color formats, depth formats, and features that you can use to configure your rendering engine.
