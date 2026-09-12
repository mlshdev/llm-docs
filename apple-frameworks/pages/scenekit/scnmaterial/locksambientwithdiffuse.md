> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/locksambientwithdiffuse](https://developer.apple.com/documentation/scenekit/scnmaterial/locksambientwithdiffuse)

# locksAmbientWithDiffuse (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether the material responds identically to both ambient and diffuse lighting. Animatable.

## Declaration

```swift
var locksAmbientWithDiffuse: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When modeling real-world lighting, a surface is typically considered to have a single “base” color or texture that is visible under both ambient and diffuse light. When this property’s value is [false](https://developer.apple.com/documentation/swift/false), SceneKit does not have this limitation: you may use a material’s [diffuse](diffuse.md) property to provide a color or texture that is visible under direct lighting, and its [ambient](ambient.md) property to provide a different color or texture for areas not directly illuminated.

When this property’s value is [true](https://developer.apple.com/documentation/swift/true), or when using the [physicallyBased](lightingmodel-swift.struct/physicallybased.md) shading mode, SceneKit uses the [diffuse](diffuse.md) property for ambient lighting, ignoring the [ambient](ambient.md) property and ensuring that the material responds identically to both ambient and diffuse light.

The default value for this property is [true](https://developer.apple.com/documentation/swift/true) for new apps on all platforms. (In OS X v10.9 and earlier, the default value is [false](https://developer.apple.com/documentation/swift/false).)

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md). Animating this property fades between the results of rendering with each state.

## See Also

### Visual Properties for Basic Shading

- [diffuse](diffuse.md): An object that manages the material’s diffuse response to lighting.
- [ambient](ambient.md): An object that manages the material’s response to ambient lighting.
- [specular](specular.md): An object that manages the material’s specular response to lighting.
- [reflective](reflective.md): An object that defines the reflected color for each point on a surface.
- [multiply](multiply.md): An object that provides color values that are multiplied with pixels in a material after all other shading is complete.
- [transparent](transparent.md): An object that determines the opacity of each point in a material.
- [shininess](shininess.md): The sharpness of specular highlights. Animatable.
- [fresnelExponent](fresnelexponent.md): A factor affecting the material’s reflectivity. Animatable.

# locksAmbientWithDiffuse (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether the material responds identically to both ambient and diffuse lighting. Animatable.

## Declaration

```objectivec
@property (nonatomic) BOOL locksAmbientWithDiffuse;
```

<a id="Discussion"></a>

## Discussion

When modeling real-world lighting, a surface is typically considered to have a single “base” color or texture that is visible under both ambient and diffuse light. When this property’s value is [false](https://developer.apple.com/documentation/swift/false), SceneKit does not have this limitation: you may use a material’s [diffuse](diffuse.md) property to provide a color or texture that is visible under direct lighting, and its [ambient](ambient.md) property to provide a different color or texture for areas not directly illuminated.

When this property’s value is [true](https://developer.apple.com/documentation/swift/true), or when using the [SCNLightingModelPhysicallyBased](lightingmodel-swift.struct/physicallybased.md) shading mode, SceneKit uses the [diffuse](diffuse.md) property for ambient lighting, ignoring the [ambient](ambient.md) property and ensuring that the material responds identically to both ambient and diffuse light.

The default value for this property is [true](https://developer.apple.com/documentation/swift/true) for new apps on all platforms. (In OS X v10.9 and earlier, the default value is [false](https://developer.apple.com/documentation/swift/false).)

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md). Animating this property fades between the results of rendering with each state.

## See Also

### Visual Properties for Basic Shading

- [diffuse](diffuse.md): An object that manages the material’s diffuse response to lighting.
- [ambient](ambient.md): An object that manages the material’s response to ambient lighting.
- [specular](specular.md): An object that manages the material’s specular response to lighting.
- [reflective](reflective.md): An object that defines the reflected color for each point on a surface.
- [multiply](multiply.md): An object that provides color values that are multiplied with pixels in a material after all other shading is complete.
- [transparent](transparent.md): An object that determines the opacity of each point in a material.
- [shininess](shininess.md): The sharpness of specular highlights. Animatable.
- [fresnelExponent](fresnelexponent.md): A factor affecting the material’s reflectivity. Animatable.
