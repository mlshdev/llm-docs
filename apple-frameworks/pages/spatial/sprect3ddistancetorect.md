> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprect3ddistancetorect](https://developer.apple.com/documentation/spatial/sprect3ddistancetorect)

# SPRect3DDistanceToRect

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 16.0) · iPadOS 16.0+ (deprecated in 16.0) · Mac Catalyst 16.0+ (deprecated in 16.0) · macOS 13.0+ (deprecated in 13.0) · tvOS 16.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.0+ (deprecated in 9.0)

## Declaration

```objectivec
static double SPRect3DDistanceToRect(SPRect3D rect, SPRect3D other);
```

## Parameters

- `rect`: The first rectangle.
- `other`: The second rectangle.

<a id="return-value"></a>

## Return Value

The distance between the two rectangle.

<a id="discussion"></a>

## Discussion

Returns the distance between the origins of two rectangle.

## See Also

### Checking characteristics

- [SPRect3DIntersectsRect](rect3d/intersects%28__%29.md): Returns a Boolean value that indicates whether two rectangles intersect.
- [SPRect3DIsEmpty](rect3d/isempty.md): A Boolean value that indicates whether two or three of the dimensions are zero.
- [SPRect3DContainsAnyPoint](sprect3dcontainsanypoint.md): Returns a Boolean value that indicates whether the rectangle contains any of the specified points.
- [SPRect3DContainsPoint](sprect3dcontainspoint.md): Returns a Boolean value that indicates whether the rectangle contains the specified point.
- [SPRect3DContainsRect](sprect3dcontainsrect.md): Returns a Boolean value that indicates whether the rectangle contains the specified rectangle.
- [SPRect3DIsFinite](sprect3disfinite.md): A Boolean value that indicates whether all of the coordinates and dimensions of the rectangle are finite.
- [SPRect3DIsNaN](sprect3disnan.md): A Boolean value that indicates whether any of the coordinates and dimensions of the rectangle are NaN.
- [SPRect3DIsNull](sprect3disnull.md): A Boolean value that indicates whether the rectangle is equal to the null rectangle.
- [SPRect3DIsZero](sprect3diszero.md): A Boolean value that indicates whether the rectangle’s origin and size are zero.
