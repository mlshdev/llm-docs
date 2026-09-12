> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/clearcoatnormal-swift.struct](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/clearcoatnormal-swift.struct)

# PhysicallyBasedMaterial.ClearcoatNormal

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An object that defines the clearcoat normal map texture.

## Declaration

```swift
struct ClearcoatNormal
```

<a id="overview"></a>

## Overview

An entity in RealityKit can display a clearcoat, which is a separate layer of transparent specular highlights used to simulate a clear coating, like on a car or the surface of lacquered objects. Use this object to specify a clearcoat normal and vary the normal used to calculate the clearcoat. This can be used to add imperfections and waviness to the clearcoat layer.

For information, see [clearcoatNormal](clearcoatnormal-swift.property.md).

## Topics

### Initializers

- [init(\_:)](clearcoatnormal-swift.struct/init%28__%29.md): Creates a clear coat normal object from a custom material’s clear coat normal property.
- [init(texture:)](clearcoatnormal-swift.struct/init%28texture_%29.md): Creates an object from a specified texture.

### Instance Properties

- [texture](clearcoatnormal-swift.struct/texture.md): The material’s clearcoat normal map.

### Type Properties

- [textureSemantic](clearcoatnormal-swift.struct/texturesemantic.md): The intended use of the object’s texture property.
