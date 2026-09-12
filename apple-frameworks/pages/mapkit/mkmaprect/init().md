> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprect/init()](https://developer.apple.com/documentation/mapkit/mkmaprect/init())

# init()

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates the rectangle with an empty region.

## Declaration

```swift
init()
```

<a id="Discussion"></a>

## Discussion

This method sets the origin point to `(0, 0)` and the size to `(0, 0)`.

## See Also

### Creating a map rectangle

- [init(origin:size:)](init%28origin_size_%29.md): Creates the map rectangle with the specified point and size.
- [init(x:y:width:height:)](init%28x_y_width_height_%29.md): Creates a new map rectangle structure from the specified values.
- [init(\_:)](../mkcoordinateregion/init%28__%29.md): Returns the region that corresponds to the specified map rectangle.
