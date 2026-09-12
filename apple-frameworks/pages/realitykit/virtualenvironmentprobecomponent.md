> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/virtualenvironmentprobecomponent](https://developer.apple.com/documentation/realitykit/virtualenvironmentprobecomponent)

# VirtualEnvironmentProbeComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A component that provides environment lighting for entities you place within the same virtual world.

## Declaration

```swift
struct VirtualEnvironmentProbeComponent
```

<a id="overview"></a>

## Overview

In a fully virtual environment, you can configure the `VirtualEnvironmentProbeComponent` with an [EnvironmentResource](environmentresource.md) to provide precalculated indirect lighting from the environment. RealityKit combines this lighting with other lights in the scene to calculate the final lighting of an entity. The example below shows how you can set up a `VirtualEnvironmentProbeComponent` from a single probe:

```swift
let environment = try await Entity(named: "environment")
let resource = try await EnvironmentResource(named: "MyEnvironment", in: bundle)
let probe = VirtualEnvironmentProbeComponent.Probe(environment: resource)
let probeComponent = VirtualEnvironmentProbeComponent(source: .single(probe))
environment.components.set(probeComponent)
```

> **Note**

> In visionOS, ARKit automatically provides the environment lighting for the shared space.

## Topics

### Creating a probe component

- [init(source:influence:)](virtualenvironmentprobecomponent/init%28source_influence_%29.md)

### Configuring probe influence

- [influence](virtualenvironmentprobecomponent/influence-swift.property.md)
- [VirtualEnvironmentProbeComponent.Influence](virtualenvironmentprobecomponent/influence-swift.struct.md): Defines the spatial influence of an environment probe.

### Structures

- [VirtualEnvironmentProbeComponent.Probe](virtualenvironmentprobecomponent/probe.md): A sample of the environment around a point in a scene the system uses for environment-based lighting.

### Initializers

- [init(source:)](virtualenvironmentprobecomponent/init%28source_%29.md): Creates a virtual-environment probe component.

### Instance Properties

- [source](virtualenvironmentprobecomponent/source-swift.property.md): The source of diffuse and specular lighting for environment lighting calculations.

### Enumerations

- [VirtualEnvironmentProbeComponent.Source](virtualenvironmentprobecomponent/source-swift.enum.md): Options that define the source of diffuse and specular lighting for environment lighting calculations.

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Environment

- [EnvironmentResource](environmentresource.md): An environmental resource that contains background and lighting information for a scene.
- [EnvironmentLightingConfigurationComponent](environmentlightingconfigurationcomponent.md): A component that scales the amount of light that an entity receives from its environment.
- [VirtualEnvironmentProbeComponent.Probe](virtualenvironmentprobecomponent/probe.md): A sample of the environment around a point in a scene the system uses for environment-based lighting.
- [VirtualEnvironmentProbeComponent.Source](virtualenvironmentprobecomponent/source-swift.enum.md): Options that define the source of diffuse and specular lighting for environment lighting calculations.
