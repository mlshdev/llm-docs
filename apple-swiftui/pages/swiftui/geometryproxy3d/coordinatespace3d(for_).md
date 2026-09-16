> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/geometryproxy3d/coordinatespace3d(for:)

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
