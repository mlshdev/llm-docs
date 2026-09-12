> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mappolyline/init(points:contourstyle:)](https://developer.apple.com/documentation/mapkit/mappolyline/init(points:contourstyle:))

# init(points:contourStyle:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a new polyline that traces a path between the provided points using the specifed contour style.

## Declaration

```swift
init(points: [MKMapPoint], contourStyle: MapPolyline.ContourStyle = .straight)
```

## Parameters

- `points`: The points to trace the path between.
- `contourStyle`: The [MapPolyline.ContourStyle](contourstyle.md) to use.

## See Also

### Creating a polyline

- [init(\_:)](init%28__%29-93u7w.md): Creates a polyline from polyline you provide.
- [init(\_:)](init%28__%29-5p2kx.md): Creates a polyline that traces the route you provide.
- [init(coordinates:contourStyle:)](init%28coordinates_contourstyle_%29.md): Creates a polyline that traces a path between the given coordinates using the specifed contour style.
