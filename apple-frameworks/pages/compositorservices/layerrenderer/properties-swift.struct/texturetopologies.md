> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/properties-swift.struct/texturetopologies](https://developer.apple.com/documentation/compositorservices/layerrenderer/properties-swift.struct/texturetopologies)

# textureTopologies

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The texture topologies available for the layer.

## Declaration

```swift
var textureTopologies: [TextureTopology] { get }
```

<a id="discussion"></a>

## Discussion

Use the topology information to allocate the resources you need to manage your Metal data structures.

## See Also

### Getting the layer’s texture topology

- [TextureTopology](../../texturetopology.md): A type that specifies the organization of one of the drawable’s textures.
