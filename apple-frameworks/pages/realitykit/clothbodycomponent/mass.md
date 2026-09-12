> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/mass](https://developer.apple.com/documentation/realitykit/clothbodycomponent/mass)

# mass

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Mass of the body as a whole, in Kg.

## Declaration

```swift
var mass: Float { get set }
```

<a id="discussion"></a>

## Discussion

The mass specified here is distributed equally among the particles forming the body for simulation purposes. A higher mass will resist acceleration changes from forces such as wind and external forces.

Must be positive. The default value is `1.0`.

## See Also

### Controlling cloth motion

- [motionTypes](motiontypes.md): Motion types for each particle in the body.
- [ClothBodyComponent.ParticleMotionType](particlemotiontype.md): Defines whether a particle is moved by the simulation or by the entity transform.
- [resetDeformation(entity:)](resetdeformation%28entity_%29.md): Resets the deformation of the cloth body to its initial pose and motion.
