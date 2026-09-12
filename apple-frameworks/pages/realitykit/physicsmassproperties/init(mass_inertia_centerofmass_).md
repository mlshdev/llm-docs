> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsmassproperties/init(mass:inertia:centerofmass:)](https://developer.apple.com/documentation/realitykit/physicsmassproperties/init(mass:inertia:centerofmass:))

# init(mass:inertia:centerOfMass:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a mass properties instance with the given settings.

## Declaration

```swift
init(mass: Float, inertia: SIMD3<Float> = SIMD3<Float>(x: 0.1, y: 0.1, z: 0.1), centerOfMass: (position: SIMD3<Float>, orientation: simd_quatf) = (SIMD3<Float>(x: 0, y: 0, z: 0), simd_quatf(ix: 0, iy: 0, iz: 0, r: 1)))
```

## Parameters

- `mass`: The mass in kilograms. If you use a mass of `0` or infinity, the simulation treats the object as [PhysicsBodyMode.kinematic](../physicsbodymode/kinematic.md). That is, the object doesn’t respond to forces.
- `inertia`: The inertia in kilograms per square meter. The vector contains the diagonal elements of the diagonalized inertia matrix.
- `centerOfMass`: The center of mass and the orientation of the principal axes, defined in the local space of the rigid body.

  The `position` defines the center of mass with a default value of `(0, 0, 0)`, which means that the local origin of the model is the center of mass.

  The `orientation` defines the principal axes, such the inertia matrix is a diagonal.

## See Also

### Creating custom mass properties

- [init()](init%28%29.md): Creates a mass properties instance with default settings.
- [init(shape:density:)](init%28shape_density_%29.md): Creates the mass properties for a solid shape with the specified density.
- [init(shape:mass:)](init%28shape_mass_%29.md): Creates the mass properties for a solid shape with the specified mass.
