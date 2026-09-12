> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3d/inset(by:)](https://developer.apple.com/documentation/spatial/rect3d/inset(by:))

# inset(by:) (Swift)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a new rectangle with the same center point after applying the specified inset amount.

## Declaration

```swift
func inset(by dXYZ: Size3D) -> Rect3D
```

## Parameters

- `dXYZ`: The size structure that defines the inset values.

<a id="return-value"></a>

## Return Value

A new rectangle with the same center point after applying the specified inset amount.

## See Also

### Creating derived 3D rectangles

- [integral](integral.md): Returns the smallest rectangle after converting the source rectangle values to integers.
- [formInset(by:)](forminset%28by_%29.md): Insets the rectangle by the specified size.
- [intersection(\_:)](intersection%28__%29.md): Returns the intersection of two rectangles.
- [standardized](standardized.md): A rectangle with positive dimensions.

# SPRect3DInset (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a new rectangle with the same center point after applying the specified inset amount.

## Declaration

```objectivec
static SPRect3D SPRect3DInset(SPRect3D rect, SPSize3D dXYZ);
```

## Parameters

- `rect`: The rectangle to calculate the inset from.
- `dXYZ`: The size structure that defines the inset values.

<a id="return-value"></a>

## Return Value

A new rectangle with the same center point after applying the specified inset amount.

## See Also

### Creating derived 3D rectangles

- [SPRect3DIntegral](integral.md): Returns the smallest rectangle after converting the source rectangle values to integers.
- [SPRect3DStandardize](standardized.md): A rectangle with positive dimensions.
- [SPRect3DIntersection](../sprect3dintersection.md): Returns the intersection of two rectangles.
- [SPRect3DUnion](../sprect3dunion.md): Returns the smallest rectangle that contains two rectangles.
