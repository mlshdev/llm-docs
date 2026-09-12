> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/defaultcompositorlayerconfiguration](https://developer.apple.com/documentation/compositorservices/defaultcompositorlayerconfiguration)

# DefaultCompositorLayerConfiguration

**Framework:** CompositorServices  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that configures the layer with the default texture configurations and rendering behaviors for the current device.

## Declaration

```swift
@MainActor @preconcurrency struct DefaultCompositorLayerConfiguration
```

<a id="overview"></a>

## Overview

Use this type when your Metal rendering engine uses the default rendering options.

## Relationships

### Conforms To

- [CompositorLayerConfiguration](compositorlayerconfiguration.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App integration

- [Drawing fully immersive content using Metal](drawing-fully-immersive-content-using-metal.md): Create a fully immersive experience in visionOS using a custom Metal-based rendering engine.
- [Interacting with virtual content blended with passthrough](interacting-with-virtual-content-blended-with-passthrough.md): Present a mixed immersion style space to draw content in a person’s surroundings, and choose how upper limbs appear with respect to rendered content.
- [Rendering hover effects in Metal immersive apps](rendering_hover_effects_in_metal_immersive_apps.md): Change the appearance of a rendered onscreen element when a player gazes at it.
- [CompositorLayer](compositorlayer.md): A type that you use with an immersive space to display fully immersive content using Metal.
- [CompositorLayerConfiguration](compositorlayerconfiguration.md): An interface for specifying the texture configurations and rendering behaviors to use with your Metal rendering engine.
