> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/camerazoomrange](https://developer.apple.com/documentation/mapkitjs/camerazoomrange)

# CameraZoomRange

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.23+

A minimum and maximum camera distance, in meters, from the center of the map.

## Declaration

```
class CameraZoomRange implements CameraZoomRangeData
```

## Topics

### Defining a zoom range

- [CameraZoomRange()](camerazoomrange/camerazoomrangeconstructor.md): Constructs an instance of a camera zoom range object with no minimum or maximum camera distance.
- [CameraZoomRange()](camerazoomrange/camerazoomrangeconstructor1.md): Creates an instance of a camera zoom range object with an object literal.
- [CameraZoomRange()](camerazoomrange/camerazoomrangeconstructor2.md): Creates an instance of a camera zoom range object with the specified numeric arguments that specify minimum and maximum camera distances.

### Setting minimum and maximum distances

- [minCameraDistance](camerazoomrange/mincameradistance.md): The minimum allowed distance of the camera from the center of the map in meters.
- [maxCameraDistance](camerazoomrange/maxcameradistance.md): The maximum allowed distance of the camera from the center of the map in meters.

### Instance Methods

- [copy()](camerazoomrange/copy.md): Returns a copy of the camera zoom region.

## Relationships

### Conforms To

- [CameraZoomRangeData](camerazoomrangedata.md)

## See Also

### Map units

- [MapPoint](mappoint.md): A location, in map units, of a point on the Earth’s surface projected onto a 2D map.
- [MapPointData](mappointdata.md): A plain object representation of a map point in map units.
- [MapRect](maprect.md): A rectangular region, in map units, of a two-dimensional map projection.
- [MapRectData](maprectdata.md): A plain object representation of a rectangular region, in map units, of a two-dimensional map projection.
- [MapSize](mapsize.md): A pair of values, in map units, that define the width and height of a rectangular area of a map projection.
- [MapSizeData](mapsizedata.md): A plain object representation of dimensions in map units.
- [CameraZoomRangeData](camerazoomrangedata.md): A plain object representation of a camera zoom range.
