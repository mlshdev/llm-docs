> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/ambientocclusion](https://developer.apple.com/documentation/scenekit/scnmaterial/ambientocclusion)

# ambientOcclusion (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An object that provides color values to be multiplied with the ambient light affecting the material.

## Declaration

```swift
var ambientOcclusion: SCNMaterialProperty { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to assign an ambient occlusion texture map to a surface. This property has no effect if there is no ambient light in the scene. If this property is not `nil`, SceneKit ignores the [ambient](ambient.md) property.

When using physically-based shading (see [physicallyBased](lightingmodel-swift.struct/physicallybased.md)), ambient occlusion approximates large-scale surface details that obscure global illumination.

## See Also

### Visual Properties for Special Effects

- [normal](normal.md): An object that defines the nominal orientation of the surface at each point for use in lighting.
- [displacement](displacement.md)
- [emission](emission.md): An object that defines the color emitted by each point on a surface.
- [selfIllumination](selfillumination.md): An object that provides color values representing the global illumination of the surface.

# ambientOcclusion (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that provides color values to be multiplied with the ambient light affecting the material.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNMaterialProperty * ambientOcclusion;
```

<a id="Discussion"></a>

## Discussion

Use this property to assign an ambient occlusion texture map to a surface. This property has no effect if there is no ambient light in the scene. If this property is not `nil`, SceneKit ignores the [ambient](ambient.md) property.

When using physically-based shading (see [SCNLightingModelPhysicallyBased](lightingmodel-swift.struct/physicallybased.md)), ambient occlusion approximates large-scale surface details that obscure global illumination.

## See Also

### Visual Properties for Special Effects

- [normal](normal.md): An object that defines the nominal orientation of the surface at each point for use in lighting.
- [displacement](displacement.md)
- [emission](emission.md): An object that defines the color emitted by each point on a surface.
- [selfIllumination](selfillumination.md): An object that provides color values representing the global illumination of the surface.
