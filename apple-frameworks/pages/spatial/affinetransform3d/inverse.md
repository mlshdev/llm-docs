> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3d/inverse](https://developer.apple.com/documentation/spatial/affinetransform3d/inverse)

# inverse

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The affine transform’s inverse.

## Declaration

```swift
var inverse: AffineTransform3D? { get }
```

## See Also

### Transforming a 3D affine transform structure

- [Axis3D](../axis3d.md): Constants that describe an axis.
- [AxisWithFactors](../axiswithfactors.md): Constants that describe the axis of a shear transform.
- [changeBasis(from:to:)](changebasis%28from_to_%29.md): Returns a new affine transform structure by applying a change-of-basis.
- [flip(along:)](flip%28along_%29.md): Flips an affine transform along the specified axis.
- [flipped(along:)](flipped%28along_%29.md): Returns an affine transform that results from flipping it along the specified axis.
- [scaledBy(x:y:z:)](scaledby%28x_y_z_%29.md): Returns a transform that results from scaling with specified double-precision values.
- [sheared(\_:)](sheared%28__%29.md): Returns an affine transform that results from shearing over an axis by shear factors for the other two axes.
