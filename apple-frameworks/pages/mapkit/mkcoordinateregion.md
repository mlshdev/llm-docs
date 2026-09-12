> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkcoordinateregion](https://developer.apple.com/documentation/mapkit/mkcoordinateregion)

# MKCoordinateRegion (Swift)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rectangular geographic region that centers around a specific latitude and longitude.

## Declaration

```swift
struct MKCoordinateRegion
```

## Topics

### Creating a region

- [init()](mkcoordinateregion/init%28%29.md): Creates a coordinate region.
- [init(center:latitudinalMeters:longitudinalMeters:)](mkcoordinateregion/init%28center_latitudinalmeters_longitudinalmeters_%29.md): Creates a new coordinate region from the specified coordinate and distance values.
- [init(\_:)](mkcoordinateregion/init%28__%29.md): Returns the region that corresponds to the specified map rectangle.
- [init(center:span:)](mkcoordinateregion/init%28center_span_%29.md): Creates a coordinate region with a span around the specified center coordinate.

### Getting the region coordinates

- [center](mkcoordinateregion/center.md): The center point of the region.
- [span](mkcoordinateregion/span.md): The horizontal and vertical span representing the amount of map to display.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Map coordinates

- [MKCoordinateSpan](mkcoordinatespan.md): The width and height of a map region.
- [MKMapRect](mkmaprect.md): A rectangular area on a two-dimensional map projection.
- [MKMapPoint](mkmappoint.md): A point on a two-dimensional map projection.
- [MKMapSize](mkmapsize.md): Width and height information on a two-dimensional map projection.
- [MKDistanceFormatter](mkdistanceformatter.md): A utility object that converts between a geographic distance and a string-based expression of that distance.

# MKCoordinateRegion (Objective-C)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rectangular geographic region that centers around a specific latitude and longitude.

## Declaration

```objectivec
typedef struct { ... } MKCoordinateRegion;
```

## Topics

### Creating a region

- [MKCoordinateRegionMakeWithDistance](mkcoordinateregion/init%28center_latitudinalmeters_longitudinalmeters_%29.md): Creates a new coordinate region from the specified coordinate and distance values.
- [MKCoordinateRegionForMapRect](mkcoordinateregion/init%28__%29.md): Returns the region that corresponds to the specified map rectangle.

### Getting the region coordinates

- [center](mkcoordinateregion/center.md): The center point of the region.
- [span](mkcoordinateregion/span.md): The horizontal and vertical span representing the amount of map to display.

## See Also

### Map coordinates

- [MKCoordinateSpan](mkcoordinatespan.md): The width and height of a map region.
- [MKMapRect](mkmaprect.md): A rectangular area on a two-dimensional map projection.
- [MKMapPoint](mkmappoint.md): A point on a two-dimensional map projection.
- [MKMapSize](mkmapsize.md): Width and height information on a two-dimensional map projection.
- [MKDistanceFormatter](mkdistanceformatter.md): A utility object that converts between a geographic distance and a string-based expression of that distance.
