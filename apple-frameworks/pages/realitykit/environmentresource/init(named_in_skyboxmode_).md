> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/environmentresource/init(named:in:skyboxmode:)

# init(named:in:skyboxMode:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Asynchronously loads an environment resource from a bundle.

## Declaration

```swift
@MainActor @preconcurrency convenience init(named name: String, in bundle: Bundle? = nil, skyboxMode: EnvironmentResource.SkyboxMode) async throws
```

## Parameters

- `skyboxMode`: Skybox’s preservation in the environment resource.

## See Also

### Creating an environment resource

- [EnvironmentResource.SkyboxMode](skyboxmode.md): An enumeration controlling how to preserve the skybox.
- [init(equirectangular:options:)](init%28equirectangular_options_%29-8e7wv.md): Asynchronously generates an environment resource from an equirectangular image.
- [init(equirectangular:options:)](init%28equirectangular_options_%29-5bxl3.md): Synchronously creates an environment resource from an equirectangular image.
- [init(skybox:specular:diffuse:)](init%28skybox_specular_diffuse_%29.md): Creates an EnvironmentResource a skybox, specular and diffuse texture resources.
