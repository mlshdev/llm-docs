> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmappointmake](https://developer.apple.com/documentation/mapkit/mkmappointmake)

# MKMapPointMake

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new map point structure from the specified values.

## Declaration

```objectivec
static MKMapPoint MKMapPointMake(double x, double y);
```

## Parameters

- `x`: The point along the east-west axis of the map projection.
- `y`: The point along the north-south axis of the map projection.

<a id="return-value"></a>

## Return Value

A map point with the specified values.

## See Also

### Functions

- [MKCoordinateRegionMake](mkcoordinateregionmake.md): Creates a new coordinate region from the specified coordinate and span values.
- [MKCoordinateRegionMakeWithDistance](mkcoordinateregion/init%28center_latitudinalmeters_longitudinalmeters_%29.md): Creates a new coordinate region from the specified coordinate and distance values.
- [MKCoordinateSpanMake](mkcoordinatespanmake.md): Creates a new [MKCoordinateSpan](mkcoordinatespan.md) from the specified values.
- [MKMapPointForCoordinate](mkmappoint/init%28__%29.md): Creates the map point data structure that corresponds to the specified coordinate.
- [MKMapSizeMake](mkmapsizemake.md): Creates a new map size structure from the specified values.
