> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3d/intersection(_:)](https://developer.apple.com/documentation/spatial/rect3d/intersection(_:))

# intersection(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns the intersection of two rectangles.

## Declaration

```swift
func intersection(_ other: Rect3D) -> Rect3D?
```

## Parameters

- `other`: The rectangle that the function compares against.

<a id="return-value"></a>

## Return Value

A new rectangle that is the intersection of two rectangles.

## See Also

### Creating derived 3D rectangles

- [integral](integral.md): Returns the smallest rectangle after converting the source rectangle values to integers.
- [formInset(by:)](forminset%28by_%29.md): Insets the rectangle by the specified size.
- [inset(by:)](inset%28by_%29.md): Returns a new rectangle with the same center point after applying the specified inset amount.
- [standardized](standardized.md): A rectangle with positive dimensions.
