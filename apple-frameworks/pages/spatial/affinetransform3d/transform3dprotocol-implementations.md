> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3d/transform3dprotocol-implementations](https://developer.apple.com/documentation/spatial/affinetransform3d/transform3dprotocol-implementations)

# Transform3DProtocol Implementations

**Framework:** Spatial  
**Kind:** API Collection

## Topics

### Initializers

- [init(scale:rotation:translation:)](init%28scale_rotation_translation_%29-3somu.md): Creates an affine transform from the specified scale, rotate, and translate transforms.
- [init(shear:)](init%28shear_%29.md): Creates an affine transform from the specified shear transform.

### Instance Properties

- [inverse](inverse.md): The affine transform’s inverse.
- [rotation](rotation.md): The affine transform’s rotation.
- [translation](translation.md): The translation component of the affine transform.

### Instance Methods

- [flip(along:)](flip%28along_%29.md): Flips an affine transform along the specified axis.
- [flipped(along:)](flipped%28along_%29.md): Returns an affine transform that results from flipping it along the specified axis.
- [isApproximatelyEqual(to:tolerance:)](isapproximatelyequal%28to_tolerance_%29.md): Returns a Boolean value that indicates whether two transforms are equal within a specified tolerance.
- [isUniform(overDimensions:)](isuniform%28overdimensions_%29.md): Returns a Boolean value that indicates whether the transform scales equally over the specified dimensions.
