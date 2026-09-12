> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapannotationselectionevent](https://developer.apple.com/documentation/mapkitjs/mapannotationselectionevent)

# MapAnnotationSelectionEvent

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

An event object that the map object dispatches when someone selects or deselects an annotation.

## Declaration

```
class MapAnnotationSelectionEvent extends Event
```

<a id="Discussion"></a>

## Discussion

The [Map](map.md) dispatches a [MapAnnotationSelectionEvent](mapannotationselectionevent.md) when someone selects or deselects an annotation. The event type can be `select` or `deselect`.

## Topics

### Instance Properties

- [annotation](mapannotationselectionevent/annotation.md): The annotation that someone selected or deselected.

## Relationships

### Inherits From

- Event

## See Also

### Map events

- [MapEvent](mapevent.md): An object that represents a gesture the framework recognized on the map.
- [MapAnnotationDragEvent](mapannotationdragevent.md): An event object that the map object dispatches when someone drags an annotation.
- [MapOverlaySelectionEvent](mapoverlayselectionevent.md): An event object that the map view dispatches when someone selects or deselects an overlay.
- [MapUserLocationChangeEvent](mapuserlocationchangeevent.md): An event that represents a change in a person’s location.
- [MapUserLocationErrorEvent](mapuserlocationerrorevent.md): An event that indicates that MapKit JS is unable to acquire a person’s location.
