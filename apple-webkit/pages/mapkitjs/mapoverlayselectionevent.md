> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapoverlayselectionevent](https://developer.apple.com/documentation/mapkitjs/mapoverlayselectionevent)

# MapOverlaySelectionEvent

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

An event object that the map view dispatches when someone selects or deselects an overlay.

## Declaration

```
class MapOverlaySelectionEvent extends Event
```

<a id="Discussion"></a>

## Discussion

[Map](map.md) dispatches a [MapOverlaySelectionEvent](mapoverlayselectionevent.md) when someone selects or deselects an overlay. The event type can be `select` or `deselect`.

## Topics

### Instance Properties

- [overlay](mapoverlayselectionevent/overlay.md): The overlay that the framework selected or deselected.

## Relationships

### Inherits From

- Event

## See Also

### Map events

- [MapEvent](mapevent.md): An object that represents a gesture the framework recognized on the map.
- [MapAnnotationDragEvent](mapannotationdragevent.md): An event object that the map object dispatches when someone drags an annotation.
- [MapAnnotationSelectionEvent](mapannotationselectionevent.md): An event object that the map object dispatches when someone selects or deselects an annotation.
- [MapUserLocationChangeEvent](mapuserlocationchangeevent.md): An event that represents a change in a person’s location.
- [MapUserLocationErrorEvent](mapuserlocationerrorevent.md): An event that indicates that MapKit JS is unable to acquire a person’s location.
