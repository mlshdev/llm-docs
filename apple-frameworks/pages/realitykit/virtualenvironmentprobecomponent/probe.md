> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/virtualenvironmentprobecomponent/probe](https://developer.apple.com/documentation/realitykit/virtualenvironmentprobecomponent/probe)

# VirtualEnvironmentProbeComponent.Probe

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A sample of the environment around a point in a scene the system uses for environment-based lighting.

## Declaration

```swift
struct Probe
```

## Topics

### Initializers

- [init(environment:intensityExponent:)](probe/init%28environment_intensityexponent_%29.md): Creates a virtual-environment probe from an environment resource and intensity value.

### Instance Properties

- [environment](probe/environment.md): The resource that stores a representation of diffuse and specular environment lighting.
- [intensityExponent](probe/intensityexponent.md): The intensity value for the resource, which RealityKit defines on a logarithmic scale.

## See Also

### Environment

- [EnvironmentResource](../environmentresource.md): An environmental resource that contains background and lighting information for a scene.
- [EnvironmentLightingConfigurationComponent](../environmentlightingconfigurationcomponent.md): A component that scales the amount of light that an entity receives from its environment.
- [VirtualEnvironmentProbeComponent](../virtualenvironmentprobecomponent.md): A component that provides environment lighting for entities you place within the same virtual world.
- [VirtualEnvironmentProbeComponent.Source](source-swift.enum.md): Options that define the source of diffuse and specular lighting for environment lighting calculations.
