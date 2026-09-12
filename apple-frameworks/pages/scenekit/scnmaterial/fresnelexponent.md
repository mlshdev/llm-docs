> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/fresnelexponent](https://developer.apple.com/documentation/scenekit/scnmaterial/fresnelexponent)

# fresnelExponent (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A factor affecting the material’s reflectivity. Animatable.

## Declaration

```swift
var fresnelExponent: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The Fresnel exponent of a material interacts with its [reflective](reflective.md) property to determine the intensity of reflections in a surface based on its angle relative to the viewer. A higher Fresnel exponent increases the visibility of reflections when the material is viewed from a shallow angle.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Visual Properties for Basic Shading

- [diffuse](diffuse.md): An object that manages the material’s diffuse response to lighting.
- [ambient](ambient.md): An object that manages the material’s response to ambient lighting.
- [specular](specular.md): An object that manages the material’s specular response to lighting.
- [reflective](reflective.md): An object that defines the reflected color for each point on a surface.
- [multiply](multiply.md): An object that provides color values that are multiplied with pixels in a material after all other shading is complete.
- [transparent](transparent.md): An object that determines the opacity of each point in a material.
- [shininess](shininess.md): The sharpness of specular highlights. Animatable.
- [locksAmbientWithDiffuse](locksambientwithdiffuse.md): A Boolean value that determines whether the material responds identically to both ambient and diffuse lighting. Animatable.

# fresnelExponent (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

A factor affecting the material’s reflectivity. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat fresnelExponent;
```

<a id="Discussion"></a>

## Discussion

The Fresnel exponent of a material interacts with its [reflective](reflective.md) property to determine the intensity of reflections in a surface based on its angle relative to the viewer. A higher Fresnel exponent increases the visibility of reflections when the material is viewed from a shallow angle.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Visual Properties for Basic Shading

- [diffuse](diffuse.md): An object that manages the material’s diffuse response to lighting.
- [ambient](ambient.md): An object that manages the material’s response to ambient lighting.
- [specular](specular.md): An object that manages the material’s specular response to lighting.
- [reflective](reflective.md): An object that defines the reflected color for each point on a surface.
- [multiply](multiply.md): An object that provides color values that are multiplied with pixels in a material after all other shading is complete.
- [transparent](transparent.md): An object that determines the opacity of each point in a material.
- [shininess](shininess.md): The sharpness of specular highlights. Animatable.
- [locksAmbientWithDiffuse](locksambientwithdiffuse.md): A Boolean value that determines whether the material responds identically to both ambient and diffuse lighting. Animatable.
