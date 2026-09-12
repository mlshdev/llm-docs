> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/environmentlightingconfigurationcomponent](https://developer.apple.com/documentation/realitykit/environmentlightingconfigurationcomponent)

# EnvironmentLightingConfigurationComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A component that scales the amount of light that an entity receives from its environment.

## Declaration

```swift
struct EnvironmentLightingConfigurationComponent
```

<a id="overview"></a>

## Overview

When rendering a RealityKit scene, you can control how much the environment’s lighting affects the virtual objects in your scene, such as the lighting from your real-world surroundings, a virtual environment, or both. Use an `EnvironmentLightingConfigurationComponent` to configure this amount for an entity.

For example, create an entity that receives no lighting from its environment by setting the weight to `0.0`.

```swift
let spaceship = try await Entity(named: "spaceship")
spaceship.components.set(EnvironmentLightingConfigurationComponent(
    environmentLightingWeight: 0.0))
```

> **Note**

> The weight value of the component also affects the lighting of the entity’s descendants.

## Topics

### Creating an environment-lighting configuration component

- [init(environmentLightingWeight:)](environmentlightingconfigurationcomponent/init%28environmentlightingweight_%29.md): Creates an environment-lighting configuration component.

### Scaling the environment-lighting contribution

- [environmentLightingWeight](environmentlightingconfigurationcomponent/environmentlightingweight.md): A value that controls the environment-lighting contribution to an entity’s lighting.

### Operators

- [==(\_:\_:)](environmentlightingconfigurationcomponent/==%28____%29.md): Returns a Boolean value that indicates whether two environment-lighting configuration components are equal.

## Relationships

### Conforms To

- [Component](component.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Environment

- [EnvironmentResource](environmentresource.md): An environmental resource that contains background and lighting information for a scene.
- [VirtualEnvironmentProbeComponent](virtualenvironmentprobecomponent.md): A component that provides environment lighting for entities you place within the same virtual world.
- [VirtualEnvironmentProbeComponent.Probe](virtualenvironmentprobecomponent/probe.md): A sample of the environment around a point in a scene the system uses for environment-based lighting.
- [VirtualEnvironmentProbeComponent.Source](virtualenvironmentprobecomponent/source-swift.enum.md): Options that define the source of diffuse and specular lighting for environment lighting calculations.
