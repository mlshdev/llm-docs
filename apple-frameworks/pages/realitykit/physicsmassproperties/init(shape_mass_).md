> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsmassproperties/init(shape:mass:)](https://developer.apple.com/documentation/realitykit/physicsmassproperties/init(shape:mass:))

# init(shape:mass:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates the mass properties for a solid shape with the specified mass.

## Declaration

```swift
@MainActor @preconcurrency init(shape: ShapeResource, mass: Float)
```

## Parameters

- `shape`: The shape for which to calculate the mass frame.
- `mass`: The mass of the object in kilograms.

## See Also

### Creating custom mass properties

- [init()](init%28%29.md): Creates a mass properties instance with default settings.
- [init(mass:inertia:centerOfMass:)](init%28mass_inertia_centerofmass_%29.md): Creates a mass properties instance with the given settings.
- [init(shape:density:)](init%28shape_density_%29.md): Creates the mass properties for a solid shape with the specified density.
