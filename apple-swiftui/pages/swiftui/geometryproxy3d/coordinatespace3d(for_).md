> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/geometryproxy3d/coordinatespace3d(for:)](https://developer.apple.com/documentation/swiftui/geometryproxy3d/coordinatespace3d(for:))

# coordinateSpace3D(for:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Returns a value that can be used for `CoordinateSpace3D` based coordinate conversions.

## Declaration

```swift
func coordinateSpace3D(for space: any CoordinateSpaceProtocol = LocalCoordinateSpace()) -> GeometryProxyCoordinateSpace3D
```

## Parameters

- `space`: The SwiftUI coordinate space to represent.
