> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransform3d/isaffine](https://developer.apple.com/documentation/spatial/projectivetransform3d/isaffine)

# isAffine (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the transform is affine.

## Declaration

```swift
var isAffine: Bool { get }
```

## See Also

### Checking characteristics

- [is3DProjection()](is3dprojection%28%29.md): Returns a Boolean value that indicates whether the transform is a 3D projection.
- [isUniform(overDimensions:)](isuniform%28overdimensions_%29.md): Returns a Boolean value that indicates whether the transform scales equally over the specified dimensions.
- [isInvertible](isinvertible.md): Returns a Boolean value that indicates whether the transform is invertible.

# SPProjectiveTransform3DIsAffine (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the transform is affine.

## Declaration

```objectivec
static bool SPProjectiveTransform3DIsAffine(SPProjectiveTransform3D transform);
```

## See Also

### Checking characteristics

- [SPProjectiveTransform3DIs3DProjection](is3dprojection%28%29.md): Returns a Boolean value that indicates whether the transform is a 3D projection.
- [SPProjectiveTransform3DIsInvertible](isinvertible.md): Returns a Boolean value that indicates whether the transform is invertible.
- [SPProjectiveTransform3DIsUniformOverDimensions](../spprojectivetransform3disuniformoverdimensions.md): Returns a Boolean value that indicates whether the transform scales equally over the specified dimensions.
- [SPProjectiveTransform3DIsValid](../spprojectivetransform3disvalid.md): A Boolean value that indicates whether the transform is a valid transform.
- [SPProjectiveTransform3DInvalid](../spprojectivetransform3dinvalid.md): The null transform that represents an invalid value.
