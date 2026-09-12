> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/boundingregion](https://developer.apple.com/documentation/mapkitjs/boundingregion)

# BoundingRegion

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

A rectangular area on a map, which coordinates of the rectangle’s northeast and southwest corners define.

## Declaration

```
class BoundingRegion
```

<a id="overview"></a>

## Overview

Similar to a [CoordinateRegion](coordinateregion.md), [BoundingRegion](boundingregion.md) represents a rectangular area on the 2D-projected surface. However, instead of describing a center coordinate and a span, MapKit JS defines a bounding region by the coordinates of the rectangle’s northeast and southwest corners.

## Topics

### Creating a bounding region

- [BoundingRegion()](boundingregion/boundingregionconstructor.md): Creates a rectangular bounding region, which the latitude and longitude coordinates of the rectangle’s northeast and southwest corners define.

### Defining a bounding region

- [eastLongitude](boundingregion/eastlongitude.md): The east longitude of the bounding region.
- [northLatitude](boundingregion/northlatitude.md): The north latitude of the bounding region.
- [southLatitude](boundingregion/southlatitude.md): The south latitude of the bounding region.
- [westLongitude](boundingregion/westlongitude.md): The west longitude of the bounding region.

### Copying and converting regions

- [copy()](boundingregion/copy.md): Returns a copy of the calling bounding region.
- [toCoordinateRegion()](boundingregion/tocoordinateregion.md): Returns the coordinate region that corresponds to the calling bounding region.

### Instance Methods

- [toString()](boundingregion/tostring.md): Returns a string representation of the bounding region object.

## See Also

### Map coordinates

- [Coordinate](coordinate.md): An object representing the latitude and longitude for a point on the Earth’s surface.
- [CoordinateData](coordinatedata.md): A plain object representation of a coordinate.
- [CoordinateRegion](coordinateregion.md): A rectangular area on a map that a center coordinate and a span define, in degrees of latitude and longitude.
- [CoordinateRegionData](coordinateregiondata.md): A plain object representation of a coordinate region.
- [CoordinateSpan](coordinatespan.md): The width and height of a map region.
- [CoordinateSpanData](coordinatespandata.md): A plain object representation of a coordinate span.
