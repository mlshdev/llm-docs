> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/maprect](https://developer.apple.com/documentation/mapkitjs/maprect)

# MapRect

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

A rectangular region, in map units, of a two-dimensional map projection.

## Declaration

```
class MapRect implements MapRectData
```

## Mentioned In

- [Migrating from Version 5 to Version 6](migrating-from-version-5-to-version-6.md)
- [MapKit JS 6](mapkit-js-6.md)

<a id="overview"></a>

## Overview

Use a `mapkit.MapRect` to represent a rectangular region within a map projection. Map units are a value from `0` to `1` that represent an interpolated location within the height or width of the full map projection.

## Topics

### Creating a map rectangle

- [MapRect()](maprect/maprectconstructor.md): Creates an object that represents a rectangular region of the map projection.
- [MapRectData](maprectdata.md): A plain object representation of a rectangular region, in map units, of a two-dimensional map projection.

### Defining a map rectangle

- [origin](maprect/origin.md): The origin point of a rectangle.
- [size](maprect/size.md): The width and height of a rectangle, starting from the origin point.

### Obtaining rectangle metrics

- [maxX()](maprect/maxx.md): Returns the maximum x-axis value of a rectangle.
- [maxY()](maprect/maxy.md): Returns the maximum y-axis value of a rectangle.
- [midX()](maprect/midx.md): Returns the midpoint along the x-axis of a rectangle.
- [midY()](maprect/midy.md): Returns the midpoint along the y-axis of a rectangle.
- [minX()](maprect/minx.md): Returns the minimum x-axis value of a rectangle.
- [minY()](maprect/miny.md): Returns the minimum y-axis value of a rectangle.

### Working with map rectangles

- [copy()](maprect/copy.md): Returns a copy of a map rectangle.
- [equals()](maprect/equals.md): Compares whether two map rectangles are equal.
- [scale()](maprect/scale.md): Returns a scaled map rectangle for a map location.
- [toCoordinateRegion()](maprect/tocoordinateregion.md): Returns the region that corresponds to a map rectangle.

### Instance Methods

- [toString()](maprect/tostring.md): Returns a string representation of the map rectangle object.

## Relationships

### Conforms To

- [MapRectData](maprectdata.md)

## See Also

### Map units

- [MapPoint](mappoint.md): A location, in map units, of a point on the Earth’s surface projected onto a 2D map.
- [MapPointData](mappointdata.md): A plain object representation of a map point in map units.
- [MapRectData](maprectdata.md): A plain object representation of a rectangular region, in map units, of a two-dimensional map projection.
- [MapSize](mapsize.md): A pair of values, in map units, that define the width and height of a rectangular area of a map projection.
- [MapSizeData](mapsizedata.md): A plain object representation of dimensions in map units.
- [CameraZoomRange](camerazoomrange.md): A minimum and maximum camera distance, in meters, from the center of the map.
- [CameraZoomRangeData](camerazoomrangedata.md): A plain object representation of a camera zoom range.
