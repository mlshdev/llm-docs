> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3disuniformoverdimensions](https://developer.apple.com/documentation/spatial/spprojectivetransform3disuniformoverdimensions)

# SPProjectiveTransform3DIsUniformOverDimensions

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value that indicates whether the transform scales equally over the specified dimensions.

## Declaration

```objectivec
static bool SPProjectiveTransform3DIsUniformOverDimensions(SPProjectiveTransform3D transform, SPAxis dimensionFlags);
```

## See Also

### Checking characteristics

- [SPProjectiveTransform3DIs3DProjection](projectivetransform3d/is3dprojection%28%29.md): Returns a Boolean value that indicates whether the transform is a 3D projection.
- [SPProjectiveTransform3DIsAffine](projectivetransform3d/isaffine.md): A Boolean value that indicates whether the transform is affine.
- [SPProjectiveTransform3DIsInvertible](projectivetransform3d/isinvertible.md): Returns a Boolean value that indicates whether the transform is invertible.
- [SPProjectiveTransform3DIsValid](spprojectivetransform3disvalid.md): A Boolean value that indicates whether the transform is a valid transform.
- [SPProjectiveTransform3DInvalid](spprojectivetransform3dinvalid.md): The null transform that represents an invalid value.
