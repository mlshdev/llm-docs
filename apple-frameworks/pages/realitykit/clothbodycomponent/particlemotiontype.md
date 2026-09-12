> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/particlemotiontype](https://developer.apple.com/documentation/realitykit/clothbodycomponent/particlemotiontype)

# ClothBodyComponent.ParticleMotionType

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Defines whether a particle is moved by the simulation or by the entity transform.

## Declaration

```swift
struct ParticleMotionType
```

## Topics

### Type Properties

- [dynamic](particlemotiontype/dynamic.md): Dynamic particles are moved exclusively by the simulation, and ignore changes to the entity transform.
- [kinematic](particlemotiontype/kinematic.md): Kinematic particles are moved with the entity transform, and cannot be moved in any way by the simulation.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling cloth motion

- [motionTypes](motiontypes.md): Motion types for each particle in the body.
- [mass](mass.md): Mass of the body as a whole, in Kg.
- [resetDeformation(entity:)](resetdeformation%28entity_%29.md): Resets the deformation of the cloth body to its initial pose and motion.
