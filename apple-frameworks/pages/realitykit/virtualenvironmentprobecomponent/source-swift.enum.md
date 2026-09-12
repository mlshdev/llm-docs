> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/virtualenvironmentprobecomponent/source-swift.enum](https://developer.apple.com/documentation/realitykit/virtualenvironmentprobecomponent/source-swift.enum)

# VirtualEnvironmentProbeComponent.Source

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Options that define the source of diffuse and specular lighting for environment lighting calculations.

## Declaration

```swift
enum Source
```

## Topics

### Enumeration Cases

- [VirtualEnvironmentProbeComponent.Source.blend(from:to:t:)](source-swift.enum/blend%28from_to_t_%29.md): A source that blends between two pregenerated probes based on the provided blend factor.
- [VirtualEnvironmentProbeComponent.Source.none](source-swift.enum/none.md): A source without any lighting.
- [VirtualEnvironmentProbeComponent.Source.single(\_:)](source-swift.enum/single%28__%29.md): A source representing a single pregenerated probe.

## See Also

### Environment

- [EnvironmentResource](../environmentresource.md): An environmental resource that contains background and lighting information for a scene.
- [EnvironmentLightingConfigurationComponent](../environmentlightingconfigurationcomponent.md): A component that scales the amount of light that an entity receives from its environment.
- [VirtualEnvironmentProbeComponent](../virtualenvironmentprobecomponent.md): A component that provides environment lighting for entities you place within the same virtual world.
- [VirtualEnvironmentProbeComponent.Probe](probe.md): A sample of the environment around a point in a scene the system uses for environment-based lighting.
