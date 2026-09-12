> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapsize](https://developer.apple.com/documentation/mapkitjs/mapsize)

# MapSize

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

A pair of values, in map units, that define the width and height of a rectangular area of a map projection.

## Declaration

```
class MapSize implements MapSizeData
```

<a id="overview"></a>

## Overview

Use a map size to represent a subset of a map projection. Map units are a value from `0` to `1` that represent an interpolated location within the height or width of the full map projection.

## Topics

### Creating a map size

- [MapSize()](mapsize/mapsizeconstructor.md): Creates an object containing the width and height of a projected coordinate span.
- [MapSizeData](mapsizedata.md): A plain object representation of dimensions in map units.

### Defining a map size

- [height](mapsize/height.md): The height of the map size in map units.
- [width](mapsize/width.md): The width of the map size in map units.

### Copying and comparing map sizes

- [copy()](mapsize/copy.md): Returns a copy of the map size object.
- [equals()](mapsize/equals.md): Compares the sizes of two maps and indicates whether they’re of equal value.

### Instance Methods

- [toString()](mapsize/tostring.md): Returns a string representation of the map size object.

## Relationships

### Conforms To

- [MapSizeData](mapsizedata.md)

## See Also

### Map units

- [MapPoint](mappoint.md): A location, in map units, of a point on the Earth’s surface projected onto a 2D map.
- [MapPointData](mappointdata.md): A plain object representation of a map point in map units.
- [MapRect](maprect.md): A rectangular region, in map units, of a two-dimensional map projection.
- [MapRectData](maprectdata.md): A plain object representation of a rectangular region, in map units, of a two-dimensional map projection.
- [MapSizeData](mapsizedata.md): A plain object representation of dimensions in map units.
- [CameraZoomRange](camerazoomrange.md): A minimum and maximum camera distance, in meters, from the center of the map.
- [CameraZoomRangeData](camerazoomrangedata.md): A plain object representation of a camera zoom range.
