> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spotlightcomponent/projectivetexture](https://developer.apple.com/documentation/realitykit/spotlightcomponent/projectivetexture)

# SpotLightComponent.ProjectiveTexture

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A component that specifies a map of a projective texture or cookie light to use for shadow mapping.

## Declaration

```swift
struct ProjectiveTexture
```

<a id="overview"></a>

## Overview

Cookie lights or projective lights in RealityKit are essentially a light mask added to our SpotLights that allows us to create a shadow that can illuminate an area uniformly by modifying the characteristics of the light. To illustrate the concept, we can think of a piece of gelatin paper wrapped around a light. The final illumination of the objects lit by this light will be a combination of the characteristics of the color of the light and the paper. Projective lights are available on devices with Apple6 GPU family feature support.

## Topics

### Creating a projective texture

- [init(texture:coordinateTransform:)](projectivetexture/init%28texture_coordinatetransform_%29.md): Creates a new instance with the specified texture and coordinate transform for scale and rotation
- [init(texture:scale:)](projectivetexture/init%28texture_scale_%29.md): Creates a new instance with the specified texture and scale

### Transforming texture coordinates

- [coordinateTransform](projectivetexture/coordinatetransform.md): The coordinate transform for the projective texture
- [SpotLightComponent.ProjectiveTexture.TextureCoordinateTransform](projectivetexture/texturecoordinatetransform.md)

### Comparing projective textures

- [==(\_:\_:)](projectivetexture/==%28____%29.md)

### Initializers

- [init(texture:)](projectivetexture/init%28texture_%29.md): Creates a new instance with the specified texture

### Instance Properties

- [texture](projectivetexture/texture.md): The texture for the projective texture

## Relationships

### Conforms To

- [Component](../component.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Defining the light contribution

- [SpotLightComponent.SurroundingsLight](surroundingslight.md): A component that specifies that the spot light illuminates the physical and immersive environment.
