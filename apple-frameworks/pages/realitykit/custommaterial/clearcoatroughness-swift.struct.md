> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/clearcoatroughness-swift.struct](https://developer.apple.com/documentation/realitykit/custommaterial/clearcoatroughness-swift.struct)

# CustomMaterial.ClearcoatRoughness

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

An object that defines the degree to which an entity’s clear, shiny coating scatters light to create soft highlights.

## Declaration

```swift
struct ClearcoatRoughness
```

<a id="overview"></a>

## Overview

An entity in RealityKit can display a clearcoat, which is a separate layer of transparent specular highlights used to simulate a clear coating, like on a car or the surface of lacquered objects. Use this object to specify a clearcoat roughness value and indicate how much the clearcoat scatters light that bounces off of it, which softens and disperses the highlights.

For information, see [clearcoatRoughness](clearcoatroughness-swift.property.md).

## Topics

### Creating a clearcoat roughness object

- [init(floatLiteral:)](clearcoatroughness-swift.struct/init%28floatliteral_%29.md): Creates a clearcoat object using a single value.
- [init(scale:texture:)](clearcoatroughness-swift.struct/init%28scale_texture_%29.md): Creates a clearcoat object using a single value or a texture.
- [init(\_:)](clearcoatroughness-swift.struct/init%28__%29.md): Creates a custom clearcoat object from a physically based material’s clearcoat property.

### Accessing clearcoat roughness values

- [scale](clearcoatroughness-swift.struct/scale.md): The clearcoat intensity specified as a single value.
- [texture](clearcoatroughness-swift.struct/texture.md): The clearcoat intensity specified using a UV-mapped image.

## Relationships

### Conforms To

- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
