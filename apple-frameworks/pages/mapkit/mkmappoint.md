> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmappoint](https://developer.apple.com/documentation/mapkit/mkmappoint)

# MKMapPoint (Swift)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A point on a two-dimensional map projection.

## Declaration

```swift
struct MKMapPoint
```

<a id="overview"></a>

## Overview

If you project the curved surface of the globe onto a flat surface, you get a two-dimensional version of a map where longitude lines appear to be parallel. An `MKMapPoint` data structure represents a point on this two-dimensional map.

The underlying units that MapKit uses to draw the contents of an [MKMapView](mkmapview.md) define the actual units of a map point, but you don’t need to worry about these units directly. You use map points primarily to simplify computations that are complex to do using coordinate values on a curved surface. By converting to map points, you can perform those calculations on a flat surface, which is generally much simpler, and then convert back as necessary. You can map between coordinate values and map points using the [init(\_:)](mkmappoint/init%28__%29.md) and [coordinate](mkmappoint/coordinate.md) functions.

When saving map-related data to a file, save coordinate values (latitude and longitude) rather than map points.

## Topics

### Creating a map point

- [init()](mkmappoint/init%28%29.md): Creates a map point at an unspecified point.
- [init(x:y:)](mkmappoint/init%28x_y_%29.md): Creates a new map point structure from the specified values.
- [init(\_:)](mkmappoint/init%28__%29.md): Creates the map point data structure that corresponds to the specified coordinate.

### Getting the point coordinates

- [x](mkmappoint/x.md): The location of the point along the x-axis of the map.
- [y](mkmappoint/y.md): The location of the point along the y-axis of the map.
- [coordinate](mkmappoint/coordinate.md): A 2D coordinate that corresponds to the latitude and longitude of the specified map point.

### Comparing map points

- [MKMapPointEqualToPoint(\_:\_:)](mkmappointequaltopoint%28____%29.md): Returns a Boolean value that indicates whether two map points are equal.

### Getting the distance between points

- [distance(to:)](mkmappoint/distance%28to_%29.md): Returns the number of meters between two map points.
- [MKMetersPerMapPointAtLatitude(\_:)](mkmeterspermappointatlatitude%28__%29.md): Returns the distance that one map point spans at the specified latitude.
- [MKMapPointsPerMeterAtLatitude(\_:)](mkmappointspermeteratlatitude%28__%29.md): Returns the number of map points that represent one meter at the specified latitude.

### Getting a description of the point

- [MKStringFromMapPoint(\_:)](mkstringfrommappoint%28__%29.md): Returns a formatted string for the specified map point.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Map coordinates

- [MKCoordinateRegion](mkcoordinateregion.md): A rectangular geographic region that centers around a specific latitude and longitude.
- [MKCoordinateSpan](mkcoordinatespan.md): The width and height of a map region.
- [MKMapRect](mkmaprect.md): A rectangular area on a two-dimensional map projection.
- [MKMapSize](mkmapsize.md): Width and height information on a two-dimensional map projection.
- [MKDistanceFormatter](mkdistanceformatter.md): A utility object that converts between a geographic distance and a string-based expression of that distance.

# MKMapPoint (Objective-C)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A point on a two-dimensional map projection.

## Declaration

```objectivec
typedef struct { ... } MKMapPoint;
```

<a id="overview"></a>

## Overview

If you project the curved surface of the globe onto a flat surface, you get a two-dimensional version of a map where longitude lines appear to be parallel. An `MKMapPoint` data structure represents a point on this two-dimensional map.

The underlying units that MapKit uses to draw the contents of an [MKMapView](mkmapview.md) define the actual units of a map point, but you don’t need to worry about these units directly. You use map points primarily to simplify computations that are complex to do using coordinate values on a curved surface. By converting to map points, you can perform those calculations on a flat surface, which is generally much simpler, and then convert back as necessary. You can map between coordinate values and map points using the [MKMapPointForCoordinate](mkmappoint/init%28__%29.md) and [MKCoordinateForMapPoint](mkmappoint/coordinate.md) functions.

When saving map-related data to a file, save coordinate values (latitude and longitude) rather than map points.

## Topics

### Creating a map point

- [MKMapPointForCoordinate](mkmappoint/init%28__%29.md): Creates the map point data structure that corresponds to the specified coordinate.

### Getting the point coordinates

- [x](mkmappoint/x.md): The location of the point along the x-axis of the map.
- [y](mkmappoint/y.md): The location of the point along the y-axis of the map.
- [MKCoordinateForMapPoint](mkmappoint/coordinate.md): A 2D coordinate that corresponds to the latitude and longitude of the specified map point.

### Comparing map points

- [MKMapPointEqualToPoint](mkmappointequaltopoint%28____%29.md): Returns a Boolean value that indicates whether two map points are equal.

### Getting the distance between points

- [MKMetersBetweenMapPoints](mkmappoint/distance%28to_%29.md): Returns the number of meters between two map points.
- [MKMetersPerMapPointAtLatitude](mkmeterspermappointatlatitude%28__%29.md): Returns the distance that one map point spans at the specified latitude.
- [MKMapPointsPerMeterAtLatitude](mkmappointspermeteratlatitude%28__%29.md): Returns the number of map points that represent one meter at the specified latitude.

### Getting a description of the point

- [MKStringFromMapPoint](mkstringfrommappoint%28__%29.md): Returns a formatted string for the specified map point.

## See Also

### Map coordinates

- [MKCoordinateRegion](mkcoordinateregion.md): A rectangular geographic region that centers around a specific latitude and longitude.
- [MKCoordinateSpan](mkcoordinatespan.md): The width and height of a map region.
- [MKMapRect](mkmaprect.md): A rectangular area on a two-dimensional map projection.
- [MKMapSize](mkmapsize.md): Width and height information on a two-dimensional map projection.
- [MKDistanceFormatter](mkdistanceformatter.md): A utility object that converts between a geographic distance and a string-based expression of that distance.
