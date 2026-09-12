> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkcoordinatespan](https://developer.apple.com/documentation/mapkit/mkcoordinatespan)

# MKCoordinateSpan (Swift)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The width and height of a map region.

## Declaration

```swift
struct MKCoordinateSpan
```

<a id="overview"></a>

## Overview

You use the delta values in this structure to indicate the desired zoom level of the map, with smaller delta values corresponding to a higher zoom level.

## Topics

### Creating a coordinate span

- [init()](mkcoordinatespan/init%28%29.md): Creates a coordinate span that represents a width and height on a map.
- [init(latitudeDelta:longitudeDelta:)](mkcoordinatespan/init%28latitudedelta_longitudedelta_%29.md): Creates a new [MKCoordinateSpan](mkcoordinatespan.md) from the specified values.

### Getting the span coordinates

- [latitudeDelta](mkcoordinatespan/latitudedelta.md): The amount of north-to-south distance (measured in degrees) to display on the map.
- [longitudeDelta](mkcoordinatespan/longitudedelta.md): The amount of east-to-west distance (measured in degrees) to display for the map region.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Map coordinates

- [MKCoordinateRegion](mkcoordinateregion.md): A rectangular geographic region that centers around a specific latitude and longitude.
- [MKMapRect](mkmaprect.md): A rectangular area on a two-dimensional map projection.
- [MKMapPoint](mkmappoint.md): A point on a two-dimensional map projection.
- [MKMapSize](mkmapsize.md): Width and height information on a two-dimensional map projection.
- [MKDistanceFormatter](mkdistanceformatter.md): A utility object that converts between a geographic distance and a string-based expression of that distance.

# MKCoordinateSpan (Objective-C)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The width and height of a map region.

## Declaration

```objectivec
typedef struct { ... } MKCoordinateSpan;
```

<a id="overview"></a>

## Overview

You use the delta values in this structure to indicate the desired zoom level of the map, with smaller delta values corresponding to a higher zoom level.

## Topics

### Getting the span coordinates

- [latitudeDelta](mkcoordinatespan/latitudedelta.md): The amount of north-to-south distance (measured in degrees) to display on the map.
- [longitudeDelta](mkcoordinatespan/longitudedelta.md): The amount of east-to-west distance (measured in degrees) to display for the map region.

## See Also

### Map coordinates

- [MKCoordinateRegion](mkcoordinateregion.md): A rectangular geographic region that centers around a specific latitude and longitude.
- [MKMapRect](mkmaprect.md): A rectangular area on a two-dimensional map projection.
- [MKMapPoint](mkmappoint.md): A point on a two-dimensional map projection.
- [MKMapSize](mkmapsize.md): Width and height information on a two-dimensional map projection.
- [MKDistanceFormatter](mkdistanceformatter.md): A utility object that converts between a geographic distance and a string-based expression of that distance.
