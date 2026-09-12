> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/inflationconstraint-swift.struct](https://developer.apple.com/documentation/realitykit/clothbodycomponent/inflationconstraint-swift.struct)

# ClothBodyComponent.InflationConstraint

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Configuration for an inflatable cloth body.

## Declaration

```swift
struct InflationConstraint
```

## Topics

### Creating an inflation constraint

- [init(targetVolume:stiffness:)](inflationconstraint-swift.struct/init%28targetvolume_stiffness_%29.md): Creates an inflation configuration.
- [init(stiffness:)](inflationconstraint-swift.struct/init%28stiffness_%29.md): Creates an inflation configuration that defaults to the mesh volume.

### Configuring inflation

- [targetVolume](inflationconstraint-swift.struct/targetvolume.md): The target volume (in ㎥) that the body tries to match.
- [stiffness](inflationconstraint-swift.struct/stiffness.md): The resistance of the body’s volume to diverge from `targetVolume`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Applying external forces

- [externalForces](externalforces.md): The external forces applied to the particles in the body (in Newtons).
- [ClothBodyComponent.ExternalForce](externalforce.md): An external force applied to a single particle, in Newtons.
- [inflationConstraint](inflationconstraint-swift.property.md): An optional inflation constraint for representing inflatable bodies (must be watertight).
