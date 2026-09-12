> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapevent](https://developer.apple.com/documentation/mapkitjs/mapevent)

# MapEvent

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.18+

An object that represents a gesture the framework recognized on the map.

## Declaration

```
class MapEvent extends Event
```

## Topics

### Instance Properties

- [domEvents](mapevent/domevents.md): An array of DOM event objects that list the low-level events that led to the recognized gesture.
- [pointOnPage](mapevent/pointonpage.md): A DOM point with the coordinate of the event on the page.

## Relationships

### Inherits From

- Event

## See Also

### Map events

- [MapAnnotationDragEvent](mapannotationdragevent.md): An event object that the map object dispatches when someone drags an annotation.
- [MapAnnotationSelectionEvent](mapannotationselectionevent.md): An event object that the map object dispatches when someone selects or deselects an annotation.
- [MapOverlaySelectionEvent](mapoverlayselectionevent.md): An event object that the map view dispatches when someone selects or deselects an overlay.
- [MapUserLocationChangeEvent](mapuserlocationchangeevent.md): An event that represents a change in a person’s location.
- [MapUserLocationErrorEvent](mapuserlocationerrorevent.md): An event that indicates that MapKit JS is unable to acquire a person’s location.
