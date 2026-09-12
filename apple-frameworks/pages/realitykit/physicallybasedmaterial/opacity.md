> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/opacity](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/opacity)

# PhysicallyBasedMaterial.Opacity

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An object that defines the opacity of an entity.

## Declaration

```swift
struct Opacity
```

## Topics

### Creating an opacity object

- [init(floatLiteral:)](opacity/init%28floatliteral_%29.md): Creates an opacity object using a single value.
- [init(scale:texture:)](opacity/init%28scale_texture_%29.md): Creates an opacity object using a single value or a texture.
- [init(\_:)](opacity/init%28__%29.md): Creates an opacity object using a custom material’s opacity property.

### Accessing opacity values

- [texture](opacity/texture.md): The amount of opacity specified using a UV-mapped image.
- [textureSemantic](opacity/texturesemantic.md): The intended use of the object’s texture property.
- [scale](opacity/scale.md)
- [opacityThreshold](opacitythreshold.md): A threshold below which RealityKit ignores opacity.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Specifying opacity

- [PhysicallyBasedMaterial.Blending.opaque](blending-swift.enum/opaque.md): An opaque surface.
- [PhysicallyBasedMaterial.Blending.transparent(opacity:)](blending-swift.enum/transparent%28opacity_%29.md): A surface that’s transparent.
- [opacityThreshold](opacitythreshold.md): A threshold below which RealityKit ignores opacity.
