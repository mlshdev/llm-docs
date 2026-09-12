> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/coordinate](https://developer.apple.com/documentation/mapkitjs/coordinate)

# Coordinate

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

An object representing the latitude and longitude for a point on the Earth’s surface.

## Declaration

```
class Coordinate implements CoordinateData
```

<a id="overview"></a>

## Overview

A [Coordinate](coordinate.md) is a point on a spherical representation of the Earth at a specific degree of latitude (`90` and -`90`) and longitude (`180` to -`180`) that you use to search for locations, place annotations, and other objects on the map.

## Topics

### Creating a coordinate

- [Coordinate()](coordinate/coordinateconstructor.md): Creates a coordinate object with the specified latitude and longitude.
- [CoordinateData](coordinatedata.md): A plain object representation of a coordinate.

### Defining the coordinates

- [latitude](coordinate/latitude.md): The latitude, in degrees.
- [longitude](coordinate/longitude.md): The longitude, in degrees.

### Comparing, copying, and converting coordinates

- [copy()](coordinate/copy.md): Returns a copy of the coordinate.
- [equals()](coordinate/equals.md): Returns a Boolean value indicating whether two coordinates are equal.
- [toMapPoint()](coordinate/tomappoint.md): Returns the map point that corresponds to the coordinate.
- [toUnwrappedMapPoint()](coordinate/tounwrappedmappoint.md): Returns the unwrapped map point that corresponds to the coordinate.

### Instance Methods

- [toString()](coordinate/tostring.md): Returns a string representation of the coordinate object.

## Relationships

### Conforms To

- [CoordinateData](coordinatedata.md)

## See Also

### Map coordinates

- [CoordinateData](coordinatedata.md): A plain object representation of a coordinate.
- [CoordinateRegion](coordinateregion.md): A rectangular area on a map that a center coordinate and a span define, in degrees of latitude and longitude.
- [CoordinateRegionData](coordinateregiondata.md): A plain object representation of a coordinate region.
- [CoordinateSpan](coordinatespan.md): The width and height of a map region.
- [CoordinateSpanData](coordinatespandata.md): A plain object representation of a coordinate span.
- [BoundingRegion](boundingregion.md): A rectangular area on a map, which coordinates of the rectangle’s northeast and southwest corners define.
