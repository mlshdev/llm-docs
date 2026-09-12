> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkcoordinatespan/init(latitudedelta:longitudedelta:)](https://developer.apple.com/documentation/mapkit/mkcoordinatespan/init(latitudedelta:longitudedelta:))

# init(latitudeDelta:longitudeDelta:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new [MKCoordinateSpan](../mkcoordinatespan.md) from the specified values.

## Declaration

```swift
init(latitudeDelta: CLLocationDegrees, longitudeDelta: CLLocationDegrees)
```

## Parameters

- `latitudeDelta`: The amount of north-to-south distance (measured in degrees) to use for the span. Unlike longitudinal distances, which vary based on the latitude, one degree of latitude is approximately 111 kilometers (69 miles) at all times.
- `longitudeDelta`: The amount of east-to-west distance (measured in degrees) to use for the span. The number of kilometers spanned by a longitude range varies based on the current latitude. For example, one degree of longitude spans a distance of approximately 111 kilometers (69 miles) at the equator but shrinks to 0 kilometers at the poles.

<a id="return-value"></a>

## Return Value

A span with the specified delta values.

## See Also

### Creating a coordinate span

- [init()](init%28%29.md): Creates a coordinate span that represents a width and height on a map.
