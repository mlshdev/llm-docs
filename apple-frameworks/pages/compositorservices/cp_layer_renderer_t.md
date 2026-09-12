> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_t](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_t)

# cp_layer_renderer_t

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Type Alias  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that provides the Metal types and timing information you need to draw your content.

## Declaration

```objectivec
typedef CP_OBJECT_cp_layer_renderer * cp_layer_renderer_t;
```

<a id="discussion"></a>

## Discussion

A layer renderer type creates a bridge between a SwiftUI scene and the Metal code you use to draw fully immersive experiences. When you present an immersive space with [CompositorLayer](compositorlayer.md) content, the system creates a [CP_OBJECT_cp_layer_renderer](layerrenderer.md) type and makes it available to the content’s closure. Use the information in the layer to set up your app’s rendering loop, and to start drawing frames of content.

Each layer has information that tells the system how to configure the Metal textures and data types your app needs. Compositor Services provides a default configuration for layers, but you can customize the configuration of your layer as needed. Specify your custom configuration details using the [CompositorLayerConfiguration](compositorlayerconfiguration.md) protocol and pass a type with those details to the initializer for your immersive space’s content . Use the layer’s capability information to validate any configuration choices you make.

For information about how to create and configure a layer and use it to run your rendering loop, see [Drawing fully immersive content using Metal](drawing-fully-immersive-content-using-metal.md).

## See Also

### Getting the layer type

- [CP_OBJECT_cp_layer_renderer](layerrenderer.md): A type that provides the Metal types and timing information you need to draw your content.
