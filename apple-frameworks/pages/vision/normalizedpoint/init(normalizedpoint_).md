> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/normalizedpoint/init(normalizedpoint:)](https://developer.apple.com/documentation/vision/normalizedpoint/init(normalizedpoint:))

# init(normalizedPoint:)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Creates a point object from the specified Core Graphics point.

## Declaration

```swift
init(normalizedPoint: CGPoint)
```

## Parameters

- `normalizedPoint`: The Core Graphics point.

## See Also

### Creating a normalized point

- [init(x:y:)](init%28x_y_%29.md): Creates a point object with the specified coordinates.
- [init(imagePoint:in:)](init%28imagepoint_in_%29.md): Creates a normalized point from a point in an image coordinate space.
- [init(imagePoint:in:normalizedTo:)](init%28imagepoint_in_normalizedto_%29.md): Creates a point normalized to a region of interest within an image.
- [zero](zero.md): A point object that represents the origin.
