> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/configuration-swift.property](https://developer.apple.com/documentation/compositorservices/layerrenderer/configuration-swift.property)

# configuration

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The configuration details for the specified layer.

## Declaration

```swift
var configuration: LayerRenderer.Configuration { get }
```

<a id="discussion"></a>

## Discussion

Use the information in this property to set up your rendering loop. The layer ignores any modifications you make to the specified configuration data. To properly configure the layer, specify those details in the initializer for your [CompositorLayer](../compositorlayer.md) type.

## See Also

### Configuring the layer renderer

- [LayerRenderer.Configuration](configuration-swift.struct.md): A type that stores the texture formats, layout information, and other details you use to configure your rendering loop code.
- [LayerRenderer.Capabilities](capabilities.md): The color formats, depth formats, and features that you can use to configure your rendering engine.
