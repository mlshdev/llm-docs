> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentresource/init(equirectangular:options:)-8e7wv](https://developer.apple.com/documentation/realitykit/environmentresource/init(equirectangular:options:)-8e7wv)

# init(equirectangular:options:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Asynchronously generates an environment resource from an equirectangular image.

## Declaration

```swift
@MainActor convenience init(equirectangular cgImage: CGImage, options: EnvironmentResource.CreateOptions) async throws
```

## Parameters

- `cgImage`: The source equirectangular (latitude, longitude) image. To preserve all details use an image where the width is half the height.

## See Also

### Creating an environment resource

- [init(named:in:skyboxMode:)](init%28named_in_skyboxmode_%29.md): Asynchronously loads an environment resource from a bundle.
- [EnvironmentResource.SkyboxMode](skyboxmode.md): An enumeration controlling how to preserve the skybox.
- [init(equirectangular:options:)](init%28equirectangular_options_%29-5bxl3.md): Synchronously creates an environment resource from an equirectangular image.
- [init(skybox:specular:diffuse:)](init%28skybox_specular_diffuse_%29.md): Creates an EnvironmentResource a skybox, specular and diffuse texture resources.
