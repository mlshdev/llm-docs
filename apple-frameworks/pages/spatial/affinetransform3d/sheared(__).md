> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3d/sheared(_:)](https://developer.apple.com/documentation/spatial/affinetransform3d/sheared(_:))

# sheared(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns an affine transform that results from shearing over an axis by shear factors for the other two axes.

## Declaration

```swift
func sheared(_ shear: AxisWithFactors) -> AffineTransform3D
```

## Parameters

- `shear`: The shear axis and factors.

<a id="return-value"></a>

## Return Value

The affine transform that results from shearing over an axis by shear factors for the other two axes.

## See Also

### Transforming a 3D affine transform structure

- [Axis3D](../axis3d.md): Constants that describe an axis.
- [AxisWithFactors](../axiswithfactors.md): Constants that describe the axis of a shear transform.
- [changeBasis(from:to:)](changebasis%28from_to_%29.md): Returns a new affine transform structure by applying a change-of-basis.
- [flip(along:)](flip%28along_%29.md): Flips an affine transform along the specified axis.
- [flipped(along:)](flipped%28along_%29.md): Returns an affine transform that results from flipping it along the specified axis.
- [inverse](inverse.md): The affine transform’s inverse.
- [scaledBy(x:y:z:)](scaledby%28x_y_z_%29.md): Returns a transform that results from scaling with specified double-precision values.
