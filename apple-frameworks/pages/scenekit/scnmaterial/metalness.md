> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/metalness](https://developer.apple.com/documentation/scenekit/scnmaterial/metalness)

# metalness (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An object that provides color values to determine how metallic the material’s surface appears.

## Declaration

```swift
var metalness: SCNMaterialProperty { get }
```

<a id="Discussion"></a>

## Discussion

This property measures only the total intensity of color values; texture contents are best defined in grayscale.

This property generally approximates aspects of a physical surface—such as index of refraction, tendency to produce sharp reflections, and tendency to produce Fresnel reflections at grazing angles—that together produce an overall metallic or nonmetallic (also called dielectric) appearance. Lower values (darker colors) cause the material to appear more like a dielectric surface. Higher values (brighter colors) cause the surface to appear more metallic.

This property applies only when the material’s [lightingModel](lightingmodel-swift.property.md) value is [physicallyBased](lightingmodel-swift.struct/physicallybased.md).

## See Also

### Visual Properties for Physically Based Shading

- [diffuse](diffuse.md): An object that manages the material’s diffuse response to lighting.
- [roughness](roughness.md): An object that provides color values to determine the apparent smoothness of the surface.

# metalness (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object that provides color values to determine how metallic the material’s surface appears.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNMaterialProperty * metalness;
```

<a id="Discussion"></a>

## Discussion

This property measures only the total intensity of color values; texture contents are best defined in grayscale.

This property generally approximates aspects of a physical surface—such as index of refraction, tendency to produce sharp reflections, and tendency to produce Fresnel reflections at grazing angles—that together produce an overall metallic or nonmetallic (also called dielectric) appearance. Lower values (darker colors) cause the material to appear more like a dielectric surface. Higher values (brighter colors) cause the surface to appear more metallic.

This property applies only when the material’s [lightingModelName](lightingmodel-swift.property.md) value is [SCNLightingModelPhysicallyBased](lightingmodel-swift.struct/physicallybased.md).

## See Also

### Visual Properties for Physically Based Shading

- [diffuse](diffuse.md): An object that manages the material’s diffuse response to lighting.
- [roughness](roughness.md): An object that provides color values to determine the apparent smoothness of the surface.
