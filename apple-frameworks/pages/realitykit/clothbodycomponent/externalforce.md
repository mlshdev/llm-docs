> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/externalforce](https://developer.apple.com/documentation/realitykit/clothbodycomponent/externalforce)

# ClothBodyComponent.ExternalForce

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

An external force applied to a single particle, in Newtons.

## Declaration

```swift
struct ExternalForce
```

## Topics

### Accessing the force vector

- [vector](externalforce/vector.md): The force vector applied to the particle, in Newtons.

### Initializers

- [init()](externalforce/init%28%29.md): Creates an external force with zero magnitude.
- [init(\_:)](externalforce/init%28__%29.md): Creates an external force with the given force vector.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Applying external forces

- [externalForces](externalforces.md): The external forces applied to the particles in the body (in Newtons).
- [inflationConstraint](inflationconstraint-swift.property.md): An optional inflation constraint for representing inflatable bodies (must be watertight).
- [ClothBodyComponent.InflationConstraint](inflationconstraint-swift.struct.md): Configuration for an inflatable cloth body.
