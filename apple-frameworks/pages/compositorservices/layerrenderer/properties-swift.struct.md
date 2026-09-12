> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/properties-swift.struct](https://developer.apple.com/documentation/compositorservices/layerrenderer/properties-swift.struct)

# LayerRenderer.Properties

**Framework:** Compositor Services  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that describes the organization of the layer renderer’s textures and the relationships between those textures and the views you use for drawing.

## Declaration

```swift
struct Properties
```

## Mentioned In

- [Drawing fully immersive content using Metal](../drawing-fully-immersive-content-using-metal.md)

<a id="overview"></a>

## Overview

Use the layer’s properties to configure other parts of your app. For example, use them to configure your app’s render pipeline.

You can obtain layer properties directly from your layer. If you don’t yet have the [LayerRenderer](../layerrenderer.md) type, you can create an equivalent set of properties using the initializer for this type.

## Topics

### Creating representative properties

- [init(configuration:)](properties-swift.struct/init%28configuration_%29.md): Creates a set of properties using the specified configuration values.

### Getting view port information

- [viewCount](properties-swift.struct/viewcount.md): The number of views that you must fill with content.

### Getting the layer’s texture topology

- [textureTopologies](properties-swift.struct/texturetopologies.md): The texture topologies available for the layer.
- [TextureTopology](../texturetopology.md): A type that specifies the organization of one of the drawable’s textures.

### Instance Properties

- [trackingAreasMaxValue](properties-swift.struct/trackingareasmaxvalue.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Getting the layer renderer properties

- [properties](properties-swift.property.md): The configured properties of the layer renderer.
