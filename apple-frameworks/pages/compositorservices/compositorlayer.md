> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/compositorlayer](https://developer.apple.com/documentation/compositorservices/compositorlayer)

# CompositorLayer

**Framework:** CompositorServices  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that you use with an immersive space to display fully immersive content using Metal.

## Declaration

```swift
struct CompositorLayer
```

```swift
@MainActor @preconcurrency struct CompositorLayer
```

## Mentioned In

- [Drawing fully immersive content using Metal](drawing-fully-immersive-content-using-metal.md)

<a id="overview"></a>

## Overview

Use a [CompositorLayer](compositorlayer.md) to specify the content of an [ImmersiveSpace](https://developer.apple.com/documentation/swiftui/immersivespace) when you want to render that content yourself using Metal. When you present a space with this content, Compositor Services creates a [LayerRenderer](layerrenderer.md) type for you to use with your rendering code. The layer renderer provides configuration details, timing information, and the Metal types and information you need to configure your rendering loop and manage the rendering process.

The following example shows a [ImmersiveSpace](https://developer.apple.com/documentation/swiftui/immersivespace) that uses a [CompositorLayer](compositorlayer.md) to specify its content. Use the closure for the [CompositorLayer](compositorlayer.md) to set up and start your Metal rendering code. In this example, Compositor Services creates the layer using a default set of Metal configuration options. To customize the configuration of your Metal rendering environment, pass a custom [CompositorLayerConfiguration](compositorlayerconfiguration.md) type to your [CompositorLayer](compositorlayer.md) at initialization time.

```swift
ImmersiveSpace(id: "MyContent") {
    CompositorLayer { layerRenderer in
        // Set up and run the Metal render loop.
        let renderThread = Thread {
            let engine = my_engine_create(layerRenderer)
            my_engine_render_loop(engine)
        }
        renderThread.name = "Render Thread"
        renderThread.start()
    }
}
```

For more information about how to set up and start your Metal rendering engine, see [Drawing fully immersive content using Metal](drawing-fully-immersive-content-using-metal.md).

## Topics

### Initializers

- [init(configuration:renderer:)](compositorlayer/init%28configuration_renderer_%29-2uxn7.md): Creates a [CompositorLayer](compositorlayer.md) instance.
- [init(configuration:renderer:)](compositorlayer/init%28configuration_renderer_%29-81vbz.md)
- [init(configuration:renderer:\_:)](compositorlayer/init%28configuration_renderer___%29.md): Deprecated.

## Relationships

### Conforms To

- [CompositorContent](https://developer.apple.com/documentation/swiftui/compositorcontent)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ImmersiveSpaceContent](https://developer.apple.com/documentation/swiftui/immersivespacecontent)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App integration

- [Drawing fully immersive content using Metal](drawing-fully-immersive-content-using-metal.md): Create a fully immersive experience in visionOS using a custom Metal-based rendering engine.
- [Interacting with virtual content blended with passthrough](interacting-with-virtual-content-blended-with-passthrough.md): Present a mixed immersion style space to draw content in a person’s surroundings, and choose how upper limbs appear with respect to rendered content.
- [Rendering hover effects in Metal immersive apps](rendering_hover_effects_in_metal_immersive_apps.md): Change the appearance of a rendered onscreen element when a player gazes at it.
- [CompositorLayerConfiguration](compositorlayerconfiguration.md): An interface for specifying the texture configurations and rendering behaviors to use with your Metal rendering engine.
- [DefaultCompositorLayerConfiguration](defaultcompositorlayerconfiguration.md): A type that configures the layer with the default texture configurations and rendering behaviors for the current device.
