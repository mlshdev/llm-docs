> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsmassproperties](https://developer.apple.com/documentation/realitykit/physicsmassproperties)

# PhysicsMassProperties

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Mass properties of a physics body.

## Declaration

```swift
struct PhysicsMassProperties
```

## Topics

### Using default mass properties

- [default](physicsmassproperties/default.md): The default mass properties, equivalent to a unit sphere with a mass of 1 kilogram.

### Creating custom mass properties

- [init()](physicsmassproperties/init%28%29.md): Creates a mass properties instance with default settings.
- [init(mass:inertia:centerOfMass:)](physicsmassproperties/init%28mass_inertia_centerofmass_%29.md): Creates a mass properties instance with the given settings.
- [init(shape:density:)](physicsmassproperties/init%28shape_density_%29.md): Creates the mass properties for a solid shape with the specified density.
- [init(shape:mass:)](physicsmassproperties/init%28shape_mass_%29.md): Creates the mass properties for a solid shape with the specified mass.

### Getting mass properties

- [mass](physicsmassproperties/mass.md): The mass in kilograms.
- [inertia](physicsmassproperties/inertia.md): The inertia in kilograms per square meter.
- [centerOfMass](physicsmassproperties/centerofmass.md): The position of the center of mass and the orientation of the principal axes.

### Operators

- [==(\_:\_:)](physicsmassproperties/==%28____%29.md): Indicates whether two physics mass properties are equal.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Physical properties

- [PhysicsBodyComponent](physicsbodycomponent.md): A component that defines an entity’s behavior in physics body simulations.
- [PhysicsMaterialResource](physicsmaterialresource.md): Material properties, like friction, of a physically simulated object.
- [PhysicsBodyMode](physicsbodymode.md): The ways that a physics body can move in response to physical forces.
