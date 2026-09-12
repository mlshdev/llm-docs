> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsbodycomponent/init(shapes:density:material:mode:)](https://developer.apple.com/documentation/realitykit/physicsbodycomponent/init(shapes:density:material:mode:))

# init(shapes:density:material:mode:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a physics body component deriving mass properties from shape and density.

## Declaration

```swift
@MainActor @preconcurrency init(shapes: [ShapeResource], density: Float, material: PhysicsMaterialResource? = nil, mode: PhysicsBodyMode = .dynamic)
```

## Parameters

- `shapes`: The shape for which to estimate the mass, rotational inertia, and center of mass.
- `density`: The density of the object in kilograms per cubic meter.
- `material`: The material properties, like friction.
- `mode`: The simulation mode that indicates how a body responds to forces.

## Mentioned In

- [Designing scene hierarchies for efficient physics simulation](../designing-scene-hierarchies-for-efficient-physics-simulation.md)

## See Also

### Creating a physics body component

- [init()](init%28%29.md): Creates a physics body component with default settings.
- [init(massProperties:material:mode:)](init%28massproperties_material_mode_%29.md): Creates a physics body component with the given mass properties, material, and mode.
- [init(shapes:mass:material:mode:)](init%28shapes_mass_material_mode_%29.md): Creates a physics body component deriving mass properties from shape and mass.
