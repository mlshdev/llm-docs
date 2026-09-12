> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer](https://developer.apple.com/documentation/compositorservices/layerrenderer)

# LayerRenderer (Swift)

**Framework:** Compositor Services  
**Kind:** Class  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that provides the Metal types and timing information you need to draw your content.

## Declaration

```swift
class LayerRenderer
```

## Mentioned In

- [Drawing fully immersive content using Metal](drawing-fully-immersive-content-using-metal.md)

<a id="overview"></a>

## Overview

A layer renderer type creates a bridge between a SwiftUI scene and the Metal code you use to draw fully immersive experiences. When you present an immersive space with [CompositorLayer](compositorlayer.md) content, the system creates a `LayerRenderer` type and makes it available to the content’s closure. Use the information in the layer renderer to set up your app’s rendering loop, and to start drawing frames of content.

Each layer renderer has information that tells the system how to configure the Metal textures and data types your app needs. Compositor Services provides a default configuration for layers, but you can customize the configuration as needed. Specify your custom configuration details using the [CompositorLayerConfiguration](compositorlayerconfiguration.md) protocol and pass a type with those details to the initializer for your immersive space’s content. Use the layer renderer’s capability information to validate any configuration choices you make.

For information about how to create and configure a layer renderer and use it to run your rendering loop, see [Drawing fully immersive content using Metal](drawing-fully-immersive-content-using-metal.md).

## Topics

### Configuring the layer renderer

- [configuration](layerrenderer/configuration-swift.property.md): The configuration details for the specified layer.
- [LayerRenderer.Configuration](layerrenderer/configuration-swift.struct.md): A type that stores the texture formats, layout information, and other details you use to configure your rendering loop code.
- [LayerRenderer.Capabilities](layerrenderer/capabilities.md): The color formats, depth formats, and features that you can use to configure your rendering engine.

### Getting the layer renderer properties

- [properties](layerrenderer/properties-swift.property.md): The configured properties of the layer renderer.
- [LayerRenderer.Properties](layerrenderer/properties-swift.struct.md): A type that describes the organization of the layer renderer’s textures and the relationships between those textures and the views you use for drawing.

### Getting the GPU device

- [device](layerrenderer/device.md): The GPU device that the layer renderer uses for drawing operations

### Managing the rendering loop

- [state](layerrenderer/state-swift.property.md): A value that indicates whether the layer renderer is currently visible and ready for you to draw content.
- [waitUntilRunning()](layerrenderer/waituntilrunning%28%29.md): Stops further execution of your code until the layer renderer leaves the paused state.
- [LayerRenderer.State](layerrenderer/state-swift.enum.md): The states of the layer renderer, which tell you how to proceed with drawing operations.
- [LayerRenderer.Clock](layerrenderer/clock.md): A type that supports operations that require a precise time measurement.

### Drawing a frame of content

- [queryNextFrame()](layerrenderer/querynextframe%28%29.md): Returns the next frame to use for drawing.
- [LayerRenderer.Frame](layerrenderer/frame.md): A type that provides access to the timing information and data types you need to render a single frame of content.
- [LayerRenderer.Drawable](layerrenderer/drawable.md): A type that provides the textures and information you need to draw a frame of content.

### Configuring the frame update rate

- [minimumFrameRepeatCount](layerrenderer/minimumframerepeatcount.md): The number of additional frames for which the system displays the same content.

### Defining quality level

- [renderQuality](layerrenderer/renderquality-swift.property.md): Get the render quality to be used by the drawables.
- [defaultRenderQuality](layerrenderer/capabilities/defaultrenderquality.md): The default render quality used on this platform.
- [maxRenderQuality](layerrenderer/configuration-swift.struct/maxrenderquality.md): The max render quality the layer can use when drawing to the drawables.
- [Defining layer renderer quality](defining-layer-renderer-quality.md): Declare the render quality of your textures to enable high-quality rendering.

### Structures

- [LayerRenderer.RenderQuality](layerrenderer/renderquality-swift.struct.md): Render quality controls the quality which drawing happens at.

### Instance Properties

- [commandQueue](layerrenderer/commandqueue.md): Returns the command queue that the layer uses for drawing operations.
- [onSpatialEvent](layerrenderer/onspatialevent-2jg60.md): A closure that receives the spatial events updates from the LayerRenderer
- [onSpatialEvent](layerrenderer/onspatialevent-inq8.md): A closure that receives the spatial events updates from the LayerRenderer

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Render-loop setup

- [LayerRenderer.Frame](layerrenderer/frame.md): A type that provides access to the timing information and data types you need to render a single frame of content.

# CP_OBJECT_cp_layer_renderer (Objective-C)

**Framework:** Compositor Services  
**Kind:** Class  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that provides the Metal types and timing information you need to draw your content.

## Declaration

```objectivec
@interface CP_OBJECT_cp_layer_renderer : NSObject
```

## Mentioned In

- [Drawing fully immersive content using Metal](drawing-fully-immersive-content-using-metal.md)

<a id="overview"></a>

## Overview

A layer renderer type creates a bridge between a SwiftUI scene and the Metal code you use to draw fully immersive experiences. When you present an immersive space with [CompositorLayer](compositorlayer.md) content, the system creates a `LayerRenderer` type and makes it available to the content’s closure. Use the information in the layer renderer to set up your app’s rendering loop, and to start drawing frames of content.

Each layer renderer has information that tells the system how to configure the Metal textures and data types your app needs. Compositor Services provides a default configuration for layers, but you can customize the configuration as needed. Specify your custom configuration details using the [CompositorLayerConfiguration](compositorlayerconfiguration.md) protocol and pass a type with those details to the initializer for your immersive space’s content. Use the layer renderer’s capability information to validate any configuration choices you make.

For information about how to create and configure a layer renderer and use it to run your rendering loop, see [Drawing fully immersive content using Metal](drawing-fully-immersive-content-using-metal.md).

## Topics

### Configuring the layer renderer

- [CP_OBJECT_cp_layer_renderer_configuration](cp_object_cp_layer_renderer_configuration.md)
- [CP_OBJECT_cp_layer_renderer_capabilities](cp_object_cp_layer_renderer_capabilities.md)

### Getting the layer renderer properties

- [CP_OBJECT_cp_layer_renderer_properties](cp_object_cp_layer_renderer_properties.md)

### Getting the GPU device

- [cp_layer_renderer_get_device](layerrenderer/device.md): The GPU device that the layer renderer uses for drawing operations

### Managing the rendering loop

- [cp_layer_renderer_get_state](layerrenderer/state-swift.property.md): A value that indicates whether the layer renderer is currently visible and ready for you to draw content.
- [cp_layer_renderer_wait_until_running](layerrenderer/waituntilrunning%28%29.md): Stops further execution of your code until the layer renderer leaves the paused state.
- [cp_layer_renderer_state](layerrenderer/state-swift.enum.md): The states of the layer renderer, which tell you how to proceed with drawing operations.

### Drawing a frame of content

- [cp_drawable_t](cp_drawable_t.md): A type that provides the textures and information you need to draw a frame of content.

### Configuring the frame update rate

- [cp_layer_renderer_get_minimum_frame_repeat_count](layerrenderer/minimumframerepeatcount.md): The number of additional frames for which the system displays the same content.

### Defining quality level

- [cp_layer_renderer_get_render_quality](layerrenderer/renderquality-swift.property.md): Get the render quality to be used by the drawables.
- [Defining layer renderer quality](defining-layer-renderer-quality.md): Declare the render quality of your textures to enable high-quality rendering.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
