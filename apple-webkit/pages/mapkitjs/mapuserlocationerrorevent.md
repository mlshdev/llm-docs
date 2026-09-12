> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapuserlocationerrorevent](https://developer.apple.com/documentation/mapkitjs/mapuserlocationerrorevent)

# MapUserLocationErrorEvent

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

An event that indicates that MapKit JS is unable to acquire a person’s location.

## Declaration

```
class MapUserLocationErrorEvent extends Event
```

## Topics

### Instance Properties

- [code](mapuserlocationerrorevent/code.md): The code indicating why location acquisition failed.
- [message](mapuserlocationerrorevent/message.md): The human-readable error message of the user location error for the developer.

## Relationships

### Inherits From

- Event

## See Also

### Map events

- [MapEvent](mapevent.md): An object that represents a gesture the framework recognized on the map.
- [MapAnnotationDragEvent](mapannotationdragevent.md): An event object that the map object dispatches when someone drags an annotation.
- [MapAnnotationSelectionEvent](mapannotationselectionevent.md): An event object that the map object dispatches when someone selects or deselects an annotation.
- [MapOverlaySelectionEvent](mapoverlayselectionevent.md): An event object that the map view dispatches when someone selects or deselects an overlay.
- [MapUserLocationChangeEvent](mapuserlocationchangeevent.md): An event that represents a change in a person’s location.
