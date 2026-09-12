> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapuserlocationchangeevent](https://developer.apple.com/documentation/mapkitjs/mapuserlocationchangeevent)

# MapUserLocationChangeEvent

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

An event that represents a change in a person’s location.

## Declaration

```
class MapUserLocationChangeEvent extends Event
```

<a id="Discussion"></a>

## Discussion

MapKit JS sends this event when [showsUserLocation](map/showsuserlocation.md) is true and the map acquires a person’s location, or after an automatic update.

## Topics

### Instance Properties

- [coordinate](mapuserlocationchangeevent/coordinate.md): The coordinate of a person’s location.
- [floorLevel](mapuserlocationchangeevent/floorlevel.md): The current floor the user is on.
- [timestamp](mapuserlocationchangeevent/timestamp.md): The timestamp that contains the time corresponding to the location acquisition.

## Relationships

### Inherits From

- Event

## See Also

### Map events

- [MapEvent](mapevent.md): An object that represents a gesture the framework recognized on the map.
- [MapAnnotationDragEvent](mapannotationdragevent.md): An event object that the map object dispatches when someone drags an annotation.
- [MapAnnotationSelectionEvent](mapannotationselectionevent.md): An event object that the map object dispatches when someone selects or deselects an annotation.
- [MapOverlaySelectionEvent](mapoverlayselectionevent.md): An event object that the map view dispatches when someone selects or deselects an overlay.
- [MapUserLocationErrorEvent](mapuserlocationerrorevent.md): An event that indicates that MapKit JS is unable to acquire a person’s location.
