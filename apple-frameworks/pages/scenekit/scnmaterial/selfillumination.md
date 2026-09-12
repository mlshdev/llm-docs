> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/selfillumination](https://developer.apple.com/documentation/scenekit/scnmaterial/selfillumination)

# selfIllumination (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An object that provides color values representing the global illumination of the surface.

## Declaration

```swift
var selfIllumination: SCNMaterialProperty { get }
```

<a id="Discussion"></a>

## Discussion

Self-illumination applies to all materials, but is especially useful for those using physically-based shading (see [physicallyBased](lightingmodel-swift.struct/physicallybased.md)). Physically-based materials work best with environment-based lighting (see the [SCNScene](../scnscene.md) property [lightingEnvironment](../scnscene/lightingenvironment.md)), but for some materials it can be useful to let a surface itself define part of its lighting—for example, an object whose position obscures it from the “sky” that provides the main lighting environment. When you assign contents to this property, they override the environmental lighting contribution to diffuse shading, but environmental lighting still contributes to specular effects.

## See Also

### Visual Properties for Special Effects

- [normal](normal.md): An object that defines the nominal orientation of the surface at each point for use in lighting.
- [displacement](displacement.md)
- [emission](emission.md): An object that defines the color emitted by each point on a surface.
- [ambientOcclusion](ambientocclusion.md): An object that provides color values to be multiplied with the ambient light affecting the material.

# selfIllumination (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that provides color values representing the global illumination of the surface.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNMaterialProperty * selfIllumination;
```

<a id="Discussion"></a>

## Discussion

Self-illumination applies to all materials, but is especially useful for those using physically-based shading (see [SCNLightingModelPhysicallyBased](lightingmodel-swift.struct/physicallybased.md)). Physically-based materials work best with environment-based lighting (see the [SCNScene](../scnscene.md) property [lightingEnvironment](../scnscene/lightingenvironment.md)), but for some materials it can be useful to let a surface itself define part of its lighting—for example, an object whose position obscures it from the “sky” that provides the main lighting environment. When you assign contents to this property, they override the environmental lighting contribution to diffuse shading, but environmental lighting still contributes to specular effects.

## See Also

### Visual Properties for Special Effects

- [normal](normal.md): An object that defines the nominal orientation of the surface at each point for use in lighting.
- [displacement](displacement.md)
- [emission](emission.md): An object that defines the color emitted by each point on a surface.
- [ambientOcclusion](ambientocclusion.md): An object that provides color values to be multiplied with the ambient light affecting the material.
