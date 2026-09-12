> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkcoordinatespanmake](https://developer.apple.com/documentation/mapkit/mkcoordinatespanmake)

# MKCoordinateSpanMake

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new [MKCoordinateSpan](mkcoordinatespan.md) from the specified values.

## Declaration

```objectivec
static MKCoordinateSpan MKCoordinateSpanMake(CLLocationDegrees latitudeDelta, CLLocationDegrees longitudeDelta);
```

## Parameters

- `latitudeDelta`: The amount of north-to-south distance (measured in degrees) to use for the span. Unlike longitudinal distances, which vary based on the latitude, one degree of latitude is approximately 111 kilometers (69 miles) at all times.
- `longitudeDelta`: The amount of east-to-west distance (measured in degrees) to use for the span. The number of kilometers spanned by a longitude range varies based on the current latitude. For example, one degree of longitude spans a distance of approximately 111 kilometers (69 miles) at the equator but shrinks to 0 kilometers at the poles.

<a id="return-value"></a>

## Return Value

A span with the specified delta values.

## See Also

### Functions

- [MKCoordinateRegionMake](mkcoordinateregionmake.md): Creates a new coordinate region from the specified coordinate and span values.
- [MKCoordinateRegionMakeWithDistance](mkcoordinateregion/init%28center_latitudinalmeters_longitudinalmeters_%29.md): Creates a new coordinate region from the specified coordinate and distance values.
- [MKMapPointForCoordinate](mkmappoint/init%28__%29.md): Creates the map point data structure that corresponds to the specified coordinate.
- [MKMapPointMake](mkmappointmake.md): Creates a new map point structure from the specified values.
- [MKMapSizeMake](mkmapsizemake.md): Creates a new map size structure from the specified values.
