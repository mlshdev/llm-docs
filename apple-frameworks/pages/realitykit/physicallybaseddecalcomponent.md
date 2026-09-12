> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybaseddecalcomponent](https://developer.apple.com/documentation/realitykit/physicallybaseddecalcomponent)

# PhysicallyBasedDecalComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A component that specifies a decal to be applied on the scene. A decal is essentially a projective texture applied to any mesh on the scene. The transform of the decal is inherited from the entity’s transform. The decal is projected along the local space negative z onto the meshes within its volume. All decal textures expect 2D texture resources. Decal textures do not support custom sampler, UV index, or swizzle options from [PhysicallyBasedMaterial](physicallybasedmaterial.md) parameter types. All textures are sampled using bilinear filtering, projected UVs from the decal volume, and fixed channel mapping. Decals are available on devices with Apple6 GPU family feature support.

## Declaration

```swift
struct PhysicallyBasedDecalComponent
```

## Topics

### Creating a decal component

- [init(baseColor:)](physicallybaseddecalcomponent/init%28basecolor_%29.md): Creates a new instance with [PhysicallyBasedMaterial.BaseColor](physicallybasedmaterial/basecolor-swift.struct.md). The tint color is multiplied with the baseColor. If base color texture is not specified, the tint color is applied as a solid color.

### Configuring decal appearance

- [opacity](physicallybaseddecalcomponent/opacity.md): An optional opacity texture for the decal.

### Controlling decal rendering

- [layers](physicallybaseddecalcomponent/layers.md): The layers this decal affects. Only entities whose [layers](renderlayercomponent/layers.md) intersect with these layers will be affected.
- [sortOrder](physicallybaseddecalcomponent/sortorder.md): The sort layer for the decal. Higher layers show up on top of lower layers.
- [receiverEntities](physicallybaseddecalcomponent/receiverentities.md): An optional set of receiver entities that are not part of any layers. The limit on the number of receiver entities is 8, extra entities are ignored.

### Initializers

- [init()](physicallybaseddecalcomponent/init%28%29.md): Creates a new instance without a base color.

### Instance Properties

- [baseColor](physicallybaseddecalcomponent/basecolor.md): The optional base color texture for the decal. Expects pre-multiplied alpha texture.
- [bounds](physicallybaseddecalcomponent/bounds.md): The bounds of the decal volume defined in entity local space.
- [emissive](physicallybaseddecalcomponent/emissive.md): An optional emissive texture for the decal.
- [metallic](physicallybaseddecalcomponent/metallic.md): An optional metallic texture for the decal.
- [normal](physicallybaseddecalcomponent/normal.md): An optional normal texture for the decal.
- [roughness](physicallybaseddecalcomponent/roughness.md): An optional roughness texture for the decal.
- [specular](physicallybaseddecalcomponent/specular.md): An optional specular texture for the decal.

## Relationships

### Conforms To

- [Component](component.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
