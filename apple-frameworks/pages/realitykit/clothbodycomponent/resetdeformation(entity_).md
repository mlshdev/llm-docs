> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/resetdeformation(entity:)](https://developer.apple.com/documentation/realitykit/clothbodycomponent/resetdeformation(entity:))

# resetDeformation(entity:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Resets the deformation of the cloth body to its initial pose and motion.

## Declaration

```swift
static func resetDeformation(entity: Entity)
```

## Parameters

- `entity`: The entity whose cloth body should be reset.

## See Also

### Controlling cloth motion

- [motionTypes](motiontypes.md): Motion types for each particle in the body.
- [ClothBodyComponent.ParticleMotionType](particlemotiontype.md): Defines whether a particle is moved by the simulation or by the entity transform.
- [mass](mass.md): Mass of the body as a whole, in Kg.
