> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/diffuse](https://developer.apple.com/documentation/scenekit/scnmaterial/diffuse)

# diffuse (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An object that manages the material’s diffuse response to lighting.

## Declaration

```swift
var diffuse: SCNMaterialProperty { get }
```

<a id="Discussion"></a>

## Discussion

Diffuse shading describes the amount and color of light reflected equally in all directions from each point on the material’s surface. The diffuse color of a pixel is independent of the point of view, so it can be thought of as a material’s “base” color or texture.

By default, the diffuse property’s [contents](../scnmaterialproperty/contents.md) object is a white color. The figure below shows the effect of setting the diffuse property’s contents to a texture image on a material whose other properties have default contents.

![](https://developer.apple.com/images/com.apple.scenekit/media-2934160@2x.png)

The material’s [lightingModel](lightingmodel-swift.property.md) property determines the formula SceneKit uses to combine its diffuse color and other visual properties with lights and other contents in a scene to produce the final color for each rendered pixel in the rendered scene. For details, see `Lighting Models`.

## See Also

### Related Documentation

- [specular](specular.md): An object that manages the material’s specular response to lighting.
- [reflective](reflective.md): An object that defines the reflected color for each point on a surface.
- [multiply](multiply.md): An object that provides color values that are multiplied with pixels in a material after all other shading is complete.
- [ambient](ambient.md): An object that manages the material’s response to ambient lighting.
- [normal](normal.md): An object that defines the nominal orientation of the surface at each point for use in lighting.
- [emission](emission.md): An object that defines the color emitted by each point on a surface.
- [transparent](transparent.md): An object that determines the opacity of each point in a material.

### Visual Properties for Physically Based Shading

- [metalness](metalness.md): An object that provides color values to determine how metallic the material’s surface appears.
- [roughness](roughness.md): An object that provides color values to determine the apparent smoothness of the surface.

# diffuse (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that manages the material’s diffuse response to lighting.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNMaterialProperty * diffuse;
```

<a id="Discussion"></a>

## Discussion

Diffuse shading describes the amount and color of light reflected equally in all directions from each point on the material’s surface. The diffuse color of a pixel is independent of the point of view, so it can be thought of as a material’s “base” color or texture.

By default, the diffuse property’s [contents](../scnmaterialproperty/contents.md) object is a white color. The figure below shows the effect of setting the diffuse property’s contents to a texture image on a material whose other properties have default contents.

![](https://developer.apple.com/images/com.apple.scenekit/media-2934160@2x.png)

The material’s [lightingModelName](lightingmodel-swift.property.md) property determines the formula SceneKit uses to combine its diffuse color and other visual properties with lights and other contents in a scene to produce the final color for each rendered pixel in the rendered scene. For details, see `Lighting Models`.

## See Also

### Related Documentation

- [specular](specular.md): An object that manages the material’s specular response to lighting.
- [reflective](reflective.md): An object that defines the reflected color for each point on a surface.
- [multiply](multiply.md): An object that provides color values that are multiplied with pixels in a material after all other shading is complete.
- [ambient](ambient.md): An object that manages the material’s response to ambient lighting.
- [normal](normal.md): An object that defines the nominal orientation of the surface at each point for use in lighting.
- [emission](emission.md): An object that defines the color emitted by each point on a surface.
- [transparent](transparent.md): An object that determines the opacity of each point in a material.

### Visual Properties for Physically Based Shading

- [metalness](metalness.md): An object that provides color values to determine how metallic the material’s surface appears.
- [roughness](roughness.md): An object that provides color values to determine the apparent smoothness of the surface.
