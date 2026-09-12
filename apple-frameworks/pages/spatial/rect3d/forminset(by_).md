> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3d/forminset(by:)](https://developer.apple.com/documentation/spatial/rect3d/forminset(by:))

# formInset(by:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Insets the rectangle by the specified size.

## Declaration

```swift
mutating func formInset(by dXYZ: Size3D)
```

## Parameters

- `dXYZ`: The size structure that defines the inset values.

## See Also

### Creating derived 3D rectangles

- [integral](integral.md): Returns the smallest rectangle after converting the source rectangle values to integers.
- [inset(by:)](inset%28by_%29.md): Returns a new rectangle with the same center point after applying the specified inset amount.
- [intersection(\_:)](intersection%28__%29.md): Returns the intersection of two rectangles.
- [standardized](standardized.md): A rectangle with positive dimensions.
