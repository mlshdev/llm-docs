> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3d/changebasis(from:to:)](https://developer.apple.com/documentation/spatial/affinetransform3d/changebasis(from:to:))

# changeBasis(from:to:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

Returns a new affine transform structure by applying a change-of-basis.

## Declaration

```swift
func changeBasis(from: AffineTransform3D = .identity, to: AffineTransform3D) -> AffineTransform3D?
```

## See Also

### Transforming a 3D affine transform structure

- [Axis3D](../axis3d.md): Constants that describe an axis.
- [AxisWithFactors](../axiswithfactors.md): Constants that describe the axis of a shear transform.
- [flip(along:)](flip%28along_%29.md): Flips an affine transform along the specified axis.
- [flipped(along:)](flipped%28along_%29.md): Returns an affine transform that results from flipping it along the specified axis.
- [inverse](inverse.md): The affine transform’s inverse.
- [scaledBy(x:y:z:)](scaledby%28x_y_z_%29.md): Returns a transform that results from scaling with specified double-precision values.
- [sheared(\_:)](sheared%28__%29.md): Returns an affine transform that results from shearing over an axis by shear factors for the other two axes.
