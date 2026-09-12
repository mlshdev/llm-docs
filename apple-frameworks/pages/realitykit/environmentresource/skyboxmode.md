> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentresource/skyboxmode](https://developer.apple.com/documentation/realitykit/environmentresource/skyboxmode)

# EnvironmentResource.SkyboxMode

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An enumeration controlling how to preserve the skybox.

## Declaration

```swift
struct SkyboxMode
```

## Topics

### Choosing a skybox mode

- [preserve](skyboxmode/preserve.md): Preserve and reference the original skybox cube texture.
- [discard](skyboxmode/discard.md): Only keep a low-resolution proxy of the skybox, reducing memory usage.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an environment resource

- [init(named:in:skyboxMode:)](init%28named_in_skyboxmode_%29.md): Asynchronously loads an environment resource from a bundle.
- [init(equirectangular:options:)](init%28equirectangular_options_%29-8e7wv.md): Asynchronously generates an environment resource from an equirectangular image.
- [init(equirectangular:options:)](init%28equirectangular_options_%29-5bxl3.md): Synchronously creates an environment resource from an equirectangular image.
- [init(skybox:specular:diffuse:)](init%28skybox_specular_diffuse_%29.md): Creates an EnvironmentResource a skybox, specular and diffuse texture resources.
