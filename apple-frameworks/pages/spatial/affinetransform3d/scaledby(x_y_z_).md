> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3d/scaledby(x:y:z:)](https://developer.apple.com/documentation/spatial/affinetransform3d/scaledby(x:y:z:))

# scaledBy(x:y:z:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a transform that results from scaling with specified double-precision values.

## Declaration

```swift
func scaledBy(x: Double = 1, y: Double = 1, z: Double = 1) -> AffineTransform3D
```

## Parameters

- `x`: The double-precision value that specifies the scale along the width dimension.
- `y`: The double-precision value that specifies the scale along the height dimension.
- `z`: The double-precision value that specifies the scale along the depth dimension.

<a id="return-value"></a>

## Return Value

The transform that results from scaling with specified double-precision values.

## See Also

### Transforming a 3D affine transform structure

- [Axis3D](../axis3d.md): Constants that describe an axis.
- [AxisWithFactors](../axiswithfactors.md): Constants that describe the axis of a shear transform.
- [changeBasis(from:to:)](changebasis%28from_to_%29.md): Returns a new affine transform structure by applying a change-of-basis.
- [flip(along:)](flip%28along_%29.md): Flips an affine transform along the specified axis.
- [flipped(along:)](flipped%28along_%29.md): Returns an affine transform that results from flipping it along the specified axis.
- [inverse](inverse.md): The affine transform’s inverse.
- [sheared(\_:)](sheared%28__%29.md): Returns an affine transform that results from shearing over an axis by shear factors for the other two axes.
