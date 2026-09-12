> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprect/init(origin:size:)](https://developer.apple.com/documentation/mapkit/mkmaprect/init(origin:size:))

# init(origin:size:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates the map rectangle with the specified point and size.

## Declaration

```swift
init(origin: MKMapPoint, size: MKMapSize)
```

## Parameters

- `origin`: The origin of the map rectangle as an [MKMapPoint](../mkmappoint.md).
- `size`: The size of the map rectangle as an [MKMapSize](../mkmapsize.md).

## See Also

### Creating a map rectangle

- [init()](init%28%29.md): Creates the rectangle with an empty region.
- [init(x:y:width:height:)](init%28x_y_width_height_%29.md): Creates a new map rectangle structure from the specified values.
- [init(\_:)](../mkcoordinateregion/init%28__%29.md): Returns the region that corresponds to the specified map rectangle.
