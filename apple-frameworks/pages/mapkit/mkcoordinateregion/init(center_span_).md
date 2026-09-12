> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkcoordinateregion/init(center:span:)](https://developer.apple.com/documentation/mapkit/mkcoordinateregion/init(center:span:))

# init(center:span:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a coordinate region with a span around the specified center coordinate.

## Declaration

```swift
init(center: CLLocationCoordinate2D, span: MKCoordinateSpan)
```

## Parameters

- `center`: The center of the coordinate region.
- `span`: The span around the center of the coordinate region.

## See Also

### Creating a region

- [init()](init%28%29.md): Creates a coordinate region.
- [init(center:latitudinalMeters:longitudinalMeters:)](init%28center_latitudinalmeters_longitudinalmeters_%29.md): Creates a new coordinate region from the specified coordinate and distance values.
- [init(\_:)](init%28__%29.md): Returns the region that corresponds to the specified map rectangle.
