> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapmarker/init(coordinate:tint:)](https://developer.apple.com/documentation/mapkit/mapmarker/init(coordinate:tint:))

# init(coordinate:tint:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · visionOS · watchOS 7.0+ (deprecated in 10.0)

Creates a marker annotation at the map location you specify.

> Use Marker along with Map initializers that take a MapContentBuilder instead.

## Declaration

```swift
init(coordinate: CLLocationCoordinate2D, tint: Color? = nil)
```

## Parameters

- `coordinate`: The location of the specified marker.
- `tint`: The color of the marker.
