> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3d/contains(anyof:)](https://developer.apple.com/documentation/spatial/rect3d/contains(anyof:))

# contains(anyOf:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a Boolean value that indicates whether the rectangle contains any of the specified points.

## Declaration

```swift
func contains(anyOf points: [Point3D]) -> Bool
```

## Parameters

- `points`: The array of points that the function compares against.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the rectangle contains any of the specified points.

## See Also

### Checking characteristics

- [intersects(\_:)](intersects%28__%29.md): Returns a Boolean value that indicates whether two rectangles intersect.
- [isEmpty](isempty.md): A Boolean value that indicates whether two or three of the dimensions are zero.
