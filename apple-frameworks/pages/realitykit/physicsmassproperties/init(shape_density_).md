> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/physicsmassproperties/init(shape:density:)

# init(shape:density:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates the mass properties for a solid shape with the specified density.

## Declaration

```swift
@MainActor @preconcurrency init(shape: ShapeResource, density: Float)
```

## Parameters

- `shape`: The shape for which to calculate the mass frame.
- `density`: The density of the object in kilograms per cubic meter.

## See Also

### Creating custom mass properties

- [init()](init%28%29.md): Creates a mass properties instance with default settings.
- [init(mass:inertia:centerOfMass:)](init%28mass_inertia_centerofmass_%29.md): Creates a mass properties instance with the given settings.
- [init(shape:mass:)](init%28shape_mass_%29.md): Creates the mass properties for a solid shape with the specified mass.
