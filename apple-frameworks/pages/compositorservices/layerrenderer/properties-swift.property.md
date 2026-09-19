> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/layerrenderer/properties-swift.property

# properties

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The configured properties of the layer renderer.

## Declaration

```swift
var properties: LayerRenderer.Properties { get }
```

<a id="discussion"></a>

## Discussion

The layer properties include details about the layer’s textures, such as their organization and the location of drawable views in those textures.

## See Also

### Getting the layer renderer properties

- [LayerRenderer.Properties](properties-swift.struct.md): A type that describes the organization of the layer renderer’s textures and the relationships between those textures and the views you use for drawing.
