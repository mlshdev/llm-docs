> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3d/standardized](https://developer.apple.com/documentation/spatial/rect3d/standardized)

# standardized (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A rectangle with positive dimensions.

## Declaration

```swift
var standardized: Rect3D { get }
```

## See Also

### Creating derived 3D rectangles

- [integral](integral.md): Returns the smallest rectangle after converting the source rectangle values to integers.
- [formInset(by:)](forminset%28by_%29.md): Insets the rectangle by the specified size.
- [inset(by:)](inset%28by_%29.md): Returns a new rectangle with the same center point after applying the specified inset amount.
- [intersection(\_:)](intersection%28__%29.md): Returns the intersection of two rectangles.

# SPRect3DStandardize (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A rectangle with positive dimensions.

## Declaration

```objectivec
static SPRect3D SPRect3DStandardize(SPRect3D rect);
```

## See Also

### Creating derived 3D rectangles

- [SPRect3DIntegral](integral.md): Returns the smallest rectangle after converting the source rectangle values to integers.
- [SPRect3DInset](inset%28by_%29.md): Returns a new rectangle with the same center point after applying the specified inset amount.
- [SPRect3DIntersection](../sprect3dintersection.md): Returns the intersection of two rectangles.
- [SPRect3DUnion](../sprect3dunion.md): Returns the smallest rectangle that contains two rectangles.
