> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/tileoverlayerrorevent

# TileOverlayErrorEvent

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

An event object that notifies the developer of an error that occurred while loading tiles.

## Declaration

```
class TileOverlayErrorEvent extends Event
```

<a id="Discussion"></a>

## Discussion

[TileOverlay](tileoverlay.md) dispatches a `tile-error` event when an error occurs while loading tiles.

## Topics

### Instance Properties

- [tileOverlay](tileoverlayerrorevent/tileoverlay.md): The tile overlay object that dispatched the tile error event.
- [tileUrl](tileoverlayerrorevent/tileurl.md): The URL of the tile that failed to load.

## Relationships

### Inherits From

- Event
