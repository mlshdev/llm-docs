> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/compositorlayerconfiguration](https://developer.apple.com/documentation/compositorservices/compositorlayerconfiguration)

# CompositorLayerConfiguration

**Framework:** CompositorServices  
**Kind:** Protocol  
**Availability:** macOS 26.0+ · visionOS 1.0+

An interface for specifying the texture configurations and rendering behaviors to use with your Metal rendering engine.

## Declaration

```swift
@MainActor @preconcurrency protocol CompositorLayerConfiguration
```

## Mentioned In

- [Drawing fully immersive content using Metal](drawing-fully-immersive-content-using-metal.md)

<a id="overview"></a>

## Overview

If you use a custom configuration for your Metal rendering engine, adopt this protocol in a custom type and use it to specify the configuration options you need. In your custom type, implement the [makeConfiguration(capabilities:configuration:)](compositorlayerconfiguration/makeconfiguration%28capabilities_configuration_%29.md) method and use it to modify the default set of rendering options. When specifying your configuration, validate choices against the actual capabilities of the current device.

For information on how to specify custom configuration options for your rendering engine, see [Drawing fully immersive content using Metal](drawing-fully-immersive-content-using-metal.md).

## Topics

### Specifying the custom options

- [makeConfiguration(capabilities:configuration:)](compositorlayerconfiguration/makeconfiguration%28capabilities_configuration_%29.md): Creates and returns a type that contains the rendering options for Compositor Services to use when configuring a layer.

### Getting the default options

- [default](compositorlayerconfiguration/default.md): Conforms when `Self` is `DefaultCompositorLayerConfiguration`. The default configuration options that Compositor Services uses to configure the layer.

## Relationships

### Conforming Types

- [DefaultCompositorLayerConfiguration](defaultcompositorlayerconfiguration.md)

## See Also

### App integration

- [Drawing fully immersive content using Metal](drawing-fully-immersive-content-using-metal.md): Create a fully immersive experience in visionOS using a custom Metal-based rendering engine.
- [Interacting with virtual content blended with passthrough](interacting-with-virtual-content-blended-with-passthrough.md): Present a mixed immersion style space to draw content in a person’s surroundings, and choose how upper limbs appear with respect to rendered content.
- [Rendering hover effects in Metal immersive apps](rendering_hover_effects_in_metal_immersive_apps.md): Change the appearance of a rendered onscreen element when a player gazes at it.
- [CompositorLayer](compositorlayer.md): A type that you use with an immersive space to display fully immersive content using Metal.
- [DefaultCompositorLayerConfiguration](defaultcompositorlayerconfiguration.md): A type that configures the layer with the default texture configurations and rendering behaviors for the current device.
