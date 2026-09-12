> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/texturetopology](https://developer.apple.com/documentation/compositorservices/texturetopology)

# TextureTopology

**Framework:** Compositor Services  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that specifies the organization of one of the drawable’s textures.

## Declaration

```swift
struct TextureTopology
```

<a id="overview"></a>

## Overview

Metal supports multiple organizations for the textures you use for drawing. Use this type to identify one of the organizations available to use in your app.

## Topics

### Getting the topology type

- [textureType](texturetopology/texturetype.md): The texture type value that specifies how the underlying texture organizes its views.

### Getting the array length

- [arrayLength](texturetopology/arraylength.md): The number of items in the texture array.

### Creating a topology

- [init()](texturetopology/init%28%29.md): Creates a texture topology.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Getting the layer’s texture topology

- [textureTopologies](layerrenderer/properties-swift.struct/texturetopologies.md): The texture topologies available for the layer.
