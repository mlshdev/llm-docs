> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/bentnormal-swift.struct](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/bentnormal-swift.struct)

# PhysicallyBasedMaterial.BentNormal

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The bent normal map for the entity.

## Declaration

```swift
struct BentNormal
```

<a id="overview"></a>

## Overview

*Bent normal mapping* describes the average direction of least occlusion at each surface point. This is used to modulate lighting intensity and direction of the material. Use with ambient occlusion to improve the accuracy of indirect diffuse lighting. You can generate bent normals maps from a 3D software package.

## Topics

### Accessing the texture key

- [textureKey](bentnormal-swift.struct/texturekey.md)

### Initializers

- [init(texture:)](bentnormal-swift.struct/init%28texture_%29.md)

### Instance Properties

- [texture](bentnormal-swift.struct/texture.md)

### Type Properties

- [textureSemantic](bentnormal-swift.struct/texturesemantic.md)

## See Also

### Configuring occlusion shading

- [bentNormal](bentnormal-swift.property.md): The bent normal map for the entity.
- [enableSpecularOcclusion](enablespecularocclusion.md): Enables specular occlusion computations.
