> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/transparent](https://developer.apple.com/documentation/scenekit/scnmaterial/transparent)

# transparent (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An object that determines the opacity of each point in a material.

## Declaration

```swift
var transparent: SCNMaterialProperty { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to selectively make parts of a material appear transparent. You can uniformly adjust the opacity of a material using its [transparency](transparency.md) property, or of all the content attached to a node using the node’s [opacity](../scnnode/opacity.md) property.

By default, the transparent property’s [contents](../scnmaterialproperty/contents.md) object is a fully opaque black color, causing the property to have no visible effect. Setting the transparent property’s contents to any solid color uniformly fades the opacity of the material based on that color’s opacity value. To make parts of a material appear transparent, set the property’s contents to an image or other texture-mapped content whose alpha channel defines areas of full or partial opacity.

The figure below shows a semitransparent material before and after providing a texture image for its transparent property. (To make the transparency effect more visible, a blue sphere is shown behind the transparent material.)

![](https://developer.apple.com/images/com.apple.scenekit/media-2934166@2x.png)

The [transparencyMode](transparencymode.md) property controls how SceneKit interprets color information from the transparent property’s contents.

## See Also

### Related Documentation

- [normal](normal.md): An object that defines the nominal orientation of the surface at each point for use in lighting.
- [emission](emission.md): An object that defines the color emitted by each point on a surface.

### Visual Properties for Basic Shading

- [diffuse](diffuse.md): An object that manages the material’s diffuse response to lighting.
- [ambient](ambient.md): An object that manages the material’s response to ambient lighting.
- [specular](specular.md): An object that manages the material’s specular response to lighting.
- [reflective](reflective.md): An object that defines the reflected color for each point on a surface.
- [multiply](multiply.md): An object that provides color values that are multiplied with pixels in a material after all other shading is complete.
- [shininess](shininess.md): The sharpness of specular highlights. Animatable.
- [fresnelExponent](fresnelexponent.md): A factor affecting the material’s reflectivity. Animatable.
- [locksAmbientWithDiffuse](locksambientwithdiffuse.md): A Boolean value that determines whether the material responds identically to both ambient and diffuse lighting. Animatable.

# transparent (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that determines the opacity of each point in a material.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNMaterialProperty * transparent;
```

<a id="Discussion"></a>

## Discussion

Use this property to selectively make parts of a material appear transparent. You can uniformly adjust the opacity of a material using its [transparency](transparency.md) property, or of all the content attached to a node using the node’s [opacity](../scnnode/opacity.md) property.

By default, the transparent property’s [contents](../scnmaterialproperty/contents.md) object is a fully opaque black color, causing the property to have no visible effect. Setting the transparent property’s contents to any solid color uniformly fades the opacity of the material based on that color’s opacity value. To make parts of a material appear transparent, set the property’s contents to an image or other texture-mapped content whose alpha channel defines areas of full or partial opacity.

The figure below shows a semitransparent material before and after providing a texture image for its transparent property. (To make the transparency effect more visible, a blue sphere is shown behind the transparent material.)

![](https://developer.apple.com/images/com.apple.scenekit/media-2934166@2x.png)

The [transparencyMode](transparencymode.md) property controls how SceneKit interprets color information from the transparent property’s contents.

## See Also

### Related Documentation

- [normal](normal.md): An object that defines the nominal orientation of the surface at each point for use in lighting.
- [emission](emission.md): An object that defines the color emitted by each point on a surface.

### Visual Properties for Basic Shading

- [diffuse](diffuse.md): An object that manages the material’s diffuse response to lighting.
- [ambient](ambient.md): An object that manages the material’s response to ambient lighting.
- [specular](specular.md): An object that manages the material’s specular response to lighting.
- [reflective](reflective.md): An object that defines the reflected color for each point on a surface.
- [multiply](multiply.md): An object that provides color values that are multiplied with pixels in a material after all other shading is complete.
- [shininess](shininess.md): The sharpness of specular highlights. Animatable.
- [fresnelExponent](fresnelexponent.md): A factor affecting the material’s reflectivity. Animatable.
- [locksAmbientWithDiffuse](locksambientwithdiffuse.md): A Boolean value that determines whether the material responds identically to both ambient and diffuse lighting. Animatable.
