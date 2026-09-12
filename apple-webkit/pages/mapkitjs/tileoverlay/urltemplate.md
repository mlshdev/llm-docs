> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/tileoverlay/urltemplate](https://developer.apple.com/documentation/mapkitjs/tileoverlay/urltemplate)

# urlTemplate

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+ (deprecated in 6.0)

A string, or callback function, that provides the requested tile.

> Use [imageForTile](imagefortile.md) instead, which supports both URL templates and [TileOverlayImageCallback](../tileoverlayimagecallback.md) functions.

## Declaration

```
get urlTemplate(): TileOverlayUrlTemplate | TileOverlayImageCallback;
set urlTemplate(
    urlTemplate: TileOverlayUrlTemplate | TileOverlayImageCallback,
);
```

<a id="Discussion"></a>

## Discussion

MapKit JS sets the `urlTemplate` in the tile overlay constructor, and accesses or overrides it on the [TileOverlay](../tileoverlay.md) object directly.

## Topics

- [TileOverlayUrlTemplate](../tileoverlayurltemplate.md): A type that specifies the URL template for a tile overlay.
