> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/tileoverlay/imagefortile](https://developer.apple.com/documentation/mapkitjs/tileoverlay/imagefortile)

# imageForTile

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 6.0+

A string, or callback function, that provides the requested tile.

## Declaration

```
get imageForTile(): TileOverlayUrlTemplate | TileOverlayImageCallback;
set imageForTile(
    imageForTile: TileOverlayUrlTemplate | TileOverlayImageCallback,
);
```

## Mentioned In

- [MapKit JS 6](../mapkit-js-6.md)
- [Migrating from Version 5 to Version 6](../migrating-from-version-5-to-version-6.md)

<a id="Discussion"></a>

## Discussion

Set this property to a [TileOverlayUrlTemplate](../tileoverlayurltemplate.md) to provide tiles by URL, or a [TileOverlayImageCallback](../tileoverlayimagecallback.md) to provide tiles as image sources directly.

MapKit JS sets `imageForTile` in the tile overlay constructor, and accesses or overrides it on the [TileOverlay](../tileoverlay.md) object directly.

## Topics

- [TileOverlayUrlTemplate](../tileoverlayurltemplate.md): A type that specifies the URL template for a tile overlay.
- [TileOverlayImageCallback](../tileoverlayimagecallback.md): A callback function that provides tile images for a tile overlay.

## See Also

### Customizing the tile overlay

- [data](data.md): A dictionary of custom properties to use with the URL template.
- [reload()](reload.md): Reloads the tile overlay for the displayed map region with the latest data values.
