> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3d/intersects(_:)](https://developer.apple.com/documentation/spatial/rect3d/intersects(_:))

# intersects(\_:) (Swift)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value that indicates whether two rectangles intersect.

## Declaration

```swift
func intersects(_ other: Rect3D) -> Bool
```

## Parameters

- `other`: The rectangle that the function compares against.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether two rectangles intersect.

## See Also

### Checking characteristics

- [contains(anyOf:)](contains%28anyof_%29.md): Returns a Boolean value that indicates whether the rectangle contains any of the specified points.
- [isEmpty](isempty.md): A Boolean value that indicates whether two or three of the dimensions are zero.

# SPRect3DIntersectsRect (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value that indicates whether two rectangles intersect.

## Declaration

```objectivec
static bool SPRect3DIntersectsRect(SPRect3D rect, SPRect3D other);
```

## Parameters

- `rect`: The rectangle to compare.
- `other`: The rectangle that the function compares against.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether two rectangles intersect.

## See Also

### Checking characteristics

- [SPRect3DIsEmpty](isempty.md): A Boolean value that indicates whether two or three of the dimensions are zero.
- [SPRect3DContainsAnyPoint](../sprect3dcontainsanypoint.md): Returns a Boolean value that indicates whether the rectangle contains any of the specified points.
- [SPRect3DContainsPoint](../sprect3dcontainspoint.md): Returns a Boolean value that indicates whether the rectangle contains the specified point.
- [SPRect3DContainsRect](../sprect3dcontainsrect.md): Returns a Boolean value that indicates whether the rectangle contains the specified rectangle.
- [SPRect3DDistanceToRect](../sprect3ddistancetorect.md): Deprecated.
- [SPRect3DIsFinite](../sprect3disfinite.md): A Boolean value that indicates whether all of the coordinates and dimensions of the rectangle are finite.
- [SPRect3DIsNaN](../sprect3disnan.md): A Boolean value that indicates whether any of the coordinates and dimensions of the rectangle are NaN.
- [SPRect3DIsNull](../sprect3disnull.md): A Boolean value that indicates whether the rectangle is equal to the null rectangle.
- [SPRect3DIsZero](../sprect3diszero.md): A Boolean value that indicates whether the rectangle’s origin and size are zero.
