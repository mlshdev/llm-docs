> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/capabilities](https://developer.apple.com/documentation/compositorservices/layerrenderer/capabilities)

# LayerRenderer.Capabilities

**Framework:** Compositor Services  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

The color formats, depth formats, and features that you can use to configure your rendering engine.

## Declaration

```swift
struct Capabilities
```

<a id="overview"></a>

## Overview

A [LayerRenderer.Capabilities](capabilities.md) type provides information about the capabilities of the current device. Simulator and devices support different sets of options. Use the information in this type to specify the configuration details for your layer.

## Topics

### Getting the supported formats

- [supportedColorFormats](capabilities/supportedcolorformats.md): Deprecated. An array of color formats that the layer supports for its textures.
- [supportedDepthFormats](capabilities/supporteddepthformats.md): The list of depth formats that the layer supports

### Getting the supported layouts

- [supportedLayouts(options:)](capabilities/supportedlayouts%28options_%29.md): Returns an array of texture layouts that the layer supports.
- [LayerRenderer.Capabilities.SupportedLayoutsOptions](capabilities/supportedlayoutsoptions.md): Options you can use to filter the supported layouts for a layer.

### Getting the supported layer features

- [supportsFoveation](capabilities/supportsfoveation.md): A Boolean value that indicates whether the layer supports variable rasterization rates.

### Getting the minimum near plane distance

- [supportedMinimumNearPlaneDistance](capabilities/supportedminimumnearplanedistance.md): The minimum distance in meters to the layer’s near projection plane.

### Determining supported stencil formats

- [drawableRenderContextSupportedStencilFormats](capabilities/drawablerendercontextsupportedstencilformats.md): An array of metal pixel formats the layer renderer drawable supports with its render context.

### Getting render quality

- [defaultRenderQuality](capabilities/defaultrenderquality.md): The default render quality used on this platform.

### Structures

- [LayerRenderer.Capabilities.SupportedColorFormatsOptions](capabilities/supportedcolorformatsoptions.md): Options you can use to filter the supported color formats for a layer textures.

### Instance Properties

- [supportedTrackingAreasFormats](capabilities/supportedtrackingareasformats.md): An array of tracking areas formats that the layer supports for its textures.

### Instance Methods

- [supportedColorFormats(options:)](capabilities/supportedcolorformats%28options_%29.md): Returns an array of formats that the layer supports for its color textures

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Configuring the layer renderer

- [configuration](configuration-swift.property.md): The configuration details for the specified layer.
- [LayerRenderer.Configuration](configuration-swift.struct.md): A type that stores the texture formats, layout information, and other details you use to configure your rendering loop code.
