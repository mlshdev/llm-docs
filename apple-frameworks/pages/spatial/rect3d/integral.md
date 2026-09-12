> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3d/integral](https://developer.apple.com/documentation/spatial/rect3d/integral)

# integral (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the smallest rectangle after converting the source rectangle values to integers.

## Declaration

```swift
var integral: Rect3D { get }
```

## See Also

### Creating derived 3D rectangles

- [formInset(by:)](forminset%28by_%29.md): Insets the rectangle by the specified size.
- [inset(by:)](inset%28by_%29.md): Returns a new rectangle with the same center point after applying the specified inset amount.
- [intersection(\_:)](intersection%28__%29.md): Returns the intersection of two rectangles.
- [standardized](standardized.md): A rectangle with positive dimensions.

# SPRect3DIntegral (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the smallest rectangle after converting the source rectangle values to integers.

## Declaration

```objectivec
static SPRect3D SPRect3DIntegral(SPRect3D rect);
```

## See Also

### Creating derived 3D rectangles

- [SPRect3DInset](inset%28by_%29.md): Returns a new rectangle with the same center point after applying the specified inset amount.
- [SPRect3DStandardize](standardized.md): A rectangle with positive dimensions.
- [SPRect3DIntersection](../sprect3dintersection.md): Returns the intersection of two rectangles.
- [SPRect3DUnion](../sprect3dunion.md): Returns the smallest rectangle that contains two rectangles.
