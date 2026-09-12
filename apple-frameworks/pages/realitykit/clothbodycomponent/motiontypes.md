> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/motiontypes](https://developer.apple.com/documentation/realitykit/clothbodycomponent/motiontypes)

# motionTypes

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Motion types for each particle in the body.

## Declaration

```swift
var motionTypes: PerClothVertexData<ClothBodyComponent.ParticleMotionType>
```

<a id="discussion"></a>

## Discussion

By default, the motion types are set to `.dynamic`.

## See Also

### Controlling cloth motion

- [ClothBodyComponent.ParticleMotionType](particlemotiontype.md): Defines whether a particle is moved by the simulation or by the entity transform.
- [mass](mass.md): Mass of the body as a whole, in Kg.
- [resetDeformation(entity:)](resetdeformation%28entity_%29.md): Resets the deformation of the cloth body to its initial pose and motion.
