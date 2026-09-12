> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentresource/createoptions/init(skyboxmode:samplingquality:specularcubedimension:compression:)](https://developer.apple.com/documentation/realitykit/environmentresource/createoptions/init(skyboxmode:samplingquality:specularcubedimension:compression:))

# init(skyboxMode:samplingQuality:specularCubeDimension:compression:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an environment creation options structure.

## Declaration

```swift
init(skyboxMode: EnvironmentResource.SkyboxMode, samplingQuality: EnvironmentResource.CreateOptions.SamplingQuality = .fast, specularCubeDimension: Int? = nil, compression: EnvironmentResource.Compression = .default)
```

## Parameters

- `skyboxMode`: Skybox’s preservation in the environment resource.
- `samplingQuality`: The skybox sampling quality for lighting textures.
- `specularCubeDimension`: The dimension of the computed specular cubemap for material reflections.
- `compression`: The compression to apply to environment textures.

<a id="discussion"></a>

## Discussion

> **Note**

> The skybox is not needed for image based lighting with `VirtualEnvironmentProbeComponent` and `ImageBasedLightComponent`.
