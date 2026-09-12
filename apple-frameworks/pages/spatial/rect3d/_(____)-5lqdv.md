> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3d/*(_:_:)-5lqdv](https://developer.apple.com/documentation/spatial/rect3d/*(_:_:)-5lqdv)

# \*(\_:\_:)

**Framework:** Spatial  
**Kind:** Operator  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a new rectangle after applying the pose to the rectangle.

## Declaration

```swift
static func * (lhs: Pose3D, rhs: Rect3D) -> Rect3D
```

## Parameters

- `lhs`: The left-hand-side value.
- `rhs`: The right-hand-side value.

## See Also

### Applying arithmetic operations

- [\*(\_:\_:)](_%28____%29-8710d.md): Returns the rectangle that results from applying the affine transform to the rectangle.
- [\*(\_:\_:)](_%28____%29-8vu0.md): Returns the rectangle that results from applying the projective transform to the rectangle.
