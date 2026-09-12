> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentresource/createoptions/init(samplingquality:specularcubedimension:compression:)](https://developer.apple.com/documentation/realitykit/environmentresource/createoptions/init(samplingquality:specularcubedimension:compression:))

# init(samplingQuality:specularCubeDimension:compression:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates an environment creation options structure.

## Declaration

```swift
init(samplingQuality: EnvironmentResource.CreateOptions.SamplingQuality = .fast, specularCubeDimension: Int? = nil, compression: EnvironmentResource.Compression = .default)
```

## Parameters

- `samplingQuality`: The skybox sampling quality for lighting textures.
- `specularCubeDimension`: The dimension of the computed specular cubemap for material reflections.
- `compression`: The compression to apply to environment textures.
