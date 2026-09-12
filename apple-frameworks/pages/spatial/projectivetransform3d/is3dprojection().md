> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransform3d/is3dprojection()](https://developer.apple.com/documentation/spatial/projectivetransform3d/is3dprojection())

# is3DProjection() (Swift)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value that indicates whether the transform is a 3D projection.

## Declaration

```swift
func is3DProjection() -> Bool
```

## See Also

### Checking characteristics

- [isUniform(overDimensions:)](isuniform%28overdimensions_%29.md): Returns a Boolean value that indicates whether the transform scales equally over the specified dimensions.
- [isAffine](isaffine.md): A Boolean value that indicates whether the transform is affine.
- [isInvertible](isinvertible.md): Returns a Boolean value that indicates whether the transform is invertible.

# SPProjectiveTransform3DIs3DProjection (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value that indicates whether the transform is a 3D projection.

## Declaration

```objectivec
static bool SPProjectiveTransform3DIs3DProjection(SPProjectiveTransform3D transform);
```

## See Also

### Checking characteristics

- [SPProjectiveTransform3DIsAffine](isaffine.md): A Boolean value that indicates whether the transform is affine.
- [SPProjectiveTransform3DIsInvertible](isinvertible.md): Returns a Boolean value that indicates whether the transform is invertible.
- [SPProjectiveTransform3DIsUniformOverDimensions](../spprojectivetransform3disuniformoverdimensions.md): Returns a Boolean value that indicates whether the transform scales equally over the specified dimensions.
- [SPProjectiveTransform3DIsValid](../spprojectivetransform3disvalid.md): A Boolean value that indicates whether the transform is a valid transform.
- [SPProjectiveTransform3DInvalid](../spprojectivetransform3dinvalid.md): The null transform that represents an invalid value.
