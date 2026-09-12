> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransform3dfloat/transform3dprotocol-implementations](https://developer.apple.com/documentation/spatial/projectivetransform3dfloat/transform3dprotocol-implementations)

# Transform3DProtocol Implementations

**Framework:** Spatial  
**Kind:** API Collection

## Topics

### Initializers

- [init(scale:rotation:translation:)](init%28scale_rotation_translation_%29.md): Returns a new scale, rotate, translate transform.
- [init(shear:)](init%28shear_%29.md): Returns a new shear transform

### Instance Properties

- [inverse](inverse.md): The projective transform’s inverse.
- [rotation](rotation.md): The projective transform’s rotation.
- [translation](translation.md): The translation component

### Instance Methods

- [flip(along:)](flip%28along_%29.md): Flips the transform along the specified axis.
- [flipped(along:)](flipped%28along_%29.md): Returns the transform flipped along the specified axis.
- [isApproximatelyEqual(to:tolerance:)](isapproximatelyequal%28to_tolerance_%29.md): Returns a Boolean value that indicates whether two transforms are equal within a specified tolerance.
- [isUniform(overDimensions:)](isuniform%28overdimensions_%29.md): Returns `true` if the transform is affine and uniform over the specified dimensions.
