> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/emission](https://developer.apple.com/documentation/scenekit/scnmaterial/emission)

# emission (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An object that defines the color emitted by each point on a surface.

## Declaration

```swift
var emission: SCNMaterialProperty { get }
```

<a id="Discussion"></a>

## Discussion

You can use an *emissive map* texture to simulate parts of a surface that glow with their own light. SceneKit does not treat the material as a light source—rather, the emission property determines colors for a material independent of lighting. (To create an object that appears to glow, you may wish to combine a geometry with an emissive map and additional [SCNLight](../scnlight.md) objects added to the scene.)

By default, the emissive property’s [contents](../scnmaterialproperty/contents.md) object is a black color, causing the property to have no visible effect. Setting the emissive property’s contents to any solid color adds a uniform color to the material independent of lighting. To create a selective glow effect, set the property’s contents to an image or other texture-mapped content whose glowing areas use bright colors and whose other areas use darker colors. In the darker-color portions of the emissive map (and portions with reduced opacity), the other visual properties of the material contribute to its appearance under scene lighting.

The figure below shows a material (with a texture for its [diffuse](diffuse.md) property) before and after providing an emissive map image.

![](https://developer.apple.com/images/com.apple.scenekit/media-2934165@2x.png)

## See Also

### Related Documentation

- [specular](specular.md): An object that manages the material’s specular response to lighting.
- [reflective](reflective.md): An object that defines the reflected color for each point on a surface.
- [multiply](multiply.md): An object that provides color values that are multiplied with pixels in a material after all other shading is complete.
- [ambient](ambient.md): An object that manages the material’s response to ambient lighting.
- [transparent](transparent.md): An object that determines the opacity of each point in a material.

### Visual Properties for Special Effects

- [normal](normal.md): An object that defines the nominal orientation of the surface at each point for use in lighting.
- [displacement](displacement.md)
- [selfIllumination](selfillumination.md): An object that provides color values representing the global illumination of the surface.
- [ambientOcclusion](ambientocclusion.md): An object that provides color values to be multiplied with the ambient light affecting the material.

# emission (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that defines the color emitted by each point on a surface.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNMaterialProperty * emission;
```

<a id="Discussion"></a>

## Discussion

You can use an *emissive map* texture to simulate parts of a surface that glow with their own light. SceneKit does not treat the material as a light source—rather, the emission property determines colors for a material independent of lighting. (To create an object that appears to glow, you may wish to combine a geometry with an emissive map and additional [SCNLight](../scnlight.md) objects added to the scene.)

By default, the emissive property’s [contents](../scnmaterialproperty/contents.md) object is a black color, causing the property to have no visible effect. Setting the emissive property’s contents to any solid color adds a uniform color to the material independent of lighting. To create a selective glow effect, set the property’s contents to an image or other texture-mapped content whose glowing areas use bright colors and whose other areas use darker colors. In the darker-color portions of the emissive map (and portions with reduced opacity), the other visual properties of the material contribute to its appearance under scene lighting.

The figure below shows a material (with a texture for its [diffuse](diffuse.md) property) before and after providing an emissive map image.

![](https://developer.apple.com/images/com.apple.scenekit/media-2934165@2x.png)

## See Also

### Related Documentation

- [specular](specular.md): An object that manages the material’s specular response to lighting.
- [reflective](reflective.md): An object that defines the reflected color for each point on a surface.
- [multiply](multiply.md): An object that provides color values that are multiplied with pixels in a material after all other shading is complete.
- [ambient](ambient.md): An object that manages the material’s response to ambient lighting.
- [transparent](transparent.md): An object that determines the opacity of each point in a material.

### Visual Properties for Special Effects

- [normal](normal.md): An object that defines the nominal orientation of the surface at each point for use in lighting.
- [displacement](displacement.md)
- [selfIllumination](selfillumination.md): An object that provides color values representing the global illumination of the surface.
- [ambientOcclusion](ambientocclusion.md): An object that provides color values to be multiplied with the ambient light affecting the material.
