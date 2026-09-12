> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/rectangleobservation/init(topleft:topright:bottomright:bottomleft:)](https://developer.apple.com/documentation/vision/rectangleobservation/init(topleft:topright:bottomright:bottomleft:))

# init(topLeft:topRight:bottomRight:bottomLeft:)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Creates a rectangle observation from its corner points.

## Declaration

```swift
init(topLeft: NormalizedPoint, topRight: NormalizedPoint, bottomRight: NormalizedPoint, bottomLeft: NormalizedPoint)
```

<a id="Discussion"></a>

## Discussion

The framework normalizes the coordinates of the rectangle to the dimensions of the processed image, with the origin at the bottom-left corner of the image.

## See Also

### Creating an observation

- [init(\_:)](init%28__%29.md): Creates a rectangle observation.
