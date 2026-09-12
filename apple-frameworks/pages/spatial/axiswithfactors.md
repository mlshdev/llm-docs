> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/axiswithfactors](https://developer.apple.com/documentation/spatial/axiswithfactors)

# AxisWithFactors

**Framework:** Spatial  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Constants that describe the axis of a shear transform.

## Declaration

```swift
enum AxisWithFactors
```

## Topics

### Enumeration cases

- [AxisWithFactors.xAxis(yShearFactor:zShearFactor:)](axiswithfactors/xaxis%28yshearfactor_zshearfactor_%29.md): Shears over the x-axis with shear factors for the y- and z-axis.
- [AxisWithFactors.yAxis(xShearFactor:zShearFactor:)](axiswithfactors/yaxis%28xshearfactor_zshearfactor_%29.md): Shears over the y-axis with shear factors for the x- and z-axis.
- [AxisWithFactors.zAxis(xShearFactor:yShearFactor:)](axiswithfactors/zaxis%28xshearfactor_yshearfactor_%29.md): Shears over the z-axis with shear factors for the x- and y-axis.

## See Also

### Transforming a 3D affine transform structure

- [Axis3D](axis3d.md): Constants that describe an axis.
- [changeBasis(from:to:)](affinetransform3d/changebasis%28from_to_%29.md): Returns a new affine transform structure by applying a change-of-basis.
- [flip(along:)](affinetransform3d/flip%28along_%29.md): Flips an affine transform along the specified axis.
- [flipped(along:)](affinetransform3d/flipped%28along_%29.md): Returns an affine transform that results from flipping it along the specified axis.
- [inverse](affinetransform3d/inverse.md): The affine transform’s inverse.
- [scaledBy(x:y:z:)](affinetransform3d/scaledby%28x_y_z_%29.md): Returns a transform that results from scaling with specified double-precision values.
- [sheared(\_:)](affinetransform3d/sheared%28__%29.md): Returns an affine transform that results from shearing over an axis by shear factors for the other two axes.
