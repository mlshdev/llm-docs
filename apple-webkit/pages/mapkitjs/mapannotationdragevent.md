> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapannotationdragevent](https://developer.apple.com/documentation/mapkitjs/mapannotationdragevent)

# MapAnnotationDragEvent

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

An event object that the map object dispatches when someone drags an annotation.

## Declaration

```
class MapAnnotationDragEvent extends Event
```

<a id="Discussion"></a>

## Discussion

The [Map](map.md) dispatches a [MapAnnotationDragEvent](mapannotationdragevent.md) when someone dragging an annotation. The event type can be `drag-start`, `dragging`, or `drag-end`.

## Topics

### Instance Properties

- [annotation](mapannotationdragevent/annotation.md): The annotation that a person dragged.
- [coordinate](mapannotationdragevent/coordinate.md): The coordinate of the annotation while someone is dragging it.

## Relationships

### Inherits From

- Event

## See Also

### Map events

- [MapEvent](mapevent.md): An object that represents a gesture the framework recognized on the map.
- [MapAnnotationSelectionEvent](mapannotationselectionevent.md): An event object that the map object dispatches when someone selects or deselects an annotation.
- [MapOverlaySelectionEvent](mapoverlayselectionevent.md): An event object that the map view dispatches when someone selects or deselects an overlay.
- [MapUserLocationChangeEvent](mapuserlocationchangeevent.md): An event that represents a change in a person’s location.
- [MapUserLocationErrorEvent](mapuserlocationerrorevent.md): An event that indicates that MapKit JS is unable to acquire a person’s location.
