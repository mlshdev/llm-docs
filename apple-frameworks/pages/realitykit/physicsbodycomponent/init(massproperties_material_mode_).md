> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/physicsbodycomponent/init(massproperties:material:mode:)

# init(massProperties:material:mode:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a physics body component with the given mass properties, material, and mode.

## Declaration

```swift
init(massProperties: PhysicsMassProperties = .default, material: PhysicsMaterialResource? = nil, mode: PhysicsBodyMode = .dynamic)
```

## Parameters

- `massProperties`: The mass properties, like inertia.
- `material`: The material properties, like friction.
- `mode`: The simulation mode that indicates how a body responds to forces.

## See Also

### Creating a physics body component

- [init()](init%28%29.md): Creates a physics body component with default settings.
- [init(shapes:density:material:mode:)](init%28shapes_density_material_mode_%29.md): Creates a physics body component deriving mass properties from shape and density.
- [init(shapes:mass:material:mode:)](init%28shapes_mass_material_mode_%29.md): Creates a physics body component deriving mass properties from shape and mass.
