> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mktileoverlaypath/init(x:y:z:contentscalefactor:)](https://developer.apple.com/documentation/mapkit/mktileoverlaypath/init(x:y:z:contentscalefactor:))

# init(x:y:z:contentScaleFactor:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new overlay path with the specified indexes and content scale factor.

## Declaration

```swift
init(x: Int, y: Int, z: Int, contentScaleFactor: CGFloat)
```

## Parameters

- `x`: The index of the tile along the x-axis of the map.
- `y`: The index of the tile along the y-axis of the map.
- `z`: The index of the tile along the z-axis of the map.
- `contentScaleFactor`: The screen scale that the framework shows the tile. This value is typically either `1.0` (for standard resolution displays) or `2.0` (for Retina displays).

## See Also

### Creating a tile overlay path

- [init()](init%28%29.md): Creates a new tile overlay path.
