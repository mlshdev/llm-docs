> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/coordinateregion](https://developer.apple.com/documentation/mapkitjs/coordinateregion)

# CoordinateRegion

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

A rectangular area on a map that a center coordinate and a span define, in degrees of latitude and longitude.

## Declaration

```
class CoordinateRegion implements CoordinateRegionData
```

## Mentioned In

- [MapKit JS 5](mapkit-js-5.md)
- [Migrating from Version 5 to Version 6](migrating-from-version-5-to-version-6.md)

## Topics

### Creating a coordinate region

- [CoordinateRegion()](coordinateregion/coordinateregionconstructor.md): A rectangular geographic region that centers around a latitude and longitude coordinate.
- [CoordinateRegionData](coordinateregiondata.md): A plain object representation of a coordinate region.

### Defining the region

- [center](coordinateregion/center.md): The center point of the region.
- [span](coordinateregion/span.md): The horizontal and vertical span representing the amount of map to display.

### Inspecting the region

- [radius](coordinateregion/radius.md): The distance provided in meters or the longest distance derived from the center point to the region’s bounding box.

### Comparing, copying, and converting regions

- [copy()](coordinateregion/copy.md): Returns a copy of the calling coordinate region.
- [equals()](coordinateregion/equals.md): Returns a Boolean value indicating whether two regions are equal.
- [toBoundingRegion()](coordinateregion/toboundingregion.md): Returns the bounding region that corresponds to the specified coordinate region.
- [toMapRect()](coordinateregion/tomaprect.md): Deprecated. Returns the map rectangle that corresponds to the calling coordinate region.

### Instance Methods

- [toString()](coordinateregion/tostring.md): Returns a string representation of the coordinate region object.

## Relationships

### Conforms To

- [CoordinateRegionData](coordinateregiondata.md)

## See Also

### Map coordinates

- [Coordinate](coordinate.md): An object representing the latitude and longitude for a point on the Earth’s surface.
- [CoordinateData](coordinatedata.md): A plain object representation of a coordinate.
- [CoordinateRegionData](coordinateregiondata.md): A plain object representation of a coordinate region.
- [CoordinateSpan](coordinatespan.md): The width and height of a map region.
- [CoordinateSpanData](coordinatespandata.md): A plain object representation of a coordinate span.
- [BoundingRegion](boundingregion.md): A rectangular area on a map, which coordinates of the rectangle’s northeast and southwest corners define.
