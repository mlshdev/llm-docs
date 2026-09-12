> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapsize](https://developer.apple.com/documentation/mapkit/mkmapsize)

# MKMapSize (Swift)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Width and height information on a two-dimensional map projection.

## Declaration

```swift
struct MKMapSize
```

<a id="overview"></a>

## Overview

If you project the curved surface of the globe onto a flat surface, what you get is a two-dimensional version of a map where longitude lines appear to be parallel. Such maps are often used to show the entire surface of the globe all at once. An `MKMapSize` data structure represents a horizontal and vertical distance as measured on this two-dimensional map.

## Topics

### Creating a map size

- [init()](mkmapsize/init%28%29.md): Creates a map size that represents an empty area on a two-dimensional projection of a map.
- [init(width:height:)](mkmapsize/init%28width_height_%29.md): Creates a map size that represents an area on a two-dimensional projection of a map with the specified width and height.

### Getting standard map sizes

- [world](mkmapsize/world.md): The width and height, in map points, of the world in a two-dimensional map projection.

### Getting the width and height

- [height](mkmapsize/height.md): The height of the specified area, measured in map points.
- [width](mkmapsize/width.md): The width of the specified area, measured in map points.

### Comparing map sizes

- [MKMapSizeEqualToSize(\_:\_:)](mkmapsizeequaltosize%28____%29.md): Returns a Boolean value that indicates whether two map sizes are equal.

### Getting a description of the size

- [MKStringFromMapSize(\_:)](mkstringfrommapsize%28__%29.md): Returns a formatted string for the specified map size.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Map coordinates

- [MKCoordinateRegion](mkcoordinateregion.md): A rectangular geographic region that centers around a specific latitude and longitude.
- [MKCoordinateSpan](mkcoordinatespan.md): The width and height of a map region.
- [MKMapRect](mkmaprect.md): A rectangular area on a two-dimensional map projection.
- [MKMapPoint](mkmappoint.md): A point on a two-dimensional map projection.
- [MKDistanceFormatter](mkdistanceformatter.md): A utility object that converts between a geographic distance and a string-based expression of that distance.

# MKMapSize (Objective-C)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Width and height information on a two-dimensional map projection.

## Declaration

```objectivec
typedef struct { ... } MKMapSize;
```

<a id="overview"></a>

## Overview

If you project the curved surface of the globe onto a flat surface, what you get is a two-dimensional version of a map where longitude lines appear to be parallel. Such maps are often used to show the entire surface of the globe all at once. An `MKMapSize` data structure represents a horizontal and vertical distance as measured on this two-dimensional map.

## Topics

### Getting standard map sizes

- [MKMapSizeWorld](mkmapsize/world.md): The width and height, in map points, of the world in a two-dimensional map projection.

### Getting the width and height

- [height](mkmapsize/height.md): The height of the specified area, measured in map points.
- [width](mkmapsize/width.md): The width of the specified area, measured in map points.

### Comparing map sizes

- [MKMapSizeEqualToSize](mkmapsizeequaltosize%28____%29.md): Returns a Boolean value that indicates whether two map sizes are equal.

### Getting a description of the size

- [MKStringFromMapSize](mkstringfrommapsize%28__%29.md): Returns a formatted string for the specified map size.

## See Also

### Map coordinates

- [MKCoordinateRegion](mkcoordinateregion.md): A rectangular geographic region that centers around a specific latitude and longitude.
- [MKCoordinateSpan](mkcoordinatespan.md): The width and height of a map region.
- [MKMapRect](mkmaprect.md): A rectangular area on a two-dimensional map projection.
- [MKMapPoint](mkmappoint.md): A point on a two-dimensional map projection.
- [MKDistanceFormatter](mkdistanceformatter.md): A utility object that converts between a geographic distance and a string-based expression of that distance.
