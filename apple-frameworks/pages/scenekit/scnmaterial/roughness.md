> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/roughness](https://developer.apple.com/documentation/scenekit/scnmaterial/roughness)

# roughness (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An object that provides color values to determine the apparent smoothness of the surface.

## Declaration

```swift
var roughness: SCNMaterialProperty { get }
```

<a id="Discussion"></a>

## Discussion

This property measures only the total intensity of color values; texture contents are best defined in grayscale.

This property approximates the level of microscopic detail—for example tiny bumps and cracks—in a surface. By approximating these “microfacets” as a single term, this property helps produce lighting calculations that resemble the energy-conserving laws of real-world physics, resulting in more realistic variation between matte and shiny surfaces. Lower values (darker colors) cause the material to appear shiny, with well-defined specular highlights. Higher values (brighter colors) cause specular highlights to spread out and the diffuse color of the material to become more retroreflective.

This property applies only when the material’s [lightingModel](lightingmodel-swift.property.md) value is [physicallyBased](lightingmodel-swift.struct/physicallybased.md).

## See Also

### Visual Properties for Physically Based Shading

- [diffuse](diffuse.md): An object that manages the material’s diffuse response to lighting.
- [metalness](metalness.md): An object that provides color values to determine how metallic the material’s surface appears.

# roughness (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object that provides color values to determine the apparent smoothness of the surface.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNMaterialProperty * roughness;
```

<a id="Discussion"></a>

## Discussion

This property measures only the total intensity of color values; texture contents are best defined in grayscale.

This property approximates the level of microscopic detail—for example tiny bumps and cracks—in a surface. By approximating these “microfacets” as a single term, this property helps produce lighting calculations that resemble the energy-conserving laws of real-world physics, resulting in more realistic variation between matte and shiny surfaces. Lower values (darker colors) cause the material to appear shiny, with well-defined specular highlights. Higher values (brighter colors) cause specular highlights to spread out and the diffuse color of the material to become more retroreflective.

This property applies only when the material’s [lightingModelName](lightingmodel-swift.property.md) value is [SCNLightingModelPhysicallyBased](lightingmodel-swift.struct/physicallybased.md).

## See Also

### Visual Properties for Physically Based Shading

- [diffuse](diffuse.md): An object that manages the material’s diffuse response to lighting.
- [metalness](metalness.md): An object that provides color values to determine how metallic the material’s surface appears.
