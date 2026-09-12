> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransform3d/flipped(along:)](https://developer.apple.com/documentation/spatial/projectivetransform3d/flipped(along:))

# flipped(along:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a projective transform that results from flipping it along the specified axis.

## Declaration

```swift
func flipped(along axis: Axis3D) -> ProjectiveTransform3D
```

## Parameters

- `axis`: An axis structure that specifies the flip axis.

## See Also

### Transforming a 3D projective transform structure

- [sheared(\_:)](sheared%28__%29.md): Returns a projective transform that results from shearing over an axis by shear factors for the other two axes.
- [AxisWithFactors](../axiswithfactors.md): Constants that describe the axis of a shear transform.
- [Axis3D](../axis3d.md): Constants that describe an axis.
- [flip(along:)](flip%28along_%29.md): Flips a projective transform along the specified axis.
