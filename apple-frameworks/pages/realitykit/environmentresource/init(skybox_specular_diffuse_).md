> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentresource/init(skybox:specular:diffuse:)](https://developer.apple.com/documentation/realitykit/environmentresource/init(skybox:specular:diffuse:))

# init(skybox:specular:diffuse:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an EnvironmentResource a skybox, specular and diffuse texture resources.

## Declaration

```swift
@MainActor convenience init(skybox skyboxTexture: TextureResource?, specular specularTexture: TextureResource, diffuse diffuseTexture: TextureResource) throws
```

## Parameters

- `skyboxTexture`: A skybox texture to preserve. If nil, derives a low-resolution proxy from other inputs for lower memory usage.
- `specularTexture`: An image based light specular texture.
- `diffuseTexture`: An image based light diffuse texture.

<a id="discussion"></a>

## Discussion

> **Note**

> `SkyboxGenerator` and `ImageBasedLightTextureGenerator` can generate required textures into a `LowLevelTexture`, itself wrapped as a `TextureResource`.

> **Note**

> The skybox is not needed for image based lighting with `VirtualEnvironmentProbeComponent` and `ImageBasedLightComponent`.

## See Also

### Creating an environment resource

- [init(named:in:skyboxMode:)](init%28named_in_skyboxmode_%29.md): Asynchronously loads an environment resource from a bundle.
- [EnvironmentResource.SkyboxMode](skyboxmode.md): An enumeration controlling how to preserve the skybox.
- [init(equirectangular:options:)](init%28equirectangular_options_%29-8e7wv.md): Asynchronously generates an environment resource from an equirectangular image.
- [init(equirectangular:options:)](init%28equirectangular_options_%29-5bxl3.md): Synchronously creates an environment resource from an equirectangular image.
