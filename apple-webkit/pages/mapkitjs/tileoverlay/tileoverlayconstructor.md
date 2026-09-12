> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/tileoverlay/tileoverlayconstructor](https://developer.apple.com/documentation/mapkitjs/tileoverlay/tileoverlayconstructor)

# new TileOverlay(imageForTile, options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.0+

Creates a tile overlay with a URL template or image callback and style options.

## Declaration

```
constructor(
    imageForTile: TileOverlayUrlTemplate | TileOverlayImageCallback,
    options?: TileOverlayConstructorOptions,
);
```

## Parameters

- `imageForTile`: A [TileOverlayUrlTemplate](../tileoverlayurltemplate.md) string or URL callback, or a [TileOverlayImageCallback](../tileoverlayimagecallback.md) that returns image sources directly. MapKit JS requests new tiles when the map zooms or pans, the display changes, or the custom [data](data.md) properties change.
- `options`: An optional [TileOverlayConstructorOptions](../tileoverlayconstructoroptions.md) object literal of properties for initializing the tile overlay.

## See Also

### Creating a tile overlay

- [TileOverlayConstructorOptions](../tileoverlayconstructoroptions.md): Attributes for initializing a tile overlay, including minimum and maximum zoom, opacity, and custom data.
- [TileOverlayUrlTemplate](../tileoverlayurltemplate.md): A type that specifies the URL template for a tile overlay.
- [TileOverlayImageCallback](../tileoverlayimagecallback.md): A callback function that provides tile images for a tile overlay.
