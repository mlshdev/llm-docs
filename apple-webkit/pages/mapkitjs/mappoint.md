> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mappoint](https://developer.apple.com/documentation/mapkitjs/mappoint)

# MapPoint

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

A location, in map units, of a point on the Earth’s surface projected onto a 2D map.

## Declaration

```
class MapPoint implements MapPointData
```

<a id="overview"></a>

## Overview

Map units are a value from `0` to `1` that represent an interpolated location within the height or width of the full map projection. On a two-dimensional map, the upper-left corner of the map projection has the coordinate (`0,` `0`), and the lower-right corner of the map projection has the coordinate (`1,` `1`).

As another point of reference, `mapkit.MapPoint(0.5,` `0.5)` corresponds to the center of the map, which MapKit JS also represents as the coordinate `mapkit.Coordinate(0,` `0)`.

## Topics

### Creating a map point

- [MapPoint()](mappoint/mappointconstructor.md): Creates a map location.
- [MapPointData](mappointdata.md): A plain object representation of a map point in map units.

### Defining a map point

- [x](mappoint/x.md): The location of the map point along the map’s x-axis.
- [y](mappoint/y.md): The location of the map point along the map’s y-axis.
- [z](mappoint/z.md): The z component of a map point.
- [w](mappoint/w.md): The w component of a map point.

### Working with map points

- [copy()](mappoint/copy.md): Returns a copy of the location.
- [equals()](mappoint/equals.md): Indicates whether two map points are equal.
- [toCoordinate()](mappoint/tocoordinate.md): Converts a map point into a coordinate with latitude and longitude.

### Instance Methods

- [toString()](mappoint/tostring.md): Returns a string representation of the map point object.

## Relationships

### Conforms To

- [MapPointData](mappointdata.md)

## See Also

### Map units

- [MapPointData](mappointdata.md): A plain object representation of a map point in map units.
- [MapRect](maprect.md): A rectangular region, in map units, of a two-dimensional map projection.
- [MapRectData](maprectdata.md): A plain object representation of a rectangular region, in map units, of a two-dimensional map projection.
- [MapSize](mapsize.md): A pair of values, in map units, that define the width and height of a rectangular area of a map projection.
- [MapSizeData](mapsizedata.md): A plain object representation of dimensions in map units.
- [CameraZoomRange](camerazoomrange.md): A minimum and maximum camera distance, in meters, from the center of the map.
- [CameraZoomRangeData](camerazoomrangedata.md): A plain object representation of a camera zoom range.
